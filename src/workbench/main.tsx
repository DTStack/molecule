import '@/workbench/style.scss';
import '@/style/main.scss';
import 'vscode-codicons/dist/codicon.css';

import * as React from 'react';
import SplitPane from 'react-split-pane';
import { prefixClaName } from '@/common/className';

import Sidebar from '@/workbench/sidebar';
import Editor from '@/workbench/editor';
import Panel from '@/workbench/panel';
import { ISidebar } from '@/core/sidebar';
import { IEditor } from '@/core/editor';
import { ITheme } from '@/core/theme';

export interface IMainBenchProps {
    sidebar: ISidebar;
    editor: IEditor;
    theme: ITheme;
}

function MainBench(props: IMainBenchProps) {
    console.log('MainBench:', props);
    const { sidebar, editor, theme } = props;
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
                    <Editor {...editor} theme={theme}/>
                    <Panel/>
                </SplitPane>
            </SplitPane>
        </div>
    );
};

export default MainBench;
