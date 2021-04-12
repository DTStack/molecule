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
exports.ActionBarItem = void 0;
var React = require("react");
var className_1 = require("mo/common/className");
var defaultActionBarClassName = className_1.prefixClaName('action-bar');
var containerClassName = className_1.getBEMElement(defaultActionBarClassName, 'container');
var itemClassName = className_1.getBEMElement(defaultActionBarClassName, 'item');
var itemDisabledClassName = className_1.getBEMModifier(itemClassName, 'disabled');
var labelClassName = className_1.getBEMElement(defaultActionBarClassName, 'label');
function ActionBarItem(props) {
    var id = props.id, title = props.title, name = props.name, onClick = props.onClick;
    var click = function (e) {
        if (onClick) {
            onClick(e, props);
        }
    };
    var disabled = props.disabled ? itemDisabledClassName : null;
    var claNames = className_1.classNames(labelClassName, 'codicon', props.iconName, disabled);
    return (React.createElement("li", { className: className_1.classNames(itemClassName, disabled), onClick: click, key: "" + id },
        React.createElement("a", { className: claNames, title: title }, name)));
}
exports.ActionBarItem = ActionBarItem;
function ActionBar(props) {
    var _a = props.data, data = _a === void 0 ? [] : _a, onClick = props.onClick, className = props.className, custom = __rest(props, ["data", "onClick", "className"]);
    var claNames = className_1.classNames(defaultActionBarClassName, className);
    var items = data.map(function (item) { return (React.createElement(ActionBarItem, __assign({ key: item.id, onClick: onClick }, item))); });
    return (React.createElement("div", __assign({ className: claNames }, custom),
        React.createElement("ul", { className: containerClassName }, items)));
}
exports.default = ActionBar;
//# sourceMappingURL=index.js.map