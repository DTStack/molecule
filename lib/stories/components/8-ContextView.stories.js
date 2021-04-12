"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var select_1 = require("mo/components/select");
var contextView_1 = require("mo/components/contextView");
var menu_1 = require("mo/components/menu");
var propsTable_1 = require("../common/propsTable");
var stories = react_1.storiesOf('ContextView', module);
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
    var contextView = contextView_1.useContextView();
    var show = function (event) {
        var x = event.clientX;
        var y = event.clientY;
        console.log('x, y:', x, y);
        contextView.show({
            x: x,
            y: y,
        }, function () {
            return (React.createElement("div", null,
                React.createElement("h1", null, "Hello World: "),
                React.createElement("p", null,
                    "x: ",
                    x),
                React.createElement("p", null,
                    "y: ",
                    y)));
        });
    };
    var styled = {
        position: 'relative',
        width: 200,
        height: 200,
        margin: 'auto',
        background: '#dddddd',
    };
    return (React.createElement("div", null,
        React.createElement("h2", null, "\u7B80\u8FF0"),
        React.createElement("p", null, "ContextView \u7EC4\u4EF6\u4E3B\u8981\u662F\u63D0\u4F9B\u4E86\u4E00\u4E2A\u53EF\u6839\u636E\u6307\u5B9A\u951A\u70B9\u4F4D\u7F6E\u3001\u6E32\u67D3\u5185\u5BB9\u7684\u89C6\u56FE\u5BB9\u5668\u3002"),
        React.createElement("h2", null, "\u4F7F\u7528\u793A\u4F8B - 1"),
        React.createElement("div", { id: "topLeft", onClick: show, style: styled }, "Click me!"),
        React.createElement("div", null,
            React.createElement("h2", null, "\u4F7F\u7528\u793A\u4F8B - 2"),
            React.createElement(select_1.Select, { id: "demo2", key: "demo2", style: {
                    width: 200,
                    color: 'rgba(255, 255, 255, 0.4)',
                    background: '#252526',
                }, placeholder: "\u8BF7\u9009\u62E9" },
                React.createElement(select_1.Option, { value: "1" }, "option - 1"),
                React.createElement(select_1.Option, { value: "2" }, "option - 2"),
                React.createElement(select_1.Option, { value: "3" }, "option - 3"),
                React.createElement(select_1.Option, { value: "4", description: "Test option one" }, "option - 4"))),
        React.createElement("div", null,
            React.createElement("h2", null, "\u4F7F\u7528\u793A\u4F8B - 3"),
            React.createElement(menu_1.Menu, { style: { width: 200 } },
                React.createElement(menu_1.MenuItem, null, "menuItem1"),
                React.createElement(menu_1.MenuItem, null, "menuItem2"),
                React.createElement(menu_1.MenuItem, null, "menuItem3"),
                React.createElement(menu_1.SubMenu, { mode: menu_1.MenuMode.Vertical, name: 'menuItem4' },
                    React.createElement(menu_1.MenuItem, null, "subMenuItem1"),
                    React.createElement(menu_1.MenuItem, null, "subMenuItem2"),
                    React.createElement(menu_1.MenuItem, null, "subMenuItem3"),
                    React.createElement(menu_1.MenuItem, null, "subMenuItem4"))))));
}, {
    info: {
        inline: true,
        TableComponent: function () { return propsTable_1.propsTable({ propDefinitions: propDefinitions }); },
        // propTablesExclude: [],
        text: "\n            \u4EE3\u7801\u793A\u4F8B\uFF1A\n            ~~~js\n            import { useContextView } from 'mo/components/contextview';\n\n            const contextView = useContextView();\n\n            const mouseMove = (event: React.MouseEvent): void => {\n                contextView.show({\n                    x: event.clientX,\n                    y: event.clientY,\n                }, () => {\n                    return (\n                        <h1>Hello World</h1>\n                    );\n                });\n            };\n\n            return (\n                <div>\n                    <div id=\"topLeft\"\n                        onMouseMove={mouseMove}\n                        style={\n                            {\n                                position: 'absolute',\n                                width: 200,\n                                height: 200,\n                                top: 0,\n                                left: 0,\n                                right: 0,\n                                bottom: 0,\n                                background: '#dddddd',\n                            }\n                        }>\n                            Hover me!\n                    </div>\n                </div>\n            );\n            \uFF5E\uFF5E\n        ",
    },
});
//# sourceMappingURL=8-ContextView.stories.js.map