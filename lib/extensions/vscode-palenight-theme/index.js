"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.paleNightColorThemeExtension = void 0;
var paleNightColorThemeExtension = require('./package.json');
exports.paleNightColorThemeExtension = paleNightColorThemeExtension;
// Default
var themeItalicColors = require('./themes/palenight-italic.json');
var themes = ((_a = paleNightColorThemeExtension.contributes) === null || _a === void 0 ? void 0 : _a.themes) || [];
var themeOne = themes[1];
themes[1] = Object.assign({}, themeOne, themeItalicColors);
//# sourceMappingURL=index.js.map