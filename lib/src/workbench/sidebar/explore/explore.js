"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Explorer = void 0;
var React = require("react");
var collapse_1 = require("mo/components/collapse");
var sidebar_1 = require("mo/workbench/sidebar");
var toolbar_1 = require("mo/components/toolbar");
var base_1 = require("./base");
var Explorer = function (props) {
    var _a = props.data, data = _a === void 0 ? [] : _a, headerToolBar = props.headerToolBar, onClick = props.onClick, onActionsContextMenuClick = props.onActionsContextMenuClick, onCollapseChange = props.onCollapseChange, onCollapseToolbar = props.onCollapseToolbar;
    return (React.createElement("div", { className: base_1.defaultExplorerClassName },
        React.createElement(sidebar_1.Header, { title: 'Explorer', toolbar: React.createElement(toolbar_1.default, { data: [headerToolBar], onClick: onClick, onContextMenuClick: onActionsContextMenuClick }) }),
        React.createElement(sidebar_1.Content, null,
            React.createElement(collapse_1.default, { data: data, onCollapseChange: onCollapseChange, onCollapseToolbar: onCollapseToolbar }))));
};
exports.Explorer = Explorer;
//# sourceMappingURL=explore.js.map