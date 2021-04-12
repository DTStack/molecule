"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Explorer = void 0;
var React = require("react");
var collapse_1 = require("mo/components/collapse");
var toolbar_1 = require("mo/components/toolbar");
var sidebar_1 = require("mo/workbench/sidebar");
var className_1 = require("mo/common/className");
var defaultExplorerClassName = className_1.prefixClaName('explorer', 'sidebar');
var Explorer = function (props) {
    var _a = props.data, data = _a === void 0 ? [] : _a, _b = props.headerToolBar, headerToolBar = _b === void 0 ? [] : _b, onHeaderToolbarClick = props.onHeaderToolbarClick;
    return (React.createElement("div", { className: defaultExplorerClassName },
        React.createElement(sidebar_1.Header, { title: 'Explorer', toolbar: React.createElement(toolbar_1.default, { data: headerToolBar, onClick: onHeaderToolbarClick }) }),
        React.createElement(sidebar_1.Content, null,
            React.createElement(collapse_1.default, { data: data }))));
};
exports.Explorer = Explorer;
//# sourceMappingURL=explore.js.map