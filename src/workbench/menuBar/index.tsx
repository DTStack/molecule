import '@/workbench/menuBar/style.scss';
import * as React from 'react';
import { memo } from 'react';

import { prefixClaName } from '@/common/className';

function MenuBar() {
    return (
        <div className={prefixClaName('menuBar')}>
            <a className="menu-action codicon codicon-menu"></a>
        </div>
    );
};

export default memo(MenuBar);
