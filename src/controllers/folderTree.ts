import { createElement } from 'react';
import FolderTree from 'mo/client/slots/folderTree';
import { BaseController } from 'mo/glue';
import { FolderTreeEvent } from 'mo/models/folderTree';
import type { BuiltinService } from 'mo/services/builtin';
import type { ExplorerService } from 'mo/services/explorer';
import type { FolderTreeService } from 'mo/services/folderTree';
import type { SidebarService } from 'mo/services/sidebar';
import type {
    ContextMenuHandler,
    FocusEventHandler,
    KeyboardEventHandler,
    UniqueId,
} from 'mo/types';
import type { TreeNodeModel } from 'mo/utils/tree';
import { inject, injectable } from 'tsyringe';

export interface IFolderTreeController extends BaseController {
    readonly onSelect?: (treeNode: TreeNodeModel<any>) => void;
    readonly onKeyDown?: KeyboardEventHandler<HTMLElement>;
    readonly onContextMenu?: ContextMenuHandler<[treeNode: TreeNodeModel<any>]>;
    readonly onCreateRoot?: (e: React.MouseEvent<Element, MouseEvent>) => void;
    readonly onBlur?: FocusEventHandler<HTMLElement>;
    readonly onDragStart?: (source: TreeNodeModel<any>) => void;
    readonly onDragOver?: (source: TreeNodeModel<any>, target: TreeNodeModel<any>) => void;
    readonly onDragEnd?: (source: TreeNodeModel<any>) => void;
    readonly onDrop?: (source: TreeNodeModel<any>, target: TreeNodeModel<any>) => void;
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
        const { FOLDER_TREE } = this.builtin.getModules();
        if (FOLDER_TREE) {
            this.explorer.add({
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
    }

    public onContextMenu: ContextMenuHandler<[treeNode: TreeNodeModel<any>]> = (
        pos,
        treeNode
    ) => {
        this.emit(FolderTreeEvent.onContextMenu, pos, treeNode);
    };

    public readonly onSelect = (treeNode: TreeNodeModel<any>) => {
        this.emit(FolderTreeEvent.onSelect, treeNode);
    };

    public onExpand = (expanded: boolean, expandedKeys: UniqueId[], node: TreeNodeModel<any>) => {
        this.emit(FolderTreeEvent.onExpand, expanded, expandedKeys, node);
    };

    public onKeyDown: KeyboardEventHandler<HTMLElement> = (e, node) => {
        this.emit(FolderTreeEvent.onKeyDown, e, node);
    };

    public onCreateRoot = (e: React.MouseEvent<Element, MouseEvent>) => {
        this.emit(FolderTreeEvent.onCreateRoot, e);
    };

    public onBlur: FocusEventHandler<HTMLElement> = (e, treeNode) => {
        this.emit(FolderTreeEvent.onBlur, e, treeNode);
    };

    public onDragStart = (source: TreeNodeModel<any>) => {
        this.emit(FolderTreeEvent.onDragStart, source);
    };

    public onDragOver = (source: TreeNodeModel<any>, target: TreeNodeModel<any>) => {
        this.emit(FolderTreeEvent.onDragOver, source, target);
    };

    public onDragEnd = (source: TreeNodeModel<any>) => {
        this.emit(FolderTreeEvent.onDragEnd, source);
    };

    public onDrop = (source: TreeNodeModel<any>, target: TreeNodeModel<any>) => {
        this.emit(FolderTreeEvent.onDrop, source, target);
    };
}
