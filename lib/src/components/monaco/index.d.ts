import 'reflect-metadata';
import * as React from 'react';
import { PureComponent } from 'react';
import * as monaco from 'monaco-editor';
export declare const SYMBOL_MONACO_EDITOR: string;
export interface IMonacoEditorProps extends React.ComponentProps<any> {
    /**
     * The value of monaco editor
     */
    value?: string;
    /**
     * The option of monaco editor
     */
    options?: monaco.editor.IStandaloneEditorConstructionOptions;
    path?: string;
    /**
     * The override for monaco editor
     */
    override?: monaco.editor.IEditorOverrideServices;
    editorInstanceRef?: (instance: monaco.editor.IStandaloneCodeEditor) => void;
    onChangeEditorProps?: (props: IMonacoEditorProps, nextProps: IMonacoEditorProps) => void;
}
export default class MonacoEditor extends PureComponent<IMonacoEditorProps> {
    /**
     * The instance of monaco
     */
    private monacoInstance;
    /**
     * The dom element of editor container
     */
    private monacoDom;
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    render(): JSX.Element;
}
