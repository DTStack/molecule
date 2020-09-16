import * as React from 'react';

import { prefixClaName } from '@/common/className';

import './statusBar.scss';

export const StatusBar: React.FunctionComponent = function() {
    return (
        <div className={prefixClaName('statusBar')}>
            StatusBar
        </div>
    );
};

export default StatusBar;
