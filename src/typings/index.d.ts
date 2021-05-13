/// <reference path="../../node_modules/monaco-editor/monaco.d.ts" />

/**
 * Global flag for development
 */
declare let __DEVELOPMENT__: boolean;

/**
 * Global window object
 */
declare const window: Window;

declare const define: any;

type ReactNode = React.ReactNode;
interface HTMLElementProps<T = any> {
    id?: string;
    title?: string;
    style?: React.CSSProperties;
    className?: string;
}

type LiteralUnion<T extends U, U> = T | (U & {});

type IStandaloneCodeEditor = monaco.editor.IStandaloneCodeEditor;
type IEditorSettings = monaco.editor.IEditorOptions &
    monaco.editor.IGlobalEditorOptions;
