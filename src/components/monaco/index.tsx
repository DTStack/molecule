import 'reflect-metadata';
import * as React from 'react';
import { PureComponent } from 'react';
import * as monaco from 'monaco-editor';
import { isEqual } from 'loadsh';
import { APP_PREFIX } from 'mo/common/const';
import { monacoService } from 'mo/monaco/monacoService';

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
    path?: string;
    /**
     * The override for monaco editor
     */
    override?: monaco.editor.IEditorOverrideServices;
    editorInstanceRef?: (instance: monaco.editor.IStandaloneCodeEditor) => void;
    onChangeEditorProps?: (
        props: IMonacoEditorProps,
        nextProps: IMonacoEditorProps
    ) => void;
}

export default class MonacoEditor extends PureComponent<IMonacoEditorProps> {
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
        this.monacoInstance = monacoService?.create(
            this.monacoDom,
            options,
            override
        );
        editorInstanceRef?.(this.monacoInstance);
    }

    componentDidUpdate(prevProps) {
        const { onChangeEditorProps } = this.props;
        !isEqual(prevProps, this.props) &&
            onChangeEditorProps?.(prevProps, this.props);
    }

    render() {
        const { style } = this.props;
        let renderStyle: React.CSSProperties = {
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
