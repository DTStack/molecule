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
exports.ActivityBar = void 0;
var React = require("react");
var id_1 = require("mo/common/id");
var activityBarItem_1 = require("./activityBarItem");
var scrollable_1 = require("mo/components/scrollable");
var base_1 = require("./base");
function ActivityBar(props) {
    var _a = props.data, data = _a === void 0 ? [] : _a, selected = props.selected, onClick = props.onClick, onSelect = props.onSelect;
    var onClickBar = function (e, item) {
        if (onClick)
            onClick(e, item);
        if (onSelect) {
            onSelect(item.id || '', item);
        }
    };
    var normalBarItems = (data === null || data === void 0 ? void 0 : data.filter(function (item) { return !item.type || item.type === 'normal'; })) || [];
    var globalBarItems = (data === null || data === void 0 ? void 0 : data.filter(function (item) { return item.type && item.type === 'global'; })) || [];
    var renderItems = function (item, index) {
        return (React.createElement(activityBarItem_1.default, __assign({ key: item.id }, item, { onClick: onClickBar, "data-index": index, checked: selected === item.id })));
    };
    return (React.createElement("div", { className: base_1.defaultClassName, id: id_1.ID_ACTIVITY_BAR },
        React.createElement("div", { className: base_1.containerClassName },
            React.createElement(scrollable_1.Scrollable, { className: base_1.normalItemsClassName },
                React.createElement("ul", null, normalBarItems.map(renderItems))),
            React.createElement("ul", { className: base_1.globalItemsClassName }, globalBarItems.map(renderItems)))));
}
exports.ActivityBar = ActivityBar;
exports.default = ActivityBar;
//# sourceMappingURL=activityBar.js.map