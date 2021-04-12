"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var react_1 = require("react");
var react_2 = require("@storybook/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var input_1 = require("mo/components/input");
var propsTable_1 = require("../common/propsTable");
var TextArea = input_1.default.TextArea;
var stories = react_2.storiesOf('Input', module);
stories.addDecorator(addon_knobs_1.withKnobs);
var propDefinitions = [
    {
        property: 'autoSize',
        propType: 'boolean | object',
        required: false,
        description: '自适应内容高度，可设置为 true | false 或对象：{ minRows: 2, maxRows: 6 }',
        defaultValue: 'false',
    },
    {
        property: 'defaultValue',
        propType: 'string',
        required: false,
        description: '输入框默认内容',
        defaultValue: '--',
    },
    {
        property: 'value',
        propType: 'string',
        required: false,
        description: '输入框内容',
        defaultValue: '--',
    },
    {
        property: 'maxLength',
        propType: 'number',
        required: false,
        description: '内容最大长度',
        defaultValue: '--',
    },
    {
        property: 'showCount',
        propType: 'boolean',
        required: false,
        description: '是否展示字数',
        defaultValue: 'false',
    },
    {
        property: 'onPressEnter',
        propType: 'function(e)	',
        required: false,
        description: '按下回车的回调',
        defaultValue: '--',
    },
    {
        property: 'onResize',
        propType: 'function({ width, height })',
        required: false,
        description: 'resize 回调',
        defaultValue: '--',
    },
];
var renderMultipeTextArea = function () {
    var _a = __read(react_1.useState(10), 2), value = _a[0], setValue = _a[1];
    var _b = __read(react_1.useState({ width: 0, height: 0 }), 2), size = _b[0], setSize = _b[1];
    var onChange = react_1.useCallback(function (e) { return setValue(e.target.value); }, [value]);
    var onPressEnter = function (e) { return console.log("enter key is pressed"); };
    var onResize = react_1.useCallback(function (_a) {
        var width = _a.width, height = _a.height;
        console.log("size is changed, width:" + width + " height:" + height);
        setSize(function (resize) { return (__assign(__assign({}, size), { width: width, height: height })); });
    }, [size.width, size.height]);
    return (React.createElement(React.Fragment, null,
        React.createElement(TextArea, { placeholder: "Autosize height based on content lines", autoSize: true }),
        React.createElement("div", { style: { margin: '10px 0' } }),
        React.createElement(TextArea, { placeholder: "Autosize height with minimum and maximum number of lines", autoSize: { minRows: 2, maxRows: 6 } }),
        React.createElement("div", { style: { margin: '10px 0' } }),
        React.createElement(TextArea, { value: value, onChange: onChange, onResize: onResize, onPressEnter: onPressEnter, placeholder: "Controlled autosize", autoSize: { minRows: 3, maxRows: 5 } })));
};
stories.add('Basic Usage', function () {
    var _a = __read(react_1.useState(''), 2), inputValue = _a[0], setInputValue = _a[1];
    var handleInputChange = react_1.useCallback(function (e) { return setInputValue(e.target.value); }, [inputValue]);
    return (React.createElement(React.Fragment, null,
        React.createElement("h2", null, "\u7B80\u8FF0"),
        React.createElement("p", null, "\u901A\u8FC7\u9F20\u6807\u6216\u952E\u76D8\u8F93\u5165\u5185\u5BB9\uFF0C\u662F\u6700\u57FA\u7840\u7684\u8868\u5355\u57DF\u7684\u5305\u88C5\u3002"),
        React.createElement("h3", null, "\u4F7F\u7528\u793A\u4F8B 1 - Input\u57FA\u672C\u4F7F\u7528"),
        React.createElement(input_1.default, { placeholder: "basic usage" }),
        React.createElement("h3", null, "\u4F7F\u7528\u793A\u4F8B 2 - Input\u9ED8\u8BA4\u503C"),
        React.createElement(input_1.default, { placeholder: "input default value", defaultValue: "default value" }),
        React.createElement("h3", null, "\u4F7F\u7528\u793A\u4F8B 3 - \u8F93\u5165\u6846\u5B9A\u4E49\u4E86\u4E09\u79CD\u5C3A\u5BF8\uFF08\u5927\u3001\u9ED8\u8BA4\uFF09\uFF0C\u9AD8\u5EA6\u5206\u522B\u4E3A 40px\u300132px"),
        React.createElement(input_1.default, { size: "large", placeholder: "please input large size" }),
        React.createElement(input_1.default, { placeholder: "input default size", value: inputValue, style: { marginTop: 10 }, onChange: handleInputChange, onPressEnter: function (e) { return console.log('enter key is pressed'); } }),
        React.createElement("h3", null, "\u4F7F\u7528\u793A\u4F8B 4 - \u5E26\u5B57\u6570\u63D0\u793A\u7684\u6587\u672C\u57DF"),
        React.createElement(TextArea, { placeholder: "replace", maxLength: 100, showCount: true, style: { marginTop: 10 } }),
        React.createElement("h3", null, "\u4F7F\u7528\u793A\u4F8B 5 - \u7528\u4E8E\u591A\u884C\u8F93\u5165"),
        React.createElement(TextArea, { rows: 4, placeholder: "input multipe line", defaultValue: "hi textarea" }),
        React.createElement("h3", null, "\u4F7F\u7528\u793A\u4F8B 6 - autoSize \u5C5E\u6027\u9002\u7528\u4E8E textarea \u8282\u70B9\uFF0C\u5E76\u4E14\u53EA\u6709\u9AD8\u5EA6\u4F1A\u81EA\u52A8\u53D8\u5316\u3002\u53E6\u5916 autoSize \u53EF\u4EE5\u8BBE\u5B9A\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6307\u5B9A\u6700\u5C0F\u884C\u6570\u548C\u6700\u5927\u884C\u6570\u3002"),
        renderMultipeTextArea()));
}, {
    info: {
        text: "\n            TextTrea\u4EE3\u7801\u793A\u4F8B\uFF1A\n            ~~~js\n            const [value, setValue] = useState(10)\n            const onChange = useCallback((e) => setValue(e.target.value), [value])\n            const onPressEnter = e => ('enter key is pressed')\n            return (\n                <>\n                    <TextArea placeholder=\"Autosize height based on content lines\" autoSize />\n                    <div style={{ margin: '10px 0' }} />\n                    <TextArea\n                        placeholder=\"Autosize height with minimum and maximum number of lines\"\n                        autoSize={{ minRows: 2, maxRows: 6 }}\n                    />\n                    <div style={{ margin: '10px 0' }} />\n                    <TextArea\n                        value={value}\n                        onChange={onChange}\n                        onPressEnter={onPressEnter}\n                        placeholder=\"Controlled autosize\"\n                        autoSize={{ minRows: 3, maxRows: 5 }}\n                    />\n                </>\n            );              \n            ~~~\n        ",
        TableComponent: function () { return propsTable_1.propsTable({ propDefinitions: propDefinitions }); },
    },
});
//# sourceMappingURL=15-Input.stories.js.map