import { type CSSProperties, useEffect, useRef } from 'react';
import useMonaco from 'mo/client/hooks/useMonaco';
import { editor } from 'monaco-editor';

export interface IEditorProps {
    className?: string;
    style?: CSSProperties;
    /**
     * The option of monaco editor
     */
    options?: editor.IEditorOptions & editor.IGlobalEditorOptions;
    model?: editor.ITextModel;
    language?: string;
    value?: string;
    /**
     * The override for monaco editor
     */
    override?: editor.IEditorOverrideServices;
    onMount?: (instance: editor.IStandaloneCodeEditor) => void;
    onModelMount?: (model: editor.ITextModel) => void;
}

export default function MonacoEditor({
    className,
    style,
    options = {},
    model,
    language,
    value,
    override,
    onMount,
    onModelMount,
}: IEditorProps) {
    const dom = useRef<HTMLDivElement>(null);
    const monacoInstance = useRef<editor.IStandaloneCodeEditor | undefined>(undefined);

    const monaco = useMonaco();

    useEffect(() => {
        if (!monacoInstance.current) {
            monacoInstance.current = monaco.create(
                dom.current!,
                { ...options, model: null, language, value },
                override
            );
            onMount?.(monacoInstance.current);
        }

        return () => {
            monacoInstance.current?.dispose();
        };
    }, []);

    useEffect(() => {
        const instance = monacoInstance.current;
        if (instance) {
            if (!model || model.isDisposed()) {
                const model = editor.createModel(value || '', language);
                instance.setModel(model);
                onModelMount?.(model);
            } else {
                const currentModel = instance.getModel();
                if (model === currentModel) return;
                instance.setModel(model);
            }
        }
    }, [model]);

    useEffect(() => {
        if (monacoInstance.current) {
            monacoInstance.current.updateOptions(options);
        }
    }, [options]);

    return (
        <div
            style={{
                position: 'relative',
                height: '100%',
                width: '100%',
                ...style,
            }}
            className={className}
            ref={dom}
        />
    );
}
