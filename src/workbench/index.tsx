import 'mo/workbench/style.scss';
import 'mo/style/main.scss';
import 'vscode-codicons/dist/codicon.css';
import * as React from 'react';
import classNames from 'classnames';
import { Utils } from 'dt-utils';
import SplitPane from 'react-split-pane';
import { prefixClaName } from 'mo/common/className';
import { APP_PREFIX } from 'mo/common/const';
import MenuBar from 'mo/workbench/menuBar';
import ActivityBarView from 'mo/workbench/activityBar';
import StatusBar from 'mo/workbench/statusBar';
import SettingsBar from 'mo/workbench/settings';
import Sidebar from 'mo/workbench/sidebar';
import Editor from 'mo/workbench/editor';
import Panel from 'mo/workbench/panel';
import { IMolecule } from 'mo/core/molecule';
import { MoleculeCtx } from 'mo/provider/molecule';
import { ISidebar } from 'mo/core/sidebar';
import { IEditor } from 'mo/core/editor';
import { ITheme } from 'mo/core/theme';
import { ActivityBarProvider } from 'mo/provider/activityBar';
import { EditorProvider } from 'mo/provider/editor';

export interface IWorkbenchProps {
}

export interface IMainBenchProps {
    sidebar: ISidebar;
    editor: IEditor;
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
                        <Editor theme={theme}/>
                    </EditorProvider>
                    <Panel/>
                </SplitPane>
            </SplitPane>
        </div>
    );
};

export const Workbench: React.FunctionComponent<IWorkbenchProps> = function(props: IWorkbenchProps) {
    const moleculeCtx: IMolecule = React.useContext(MoleculeCtx);
    const { sidebar, editor, theme } = moleculeCtx;

    return (
        <div className={classNames(APP_PREFIX, Utils.isMacOs() ? 'mac' : '' )}>
            <div className={prefixClaName('workbench')}>
                <MenuBar />
                <ActivityBarProvider>
                    <ActivityBarView />
                </ActivityBarProvider>
                <SettingsBar />
                <MainBench sidebar={sidebar} editor={editor} theme={theme}/>
            </div>
            <StatusBar />
        </div>
    );
};

export default Workbench;
