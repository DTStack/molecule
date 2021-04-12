"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mo/workbench/menuBar/style.scss");
var React = require("react");
var className_1 = require("mo/common/className");
var menu_1 = require("mo/components/menu");
var dropdown_1 = require("mo/components/dropdown");
var icon_1 = require("mo/components/icon");
var initialMenuData = [
    {
        id: 'File',
        name: 'File',
        data: [
            {
                id: 'New File',
                name: 'New File',
            },
            {
                id: 'OpenFile',
                name: 'Open',
            },
        ],
    },
    {
        id: 'Edit',
        name: 'Edit',
        data: [
            {
                id: 'Undo',
                name: 'Undo',
            },
            {
                id: 'Redo',
                name: 'Redo',
            },
        ],
    },
    {
        id: 'Selection',
        name: 'Selection',
        data: [
            {
                id: 'SelectAll',
                name: 'Select All',
            },
            {
                id: 'CopyLineUp',
                name: 'Copy Line Up',
            },
        ],
    },
    {
        id: 'View',
        name: 'View',
        data: [
            {
                id: 'Command Palette',
                name: 'Command Palette',
            },
            {
                id: 'OpenView',
                name: 'Open View',
            },
            {
                id: 'Appearance',
                name: 'Appearance',
                data: [
                    {
                        icon: 'check',
                        id: 'ShowMenuBar',
                        name: 'Show Menu Bar',
                    },
                    {
                        icon: 'check',
                        id: 'ShowSideBar',
                        name: 'Show Side Bar',
                    },
                    {
                        icon: 'check',
                        id: 'ShowStatusBar',
                        name: 'Show Status Bar',
                    },
                    {
                        icon: 'check',
                        id: 'ShowActivityBar',
                        name: 'Show Activity Bar',
                    },
                ],
            },
        ],
    },
    {
        id: 'Run',
        name: 'Run',
        data: [
            {
                id: 'RunTask',
                name: 'Run Task',
            },
        ],
    },
    {
        id: 'Help',
        name: 'Help',
        data: [
            {
                id: 'About',
                name: 'About',
            },
        ],
    },
];
var defaultClassName = className_1.prefixClaName('menuBar');
var actionClassName = className_1.getBEMElement(defaultClassName, 'action');
function MenuBar(props) {
    var onClick = props.onClick;
    var click = function (e, item) {
        onClick === null || onClick === void 0 ? void 0 : onClick(e, item);
    };
    var menu = (React.createElement(menu_1.Menu, { onClick: click, style: { width: 200 }, data: initialMenuData }));
    return (React.createElement("div", { className: defaultClassName },
        React.createElement(dropdown_1.DropDown, { className: actionClassName, placement: "right", overlay: menu },
            React.createElement(icon_1.Icon, { type: "menu" }))));
}
exports.default = MenuBar;
//# sourceMappingURL=menuBar.js.map