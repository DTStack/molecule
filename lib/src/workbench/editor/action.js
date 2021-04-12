"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var icon_1 = require("mo/components/icon");
var menu_1 = require("mo/components/menu");
var dropdown_1 = require("mo/components/dropdown");
var base_1 = require("./base");
function EditorAction(props) {
    var _a = props.actions, actions = _a === void 0 ? [] : _a, _b = props.isActiveGroup, isActiveGroup = _b === void 0 ? false : _b, onClickContextMenu = props.onClickContextMenu, onSplitEditorRight = props.onSplitEditorRight;
    var childRef = React.useRef();
    var handleOnMenuClick = function (e, item) {
        onClickContextMenu === null || onClickContextMenu === void 0 ? void 0 : onClickContextMenu(e, item);
        childRef.current.dispose();
    };
    var overlay = actions.length > 0 ? (React.createElement(menu_1.Menu, { style: { width: 200 }, data: actions, onClick: handleOnMenuClick })) : (React.createElement("span", { style: {
            padding: 15,
            fontSize: 14,
        } }, "No more actions"));
    var handleSplitEditor = react_1.useCallback(function (e) {
        onSplitEditorRight === null || onSplitEditorRight === void 0 ? void 0 : onSplitEditorRight();
    }, [actions]);
    return (React.createElement("div", { className: base_1.groupActionsClassName },
        isActiveGroup ? (React.createElement("div", { onClick: handleSplitEditor, className: base_1.groupActionsItemClassName, title: "Split Editor Right" },
            React.createElement(icon_1.Icon, { type: "split-horizontal" }))) : null,
        React.createElement(dropdown_1.DropDown, { ref: childRef, placement: "bottom", className: base_1.groupActionsItemClassName, trigger: "click", title: "More Actions...", overlay: overlay },
            React.createElement(icon_1.Icon, { type: "ellipsis" }))));
}
exports.default = react_1.memo(EditorAction);
//# sourceMappingURL=action.js.map