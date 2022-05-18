/**
 * VSCode theme extends guides: https://code.visualstudio.com/api/extension-guides/color-theme
 * https://code.visualstudio.com/api/references/theme-color
 */

import 'reflect-metadata';
import {
    IColorTheme,
    ColorThemeMode,
    ColorScheme,
    ColorThemeEvent,
} from 'mo/model/colorTheme';
import { singleton } from 'tsyringe';
import { editor as monacoEditor } from 'mo/monaco';
import { applyStyleSheetRules } from 'mo/common/css';
import { getThemeData, convertToCSSVars } from './helper';
import logger from 'mo/common/logger';
import { prefixClaName } from 'mo/common/className';
import { searchById, colorLightOrDark } from 'mo/common/utils';
import { GlobalEvent } from 'mo/common/event';

export interface IColorThemeService {
    /**
     * Add themes into `colorThemes`
     *
     * This will update the duplicated themes found in `colorThemes`
     * @param themes
     */
    addThemes(themes: IColorTheme | IColorTheme[]): void;
    /**
     * Set the current Color Theme via id,
     * Please ensure the theme could be found in `colorThemes`
     * @param id The `id` is required
     */
    setTheme(id: string): void;
    /**
     * Update specific theme,
     * @param theme The `id` is required in theme
     */
    updateTheme(theme: IColorTheme): void;
    /**
     * Get all themes in `colorThemes`
     */
    getThemes(): IColorTheme[];
    /**
     * Get specific theme via id
     * @param id
     */
    getThemeById(id: string): IColorTheme | undefined;
    /**
     * Get the current Color Theme
     */
    getColorTheme(): IColorTheme;
    /**
     * Reload current theme
     */
    reload(): void;
    /**
     * Reset theme
     */
    reset(): void;
    /**
     * Get the mode('dark' or 'light') of the current Color Theme
     */
    getColorThemeMode(): ColorThemeMode;
    /**
     * Listen to the theme changed event
     * @param callback
     */
    onChange(
        callback: (
            prev: IColorTheme,
            next: IColorTheme,
            themeMode: ColorThemeMode
        ) => void
    ): void;
}

/**
 * @ignore
 */
export const BuiltInColorTheme: IColorTheme = {
    id: 'Default Dark+',
    name: 'Default Dark+',
    label: 'Default Dark+',
    uiTheme: 'vs-dark',
};
/**
 * @ignore
 */
export const DEFAULT_THEME_CLASS_NAME = prefixClaName('customize-theme');

@singleton()
export class ColorThemeService
    extends GlobalEvent
    implements IColorThemeService
{
    private colorThemes: IColorTheme[] = [BuiltInColorTheme];
    private colorTheme: IColorTheme = BuiltInColorTheme;

    constructor() {
        super();
        if (this.colorTheme) {
            this.setTheme(this.colorTheme.id);
        }
    }

    public addThemes(themes: IColorTheme | IColorTheme[]): void {
        const nextThemes = Array.isArray(themes) ? themes : [themes];
        nextThemes.forEach((theme) => {
            const targetTheme = this.getThemeById(theme.id);
            if (targetTheme) {
                logger.warn(
                    `There has ${theme.name} already in theme, it'll update this theme otherwise please don't add the duplicated theme`
                );
                this.updateTheme(theme);
            } else {
                this.colorThemes.push(Object.assign({}, theme));
            }
        });
    }

    public updateTheme(theme: IColorTheme) {
        if (!theme.id) {
            logger.error(
                "Update the theme failed!  The 'id' is required in the theme data."
            );
        }
        const index = this.colorThemes.findIndex(searchById(theme.id));
        if (index > -1) {
            Object.assign(this.colorThemes[index], theme);

            // If current theme be updated, then reload it
            if (this.colorThemes[index].id === this.getColorTheme().id) {
                this.reload();
            }
        } else {
            logger.error(
                `Update the theme failed! There is no theme found via '${theme.id}'`
            );
        }
    }

    public getThemeById(id: string): IColorTheme | undefined {
        const target = this.colorThemes.find(searchById(id));
        return target ? Object.assign({}, target) : undefined;
    }

    public getColorTheme(): IColorTheme {
        return Object.assign({}, this.colorTheme);
    }

    public setTheme(id: string) {
        const prevTheme = this.getColorTheme();
        const theme = this.getThemeById(id);
        if (theme) {
            this.colorTheme = { ...theme };
            const themeData = getThemeData(theme);
            const styleSheetContent = convertToCSSVars(themeData.colors);
            applyStyleSheetRules(styleSheetContent, DEFAULT_THEME_CLASS_NAME);

            // Update monaco-editor theme
            monacoEditor.defineTheme(DEFAULT_THEME_CLASS_NAME, themeData);
            monacoEditor.setTheme(DEFAULT_THEME_CLASS_NAME);

            const themeMode = this.getColorThemeMode();
            this.emit(
                ColorThemeEvent.onChange,
                prevTheme,
                { ...this.colorTheme },
                themeMode
            );
        } else {
            logger.error(`Can't get the theme by id:` + id);
        }
    }

    public getThemes() {
        return this.colorThemes;
    }

    public reload() {
        this.setTheme(this.getColorTheme().id);
    }

    public reset() {
        this.colorThemes = [BuiltInColorTheme];
        this.setTheme(BuiltInColorTheme.id);
    }

    public getColorThemeMode(): ColorThemeMode {
        const { colors, type } = this.colorTheme;

        // Try to get colorThemeMode from type
        if (type === ColorScheme.DARK || type === ColorScheme.HIGH_CONTRAST) {
            return ColorThemeMode.dark;
        } else if (type === ColorScheme.LIGHT) {
            return ColorThemeMode.light;
        }

        // Try to get colorThemeMode from background color
        const background =
            colors?.['editor.background'] ||
            colors?.['tab.activeBackground'] ||
            colors?.['molecule.welcomeBackground'];
        if (background) {
            return colorLightOrDark(background) as ColorThemeMode;
        }

        // Default dark
        return ColorThemeMode.dark;
    }

    public onChange(
        callback: (
            prev: IColorTheme,
            next: IColorTheme,
            themeMode: ColorThemeMode
        ) => void
    ): void {
        this.subscribe(ColorThemeEvent.onChange, callback);
    }
}
