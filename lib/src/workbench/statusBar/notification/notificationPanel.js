"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationPanel = void 0;
var React = require("react");
var className_1 = require("mo/common/className");
var actionBar_1 = require("mo/components/actionBar");
var contextView_1 = require("mo/components/contextView");
var icon_1 = require("mo/components/icon");
var defaultNotificationClassName = className_1.prefixClaName('notification');
var notificationHeaderClassName = className_1.getBEMElement(defaultNotificationClassName, 'header');
var notificationBodyClassName = className_1.getBEMElement(defaultNotificationClassName, 'body');
var notificationCloseClassName = className_1.getBEMModifier(defaultNotificationClassName, 'close');
function NotificationPanel(props) {
    var _a = props.data, data = _a === void 0 ? [] : _a, _b = props.actionBar, actionBar = _b === void 0 ? [] : _b, showNotifications = props.showNotifications, onActionBarClick = props.onActionBarClick, onCloseNotification = props.onCloseNotification;
    var hasNotifications = data.length > 0;
    var title = hasNotifications ? 'notifications' : 'no new notifications';
    var display = showNotifications ? 'block' : 'none';
    return (React.createElement("div", { className: className_1.classNames(defaultNotificationClassName, contextView_1.shadowClassName), style: { display: display } },
        React.createElement("header", { className: notificationHeaderClassName },
            React.createElement("span", null, title),
            React.createElement(actionBar_1.default, { data: actionBar, onClick: onActionBarClick })),
        React.createElement("div", { className: notificationBodyClassName }, data.map(function (item) { return (React.createElement("p", { key: item.id },
            item.value,
            React.createElement(icon_1.Icon, { title: "Clear Notification", onClick: function () { return onCloseNotification(item); }, className: notificationCloseClassName, type: "close" }))); }))));
}
exports.NotificationPanel = NotificationPanel;
//# sourceMappingURL=notificationPanel.js.map