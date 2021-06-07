import 'reflect-metadata';
import * as React from 'react';
import SplitPane from 'react-split-pane';
import Pane from 'react-split-pane/lib/Pane';
import { container } from 'tsyringe';

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

import { connect } from 'mo/react';

import {
    IWorkbenchController,
    WorkbenchController,
} from 'mo/controller/workbench';
import {
    ActivityBarService,
    IActivityBarService,
    IMenuBarService,
    IPanelService,
    ISidebarService,
    IStatusBarService,
    MenuBarService,
    PanelService,
    SidebarService,
    StatusBarService,
} from 'mo/services';
import { IWorkbench } from 'mo/model';

const mainBenchClassName = prefixClaName('mainBench');
const workbenchClassName = prefixClaName('workbench');
const compositeBarClassName = prefixClaName('compositeBar');
const appClassName = classNames(APP_PREFIX, Utils.isMacOs() ? 'mac' : '');

const panelService = container.resolve<IPanelService>(PanelService);
const sidebarService = container.resolve<ISidebarService>(SidebarService);
const menuBarService = container.resolve<IMenuBarService>(MenuBarService);
const activityBarService = container.resolve<IActivityBarService>(
    ActivityBarService
);
const workbenchController = container.resolve(WorkbenchController);
const statusBarService = container.resolve<IStatusBarService>(StatusBarService);

export function WorkbenchView(props: IWorkbench & IWorkbenchController) {
    const {
        activityBar,
        menuBar,
        panel,
        sideBar,
        statusBar,
        onPaneSizeChange,
        onHorizontalPaneSizeChange,
        splitPanePos,
        horizontalSplitPanePos,
    } = props;
    return (
        <div id={ID_APP} className={appClassName} tabIndex={0}>
            <div className={workbenchClassName}>
                <div className={mainBenchClassName}>
                    <div className={compositeBarClassName}>
                        {!menuBar.hidden && <MenuBarView />}
                        {!activityBar.hidden && <ActivityBarView />}
                    </div>
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
                            onChange={onHorizontalPaneSizeChange}
                        >
                            {!panel.maximize ? (
                                <Pane
                                    initialSize={
                                        panel.hidden
                                            ? '100%'
                                            : horizontalSplitPanePos[0]
                                    }
                                    maxSize="100%"
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
