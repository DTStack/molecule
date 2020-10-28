import 'mo/workbench/settings/style.scss';
import * as React from 'react';
import { memo } from 'react';

import { prefixClaName } from 'mo/common/className';

export function Settings() {
    return (
        <div className={prefixClaName('settings')}>
            Settings
        </div>
    );
};

export default memo(Settings);
