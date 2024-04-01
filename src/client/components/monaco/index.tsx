import { type CSSProperties, useEffect, useRef } from 'react';
import useMonaco from 'mo/client/hooks/useMonaco';
import { editor } from 'mo/monaco';

export interface IEditorProps {
    className?: string;
    style?: CSSProperties;
    instance?: editor.IStandaloneCodeEditor;
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

/**
 * Monaco Editor should used by dynamic import
 */
export default function MonacoEditor({
    className,
    style,
    instance,
    options = {},
    model,
    language,
    value,
    override,
    onMount,
    onModelMount,
}: IEditorProps) {
    const parent = useRef<HTMLDivElement>(null);
    const monaco = useMonaco();

    function createDom() {
        const dom = document.createElement('div');
        dom.style.setProperty('position', 'relative');
        dom.style.setProperty('width', '100%');
        dom.style.setProperty('height', '100%');
        return dom;
    }

    useEffect(() => {
        if (!parent.current) return;
        const container = instance?.getContainerDomNode();
        if (container) {
            // performance
            if (parent.current.firstChild === container) return;
            parent.current.innerHTML = '';
            parent.current.appendChild(container);
        } else {
            const domElement = createDom();
            const editorInstance = monaco.create(domElement, { ...options, model: null, language, value }, override);
            onMount?.(editorInstance);
        }
    }, [instance]);

    useEffect(() => {
        if (instance) {
            instance.updateOptions(options);
        }
    }, [options]);

    useEffect(() => {
        if (instance) {
            if (!model || model.isDisposed()) {
                const model = editor.createModel(value || '', language);
                if (model) {
                    instance.setModel(model);
                    onModelMount?.(model);
                }
            } else {
                const currentModel = instance.getModel();
                if (model === currentModel) return;
                instance.setModel(model);
            }
        }
    }, [model, instance]);

    return (
        <div
            ref={parent}
            className={className}
            style={{
                height: '100%',
                width: '100%',
                ...style,
            }}
        />
    );
}
