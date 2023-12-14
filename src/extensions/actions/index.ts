import { IContributeType, type IExtension, UniqueId } from 'mo/types';

import { QuickAccessCommandAction } from './quickAccessCommandAction';
import { QuickAccessSettingsAction } from './quickAccessSettingsAction';
import QuickJumpToLineAction from './quickJumpToLineAction';
import QuickSelectLocaleAction from './quickSelectLocaleAction';
import QuickSelectThemeAction from './quickSelectThemeAction';
import QuickTogglePanelAction from './quickTogglePanelAction';
import QuickToggleSidebarAction from './quickToggleSideBarAction';

export const ExtendsActions: IExtension = {
    id: 'ExtendsActions',
    name: 'Extend The Default Actions',
    contributes: {
        [IContributeType.Commands]: [
            QuickSelectThemeAction,
            QuickTogglePanelAction,
            QuickToggleSidebarAction,
            QuickJumpToLineAction,
            QuickAccessSettingsAction,
            QuickAccessCommandAction,
            QuickSelectLocaleAction,
        ],
    },
    activate: function (molecule): void {
        // append actions into settings' menu
        appendActionInMenu(QuickAccessCommandAction);
        appendActionInMenu(QuickAccessSettingsAction);
        appendActionInMenu(QuickSelectThemeAction);

        // update menu's keybinding
        updateMenuKeybinding(QuickAccessCommandAction.ID);
        updateMenuKeybinding(QuickTogglePanelAction.ID);
        updateMenuKeybinding(QuickToggleSidebarAction.ID);

        // updateContextMenuKeybinding(QuickTogglePanelAction.ID, 'panel');

        function appendActionInMenu(ctor: { ID: string }) {
            const setting = molecule.activityBar.get(
                molecule.builtin.getState().constants.ACTIVITYBAR_ITEM_SETTING
            );
            if (!setting) return;
            const keybinding = molecule.action.queryGlobalKeybinding(ctor.ID);
            // Add Settings into setting's menus
            setting.contextMenu?.push({
                id: ctor.ID,
                name: molecule.locale.localize(ctor.ID, ctor.ID),
                keybinding: keybinding
                    ? molecule.action.convertSimpleKeybindingToString(keybinding)
                    : undefined,
            });
            molecule.activityBar.update(setting);

            // molecule.activityBar.onContextMenuClick((item) => {
            //     if (item.id === ctor.ID) {
            //         molecule.action.execute(ctor.ID);
            //     }
            // });
        }

        function updateMenuKeybinding(id: UniqueId) {
            const keybinding = molecule.action.queryGlobalKeybinding(id);
            if (keybinding) {
                molecule.menuBar.update({
                    id,
                    keybinding: molecule.action.convertSimpleKeybindingToString(keybinding),
                });
            }
        }

        // function updateContextMenuKeybinding(id: UniqueId, token: string) {
        //     const keybinding = molecule.action.queryGlobalKeybinding(id);
        //     if (keybinding) {
        //         molecule.contextMenu.updateItem(token, {
        //             id,
        //             keybinding: molecule.action.convertSimpleKeybindingToString(keybinding),
        //         });
        //     }
        // }
    },
};
