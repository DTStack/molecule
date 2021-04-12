"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getThemeData = exports.convertToCSSVars = void 0;
var colorRegistry_1 = require("mo/services/theme/colorRegistry");
/**
 * This function convert colors object to CSS variables, and add it to the :root {}.
 * The default color id default contains dot punctuation, so there we convert the `.` to `-`.
 * More about the color token id, you need visit: https://code.visualstudio.com/api/references/theme-color
 * @param colors
 */
function convertToCSSVars(colors) {
    var cssVars = '';
    for (var id in colors) {
        if (id) {
            var color = colors[id];
            if (color) {
                var colorName = id.replace('.', '-');
                cssVars += "--" + colorName + ": " + color + "; \n";
            }
        }
    }
    return "\n        :root {\n            " + cssVars + "\n        }\n    ";
}
exports.convertToCSSVars = convertToCSSVars;
function getThemeData(theme) {
    var builtInColors = colorRegistry_1.getBuiltInColors(theme);
    var colors = Object.assign({}, builtInColors, theme.colors);
    var convertColors = {};
    for (var colorId in colors) {
        if (colorId) {
            var colorHex = colors[colorId];
            if (colorHex && typeof colorHex === 'object') {
                convertColors[colorId] = colorHex.toString();
            }
            else if (typeof colorHex === 'string') {
                convertColors[colorId] = colorHex;
            }
        }
    }
    var tokens = theme.tokenColors;
    var rules = [];
    var updateRules = function (s, token) {
        var index = rules.findIndex(function (r) { return r.token === s; });
        if (index > 0) {
            Object.assign(rules[index], __assign({}, token.settings));
        }
        else {
            if (s) {
                rules.push(__assign({ token: s }, token.settings));
            }
        }
    };
    tokens === null || tokens === void 0 ? void 0 : tokens.forEach(function (token) {
        if (Array.isArray(token.scope)) {
            token.scope.forEach(function (s) { return updateRules(s, token); });
        }
        else {
            updateRules(token.scope, token);
        }
    });
    return {
        base: theme.uiTheme,
        rules: rules,
        inherit: true,
        colors: convertColors,
    };
}
exports.getThemeData = getThemeData;
//# sourceMappingURL=helper.js.map