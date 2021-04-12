import { EditorAction } from 'monaco-editor/esm/vs/editor/browser/editorExtensions';
export declare class SelectColorThemeAction extends EditorAction {
    static readonly ID = "workbench.action.selectTheme";
    static readonly LABEL: any;
    private quickInputService;
    constructor();
    run(accessor: any): Promise<void>;
}
