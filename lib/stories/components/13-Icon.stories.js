"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var propsTable_1 = require("../common/propsTable");
var icon_1 = require("mo/components/icon");
var button_1 = require("mo/components/button");
var stories = react_1.storiesOf('Icon', module);
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
        React.createElement("p", null,
            "This `Icon` Component based on",
            ' ',
            React.createElement("a", { href: "https://microsoft.github.io/vscode-codicons/dist/codicon.html" }, "vscode codicons"),
            ", so you just can using icons from this library."),
        React.createElement("div", null,
            React.createElement("h3", null, "\u4F7F\u7528\u793A\u4F8B - Basic"),
            React.createElement("div", { style: { display: 'flex' } },
                React.createElement(button_1.Button, null,
                    React.createElement(icon_1.Icon, { type: "edit" }),
                    "edit"),
                React.createElement(button_1.Button, null,
                    React.createElement(icon_1.Icon, { type: "check" }),
                    "check")))));
}, {
    info: {
        inline: true,
        TableComponent: function () { return propsTable_1.propsTable({ propDefinitions: propDefinitions }); },
        // propTablesExclude: [],
        text: "\n            \u4EE3\u7801\u793A\u4F8B\uFF1A\n            ~~~js\n            import { useContextView } from 'mo/components/contextview';\n\n            const contextView = useContextView();\n\n            const mouseMove = (event: React.MouseEvent): void => {\n                contextView.show({\n                    x: event.clientX,\n                    y: event.clientY,\n                }, () => {\n                    return (\n                        <h1>Hello World</h1>\n                    );\n                });\n            };\n\n            return (\n                <div>\n                    <div id=\"topLeft\"\n                        onMouseMove={mouseMove}\n                        style={\n                            {\n                                position: 'absolute',\n                                width: 200,\n                                height: 200,\n                                top: 0,\n                                left: 0,\n                                right: 0,\n                                bottom: 0,\n                                background: '#dddddd',\n                            }\n                        }>\n                            Hover me!\n                    </div>\n                </div>\n            );\n            \uFF5E\uFF5E\n        ",
    },
});
//# sourceMappingURL=13-Icon.stories.js.map