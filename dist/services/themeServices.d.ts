/**
 * VSCode theme extends guides: https://code.visualstudio.com/api/extension-guides/color-theme
 * https://code.visualstudio.com/api/references/theme-color
 */
import { IExtension } from '@/core/extension';
import { ITheme, ThemeColor, TokenColor } from '@/core/theme';
export declare class ThemeService implements ITheme {
    id: string;
    name: string;
    colors: ThemeColor;
    tokenColors: TokenColor[];
    semanticHighlighting: boolean;
    constructor(id: string, name: string, colors?: ThemeColor, tokenColors?: TokenColor[], semanticHighlighting?: boolean);
    load(extension: IExtension): void;
    getThemeById(themeId: string, extension: IExtension): void;
    applyTheme(): void;
}
