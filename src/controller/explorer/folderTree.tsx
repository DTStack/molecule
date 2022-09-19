import 'reflect-metadata';
import { container, singleton } from 'tsyringe';
import cloneDeep from 'lodash/cloneDeep';
import { Controller } from 'mo/react/controller';
import { IMenuItemProps } from 'mo/components/menu';
import {
    FolderTreeEvent,
    FileTypes,
    FileType,
    IFolderTreeNodeProps,
} from 'mo/model';
import {
    BuiltinService,
    FolderTreeService,
    IBuiltinService,
    IFolderTreeService,
} from 'mo/services';
import type { UniqueId } from 'mo/common/types';

export interface IFolderTreeController extends Partial<Controller> {
    readonly createTreeNode?: (type: FileType, id?: UniqueId) => void;
    readonly onClickContextMenu?: (
        contextMenu: IMenuItemProps,
        treeNode?: IFolderTreeNodeProps
    ) => void;
    readonly onUpdateFileName?: (file: IFolderTreeNodeProps) => void;
    readonly onSelectFile?: (file?: IFolderTreeNodeProps) => void;
    readonly onDropTree?: (
        source: IFolderTreeNodeProps,
        target: IFolderTreeNodeProps
    ) => void;
    readonly onLoadData?: (treeNode: IFolderTreeNodeProps) => Promise<void>;
    readonly onExpandKeys?: (expandKeys: UniqueId[]) => void;
    readonly onRightClick?: (
        treeNode: IFolderTreeNodeProps
    ) => IMenuItemProps[];
}

@singleton()
export class FolderTreeController
    extends Controller
    implements IFolderTreeController
{
    private readonly folderTreeService: IFolderTreeService;
    private readonly builtinService: IBuiltinService;

    constructor() {
        super();
        this.folderTreeService = container.resolve(FolderTreeService);
        this.builtinService = container.resolve(BuiltinService);
    }

    private getContextMenu = (treeNode: IFolderTreeNodeProps) => {
        const menus: IMenuItemProps[] = cloneDeep(
            this.folderTreeService.getState().folderTree?.contextMenu || []
        );

        const fileContextMenu = this.folderTreeService.getFileContextMenu();
        const folderContextMenu = this.folderTreeService.getFolderContextMenu();
        const { ROOT_FOLDER_CONTEXT_MENU } = this.builtinService.getModules();
        switch (treeNode.fileType) {
            case FileTypes.File: {
                menus.unshift(...fileContextMenu);
                break;
            }
            case FileTypes.Folder: {
                menus.unshift(...folderContextMenu);
                break;
            }
            case FileTypes.RootFolder: {
                // In general, root folder have no contextMenu, because it can't be clicked
                return folderContextMenu.concat(
                    ROOT_FOLDER_CONTEXT_MENU || []
                ) as IMenuItemProps[];
            }
            default:
                break;
        }

        return menus;
    };

    public initView() {
        const {
            FILE_CONTEXT_MENU,
            BASE_CONTEXT_MENU,
            COMMON_CONTEXT_MENU,
            FOLDER_PANEL_CONTEXT_MENU,
        } = this.builtinService.getModules();
        if (FILE_CONTEXT_MENU) {
            this.folderTreeService.setFileContextMenu(FILE_CONTEXT_MENU);
        }
        if (BASE_CONTEXT_MENU) {
            this.folderTreeService.setFolderContextMenu(BASE_CONTEXT_MENU);
        }

        this.folderTreeService.setState({
            folderTree: {
                contextMenu: COMMON_CONTEXT_MENU || [],
                current: null,
                folderPanelContextMenu: FOLDER_PANEL_CONTEXT_MENU || [],
                data: [],
                expandKeys: [],
            },
        });
    }

    public createTreeNode = (type: FileType, id?: UniqueId) => {
        if (typeof id === 'undefined') {
            const folderTreeState = this.folderTreeService.getState();
            const { data, current } = folderTreeState?.folderTree || {};
            // The current selected node id or the first root node
            const nodeId =
                typeof current?.id === 'undefined'
                    ? data?.[0]?.id
                    : current?.id;
            this.emit(FolderTreeEvent.onCreate, type, nodeId);
        } else {
            this.emit(FolderTreeEvent.onCreate, type, id);
        }
    };

    public readonly onClickContextMenu = (
        contextMenu: IMenuItemProps,
        treeNode?: IFolderTreeNodeProps
    ) => {
        const menuId = contextMenu.id;
        const {
            RENAME_COMMAND_ID,
            DELETE_COMMAND_ID,
            NEW_FILE_COMMAND_ID,
            NEW_FOLDER_COMMAND_ID,
            OPEN_TO_SIDE_COMMAND_ID,
        } = this.builtinService.getConstants();
        switch (menuId) {
            case RENAME_COMMAND_ID: {
                const { id: nodeId } = treeNode!;
                this.onRename(nodeId);
                break;
            }
            case DELETE_COMMAND_ID: {
                const { id: nodeId } = treeNode!;
                this.onDelete(nodeId);
                break;
            }
            case NEW_FILE_COMMAND_ID: {
                const { id } = treeNode!;
                this.createTreeNode(FileTypes.File, id);
                break;
            }
            case NEW_FOLDER_COMMAND_ID: {
                const { id } = treeNode!;
                this.createTreeNode(FileTypes.Folder, id);
                break;
            }
            case OPEN_TO_SIDE_COMMAND_ID: {
                this.onSelectFile(treeNode!);
                break;
            }
            default: {
                this.onContextMenuClick(contextMenu, treeNode);
            }
        }
    };

    public onRightClick = (treeNode: IFolderTreeNodeProps) => {
        const menus = this.getContextMenu(treeNode);
        this.emit(FolderTreeEvent.onRightClick, treeNode, menus);

        return menus;
    };

    public readonly onDropTree = (
        source: IFolderTreeNodeProps,
        target: IFolderTreeNodeProps
    ) => {
        this.emit(FolderTreeEvent.onDrop, source, target);
    };

    public onUpdateFileName = (file: IFolderTreeNodeProps) => {
        this.emit(FolderTreeEvent.onUpdateFileName, file);
    };

    public readonly onSelectFile = (file?: IFolderTreeNodeProps) => {
        this.folderTreeService.setActive(file?.id);
        // editing file won't emit onSelectFile
        if (file && !file.isEditable && file.fileType === FileTypes.File) {
            this.emit(FolderTreeEvent.onSelectFile, file);
        }
    };

    private onContextMenuClick = (
        contextMenu: IMenuItemProps,
        treeNode?: IFolderTreeNodeProps
    ) => {
        this.emit(FolderTreeEvent.onContextMenuClick, contextMenu, treeNode);
    };

    private onRename = (id: UniqueId) => {
        this.emit(FolderTreeEvent.onRename, id);
    };

    private onDelete = (id: UniqueId) => {
        this.emit(FolderTreeEvent.onDelete, id);
    };

    public onLoadData = (treeNode: IFolderTreeNodeProps) => {
        const count = this.count(FolderTreeEvent.onLoadData);
        if (count) {
            // define current treeNode to be loaded
            this.folderTreeService.setLoadedKeys([
                ...this.folderTreeService.getLoadedKeys(),
                treeNode.id.toString(),
            ]);
            return new Promise<void>((resolve, reject) => {
                const callback = (node: IFolderTreeNodeProps) => {
                    this.folderTreeService.update(node);
                    resolve();
                };
                this.emit(FolderTreeEvent.onLoadData, treeNode, callback);
            });
        } else {
            return Promise.resolve();
        }
    };

    public onExpandKeys = (expandedKeys: UniqueId[]) => {
        this.emit(FolderTreeEvent.onExpandKeys, expandedKeys);
    };
}
