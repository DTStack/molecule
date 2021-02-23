import * as React from 'react';
import { memo } from 'react';
import { prefixClaName } from 'mo/common/className';
import { IPanelItem } from 'mo/model/workbench/panel';

const defaultClassName = prefixClaName('problems');

function Problems(props: IPanelItem) {
    const { data } = props;
    return (
        <div className={defaultClassName} style={{ margin: '0 18px' }}>
            Problems {data}
        </div>
    );
}

export default memo(Problems);
