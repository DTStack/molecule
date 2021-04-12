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
exports.List = exports.horizontalClassName = exports.verticalClassName = exports.defaultListClassName = void 0;
var React = require("react");
var className_1 = require("mo/common/className");
var react_1 = require("mo/react");
exports.defaultListClassName = className_1.prefixClaName('list');
exports.verticalClassName = className_1.getBEMModifier(exports.defaultListClassName, 'vertical');
exports.horizontalClassName = className_1.prefixClaName(exports.defaultListClassName, 'horizontal');
function List(props) {
    var children = props.children, active = props.active, onClick = props.onClick, className = props.className, _a = props.mode, mode = _a === void 0 ? 'vertical' : _a, others = __rest(props, ["children", "active", "onClick", "className", "mode"]);
    var modeClassName = mode === 'horizontal' ? exports.horizontalClassName : exports.verticalClassName;
    var claNames = className_1.classNames(exports.defaultListClassName, className, modeClassName);
    return (React.createElement("ul", __assign({}, others, { className: claNames }), react_1.cloneReactChildren(children, { active: active, onClick: onClick })));
}
exports.List = List;
//# sourceMappingURL=list.js.map