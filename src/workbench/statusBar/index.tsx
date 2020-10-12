import * as React from 'react';
import { memo } from 'react';

import { prefixClaName } from '@/common/className';

import './statusBar.scss';

function StatusBar() {
    return (
        <div className={prefixClaName('statusBar')}>
            StatusBar
        </div>
    );
};

export default memo(StatusBar);
