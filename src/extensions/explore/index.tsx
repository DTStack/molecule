import * as React from 'react';
import {
    activityBarService,
    IActivityBarItem,
    sidebarService,
    editorService,
} from 'mo';

import { Explorer } from './explore';
import { ExtensionService } from 'mo/services/extensionService';
import { IExtension } from 'mo/model/extension';

function init(extensionCtx: ExtensionService) {
    const state = activityBarService.getState();
    const sideBarState = sidebarService.getState();

    const exploreActiveItem = {
        id: 'active-explorer',
        name: 'Explore',
        iconName: 'codicon-files',
    };

    activityBarService.updateState({
        selected: exploreActiveItem.id,
        data: [...state.data, exploreActiveItem],
    });
    editorService.changeTab((data) => {
        console.log(data);
    });
    editorService.selectTab((tab) => {
        console.log(`selected tabs${tab}`);
    });
    const explorePane = {
        id: 'explore',
        title: 'EXPLORER',
        render() {
            return <Explorer />;
        },
    };

    // sidebarService.push(explorePane);
    sidebarService.updateState({
        current: explorePane.id,
        panes: [...sideBarState.panes, explorePane],
    });

    activityBarService.onSelect((e, item: IActivityBarItem) => {
        console.log('Search Pane onClick:', e, item);
        if (item.id === exploreActiveItem.id) {
            sidebarService.updateState({
                current: explorePane.id,
            });
        }
    });
}

export const ExtendExplore: IExtension = {
    activate: function (extensionCtx: ExtensionService) {
        init(extensionCtx);
    },
};
