import { IExtension } from 'mo/types';
import { concatMenu, toggleNextIcon } from 'mo/utils';

export const ExtendsSidebar: IExtension = {
    id: 'ExtendsSidebar',
    name: 'Extend The Default Sidebar',
    activate: function (molecule): void {
        molecule.sidebar.onToolbarClick((item, groupId) => {
            const { SIDEBAR_ITEM_EXPLORER, EXPLORER_ITEM_OPEN_EDITOR, EXPLORER_ITEM_WORKSPACE } =
                molecule.builtin.getState().constants;
            if (groupId === SIDEBAR_ITEM_EXPLORER) {
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
