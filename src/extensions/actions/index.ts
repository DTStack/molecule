import { IContributeType, type IExtension, UniqueId } from 'mo/types';

import QuickJumpToLineAction from './quickJumpToLineAction';
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
        ],
    },
    activate: function (molecule): void {
        // Add Color Theme into Setting's menus
        const setting = molecule.activityBar.get(
            molecule.builtin.getState().constants.ACTIVITY_BAR_GLOBAL_SETTINGS
        );
        if (setting) {
            const keybinding = molecule.action.queryGlobalKeybinding(QuickSelectThemeAction.ID);
            setting.contextMenu?.push({
                id: QuickSelectThemeAction.ID,
                name: molecule.locale.localize('menu.colorTheme', 'Color Theme'),
                keybinding: keybinding
                    ? molecule.action.convertSimpleKeybindingToString(keybinding)
                    : undefined,
            });
            molecule.activityBar.update(setting);
        }

        molecule.activityBar.onContextMenuClick((item) => {
            if (item.id === QuickSelectThemeAction.ID) {
                molecule.action.execute(QuickSelectThemeAction.ID);
            }
        });

        // update menu's keybinding
        updateMenuKeybinding(QuickTogglePanelAction.ID);
        updateMenuKeybinding(QuickToggleSidebarAction.ID);

        updateContextMenuKeybinding(QuickTogglePanelAction.ID, 'panel');

        function updateMenuKeybinding(id: UniqueId) {
            const keybinding = molecule.action.queryGlobalKeybinding(id);
            if (keybinding) {
                molecule.menuBar.update({
                    id,
                    keybinding: molecule.action.convertSimpleKeybindingToString(keybinding),
                });
            }
        }

        function updateContextMenuKeybinding(id: UniqueId, token: string) {
            const keybinding = molecule.action.queryGlobalKeybinding(id);
            if (keybinding) {
                molecule.contextMenu.updateItem(token, {
                    id,
                    keybinding: molecule.action.convertSimpleKeybindingToString(keybinding),
                });
            }
        }
    },
};
