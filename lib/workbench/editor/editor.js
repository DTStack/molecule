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
exports.Editor = void 0;
var React = require("react");
var react_1 = require("react");
var react_split_pane_1 = require("react-split-pane");
var Pane_1 = require("react-split-pane/lib/Pane");
var group_1 = require("./group");
var welcome_1 = require("./welcome");
var base_1 = require("./base");
function Editor(props) {
    var _a = props.groups, groups = _a === void 0 ? [] : _a, current = props.current, onCloseTab = props.onCloseTab, onMoveTab = props.onMoveTab, onSelectTab = props.onSelectTab, _b = props.groupSplitPos, groupSplitPos = _b === void 0 ? [] : _b, onSplitEditorRight = props.onSplitEditorRight, onUpdateEditorIns = props.onUpdateEditorIns, onTabContextMenu = props.onTabContextMenu, onPaneSizeChange = props.onPaneSizeChange;
    var getEvents = function (groupId) {
        return {
            onMoveTab: function (tabs) { return onMoveTab === null || onMoveTab === void 0 ? void 0 : onMoveTab(tabs, groupId); },
            onCloseTab: function (tabKey) { return onCloseTab === null || onCloseTab === void 0 ? void 0 : onCloseTab(tabKey, groupId); },
            onSelectTab: function (tabKey) { return onSelectTab === null || onSelectTab === void 0 ? void 0 : onSelectTab(tabKey, groupId); },
            onSplitEditorRight: onSplitEditorRight,
            onUpdateEditorIns: onUpdateEditorIns,
            onTabContextMenu: onTabContextMenu,
        };
    };
    var renderGroups = function () {
        if (groups.length === 1) {
            return (React.createElement(group_1.default, __assign({ currentGroup: current }, groups[0], getEvents(groups[0].id))));
        }
        else if (groups.length > 1) {
            return (React.createElement(react_split_pane_1.default, { split: 'vertical', onChange: onPaneSizeChange }, groups.map(function (g, index) { return (React.createElement(Pane_1.default, { key: "group-" + index + g.id, initialSize: groupSplitPos[index]
                    ? groupSplitPos[index] + "ratio"
                    : undefined, minSize: "220px" },
                React.createElement(group_1.default, __assign({ currentGroup: current }, g, getEvents(g.id))))); })));
        }
        return null;
    };
    return (React.createElement("div", { className: base_1.defaultEditorClassName }, current ? renderGroups() : React.createElement(welcome_1.default, null)));
}
exports.Editor = Editor;
exports.default = react_1.memo(Editor);
//# sourceMappingURL=editor.js.map