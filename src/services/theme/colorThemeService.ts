/**
 * VSCode theme extends guides: https://code.visualstudio.com/api/extension-guides/color-theme
 * https://code.visualstudio.com/api/references/theme-color
 */

import { IExtension } from 'mo/model/extension';
import { IColorTheme } from 'mo/model/colorTheme';
import { container, inject, singleton } from 'tsyringe';
import * as monaco from 'monaco-editor';
import { applyStyleSheetRules } from 'mo/common/css';

export interface IColorThemeService {
    colorThemes: IColorTheme[];
    colorTheme: IColorTheme;
}

@singleton()
export class ColorThemeService implements IColorThemeService {
   
    colorThemes: IColorTheme[];
    colorTheme: IColorTheme;

    constructor(
        @inject('ColorThemes') colorThemes: IColorTheme[] = [],
        @inject('ColorTheme') colorTheme: IColorTheme,
    ) {
        
        this.colorThemes = colorThemes;
        this.colorTheme = colorTheme;
        this.init();
    }

    public init() {
        monaco.editor.setTheme(this.colorTheme.id);
    }

    public load(extension: IExtension): void {
        // const theme = this.parse(extension);
    }

    public getThemeById(themeId: string, extension: IExtension) {}

    public applyTheme() {
        applyStyleSheetRules('', '');
    }
}

container.register('ColorThemes', { useValue: [] });
container.register('ColorTheme', { useValue: true });
