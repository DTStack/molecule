import { IExtension } from 'mo/types';

import { QuickAccessCommandAction } from '../actions/quickAccessCommandAction';

export const ExtendsMenuBar: IExtension = {
    id: 'ExtendsMenuBar',
    name: 'Extend The Default MenuBar',
    activate: function (molecule, monaco): void {
        molecule.menuBar.onSelect((menuId) => {
            const {
                MENUBAR_ITEM_PANEL,
                MENUBAR_ITEM_MENU,
                MENUBAR_ITEM_SIDEBAR,
                MENUBAR_ITEM_STATUSBAR,
                MENUBAR_ITEM_ACTIVITYBAR,
            } = molecule.builtin.getState().constants;

            switch (menuId) {
                case MENUBAR_ITEM_PANEL: {
                    molecule.layout.setPanelVisibility((prev) => !prev);
                    break;
                }
                case MENUBAR_ITEM_MENU: {
                    molecule.layout.setMenuBarVisibility((prev) => !prev);
                    break;
                }
                case MENUBAR_ITEM_SIDEBAR: {
                    molecule.layout.setSidebarVisibility((prev) => !prev);
                    break;
                }
                case MENUBAR_ITEM_STATUSBAR: {
                    molecule.layout.setStatusBarVisibility((prev) => !prev);
                    break;
                }
                case MENUBAR_ITEM_ACTIVITYBAR: {
                    molecule.layout.setActivityBarVisibility((prev) => !prev);
                    break;
                }
                case QuickAccessCommandAction.ID: {
                    monaco.commandService.executeCommand(QuickAccessCommandAction.ID);
                    break;
                }

                default: {
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
