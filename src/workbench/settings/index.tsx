import 'mo/workbench/settings/style.scss';
import * as React from 'react';
import { memo } from 'react';

import { prefixClaName } from 'mo/common/className';

export function SettingBar() {
    return (
        <div className={prefixClaName('settings')}>
            <a className='settings-action codicon codicon-settings-gear'></a>
        </div>
    );
};

export default memo(SettingBar);
