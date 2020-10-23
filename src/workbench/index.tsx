import 'mo/workbench/style.scss';
import * as React from 'react';
import classNames from 'classnames';
import { Utils } from 'dt-utils';
import SplitPane from 'react-split-pane';
import { prefixClaName } from 'mo/common/className';
import { APP_PREFIX } from 'mo/common/const';

import { EditorProvider } from 'mo/provider/editor';
import { ActivityBarProvider } from 'mo/provider/activityBar';
import { MenuBarProvider } from 'mo/provider/menuBar';
import { SidebarProvider } from 'mo/provider/sidebar';

import { EditorView } from 'mo/workbench/editor';
import { SidebarView } from 'mo/workbench/sidebar';
import { MenuBarView } from 'mo/workbench/menuBar';
import { ActivityBarView } from 'mo/workbench/activityBar';
import StatusBar from 'mo/workbench/statusBar';
import SettingsBar from 'mo/workbench/settings';
import Panel from 'mo/workbench/panel';

export interface IWorkbenchProps {
}

export interface IMainBenchProps {
}

export function MainBench(props: IMainBenchProps) {
    return (
        <div className={prefixClaName('mainBench')}>
            <SplitPane
                split={'vertical'}
                minSize={170}
                defaultSize={300}
                maxSize={-246}
                primary="first"
                allowResize={true}
            >
                <SidebarProvider>
                    <SidebarView />
                </SidebarProvider>
                <SplitPane
                    primary="first"
                    split="horizontal"
                    defaultSize={'70%'}
                    maxSize={-1}
                    allowResize={true}
                >
                    <EditorProvider>
                        <EditorView />
                    </EditorProvider>
                    <Panel/>
                </SplitPane>
            </SplitPane>
        </div>
    );
};

export function Workbench(props: IWorkbenchProps) {
    return (
        <div className={classNames(APP_PREFIX, Utils.isMacOs() ? 'mac' : '' )}>
            <div className={prefixClaName('workbench')}>
                <MenuBarProvider>
                    <MenuBarView />
                </MenuBarProvider>
                <ActivityBarProvider>
                    <ActivityBarView />
                </ActivityBarProvider>
                <SettingsBar />
                <MainBench/>
            </div>
            <StatusBar />
        </div>
    );
};

export default Workbench;
