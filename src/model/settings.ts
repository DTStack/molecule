export interface IConfiguration {
    [key: string]: any;
}

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
