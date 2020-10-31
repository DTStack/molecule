import { activityBar, ActivityBarEvent, IActivityBarItem } from 'mo';
import { ExtensionService } from 'mo/services/extensionService';

function initActivityBar(extensionCtx: ExtensionService) {
    const globalSettings: IActivityBarItem = {
        id: 'global-settings',
        name: 'Settings',
        iconName: 'codicon-settings-gear',
        type: 'global',
        onClick: function(e, options) {

        },
    };

    const globalUserAccount: IActivityBarItem = {
        id: 'global-Account',
        name: 'Account',
        iconName: 'codicon-account',
        type: 'global',
        onClick: function(e, options) {

        },
    };

    activityBar.push(globalUserAccount);
    activityBar.push(globalSettings);

    activityBar.subscribe(ActivityBarEvent.OnClick, (data) => {
        console.log('Explore activityBar subscribe onClick:', data);
    });
}

export function activate(extensionCtx: ExtensionService) {
    initActivityBar(extensionCtx);
}
