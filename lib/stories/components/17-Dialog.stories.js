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
var react_1 = require("react");
var dialog_1 = require("mo/components/dialog");
var button_1 = require("mo/components/button");
var react_2 = require("@storybook/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var confirm = dialog_1.default.confirm;
var stories = react_2.storiesOf('dialog', module);
stories.addDecorator(addon_knobs_1.withKnobs);
stories.add('Basic Usage', function () {
    var _a = __read(react_1.useState(false), 2), isModalVisible = _a[0], setIsModalVisible = _a[1];
    var showModal = function () {
        setIsModalVisible(true);
    };
    var handleOk = function () {
        setIsModalVisible(false);
    };
    var handleCancel = function () {
        setIsModalVisible(false);
    };
    function showConfirm() {
        confirm({
            title: 'Are you sure you want to permanently delete ?',
            content: 'This action is irreversible!',
            cancelButtonProps: { disabled: true },
            onOk: function () {
                console.log('OK');
            },
            onCancel: function () {
                console.log('Cancel');
            },
        });
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("h2", null, "\u7B80\u8FF0"),
        React.createElement("p", null, "\u5F53\u9700\u8981\u4E00\u4E2A\u7B80\u6D01\u7684\u786E\u8BA4\u6846\u8BE2\u95EE\u7528\u6237\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 Modal.confirm() \u7B49\u8BED\u6CD5\u7CD6\u65B9\u6CD5"),
        React.createElement("div", null,
            React.createElement("h3", null, "\u4F7F\u7528\u793A\u4F8B 1 - Modal"),
            React.createElement(button_1.Button, { type: "primary", onClick: showModal }, "Open Modal"),
            React.createElement(dialog_1.default, { width: 520, title: "Tweet us your feedback", destroyOnClose: true, visible: isModalVisible, onOk: handleOk, onCancel: handleCancel },
                React.createElement("p", null, "Some contents..."),
                React.createElement("p", null, "Some contents..."),
                React.createElement("p", null, "Some contents...")),
            React.createElement("h3", null, "\u4F7F\u7528\u793A\u4F8B 2 - confirm"),
            React.createElement(button_1.Button, { onClick: showConfirm }, "Confirm"))));
});
//# sourceMappingURL=17-Dialog.stories.js.map