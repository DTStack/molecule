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
exports.MenuItem = void 0;
var React = require("react");
var className_1 = require("mo/common/className");
var icon_1 = require("../icon");
var base_1 = require("./base");
function MenuItem(props) {
    var icon = props.icon, className = props.className, onClick = props.onClick, keybinding = props.keybinding, render = props.render, children = props.children, name = props.name, custom = __rest(props, ["icon", "className", "onClick", "keybinding", "render", "children", "name"]);
    var events = {
        onClick: function (e) {
            if (onClick) {
                onClick(e, props);
            }
        },
    };
    return (React.createElement("li", __assign({ className: className_1.classNames(base_1.defaultMenuItemClassName, className) }, events, custom),
        React.createElement("a", { className: base_1.menuContentClassName },
            React.createElement(icon_1.Icon, { className: base_1.checkClassName, type: icon || '' }),
            React.createElement("span", { className: base_1.labelClassName, title: name }, render ? render(props) : children),
            keybinding ? (React.createElement("span", { className: base_1.keybindingClassName }, keybinding)) : null)));
}
exports.MenuItem = MenuItem;
//# sourceMappingURL=menuItem.js.map