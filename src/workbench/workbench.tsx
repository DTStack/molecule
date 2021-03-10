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
import { panelService } from 'mo/services';
import { connect } from 'mo/react';
import { IPanel } from 'mo/model/workbench/panel';
import { workbenchController } from 'mo/controller';
import { IWorkbenchController } from 'mo/controller/workbench';

export interface IWorkbench {
    panel: IPanel;
}

const mainBenchClassName = prefixClaName('mainBench');
const workbenchClassName = prefixClaName('workbench');
const appClassName = classNames(APP_PREFIX, Utils.isMacOs() ? 'mac' : '');

export function WorkbenchView(props: IWorkbench & IWorkbenchController) {
    const { panel, onPaneSizeChange, splitPanePos } = props;

    return (
        <div id={ID_APP} className={appClassName}>
            <div className={workbenchClassName}>
                <MenuBarView />
                <ActivityBarView />
                <div className={mainBenchClassName}>
                    <SplitPane
                        split="vertical"
                        primary="first"
                        allowResize={true}
                        onChange={onPaneSizeChange}
                    >
                        <Pane
                            minSize="170px"
                            initialSize={splitPanePos[0]}
                            maxSize="80%"
                        >
                            <SidebarView />
                        </Pane>
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
            <StatusBarView />
        </div>
    );
}

export const Workbench = connect(
    { panel: panelService },
    WorkbenchView,
    workbenchController
);

export default Workbench;
