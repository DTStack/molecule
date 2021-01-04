import { IExtensionService, activityBarService } from 'mo';
import { IExtension } from 'mo/model/extension';

import { initGlobalActivityBars } from './settings';

function initActivityBar(extensionCtx: IExtensionService) {
    initGlobalActivityBars();

    activityBarService.onClick((e, data) => {
        const target = e.target;
        // activityBarService.setState({ selected: 'search' });
        console.log('activityBar onClick:', data, target);
    });

    activityBarService.onSelect((e, data) => {
        const target = e.target;
        console.log('activityBar onSelect:', data, target);
    });
}

export const ExtendActivityBar: IExtension = {
    activate: function (extensionCtx: IExtensionService) {
        initActivityBar(extensionCtx);
    },
};
