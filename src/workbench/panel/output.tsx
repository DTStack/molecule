import * as React from 'react';
import { prefixClaName } from 'mo/common/className';
import { IPanelItem } from 'mo/model/workbench/panel';
import MonacoEditor from 'mo/components/monaco';

const defaultClassName = prefixClaName('output');

function Output(props: IPanelItem) {
    const { data = '' } = props;
    // TODO: Output should export the editorInstance, it's used for update the editor Language, Monarch
    return (
        <div
            className={defaultClassName}
            style={{ width: '100%', height: '100%' }}
        >
            <MonacoEditor
                key={data.length}
                options={{
                    value: data,
                    readOnly: true,
                    lineDecorationsWidth: 0,
                    lineNumbers: 'off',
                    minimap: {
                        enabled: false,
                    },
                    automaticLayout: true,
                }}
            />
        </div>
    );
}

export default Output;
