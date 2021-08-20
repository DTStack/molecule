/**
 * VSCode theme extends guides: https://code.visualstudio.com/api/extension-guides/color-theme
 * https://code.visualstudio.com/api/references/theme-color
 */

import 'reflect-metadata';
import { IColorTheme } from 'mo/model/colorTheme';
import { container, inject, singleton } from 'tsyringe';
import { editor as monacoEditor } from 'mo/monaco';
import { applyStyleSheetRules } from 'mo/common/css';
import { getThemeData, convertToCSSVars } from './helper';
import logger from 'mo/common/logger';
import { prefixClaName } from 'mo/common/className';
import { searchById } from '../helper';

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
    getThemeById(id: string): void;
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
}

export const BUILT_IN_THEME: IColorTheme = {
    id: 'Default Dark+',
    name: 'Default Dark+',
    label: 'Default Dark+',
    uiTheme: 'vs-dark',
};
export const DEFAULT_THEME_CLASS_NAME = prefixClaName('customize-theme');

@singleton()
export class ColorThemeService implements IColorThemeService {
    private colorThemes: IColorTheme[] = [BUILT_IN_THEME];
    private colorTheme: IColorTheme = BUILT_IN_THEME;

    constructor(
        @inject('ColorThemes') colorThemes: IColorTheme[] = [],
        @inject('ColorTheme') colorTheme?: IColorTheme
    ) {
        this.addThemes(colorThemes);
        if (colorTheme) {
            this.setTheme(colorTheme.id);
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
        const theme = this.getThemeById(id);
        if (theme) {
            this.colorTheme = { ...theme };
            const themeData = getThemeData(theme);
            const styleSheetContent = convertToCSSVars(themeData.colors);
            applyStyleSheetRules(styleSheetContent, DEFAULT_THEME_CLASS_NAME);

            // Update monaco-editor theme
            monacoEditor.defineTheme(DEFAULT_THEME_CLASS_NAME, themeData);
            monacoEditor.setTheme(DEFAULT_THEME_CLASS_NAME);
        } else {
            logger.error(`Can't get any theme by this id:` + id);
        }
    }

    public getThemes() {
        return this.colorThemes;
    }

    public reload() {
        this.setTheme(this.getColorTheme().id);
    }

    public reset() {
        this.colorThemes = [BUILT_IN_THEME];
        this.setTheme(BUILT_IN_THEME.id);
    }
}

container.register('ColorThemes', { useValue: [] });
container.register('ColorTheme', { useValue: BUILT_IN_THEME });
