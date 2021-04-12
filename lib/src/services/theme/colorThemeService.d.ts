/**
 * VSCode theme extends guides: https://code.visualstudio.com/api/extension-guides/color-theme
 * https://code.visualstudio.com/api/references/theme-color
 */
import { IColorTheme } from 'mo/model/colorTheme';
export interface IColorThemeService {
    readonly colorThemes: IColorTheme[];
    readonly colorTheme: IColorTheme;
    /**
     * Load the themes from the extension
     */
    load(themes: IColorTheme[]): void;
    /**
     * Apply the theme to the IDE by theme id
     * @param id theme Id
     */
    applyTheme(id: string): void;
    getThemes(): IColorTheme[];
    getThemeById(id: string): void;
    /**
     * Get the current Color Theme
     */
    getColorTheme(): IColorTheme;
}
export declare class ColorThemeService implements IColorThemeService {
    colorThemes: IColorTheme[];
    colorTheme: IColorTheme;
    constructor(colorThemes?: IColorTheme[], colorTheme?: IColorTheme);
    getColorTheme(): IColorTheme;
    init(): void;
    load(themes: IColorTheme[]): void;
    getThemeById(id: string): IColorTheme | undefined;
    applyTheme(id: string): void;
    getThemes(): IColorTheme[];
}
