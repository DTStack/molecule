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
exports.Scrollable = void 0;
var React = require("react");
var react_1 = require("react");
var react_scrollbars_custom_1 = require("react-scrollbars-custom");
var className_1 = require("mo/common/className");
var defaultSrollableClassName = className_1.prefixClaName('scrollable');
/**
 * The react-scrollbars-custom component default not supports auto hide thumb option,
 * the below implementation from this issue:
 * https://github.com/xobotyi/react-scrollbars-custom/issues/46
 */
function Scrollable(props) {
    var className = props.className, children = props.children, custom = __rest(props, ["className", "children"]);
    var _a = __read(react_1.useState(false), 2), isScrolling = _a[0], setIsScrolling = _a[1];
    var _b = __read(react_1.useState(false), 2), isMouseOver = _b[0], setIsMouseOver = _b[1];
    var isShow = isScrolling || isMouseOver;
    var claNames = className_1.classNames(defaultSrollableClassName, className);
    var onScrollStart = react_1.useCallback(function () {
        setIsScrolling(true);
    }, []);
    var onScrollStop = react_1.useCallback(function () {
        setIsScrolling(false);
    }, []);
    var onMouseEnter = react_1.useCallback(function () {
        setIsMouseOver(true);
    }, []);
    var onMouseLeave = react_1.useCallback(function () {
        setIsMouseOver(false);
    }, []);
    var trackProps = react_1.useMemo(function () { return ({
        renderer: function (_a) {
            var elementRef = _a.elementRef, style = _a.style, restProps = __rest(_a, ["elementRef", "style"]);
            return (React.createElement("span", __assign({}, restProps, { ref: elementRef, style: __assign(__assign({}, style), { opacity: isShow ? 1 : 0, transition: 'opacity 0.4s ease-in-out' }), onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave })));
        },
    }); }, [isShow, onMouseEnter, onMouseLeave]);
    return (React.createElement(react_scrollbars_custom_1.Scrollbar, __assign({ className: claNames }, custom, { wrapperProps: {
            renderer: function (_a) {
                var elementRef = _a.elementRef, style = _a.style, restProps = __rest(_a, ["elementRef", "style"]);
                return (React.createElement("div", __assign({}, restProps, { ref: elementRef, style: __assign(__assign({}, style), { right: 0 }) })));
            },
        }, trackXProps: trackProps, trackYProps: trackProps, onScrollStart: onScrollStart, onScrollStop: onScrollStop, scrollDetectionThreshold: 500 }), children));
}
exports.Scrollable = Scrollable;
//# sourceMappingURL=index.js.map