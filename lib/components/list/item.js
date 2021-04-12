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
exports.Item = void 0;
var React = require("react");
var className_1 = require("mo/common/className");
var list_1 = require("./list");
var itemClassName = className_1.getBEMElement(list_1.defaultListClassName, 'item');
var labelClassName = className_1.getBEMElement(list_1.defaultListClassName, 'label');
var itemActiveClassName = className_1.getBEMModifier(itemClassName, 'active');
var itemDisabledClassName = className_1.getBEMModifier(itemClassName, 'disabled');
function Item(props) {
    var id = props.id, onClick = props.onClick, disabled = props.disabled, active = props.active, className = props.className, children = props.children, others = __rest(props, ["id", "onClick", "disabled", "active", "className", "children"]);
    var click = function (e) {
        if (onClick) {
            onClick(e, props);
        }
    };
    var claNames = className_1.classNames(itemClassName, className, disabled ? itemDisabledClassName : '', active === id ? itemActiveClassName : '');
    return (React.createElement("li", __assign({ className: claNames, key: "" + id }, others),
        React.createElement("a", { className: labelClassName, onClick: click }, children)));
}
exports.Item = Item;
//# sourceMappingURL=item.js.map