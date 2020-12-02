import * as React from 'react';
import {
    activityBarService,
    IActivityBarItem,
    sidebarService,
    explorerService,
} from 'mo';

import { ExplorerView } from './explore';
import TreeView from './tree';
import { ExtensionService } from 'mo/services/extensionService';
import { IExtension } from 'mo/model/extension';
import { data } from './treeMock';

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
    const explorePane = {
        id: 'explore',
        title: 'EXPLORER',
        render() {
            return <ExplorerView />;
        },
    };

    activityBarService.onSelect((e, item: IActivityBarItem) => {
        console.log('Search Pane onClick:', e, item);
        if (item.id === exploreActiveItem.id) {
            sidebarService.updateState({
                current: explorePane.id,
            });
        }
    });

    // sidebarService.push(explorePane);
    sidebarService.updateState({
        current: explorePane.id,
        panes: [...sideBarState.panes, explorePane],
    });

    /**
     * explorer service
     * includes collapse and tree
     */
    const editorPanel = {
        id: 'editors',
        name: 'OPEN EDITORS',
        toolbar: [
            {
                id: 'toggle',
                title: 'Toggle Vertical',
                disabled: true,
                iconName: 'codicon-editor-layout',
            },
            {
                id: 'save',
                title: 'Save All',
                disabled: true,
                iconName: 'codicon-save-all',
            },
            {
                id: 'close',
                title: 'Close All Editors',
                iconName: 'codicon-close-all',
            },
        ],
        renderPanel: () => {
            return <span>editors</span>;
        },
    };
    const sampleFolderPanel = {
        id: 'sample_folder',
        name: 'Sample Folder',
        toolbar: [
            {
                id: 'new_file',
                title: 'New File',
                iconName: 'codicon-new-file',
            },
            {
                id: 'new_folder',
                title: 'New Folder',
                iconName: 'codicon-new-folder',
            },
            {
                id: 'refresh',
                title: 'Refresh Explorer',
                iconName: 'codicon-refresh',
            },
            {
                id: 'collapse',
                title: 'Collapse Folders in Explorer',
                iconName: 'codicon-collapse-all',
            },
        ],
        renderPanel: () => {
            return <TreeView data={data} />;
        },
    };
    const outlinePanel = {
        id: 'outline',
        name: 'OUTLINE',
        toolbar: [
            {
                id: 'outline-collapse',
                title: 'Collapse All',
                iconName: 'codicon-collapse-all',
            },
            {
                id: 'outline-more',
                title: 'More Actions...',
                iconName: 'codicon-ellipsis',
            },
        ],
    };
    explorerService.push(editorPanel);
    explorerService.push(sampleFolderPanel);
    explorerService.push(outlinePanel);
}

export const ExtendExplore: IExtension = {
    activate: function (extensionCtx: ExtensionService) {
        init(extensionCtx);
    },
};
