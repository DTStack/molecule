"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var propsTable_1 = require("../common/propsTable");
var actionBar_1 = require("mo/components/actionBar");
var stories = react_1.storiesOf('ActionBar', module);
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
    var data = [
        {
            id: '1',
            title: 'bar1',
            iconName: 'codicon-add',
        },
        {
            id: '2',
            title: 'bar2',
            iconName: 'codicon-chrome-restore',
        },
        {
            id: '3',
            title: 'bar3',
            iconName: 'codicon-check',
        },
    ];
    var onClick = function (e, item) {
        console.log('onClick:', e, item);
    };
    return (React.createElement("div", null,
        React.createElement("h2", null, "\u7B80\u8FF0"),
        React.createElement("p", null, "ActionBar \u7EC4\u4EF6\u4E3B\u8981\u662F\u63D0\u4F9B\u4E86\u4E00\u4E2A\u53EF\u6839\u636E\u6307\u5B9A\u951A\u70B9\u4F4D\u7F6E\u3001\u6E32\u67D3\u5185\u5BB9\u7684\u89C6\u56FE\u5BB9\u5668\u3002"),
        React.createElement("h2", null, "\u793A\u4F8B"),
        React.createElement("div", { className: "toolbar", style: {
                width: 200,
                border: '1px solid #222',
            } },
            React.createElement(actionBar_1.default, { data: data, onClick: onClick }))));
}, {
    info: {
        inline: true,
        TableComponent: function () { return propsTable_1.propsTable({ propDefinitions: propDefinitions }); },
        propTablesExclude: [],
        text: "\n            \u4EE3\u7801\u793A\u4F8B\uFF1A\n            ~~~js\n            import { useContextView } from 'mo/components/contextview';\n\n            const contextView = useContextView();\n\n            const mouseMove = (event: React.MouseEvent): void => {\n                contextView.show({\n                    x: event.clientX,\n                    y: event.clientY,\n                }, () => {\n                    return (\n                        <h1>Hello World</h1>\n                    );\n                });\n            };\n\n            return (\n                <div>\n                    <div id=\"topLeft\"\n                        onMouseMove={mouseMove}\n                        style={\n                            {\n                                position: 'absolute',\n                                width: 200,\n                                height: 200,\n                                top: 0,\n                                left: 0,\n                                right: 0,\n                                bottom: 0,\n                                background: '#dddddd',\n                            }\n                        }>\n                            Hover me!\n                    </div>\n                </div>\n            );\n            \uFF5E\uFF5E\n        ",
    },
});
//# sourceMappingURL=6-ActionBar.stories.js.map