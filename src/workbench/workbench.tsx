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

import { ILayoutController, LayoutController } from 'mo/controller/layout';
import { LayoutService } from 'mo/services';
import { ILayout } from 'mo/model/workbench/layout';

import { IWorkbench } from 'mo/model';

const mainBenchClassName = prefixClaName('mainBench');
const workbenchClassName = prefixClaName('workbench');
const compositeBarClassName = prefixClaName('compositeBar');
const appClassName = classNames(APP_PREFIX, Utils.isMacOs() ? 'mac' : '');

const layoutController = container.resolve(LayoutController);
const layoutService = container.resolve(LayoutService);

export function WorkbenchView(props: IWorkbench & ILayout & ILayoutController) {
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
                        onChange={onPaneSizeChange as any}
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
                            onChange={onHorizontalPaneSizeChange as any}
                        >
                            {!panel.panelMaximized ? (
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
    layoutService,
    WorkbenchView,
    layoutController
);
