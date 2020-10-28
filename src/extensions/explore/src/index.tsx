import * as React from 'react';
import { ActivityBarEvent, IActivityBarItem } from 'mo/core/workbench/activityBar';
import { activityBar, sidebar } from 'mo/index';

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

    activityBar.push([folderFeat]);

    activityBar.subscribe(ActivityBarEvent.OnClick, (data) => {
        console.log('Explore activityBar subscribe onClick:', data);
    });
}

function initSidebar(extensionCtx: ExtensionService) {
    sidebar.push({
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
