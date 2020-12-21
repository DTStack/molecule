import { IColorTheme } from 'mo/model/colorTheme';
import { IExtension } from 'mo/model/extension';

const paleNightColorThemeExtension: IExtension = require('./package.json');

// Default
const themeItalicColors: IColorTheme = require('./themes/palenight-italic.json');

const themes = paleNightColorThemeExtension.contributes?.themes || [];

const themeOne = themes[1];

themes[1] = Object.assign({}, themeOne, themeItalicColors);

export { paleNightColorThemeExtension };
