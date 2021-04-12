"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsService = exports.colorThemeService = exports.extensionService = exports.editorService = exports.panelService = exports.statusBarService = exports.menuBarService = exports.sidebarService = exports.explorerService = exports.activityBarService = void 0;
require("reflect-metadata");
var tsyringe_1 = require("tsyringe");
__exportStar(require("./extensionService"), exports);
__exportStar(require("./theme/colorThemeService"), exports);
__exportStar(require("./workbench"), exports);
__exportStar(require("./settingsService"), exports);
var colorThemeService_1 = require("./theme/colorThemeService");
var extensionService_1 = require("./extensionService");
var workbench_1 = require("./workbench");
var settingsService_1 = require("./settingsService");
/**
 * The Services of Workbench
 */
var activityBarService = tsyringe_1.container.resolve(workbench_1.ActivityBarService);
exports.activityBarService = activityBarService;
// explorer service
var explorerService = tsyringe_1.container.resolve(workbench_1.ExplorerService);
exports.explorerService = explorerService;
var sidebarService = tsyringe_1.container.resolve(workbench_1.SidebarService);
exports.sidebarService = sidebarService;
var menuBarService = tsyringe_1.container.resolve(workbench_1.MenuBarService);
exports.menuBarService = menuBarService;
var editorService = tsyringe_1.container.resolve(workbench_1.EditorService);
exports.editorService = editorService;
var statusBarService = tsyringe_1.container.resolve(workbench_1.StatusBarService);
exports.statusBarService = statusBarService;
var panelService = tsyringe_1.container.resolve(workbench_1.PanelService);
exports.panelService = panelService;
/**
 * The ColorTheme service,
 */
var colorThemeService = tsyringe_1.container.resolve(colorThemeService_1.ColorThemeService);
exports.colorThemeService = colorThemeService;
/**
 * Note: The extension service depends on other workbench services,
 * So it need initialized be last one.
 */
var extensionService = tsyringe_1.container.resolve(extensionService_1.ExtensionService);
exports.extensionService = extensionService;
/**
 * Settings service
 */
var settingsService = tsyringe_1.container.resolve(settingsService_1.SettingsService);
exports.settingsService = settingsService;
//# sourceMappingURL=index.js.map