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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workbench = void 0;
var React = require("react");
var react_1 = require("react");
var react_split_pane_1 = require("react-split-pane");
var classnames_1 = require("classnames");
var dt_utils_1 = require("dt-utils");
var className_1 = require("@/common/className");
var const_1 = require("@/common/const");
var sidebar_1 = require("./sidebar");
var menuBar_1 = require("./menuBar");
var activityBar_1 = require("./activityBar");
var statusBar_1 = require("./statusBar");
var editor_1 = require("./editor");
var panel_1 = require("./panel");
var settings_1 = require("./settings");
var molecule_1 = require("@/provider/molecule");
require("./workbench.scss");
require("@/style/main.scss");
require("vscode-codicons/dist/codicon.css");
var MainBench = react_1.memo(function MainBenchFC(props) {
    var sidebar = props.sidebar, editor = props.editor, theme = props.theme;
    return (React.createElement("div", { className: className_1.prefixClaName('mainBench') },
        React.createElement(react_split_pane_1.default, { split: 'vertical', minSize: 170, defaultSize: 300, maxSize: -246, primary: "first", allowResize: true },
            React.createElement(sidebar_1.default, __assign({}, sidebar)),
            React.createElement(react_split_pane_1.default, { primary: "first", split: "horizontal", defaultSize: '70%', maxSize: -1, allowResize: true },
                React.createElement(editor_1.default, __assign({}, editor, { theme: theme })),
                React.createElement(panel_1.default, null)))));
});
exports.Workbench = function (props) {
    var moleculeCtx = React.useContext(molecule_1.MoleculeCtx);
    var sidebar = moleculeCtx.sidebar, activityBar = moleculeCtx.activityBar, editor = moleculeCtx.editor, theme = moleculeCtx.theme;
    console.log('Workbench render:', moleculeCtx);
    return (React.createElement("div", { className: classnames_1.default(const_1.APP_PREFIX + ' center', dt_utils_1.Utils.isMacOs() ? 'mac' : '') },
        React.createElement("div", { className: className_1.prefixClaName('workbench') },
            React.createElement(menuBar_1.default, null),
            React.createElement(activityBar_1.default, __assign({}, activityBar)),
            React.createElement(settings_1.default, null),
            React.createElement(MainBench, { sidebar: sidebar, editor: editor, theme: theme })),
        React.createElement(statusBar_1.default, null)));
};
exports.default = exports.Workbench;
//# sourceMappingURL=index.js.map