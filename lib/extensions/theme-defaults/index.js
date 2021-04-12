"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultColorThemeExtension = void 0;
var defaultColorThemeExtension = require('./package.json');
exports.defaultColorThemeExtension = defaultColorThemeExtension;
// The below handle for theme extension is temporary,
// we will automatic load the extension package.
// Default
var defaultDark = require('./themes/dark_defaults.json');
var defaultLight = require('./themes/light_defaults.json');
var defaultHC = require('./themes/hc_black_defaults.json');
// Theme
var darkPlus = require('./themes/dark_plus.json');
Object.assign(darkPlus, defaultDark);
var darkVS = require('./themes/dark_vs.json');
Object.assign(darkVS, defaultDark);
var lightPlus = require('./themes/light_plus.json');
Object.assign(lightPlus, defaultLight);
var lightVS = require('./themes/light_vs.json');
Object.assign(lightVS, defaultLight);
var hcBlack = require('./themes/hc_black.json');
Object.assign(hcBlack, defaultHC);
var themes = ((_a = defaultColorThemeExtension.contributes) === null || _a === void 0 ? void 0 : _a.themes) || [];
var themeDarkPlus = themes[0];
var themeLightPlus = themes[1];
var themeVSDark = themes[2];
var themeVSLight = themes[3];
var themeHCBlack = themes[4];
themes[0] = Object.assign({}, themeDarkPlus, darkPlus);
themes[1] = Object.assign({}, themeLightPlus, lightPlus);
themes[2] = Object.assign({}, themeVSDark, darkVS);
themes[3] = Object.assign({}, themeVSLight, lightVS);
themes[4] = Object.assign({}, themeHCBlack, hcBlack);
//# sourceMappingURL=index.js.map