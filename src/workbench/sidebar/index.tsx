import * as React from 'react';

import { prefixClaName } from '@/common/className';

import './sidebar.scss';

const Sidebar: React.FunctionComponent = () => {
    return (
        <div className={prefixClaName('sidebar')}>
            Sidebar
        </div>
    );
};
export default Sidebar;
