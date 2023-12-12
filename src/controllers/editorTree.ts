import { createElement } from 'react';
import EditorTree from 'mo/client/slots/editorTree';
import { BaseController } from 'mo/glue';
import { EditorTreeEvent } from 'mo/models/editorTree';
import type { BuiltinService } from 'mo/services/builtin';
import type { ContextMenuService } from 'mo/services/contextMenu';
import type { EditorTreeService } from 'mo/services/editorTree';
import type { ExplorerService } from 'mo/services/explorer';
import type { SidebarService } from 'mo/services/sidebar';
import type { ContextMenuEditorHandler, ContextMenuGroupHandler, UniqueId } from 'mo/types';
import { inject, injectable } from 'tsyringe';

export interface IEditorTreeController extends BaseController {
    readonly onClose?: (tabId: UniqueId, groupId: UniqueId) => void;
    readonly onSelect?: (tabId: UniqueId, groupId: UniqueId) => void;
    readonly onGroupClick?: (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        groupId: UniqueId
    ) => void;
    readonly onToolbarClick?: ContextMenuGroupHandler;
    readonly onGroupContextMenu?: ContextMenuGroupHandler;
    /**
     * Trigger by context menu click event
     * When click the context menu from group header, it doesn't have file info
     */
    readonly onContextMenu?: ContextMenuEditorHandler;
}

@injectable()
export class EditorTreeController extends BaseController implements IEditorTreeController {
    constructor(
        @inject('builtin') private builtin: BuiltinService,
        @inject('explorer') private explorer: ExplorerService,
        @inject('contextMenu') private contextMenu: ContextMenuService,
        @inject('sidebar') private sidebar: SidebarService,
        @inject('editorTree') private editorTree: EditorTreeService
    ) {
        super();
        this.initView();
    }

    private initView() {
        const { EDITOR_TREE, EDITOR_TREE_CONTEXTMENU, EDITORTREE_TOOLBAR } =
            this.builtin.getModules();
        if (EDITOR_TREE) {
            this.explorer.addPanel({
                ...EDITOR_TREE,
                render: (panel) => createElement(EditorTree, { panel, ...this }),
            });
            this.sidebar.addToolbar(this.builtin.getConstants().SIDEBAR_ITEM_EXPLORER, {
                id: EDITOR_TREE.id,
                name: EDITOR_TREE.name,
                icon: 'check',
                sortIndex: EDITOR_TREE.sortIndex,
            });
            this.contextMenu.add(
                this.builtin.getConstants().CONTEXTMENU_ITEM_EDITOR_TREE,
                EDITOR_TREE_CONTEXTMENU
            );
        }
        if (EDITORTREE_TOOLBAR) {
            this.editorTree.addToolbar(EDITORTREE_TOOLBAR);
        }
    }

    public onContextMenu: ContextMenuEditorHandler = (menu, tabId, groupId) => {
        this.emit(EditorTreeEvent.onContextMenu, menu, tabId, groupId);
    };

    public onGroupClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, groupId: UniqueId) => {
        this.emit(EditorTreeEvent.onGroupClick, groupId);
    };

    public onClose = (tabId: UniqueId, groupId: UniqueId) => {
        this.emit(EditorTreeEvent.onClose, tabId, groupId);
    };

    public onSelect = (tabId: UniqueId, groupId: UniqueId) => {
        this.emit(EditorTreeEvent.onSelect, tabId, groupId);
    };

    public onGroupContextMenu: ContextMenuGroupHandler = (menu, groupId) => {
        this.emit(EditorTreeEvent.onGroupContextMenu, menu, groupId);
    };

    public onToolbarClick: ContextMenuGroupHandler = (toolbar, groupId) => {
        this.emit(EditorTreeEvent.onToolbarClick, toolbar, groupId);
    };
}
