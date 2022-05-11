import { IEditorOptions } from './workbench';

/**
 * The Settings configuration event definition
 */
export enum SettingsEvent {
    /**
     * The settings content changed
     */
    OnChange = 'settings.onchange',
}

export interface ISettings {
    colorTheme?: string;
    editor?: IEditorOptions;
    locale?: string;
    [index: string]: any;
}

export class SettingsModel implements ISettings {
    colorTheme: string;
    editor: IEditorOptions;
    locale?: string;

    constructor(colorTheme: string, editor: IEditorOptions, locale?: string) {
        this.colorTheme = colorTheme;
        this.editor = editor;
        this.locale = locale;
    }
    [key: string]: any;
}
