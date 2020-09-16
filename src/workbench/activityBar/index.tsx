import * as React from 'react';

import { prefixClaName } from '@/common/className';

import './activityBar.scss';

export const ActivityBar: React.FunctionComponent = function() {
    return (
        <div className={prefixClaName('activityBar')}>
            ActivityBar
        </div>
    );
};

export default ActivityBar;
