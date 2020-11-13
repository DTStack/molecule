import { IExtensionService, activityBarService, IActivityBarItem } from 'mo';
import { IExtension } from 'mo/model/extension';

function initActivityBar(extensionCtx: IExtensionService) {
    const globalSettings: IActivityBarItem = {
        id: 'global-settings',
        name: 'Settings',
        iconName: 'codicon-settings-gear',
        type: 'global',
        contextMenu: [
            {
                id: 'CommandPalette',
                name: 'Command Palette...',
                title: 'Command Palette',
            },
            {
                id: 'Settings',
                name: 'Settings',
                title: 'Settings',
            },
            {
                id: 'ColorTheme',
                name: 'Color Theme',
                title: 'Color Theme',
            },
        ],
    };

    const globalUserAccount: IActivityBarItem = {
        id: 'global-Account',
        name: 'Account',
        iconName: 'codicon-account',
        type: 'global',
    };

    activityBarService.push(globalUserAccount);
    activityBarService.push(globalSettings);

    activityBarService.onClick((data) => {
        const target = data[0].target;
        // activityBarService.updateState({ selected: 'search' });
        console.log('activityBar onClick:', data, target);
    });

    activityBarService.onSelect((data) => {
        const target = data[0].target;
        console.log('activityBar onSelect:', data, target);
    });
}

export const ExtendActivityBar: IExtension = {
    activate: function (extensionCtx: IExtensionService) {
        initActivityBar(extensionCtx);
    },
};
