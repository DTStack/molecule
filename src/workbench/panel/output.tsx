import * as React from 'react';
import { prefixClaName } from 'mo/common/className';
import { IOutput } from 'mo/model/workbench/panel';
import { MonacoEditor } from 'mo/components/monaco';

const defaultClassName = prefixClaName('output');

function Output(props: IOutput) {
    const { id, data = '', onUpdateEditorIns, outputEditorInstance } = props;
    const editorDidMount = React.useRef(false);

    if (!editorDidMount.current && outputEditorInstance) {
        outputEditorInstance.dispose();
    }

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
                    editorDidMount.current = true;
                }}
            />
        </div>
    );
}

export default Output;
