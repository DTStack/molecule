import 'mo/workbench/style.scss';
import * as React from 'react';
import classNames from 'classnames';
import { Utils } from 'dt-utils';
import SplitPane from 'react-split-pane';
import { prefixClaName } from 'mo/common/className';
import { APP_PREFIX } from 'mo/common/const';
import { MenuBarView } from 'mo/workbench/menuBar';
import { ActivityBarView } from 'mo/workbench/activityBar';
import { EditorView } from 'mo/workbench/editor';
import StatusBar from 'mo/workbench/statusBar';
import SettingsBar from 'mo/workbench/settings';
import Sidebar from 'mo/workbench/sidebar';
import Panel from 'mo/workbench/panel';
import { IMolecule } from 'mo/core/molecule';
import { MoleculeCtx } from 'mo/provider/molecule';
import { ISidebar } from 'mo/core/workbench/sidebar';
import { ITheme } from 'mo/core/theme';

import { EditorProvider } from 'mo/provider/editor';
import { ActivityBarProvider } from 'mo/provider/activityBar';
import { MenuBarProvider } from 'mo/provider/menuBar';

export interface IWorkbenchProps {
}

export interface IMainBenchProps {
    sidebar: ISidebar;
    theme: ITheme;
}

export function MainBench(props: IMainBenchProps) {
    const { sidebar, theme } = props;
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
                <Sidebar {...sidebar} />
                <SplitPane
                    primary="first"
                    split="horizontal"
                    defaultSize={'70%'}
                    maxSize={-1}
                    allowResize={true}
                >
                    <EditorProvider>
                        <EditorView theme={theme}/>
                    </EditorProvider>
                    <Panel/>
                </SplitPane>
            </SplitPane>
        </div>
    );
};

export const Workbench: React.FunctionComponent<IWorkbenchProps> = function(props: IWorkbenchProps) {
    const moleculeCtx: IMolecule = React.useContext(MoleculeCtx);
    const { sidebar, theme } = moleculeCtx;

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
                <MainBench sidebar={sidebar} theme={theme}/>
            </div>
            <StatusBar />
        </div>
    );
};

export default Workbench;
