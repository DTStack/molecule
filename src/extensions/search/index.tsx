import * as React from 'react';
import {
    activityBarService,
    sideBarService,
    menuBarService,
    IExtensionService,
    IActivityBarItem,
    editorService,
    EditorEvent,
} from 'mo';
import { MENU_VIEW_SIDEBAR } from 'mo/model/workbench/menuBar';
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
            const isShow = hidden ? !hidden : hidden
            sideBarService.setState({
                current: searchSidePane.id,
                hidden: isShow
            });
        
            menuBarService.update(MENU_VIEW_SIDEBAR, {
                icon: 'check',
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
