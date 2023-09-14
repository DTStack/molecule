import { IContributeType, IExtension } from 'mo/types';

import QuickSelectThemeAction from './quickSelectThemeAction';

export const ExtendsActions: IExtension = {
    id: 'ExtendsActions',
    name: 'Extend The Default Actions',
    contributes: {
        [IContributeType.Commands]: [QuickSelectThemeAction],
    },
    activate: function (molecule): void {
        const setting = molecule.activityBar.get(
            molecule.builtin.getState().constants.ACTIVITY_BAR_GLOBAL_SETTINGS
        );
        if (setting) {
            setting.contextMenu?.push({
                id: QuickSelectThemeAction.ID,
                name: molecule.locale.localize('menu.colorTheme', 'Color Theme'),
            });
            molecule.activityBar.update(setting);
        }
    },
};
