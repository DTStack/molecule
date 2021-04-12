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
exports.SubMenu = exports.isVertical = exports.isHorizontal = exports.MenuMode = void 0;
var React = require("react");
var className_1 = require("mo/common/className");
var react_1 = require("react");
var dom_1 = require("mo/common/dom");
var css_1 = require("mo/common/css");
var icon_1 = require("mo/components/icon");
var menu_1 = require("./menu");
var base_1 = require("./base");
var MenuMode;
(function (MenuMode) {
    MenuMode["Vertical"] = "vertical";
    MenuMode["Horizontal"] = "horizontal";
})(MenuMode = exports.MenuMode || (exports.MenuMode = {}));
function isHorizontal(mode) {
    return mode === MenuMode.Horizontal;
}
exports.isHorizontal = isHorizontal;
function isVertical(mode) {
    return mode === MenuMode.Horizontal;
}
exports.isVertical = isVertical;
function hideSubMenu(target) {
    var container = target || document.body;
    var all = container.querySelectorAll('.' + base_1.defaultSubMenuClassName);
    all === null || all === void 0 ? void 0 : all.forEach(function (ele) {
        ele.style.visibility = 'hidden';
    });
}
var hideAll = function () {
    hideSubMenu();
};
var hideAfterLeftWindow = function () {
    if (document.hidden) {
        hideSubMenu();
    }
};
function SubMenu(props) {
    var className = props.className, name = props.name, render = props.render, _a = props.data, data = _a === void 0 ? [] : _a, _b = props.mode, mode = _b === void 0 ? MenuMode.Vertical : _b, icon = props.icon, _c = props.disabled, disabled = _c === void 0 ? false : _c, children = props.children, onClick = props.onClick, custom = __rest(props, ["className", "name", "render", "data", "mode", "icon", "disabled", "children", "onClick"]);
    var cNames = className_1.classNames(base_1.defaultSubMenuClassName, className);
    var isAlignHorizontal = isHorizontal(mode);
    var events = {
        onMouseOver: function (event) {
            var nextMenuItem = dom_1.findParentByClassName(event.target, base_1.defaultMenuItemClassName);
            var nextSubMenu = nextMenuItem === null || nextMenuItem === void 0 ? void 0 : nextMenuItem.querySelector('.' + base_1.defaultSubMenuClassName);
            if (!nextMenuItem || !nextSubMenu)
                return;
            var prevMenuItem = dom_1.findParentByClassName(event.relatedTarget, base_1.defaultMenuItemClassName);
            var prevSubMenu = prevMenuItem === null || prevMenuItem === void 0 ? void 0 : prevMenuItem.querySelector('.' + base_1.defaultSubMenuClassName);
            if ((prevMenuItem &&
                prevSubMenu &&
                !prevMenuItem.contains(nextMenuItem)) ||
                (!prevMenuItem && !prevSubMenu)) {
                hideAll();
            }
            var domRect = nextMenuItem.getBoundingClientRect();
            nextSubMenu.style.visibility = 'visible';
            var pos = dom_1.getRelativePosition(nextSubMenu, domRect);
            if (isAlignHorizontal)
                pos.y = pos.y + domRect.height;
            else {
                pos.x = pos.x + domRect.width;
                // The vertical menu default has padding 0.5em so that need reduce the padding
                var fontSize = getComputedStyle(nextSubMenu).getPropertyValue('font-size');
                var paddingTop = css_1.em2Px(0.5, parseInt(fontSize.replace('px', ''), 10));
                pos.y = pos.y - paddingTop;
            }
            nextSubMenu.style.cssText = "\n                left: " + pos.x + "px;\n                top: " + pos.y + "px;\n            ";
        },
        onMouseOut: function (event) {
            var nextMenuItem = dom_1.findParentByClassName(event.relatedTarget, base_1.defaultMenuItemClassName);
            if (!nextMenuItem)
                return;
            var prevMenuItem = event.currentTarget;
            var prevSubMenu = prevMenuItem === null || prevMenuItem === void 0 ? void 0 : prevMenuItem.querySelector('.' + base_1.defaultSubMenuClassName);
            var nextSubMenu = nextMenuItem === null || nextMenuItem === void 0 ? void 0 : nextMenuItem.querySelector('.' + base_1.defaultSubMenuClassName);
            // Hide the prev subMenu when the next menuItem hasn't subMenu and the prev MenuItem
            // subMenu not contains it.
            if (!nextSubMenu &&
                prevSubMenu &&
                !prevMenuItem.contains(nextMenuItem)) {
                hideAll();
            }
        },
        onClick: function (event) { },
    };
    react_1.useEffect(function () {
        window.addEventListener('contextmenu', hideAll);
        window.addEventListener('click', hideAll);
        window.addEventListener('visibilitychange', hideAfterLeftWindow);
        return function () {
            document.removeEventListener('contextmenu', hideAll);
            window.removeEventListener('click', hideAll);
            window.removeEventListener('visibilitychange', hideAfterLeftWindow);
        };
    }, []);
    var chevronType = isAlignHorizontal ? 'down' : 'right';
    var subMenuContent = data.length > 0 ? (React.createElement(menu_1.Menu, __assign({ className: cNames, style: { visibility: 'hidden' }, data: data, onClick: onClick }, custom))) : (React.createElement(menu_1.Menu, { className: cNames, style: { visibility: 'hidden' }, onClick: onClick }, children));
    events.onClick = function (event) {
        if (!subMenuContent) {
            onClick === null || onClick === void 0 ? void 0 : onClick(event, props);
        }
        event.stopPropagation();
    };
    return (React.createElement("li", __assign({ className: className_1.classNames(base_1.defaultMenuItemClassName, disabled ? base_1.disabledClassName : null) }, events, custom),
        React.createElement("a", { className: base_1.menuContentClassName },
            React.createElement(icon_1.Icon, { className: base_1.checkClassName, type: icon || '' }),
            React.createElement("span", { className: base_1.labelClassName }, render ? render(props) : name),
            React.createElement(icon_1.Icon, { className: base_1.indicatorClassName, type: "chevron-" + chevronType })),
        subMenuContent));
}
exports.SubMenu = SubMenu;
//# sourceMappingURL=subMenu.js.map