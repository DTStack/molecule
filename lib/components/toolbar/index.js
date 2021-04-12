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
require("./style.scss");
var React = require("react");
var className_1 = require("mo/common/className");
var actionBar_1 = require("mo/components/actionBar");
var rootClassName = 'tool-bar';
function ToolBar(props) {
    var className = props.className, custom = __rest(props, ["className"]);
    return (React.createElement("div", { className: className_1.classNames(className_1.prefixClaName(rootClassName), className) },
        React.createElement(actionBar_1.default, __assign({}, custom))));
}
exports.default = ToolBar;
//# sourceMappingURL=index.js.map