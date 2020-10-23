import * as React from 'react';
import { ActivityBarEvent, IActivityBarItem } from 'mo/core/workbench/activityBar';
import { activityBarService, sidebarService } from 'mo/main';

import { Explorer } from './explore';
import { ExtensionService } from 'mo/services/extensionService';

function initActivityBar(extensionCtx: ExtensionService) {
    const folderFeat: IActivityBarItem = {
        id: 'active-explorer',
        name: 'Explore',
        iconName: 'codicon-files',
        onClick: function(e, options) {

        },
    };

    activityBarService.push([folderFeat]);

    activityBarService.subscribe(ActivityBarEvent.OnClick, (data) => {
        console.log('Explore activityBar subscribe onClick:', data);
    });
}

function initSidebar(extensionCtx: ExtensionService) {
    sidebarService.panes.push({
        id: 'explore',
        name: 'EXPLORER',
        render() {
            return <Explorer />;
        },
    });
}


export function activate(extensionCtx: ExtensionService) {
    initActivityBar(extensionCtx);
    initSidebar(extensionCtx);
}
