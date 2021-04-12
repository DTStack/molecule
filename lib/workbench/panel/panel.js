"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var className_1 = require("mo/common/className");
var tabs_1 = require("mo/components/tabs");
var actionBar_1 = require("mo/components/actionBar");
var defaultClassName = className_1.prefixClaName('panel');
var panelHeaderClassName = className_1.getBEMElement(defaultClassName, 'header');
var panelToolbarClassName = className_1.getBEMElement(defaultClassName, 'toolbar');
var panelContainerClassName = className_1.getBEMElement(defaultClassName, 'container');
function Panel(props) {
    var _a;
    var data = props.data, current = props.current, _b = props.toolbox, toolbox = _b === void 0 ? [] : _b, onTabChange = props.onTabChange, onToolbarClick = props.onToolbarClick;
    var toolboxData = toolbox;
    if (current && current.toolbox) {
        toolboxData = current.toolbox.concat(toolbox);
    }
    var content = typeof (current === null || current === void 0 ? void 0 : current.renderPanel) === 'function'
        ? (_a = current === null || current === void 0 ? void 0 : current.renderPanel) === null || _a === void 0 ? void 0 : _a.call(current, current) : current === null || current === void 0 ? void 0 : current.renderPanel;
    return (React.createElement("div", { className: defaultClassName },
        React.createElement("div", { className: panelHeaderClassName },
            React.createElement(tabs_1.Tabs, { data: data, onSelectTab: onTabChange }),
            React.createElement(actionBar_1.default, { className: panelToolbarClassName, data: toolboxData || [], onClick: onToolbarClick })),
        React.createElement("div", { className: panelContainerClassName }, content)));
}
exports.default = react_1.memo(Panel);
//# sourceMappingURL=panel.js.map