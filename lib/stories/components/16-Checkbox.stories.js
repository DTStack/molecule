"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var propsTable_1 = require("../common/propsTable");
var checkbox_1 = require("mo/components/checkbox");
var stories = react_1.storiesOf('Checkbox', module);
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
    var onSelectOption = function (e, option) {
        console.log('onSelectOption', e, option);
    };
    return (React.createElement("div", { style: {
            backgroundColor: 'rgb(37, 37, 38)',
            color: 'rgb(240, 240, 240)',
            height: 500,
            padding: 20,
        } },
        React.createElement("h2", null, "\u7B80\u8FF0"),
        React.createElement("p", null, "Checkbox component."),
        React.createElement("h3", null, "\u4F7F\u7528\u793A\u4F8B 1"),
        React.createElement("div", null,
            React.createElement(checkbox_1.Checkbox, { id: "checkbox1", value: "1", style: {
                    color: 'rgba(255, 255, 255, 0.4)',
                    background: '#252526',
                }, onChange: onSelectOption }, "Controls whether and how files path are shown in the breadcrumbs view.")),
        React.createElement("div", { style: { marginTop: 20 } },
            React.createElement(checkbox_1.Checkbox, { id: "checkbox2", value: "2", style: {
                    color: 'rgba(255, 255, 255, 0.4)',
                    background: '#252526',
                }, onChange: onSelectOption }, "Render breadcrumb items with icons."))));
}, {
    info: {
        inline: true,
        TableComponent: function () { return propsTable_1.propsTable({ propDefinitions: propDefinitions }); },
        // propTablesExclude: [],
        text: "\n            \u4EE3\u7801\u793A\u4F8B\uFF1A\n            ~~~js\n            import { useContextView } from 'mo/components/contextview';\n\n            const contextView = useContextView();\n\n            const mouseMove = (event: React.MouseEvent): void => {\n                contextView.show({\n                    x: event.clientX,\n                    y: event.clientY,\n                }, () => {\n                    return (\n                        <h1>Hello World</h1>\n                    );\n                });\n            };\n\n            return (\n                <div>\n                    <div id=\"topLeft\"\n                        onMouseMove={mouseMove}\n                        style={\n                            {\n                                position: 'absolute',\n                                width: 200,\n                                height: 200,\n                                top: 0,\n                                left: 0,\n                                right: 0,\n                                bottom: 0,\n                                background: '#dddddd',\n                            }\n                        }>\n                            Hover me!\n                    </div>\n                </div>\n            );\n            \uFF5E\uFF5E\n        ",
    },
});
//# sourceMappingURL=16-Checkbox.stories.js.map