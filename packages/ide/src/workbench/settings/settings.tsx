import React, { memo } from 'react';

import { prefixClaName } from '@dtinsight/molecule-common';

const defaultClassName = prefixClaName('settings');

export function Settings() {
    return <div className={defaultClassName}>Settings</div>;
}

export default memo(Settings);
