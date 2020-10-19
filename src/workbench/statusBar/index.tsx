import 'mo/workbench/statusBar/style.scss';

import * as React from 'react';
import { memo } from 'react';

import { prefixClaName } from 'mo/common/className';

function StatusBar() {
    return (
        <div className={prefixClaName('statusBar')}>
            StatusBar
        </div>
    );
};

export default memo(StatusBar);
