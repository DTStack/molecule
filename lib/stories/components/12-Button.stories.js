"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var propsTable_1 = require("../common/propsTable");
var button_1 = require("mo/components/button");
var icon_1 = require("mo/components/icon");
var stories = react_1.storiesOf('Button', module);
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
    return (React.createElement("div", null,
        React.createElement("h2", null, "\u7B80\u8FF0"),
        React.createElement("p", null, "Button Component"),
        React.createElement("div", null,
            React.createElement("h3", null, "\u4F7F\u7528\u793A\u4F8B 1"),
            React.createElement(button_1.Button, null, "Btn")),
        React.createElement("div", null,
            React.createElement("h3", null, "\u4F7F\u7528\u793A\u4F8B 2 - size"),
            React.createElement(button_1.Button, null, "Normal Button"),
            React.createElement(button_1.Button, { size: "large" }, "Large Button")),
        React.createElement("div", null,
            React.createElement("h3", null, "\u4F7F\u7528\u793A\u4F8B 2 - Icon"),
            React.createElement(button_1.Button, null,
                React.createElement(icon_1.Icon, { type: "refresh" })),
            React.createElement(button_1.Button, { style: {
                    width: 100,
                } },
                React.createElement(icon_1.Icon, { type: "play" }),
                " ",
                React.createElement("span", null, "Play")))));
}, {
    info: {
        inline: true,
        TableComponent: function () { return propsTable_1.propsTable({ propDefinitions: propDefinitions }); },
        // propTablesExclude: [],
        text: "\n            \u4EE3\u7801\u793A\u4F8B\uFF1A\n            ~~~js\n            import { useContextView } from 'mo/components/contextview';\n\n            const contextView = useContextView();\n\n            const mouseMove = (event: React.MouseEvent): void => {\n                contextView.show({\n                    x: event.clientX,\n                    y: event.clientY,\n                }, () => {\n                    return (\n                        <h1>Hello World</h1>\n                    );\n                });\n            };\n\n            return (\n                <div>\n                    <div id=\"topLeft\"\n                        onMouseMove={mouseMove}\n                        style={\n                            {\n                                position: 'absolute',\n                                width: 200,\n                                height: 200,\n                                top: 0,\n                                left: 0,\n                                right: 0,\n                                bottom: 0,\n                                background: '#dddddd',\n                            }\n                        }>\n                            Hover me!\n                    </div>\n                </div>\n            );\n            \uFF5E\uFF5E\n        ",
    },
});
//# sourceMappingURL=12-Button.stories.js.map