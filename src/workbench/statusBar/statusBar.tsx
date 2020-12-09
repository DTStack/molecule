import 'mo/workbench/statusBar/style.scss';

import * as React from 'react';
import { memo } from 'react';

import { prefixClaName } from 'mo/common/className';
import { IStatusBar } from 'mo/model/workbench/statusBar';

const defaultClassName = prefixClaName('statusBar');

function StatusBar(props: IStatusBar) {
    return <div className={defaultClassName}>StatusBar</div>;
}

export default memo(StatusBar);
