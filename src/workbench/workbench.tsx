import * as React from 'react';
import SplitPane from 'react-split-pane';
import * as Pane from 'react-split-pane/lib/Pane';

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

export interface IWorkbench {}

export interface IMainBench {}

const mainBenchClassName = prefixClaName('mainBench');
const workbenchClassName = prefixClaName('workbench');
const appClassName = classNames(APP_PREFIX, Utils.isMacOs() ? 'mac' : '');

export function MainBench(props: IMainBench) {
    return (
        <div className={mainBenchClassName}>
            <SplitPane // TODO: The official Docs of React-Split-Pane v2 is expired, must reference the source code
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
    );
}

export function Workbench(props: IWorkbench) {
    return (
        <div id={ID_APP} className={appClassName}>
            <div className={workbenchClassName}>
                <MenuBarView />
                <ActivityBarView />
                <MainBench />
            </div>
            <StatusBarView />
        </div>
    );
}

export default Workbench;
