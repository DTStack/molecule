"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sidebar = exports.Content = exports.Header = void 0;
var React = require("react");
var react_1 = require("react");
var className_1 = require("mo/common/className");
var defaultClassName = className_1.prefixClaName('sidebar');
var paneClassName = className_1.getBEMElement(defaultClassName, 'pane');
var headerClassName = className_1.getBEMElement(defaultClassName, 'header');
var titleClassName = className_1.getBEMElement(defaultClassName, 'title');
var contentClassName = className_1.getBEMElement(defaultClassName, 'content');
var toolbarClassName = className_1.getBEMElement(defaultClassName, 'toolbar');
exports.Header = react_1.memo(function Header(props) {
    return (React.createElement("header", { className: headerClassName },
        React.createElement("div", { className: titleClassName },
            React.createElement("h2", null, props.title)),
        React.createElement("div", { className: toolbarClassName }, props.toolbar || null)));
});
function Content(props) {
    return React.createElement("div", { className: contentClassName }, props.children);
}
exports.Content = Content;
function Sidebar(props) {
    var _a = props.panes, panes = _a === void 0 ? [] : _a, current = props.current;
    var sidebarPane = panes === null || panes === void 0 ? void 0 : panes.map(function (pane) {
        return (React.createElement("div", { key: pane.id, "data-id": pane.id, style: { display: pane.id === current ? 'block' : 'none' }, className: paneClassName }, pane.render ? pane.render() : null));
    });
    return React.createElement("div", { className: defaultClassName }, sidebarPane);
}
exports.Sidebar = Sidebar;
//# sourceMappingURL=sidebar.js.map