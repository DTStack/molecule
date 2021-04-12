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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationController = void 0;
var React = require("react");
var ReactDOM = require("react-dom");
var mo_1 = require("mo");
var controller_1 = require("mo/react/controller");
var services_1 = require("mo/services");
var tsyringe_1 = require("tsyringe");
var notification_1 = require("mo/workbench/statusBar/notification");
var notificationPanel_1 = require("mo/workbench/statusBar/notification/notificationPanel");
var notification_2 = require("mo/model/notification");
var dom_1 = require("mo/common/dom");
var id_1 = require("mo/common/id");
var NotificationController = /** @class */ (function (_super) {
    __extends(NotificationController, _super);
    function NotificationController() {
        var _this = _super.call(this) || this;
        _this._notificationPanel = undefined;
        _this.onClick = function (e, item) {
            _this.showHideNotifications();
        };
        _this.onActionBarClick = function (event, item) {
            var action = item.id;
            if (action === notification_2.NOTIFICATION_CLEAR_ALL.id) {
                services_1.notificationService.showHideNotifications();
            }
            else if (action === notification_2.NOTIFICATION_HIDE.id) {
                _this.showHideNotifications();
            }
        };
        _this.init();
        return _this;
    }
    NotificationController.prototype.onCloseNotification = function (item) {
        if (typeof item.id === 'number') {
            services_1.notificationService.removeNotification(item.id);
        }
    };
    NotificationController.prototype.showHideNotifications = function () {
        if (!this._notificationPanel) {
            this.renderNotificationPanel();
        }
        services_1.notificationService.showHideNotifications();
    };
    NotificationController.prototype.init = function () {
        var _this = this;
        var notificationItem = services_1.notificationService.getState();
        var NotificationView = mo_1.connect(services_1.notificationService, notification_1.Notification);
        services_1.notificationService.setState(__assign(__assign({}, notificationItem), { render: function () { return React.createElement(NotificationView, { onClick: _this.onClick }); } }));
        services_1.statusBarService.appendRightItem(notificationItem);
    };
    NotificationController.prototype.renderNotificationPanel = function () {
        var NotificationPanelView = mo_1.connect(services_1.notificationService, notificationPanel_1.NotificationPanel);
        var root = dom_1.select('#' + id_1.ID_APP);
        var container = document.createElement('div');
        root === null || root === void 0 ? void 0 : root.appendChild(container);
        ReactDOM.render(React.createElement(NotificationPanelView, { onActionBarClick: this.onActionBarClick, onCloseNotification: this.onCloseNotification }), container);
        this._notificationPanel = container;
    };
    NotificationController = __decorate([
        tsyringe_1.singleton(),
        __metadata("design:paramtypes", [])
    ], NotificationController);
    return NotificationController;
}(controller_1.Controller));
exports.NotificationController = NotificationController;
//# sourceMappingURL=notification.js.map