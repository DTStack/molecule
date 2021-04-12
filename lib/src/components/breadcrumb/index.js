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
exports.Breadcrumb = exports.breadcrumbLabelClassName = exports.breadcrumbItemClassName = exports.defaultBreadcrumbClassName = void 0;
var React = require("react");
var className_1 = require("mo/common/className");
var icon_1 = require("../icon");
exports.defaultBreadcrumbClassName = className_1.prefixClaName('breadcrumb');
exports.breadcrumbItemClassName = className_1.getBEMElement(exports.defaultBreadcrumbClassName, 'item');
exports.breadcrumbLabelClassName = className_1.getBEMElement(exports.defaultBreadcrumbClassName, 'label');
function Breadcrumb(props) {
    var onClick = props.onClick, className = props.className, separator = props.separator, _a = props.routes, routes = _a === void 0 ? [] : _a, extra = __rest(props, ["onClick", "className", "separator", "routes"]);
    var getEvents = function (item) {
        return {
            onClick: function (e) {
                onClick === null || onClick === void 0 ? void 0 : onClick(e, item);
            },
        };
    };
    var claNames = className_1.classNames(exports.defaultBreadcrumbClassName, className);
    var len = routes.length;
    var sep = separator || React.createElement(icon_1.Icon, { type: "chevron-right" });
    return (React.createElement("div", __assign({ className: claNames }, extra), routes.map(function (route, index) { return (React.createElement("a", __assign({ key: route.id, className: className_1.classNames(exports.breadcrumbItemClassName, route.className), href: route.href }, getEvents(route)),
        route.icon,
        React.createElement("span", { className: exports.breadcrumbLabelClassName }, route.render ? route.render(route) : route.name),
        len - index > 1 ? sep : null)); })));
}
exports.Breadcrumb = Breadcrumb;
//# sourceMappingURL=index.js.map