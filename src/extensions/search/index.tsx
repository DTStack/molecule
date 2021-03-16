import * as React from 'react';
import {
    activityBarService,
    sideBarService,
    IExtensionService,
    IActivityBarItem,
    editorService,
    EditorEvent,
} from 'mo';
import { IExtension } from 'mo/model/extension';
import SearchPane from './searchPane';

function init() {
    const searchSidePane = {
        id: 'searchPane',
        title: 'SEARCH',
        render() {
            return <SearchPane />;
        },
    };

    sideBarService.push(searchSidePane);

    const searchActivityItem = {
        id: 'search',
        name: 'Search',
        iconName: 'codicon-search',
    };

    activityBarService.addBar(searchActivityItem);

    activityBarService.onSelect((e, item: IActivityBarItem) => {
        const { hidden } = sideBarService.getState();
        if (item.id === searchActivityItem.id) {
            sideBarService.setState({
                current: searchSidePane.id,
                hidden: hidden ? !hidden : hidden,
            });
        }
    });

    editorService.onEvent(EditorEvent.OnMoveTab, (data) => {
        console.log(data);
    });

    editorService.onEvent(EditorEvent.OnSelectTab, (tabKey?: string) => {
        console.log(`selected tabKey ${tabKey}`);
    });
    editorService.onEvent(EditorEvent.OnCloseTab, (tabKey?: string) => {
        console.log(`closed tabkey ${tabKey}`);
    });
}

export const ExtendSearch: IExtension = {
    activate(extensionCtx: IExtensionService) {
        init();
    },
};
