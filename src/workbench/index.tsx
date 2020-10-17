import '@/workbench/style.scss';
import '@/style/main.scss';
import 'vscode-codicons/dist/codicon.css';

import * as React from 'react';
import classNames from 'classnames';
import { Utils } from 'dt-utils';

import { prefixClaName } from '@/common/className';
import { APP_PREFIX } from '@/common/const';

import MenuBar from '@/workbench/menuBar';
import ActivityBar from '@/workbench/activityBar';
import StatusBar from '@/workbench/statusBar';
import SettingsBar from '@/workbench/settings';
import MainBench from '@/workbench/main';

import { IMolecule } from '@/core/molecule';
import { MoleculeCtx } from '@/provider/molecule';

export interface IWorkbenchProps {
}

export const Workbench: React.FunctionComponent<IWorkbenchProps> = function(props: IWorkbenchProps) {
    const moleculeCtx: IMolecule = React.useContext(MoleculeCtx);
    const { sidebar, activityBar, editor, theme } = moleculeCtx;
    console.log('Workbench render:', moleculeCtx);
    return (
        <div className={classNames(APP_PREFIX + ' center', Utils.isMacOs() ? 'mac' : '' )}>
            <div className={prefixClaName('workbench')}>
                <MenuBar />
                <ActivityBar activityBar={activityBar} theme={theme} />
                <SettingsBar />
                <MainBench sidebar={sidebar} editor={editor} theme={theme}/>
            </div>
            <StatusBar />
        </div>
    );
};

export default Workbench;
