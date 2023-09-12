import type { BuiltinTheme, ColorScheme, UniqueId } from 'mo/types';

export interface TokenColor {
    name?: string;
    scope?: string | string[];
    settings?: Record<string, string>;
}

export enum ColorThemeEvent {
    onChange = 'colorTheme.onChange',
}

export interface IColorTheme {
    /**
     * The id of component, theme will be applied by this ID
     */
    id: UniqueId;
    label: string;
    name?: string;
    uiTheme?: BuiltinTheme;
    description?: string;
    type?: ColorScheme;
    colors?: Record<string, string>;
    tokenColors?: TokenColor[];
    /**
     * The semanticTokenColors mappings as well as
     * the semanticHighlighting setting
     * allow to enhance the highlighting in the editor
     * More info visit: https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide
     */
    semanticHighlighting?: boolean;
}

export class ColorThemeModel {
    constructor(public themes: IColorTheme[] = [], public current: UniqueId = '') {}
}
