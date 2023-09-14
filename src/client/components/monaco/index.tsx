import { type CSSProperties, useEffect, useRef } from 'react';
import useMonaco from 'mo/client/hooks/useMonaco';
import type { editor } from 'monaco-editor';

interface IEditorProps {
    className?: string;
    style?: CSSProperties;
    /**
     * The option of monaco editor
     */
    options?: editor.IStandaloneEditorConstructionOptions;
    /**
     * The override for monaco editor
     */
    override?: editor.IEditorOverrideServices;
    onMount?: (instance: editor.IStandaloneCodeEditor) => void;
}

export default function MonacoEditor({
    className,
    style,
    options = {},
    override,
    onMount,
}: IEditorProps) {
    const monacoDom = useRef<HTMLDivElement>(null);
    const monacoInstance = useRef<editor.IStandaloneCodeEditor | undefined>(undefined);

    const monaco = useMonaco();

    useEffect(() => {
        if (!monacoInstance.current) {
            monacoInstance.current = monaco.create(monacoDom.current!, options, override);
            // editorInstanceRef?.(this.monacoInstance);
            onMount?.(monacoInstance.current!);
        }
    }, []);

    return (
        <div
            style={{
                position: 'relative',
                height: '100%',
                width: '100%',
                ...style,
            }}
            className={className}
            ref={monacoDom}
        />
    );
}
