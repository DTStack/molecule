import * as React from 'react';
import { memo } from 'react';
import { prefixClaName } from 'mo/common/className';
import { IPanelItem } from 'mo/model/workbench/panel';
import MonacoEditor from 'mo/components/monaco';

const defaultClassName = prefixClaName('output');

function Output(props: IPanelItem) {
    const { data } = props;
    return (
        <div className={defaultClassName}>
            <MonacoEditor
                options={{
                    value: data,
                    readOnly: true,
                    lineDecorationsWidth: 0,
                    lineNumbers: 'off',
                    automaticLayout: true,
                }}
            />
        </div>
    );
}

export default memo(Output);
