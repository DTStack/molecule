"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var base_1 = require("./base");
var breadcrumb_1 = require("mo/components/breadcrumb");
function EditorBreadcrumb(props) {
    var _a = props.breadcrumbs, breadcrumbs = _a === void 0 ? [] : _a;
    return (React.createElement("div", { className: base_1.groupBreadcrumbClassName },
        React.createElement(breadcrumb_1.Breadcrumb, { routes: breadcrumbs })));
}
exports.default = react_1.memo(EditorBreadcrumb);
//# sourceMappingURL=breadcrumb.js.map