"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = exports.getInputClassName = exports.resolveOnChange = exports.fixControlledValue = exports.inputClassName = void 0;
var React = require("react");
var className_1 = require("mo/common/className");
var keyCodes_1 = require("mo/common/keyCodes");
exports.inputClassName = className_1.prefixClaName('input');
function fixControlledValue(value) {
    if (typeof value === 'undefined' || value === null)
        return '';
    return value;
}
exports.fixControlledValue = fixControlledValue;
function resolveOnChange(target, e, onChange) {
    if (onChange) {
        var event_1 = e;
        onChange(event_1);
    }
}
exports.resolveOnChange = resolveOnChange;
function getInputClassName(prefixCls, size, disabled) {
    var _a, _b, _c;
    return className_1.classNames(prefixCls, (_a = {}, _a[className_1.getBEMModifier(prefixCls, 'normal')] = size === 'normal', _a), (_b = {}, _b[className_1.getBEMModifier(prefixCls, 'lg')] = size === 'large', _b), (_c = {}, _c[className_1.getBEMModifier(prefixCls, 'disabled')] = disabled, _c));
}
exports.getInputClassName = getInputClassName;
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input(props) {
        var _this = _super.call(this, props) || this;
        _this.saveInput = function (input) {
            _this.input = input;
        };
        _this.handleChange = function (e) {
            var onChange = _this.props.onChange;
            _this.setValue(e.target.value);
            resolveOnChange(_this.input, e, onChange);
        };
        _this.handleKeyDown = function (e) {
            var _a = _this.props, onPressEnter = _a.onPressEnter, onKeyDown = _a.onKeyDown;
            if (e.key === keyCodes_1.KeyCodes.ENTER) {
                onPressEnter === null || onPressEnter === void 0 ? void 0 : onPressEnter(e);
            }
            onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
        };
        var value = typeof props.value === 'undefined'
            ? props.defaultValue
            : props.value;
        _this.state = {
            value: value,
            prevValue: props.value,
        };
        return _this;
    }
    Input.getDerivedStateFromProps = function (nextProps, _a) {
        var prevValue = _a.prevValue;
        var newState = { prevValue: nextProps.value };
        if (nextProps.value !== undefined || prevValue !== nextProps.value) {
            newState.value = nextProps.value;
        }
        return newState;
    };
    Input.prototype.setValue = function (value) {
        if (this.props.value === undefined) {
            this.setState({ value: value });
        }
    };
    Input.prototype.render = function () {
        var value = this.state.value;
        var _a = this.props, className = _a.className, _b = _a.size, size = _b === void 0 ? 'normal' : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, placeholder = _a.placeholder, onFocus = _a.onFocus, onBlur = _a.onBlur, style = _a.style;
        return (React.createElement("input", { value: value, style: style, placeholder: placeholder, onChange: this.handleChange, onFocus: function (e) { return onFocus === null || onFocus === void 0 ? void 0 : onFocus(e); }, onBlur: function (e) { return onBlur === null || onBlur === void 0 ? void 0 : onBlur(e); }, onKeyDown: this.handleKeyDown, className: className_1.classNames(className, getInputClassName(exports.inputClassName, size, disabled)), ref: this.saveInput }));
    };
    Input.defaultProps = {
        type: 'text',
    };
    return Input;
}(React.Component));
exports.Input = Input;
//# sourceMappingURL=input.js.map