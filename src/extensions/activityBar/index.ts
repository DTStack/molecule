import { IExtension } from 'mo/types';

import { toggleActivityBarHidden, toggleNextActive, updateContextMenuIcon } from '../utils';

export const ExtendsActivityBar: IExtension = {
    id: 'ExtendsActivityBar',
    name: 'Extend The Default ActivityBar',
    activate: function (molecule): void {
        molecule.activityBar.onClick((item) => {
            if (item.id === molecule.activityBar.getState().selected) {
                molecule.layout.setSidebarVisibility((prev) => !prev);
            } else {
                molecule.layout.setSidebarVisibility(false);
                molecule.activityBar.setActive(item.id);
                molecule.sidebar.setActive(item.id);
            }
        });

        molecule.activityBar.onContextMenuClick((item) => {
            const {
                ACTIVITYBAR_CONTEXTMENU_HIDE: CONTEXT_MENU_HIDE,
                SIDEBAR_ITEM_EXPLORER: EXPLORER_ACTIVITY_ITEM,
                ACTIVITYBAR_ITEM_SETTING: ACTIVITY_BAR_GLOBAL_SETTINGS,
                ACTIVITYBAR_ITEM_ACCOUNT: ACTIVITY_BAR_GLOBAL_ACCOUNT,
            } = molecule.builtin.getState().constants;
            switch (item.id) {
                case CONTEXT_MENU_HIDE: {
                    molecule.layout.setActivityBarVisibility(true);
                    break;
                }
                case ACTIVITY_BAR_GLOBAL_SETTINGS:
                case ACTIVITY_BAR_GLOBAL_ACCOUNT: {
                    const nextHidden = toggleActivityBarHidden(molecule, item);
                    updateContextMenuIcon(molecule, 'activityBar', item, nextHidden);
                    break;
                }
                case EXPLORER_ACTIVITY_ITEM: {
                    toggleNextActive(molecule, item);

                    const nextHidden = toggleActivityBarHidden(molecule, item);
                    updateContextMenuIcon(molecule, 'activityBar', item, nextHidden);
                    break;
                }
                default:
                    break;
            }
        });
    },
};
