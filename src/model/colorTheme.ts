export interface IColors {
    [colorId: string]: string;
}
export interface TokenColor extends Object {
    name?: string;
    scope?: string | string[];
    settings?: object;
}

/**
 * Color scheme used by the OS and by color themes.
 */
export enum ColorScheme {
    DARK = 'dark',
    LIGHT = 'light',
    HIGH_CONTRAST = 'hc',
}

export enum ColorThemeMode {
    dark = 'dark',
    light = 'light',
}

export enum ColorThemeEvent {
    onChange = 'colorTheme.onChange',
}

export interface IColorTheme {
    /**
     * The id of component, theme will be applied by this ID
     */
    id: string;
    label: string;
    name?: string;
    uiTheme?: string;
    path?: string;
    description?: string;
    type?: ColorScheme;
    colors?: IColors;
    tokenColors?: TokenColor[];
    /**
     * The semanticTokenColors mappings as well as
     * the semanticHighlighting setting
     * allow to enhance the highlighting in the editor
     * More info visit: https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide
     */
    semanticHighlighting?: boolean;
}
