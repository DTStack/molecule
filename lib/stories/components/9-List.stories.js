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
var list_1 = require("mo/components/list");
var react_2 = require("react");
var stories = react_1.storiesOf('List', module);
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
    var _a = __read(react_2.useState('1'), 2), active = _a[0], setActive = _a[1];
    var click = function (e, item) {
        console.log('item.', e, item);
        setActive(item.id);
    };
    var itemStyle = {
        width: 100,
        height: 50,
        marginRight: 10,
    };
    return (React.createElement("div", null,
        React.createElement("h2", null, "\u7B80\u8FF0"),
        React.createElement("p", null, "List component."),
        React.createElement("h2", null, "\u4F7F\u7528\u793A\u4F8B"),
        React.createElement("div", null,
            React.createElement("h3", null, "Mode - vertical"),
            React.createElement(list_1.List, { className: "custom-list-1", mode: "vertical", onClick: click, active: active },
                React.createElement(list_1.Item, { id: "1" }, "Item 1"),
                React.createElement(list_1.Item, { id: "2" }, "Item 1"),
                React.createElement(list_1.Item, { id: "3" }, "Item 1"))),
        React.createElement("div", null,
            React.createElement("h3", null, "Mode - horizontal"),
            React.createElement(list_1.List, { className: "custom-list-2", mode: "horizontal" },
                React.createElement(list_1.Item, { style: itemStyle }, "Item 1"),
                React.createElement(list_1.Item, { style: itemStyle }, "Item 1"),
                React.createElement(list_1.Item, { style: itemStyle }, "Item 1")))));
}, {
    info: {
        inline: true,
        TableComponent: function () { return propsTable_1.propsTable({ propDefinitions: propDefinitions }); },
        // propTablesExclude: [],
        text: "\n            \u4EE3\u7801\u793A\u4F8B\uFF1A\n            ~~~js\n            import { useContextView } from 'mo/components/contextview';\n\n            const contextView = useContextView();\n\n            const mouseMove = (event: React.MouseEvent): void => {\n                contextView.show({\n                    x: event.clientX,\n                    y: event.clientY,\n                }, () => {\n                    return (\n                        <h1>Hello World</h1>\n                    );\n                });\n            };\n\n            return (\n                <div>\n                    <div id=\"topLeft\"\n                        onMouseMove={mouseMove}\n                        style={\n                            {\n                                position: 'absolute',\n                                width: 200,\n                                height: 200,\n                                top: 0,\n                                left: 0,\n                                right: 0,\n                                bottom: 0,\n                                background: '#dddddd',\n                            }\n                        }>\n                            Hover me!\n                    </div>\n                </div>\n            );\n            \uFF5E\uFF5E\n        ",
    },
});
//# sourceMappingURL=9-List.stories.js.map