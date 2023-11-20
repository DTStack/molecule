import { createElement } from 'react';
import FolderTree from 'mo/client/slots/folderTree';
import { BaseController } from 'mo/glue';
import { FolderTreeEvent } from 'mo/models/folderTree';
import type { BuiltinService } from 'mo/services/builtin';
import type { ExplorerService } from 'mo/services/explorer';
import type { FolderTreeService } from 'mo/services/folderTree';
import type { KeyboardEventHandler, UniqueId } from 'mo/types';
import type { TreeNodeModel } from 'mo/utils/tree';
import { inject, injectable } from 'tsyringe';

export interface IFolderTreeController extends BaseController {
    // readonly createTreeNode?: (type: FileType, id?: UniqueId) => void;
    // readonly onClickContextMenu?: (
    //     contextMenu: IMenuItemProps,
    //     treeNode?: IFolderTreeNodeProps
    // ) => void;
    readonly onUpdateFileName?: (file: TreeNodeModel<any>) => void;
    readonly onSelectFile?: (file?: TreeNodeModel<any>) => void;
    readonly onDropTree?: (source: TreeNodeModel<any>, target: TreeNodeModel<any>) => void;
    readonly onLoadData?: (treeNode: TreeNodeModel<any>) => Promise<void>;
    readonly onExpandKeys?: (expandKeys: UniqueId[]) => void;
    readonly onFileKeyDown?: KeyboardEventHandler;
    // readonly onRightClick?: (treeNode: IFolderTreeNodeProps) => IMenuItemProps[];
}

@injectable()
export class FolderTreeController extends BaseController implements IFolderTreeController {
    // private readonly folderTreeService: IFolderTreeService;
    // private readonly builtinService: IBuiltinService;

    constructor(
        @inject('builtin') private builtin: BuiltinService,
        @inject('folderTree') private folderTree: FolderTreeService,
        @inject('explorer') private explorer: ExplorerService
    ) {
        super();
        // this.folderTreeService = container.resolve(FolderTreeService);
        // this.builtinService = container.resolve(BuiltinService);
        this.initView();
    }

    // private getContextMenu = (treeNode: IFolderTreeNodeProps) => {
    //     const menus: IMenuItemProps[] = cloneDeep(
    //         this.folderTreeService.getState().folderTree?.contextMenu || []
    //     );

    //     const fileContextMenu = this.folderTreeService.getFileContextMenu();
    //     const folderContextMenu = this.folderTreeService.getFolderContextMenu();
    //     const { ROOT_FOLDER_CONTEXT_MENU } = this.builtinService.getModules();
    //     switch (treeNode.fileType) {
    //         case FileTypes.File: {
    //             menus.unshift(...fileContextMenu);
    //             break;
    //         }
    //         case FileTypes.Folder: {
    //             menus.unshift(...folderContextMenu);
    //             break;
    //         }
    //         case FileTypes.RootFolder: {
    //             // In general, root folder have no contextMenu, because it can't be clicked
    //             return folderContextMenu.concat(ROOT_FOLDER_CONTEXT_MENU || []) as IMenuItemProps[];
    //         }
    //         default:
    //             break;
    //     }

    //     return menus;
    // };

    private initView() {
        const { builtInExplorerFolderPanel } = this.builtin.getState().modules;
        this.explorer.addPanel({
            ...builtInExplorerFolderPanel,
            render: (panel) => createElement(FolderTree, { panel, ...this }),
        });
        // const {
        //     FILE_CONTEXT_MENU,
        //     BASE_CONTEXT_MENU,
        //     COMMON_CONTEXT_MENU,
        //     FOLDER_PANEL_CONTEXT_MENU,
        // } = this.builtinService.getModules();
        // if (FILE_CONTEXT_MENU) {
        //     this.folderTreeService.setFileContextMenu(FILE_CONTEXT_MENU);
        // }
        // if (BASE_CONTEXT_MENU) {
        //     this.folderTreeService.setFolderContextMenu(BASE_CONTEXT_MENU);
        // }
        // this.folderTreeService.setState({
        //     folderTree: {
        //         contextMenu: COMMON_CONTEXT_MENU || [],
        //         current: null,
        //         folderPanelContextMenu: FOLDER_PANEL_CONTEXT_MENU || [],
        //         data: [],
        //         expandKeys: [],
        //     },
        // });
    }

    // public createTreeNode = (type: FileType, id?: UniqueId) => {
    //     if (typeof id === 'undefined') {
    //         const folderTreeState = this.folderTreeService.getState();
    //         const { data, current } = folderTreeState?.folderTree || {};
    //         // The current selected node id or the first root node
    //         const nodeId = typeof current?.id === 'undefined' ? data?.[0]?.id : current?.id;
    //         this.emit(FolderTreeEvent.onCreate, type, nodeId);
    //     } else {
    //         this.emit(FolderTreeEvent.onCreate, type, id);
    //     }
    // };

    // public readonly onClickContextMenu = (
    //     contextMenu: IMenuItemProps,
    //     treeNode?: IFolderTreeNodeProps
    // ) => {
    //     const menuId = contextMenu.id;
    //     const {
    //         RENAME_COMMAND_ID,
    //         DELETE_COMMAND_ID,
    //         NEW_FILE_COMMAND_ID,
    //         NEW_FOLDER_COMMAND_ID,
    //         OPEN_TO_SIDE_COMMAND_ID,
    //     } = this.builtinService.getConstants();
    //     switch (menuId) {
    //         case RENAME_COMMAND_ID: {
    //             const { id: nodeId } = treeNode!;
    //             this.onRename(nodeId);
    //             break;
    //         }
    //         case DELETE_COMMAND_ID: {
    //             const { id: nodeId } = treeNode!;
    //             this.onDelete(nodeId);
    //             break;
    //         }
    //         case NEW_FILE_COMMAND_ID: {
    //             const { id } = treeNode!;
    //             this.createTreeNode(FileTypes.File, id);
    //             break;
    //         }
    //         case NEW_FOLDER_COMMAND_ID: {
    //             const { id } = treeNode!;
    //             this.createTreeNode(FileTypes.Folder, id);
    //             break;
    //         }
    //         case OPEN_TO_SIDE_COMMAND_ID: {
    //             this.onSelectFile(treeNode!);
    //             break;
    //         }
    //         default: {
    //             this.onContextMenuClick(contextMenu, treeNode);
    //         }
    //     }
    // };

    // public onRightClick = (treeNode: IFolderTreeNodeProps) => {
    //     const menus = this.getContextMenu(treeNode);
    //     this.emit(FolderTreeEvent.onRightClick, treeNode, menus);

    //     return menus;
    // };

    public readonly onDropTree = (source: TreeNodeModel<any>, target: TreeNodeModel<any>) => {
        this.emit(FolderTreeEvent.onDrop, source, target);
    };

    public onUpdateFileName = (file: TreeNodeModel<any>) => {
        this.emit(FolderTreeEvent.onUpdateFileName, file);
    };

    public readonly onSelectFile = (file?: TreeNodeModel<any>) => {
        this.folderTree.setActive(file?.id);
        // editing file won't emit onSelectFile
        if (file && file.id !== this.folderTree.getState().editing && file.fileType === 'File') {
            this.emit(FolderTreeEvent.onSelectFile, file);
        }
    };

    // private onContextMenuClick = (contextMenu: IMenuItemProps, treeNode?: IFolderTreeNodeProps) => {
    //     this.emit(FolderTreeEvent.onContextMenuClick, contextMenu, treeNode);
    // };

    // private onRename = (id: UniqueId) => {
    //     this.emit(FolderTreeEvent.onRename, id);
    // };

    // private onDelete = (id: UniqueId) => {
    //     this.emit(FolderTreeEvent.onDelete, id);
    // };

    public onLoadData = (treeNode: TreeNodeModel<any>) => {
        const count = this.count(FolderTreeEvent.onLoadData);
        if (count) {
            // define current treeNode to be loaded
            this.folderTree.setLoadedKeys([
                ...this.folderTree.getLoadedKeys(),
                treeNode.id.toString(),
            ]);
            return new Promise<void>((resolve) => {
                const callback = (node: TreeNodeModel<any>) => {
                    this.folderTree.update(node);
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

    public onFileKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, node: TreeNodeModel<any>) => {
        this.emit(FolderTreeEvent.onFileKeyDown, e, node);
    };
}
