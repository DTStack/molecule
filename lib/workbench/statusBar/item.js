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
var className_1 = require("mo/common/className");
var React = require("react");
var react_1 = require("react");
var base_1 = require("./base");
function StatusItem(props) {
    var className = props.className, onClick = props.onClick, name = props.name, render = props.render, extra = __rest(props, ["className", "onClick", "name", "render"]);
    var clsName = className_1.classNames(base_1.itemClassName, className);
    var events = {
        onClick: function (e) {
            onClick === null || onClick === void 0 ? void 0 : onClick(e, props);
        },
    };
    return (React.createElement("div", __assign({ className: clsName }, extra),
        React.createElement("a", __assign({ tabIndex: -1, title: name }, events), render ? render() : name)));
}
exports.default = react_1.memo(StatusItem);
//# sourceMappingURL=item.js.map