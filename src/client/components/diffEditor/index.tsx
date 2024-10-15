import { type CSSProperties, useEffect, useRef } from 'react';
import useMonaco from 'mo/client/hooks/useMonaco';
import { editor } from 'mo/monaco';

export interface IDiffEditorProps {
    className?: string;
    style?: CSSProperties;
    instance?: editor.IStandaloneDiffEditor;
    /**
     * The option of monaco diff editor
     */
    options?: editor.IDiffEditorOptions;
    model?: editor.IDiffEditorModel;
    language?: string;
    /**
     * The format is [original, modified]
     */
    value?: [string, string];
    /**
     * The override for monaco diff editor
     */
    override?: editor.IEditorOverrideServices;
    onMount?: (instance: editor.IStandaloneDiffEditor) => void;
    onModelMount?: (model: editor.IDiffEditorModel) => void;
}

/**
 * Monaco Diff Editor should used by dynamic import
 */
export default function MonacoDiffEditor({
    className,
    style,
    instance,
    options = {},
    model,
    language,
    override,
    value,
    onMount,
    onModelMount,
}: IDiffEditorProps) {
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
        const container = instance?.getDomNode();
        if (container) {
            // performance
            if (parent.current.firstChild === container) return;
            parent.current.innerHTML = '';
            parent.current.appendChild(container);
        } else {
            const domElement = createDom();
            const editorInstance = monaco.createDiffEditor(domElement, { ...options, readOnly: true }, override);
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
            if (!model || model.original?.isDisposed() || model.modified?.isDisposed()) {
                const originalModel = editor.createModel(value?.[0] || '', language);
                const modifiedModel = editor.createModel(value?.[1] || '', language);
                const diffModel = { original: originalModel, modified: modifiedModel };
                instance.setModel(diffModel);
                onModelMount?.(diffModel);
            } else {
                const currentModel = instance.getModel();
                if (model.original === currentModel?.original && model.modified === currentModel?.modified) return;
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
