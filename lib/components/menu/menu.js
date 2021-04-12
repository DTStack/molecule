"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var React = require("react");
var className_1 = require("mo/common/className");
var menuItem_1 = require("./menuItem");
var subMenu_1 = require("./subMenu");
var base_1 = require("./base");
function Menu(props) {
    var className = props.className, _a = props.mode, mode = _a === void 0 ? subMenu_1.MenuMode.Vertical : _a, _b = props.data, data = _b === void 0 ? [] : _b, children = props.children, onClick = props.onClick, custom = __rest(props, ["className", "mode", "data", "children", "onClick"]);
    var content = children;
    var modeClassName = mode === subMenu_1.MenuMode.Horizontal
        ? base_1.horizontalMenuClassName
        : base_1.verticalMenuClassName;
    var claNames = className_1.classNames(base_1.defaultMenuClassName, modeClassName, className);
    if (data.length > 0) {
        var renderMenusByData_1 = function (menus) {
            return menus.map(function (item) {
                if (item.data && item.data.length > 0) {
                    return (React.createElement(subMenu_1.SubMenu, __assign({ key: item.id, mode: mode }, item), renderMenusByData_1(item.data)));
                }
                return (React.createElement(menuItem_1.MenuItem, __assign({ key: item.id, onClick: onClick }, item), item.name));
            });
        };
        content = renderMenusByData_1(data);
    }
    return (React.createElement("ul", __assign({ className: claNames }, custom), content));
}
exports.Menu = Menu;
//# sourceMappingURL=menu.js.map