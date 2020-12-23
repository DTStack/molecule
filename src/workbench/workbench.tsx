import './style.scss';
import * as React from 'react';
import SplitPane from 'react-split-pane';
import { classNames, prefixClaName } from 'mo/common/className';

import { EditorView } from 'mo/workbench/editor';
import { SidebarView } from 'mo/workbench/sidebar';
import { MenuBarView } from 'mo/workbench/menuBar';
import { ActivityBarView } from 'mo/workbench/activityBar';
import { StatusBarView } from 'mo/workbench/statusBar';
import Panel from 'mo/workbench/panel';
import { ID_APP } from 'mo/common/id';
import { Utils } from 'dt-utils';
import { APP_PREFIX } from 'mo/common/const';

export interface IWorkbench {}

export interface IMainBench {}

const mainBenchClassName = prefixClaName('mainBench');
const workbenchClassName = prefixClaName('workbench');
const appClassName = classNames(APP_PREFIX, Utils.isMacOs() ? 'mac' : '');

export function MainBench(props: IMainBench) {
    return (
        <div className={mainBenchClassName}>
            <SplitPane
                split={'vertical'}
                minSize={170}
                defaultSize={300}
                maxSize={-246}
                primary="first"
                allowResize={true}
            >
                <SidebarView />
                <SplitPane
                    primary="first"
                    split="horizontal"
                    defaultSize={'70%'}
                    maxSize={-1}
                    allowResize={true}
                >
                    <EditorView />
                    <Panel />
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
