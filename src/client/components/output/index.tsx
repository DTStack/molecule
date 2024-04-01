import { lazy, Suspense, useEffect, useRef } from 'react';
import { useConnector } from 'mo/client/hooks';
import type { editor } from 'mo/monaco';

import Progress from '../progress';
import variables from './index.scss';

const MonacoEditor = lazy(() => import('../monaco'));

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
        <Suspense fallback={<Progress active />}>
            <MonacoEditor
                className={variables.output}
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
                instance={instance.current}
                value={output.value}
                onMount={(editor) => (instance.current = editor)}
            />
        </Suspense>
    );
}
