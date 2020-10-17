import '@/workbench/panel/style.scss';
import * as React from 'react';
import { memo } from 'react';

import { prefixClaName } from '@/common/className';

function Panel(props) {
    console.log('Panel render:', props);

    return (
        <div className={prefixClaName('panel')}>
            Panel
        </div>
    );
};

export default memo(Panel);
