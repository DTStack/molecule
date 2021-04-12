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
exports.NotificationModel = exports.NOTIFICATION_HIDE = exports.NOTIFICATION_CLEAR_ALL = exports.NotificationStatus = void 0;
var icon_1 = require("mo/components/icon");
var React = require("react");
var tsyringe_1 = require("tsyringe");
var NotificationStatus;
(function (NotificationStatus) {
    NotificationStatus[NotificationStatus["Read"] = 1] = "Read";
    NotificationStatus[NotificationStatus["WaitRead"] = 2] = "WaitRead";
})(NotificationStatus = exports.NotificationStatus || (exports.NotificationStatus = {}));
exports.NOTIFICATION_CLEAR_ALL = {
    id: 'ClearAll',
    title: 'Clear All Notifications',
    iconName: 'codicon-clear-all',
};
exports.NOTIFICATION_HIDE = {
    id: 'HideNotifications',
    title: 'Hide Notifications',
    iconName: 'codicon-chevron-down',
};
var NotificationModel = /** @class */ (function () {
    function NotificationModel(id, name, data, sortIndex, showNotifications, actionBar, render) {
        if (id === void 0) { id = NotificationModel_1.ID; }
        if (name === void 0) { name = NotificationModel_1.NAME; }
        if (data === void 0) { data = []; }
        if (sortIndex === void 0) { sortIndex = 1; }
        if (showNotifications === void 0) { showNotifications = false; }
        if (actionBar === void 0) { actionBar = [
            exports.NOTIFICATION_CLEAR_ALL,
            exports.NOTIFICATION_HIDE,
        ]; }
        if (render === void 0) { render = function () { return React.createElement(icon_1.Icon, { type: "bell" }); }; }
        this.id = id;
        this.name = name;
        this.sortIndex = sortIndex;
        this.render = render;
        this.showNotifications = showNotifications;
        this.data = data;
        this.actionBar = actionBar;
    }
    NotificationModel_1 = NotificationModel;
    var NotificationModel_1;
    NotificationModel.ID = 'MO_NOTIFICATION';
    NotificationModel.NAME = 'Notification';
    NotificationModel = NotificationModel_1 = __decorate([
        tsyringe_1.injectable(),
        __metadata("design:paramtypes", [String, String, Array, Number, Boolean, Array, Function])
    ], NotificationModel);
    return NotificationModel;
}());
exports.NotificationModel = NotificationModel;
//# sourceMappingURL=notification.js.map