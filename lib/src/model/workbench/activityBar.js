"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityBarModel = exports.initialActivityBarData = exports.ACTIVITY_BAR_GLOBAL_ACCOUNT = exports.ACTIVITY_BAR_GLOBAL_SETTINGS = exports.CONTEXT_MENU_COLOR_THEME = exports.CONTEXT_MENU_SETTINGS = exports.CONTEXT_MENU_COMMAND_PALETTE = exports.ActivityBarEvent = void 0;
require("reflect-metadata");
var tsyringe_1 = require("tsyringe");
/**
 * The activity bar event definition
 */
var ActivityBarEvent;
(function (ActivityBarEvent) {
    /**
     * Selected an activity bar
     */
    ActivityBarEvent["Selected"] = "activityBar.selected";
    ActivityBarEvent["OnClick"] = "activityBar.onClick";
    /**
     * Activity bar data changed
     */
    ActivityBarEvent["DataChanged"] = "activityBar.data";
    ActivityBarEvent["ReRender"] = "activityBar.reRender";
})(ActivityBarEvent = exports.ActivityBarEvent || (exports.ActivityBarEvent = {}));
exports.CONTEXT_MENU_COMMAND_PALETTE = {
    id: 'CommandPalette',
    name: 'Command Palette...',
};
exports.CONTEXT_MENU_SETTINGS = {
    id: 'Settings',
    name: 'Settings',
};
exports.CONTEXT_MENU_COLOR_THEME = {
    id: 'ColorTheme',
    name: 'Color Theme',
};
exports.ACTIVITY_BAR_GLOBAL_SETTINGS = {
    id: 'global-settings',
    name: 'Settings',
    iconName: 'codicon-settings-gear',
    type: 'global',
    contextMenu: [
        exports.CONTEXT_MENU_COMMAND_PALETTE,
        exports.CONTEXT_MENU_SETTINGS,
        exports.CONTEXT_MENU_COLOR_THEME,
    ],
};
exports.ACTIVITY_BAR_GLOBAL_ACCOUNT = {
    id: 'global-Account',
    name: 'Account',
    iconName: 'codicon-account',
    type: 'global',
};
exports.initialActivityBarData = [
    exports.ACTIVITY_BAR_GLOBAL_ACCOUNT,
    exports.ACTIVITY_BAR_GLOBAL_SETTINGS,
];
var ActivityBarModel = /** @class */ (function () {
    function ActivityBarModel(data, selected, hidden) {
        if (data === void 0) { data = exports.initialActivityBarData; }
        if (selected === void 0) { selected = ''; }
        if (hidden === void 0) { hidden = false; }
        this.hidden = false;
        this.data = data;
        this.selected = selected;
        this.hidden = hidden;
    }
    ActivityBarModel = __decorate([
        tsyringe_1.injectable(),
        __metadata("design:paramtypes", [Array, String, Object])
    ], ActivityBarModel);
    return ActivityBarModel;
}());
exports.ActivityBarModel = ActivityBarModel;
//# sourceMappingURL=activityBar.js.map