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
exports.Checkbox = exports.checkboxClassName = void 0;
var React = require("react");
var className_1 = require("mo/common/className");
exports.checkboxClassName = className_1.prefixClaName('checkbox');
var checkboxLabelClassName = className_1.getBEMElement(exports.checkboxClassName, 'label');
var checkboxInputClassName = className_1.getBEMElement(exports.checkboxClassName, 'input');
function Checkbox(props) {
    var className = props.className, id = props.id, children = props.children, value = props.value, onChange = props.onChange, custom = __rest(props, ["className", "id", "children", "value", "onChange"]);
    var claNames = className_1.classNames(exports.checkboxClassName, className);
    var handleCheckboxChange = function (e) {
        onChange === null || onChange === void 0 ? void 0 : onChange(e, { id: id, value: e.target.value });
    };
    return (React.createElement("div", __assign({ className: claNames }, custom),
        React.createElement("input", { id: id, type: "checkbox", className: checkboxInputClassName, value: value, onChange: handleCheckboxChange }),
        React.createElement("label", { htmlFor: id, className: className_1.classNames(checkboxLabelClassName, 'codicon') }, children)));
}
exports.Checkbox = Checkbox;
//# sourceMappingURL=checkbox.js.map