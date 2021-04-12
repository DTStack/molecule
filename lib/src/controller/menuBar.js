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
exports.MenuBarController = void 0;
var menuBar_1 = require("mo/model/workbench/menuBar");
var controller_1 = require("mo/react/controller");
var services_1 = require("mo/services");
var tsyringe_1 = require("tsyringe");
var MenuBarController = /** @class */ (function (_super) {
    __extends(MenuBarController, _super);
    function MenuBarController() {
        var _this = _super.call(this) || this;
        _this.onClick = function (event, item) {
            var menuId = item.id;
            switch (menuId) {
                case menuBar_1.MENU_FILE_UNDO:
                    _this.undo();
                    break;
                case menuBar_1.MENU_FILE_REDO:
                    _this.redo();
                    break;
                case menuBar_1.MENU_VIEW_ACTIVITYBAR:
                    _this.updateActivityBar();
                    break;
                case menuBar_1.MENU_VIEW_MENUBAR:
                    _this.updateMenuBar();
                    break;
                case menuBar_1.MENU_VIEW_STATUSBAR:
                    _this.updateStatusBar();
                    break;
                case menuBar_1.MENU_VIEW_SIDEBAR:
                    _this.updateSideBar();
                    break;
            }
        };
        _this.undo = function () {
            var _a;
            (_a = services_1.editorService.editorInstance) === null || _a === void 0 ? void 0 : _a.getAction('undo').run();
        };
        _this.redo = function () {
            var _a;
            (_a = services_1.editorService.editorInstance) === null || _a === void 0 ? void 0 : _a.getAction('redo').run();
        };
        _this.updateActivityBar = function () {
            services_1.activityBarService.showHide();
            var hidden = services_1.activityBarService.getState().hidden;
            services_1.menuBarService.update(menuBar_1.MENU_VIEW_ACTIVITYBAR, {
                icon: hidden ? '' : 'check',
            });
        };
        _this.updateMenuBar = function () {
            services_1.menuBarService.showHide();
            var hidden = services_1.menuBarService.getState().hidden;
            services_1.menuBarService.update(menuBar_1.MENU_VIEW_MENUBAR, {
                icon: hidden ? '' : 'check',
            });
        };
        _this.updateStatusBar = function () {
            services_1.statusBarService.showHide();
            var hidden = services_1.statusBarService.getState().hidden;
            services_1.menuBarService.update(menuBar_1.MENU_VIEW_STATUSBAR, {
                icon: hidden ? '' : 'check',
            });
        };
        _this.updateSideBar = function () {
            services_1.sidebarService.showHide();
            var hidden = services_1.sidebarService.getState().hidden;
            services_1.menuBarService.update(menuBar_1.MENU_VIEW_SIDEBAR, {
                icon: hidden ? '' : 'check',
            });
        };
        return _this;
    }
    MenuBarController = __decorate([
        tsyringe_1.singleton(),
        __metadata("design:paramtypes", [])
    ], MenuBarController);
    return MenuBarController;
}(controller_1.Controller));
exports.MenuBarController = MenuBarController;
//# sourceMappingURL=menuBar.js.map