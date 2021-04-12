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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.modalClassName = exports.destroyFns = void 0;
var React = require("react");
var rc_dialog_1 = require("rc-dialog");
var className_1 = require("mo/common/className");
var icon_1 = require("mo/components/icon");
var button_1 = require("mo/components/button");
exports.destroyFns = [];
exports.modalClassName = className_1.prefixClaName('modal');
var mousePosition;
var getClickPosition = function (e) {
    mousePosition = {
        x: e.pageX,
        y: e.pageY,
    };
    setTimeout(function () {
        mousePosition = null;
    }, 100);
};
if (typeof window !== 'undefined' && ((_a = window.document) === null || _a === void 0 ? void 0 : _a.documentElement)) {
    document.documentElement.addEventListener('click', getClickPosition, true);
}
var closeClassName = className_1.getBEMElement(exports.modalClassName, 'close');
var closeDescriptorClassName = className_1.getBEMModifier("" + closeClassName, 'x');
var closeIconToRender = (React.createElement("span", { className: closeDescriptorClassName },
    React.createElement(icon_1.Icon, { type: "close" })));
var Modal = function (props) {
    var _a;
    var handleCancel = function (e) {
        var onCancel = props.onCancel;
        onCancel === null || onCancel === void 0 ? void 0 : onCancel(e);
    };
    var handleOk = function (e) {
        var onOk = props.onOk;
        onOk === null || onOk === void 0 ? void 0 : onOk(e);
    };
    var footer = props.footer, visible = props.visible, wrapClassName = props.wrapClassName, centered = props.centered, getContainer = props.getContainer, closeIcon = props.closeIcon, _b = props.cancelText, cancelText = _b === void 0 ? 'cancel' : _b, _c = props.okText, okText = _c === void 0 ? 'ok' : _c, restProps = __rest(props, ["footer", "visible", "wrapClassName", "centered", "getContainer", "closeIcon", "cancelText", "okText"]);
    var wrapClassNameExtended = className_1.classNames(wrapClassName, (_a = {},
        _a[className_1.getBEMModifier("" + exports.modalClassName, 'centered')] = !!centered,
        _a));
    var renderFooter = function () {
        var footer = props.footer, cancelButtonProps = props.cancelButtonProps, okButtonProps = props.okButtonProps;
        if (footer !== undefined)
            return footer;
        return (React.createElement(React.Fragment, null,
            React.createElement(button_1.Button, __assign({ onClick: handleCancel }, cancelButtonProps), cancelText),
            React.createElement(button_1.Button, __assign({ onClick: handleOk }, okButtonProps), okText)));
    };
    return (React.createElement(rc_dialog_1.default, __assign({}, restProps, { getContainer: getContainer, prefixCls: exports.modalClassName, wrapClassName: wrapClassNameExtended, footer: renderFooter(), visible: visible, mousePosition: mousePosition, onClose: handleCancel, closeIcon: closeIconToRender })));
};
exports.default = Modal;
//# sourceMappingURL=modal.js.map