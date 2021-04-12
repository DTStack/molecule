"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var propsTable_1 = require("../common/propsTable");
var menu_1 = require("mo/components/menu");
var stories = react_1.storiesOf('Menu', module);
stories.addDecorator(addon_knobs_1.withKnobs);
var propDefinitions = [
    {
        property: 'render',
        propType: '() => React.ReactNode',
        required: false,
        description: 'Default render content',
        defaultValue: null,
    },
];
stories.add('Basic Usage', function () {
    var menuData = [
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
    var handleClick = function (e, item) {
        console.log('click Menu', e, item);
    };
    return (React.createElement("div", null,
        React.createElement("h2", null, "\u7B80\u8FF0"),
        React.createElement("p", null, "Menu \u7EC4\u4EF6\u4E3B\u8981\u662F\u63D0\u4F9B\u4E86\u4E00\u4E2A\u53EF\u6839\u636E\u6307\u5B9A\u951A\u70B9\u4F4D\u7F6E\u3001\u6E32\u67D3\u5185\u5BB9\u7684\u89C6\u56FE\u5BB9\u5668\u3002"),
        React.createElement("div", null,
            React.createElement("h3", null, "\u4F7F\u7528\u793A\u4F8B 1 - \u57FA\u672C\u4F7F\u7528"),
            React.createElement(menu_1.Menu, { mode: menu_1.MenuMode.Horizontal, onClick: handleClick },
                React.createElement(menu_1.MenuItem, null, "menuItem1"),
                React.createElement(menu_1.MenuItem, null, "menuItem2"),
                React.createElement(menu_1.MenuItem, null, "menuItem3"),
                React.createElement(menu_1.SubMenu, { mode: menu_1.MenuMode.Vertical, name: 'menuItem4' },
                    React.createElement(menu_1.MenuItem, null, "subMenuItem1"),
                    React.createElement(menu_1.MenuItem, null, "subMenuItem2"),
                    React.createElement(menu_1.MenuItem, null, "subMenuItem3"),
                    React.createElement(menu_1.MenuItem, null, "subMenuItem4")))),
        React.createElement("div", null,
            React.createElement("h3", null, "\u4F7F\u7528\u793A\u4F8B 2 - horizontal"),
            React.createElement(menu_1.Menu, { mode: menu_1.MenuMode.Horizontal, data: menuData, onClick: handleClick })),
        React.createElement("div", null,
            React.createElement("h3", null, "\u4F7F\u7528\u793A\u4F8B 3 - vertical"),
            React.createElement(menu_1.Menu, { style: { width: 200 }, data: menuData, mode: menu_1.MenuMode.Vertical, onClick: handleClick }))));
}, {
    info: {
        inline: true,
        TableComponent: function () { return propsTable_1.propsTable({ propDefinitions: propDefinitions }); },
        // propTablesExclude: [],
        text: "\n            \u4EE3\u7801\u793A\u4F8B\uFF1A\n            ~~~js\n            import { useContextView } from 'mo/components/contextview';\n\n            const contextView = useContextView();\n\n            const mouseMove = (event: React.MouseEvent): void => {\n                contextView.show({\n                    x: event.clientX,\n                    y: event.clientY,\n                }, () => {\n                    return (\n                        <h1>Hello World</h1>\n                    );\n                });\n            };\n\n            return (\n                <div>\n                    <div id=\"topLeft\"\n                        onMouseMove={mouseMove}\n                        style={\n                            {\n                                position: 'absolute',\n                                width: 200,\n                                height: 200,\n                                top: 0,\n                                left: 0,\n                                right: 0,\n                                bottom: 0,\n                                background: '#dddddd',\n                            }\n                        }>\n                            Hover me!\n                    </div>\n                </div>\n            );\n            \uFF5E\uFF5E\n        ",
    },
});
//# sourceMappingURL=10-Menu.stories.js.map