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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Panel = exports.contentPaddingClassName = void 0;
var React = require("react");
var react_1 = require("react");
var rc_collapse_1 = require("rc-collapse");
Object.defineProperty(exports, "Panel", { enumerable: true, get: function () { return rc_collapse_1.Panel; } });
var toolbar_1 = require("mo/components/toolbar");
var icon_1 = require("mo/components/icon");
var className_1 = require("mo/common/className");
var defaultCollapseClassName = className_1.prefixClaName('collapse');
exports.contentPaddingClassName = className_1.getBEMModifier(className_1.getBEMElement(defaultCollapseClassName, 'content'), 'padding');
var initState = {
    activePanelKeys: [],
};
var Collapse = function (props) {
    var _a = __read(react_1.useState(initState), 2), state = _a[0], setState = _a[1];
    var className = props.className, _b = props.data, data = _b === void 0 ? [] : _b, restProps = __rest(props, ["className", "data"]);
    var onChangeCallback = function (key) {
        setState(function (state) { return (__assign(__assign({}, state), { activePanelKeys: key })); });
    };
    var onClick = function (e, item) {
        e.stopPropagation();
        console.log('onClick:', e, item);
    };
    var render = function (render) {
        if (render) {
            return render();
        }
        else {
            return (React.createElement("span", { className: exports.contentPaddingClassName }, "Cannot provide..."));
        }
    };
    var activePanelKeys = state.activePanelKeys;
    return (React.createElement("div", { className: className_1.classNames(defaultCollapseClassName, className) },
        React.createElement(rc_collapse_1.default, __assign({}, restProps, { onChange: function (activeKeys) {
                onChangeCallback(activeKeys);
            }, expandIcon: function (_a) {
                var isActive = _a.isActive;
                return (React.createElement(icon_1.Icon, { type: isActive ? 'chevron-down' : 'chevron-right' }));
            } }), data.map(function (panel) { return (React.createElement(rc_collapse_1.Panel, { key: panel.id, header: panel.name, extra: (activePanelKeys === null || activePanelKeys === void 0 ? void 0 : activePanelKeys.includes(panel.id)) && (React.createElement(toolbar_1.default, { key: panel.id, data: panel.toolbar, onClick: onClick })) }, render(panel.renderPanel))); }))));
};
exports.default = Collapse;
//# sourceMappingURL=index.js.map