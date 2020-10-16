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
exports.Tree = void 0;
var React = require("react");
var rc_tree_1 = require("rc-tree");
var classnames_1 = require("classnames");
require("./style.scss");
var className_1 = require("@/common/className");
exports.Tree = function (props) {
    return (React.createElement(rc_tree_1.default, __assign({ className: classnames_1.default(className_1.prefixClaName('tree'), props.className) }, props)));
};
exports.default = exports.Tree;
//# sourceMappingURL=index.js.map