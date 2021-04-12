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
exports.SearchWidget = void 0;
var React = require("react");
var react_1 = require("react");
var replaceInput_1 = require("./replaceInput");
var searchInput_1 = require("./searchInput");
var className_1 = require("mo/common/className");
var base_1 = require("./base");
function SearchWidget(props) {
    var _a = props.className, className = _a === void 0 ? '' : _a, style = props.style, restProps = __rest(props, ["className", "style"]);
    var _b = __read(react_1.useState(false), 2), isShowReplace = _b[0], setShowReplace = _b[1];
    var toggleReplaceBtnClassName = className_1.classNames(base_1.replaceBtnClassName, 'codicon', "codicon-chevron-" + (isShowReplace ? 'down' : 'right'));
    var onToggleReplaceBtn = function () {
        setShowReplace(!isShowReplace);
    };
    return (React.createElement("div", { style: style, className: className_1.classNames(base_1.defaultSearchClassName, className) },
        React.createElement("a", { className: toggleReplaceBtnClassName, onClick: onToggleReplaceBtn }),
        React.createElement(searchInput_1.SearchInput, __assign({}, restProps)),
        isShowReplace && React.createElement(replaceInput_1.ReplaceInput, __assign({}, restProps))));
}
exports.SearchWidget = SearchWidget;
//# sourceMappingURL=index.js.map