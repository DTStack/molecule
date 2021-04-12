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
exports.Tab = exports.tabItemClassName = exports.tabClassName = void 0;
var React = require("react");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var react_dnd_1 = require("react-dnd");
var className_1 = require("mo/common/className");
var tabExtra_1 = require("./tabExtra");
exports.tabClassName = className_1.prefixClaName('tab');
exports.tabItemClassName = className_1.getBEMElement(exports.tabClassName, 'item');
function Tab(props) {
    var _a;
    var active = props.active, name = props.name, closable = props.closable, editable = props.editable, data = props.data, id = props.id, index = props.index, onCloseTab = props.onCloseTab, onMoveTab = props.onMoveTab, onSelectTab = props.onSelectTab, onContextMenu = props.onContextMenu, resetProps = __rest(props, ["active", "name", "closable", "editable", "data", "id", "index", "onCloseTab", "onMoveTab", "onSelectTab", "onContextMenu"]);
    var ref = react_1.useRef(null);
    var _b = __read(react_1.useState(false), 2), hover = _b[0], setHover = _b[1];
    var handleMouseOver = function () { return setHover(true); };
    var handleMouseOut = function () { return setHover(false); };
    var handleOnContextMenu = react_1.useCallback(function (event) {
        onContextMenu === null || onContextMenu === void 0 ? void 0 : onContextMenu(event, props);
    }, [props]);
    var _c = __read(react_dnd_1.useDrag({
        collect: function (monitor) { return ({
            isDragging: monitor.isDragging(),
        }); },
        item: { type: 'DND_NODE', id: id, index: index },
    }), 2), drag = _c[1];
    var _d = __read(react_dnd_1.useDrop({
        accept: 'DND_NODE',
        hover: function (item, monitor) {
            var _a;
            if (!ref.current)
                return;
            var component = ref.current;
            var dragIndex = monitor.getItem().index;
            var hoverIndex = index;
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }
            var hoverBoundingRect = (_a = react_dom_1.findDOMNode(component)) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
            var hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
            var clientOffset = monitor.getClientOffset();
            var hoverClientX = clientOffset.x -
                hoverBoundingRect.left;
            // drag down
            if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
                return;
            }
            // drag up
            if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
                return;
            }
            onMoveTab === null || onMoveTab === void 0 ? void 0 : onMoveTab(dragIndex, hoverIndex);
            monitor.getItem().index = hoverIndex;
        },
    }), 2), drop = _d[1];
    drag(drop(ref));
    return (React.createElement("div", { ref: ref, className: className_1.classNames(exports.tabItemClassName, (_a = {},
            _a[className_1.getBEMModifier(exports.tabItemClassName, 'active')] = active,
            _a)), onClick: function (event) { return onSelectTab === null || onSelectTab === void 0 ? void 0 : onSelectTab(id); }, onMouseOver: handleMouseOver, onMouseOut: handleMouseOut, onContextMenu: handleOnContextMenu },
        name,
        editable && (React.createElement(tabExtra_1.default, __assign({ classNames: className_1.getBEMElement(exports.tabItemClassName, 'op'), active: active, buttonHover: hover, onClick: function (e) { return onCloseTab === null || onCloseTab === void 0 ? void 0 : onCloseTab(id); }, modified: (data === null || data === void 0 ? void 0 : data.modified) || false }, resetProps))),
        closable && (React.createElement(tabExtra_1.default, __assign({ classNames: className_1.getBEMElement(exports.tabItemClassName, 'op'), active: active, buttonHover: hover, onClick: function (e) { return onCloseTab === null || onCloseTab === void 0 ? void 0 : onCloseTab(id); } }, resetProps)))));
}
exports.Tab = Tab;
//# sourceMappingURL=tab.js.map