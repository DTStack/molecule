"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initGlobalActivityBars = void 0;
var mo_1 = require("mo");
var monaco = require("monaco-editor");
var mo_2 = require("mo");
function clickColorTheme(e) {
    // const editorState = editorService.getState();
    console.log('globalSettings: clickColorTheme:', e);
}
function clickCommandPalette(e) {
    var _a;
    var editorState = mo_2.editorService.getState();
    var editorGroup = editorState.current;
    if (editorGroup) {
        (_a = editorGroup.editorInstance) === null || _a === void 0 ? void 0 : _a.trigger('anyString', 'editor.action.quickCommand', null);
    }
    console.log('globalSettings: clickCommandPalette:', monaco);
}
function clickSettings(e) {
    console.log('globalSettings: clickSettings:', e);
}
function initGlobalActivityBars() {
    var globalSettings = {
        id: 'global-settings',
        name: 'Settings',
        iconName: 'codicon-settings-gear',
        type: 'global',
        contextMenu: [
            {
                id: 'CommandPalette',
                name: 'Command Palette...',
                onClick: clickCommandPalette,
            },
            {
                id: 'Settings',
                name: 'Settings',
                onClick: clickSettings,
            },
            {
                id: 'ColorTheme',
                name: 'Color Theme',
                onClick: clickColorTheme,
            },
        ],
    };
    var globalUserAccount = {
        id: 'global-Account',
        name: 'Account',
        iconName: 'codicon-account',
        type: 'global',
    };
    mo_1.activityBarService.addBar([globalUserAccount, globalSettings]);
}
exports.initGlobalActivityBars = initGlobalActivityBars;
//# sourceMappingURL=settings.js.map