import { IContributeType, type IExtension,UniqueId } from 'mo/types';

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

        // Add keybinding
        addMenuKeybinding(QuickTogglePanelAction.ID);
        addMenuKeybinding(QuickToggleSidebarAction.ID);

        molecule.activityBar.onContextMenuClick((item) => {
            if (item.id === QuickSelectThemeAction.ID) {
                molecule.action.execute(QuickSelectThemeAction.ID);
            }
        });

        function addMenuKeybinding(id: UniqueId) {
            const keybinding = molecule.action.queryGlobalKeybinding(id);
            if (keybinding) {
                molecule.menuBar.update({
                    id,
                    keybinding: molecule.action.convertSimpleKeybindingToString(keybinding),
                });
            }
        }
    },
};
