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
exports.TextArea = void 0;
var React = require("react");
var rc_textarea_1 = require("rc-textarea");
var react_1 = require("react");
var loadsh_1 = require("loadsh");
var className_1 = require("mo/common/className");
var useMergedState_1 = require("rc-util/lib/hooks/useMergedState");
var input_1 = require("./input");
var textAreaClassName = className_1.getBEMElement(input_1.inputClassName, 'textarea');
var showCountClassName = className_1.getBEMModifier(textAreaClassName, 'show-count');
var TextArea = function (_a) {
    var _b = _a.showCount, showCount = _b === void 0 ? false : _b, maxLength = _a.maxLength, className = _a.className, style = _a.style, onChange = _a.onChange, props = __rest(_a, ["showCount", "maxLength", "className", "style", "onChange"]);
    var innerRef = react_1.useRef(null);
    var _c = __read(useMergedState_1.default(props.defaultValue, {
        value: props.value,
    }), 2), value = _c[0], setValue = _c[1];
    var prevValue = react_1.useRef(props.value);
    react_1.useEffect(function () {
        if (props.value !== undefined || prevValue.current !== props.value) {
            setValue(props.value);
            prevValue.current = props.value;
        }
    }, [props.value, prevValue.current]);
    var handleSetValue = function (val) {
        if (props.value === undefined) {
            setValue(val);
        }
    };
    var handleChange = function (e) {
        handleSetValue(e.target.value);
        input_1.resolveOnChange(innerRef.current, e, onChange);
    };
    var otherProps = loadsh_1.omit(props, ['value']);
    var textArea = (React.createElement(rc_textarea_1.default, __assign({}, otherProps, { value: value, maxLength: maxLength, className: className_1.classNames(className && !showCount ? [className] : ''), style: showCount ? {} : style, prefixCls: input_1.inputClassName, onChange: handleChange, ref: innerRef })));
    var val = input_1.fixControlledValue(value);
    var hasMaxLength = Number(maxLength) > 0;
    val = hasMaxLength ? __spread(val).slice(0, maxLength).join('') : val;
    // Only show text area wrapper when needed
    if (showCount) {
        var valueLength = __spread(val).length;
        var dataCount = "" + valueLength + (hasMaxLength ? " / " + maxLength : '');
        return (React.createElement("div", { className: className_1.classNames(className, textAreaClassName, showCountClassName), style: style, "data-count": dataCount }, textArea));
    }
    return textArea;
};
exports.TextArea = TextArea;
//# sourceMappingURL=textArea.js.map