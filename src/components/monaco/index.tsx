import 'reflect-metadata';
import * as React from 'react';
import { useEffect } from 'react';
import * as monaco from 'monaco-editor';
import { APP_PREFIX } from 'mo/common/const';
import { getOrCreateModel } from 'mo/common/utils';
import { monacoService } from 'mo/monaco/monacoService';
import usePrevious from 'mo/common/hooks/usePrevious';
import useUpdate from 'mo/common/hooks/useUpdate';
import useMount from 'mo/common/hooks/useMount'

export const SYMBOL_MONACO_EDITOR = `${APP_PREFIX}-monaco-editor`;

export interface IMonacoEditorProps extends React.ComponentProps<any> {
    /**
     * The value of monaco editor
     */
    value?: string;
    /**
     * The option of monaco editor
     */
    options?: monaco.editor.IStandaloneEditorConstructionOptions;
    /**
     * The override for monaco editor
     */
    override?: monaco.editor.IEditorOverrideServices;
    editorInstanceRef?: (instance: monaco.editor.IStandaloneCodeEditor) => void;
}

const viewStates = new Map();

export default function MonacoEditor(props: IMonacoEditorProps) {

    let monacoDom!: HTMLDivElement;
    let monacoInstance!: monaco.editor.IStandaloneCodeEditor;
    const { style, path, options = {}, override, editorInstanceRef } = props;
    const { value, language } = options
    const previousPath = usePrevious(path);
    let renderStyle: React.CSSProperties = {
        position: 'relative',
        minHeight: '400px',
        height: '100%',
        width: '100%',
    };

    renderStyle = style ? Object.assign(renderStyle, style) : renderStyle;
    
    useMount(() => {
        return () => disposeEditor()
    });

    const createEditor = () => {
        getOrCreateModel(
            monaco,
            value,
            language,
            path
        );

        monacoInstance = monacoService?.create(
            monacoDom,
            options,
            override
        );

        monacoInstance?.restoreViewState(viewStates.get(path))
        editorInstanceRef?.(monacoInstance);
    }



    function disposeEditor() {
        // monacoInstance?.dispose();
        // monacoInstance.getModel()?.dispose();    
    }

    useEffect(() => {
        createEditor()
    }, [createEditor])

    useUpdate(() => {
        const model = getOrCreateModel(
            monaco,
            value,
            language,
            path
        );
    
        if (model !== monacoInstance?.getModel()) {
          viewStates.set(previousPath, monacoInstance?.saveViewState());
          monacoInstance.setModel(model);
          monacoInstance.restoreViewState(viewStates.get(path));
        }
    }, [path]);

    return (
        <div
            style={renderStyle}
            className={SYMBOL_MONACO_EDITOR}
            ref={(domIns: HTMLDivElement) => {
                monacoDom = domIns;
            }}
        />
    );
}
