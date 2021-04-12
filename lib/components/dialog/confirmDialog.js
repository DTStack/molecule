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
exports.confirmClassName = void 0;
var React = require("react");
var className_1 = require("mo/common/className");
var modal_1 = require("./modal");
var actionButton_1 = require("./actionButton");
exports.confirmClassName = className_1.prefixClaName('confirm');
var containerClassName = className_1.getBEMElement(exports.confirmClassName, 'container');
var indicatorClassName = className_1.getBEMElement(exports.confirmClassName, 'indicator');
var contentClassName = className_1.getBEMElement(exports.confirmClassName, 'content');
var messageClassName = className_1.getBEMElement(exports.confirmClassName, 'message');
var btnsClassName = className_1.getBEMElement(exports.confirmClassName, 'btns');
var ConfirmDialog = function (props) {
    var _a;
    var actions = props.actions, icon = props.icon, onCancel = props.onCancel, onOk = props.onOk, close = props.close, maskStyle = props.maskStyle, _b = props.okText, okText = _b === void 0 ? 'delete' : _b, okButtonProps = props.okButtonProps, _c = props.cancelText, cancelText = _c === void 0 ? 'cancel' : _c, cancelButtonProps = props.cancelButtonProps, bodyStyle = props.bodyStyle, _d = props.closable, closable = _d === void 0 ? true : _d, className = props.className, okCancel = props.okCancel, _e = props.width, width = _e === void 0 ? 520 : _e, _f = props.style, style = _f === void 0 ? {} : _f, _g = props.mask, mask = _g === void 0 ? true : _g, _h = props.maskClosable, maskClosable = _h === void 0 ? false : _h, _j = props.transitionName, transitionName = _j === void 0 ? 'zoom' : _j, _k = props.maskTransitionName, maskTransitionName = _k === void 0 ? 'fade' : _k, resetProps = __rest(props, ["actions", "icon", "onCancel", "onOk", "close", "maskStyle", "okText", "okButtonProps", "cancelText", "cancelButtonProps", "bodyStyle", "closable", "className", "okCancel", "width", "style", "mask", "maskClosable", "transitionName", "maskTransitionName"]);
    var confirmDescriperClassName = className_1.getBEMElement(exports.confirmClassName, "" + props.type);
    var classString = className_1.classNames(exports.confirmClassName, confirmDescriperClassName, className);
    var cancelButton = okCancel && (React.createElement(actionButton_1.default, __assign({ actionFn: onCancel, closeModal: close }, cancelButtonProps), cancelText));
    return (React.createElement(modal_1.default, __assign({ prefixCls: exports.confirmClassName, className: classString, wrapClassName: className_1.classNames((_a = {},
            _a[className_1.getBEMModifier(exports.confirmClassName, 'centered')] = !!props.centered,
            _a)), onCancel: function () { return close({ triggerCancel: true }); }, title: "", transitionName: transitionName, footer: "", maskTransitionName: maskTransitionName, mask: mask, maskClosable: maskClosable, style: style, width: width, closable: closable }, resetProps),
        React.createElement("div", { className: containerClassName, style: bodyStyle },
            React.createElement("div", { className: contentClassName },
                React.createElement("div", { className: indicatorClassName },
                    " ",
                    icon,
                    " "),
                React.createElement("div", { className: messageClassName },
                    props.title !== undefined && (React.createElement("span", { className: className_1.getBEMModifier(messageClassName, 'text') }, props.title)),
                    React.createElement("div", { className: className_1.getBEMModifier(messageClassName, 'detail') }, props.content))),
            React.createElement("div", { className: btnsClassName }, actions === undefined ? (React.createElement(React.Fragment, null,
                cancelButton,
                React.createElement(actionButton_1.default, __assign({ actionFn: onOk, closeModal: close }, okButtonProps), okText))) : (actions)))));
};
exports.default = ConfirmDialog;
//# sourceMappingURL=confirmDialog.js.map