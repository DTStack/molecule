import * as React from 'react';
import molecule from 'mo';
import {
    MENU_VIEW_ACTIVITYBAR,
    MENU_VIEW_MENUBAR,
    MENU_VIEW_SIDEBAR,
    MENU_VIEW_STATUSBAR,
} from 'mo/model/workbench/menuBar';
import { IExtension, IActivityBarItem } from 'mo/model';

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

        molecule.sidebar.push(testSidePane);
        const newItem = {
            id: 'ActivityBarTestPane',
            iconName: 'codicon-beaker',
            name: '测试',
        };
        molecule.activityBar.addBar(newItem);

        molecule.activityBar.onSelect((e, item: IActivityBarItem) => {
            if (item.id === newItem.id) {
                molecule.sidebar.setState({
                    current: testSidePane.id,
                });
            }
        });

        molecule.settings.onChangeConfiguration(async (value) => {
            console.log('onChangeConfiguration:', value);
            molecule.settings.update(value);
            const config = await molecule.settings.getConfiguration();
            const workbench: any = config.workbench;
            if (workbench?.activityBar) {
                const hidden = workbench?.activityBar.hidden;
                molecule.activityBar.setState({
                    ...molecule.activityBar.getState(),
                    hidden,
                });
                molecule.menuBar.update(MENU_VIEW_ACTIVITYBAR, {
                    icon: hidden ? '' : 'check',
                });
            }
            if (workbench?.menuBar) {
                const hidden = workbench?.menuBar.hidden;
                molecule.menuBar.setState({
                    ...molecule.menuBar.getState(),
                    hidden,
                });
                molecule.menuBar.update(MENU_VIEW_MENUBAR, {
                    icon: hidden ? '' : 'check',
                });
            }
            if (workbench?.sidebar) {
                const hidden = workbench?.sidebar.hidden;
                molecule.sidebar.setState({
                    ...molecule.sidebar.getState(),
                    hidden,
                });
                molecule.menuBar.update(MENU_VIEW_SIDEBAR, {
                    icon: hidden ? '' : 'check',
                });
            }
            if (workbench?.statusBar) {
                const hidden = workbench?.statusBar.hidden;
                molecule.statusBar.setState({
                    ...molecule.statusBar.getState(),
                    hidden,
                });
                molecule.menuBar.update(MENU_VIEW_STATUSBAR, {
                    icon: hidden ? '' : 'check',
                });
            }
        });
    },
};
