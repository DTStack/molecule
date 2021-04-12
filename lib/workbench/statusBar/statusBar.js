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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var item_1 = require("./item");
var utils_1 = require("mo/common/utils");
var base_1 = require("./base");
function StatusBar(props) {
    var _a = props.leftItems, leftItems = _a === void 0 ? [] : _a, onClick = props.onClick, _b = props.rightItems, rightItems = _b === void 0 ? [] : _b;
    var renderItems = function (data) {
        return data
            .sort(base_1.sortByIndex)
            .map(function (item) { return (React.createElement(item_1.default, __assign({ key: item.id }, item, { onClick: utils_1.mergeFunctions(item.onClick, onClick) }))); });
    };
    return (React.createElement("div", { className: base_1.statusBarClassName },
        React.createElement("div", { className: base_1.leftItemsClassName }, renderItems(leftItems)),
        React.createElement("div", { className: base_1.rightItemsClassName }, renderItems(rightItems))));
}
exports.default = react_1.memo(StatusBar);
//# sourceMappingURL=statusBar.js.map