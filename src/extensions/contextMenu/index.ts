import { EditorEvent, EditorGroupModel } from 'mo/models/editor';
import { EditorTreeEvent } from 'mo/models/editorTree';
import { FolderTreeEvent } from 'mo/models/folderTree';
import { ISidebarPane, SidebarEvent } from 'mo/models/sidebar';
import {
    Alignment,
    type IEditorTab,
    type IExtension,
    type IMenuItemProps,
    type TabGroup,
    type UniqueId,
} from 'mo/types';
import { getPrevOrNext, searchById, sortByIndex } from 'mo/utils';
import { TreeNodeModel } from 'mo/utils/tree';

export const ExtendsContextMenu: IExtension = {
    id: 'ExtendsContextMenu',
    name: 'Extend The Default ContextMenu',
    activate: function (molecule): void {
        molecule.contextMenu.onHide(() => {
            molecule.contextMenu.close();
        });

        molecule.contextMenu.onClick((item) => {
            const {
                MENUBAR_CONTEXTMENU_HIDE,
                ACTIVITYBAR_CONTEXTMENU_HIDE,
                STATUSBAR_CONTEXTMENU_HIDE,
                PANEL_CONTEXTMENU_HIDE,
            } = molecule.builtin.getConstants();
            const scope = molecule.contextMenu.getScope();
            switch (item.id) {
                case MENUBAR_CONTEXTMENU_HIDE: {
                    molecule.layout.setMenuBar(false);
                    break;
                }
                case ACTIVITYBAR_CONTEXTMENU_HIDE: {
                    molecule.layout.setActivityBar(false);
                    break;
                }
                case STATUSBAR_CONTEXTMENU_HIDE: {
                    molecule.layout.setStatusBar(false);
                    break;
                }
                case PANEL_CONTEXTMENU_HIDE: {
                    molecule.layout.setPanel(false);
                    break;
                }
                default: {
                    if (!scope) break;
                    // dispatch to different scope
                    if (isActivityBar(scope)) {
                        activityBarContextMenuClick(item);
                    } else if (isStatusBar(scope)) {
                        statusBarContextMenuClick(item);
                    } else if (isPanel(scope)) {
                        panelContextMenuClick(item);
                    } else if (isEditorTree(scope)) {
                        editorTreeContextMenuClick(item, scope.group, scope.tab);
                    } else if (isSidebar(scope)) {
                        sidebarContextMenuClick(item, scope.item);
                    } else if (isExplorer(scope)) {
                        explorerContextMenuClick(item);
                    } else if (isFolderTree(scope)) {
                        folderTreeContextMenuClick(item, scope.item);
                    } else if (isEditor(scope)) {
                        editorContextMenuClick(item, scope.item.tabId, scope.item.groupId);
                    }
                }
            }
        });

        molecule.contextMenu.onClick(() => {
            molecule.contextMenu.close();
        });

        function isActivityBar(scope: any): scope is string {
            return (
                typeof scope === 'string' &&
                scope === molecule.builtin.getConstants().CONTEXTMENU_ITEM_ACTIVITYBAR
            );
        }

        function activityBarContextMenuClick(item: IMenuItemProps) {
            const target = molecule.activityBar.get(item.id);
            if (!target) return;
            molecule.activityBar.toggleBar(item.id);
            if (target.alignment === Alignment.bottom) return;
            if (!target.hidden) {
                molecule.sidebar.setCurrent(item.id);
                molecule.activityBar.setCurrent(item.id);
            } else if (molecule.activityBar.getState().current === item.id) {
                const list = molecule.activityBar
                    .getState()
                    .data.filter((i) => !i.hidden && i.alignment === Alignment.top)
                    .sort(sortByIndex);
                const idx = list.findIndex(searchById(item.id));
                const next = getPrevOrNext(list, idx)?.id;
                molecule.sidebar.setCurrent(next);
                molecule.activityBar.setCurrent(next);
            }
        }

        function isStatusBar(scope: any): scope is string {
            return (
                typeof scope === 'string' &&
                scope === molecule.builtin.getConstants().CONTEXTMENU_ITEM_STATUS_BAR
            );
        }

        function statusBarContextMenuClick(item: IMenuItemProps) {
            const target = molecule.statusBar.get(item.id);
            if (target) {
                molecule.statusBar.toggle(item.id);
            }
        }

        function isPanel(scope: any): scope is string {
            return (
                typeof scope === 'string' &&
                scope === molecule.builtin.getConstants().CONTEXTMENU_ITEM_PANEL
            );
        }

        function panelContextMenuClick(item: IMenuItemProps) {
            const target = molecule.panel.get(item.id);
            if (!target) return;
            molecule.panel.toggle(item.id);
            if (!target.hidden) {
                molecule.panel.setCurrent(item.id);
            } else if (molecule.panel.getState().current === item.id) {
                const list = molecule.panel
                    .getState()
                    .data.filter((i) => !i.hidden)
                    .sort(sortByIndex);
                const idx = list.findIndex(searchById(item.id));
                const next = getPrevOrNext(list, idx)?.id;
                molecule.panel.setCurrent(next);
            }
        }

        function isEditorTree(
            scope: any
        ): scope is { name: string; group: EditorGroupModel; tab?: IEditorTab<any> } {
            return (
                typeof scope === 'object' &&
                scope.name === molecule.builtin.getConstants().CONTEXTMENU_ITEM_EDITOR_TREE
            );
        }

        function editorTreeContextMenuClick(
            item: IMenuItemProps,
            group: EditorGroupModel,
            tab?: IEditorTab<any>
        ) {
            const {
                EDITORTREE_TOOLBAR_SAVE_GROUP,
                EDITORTREE_TOOLBAR_CLOSE_GROUP,
                EDITOR_CONTEXTMENU_CLOSE,
                EDITOR_CONTEXTMENU_CLOSE_OTHERS,
                EDITOR_CONTEXTMENU_CLOSE_TO_RIGHT,
                EDITOR_CONTEXTMENU_CLOSE_TO_LEFT,
                EDITOR_CONTEXTMENU_CLOSE_ALL,
            } = molecule.builtin.getConstants();
            switch (item.id) {
                case EDITORTREE_TOOLBAR_CLOSE_GROUP:
                case EDITORTREE_TOOLBAR_SAVE_GROUP: {
                    // Redirect to editorTree's onToolbarClick event
                    molecule.editorTree.emit(EditorTreeEvent.onToolbarClick, item, group.id);
                    break;
                }
                case EDITOR_CONTEXTMENU_CLOSE: {
                    // Redirect to editor's onClose event
                    if (tab) {
                        molecule.editor.emit(EditorEvent.onCloseTab, tab.id, group.id);
                    }
                    break;
                }
                case EDITOR_CONTEXTMENU_CLOSE_OTHERS:
                    if (tab) {
                        molecule.editor.emit(EditorEvent.onCloseOther, tab.id, group.id);
                    }
                    break;
                case EDITOR_CONTEXTMENU_CLOSE_TO_RIGHT:
                    if (tab) {
                        molecule.editor.emit(EditorEvent.onCloseToRight, tab.id, group.id);
                    }
                    break;
                case EDITOR_CONTEXTMENU_CLOSE_TO_LEFT:
                    if (tab) {
                        molecule.editor.emit(EditorEvent.onCloseToLeft, tab.id, group.id);
                    }
                    break;
                case EDITOR_CONTEXTMENU_CLOSE_ALL:
                    if (tab) {
                        molecule.editor.emit(EditorEvent.onCloseAll, group.id);
                    }
                    break;
                default:
                    break;
            }
        }

        function isSidebar(scope: any): scope is { name: string; item: ISidebarPane } {
            return (
                typeof scope === 'object' &&
                scope.name === molecule.builtin.getConstants().CONTEXTMENU_ITEM_SIDEBAR
            );
        }

        function sidebarContextMenuClick(item: IMenuItemProps, pane: ISidebarPane) {
            if (pane.toolbar?.find(searchById(item.id))) {
                molecule.sidebar.emit(SidebarEvent.onToolbarClick, item, pane.id);
            }
        }

        function isExplorer(scope: any): scope is string {
            return (
                typeof scope === 'string' &&
                scope === molecule.builtin.getConstants().CONTEXTMENU_ITEM_EXPLORER
            );
        }

        function explorerContextMenuClick(item: IMenuItemProps) {
            const data = molecule.explorer.getState().data;
            if (data?.find(searchById(item.id))) {
                molecule.sidebar.emit(
                    SidebarEvent.onToolbarClick,
                    item,
                    molecule.builtin.getConstants().SIDEBAR_ITEM_EXPLORER
                );
            }
        }

        function isFolderTree(scope: any): scope is { name: string; item: TreeNodeModel<any> } {
            return (
                typeof scope === 'object' &&
                scope.name === molecule.builtin.getConstants().CONTEXTMENU_ITEM_FOLDERTREE
            );
        }

        function folderTreeContextMenuClick(item: IMenuItemProps, treeNode: TreeNodeModel<any>) {
            molecule.folderTree.emit(FolderTreeEvent.onContextMenuClick, item, treeNode);
        }

        function isEditor(scope: any): scope is { name: string; item: TabGroup } {
            return (
                typeof scope === 'object' &&
                scope.name === molecule.builtin.getConstants().CONTEXTMENU_ITEM_EDITOR
            );
        }

        function editorContextMenuClick(item: IMenuItemProps, tabId: UniqueId, groupId: UniqueId) {
            molecule.editor.emit(EditorEvent.onContextMenuClick, item, tabId, groupId);
        }
    },
};
