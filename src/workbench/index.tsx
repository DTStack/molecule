import * as React from 'react';
import { memo } from 'react';
import SplitPane from 'react-split-pane';
import classNames from 'classnames';
import { Utils } from 'dt-utils';

import { prefixClaName } from '@/common/className';
import { APP_PREFIX } from '@/common/const';

import Sidebar from './sidebar';
import MenuBar from './menuBar';
import ActivityBar from './activityBar';
import StatusBar from './statusBar';
import Editor from './editor';
import Panel from './panel';

import { IMolecule } from '@/core/molecule';
import { MoleculeCtx } from '@/provider/molecule';

import './workbench.scss';
import '@/style/main.scss';
import 'vscode-codicons/dist/codicon.css';


export interface IWorkbenchProps {

}

const MainBench = memo(function MainBenchFC(props: any) {
    const { sidebar, editor } = props;
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
                    <Editor {...editor}/>
                    <Panel/>
                </SplitPane>
            </SplitPane>
        </div>
    );
});

export const Workbench: React.FunctionComponent<IWorkbenchProps> = function(props: IWorkbenchProps) {
    const moleculeCtx: IMolecule = React.useContext(MoleculeCtx);
    const { sidebar, activityBar, editor } = moleculeCtx;
    console.log('Workbench render:', moleculeCtx);
    return (
        <div className={classNames(APP_PREFIX + ' center', Utils.isMacOs() ? 'mac' : '' )}>
            <div className={prefixClaName('workbench')}>
                <MenuBar />
                <ActivityBar {...activityBar} />
                <MainBench sidebar={sidebar} editor={editor} />
            </div>
            <StatusBar />
        </div>
    );
};

export default Workbench;
