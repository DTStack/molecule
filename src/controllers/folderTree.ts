import { createElement } from 'react';
import FolderTree from 'mo/client/slots/folderTree';
import { BaseController } from 'mo/glue';
import { FolderTreeEvent } from 'mo/models/folderTree';
import type { BuiltinService } from 'mo/services/builtin';
import type { ExplorerService } from 'mo/services/explorer';
import type { FolderTreeService } from 'mo/services/folderTree';
import { IMenuItemProps, type KeyboardEventHandler, type UniqueId } from 'mo/types';
import type { TreeNodeModel } from 'mo/utils/tree';
import { inject, injectable } from 'tsyringe';

export interface IFolderTreeController extends BaseController {
    readonly createTreeNode?: (data: TreeNodeModel<any>, id?: UniqueId) => void;
    readonly onContextMenuClick?: (
        contextMenu: IMenuItemProps,
        treeNode?: TreeNodeModel<any>
    ) => void;
    readonly onUpdateFileName?: (file: TreeNodeModel<any>) => void;
    readonly onSelectFile?: (file?: TreeNodeModel<any>) => void;
    readonly onDropTree?: (source: TreeNodeModel<any>, target: TreeNodeModel<any>) => void;
    readonly onLoadData?: (treeNode: TreeNodeModel<any>) => Promise<void>;
    readonly onExpandKeys?: (expandKeys: UniqueId[]) => void;
    readonly onFileKeyDown?: KeyboardEventHandler;
    readonly onRightClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, treeNode: TreeNodeModel<any>) => void;
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

    private initView() {
        const { builtInExplorerFolderPanel } = this.builtin.getState().modules;
        this.explorer.addPanel({
            ...builtInExplorerFolderPanel,
            render: (panel) => createElement(FolderTree, { panel, ...this }),
        });
        const {
            FILE_CONTEXT_MENU,
            BASE_CONTEXT_MENU,
            COMMON_CONTEXT_MENU,
            FOLDER_PANEL_CONTEXT_MENU,
        } = this.builtin.getState().modules;
        if (FILE_CONTEXT_MENU) {
            this.folderTree.setFileContextMenu(FILE_CONTEXT_MENU);
        }
        if (BASE_CONTEXT_MENU) {
            this.folderTree.setFolderContextMenu(BASE_CONTEXT_MENU);
        }
        this.folderTree.setState({
            contextMenu: COMMON_CONTEXT_MENU || [],
            current: undefined,
            folderContextMenu: FOLDER_PANEL_CONTEXT_MENU || [],
            data: [],
            expandKeys: [],
        });
    }

    public createTreeNode = (data: TreeNodeModel<any>, id?: UniqueId) => {
        this.emit(FolderTreeEvent.onCreate, data, id);
    };

    public onRightClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, treeNode: TreeNodeModel<any>) => {
        this.emit(FolderTreeEvent.onRightClick, e, treeNode);
    };

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

    public onContextMenuClick = (contextMenuItem: IMenuItemProps, treeNode?: TreeNodeModel<any>) => {
        const menuId = contextMenuItem.id;
        const {
            RENAME_COMMAND_ID,
            DELETE_COMMAND_ID,
            // NEW_FILE_COMMAND_ID,
            // NEW_FOLDER_COMMAND_ID,
            // OPEN_TO_SIDE_COMMAND_ID,
        } = this.builtin.getState().constants;
        const { id } = treeNode!;
        switch (menuId) {
            case RENAME_COMMAND_ID:
                this.onRename(id);
                break;
            case DELETE_COMMAND_ID:
                this.onDelete(id);
                break;
            default:
                this.emit(FolderTreeEvent.onContextMenuClick, contextMenuItem, treeNode);
                break;
        }
    };

    private onRename = (id: UniqueId) => {
        this.emit(FolderTreeEvent.onRename, id);
    };

    private onDelete = (id: UniqueId) => {
        this.emit(FolderTreeEvent.onDelete, id);
    };

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
