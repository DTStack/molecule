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
exports.Button = void 0;
var React = require("react");
var className_1 = require("mo/common/className");
var defaultButtonClassName = className_1.prefixClaName('btn');
var normalButtonClassName = className_1.getBEMModifier(defaultButtonClassName, 'normal');
var largeButtonClassName = className_1.getBEMModifier(defaultButtonClassName, 'large');
var disableButtonClassName = className_1.getBEMModifier(defaultButtonClassName, 'disabled');
function Button(props) {
    var className = props.className, children = props.children, _a = props.size, size = _a === void 0 ? 'normal' : _a, custom = __rest(props, ["className", "children", "size"]);
    var disabled = props.disabled ? disableButtonClassName : null;
    var sizeClassName = size === 'large' ? largeButtonClassName : normalButtonClassName;
    var claNames = className_1.classNames(className, defaultButtonClassName, sizeClassName, disabled);
    return (React.createElement("a", __assign({ className: claNames }, custom), children));
}
exports.Button = Button;
//# sourceMappingURL=index.js.map