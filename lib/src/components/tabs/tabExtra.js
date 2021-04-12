"use strict";
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
var React = require("react");
var react_1 = require("react");
var className_1 = require("mo/common/className");
var icon_1 = require("mo/components/icon");
function TabExtra(_a) {
    var _b = _a.classNames, classNames = _b === void 0 ? '' : _b, _c = _a.modified, modified = _c === void 0 ? false : _c, onClick = _a.onClick, _d = _a.active, active = _d === void 0 ? false : _d, _e = _a.buttonHover, buttonHover = _e === void 0 ? false : _e;
    var _f = __read(react_1.useState(false), 2), hover = _f[0], setHover = _f[1];
    var handleMouseOver = function () {
        setHover(true);
    };
    var handleMouseOut = function () {
        setHover(false);
    };
    var handleClick = function (e) {
        e.stopPropagation();
        onClick === null || onClick === void 0 ? void 0 : onClick(e);
        handleMouseOut();
    };
    var renderTabExtra = function () {
        if (hover ||
            (!active && buttonHover && !modified) ||
            (active && !modified)) {
            return (React.createElement("div", { className: className_1.getBEMElement(classNames, 'button'), onClick: handleClick },
                React.createElement(icon_1.Icon, { type: "close" })));
        }
        if (modified) {
            return React.createElement("i", { className: className_1.getBEMElement(classNames, 'dot') });
        }
        return React.createElement("i", { className: className_1.getBEMElement(classNames, 'placeholder') });
    };
    return (React.createElement("a", { className: classNames, onMouseOver: handleMouseOver, onMouseOut: handleMouseOut }, renderTabExtra()));
}
exports.default = TabExtra;
//# sourceMappingURL=tabExtra.js.map