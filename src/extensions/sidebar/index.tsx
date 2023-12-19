import { SearchEvent } from 'mo/models/search';
import { FileTypes, IExtension } from 'mo/types';
import { concatMenu, toggleNextIcon } from 'mo/utils';

export const ExtendsSidebar: IExtension = {
    id: 'ExtendsSidebar',
    name: 'Extend The Default Sidebar',
    activate: function (molecule): void {
        molecule.sidebar.onToolbarClick((item, groupId) => {
            const { SIDEBAR_ITEM_EXPLORER, SIDEBAR_ITEM_SEARCH } = molecule.builtin.getConstants();
            if (groupId === SIDEBAR_ITEM_EXPLORER) {
                const { EXPLORER_ITEM_OPEN_EDITOR, EXPLORER_ITEM_WORKSPACE } =
                    molecule.builtin.getConstants();
                switch (item.id) {
                    case EXPLORER_ITEM_OPEN_EDITOR:
                    case EXPLORER_ITEM_WORKSPACE: {
                        // Update Toolbar's icon
                        molecule.sidebar.updateToolbar(groupId, {
                            id: item.id,
                            icon: toggleNextIcon(
                                molecule.sidebar.getToolbar(groupId, item.id)?.icon
                            ),
                        });

                        // Update Explorer's visibility
                        molecule.explorer.updatePanel({
                            id: item.id,
                            hidden: !molecule.explorer.getPanel(item.id)?.hidden,
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
                    SEARCH_TOOLBAR_VIEW_AS_LIST_TREE,
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
                    case SEARCH_TOOLBAR_VIEW_AS_LIST_TREE: {
                        const {
                            SEARCH_TOOLBAR_VIEW_AS_LIST,
                            SEARCH_TOOLBAR_VIEW_AS_TREE,
                            SEARCH_TOOLBAR_COLLAPSE,
                        } = molecule.builtin.getModules();
                        if (molecule.search.getState().resultIsTree) {
                            molecule.sidebar.updateToolbar(groupId, [
                                SEARCH_TOOLBAR_VIEW_AS_TREE,
                                SEARCH_TOOLBAR_COLLAPSE,
                            ]);
                        } else {
                            molecule.sidebar.updateToolbar(groupId, SEARCH_TOOLBAR_VIEW_AS_LIST);
                            molecule.search.emit(SearchEvent.onSearch, value);
                        }
                        break;
                    }
                    case SEARCH_TOOLBAR_COLLAPSE_EXPAND: {
                        const { SEARCH_TOOLBAR_COLLAPSE, SEARCH_TOOLBAR_EXPAND } =
                            molecule.builtin.getModules();
                        const { expandKeys, result } = molecule.search.getState();
                        if (expandKeys.length) {
                            molecule.sidebar.updateToolbar(groupId, [SEARCH_TOOLBAR_COLLAPSE]);
                            molecule.search.setExpandKeys([]);
                        } else {
                            molecule.sidebar.updateToolbar(groupId, [SEARCH_TOOLBAR_EXPAND]);
                            const next = result
                                .filter((i) => i.fileType === FileTypes.Folder)
                                .map((i) => i.id);
                            molecule.search.setExpandKeys(next);
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
