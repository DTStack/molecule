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
var React = require("react");
var button_1 = require("mo/components/button");
var ActionButton = function (props) {
    var clickedRef = React.useRef(false);
    var handlePromiseOnOk = function (returnValueOfOnOk) {
        var closeModal = props.closeModal;
        if (!returnValueOfOnOk || !returnValueOfOnOk.then) {
            return;
        }
        returnValueOfOnOk.then(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            closeModal.apply(void 0, __spread(args));
        }, function (e) {
            // eslint-disable-next-line no-console
            console.error(e);
            clickedRef.current = false;
        });
    };
    var onClick = function () {
        var actionFn = props.actionFn, closeModal = props.closeModal;
        if (clickedRef.current) {
            return;
        }
        clickedRef.current = true;
        if (!actionFn) {
            closeModal();
            return;
        }
        var returnValueOfOnOk;
        if (actionFn.length) {
            returnValueOfOnOk = actionFn(closeModal);
            clickedRef.current = false;
        }
        else {
            returnValueOfOnOk = actionFn();
            if (!returnValueOfOnOk) {
                closeModal();
                return;
            }
        }
        handlePromiseOnOk(returnValueOfOnOk);
    };
    var children = props.children, resetProps = __rest(props, ["children"]);
    return (React.createElement(button_1.Button, __assign({ onClick: onClick }, resetProps), children));
};
exports.default = ActionButton;
//# sourceMappingURL=actionButton.js.map