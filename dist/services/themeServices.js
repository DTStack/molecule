"use strict";
/**
 * VSCode theme extends guides: https://code.visualstudio.com/api/extension-guides/color-theme
 * https://code.visualstudio.com/api/references/theme-color
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeService = void 0;
/**
 * Apply css content to workbench
 * @param styleSheetContent CSS sheet content
 * @param rulesClassName Style tag class Name
 */
function _applyRules(styleSheetContent, rulesClassName) {
    var themeStyles = document.head.getElementsByClassName(rulesClassName);
    if (themeStyles.length === 0) {
        var elStyle = document.createElement('style');
        elStyle.type = 'text/css';
        elStyle.className = rulesClassName;
        elStyle.innerHTML = styleSheetContent;
        document.head.appendChild(elStyle);
    }
    else {
        themeStyles[0].innerHTML = styleSheetContent;
    }
}
var ThemeService = /** @class */ (function () {
    function ThemeService(id, name, colors, tokenColors, semanticHighlighting) {
        if (colors === void 0) { colors = []; }
        if (tokenColors === void 0) { tokenColors = []; }
        if (semanticHighlighting === void 0) { semanticHighlighting = true; }
        this.id = id;
        this.name = name;
        this.colors = colors;
        this.tokenColors = tokenColors;
        this.semanticHighlighting = semanticHighlighting;
    }
    ThemeService.prototype.load = function (extension) {
        // const theme = this.parse(extension);
    };
    ThemeService.prototype.getThemeById = function (themeId, extension) {
    };
    ThemeService.prototype.applyTheme = function () {
        _applyRules('', '');
    };
    return ThemeService;
}());
exports.ThemeService = ThemeService;
//# sourceMappingURL=themeServices.js.map