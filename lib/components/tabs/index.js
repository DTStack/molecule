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
exports.Tabs = exports.tabItemCloseClassName = exports.tabsContentItem = exports.tabsContent = exports.tabsHeader = exports.tabsClassName = void 0;
var React = require("react");
var react_1 = require("react");
var immutability_helper_1 = require("immutability-helper");
var className_1 = require("mo/common/className");
var tab_1 = require("./tab");
var dragAndDrop_1 = require("./dragAndDrop");
exports.tabsClassName = className_1.prefixClaName('tabs');
exports.tabsHeader = className_1.getBEMElement(exports.tabsClassName, 'header');
exports.tabsContent = className_1.getBEMElement(exports.tabsClassName, 'content');
exports.tabsContentItem = className_1.getBEMElement(exports.tabsContent, 'item');
exports.tabItemCloseClassName = className_1.getBEMElement(tab_1.tabItemClassName, 'close');
function Tabs(props) {
    var activeTab = props.activeTab, className = props.className, _a = props.data, data = _a === void 0 ? [] : _a, _b = props.type, type = _b === void 0 ? 'line' : _b, style = props.style, onMoveTab = props.onMoveTab, resetProps = __rest(props, ["activeTab", "className", "data", "type", "style", "onMoveTab"]);
    var onChangeTab = react_1.useCallback(function (dragIndex, hoverIndex) {
        var dragTab = data[dragIndex];
        onMoveTab === null || onMoveTab === void 0 ? void 0 : onMoveTab(immutability_helper_1.default(data, {
            $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragTab],
            ],
        }));
    }, [data]);
    return (React.createElement(dragAndDrop_1.default, null,
        React.createElement("div", { style: style, className: className_1.classNames(exports.tabsClassName, className_1.getBEMModifier(exports.tabsClassName, type), className) },
            React.createElement("div", { className: exports.tabsHeader }, data === null || data === void 0 ? void 0 : data.map(function (tab, index) {
                return (React.createElement(tab_1.Tab, __assign({ id: tab.id, key: tab.id, active: activeTab === tab.id, index: index, name: tab.name, data: tab.data, onMoveTab: onChangeTab }, resetProps)));
            })),
            React.createElement("div", { className: exports.tabsContent }, data === null || data === void 0 ? void 0 : data.map(function (tab) {
                var _a;
                return (React.createElement("div", { key: tab.id, className: className_1.classNames(exports.tabsContentItem, (_a = {},
                        _a[className_1.getBEMModifier(exports.tabsContentItem, 'active')] = activeTab === tab.id,
                        _a)) }, tab.renderPanel));
            })))));
}
exports.Tabs = Tabs;
//# sourceMappingURL=index.js.map