/**
 * VSCode theme extends guides: https://code.visualstudio.com/api/extension-guides/color-theme
 * https://code.visualstudio.com/api/references/theme-color
 */

import { IExtension } from 'mo/core/extension';
import { ITheme, ThemeColor, TokenColor } from 'mo/core/theme';

/**
 * Apply css content to workbench
 * @param styleSheetContent CSS sheet content
 * @param rulesClassName Style tag class Name
 */
function _applyRules(styleSheetContent: string, rulesClassName: string) {
    const themeStyles = document.head.getElementsByClassName(rulesClassName);
    if (themeStyles.length === 0) {
        const elStyle = document.createElement('style');
        elStyle.type = 'text/css';
        elStyle.className = rulesClassName;
        elStyle.innerHTML = styleSheetContent;
        document.head.appendChild(elStyle);
    } else {
        (<HTMLStyleElement>themeStyles[0]).innerHTML = styleSheetContent;
    }
}

export class ThemeService implements ITheme {
    id: string;
    name: string;
    colors: ThemeColor;
    tokenColors: TokenColor[];
    semanticHighlighting: boolean;

    constructor(
        id: string,
        name: string,
        colors: ThemeColor = [],
        tokenColors: TokenColor[] = [],
        semanticHighlighting: boolean = true,
    ) {
        this.id = id;
        this.name = name;
        this.colors = colors;
        this.tokenColors = tokenColors;
        this.semanticHighlighting = semanticHighlighting;
    }

    public load(extension: IExtension): void {
        // const theme = this.parse(extension);
    }

    public getThemeById(themeId: string, extension: IExtension) {

    }

    public applyTheme() {
        _applyRules('', '');
    }
}

