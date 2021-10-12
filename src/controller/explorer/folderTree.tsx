import 'reflect-metadata';
import { container, singleton } from 'tsyringe';
import cloneDeep from 'lodash/cloneDeep';
import { Controller } from 'mo/react/controller';
import { IMenuItemProps } from 'mo/components/menu';
import {
    ROOT_FOLDER_CONTEXT_MENU,
    NEW_FILE_COMMAND_ID,
    NEW_FOLDER_COMMAND_ID,
    RENAME_COMMAND_ID,
    DELETE_COMMAND_ID,
    OPEN_TO_SIDE_COMMAND_ID,
    FolderTreeEvent,
    FileTypes,
    FileType,
    IFolderTreeNodeProps,
} from 'mo/model';
import { FolderTreeService, IFolderTreeService } from 'mo/services';

export interface IFolderTreeController {
    readonly createTreeNode?: (type: FileType) => void;
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
    readonly onRightClick?: (
        treeNode: IFolderTreeNodeProps
    ) => IMenuItemProps[];
}

@singleton()
export class FolderTreeController
    extends Controller
    implements IFolderTreeController {
    private readonly folderTreeService: IFolderTreeService;

    constructor() {
        super();
        this.folderTreeService = container.resolve(FolderTreeService);
    }

    private getContextMenu = (treeNode: IFolderTreeNodeProps) => {
        const menus: IMenuItemProps[] = cloneDeep(
            this.folderTreeService.getState().folderTree?.contextMenu || []
        );

        const fileContextMenu = this.folderTreeService.getFileContextMenu();
        const folderContextMenu = this.folderTreeService.getFolderContextMenu();
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
                    ROOT_FOLDER_CONTEXT_MENU
                ) as IMenuItemProps[];
            }
            default:
                break;
        }

        return menus;
    };

    public createTreeNode = (type: FileType) => {
        const folderTreeState = this.folderTreeService.getState();
        const { data, current } = folderTreeState?.folderTree || {};
        // The current selected node id or the first root node
        const nodeId = current?.id || data?.[0]?.id;
        this.emit(FolderTreeEvent.onCreate, type, nodeId);
    };

    public readonly onClickContextMenu = (
        contextMenu: IMenuItemProps,
        treeNode?: IFolderTreeNodeProps
    ) => {
        const menuId = contextMenu.id;
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
                this.createTreeNode(FileTypes.File);
                break;
            }
            case NEW_FOLDER_COMMAND_ID: {
                this.createTreeNode(FileTypes.Folder);
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
        // this.folderTreeService.onDropTree(treeNode);
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
}
