import * as React from 'react';
import { Component } from 'react';
import * as monaco from 'monaco-editor';
import { APP_PREFIX } from 'mo/common/const';

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

export default class MonacoEditor extends Component<IMonacoEditorProps> {
    /**
     * The instance of monaco
     */
    private monacoInstance!: monaco.editor.IStandaloneCodeEditor;
    /**
     * The dom element of editor container
     */
    private monacoDom!: HTMLDivElement;

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { options = {}, override, editorInstanceRef } = this.props;
        this.monacoInstance = monaco.editor.create(this.monacoDom, options, override);
        if (editorInstanceRef) {
            editorInstanceRef(this.monacoInstance);
        }
    }

    componentWillUnmount() {
        if (this.monacoInstance) {
            this.monacoInstance.dispose();
        }
    }

    render() {
        const { style } = this.props;
        let renderStyle: any = {
            position: 'relative',
            minHeight: '400px',
            height: '100%',
            width: '100%',
        };

        renderStyle = style ? Object.assign(renderStyle, style) : renderStyle;

        return (
            <div
                style={renderStyle}
                className={SYMBOL_MONACO_EDITOR}
                ref={(domIns: HTMLDivElement) => {
                    this.monacoDom = domIns;
                }}
            />
        );
    }
}
