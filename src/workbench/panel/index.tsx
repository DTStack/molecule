import 'mo/workbench/panel/style.scss';
import * as React from 'react';
import { memo } from 'react';
import { prefixClaName } from 'mo/common/className';

const defaultClassName = prefixClaName('panel');

function Panel(props) {
    console.log('Panel render:', props);

    return <div className={defaultClassName}>Panel</div>;
}

export default memo(Panel);
