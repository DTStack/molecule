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
exports.ActionBarItem = void 0;
var React = require("react");
var react_1 = require("react");
var className_1 = require("mo/common/className");
var contextMenu_1 = require("mo/components/contextMenu");
var dom_1 = require("mo/common/dom");
var menu_1 = require("mo/components/menu");
var utils_1 = require("mo/common/utils");
var defaultActionBarClassName = className_1.prefixClaName('action-bar');
var containerClassName = className_1.getBEMElement(defaultActionBarClassName, 'container');
var itemClassName = className_1.getBEMElement(defaultActionBarClassName, 'item');
var itemDisabledClassName = className_1.getBEMModifier(itemClassName, 'disabled');
var itemCheckedClassName = className_1.getBEMModifier(itemClassName, 'checked');
var labelClassName = className_1.getBEMElement(defaultActionBarClassName, 'label');
function ActionBarItem(props) {
    var id = props.id, title = props.title, name = props.name, _a = props.data, data = _a === void 0 ? {} : _a, _b = props.contextMenu, contextMenu = _b === void 0 ? [] : _b, onClick = props.onClick, onContextMenuClick = props.onContextMenuClick;
    var disabled = props.disabled ? itemDisabledClassName : null;
    var checked = props.checked ? itemCheckedClassName : null;
    var claNames = className_1.classNames(labelClassName, 'codicon', props.iconName, disabled, checked);
    var contextViewMenu;
    var onClickMenuItem = react_1.useCallback(function (e, item) {
        onContextMenuClick === null || onContextMenuClick === void 0 ? void 0 : onContextMenuClick(e, item);
        contextViewMenu === null || contextViewMenu === void 0 ? void 0 : contextViewMenu.dispose();
    }, [contextMenu]);
    var renderContextMenu = function () { return (React.createElement(menu_1.Menu, { onClick: onClickMenuItem, data: contextMenu })); };
    react_1.useEffect(function () {
        if (contextMenu.length > 0) {
            contextViewMenu = contextMenu_1.useContextMenu({
                anchor: dom_1.select("#" + id),
                render: renderContextMenu,
            });
        }
        return function cleanup() {
            contextViewMenu === null || contextViewMenu === void 0 ? void 0 : contextViewMenu.dispose();
        };
    });
    var onClickItem = function (event) {
        if (onClick) {
            onClick(event, props);
        }
        if (contextMenu.length > -1 && contextViewMenu) {
            contextViewMenu.show({
                x: event.clientX,
                y: event.clientY,
            });
        }
    };
    return (React.createElement("li", { id: id, className: className_1.classNames(itemClassName, disabled), onClick: onClickItem, "data-id": data.id },
        React.createElement("a", { className: claNames, title: title }, name)));
}
exports.ActionBarItem = ActionBarItem;
function ActionBar(props) {
    var _a = props.data, data = _a === void 0 ? [] : _a, onClick = props.onClick, onContextMenuClick = props.onContextMenuClick, className = props.className, custom = __rest(props, ["data", "onClick", "onContextMenuClick", "className"]);
    var claNames = className_1.classNames(defaultActionBarClassName, className);
    var items = data.map(function (item, index) { return (React.createElement(ActionBarItem, __assign({ key: item.id }, item, { onContextMenuClick: onContextMenuClick, "data-index": index, onClick: utils_1.mergeFunctions(onClick, item.onClick) }))); });
    return (React.createElement("div", __assign({ className: claNames }, custom),
        React.createElement("ul", { className: containerClassName }, items)));
}
exports.default = ActionBar;
//# sourceMappingURL=index.js.map