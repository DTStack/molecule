import './style.scss';
import * as React from 'react';
import classNames from 'classnames';
import { Utils } from 'dt-utils';
import SplitPane from 'react-split-pane';
import { prefixClaName } from 'mo/common/className';
import { APP_PREFIX } from 'mo/common/const';

import { EditorView } from 'mo/workbench/editor';
import { SidebarView } from 'mo/workbench/sidebar';
import { MenuBarView } from 'mo/workbench/menuBar';
import { ActivityBarView } from 'mo/workbench/activityBar';
import { StatusBarView } from 'mo/workbench/statusBar';
import Panel from 'mo/workbench/panel';


export interface IWorkbench {
}

export interface IMainBench {
}

export function MainBench(props: IMainBench) {
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
                <SidebarView />
                <SplitPane
                    primary="first"
                    split="horizontal"
                    defaultSize={'70%'}
                    maxSize={-1}
                    allowResize={true}
                >
                    <EditorView />
                    <Panel/>
                </SplitPane>
            </SplitPane>
        </div>
    );
};

export function Workbench(props: IWorkbench) {
    return (
        <div className={classNames(APP_PREFIX, Utils.isMacOs() ? 'mac' : '' )}>
            <div className={prefixClaName('workbench')}>
                <MenuBarView />
                <ActivityBarView />
                <MainBench/>
            </div>
            <StatusBarView />
        </div>
    );
};

export default Workbench;
