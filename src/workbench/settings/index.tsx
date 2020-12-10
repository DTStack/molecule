import 'mo/workbench/settings/style.scss';
import * as React from 'react';
import { memo } from 'react';

import { prefixClaName } from 'mo/common/className';

const defaultClassName = prefixClaName('settings');

export function Settings() {
    return <div className={defaultClassName}>Settings</div>;
}

export default memo(Settings);
