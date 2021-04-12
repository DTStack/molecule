"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var propsTable_1 = require("../common/propsTable");
var select_1 = require("mo/components/select");
var react_2 = require("react");
var stories = react_1.storiesOf('Select', module);
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
    var _a = __read(react_2.useState(''), 2), selectedVal3 = _a[0], setSelectedVal3 = _a[1];
    var onSelectOption = function (e, option) {
        console.log('onSelectOption', e, option);
        if (option) {
            setSelectedVal3(option.value);
        }
    };
    return (React.createElement("div", { style: {
            backgroundColor: 'rgb(37, 37, 38)',
            color: 'rgb(240, 240, 240)',
            height: 500,
            padding: 20,
        } },
        React.createElement("h2", null, "\u7B80\u8FF0"),
        React.createElement("p", null, "Select component."),
        React.createElement("div", null,
            React.createElement("h3", null, "\u4F7F\u7528\u793A\u4F8B 1"),
            React.createElement(select_1.Select, { id: "demo1", key: "demo1", defaultValue: "1", style: {
                    width: 200,
                    color: 'rgba(255, 255, 255, 0.4)',
                    background: '#252526',
                }, onSelect: onSelectOption },
                React.createElement(select_1.Option, { value: "1" }, "option - 1"),
                React.createElement(select_1.Option, { value: "2" }, "option - 2"),
                React.createElement(select_1.Option, { value: "3" }, "option - 3"),
                React.createElement(select_1.Option, { value: "4", description: "Test option one" }, "option - 4")),
            React.createElement("h3", null, "\u4F7F\u7528\u793A\u4F8B 2"),
            React.createElement(select_1.Select, { id: "demo2", key: "demo2", style: {
                    width: 200,
                    color: 'rgba(255, 255, 255, 0.4)',
                    background: '#252526',
                }, placeholder: "\u8BF7\u9009\u62E9", onSelect: onSelectOption },
                React.createElement(select_1.Option, { value: "1" }, "option - 1"),
                React.createElement(select_1.Option, { value: "2" }, "option - 2"),
                React.createElement(select_1.Option, { value: "3" }, "option - 3"),
                React.createElement(select_1.Option, { value: "4", description: "Test option one" }, "option - 4")),
            React.createElement("h3", null, "\u4F7F\u7528\u793A\u4F8B - 3 Change Select Value"),
            React.createElement(select_1.Select, { id: "demo3", style: {
                    width: 200,
                    color: 'rgba(255, 255, 255, 0.4)',
                    background: '#252526',
                }, placeholder: "\u8BF7\u9009\u62E9", value: selectedVal3, key: "demo3-" + selectedVal3, defaultValue: '1', onSelect: onSelectOption },
                React.createElement(select_1.Option, { value: "1" }, "option - 1"),
                React.createElement(select_1.Option, { value: "2" }, "option - 2"),
                React.createElement(select_1.Option, { value: "3" }, "option - 3"),
                React.createElement(select_1.Option, { value: "4", description: "Test option one" }, "option - 4")))));
}, {
    info: {
        inline: true,
        TableComponent: function () { return propsTable_1.propsTable({ propDefinitions: propDefinitions }); },
        // propTablesExclude: [],
        text: "\n            \u4EE3\u7801\u793A\u4F8B\uFF1A\n            ~~~js\n            import { useContextView } from 'mo/components/contextview';\n\n            const contextView = useContextView();\n\n            const mouseMove = (event: React.MouseEvent): void => {\n                contextView.show({\n                    x: event.clientX,\n                    y: event.clientY,\n                }, () => {\n                    return (\n                        <h1>Hello World</h1>\n                    );\n                });\n            };\n\n            return (\n                <div>\n                    <div id=\"topLeft\"\n                        onMouseMove={mouseMove}\n                        style={\n                            {\n                                position: 'absolute',\n                                width: 200,\n                                height: 200,\n                                top: 0,\n                                left: 0,\n                                right: 0,\n                                bottom: 0,\n                                background: '#dddddd',\n                            }\n                        }>\n                            Hover me!\n                    </div>\n                </div>\n            );\n            \uFF5E\uFF5E\n        ",
    },
});
//# sourceMappingURL=15-Select.stories.js.map