"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectColorThemeAction = void 0;
var nls_1 = require("monaco-editor/esm/vs/nls");
var quickInput_1 = require("monaco-editor/esm/vs/platform/quickinput/common/quickInput");
var services_1 = require("mo/services");
var editorExtensions_1 = require("monaco-editor/esm/vs/editor/browser/editorExtensions");
var monaco = require("monaco-editor");
var keyCodes_1 = require("monaco-editor/esm/vs/base/common/keyCodes");
var SelectColorThemeAction = /** @class */ (function (_super) {
    __extends(SelectColorThemeAction, _super);
    function SelectColorThemeAction() {
        return _super.call(this, {
            id: SelectColorThemeAction.ID,
            label: SelectColorThemeAction.LABEL,
            alias: 'Color Theme',
            precondition: undefined,
            kbOpts: {
                kbExpr: undefined,
                // eslint-disable-next-line new-cap
                primary: keyCodes_1.KeyChord(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_K),
            },
        }) || this;
    }
    SelectColorThemeAction.prototype.run = function (accessor) {
        var _this = this;
        this.quickInputService = accessor.get(quickInput_1.IQuickInputService);
        var themes = services_1.colorThemeService.getThemes();
        var currentTheme = services_1.colorThemeService.getColorTheme();
        var picks = __spread(toEntries(themes));
        var selectThemeTimeout;
        var selectTheme = function (theme, applyTheme) {
            if (selectThemeTimeout) {
                clearTimeout(selectThemeTimeout);
            }
            selectThemeTimeout = window.setTimeout(function () {
                selectThemeTimeout = undefined;
                var themeId = theme && theme.id !== undefined
                    ? theme.id
                    : currentTheme.id;
                services_1.colorThemeService.applyTheme(themeId);
            }, applyTheme ? 0 : 200);
        };
        return new Promise(function (resolve) {
            var isCompleted = false;
            var autoFocusIndex = picks.findIndex(function (p) { return p.id === currentTheme.id; });
            var quickPick = _this.quickInputService.createQuickPick();
            quickPick.items = picks;
            quickPick.placeholder = nls_1.localize('themes.selectTheme', 'Select Color Theme (Up/Down Keys to Preview)');
            quickPick.activeItems = [picks[autoFocusIndex]];
            quickPick.canSelectMany = false;
            quickPick.onDidAccept(function (_) {
                var theme = quickPick.activeItems[0];
                if (theme) {
                    selectTheme(theme, true);
                }
                isCompleted = true;
                quickPick.hide();
                resolve();
            });
            quickPick.onDidChangeActive(function (themes) {
                return selectTheme(themes[0], false);
            });
            quickPick.onDidHide(function () {
                if (!isCompleted) {
                    selectTheme(currentTheme, true);
                    resolve();
                }
            });
            quickPick.show();
        });
    };
    SelectColorThemeAction.ID = 'workbench.action.selectTheme';
    SelectColorThemeAction.LABEL = nls_1.localize('selectTheme.label', 'Color Theme');
    return SelectColorThemeAction;
}(editorExtensions_1.EditorAction));
exports.SelectColorThemeAction = SelectColorThemeAction;
function toEntries(themes, label) {
    var toEntry = function (theme) { return ({
        id: theme.id,
        label: theme.label,
        description: theme.description,
    }); };
    var sorter = function (t1, t2) { var _a; return (_a = t1.label) === null || _a === void 0 ? void 0 : _a.localeCompare(t2.label); };
    var entries = themes
        .map(toEntry)
        .sort(sorter);
    if (entries.length > 0 && label) {
        entries.unshift({ type: 'separator', label: label });
    }
    return entries;
}
editorExtensions_1.registerEditorAction(SelectColorThemeAction);
//# sourceMappingURL=selectColorThemeAction.js.map