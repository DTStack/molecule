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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withConfirm = exports.withWarn = void 0;
var React = require("react");
var ReactDOM = require("react-dom");
var icon_1 = require("mo/components/icon");
var modal_1 = require("./modal");
var confirmDialog_1 = require("./confirmDialog");
function confirm(config) {
    var div = document.createElement('div');
    document.body.appendChild(div);
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    var currentConfig = __assign(__assign({}, config), { close: close, visible: true });
    function destroy() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var unmountResult = ReactDOM.unmountComponentAtNode(div);
        if (unmountResult && div.parentNode) {
            div.parentNode.removeChild(div);
        }
        var triggerCancel = args.some(function (param) { return param && param.triggerCancel; });
        if (config.onCancel && triggerCancel) {
            config.onCancel.apply(config, __spread(args));
        }
        for (var i = 0; i < modal_1.destroyFns.length; i++) {
            var fn = modal_1.destroyFns[i];
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            if (fn === close) {
                modal_1.destroyFns.splice(i, 1);
                break;
            }
        }
    }
    function render(_a) {
        var okText = _a.okText, cancelText = _a.cancelText, props = __rest(_a, ["okText", "cancelText"]);
        setTimeout(function () {
            ReactDOM.render(React.createElement(confirmDialog_1.default, __assign({}, props, { okText: okText, cancelText: cancelText })), div);
        });
    }
    function close() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        currentConfig = __assign(__assign({}, currentConfig), { visible: false, afterClose: function () { return destroy.apply(void 0, __spread(args)); } });
        render(currentConfig);
    }
    render(currentConfig);
    modal_1.destroyFns.push(close);
    return {
        destroy: close,
    };
}
exports.default = confirm;
function withWarn(props) {
    return __assign({ type: 'warning', okCancel: false, icon: React.createElement(icon_1.Icon, { type: "warning" }) }, props);
}
exports.withWarn = withWarn;
function withConfirm(props) {
    return __assign({ type: 'confirm', okCancel: true, icon: React.createElement(icon_1.Icon, { type: "warning" }) }, props);
}
exports.withConfirm = withConfirm;
//# sourceMappingURL=confirm.js.map