import * as monaco from 'monaco-editor';

export interface IConfiguration {
    [key: string]: any;
}

export type IEditorSettings = monaco.editor.IEditorOptions &
    monaco.editor.IGlobalEditorOptions;

/**
 * The Settings configuration event definition
 */
export enum SettingsEvent {
    /**
     * The settings content changed
     */
    OnChange = 'settings.onchange',
}

const initialWorkbenchSetting = {
    colorTheme: 'Default Dark+',
};

const initialEditorSetting: IEditorSettings = {
    renderWhitespace: 'none',
    tabSize: 4,
    fontSize: 14,
};

export const BuiltInSettingsTab = {
    id: 'Settings',
    name: 'settings.json',
    data: {
        language: 'json',
        value: '',
    },
};

export type IWorkbenchSettings = typeof initialWorkbenchSetting;

export interface ISettings extends IConfiguration {
    workbench: IWorkbenchSettings;
    editor: IEditorSettings;
}
export class SettingsModel implements ISettings {
    workbench: IWorkbenchSettings;
    editor: IEditorSettings;

    constructor(
        workbench: IWorkbenchSettings = initialWorkbenchSetting,
        editor: IEditorSettings = initialEditorSetting
    ) {
        this.workbench = workbench;
        this.editor = editor;
    }
}
