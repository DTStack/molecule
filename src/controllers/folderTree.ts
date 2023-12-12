import { createElement } from 'react';
import FolderTree from 'mo/client/slots/folderTree';
import { BaseController } from 'mo/glue';
import { FolderTreeEvent } from 'mo/models/folderTree';
import type { BuiltinService } from 'mo/services/builtin';
import type { ExplorerService } from 'mo/services/explorer';
import type { FolderTreeService } from 'mo/services/folderTree';
import type { SidebarService } from 'mo/services/sidebar';
import { type IMenuItemProps, type KeyboardEventHandler, type UniqueId } from 'mo/types';
import type { TreeNodeModel } from 'mo/utils/tree';
import { inject, injectable } from 'tsyringe';

export interface IFolderTreeController extends BaseController {
    readonly onContextMenuClick?: (
        contextMenu: IMenuItemProps,
        treeNode?: TreeNodeModel<any>
    ) => void;
    readonly onUpdateFileName?: (file: TreeNodeModel<any>) => void;
    readonly onSelect?: (treeNode: TreeNodeModel<any>) => void;
    readonly onDropTree?: (source: TreeNodeModel<any>, target: TreeNodeModel<any>) => void;
    readonly onExpand?: (
        expanded: boolean,
        expandKeys: UniqueId[],
        node: TreeNodeModel<any>
    ) => void;
    readonly onTreeItemKeyDown?: KeyboardEventHandler;
    readonly onRightClick?: (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        treeNode: TreeNodeModel<any>
    ) => void;
    readonly onCreateRoot?: (e: React.MouseEvent<Element, MouseEvent>) => void;
    readonly onTreeClick?: () => void;
}

@injectable()
export class FolderTreeController extends BaseController implements IFolderTreeController {
    constructor(
        @inject('builtin') private builtin: BuiltinService,
        @inject('folderTree') private folderTree: FolderTreeService,
        @inject('explorer') private explorer: ExplorerService,
        @inject('sidebar') private sidebar: SidebarService
    ) {
        super();
        this.initView();
    }

    private initView() {
        const {
            FOLDER_TREE,
            CONTEXTMENU_OPEN_TO_SIDE,
            CONTEXTMENU_COMMON,
            CONTEXTMENU_CREATE,
            CONTEXTMENU_FOLDER_PANEL,
        } = this.builtin.getModules();
        if (FOLDER_TREE) {
            this.explorer.addPanel({
                ...FOLDER_TREE,
                render: (panel) => createElement(FolderTree, { panel, ...this }),
            });

            this.sidebar.addToolbar(this.builtin.getConstants().SIDEBAR_ITEM_EXPLORER, {
                id: FOLDER_TREE.id,
                name: FOLDER_TREE.name,
                icon: 'check',
                sortIndex: FOLDER_TREE.sortIndex,
            });
        }
        // FIXME: migrate to contextMenu service
        if (CONTEXTMENU_OPEN_TO_SIDE) {
            this.folderTree.setFileContextMenu(CONTEXTMENU_OPEN_TO_SIDE);
        }
        if (CONTEXTMENU_CREATE) {
            this.folderTree.setFolderContextMenu(CONTEXTMENU_CREATE);
        }
        this.folderTree.setState({
            contextMenu: CONTEXTMENU_COMMON || [],
            current: undefined,
            folderContextMenu: CONTEXTMENU_FOLDER_PANEL || [],
            data: [],
            expandKeys: [],
        });
    }

    public onRightClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        treeNode: TreeNodeModel<any>
    ) => {
        this.emit(FolderTreeEvent.onRightClick, e, treeNode);
    };

    public readonly onDropTree = (source: TreeNodeModel<any>, target: TreeNodeModel<any>) => {
        this.emit(FolderTreeEvent.onDrop, source, target);
    };

    public onUpdateFileName = (file: TreeNodeModel<any>) => {
        this.emit(FolderTreeEvent.onUpdateFileName, file);
    };

    public readonly onSelect = (treeNode: TreeNodeModel<any>) => {
        this.emit(FolderTreeEvent.onSelect, treeNode);
        // this.folderTree.setActive(file?.id);
        // // editing file won't emit onSelectFile
        // if (
        //     file &&
        //     file.id !== this.folderTree.getState().editing &&
        //     file.fileType === FileTypes.File
        // ) {
        //     this.emit(FolderTreeEvent.onSelect, file);
        // }
    };

    public onContextMenuClick = (
        contextMenuItem: IMenuItemProps,
        treeNode?: TreeNodeModel<any>
    ) => {
        this.emit(FolderTreeEvent.onContextMenuClick, contextMenuItem, treeNode);
    };

    // public onLoadData = (treeNode: TreeNodeModel<any>) => {
    // this.emit(FolderTreeEvent.onLoadData, treeNode);
    // const count = this.count(FolderTreeEvent.onLoadData);
    // if (count) {
    //     // define current treeNode to be loaded
    //     this.folderTree.setLoadedKeys([
    //         ...this.folderTree.getLoadedKeys(),
    //         treeNode.id.toString(),
    //     ]);
    //     return new Promise<void>((resolve) => {
    //         const callback = (node: TreeNodeModel<any>) => {
    //             this.folderTree.update(node);
    //             resolve();
    //         };
    //         this.emit(FolderTreeEvent.onLoadData, treeNode, callback);
    //     });
    // } else {
    //     return Promise.resolve();
    // }
    // };

    public onExpand = (expanded: boolean, expandedKeys: UniqueId[], node: TreeNodeModel<any>) => {
        this.emit(FolderTreeEvent.onExpand, expanded, expandedKeys, node);
    };

    public onTreeItemKeyDown = (
        e: React.KeyboardEvent<HTMLDivElement>,
        node: TreeNodeModel<any>
    ) => {
        this.emit(FolderTreeEvent.onTreeItemKeyDown, e, node);
    };

    public onCreateRoot = (e: React.MouseEvent<Element, MouseEvent>) => {
        this.emit(FolderTreeEvent.onCreateRoot, e);
    };

    public onTreeClick = () => {
        this.emit(FolderTreeEvent.onTreeClick);
    };
}
