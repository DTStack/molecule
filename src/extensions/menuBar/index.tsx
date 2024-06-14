import { IExtension } from 'mo/types';

export const ExtendsMenuBar: IExtension = {
    id: 'ExtendsMenuBar',
    name: 'Extend The Default MenuBar',
    activate: function (molecule): void {
        molecule.menuBar.onSelect((menuId) => {
            const {
                MENUBAR_ITEM_PANEL,
                MENUBAR_ITEM_MENU,
                MENUBAR_ITEM_SIDEBAR,
                MENUBAR_ITEM_STATUSBAR,
                MENUBAR_ITEM_ACTIVITYBAR,
                MENUBAR_ITEM_AUXILIARY,
            } = molecule.builtin.getState().constants;

            switch (menuId) {
                case MENUBAR_ITEM_PANEL: {
                    molecule.layout.setPanel((prev) => !prev);
                    break;
                }
                case MENUBAR_ITEM_MENU: {
                    molecule.layout.setMenuBar((prev) => !prev);
                    break;
                }
                case MENUBAR_ITEM_SIDEBAR: {
                    molecule.layout.setSidebar((prev) => !prev);
                    break;
                }
                case MENUBAR_ITEM_STATUSBAR: {
                    molecule.layout.setStatusBar((prev) => !prev);
                    break;
                }
                case MENUBAR_ITEM_ACTIVITYBAR: {
                    molecule.layout.setActivityBar((prev) => !prev);
                    break;
                }
                case MENUBAR_ITEM_AUXILIARY: {
                    molecule.layout.setAuxiliaryBar((prev) => !prev);
                    break;
                }

                default: {
                    if (molecule.action.isAction(menuId)) {
                        molecule.action.execute(menuId);
                    }
                    break;
                }
            }
        });

        molecule.menuBar.onContextMenu((pos) => {
            const { MENUBAR_CONTEXTMENU } = molecule.builtin.getModules();
            if (MENUBAR_CONTEXTMENU) {
                molecule.contextMenu.open(MENUBAR_CONTEXTMENU, pos);
            }
        });
    },
};
