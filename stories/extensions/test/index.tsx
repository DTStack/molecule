import * as React from 'react';
import {
    activityBarService,
    IActivityBarItem,
    menuBarService,
    sidebarService,
    statusBarService,
    settingsService,
} from 'mo';
import {
    MENU_VIEW_ACTIVITYBAR,
    MENU_VIEW_MENUBAR,
    MENU_VIEW_SIDEBAR,
    MENU_VIEW_STATUSBAR,
} from 'mo/model/workbench/menuBar';
import { IExtension } from 'mo/model/extension';

import TestPane from './testPane';

export const ExtendTestPane: IExtension = {
    activate() {
        const testSidePane = {
            id: 'testPane',
            title: 'TEST',
            render() {
                return <TestPane />;
            },
        };

        sidebarService.push(testSidePane);
        const newItem = {
            id: 'ActivityBarTestPane',
            iconName: 'codicon-beaker',
            name: '测试',
        };
        activityBarService.addBar(newItem);

        activityBarService.onSelect((e, item: IActivityBarItem) => {
            if (item.id === newItem.id) {
                sidebarService.setState({
                    current: testSidePane.id,
                });
            }
        });

        settingsService.onChangeConfiguration(async (value) => {
            settingsService.update(value);
            const config = await settingsService.getConfiguration();
            let workbench: any = config.workbench;
            if (workbench?.activityBar) {
                let hidden = workbench?.activityBar.hidden;
                activityBarService.setState({
                    ...activityBarService.getState(),
                    hidden,
                });
                menuBarService.update(MENU_VIEW_ACTIVITYBAR, {
                    icon: hidden ? '' : 'check',
                });
            }
            if (workbench?.menuBar) {
                let hidden = workbench?.menuBar.hidden;
                menuBarService.setState({
                    ...menuBarService.getState(),
                    hidden,
                });
                menuBarService.update(MENU_VIEW_MENUBAR, {
                    icon: hidden ? '' : 'check',
                });
            }
            if (workbench?.sidebar) {
                let hidden = workbench?.sidebar.hidden;
                sidebarService.setState({
                    ...sidebarService.getState(),
                    hidden,
                });
                menuBarService.update(MENU_VIEW_SIDEBAR, {
                    icon: hidden ? '' : 'check',
                });
            }
            if (workbench?.statusBar) {
                let hidden = workbench?.statusBar.hidden;
                statusBarService.setState({
                    ...statusBarService.getState(),
                    hidden,
                });
                menuBarService.update(MENU_VIEW_STATUSBAR, {
                    icon: hidden ? '' : 'check',
                });
            }
        });
    },
};
