"use strict";
/**
 * VSCode theme extends guides: https://code.visualstudio.com/api/extension-guides/color-theme
 * https://code.visualstudio.com/api/references/theme-color
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorThemeService = void 0;
var tsyringe_1 = require("tsyringe");
var monaco = require("monaco-editor");
var css_1 = require("mo/common/css");
var helper_1 = require("./helper");
var logger_1 = require("mo/common/logger");
var className_1 = require("mo/common/className");
var BUILT_IN_THEME = {
    id: 'Default Dark+',
    name: 'Default Dark+',
    label: 'Default Dark+',
    uiTheme: 'vs-dark',
};
var DEFAULT_THEME_CLASS_NAME = className_1.prefixClaName('customize-theme');
var ColorThemeService = /** @class */ (function () {
    function ColorThemeService(colorThemes, colorTheme) {
        if (colorThemes === void 0) { colorThemes = []; }
        if (colorTheme === void 0) { colorTheme = BUILT_IN_THEME; }
        this.colorThemes = colorThemes;
        this.colorTheme = colorTheme;
        this.init();
    }
    ColorThemeService.prototype.init = function () {
        this.applyTheme(this.colorTheme.id);
    };
    ColorThemeService.prototype.load = function (themes) {
        if (themes.length > 0) {
            this.colorThemes = this.colorThemes.concat(themes);
            this.init();
        }
    };
    ColorThemeService.prototype.getThemeById = function (id) {
        return this.colorThemes.find(function (theme) { return theme.id === id; });
    };
    ColorThemeService.prototype.applyTheme = function (id) {
        var theme = this.getThemeById(id);
        if (theme) {
            this.colorTheme = __assign({}, theme);
            var themeData = helper_1.getThemeData(theme);
            var styleSheetContent = helper_1.convertToCSSVars(themeData.colors);
            css_1.applyStyleSheetRules(styleSheetContent, DEFAULT_THEME_CLASS_NAME);
            // Update monaco-editor theme
            monaco.editor.defineTheme(DEFAULT_THEME_CLASS_NAME, themeData);
            monaco.editor.setTheme(DEFAULT_THEME_CLASS_NAME);
        }
        else {
            logger_1.default.error("Can't get any theme by this id:" + id);
        }
    };
    ColorThemeService.prototype.getThemes = function () {
        return this.colorThemes;
    };
    ColorThemeService = __decorate([
        tsyringe_1.singleton(),
        __param(0, tsyringe_1.inject('ColorThemes')),
        __param(1, tsyringe_1.inject('ColorTheme')),
        __metadata("design:paramtypes", [Array, Object])
    ], ColorThemeService);
    return ColorThemeService;
}());
exports.ColorThemeService = ColorThemeService;
tsyringe_1.container.register('ColorThemes', { useValue: [] });
tsyringe_1.container.register('ColorTheme', { useValue: BUILT_IN_THEME });
//# sourceMappingURL=colorThemeService.js.map