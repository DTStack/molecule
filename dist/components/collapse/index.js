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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Panel = exports.Collapse = void 0;
var React = require("react");
var rc_collapse_1 = require("rc-collapse");
var classnames_1 = require("classnames");
require("./style.scss");
var className_1 = require("@/common/className");
exports.Collapse = function (props) {
    return (React.createElement(rc_collapse_1.default, __assign({ className: classnames_1.default(className_1.prefixClaName('collapse'), props.className) }, props)));
};
exports.Panel = rc_collapse_1.default.Panel;
exports.default = exports.Collapse;
//# sourceMappingURL=index.js.map