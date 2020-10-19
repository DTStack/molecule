import * as React from 'react';

import { prefixClaName } from 'mo/common/className';

import './workbench.scss';

export const WorkbenchLayout: React.FunctionComponent = function() {
    return (
        <div className={prefixClaName('layout')}>
            Layout
        </div>
    );
};

export default WorkbenchLayout;
