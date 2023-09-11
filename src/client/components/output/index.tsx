import { useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import useConnector from 'mo/client/hooks/useConnector';
import type { editor } from 'monaco-editor';

import variables from './index.scss';

export default function Output() {
    const output = useConnector('output');
    const instance = useRef<editor.IStandaloneCodeEditor | undefined>(undefined);

    useEffect(() => {
        if (!instance.current) return;
        if (instance.current.getModel()?.getValue() !== output.value) {
            instance.current.getModel()?.setValue(output.value);
            instance.current.revealLine(instance.current.getModel()?.getLineCount() || 0);
        }
    }, [output.value]);

    return (
        <Editor
            height="100%"
            className={variables.ouput}
            defaultValue={output.value}
            options={{
                readOnly: true,
                lineDecorationsWidth: 0,
                lineNumbers: 'off',
                minimap: {
                    enabled: false,
                },
                automaticLayout: true,
                scrollBeyondLastLine: false,
                contextmenu: false,
            }}
            // FIXME: Support competitable with current theme
            theme="vs-dark"
            onMount={(editor) => (instance.current = editor)}
        />
    );
}
