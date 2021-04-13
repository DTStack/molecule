/**
 * VSCode theme extends guides: https://code.visualstudio.com/api/extension-guides/color-theme
 * https://code.visualstudio.com/api/references/theme-color
 */

import { IColorTheme } from 'mo/model/colorTheme';
import { container, inject, singleton } from 'tsyringe';
import * as monaco from 'monaco-editor';
import { applyStyleSheetRules } from 'mo/common/css';
import { getThemeData, convertToCSSVars } from './helper';
import logger from 'mo/common/logger';
import { prefixClaName } from 'mo/common/className';

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

const BUILT_IN_THEME: IColorTheme = {
    id: 'Default Dark+',
    name: 'Default Dark+',
    label: 'Default Dark+',
    uiTheme: 'vs-dark',
};
const DEFAULT_THEME_CLASS_NAME = prefixClaName('customize-theme');

@singleton()
export class ColorThemeService implements IColorThemeService {
    colorThemes: IColorTheme[];
    colorTheme: IColorTheme;

    constructor(
        @inject('ColorThemes') colorThemes: IColorTheme[] = [],
        @inject('ColorTheme') colorTheme: IColorTheme = BUILT_IN_THEME
    ) {
        this.colorThemes = colorThemes;
        this.colorTheme = colorTheme;
        this.init();
    }
    getColorTheme(): IColorTheme {
        return this.colorTheme;
    }

    public init() {
        this.applyTheme(this.colorTheme.id);
    }

    public load(themes: IColorTheme[]): void {
        if (themes.length > 0) {
            this.colorThemes = this.colorThemes.concat(themes);
            this.init();
        }
    }

    public getThemeById(id: string): IColorTheme | undefined {
        return this.colorThemes.find((theme: IColorTheme) => theme.id === id);
    }

    public applyTheme(id: string) {
        const theme = this.getThemeById(id);
        if (theme) {
            this.colorTheme = { ...theme };
            const themeData = getThemeData(theme);
            const styleSheetContent = convertToCSSVars(themeData.colors);
            applyStyleSheetRules(styleSheetContent, DEFAULT_THEME_CLASS_NAME);

            // Update monaco-editor theme
            monaco.editor.defineTheme(DEFAULT_THEME_CLASS_NAME, themeData);
            monaco.editor.setTheme(DEFAULT_THEME_CLASS_NAME);
        } else {
            logger.error(`Can't get any theme by this id:` + id);
        }
    }

    public getThemes() {
        return this.colorThemes;
    }
}

container.register('ColorThemes', { useValue: [] });
container.register('ColorTheme', { useValue: BUILT_IN_THEME });
