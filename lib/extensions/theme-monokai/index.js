"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.monokaiColorThemeExtension = void 0;
var monokaiColorThemeExtension = require('./package.json');
exports.monokaiColorThemeExtension = monokaiColorThemeExtension;
// Default
var themeOneColors = require('./themes/monokai-color-theme.json');
var themes = ((_a = monokaiColorThemeExtension.contributes) === null || _a === void 0 ? void 0 : _a.themes) || [];
var themeOne = themes[0];
themes[0] = Object.assign({}, themeOne, themeOneColors);
//# sourceMappingURL=index.js.map