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

export interface IWorkbench {}

const mainBenchClassName = prefixClaName('mainBench');
const workbenchClassName = prefixClaName('workbench');
const appClassName = classNames(APP_PREFIX, Utils.isMacOs() ? 'mac' : '');

export function WorkbenchView(props: IWorkbench) {
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
                    >
                        <Pane minSize="170px" initialSize="300px" maxSize="80%">
                            <SidebarView />
                        </Pane>
                        <SplitPane
                            primary="first"
                            split="horizontal"
                            allowResize={true}
                        >
                            <Pane initialSize="70%" maxSize="99%" minSize="10%">
                                <EditorView />
                            </Pane>
                            <Pane>
                                <PanelView />
                            </Pane>
                        </SplitPane>
                    </SplitPane>
                </div>
            </div>
            <StatusBarView />
        </div>
    );
}

export const Workbench = connect({ panel: panelService }, WorkbenchView);

export default Workbench;
