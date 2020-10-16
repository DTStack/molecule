import * as React from 'react';
import { memo } from 'react';

import { prefixClaName } from '@/common/className';
import './settings.scss';

export function SettingBar() {
    return (
        <div className={prefixClaName('settings')}>
            <a className='settings-action codicon codicon-settings-gear'></a>
        </div>
    );
};

export default memo(SettingBar);
