import * as React from 'react';
import {
    activityBarService,
    sidebarService,
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

    sidebarService.push(searchSidePane);

    const searchActivityItem = {
        id: 'search',
        name: 'Search',
        iconName: 'codicon-search',
    };

    activityBarService.push(searchActivityItem);

    activityBarService.onSelect((e, item: IActivityBarItem) => {
        if (item.id === searchActivityItem.id) {
            sidebarService.setState({
                current: searchSidePane.id,
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
