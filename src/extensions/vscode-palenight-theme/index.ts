import { IColorTheme } from 'mo/model/colorTheme';
import { IExtension } from 'mo/model/extension';

const paleNightColorThemeExtension: IExtension = require('./package.json');

// Default
const themeColors: IColorTheme = require('./themes/palenight.json');
const themeItalicColors: IColorTheme = require('./themes/palenight-italic.json');
const themeOperatorColors: IColorTheme = require('./themes/palenight-operator.json');
const themeMildContrastColors: IColorTheme = require('./themes/palenight-mild-contrast.json');

const themes = paleNightColorThemeExtension.contributes?.themes || [];

const themeZero = themes[0];
const themeOne = themes[1];
const themeTwo = themes[2];
const themeThree = themes[3];

themes[0] = Object.assign({}, themeZero, themeColors);
themes[1] = Object.assign({}, themeOne, themeItalicColors);
themes[2] = Object.assign({}, themeTwo, themeOperatorColors);
themes[3] = Object.assign({}, themeThree, themeMildContrastColors);

export { paleNightColorThemeExtension };
