import 'mo/workbench/statusBar/style.scss';

import * as React from 'react';
import { memo } from 'react';

import { prefixClaName } from 'mo/common/className';

export interface IStatusBarItems {
}

export interface IStatusBar {
    data: IStatusBarItems[];
    onClick:(event: React.MouseEvent<any, any>) => void;
    render?: () => React.ReactNode | JSX.Element;
}

function StatusBar(props: IStatusBar) {
    return (
        <div className={prefixClaName('statusBar')}>
            StatusBar
        </div>
    );
};

export default memo(StatusBar);
