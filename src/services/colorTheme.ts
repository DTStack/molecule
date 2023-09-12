/**
 * VSCode theme extends guides: https://code.visualstudio.com/api/extension-guides/color-theme
 * https://code.visualstudio.com/api/references/theme-color
 */
import { loader } from '@monaco-editor/react';
import { prefix } from 'mo/client/classNames';
import { defaultDark, defaultHc, defaultVS } from 'mo/const/theme';
import { BaseService } from 'mo/glue';
import { ColorThemeEvent, ColorThemeModel, type IColorTheme } from 'mo/models/colorTheme';
import {
    type ArraylizeOrSingle,
    type BuiltinTheme,
    ColorScheme,
    type ColorSchemeLiteral,
    type UniqueId,
} from 'mo/types';
import {
    arraylize,
    colorLightOrDark,
    colorsToString,
    convertToCSSVars,
    convertToToken,
    searchById,
} from 'mo/utils';
import logger from 'mo/utils/logger';

export interface IColorThemeService extends BaseService<ColorThemeModel> {
    /**
     * Add themes into `colorThemes`
     *
     * This will update the duplicated themes found in `colorThemes`
     * @param themes
     */
    addThemes(themes: ArraylizeOrSingle<IColorTheme>): void;
    /**
     * Set the current Color Theme via id,
     * Please ensure the theme could be found in `colorThemes`
     * @param id The `id` is required
     */
    setTheme(id: UniqueId): void;
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
    getThemeById(id: UniqueId): IColorTheme | undefined;
    /**
     * Get the current Color Theme
     */
    getColorTheme(): IColorTheme | undefined;
    /**
     * Reset theme
     */
    reset(): void;
    /**
     * Get the mode('dark' or 'light') of the current Color Theme
     */
    getColorThemeMode(): ColorScheme;
    /**
     * Listen to the theme changed event
     * @param callback
     */
    onChange(
        callback: (prev: IColorTheme, next: IColorTheme, themeMode: ColorSchemeLiteral) => void
    ): void;
}

export class ColorThemeService extends BaseService<ColorThemeModel> implements IColorThemeService {
    static DEFAULT_THEME_CLASS_NAME = prefix('customize-theme');

    protected state: ColorThemeModel;

    constructor() {
        super('colorTheme');
        this.state = new ColorThemeModel();
    }

    private getDefaultTheme(uiTheme?: BuiltinTheme) {
        switch (uiTheme) {
            case 'vs-dark': {
                return { ...defaultDark };
            }
            case 'vs': {
                return { ...defaultVS };
            }
            default: {
                return { ...defaultHc };
            }
        }
    }

    private applyColorTheme() {
        const current = this.getColorTheme();
        if (!current) return;
        const styleSheetContent = convertToCSSVars(current.colors || {});
        window.requestAnimationFrame(() => {
            const styleEle = document.querySelector<HTMLStyleElement>(
                `.${ColorThemeService.DEFAULT_THEME_CLASS_NAME}`
            );
            if (!styleEle) {
                const elStyle = document.createElement('style');
                elStyle.type = 'text/css';
                elStyle.className = ColorThemeService.DEFAULT_THEME_CLASS_NAME;
                elStyle.innerHTML = styleSheetContent;
                document.head.appendChild(elStyle);
            } else {
                styleEle.innerHTML = styleSheetContent;
            }
        });
        loader.init().then((monaco) => {
            monaco.editor.defineTheme(ColorThemeService.DEFAULT_THEME_CLASS_NAME, {
                inherit: true,
                base: current.uiTheme || 'vs-dark',
                colors: colorsToString(current.colors || {}),
                rules: convertToToken(current.tokenColors) || [],
            });
            monaco.editor.setTheme(ColorThemeService.DEFAULT_THEME_CLASS_NAME);
        });
    }

    public addThemes(themes: ArraylizeOrSingle<IColorTheme>): void {
        const next = arraylize(themes);
        next.forEach((theme) => {
            const target = this.getThemeById(theme.id);
            if (target) {
                logger.warn(
                    `There has ${theme.name} already in theme, it'll update this theme otherwise please don't add the duplicated theme`
                );
                this.updateTheme(theme);
            } else {
                // Inject default theme colors into theme
                theme.colors = { ...this.getDefaultTheme(theme.uiTheme), ...theme.colors };
                this.setState((prev) => ({
                    ...prev,
                    themes: [...prev.themes, theme],
                }));
            }
        });
    }

    public updateTheme(theme: IColorTheme) {
        if (!theme.id) {
            logger.error("Update the theme failed!  The 'id' is required in the theme data.");
        }
        const target = this.getThemeById(theme.id);
        if (!target) {
            logger.error(`Update the theme failed! There is no theme found via '${theme.id}'`);
            return;
        }
        // Inject default theme colors into theme
        theme.colors = { ...this.getDefaultTheme(theme.uiTheme), ...theme.colors };
        Object.assign(target, theme);
        // If current theme be updated, then reload it
        this.setState((prev) => ({ ...prev }));
        if (theme.id === this.getState().current) {
            this.applyColorTheme();
        }
    }

    public getThemeById(id: UniqueId): IColorTheme | undefined {
        return this.getState().themes.find(searchById(id));
    }

    public getColorTheme() {
        const { themes, current } = this.getState();
        if (!current) return undefined;
        return themes.find(searchById(current));
    }

    public setTheme(id: UniqueId) {
        this.setState({
            current: id,
        });
        this.applyColorTheme();
    }

    public getColorThemeMode() {
        const theme = this.getColorTheme();
        if (!theme) return ColorScheme.DARK;
        const { colors, type } = theme;

        // Try to get ColorScheme from type
        if (type === ColorScheme.DARK || type === ColorScheme.HIGH_CONTRAST) {
            return ColorScheme.DARK;
        } else if (type === ColorScheme.LIGHT) {
            return ColorScheme.LIGHT;
        }

        // Try to get ColorScheme from background color
        const background =
            colors?.['editor.background'] ||
            colors?.['tab.activeBackground'] ||
            colors?.['molecule.welcomeBackground'];
        if (background) {
            return colorLightOrDark(background);
        }

        // Default dark
        return ColorScheme.DARK;
    }

    public getThemes() {
        return this.getState().themes;
    }

    public reset() {
        this.setState(new ColorThemeModel());
    }

    // ===================== Subscriptions =====================
    public onChange(
        callback: (prev: IColorTheme, next: IColorTheme, themeMode: ColorSchemeLiteral) => void
    ): void {
        this.subscribe(ColorThemeEvent.onChange, callback);
    }
}
