import 'reflect-metadata';
import React from 'react';
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
import SplitPane from 'mo/components/split/SplitPane';

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

    const getSizes = () => {
        if (panel.hidden) {
            return ['100%', 0];
        }
        if (panel.panelMaximized) {
            return [0, '100%'];
        }
        return horizontalSplitPanePos;
    };

    return (
        <div id={ID_APP} className={appClassName} tabIndex={0}>
            <div className={workbenchClassName}>
                <div className={mainBenchClassName}>
                    <div className={compositeBarClassName}>
                        {!menuBar.hidden && <MenuBarView />}
                        {!activityBar.hidden && <ActivityBarView />}
                    </div>
                    <SplitPane
                        sizes={sidebar.hidden ? [0, '100%'] : splitPanePos}
                        split="vertical"
                        allowResize={[false]}
                        onChange={(sizes) => onPaneSizeChange?.(sizes)}
                        onResizeStrategy={() => ['keep', 'pave']}
                    >
                        <SidebarView />
                        <SplitPane
                            sizes={getSizes()}
                            allowResize={[false]}
                            split="horizontal"
                            onChange={(sizes) =>
                                onHorizontalPaneSizeChange?.(sizes)
                            }
                            onResizeStrategy={() => ['pave', 'keep']}
                        >
                            <EditorView />
                            <PanelView />
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
