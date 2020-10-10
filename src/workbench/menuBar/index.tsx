import * as React from 'react';

import { prefixClaName } from '@/common/className';

import './menuBar.scss';

export const MenuBar: React.FunctionComponent = function() {
    return (
        <div className={prefixClaName('menuBar')}>
            <a className="menu-title codicon codicon-menu"></a>
        </div>
    );
};

export default MenuBar;
