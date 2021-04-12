"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var icon_1 = require("mo/components/icon");
var menu_1 = require("mo/components/menu");
var dropdown_1 = require("mo/components/dropdown");
var base_1 = require("./base");
function EditorAction(props) {
    var _a = props.actions, actions = _a === void 0 ? [] : _a, _b = props.menu, menu = _b === void 0 ? [] : _b, _c = props.isActiveGroup, isActiveGroup = _c === void 0 ? false : _c, onSplitEditorRight = props.onSplitEditorRight;
    var overlay = menu.length > 0 ? (React.createElement(menu_1.Menu, { style: { width: 200 }, data: menu })) : (React.createElement("span", { style: {
            padding: 15,
            fontSize: 14,
        } }, "No more actions"));
    var handleSplitEditor = react_1.useCallback(function (e) {
        onSplitEditorRight === null || onSplitEditorRight === void 0 ? void 0 : onSplitEditorRight();
    }, [actions, menu]);
    return (React.createElement("div", { className: base_1.groupActionsClassName },
        actions.map(function (action) { return (React.createElement("div", { className: base_1.groupActionsItemClassName, key: action.id, onClick: action.onClick, title: action.title }, action.icon)); }),
        isActiveGroup ? (React.createElement("div", { onClick: handleSplitEditor, className: base_1.groupActionsItemClassName, title: "Split Editor Right" },
            React.createElement(icon_1.Icon, { type: "split-horizontal" }))) : null,
        React.createElement(dropdown_1.DropDown, { placement: "bottom", className: base_1.groupActionsItemClassName, trigger: "click", title: "More Actions...", overlay: overlay },
            React.createElement(icon_1.Icon, { type: "ellipsis" }))));
}
exports.default = react_1.memo(EditorAction);
//# sourceMappingURL=action.js.map