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
exports.StatusBarController = exports.editorLineColumnItem = void 0;
var React = require("react");
var mo_1 = require("mo");
var controller_1 = require("mo/react/controller");
var services_1 = require("mo/services");
var tsyringe_1 = require("tsyringe");
var icon_1 = require("mo/components/icon");
var problems = {
    id: 'MoProblems',
    sortIndex: 1,
    name: 'Problems',
};
var notifications = {
    id: 'MoNotification',
    sortIndex: 1,
    name: 'Notification',
    render: function () { return React.createElement(icon_1.Icon, { type: "bell" }); },
};
exports.editorLineColumnItem = {
    id: 'EditorCountInfo',
    sortIndex: 2,
    name: 'Go to Line/Column',
    render: function () { return React.createElement("span", null, "Ln 0, Col 0"); },
};
var StatusBarController = /** @class */ (function (_super) {
    __extends(StatusBarController, _super);
    function StatusBarController() {
        var _this = _super.call(this) || this;
        _this.onClick = function (e, item) {
            _this.emit(mo_1.StatusBarEvent.onClick, e, item);
        };
        _this.initStatusBar();
        return _this;
    }
    StatusBarController.prototype.notify = function () {
        console.log('service:', services_1.statusBarService);
    };
    StatusBarController.prototype.initStatusBar = function () {
        services_1.statusBarService.appendLeftItem(problems);
        services_1.statusBarService.appendRightItem(notifications);
        services_1.statusBarService.appendRightItem(exports.editorLineColumnItem);
    };
    StatusBarController = __decorate([
        tsyringe_1.singleton(),
        __metadata("design:paramtypes", [])
    ], StatusBarController);
    return StatusBarController;
}(controller_1.Controller));
exports.StatusBarController = StatusBarController;
//# sourceMappingURL=statusBar.js.map