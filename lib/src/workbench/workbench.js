"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workbench = exports.WorkbenchView = void 0;
var React = require("react");
var react_split_pane_1 = require("react-split-pane");
var Pane_1 = require("react-split-pane/lib/Pane");
var className_1 = require("mo/common/className");
var editor_1 = require("mo/workbench/editor");
var sidebar_1 = require("mo/workbench/sidebar");
var menuBar_1 = require("mo/workbench/menuBar");
var activityBar_1 = require("mo/workbench/activityBar");
var statusBar_1 = require("mo/workbench/statusBar");
var panel_1 = require("mo/workbench/panel");
var id_1 = require("mo/common/id");
var dt_utils_1 = require("@dtinsight/dt-utils");
var const_1 = require("mo/common/const");
var services_1 = require("mo/services");
var react_1 = require("mo/react");
var controller_1 = require("mo/controller");
var mainBenchClassName = className_1.prefixClaName('mainBench');
var workbenchClassName = className_1.prefixClaName('workbench');
var appClassName = className_1.classNames(const_1.APP_PREFIX, dt_utils_1.Utils.isMacOs() ? 'mac' : '');
function WorkbenchView(props) {
    var activityBar = props.activityBar, menuBar = props.menuBar, panel = props.panel, sideBar = props.sideBar, statusBar = props.statusBar, onPaneSizeChange = props.onPaneSizeChange, splitPanePos = props.splitPanePos;
    return (React.createElement("div", { id: id_1.ID_APP, className: appClassName },
        React.createElement("div", { className: workbenchClassName },
            !menuBar.hidden && React.createElement(menuBar_1.MenuBarView, null),
            !activityBar.hidden && React.createElement(activityBar_1.ActivityBarView, null),
            React.createElement("div", { className: mainBenchClassName },
                React.createElement(react_split_pane_1.default, { split: "vertical", primary: "first", allowResize: true, onChange: onPaneSizeChange },
                    !sideBar.hidden && (React.createElement(Pane_1.default, { minSize: "170px", initialSize: splitPanePos[0], maxSize: "80%" },
                        React.createElement(sidebar_1.SidebarView, null))),
                    React.createElement(react_split_pane_1.default, { primary: "first", split: "horizontal", allowResize: true },
                        !panel.maximize ? (React.createElement(Pane_1.default, { initialSize: "70%", maxSize: "99%", minSize: "10%" },
                            React.createElement(editor_1.EditorView, null))) : null,
                        !panel.hidden ? (React.createElement(Pane_1.default, null,
                            React.createElement(panel_1.PanelView, null))) : null)))),
        !statusBar.hidden && React.createElement(statusBar_1.StatusBarView, null)));
}
exports.WorkbenchView = WorkbenchView;
exports.Workbench = react_1.connect({
    panel: services_1.panelService,
    activityBar: services_1.activityBarService,
    menuBar: services_1.menuBarService,
    sideBar: services_1.sidebarService,
    statusBar: services_1.statusBarService,
}, WorkbenchView, controller_1.workbenchController);
exports.default = exports.Workbench;
//# sourceMappingURL=workbench.js.map