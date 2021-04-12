"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
var React = require("react");
var icon_1 = require("mo/components/icon");
function Notification(props) {
    var _a = props.data, data = _a === void 0 ? [] : _a, onClick = props.onClick;
    var hasNotifications = data.length > 0;
    var renderIcon = hasNotifications ? 'bell-dot' : 'bell';
    return React.createElement(icon_1.Icon, { onClick: onClick, type: renderIcon });
}
exports.Notification = Notification;
//# sourceMappingURL=index.js.map