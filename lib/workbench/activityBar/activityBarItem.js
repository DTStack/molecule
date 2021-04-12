"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var className_1 = require("mo/common/className");
var contextMenu_1 = require("mo/components/contextMenu");
var dom_1 = require("mo/common/dom");
var menu_1 = require("mo/components/menu");
var base_1 = require("./base");
function ActivityBarItem(props) {
    var _a = props.checked, checked = _a === void 0 ? false : _a, _b = props.name, name = _b === void 0 ? '' : _b, _c = props.data, data = _c === void 0 ? {} : _c, render = props.render, _d = props.iconName, iconName = _d === void 0 ? '' : _d, id = props.id, onClick = props.onClick, _e = props.contextMenu, contextMenu = _e === void 0 ? [] : _e;
    var content = '';
    if (render) {
        content = render();
    }
    var contextViewMenu;
    var onClickMenuItem = react_1.useCallback(function () {
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
        if (contextMenu.length > 0 && contextViewMenu) {
            contextViewMenu.show({
                x: event.clientX,
                y: event.clientY,
            });
        }
    };
    return (React.createElement("li", { id: id, onClick: onClickItem, className: className_1.classNames(base_1.itemClassName, checked ? base_1.itemCheckedClassName : ''), "data-id": data.id },
        React.createElement("a", { title: name, className: className_1.classNames(base_1.labelClassName, 'codicon', iconName) }, content),
        checked ? React.createElement("div", { className: base_1.indicatorClassName }) : null));
}
exports.default = react_1.memo(ActivityBarItem);
//# sourceMappingURL=activityBarItem.js.map