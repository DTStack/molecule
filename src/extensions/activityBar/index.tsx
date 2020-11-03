import {
    IExtensionService, activityBarService,
    ActivityBarEvent, IActivityBarItem,
} from 'mo';
import { IExtension } from 'mo/model/extension';

function initActivityBar(extensionCtx: IExtensionService) {
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

    activityBarService.push(globalUserAccount);
    activityBarService.push(globalSettings);

    activityBarService.subscribe(ActivityBarEvent.OnClick, (data) => {
        console.log('Explore activityBar subscribe onClick:', data);
    });
}

export const ExtendActivityBar: IExtension = {
    activate: function(extensionCtx: IExtensionService) {
        initActivityBar(extensionCtx);
    },
};
