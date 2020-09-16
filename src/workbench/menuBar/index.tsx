import * as React from 'react';

import { prefixClaName } from '@/common/className';

import './menuBar.scss';

export const MenuBar: React.FunctionComponent = function() {
    return (
        <div className={prefixClaName('menuBar')}>
            MenuBar
        </div>
    );
};

export default MenuBar;
