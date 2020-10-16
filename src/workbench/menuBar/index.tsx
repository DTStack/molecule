import * as React from 'react';
import { memo } from 'react';

import { prefixClaName } from '@/common/className';

import './menuBar.scss';

function MenuBar() {
    return (
        <div className={prefixClaName('menuBar')}>
            <a className="menu-action codicon codicon-menu"></a>
        </div>
    );
};

export default memo(MenuBar);
