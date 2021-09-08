import 'reflect-metadata';
import React from 'react';
import SplitPane from 'react-split-pane';
import Pane from 'react-split-pane/lib/Pane';
import { container } from 'tsyringe';

import { classNames, getFontInMac, prefixClaName } from 'mo/common/className';

import { EditorView } from 'mo/workbench/editor';
import { SidebarView } from 'mo/workbench/sidebar';
import { MenuBarView } from 'mo/workbench/menuBar';
import { ActivityBarView } from 'mo/workbench/activityBar';
import { StatusBarView } from 'mo/workbench/statusBar';
import { PanelView } from 'mo/workbench/panel';
import { ID_APP } from 'mo/common/id';
import { APP_PREFIX } from 'mo/common/const';

import { connect } from 'mo/react';

import { ILayoutController, LayoutController } from 'mo/controller/layout';
import { LayoutService } from 'mo/services';
import { ILayout } from 'mo/model/workbench/layout';

import { IWorkbench } from 'mo/model';

const mainBenchClassName = prefixClaName('mainBench');
const workbenchClassName = prefixClaName('workbench');
const compositeBarClassName = prefixClaName('compositeBar');
const appClassName = classNames(APP_PREFIX, getFontInMac());

const layoutController = container.resolve(LayoutController);
const layoutService = container.resolve(LayoutService);

export function WorkbenchView(props: IWorkbench & ILayout & ILayoutController) {
    const {
        activityBar,
        menuBar,
        panel,
        sidebar,
        statusBar,
        onPaneSizeChange,
        onHorizontalPaneSizeChange,
        splitPanePos,
        horizontalSplitPanePos,
    } = props;

    const getContent = (panelMaximized: boolean, panelHidden: boolean) => {
        const editor = (
            <Pane
                key="editorView"
                initialSize={panelHidden ? '100%' : horizontalSplitPanePos[0]}
                maxSize="100%"
                minSize="10%"
            >
                <EditorView />
            </Pane>
        );

        const panel = (
            <Pane key="panelView">
                <PanelView />
            </Pane>
        );

        if (panelHidden) {
            return editor;
        }
        if (panelMaximized) {
            return panel;
        }
        return [editor, panel];
    };

    return (
        <div id={ID_APP} className={appClassName}>
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
                        {!sidebar.hidden && (
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
                            // react-split-pane onChange: (newSizes: [size, ratio]) => void；
                            onChange={onHorizontalPaneSizeChange as any}
                        >
                            {getContent(!!panel.panelMaximized, !!panel.hidden)}
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
