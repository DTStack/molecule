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
exports.Option = void 0;
var React = require("react");
var className_1 = require("mo/common/className");
var select_1 = require("./select");
var selectOptionClassName = className_1.getBEMElement(select_1.selectClassName, 'option');
var selectOptionDisabledClassName = className_1.getBEMModifier(selectOptionClassName, 'disabled');
function Option(props) {
    var className = props.className, value = props.value, title = props.title, name = props.name, description = props.description, disabled = props.disabled, children = props.children, custom = __rest(props, ["className", "value", "title", "name", "description", "disabled", "children"]);
    var claNames = className_1.classNames(selectOptionClassName, className, disabled ? selectOptionDisabledClassName : '');
    return (React.createElement("div", __assign({ className: claNames, title: title, "data-name": name || children, "data-value": value, "data-desc": description }, custom), children));
}
exports.Option = Option;
//# sourceMappingURL=option.js.map