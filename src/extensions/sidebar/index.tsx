import { SearchEvent } from 'mo/models/search';
import { IExtension } from 'mo/types';
import { concatMenu, toggleNextIcon } from 'mo/utils';

export const ExtendsSidebar: IExtension = {
    id: 'ExtendsSidebar',
    name: 'Extend The Default Sidebar',
    activate: function (molecule): void {
        molecule.sidebar.onToolbarClick((item, groupId) => {
            const { SIDEBAR_ITEM_EXPLORER, SIDEBAR_ITEM_SEARCH } = molecule.builtin.getConstants();
            if (groupId === SIDEBAR_ITEM_EXPLORER) {
                const { EXPLORER_ITEM_OPEN_EDITOR, EXPLORER_ITEM_WORKSPACE } = molecule.builtin.getConstants();
                switch (item.id) {
                    case EXPLORER_ITEM_OPEN_EDITOR:
                    case EXPLORER_ITEM_WORKSPACE: {
                        // Update Toolbar's icon
                        molecule.sidebar.updateToolbar(groupId, {
                            id: item.id,
                            icon: toggleNextIcon(molecule.sidebar.getToolbar(groupId, item.id)?.icon),
                        });

                        // Update Explorer's visibility
                        molecule.explorer.update({
                            id: item.id,
                            hidden: !molecule.explorer.get(item.id)?.hidden,
                        });
                        break;
                    }

                    default:
                        break;
                }
            } else if (groupId === SIDEBAR_ITEM_SEARCH) {
                const {
                    SEARCH_TOOLBAR_REFRESH,
                    SEARCH_TOOLBAR_CLEAR_ALL,
                    SEARCH_TOOLBAR_VIEW_AS_LIST,
                    SEARCH_TOOLBAR_VIEW_AS_TREE,
                    SEARCH_TOOLBAR_COLLAPSE_EXPAND,
                } = molecule.builtin.getConstants();
                const { value } = molecule.search.getState();
                switch (item.id) {
                    case SEARCH_TOOLBAR_REFRESH: {
                        molecule.search.emit(SearchEvent.onSearch, value);
                        break;
                    }
                    case SEARCH_TOOLBAR_CLEAR_ALL: {
                        molecule.search.reset();
                        break;
                    }
                    case SEARCH_TOOLBAR_VIEW_AS_LIST:
                    case SEARCH_TOOLBAR_VIEW_AS_TREE: {
                        molecule.search.toggleMode();
                        const next =
                            item.id === SEARCH_TOOLBAR_VIEW_AS_LIST
                                ? molecule.builtin.getModules().SEARCH_TOOLBAR_VIEW_AS_TREE
                                : molecule.builtin.getModules().SEARCH_TOOLBAR_VIEW_AS_LIST;
                        molecule.sidebar.replaceToolbar(SIDEBAR_ITEM_SEARCH, item.id, next);
                        break;
                    }
                    case SEARCH_TOOLBAR_COLLAPSE_EXPAND: {
                        const { SEARCH_TOOLBAR_COLLAPSE, SEARCH_TOOLBAR_EXPAND } = molecule.builtin.getModules();
                        const { expandedKeys } = molecule.search.getState();
                        if (expandedKeys.length) {
                            molecule.sidebar.updateToolbar(groupId, SEARCH_TOOLBAR_COLLAPSE);
                            molecule.search.setExpandedKeys([]);
                        } else {
                            molecule.sidebar.updateToolbar(groupId, SEARCH_TOOLBAR_EXPAND);
                            molecule.search.expandAll();
                        }
                        break;
                    }

                    default:
                        break;
                }
            }
        });

        molecule.sidebar.onContextMenu((pos, pane) => {
            const toolbar = pane.toolbar || [];
            const contextMenu = concatMenu(
                [
                    {
                        id: pane.id,
                        name: pane.name,
                        disabled: true,
                        icon: 'check',
                    },
                ],
                toolbar
            );
            if (toolbar.length) {
                molecule.contextMenu.open(
                    contextMenu,
                    pos,
                    // remark current contextMenu
                    { name: molecule.builtin.getConstants().CONTEXTMENU_ITEM_SIDEBAR, item: pane }
                );
            }
        });
    },
};
