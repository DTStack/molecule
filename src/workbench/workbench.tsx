import * as React from 'react';
import SplitPane from 'react-split-pane';
import Pane from 'react-split-pane/lib/Pane';

import { classNames, prefixClaName } from 'mo/common/className';

import { EditorView } from 'mo/workbench/editor';
import { SidebarView } from 'mo/workbench/sidebar';
import { MenuBarView } from 'mo/workbench/menuBar';
import { ActivityBarView } from 'mo/workbench/activityBar';
import { StatusBarView } from 'mo/workbench/statusBar';
import { PanelView } from 'mo/workbench/panel';
import { ID_APP } from 'mo/common/id';
import { Utils } from '@dtinsight/dt-utils';
import { APP_PREFIX } from 'mo/common/const';
import {
    panelService,
    activityBarService,
    menuBarService,
    sidebarService,
    statusBarService,
} from 'mo/services';
import { connect } from 'mo/react';
import { IPanel } from 'mo/model/workbench/panel';
import { IActivityBar } from 'mo/model/workbench/activityBar';
import { ISidebar } from 'mo/model/workbench/sidebar';
import { IMenuBar } from 'mo/model/workbench/menuBar';
import { IStatusBar } from 'mo/model/workbench/statusBar';
import { workbenchController } from 'mo/controller';
import { IWorkbenchController } from 'mo/controller/workbench';

export interface IWorkbench {
    panel: IPanel;
    activityBar: IActivityBar;
    menuBar: IMenuBar;
    statusBar: IStatusBar;
    sideBar: ISidebar;
}

const mainBenchClassName = prefixClaName('mainBench');
const workbenchClassName = prefixClaName('workbench');
const appClassName = classNames(APP_PREFIX, Utils.isMacOs() ? 'mac' : '');

export function WorkbenchView(props: IWorkbench & IWorkbenchController) {
    const {
        activityBar,
        menuBar,
        panel,
        sideBar,
        statusBar,
        onPaneSizeChange,
        splitPanePos,
    } = props;

    return (
        <div id={ID_APP} className={appClassName}>
            <div className={workbenchClassName}>
                {!menuBar.hidden && <MenuBarView />}
                {!activityBar.hidden && <ActivityBarView />}
                <div className={mainBenchClassName}>
                    <SplitPane
                        split="vertical"
                        primary="first"
                        allowResize={true}
                        onChange={onPaneSizeChange}
                    >
                        {!sideBar.hidden && (
                            <Pane
                                minSize="170px"
                                initialSize={splitPanePos[0]}
                                maxSize="80%"
                            >
                                <SidebarView />
                            </Pane>
                        )}
                        <SplitPane
                            primary="first"
                            split="horizontal"
                            allowResize={true}
                        >
                            {!panel.maximize ? (
                                <Pane
                                    initialSize="70%"
                                    maxSize="99%"
                                    minSize="10%"
                                >
                                    <EditorView />
                                </Pane>
                            ) : null}
                            {!panel.hidden ? (
                                <Pane>
                                    <PanelView />
                                </Pane>
                            ) : null}
                        </SplitPane>
                    </SplitPane>
                </div>
            </div>
            {!statusBar.hidden && <StatusBarView />}
        </div>
    );
}

export const Workbench = connect(
    {
        panel: panelService,
        activityBar: activityBarService,
        menuBar: menuBarService,
        sideBar: sidebarService,
        statusBar: statusBarService,
    },
    WorkbenchView,
    workbenchController
);

export default Workbench;
