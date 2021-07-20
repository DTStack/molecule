import * as React from 'react';
import { prefixClaName } from 'mo/common/className';
import { IOutput } from 'mo/model/workbench/panel';
import { MonacoEditor } from 'mo/components/monaco';

const defaultClassName = prefixClaName('output');

function Output(props: IOutput) {
    const { id, data = '', onUpdateEditorIns } = props;

    return (
        <div className={defaultClassName}>
            <MonacoEditor
                key={id}
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
                editorInstanceRef={(editorInstance) => {
                    onUpdateEditorIns?.(editorInstance);
                }}
            />
        </div>
    );
}

export default Output;
