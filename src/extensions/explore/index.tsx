import * as React from 'react';
import { activityBarService, ActivityBarEvent, IActivityBarItem, sidebarService } from 'mo';

import { Explorer } from './explore';
import { ExtensionService } from 'mo/services/extensionService';
import { IExtension } from 'mo/model/extension';

function initActivityBar(extensionCtx: ExtensionService) {
    const activeId = 'active-explorer';
    const state = activityBarService.getState();
    const folderFeat: IActivityBarItem = {
        id: activeId,
        name: 'Explore',
        iconName: 'codicon-files',
    };
    // activityBarService.push(folderFeat);
    // state.data?.push(folderFeat);
    // state.selected = activeId;
    activityBarService.updateState({
        selected: activeId, data: [...state.data, folderFeat],
    });

    activityBarService.subscribe(ActivityBarEvent.OnClick, (data) => {
        console.log('Explore activityBar subscribe onClick:', data);
    });
}

function initSidebar(extensionCtx: ExtensionService) {
    sidebarService.push({
        id: 'explore',
        name: 'EXPLORER',
        render() {
            return <Explorer />;
        },
    });
}


export const ExtendExplore: IExtension = {
    activate: function(extensionCtx: ExtensionService) {
        initActivityBar(extensionCtx);
        initSidebar(extensionCtx);
    },
};

