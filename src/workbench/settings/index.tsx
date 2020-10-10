import * as React from 'react';

import { prefixClaName } from '@/common/className';

export const Panel: React.FunctionComponent = function() {
    return (
        <div className={prefixClaName('settings')}>
            Panel
            <a className='codicon codicon-settings-gear'></a>
        </div>
    );
};

export default Panel;
