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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = exports.selectClassName = void 0;
var React = require("react");
var react_1 = require("react");
var className_1 = require("mo/common/className");
var react_2 = require("mo/react");
var dom_1 = require("mo/common/dom");
var contextView_1 = require("mo/components/contextView");
var icon_1 = require("../icon");
var initialValue = {
    isOpen: false,
    option: {
        name: '',
        value: '',
        description: '',
    },
};
exports.selectClassName = className_1.prefixClaName('select');
var containerClassName = className_1.getBEMElement(exports.selectClassName, 'container');
var selectOptionsClassName = className_1.getBEMElement(exports.selectClassName, 'options');
var selectDescriptorClassName = className_1.getBEMElement(exports.selectClassName, 'descriptor');
var inputClassName = className_1.getBEMElement(exports.selectClassName, 'input');
var selectActiveClassName = className_1.getBEMModifier(exports.selectClassName, 'active');
var selectArrowClassName = className_1.getBEMElement(exports.selectClassName, 'arrow');
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnClickOption = function (e) {
            var option = e.target;
            var value = dom_1.getAttr(option, 'data-value');
            var name = dom_1.getAttr(option, 'data-name');
            var desc = dom_1.getAttr(option, 'data-desc');
            if (name) {
                var optionItem_1 = {
                    value: value,
                    name: name,
                    description: desc,
                };
                _this.setState({
                    option: optionItem_1,
                }, function () {
                    var _a, _b;
                    (_b = (_a = _this.props).onSelect) === null || _b === void 0 ? void 0 : _b.call(_a, e, optionItem_1);
                    _this.contextView.hide();
                });
            }
        };
        _this.handleOnHoverOption = function (e) {
            var option = e.target;
            var desc = dom_1.getAttr(option, 'data-desc');
            var descriptor = _this.contextView.view.querySelector('.' + selectDescriptorClassName);
            if (descriptor) {
                var content = desc || 'None';
                descriptor.innerHTML = content;
                descriptor.setAttribute('title', content);
            }
        };
        _this.handleOnClickSelect = function (e) {
            var select = _this.selectElm.current;
            var children = _this.props.children;
            if (select) {
                var selectRect_1 = select === null || select === void 0 ? void 0 : select.getBoundingClientRect();
                selectRect_1.y = selectRect_1.y + selectRect_1.height;
                _this.setState({ isOpen: true });
                _this.contextView.show(selectRect_1, function () {
                    return (React.createElement("div", { style: {
                            width: selectRect_1.width,
                        }, className: className_1.classNames(containerClassName, selectActiveClassName), onMouseOver: _this.handleOnHoverOption },
                        React.createElement("div", { className: selectOptionsClassName }, react_2.cloneReactChildren(children, {
                            onClick: _this.handleOnClickOption,
                        })),
                        React.createElement("div", { className: selectDescriptorClassName }, "None")));
                });
            }
        };
        _this.contextView = contextView_1.useContextView({
            shadowOutline: false,
        });
        _this.state = _this.getDefaultState(_this.props);
        _this.selectElm = React.createRef();
        _this.selectInput = React.createRef();
        return _this;
    }
    Select.prototype.componentDidMount = function () {
        var _this = this;
        this.contextView.onHide(function () {
            if (_this.state.isOpen) {
                _this.setState({
                    isOpen: false,
                });
            }
        });
    };
    Select.prototype.getDefaultState = function (props) {
        var e_1, _a;
        var defaultSelectedOption = {};
        var defaultValue = props.value || props.defaultValue;
        var options = react_1.Children.toArray(props.children);
        try {
            for (var options_1 = __values(options), options_1_1 = options_1.next(); !options_1_1.done; options_1_1 = options_1.next()) {
                var option = options_1_1.value;
                if (react_1.isValidElement(option)) {
                    var optionProps = option.props;
                    if (optionProps.value && optionProps.value === defaultValue) {
                        defaultSelectedOption = __assign(__assign({}, optionProps), { name: optionProps.name ||
                                optionProps.children });
                        break;
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (options_1_1 && !options_1_1.done && (_a = options_1.return)) _a.call(options_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return __assign(__assign({}, initialValue), { option: __assign({}, defaultSelectedOption) });
    };
    Select.prototype.render = function () {
        var _a = this.state, option = _a.option, isOpen = _a.isOpen;
        var _b = this.props, className = _b.className, placeholder = _b.placeholder, custom = __rest(_b, ["className", "placeholder"]);
        var selectActive = isOpen ? selectActiveClassName : '';
        var claNames = className_1.classNames(exports.selectClassName, className, selectActive);
        return (React.createElement("div", __assign({ ref: this.selectElm, className: claNames }, custom),
            React.createElement("input", { onClick: this.handleOnClickSelect, ref: this.selectInput, autoComplete: "off", placeholder: placeholder, className: inputClassName, value: option.name, readOnly: true }),
            React.createElement("span", { className: selectArrowClassName },
                React.createElement(icon_1.Icon, { type: 'chevron-down' }))));
    };
    return Select;
}(react_1.PureComponent));
exports.Select = Select;
//# sourceMappingURL=select.js.map