import 'reflect-metadata';
import React from 'react';
import { container } from 'tsyringe';

import {
    classNames,
    getFontInMac,
    prefixClaName,
    getBEMModifier,
    getBEMElement,
} from 'mo/common/className';

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
import { ILayout, MenuBarMode } from 'mo/model/workbench/layout';

import { IWorkbench } from 'mo/model';
import SplitPane from 'mo/components/split/SplitPane';
import { Pane } from 'mo/components/split';
import { Display } from 'mo/components';

const mainBenchClassName = prefixClaName('mainBench');
const workbenchClassName = prefixClaName('workbench');
const compositeBarClassName = prefixClaName('compositeBar');
const appClassName = classNames(APP_PREFIX, getFontInMac());
const workbenchWithHorizontalMenuBarClassName = getBEMModifier(
    workbenchClassName,
    'with-horizontal-menuBar'
);
const withHiddenStatusBar = getBEMModifier(
    workbenchClassName,
    'with-hidden-statusBar'
);
const displayActivityBarClassName = getBEMElement(
    workbenchClassName,
    'display-activityBar'
);

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

    const isMenuBarVertical =
        !menuBar.hidden && menuBar.mode === MenuBarMode.vertical;
    const isMenuBarHorizontal =
        !menuBar.hidden && menuBar.mode === MenuBarMode.horizontal;
    const horizontalMenuBar = isMenuBarHorizontal
        ? workbenchWithHorizontalMenuBarClassName
        : null;
    const hideStatusBar = statusBar.hidden ? withHiddenStatusBar : null;
    const workbenchFinalClassName = classNames(
        workbenchClassName,
        horizontalMenuBar,
        hideStatusBar
    );

    const handleSideBarChanged = (sizes: number[]) => {
        if (sidebar.hidden) {
            const clientSize = sizes[1];
            const sidebarSize = splitPanePos[0];
            if (typeof sidebarSize === 'string') {
                // the sideBar size is still a default value
                const numbSize = parseInt(sidebarSize, 10);
                onPaneSizeChange?.([numbSize, clientSize - numbSize]);
            } else {
                onPaneSizeChange?.([sidebarSize, clientSize - sidebarSize]);
            }
        } else {
            onPaneSizeChange?.(sizes);
        }
    };

    const handleEditorChanged = (sizes: number[]) => {
        if (panel.hidden) {
            // get the non-zero size means current client size
            const clientSize = sizes.find((s) => s)!;
            const panelSize = horizontalSplitPanePos[1];
            if (typeof panelSize === 'string') {
                // the editor size is still a default value
                const editorPercent =
                    parseInt(horizontalSplitPanePos[0] as string, 10) / 100;
                const numbericSize = clientSize * editorPercent;
                onHorizontalPaneSizeChange?.([
                    numbericSize,
                    clientSize - numbericSize,
                ]);
            } else {
                onHorizontalPaneSizeChange?.([
                    clientSize - panelSize,
                    panelSize,
                ]);
            }
        } else {
            onHorizontalPaneSizeChange?.(sizes);
        }
    };

    return (
        <div id={ID_APP} className={appClassName} tabIndex={0}>
            <div className={workbenchFinalClassName}>
                <Display visible={isMenuBarHorizontal}>
                    <MenuBarView mode={MenuBarMode.horizontal} />
                </Display>
                <div className={mainBenchClassName}>
                    <div className={compositeBarClassName}>
                        <Display visible={isMenuBarVertical}>
                            <MenuBarView mode={MenuBarMode.vertical} />
                        </Display>
                        <Display
                            visible={!activityBar.hidden}
                            className={displayActivityBarClassName}
                        >
                            <ActivityBarView />
                        </Display>
                    </div>
                    <SplitPane
                        sizes={sidebar.hidden ? [0, '100%'] : splitPanePos}
                        split="vertical"
                        allowResize={[false]}
                        onChange={handleSideBarChanged}
                    >
                        <Pane minSize={170} maxSize="80%">
                            <SidebarView />
                        </Pane>
                        <SplitPane
                            sizes={getSizes()}
                            allowResize={[true, false]}
                            split="horizontal"
                            onChange={handleEditorChanged}
                        >
                            <Pane minSize="10%" maxSize="80%">
                                <EditorView />
                            </Pane>
                            <PanelView />
                        </SplitPane>
                    </SplitPane>
                </div>
            </div>
            <Display visible={!statusBar.hidden}>
                <StatusBarView />
            </Display>
        </div>
    );
}

export const Workbench = connect(
    layoutService,
    WorkbenchView,
    layoutController
);
