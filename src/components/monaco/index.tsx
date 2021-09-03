import 'reflect-metadata';
import React from 'react';
import { PureComponent } from 'react';
import { editor } from 'monaco-editor';
import { isEqual } from 'lodash';
import { APP_PREFIX } from 'mo/common/const';
import { IMonacoService, MonacoService } from 'mo/monaco/monacoService';
import { container } from 'tsyringe';

export const SYMBOL_MONACO_EDITOR = `${APP_PREFIX}-monaco-editor`;

export interface IMonacoEditorProps extends React.ComponentProps<any> {
    /**
     * The option of monaco editor
     */
    options?: editor.IStandaloneEditorConstructionOptions;
    /**
     * The override for monaco editor
     */
    override?: editor.IEditorOverrideServices;
    editorInstanceRef?: (instance: editor.IStandaloneCodeEditor) => void;
    onChangeEditorProps?: (
        props: IMonacoEditorProps,
        nextProps: IMonacoEditorProps
    ) => void;
}

export class MonacoEditor extends PureComponent<IMonacoEditorProps> {
    /**
     * The instance of monaco
     */
    private monacoInstance!: editor.IStandaloneCodeEditor | undefined;
    /**
     * The dom element of editor container
     */
    private monacoDom!: HTMLDivElement;

    private readonly monacoService: IMonacoService;

    constructor(props) {
        super(props);
        this.monacoService = container.resolve<IMonacoService>(MonacoService);
    }

    componentDidMount() {
        const { options = {}, override, editorInstanceRef } = this.props;
        this.monacoInstance = this.monacoService?.create(
            this.monacoDom,
            options,
            override
        );
        editorInstanceRef?.(this.monacoInstance);
    }

    componentDidUpdate(prevProps) {
        const { onChangeEditorProps } = this.props;
        // TODO: Functions are compared by strict equality
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
