"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./sidebar.scss");
var React = require("react");
var className_1 = require("@/common/className");
var react_1 = require("react");
function Sidebar(props) {
    var _a = props.panes, panes = _a === void 0 ? [] : _a, render = props.render;
    console.log('Sidebar render:', props);
    var sidebarPane = panes === null || panes === void 0 ? void 0 : panes.map(function (pane) {
        return (React.createElement("div", { key: pane.id, "data-id": pane.id, className: className_1.prefixClaName('pane', 'sidebar') },
            React.createElement("header", { className: 'pane-header' },
                React.createElement("div", { className: 'pane-title' },
                    React.createElement("h2", null, pane.name)),
                React.createElement("div", { className: 'pane-toolbar' })),
            React.createElement("div", { className: "pane-content" }, pane.render())));
    });
    if (render) {
        sidebarPane = render();
    }
    return (React.createElement("div", { className: className_1.prefixClaName('sidebar') }, sidebarPane));
}
;
exports.default = react_1.memo(Sidebar, function (prevProps, nextProps) {
    return prevProps !== nextProps;
});
//# sourceMappingURL=index.js.map