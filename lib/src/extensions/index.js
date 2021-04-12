"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultExtensions = void 0;
var statusBar_1 = require("./statusBar");
var theme_defaults_1 = require("./theme-defaults");
var theme_monokai_1 = require("./theme-monokai");
var vscode_palenight_theme_1 = require("./vscode-palenight-theme");
/**
 * Default extensions
 */
exports.defaultExtensions = [
    statusBar_1.ExtendStatusBar,
    theme_defaults_1.defaultColorThemeExtension,
    theme_monokai_1.monokaiColorThemeExtension,
    vscode_palenight_theme_1.paleNightColorThemeExtension,
];
//# sourceMappingURL=index.js.map