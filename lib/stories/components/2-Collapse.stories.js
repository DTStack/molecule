"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic = void 0;
var React = require("react");
var collapse_1 = require("mo/components/collapse");
exports.default = {
    title: 'Collapse',
};
var editorPanel = {
    id: 'editors',
    name: 'OPEN EDITORS',
    toolbar: [
        {
            id: 'toggle',
            title: 'Toggle Vertical',
            disabled: true,
            iconName: 'codicon-editor-layout',
        },
        {
            id: 'save',
            title: 'Save All',
            disabled: true,
            iconName: 'codicon-save-all',
        },
        {
            id: 'close',
            title: 'Close All Editors',
            iconName: 'codicon-close-all',
        },
    ],
    renderPanel: function () {
        return React.createElement("span", null, "editors");
    },
};
var sampleFolderPanel = {
    id: 'sample_folder',
    name: 'Sample Folder',
    toolbar: [
        {
            id: 'new_file',
            title: 'New File',
            iconName: 'codicon-new-file',
        },
        {
            id: 'new_folder',
            title: 'New Folder',
            iconName: 'codicon-new-folder',
        },
        {
            id: 'refresh',
            title: 'Refresh Explorer',
            iconName: 'codicon-refresh',
        },
        {
            id: 'collapse',
            title: 'Collapse Folders in Explorer',
            iconName: 'codicon-collapse-all',
        },
    ],
    renderPanel: function () {
        return "hello i'm tree~~~";
    },
};
var Basic = function () {
    return (React.createElement("div", null,
        React.createElement("h2", null, "\u7B80\u8FF0"),
        React.createElement("p", null, "Collapse \u53EF\u4EE5\u6298\u53E0/\u5C55\u5F00\u7684\u5185\u5BB9\u533A\u57DF\u3002"),
        React.createElement("h3", null, "\u4F7F\u7528\u793A\u4F8B \u5C1D\u8BD5\u70B9\u51FB\u4E0B\u65B9\u9762\u677F\u770B\u770B\uFF5E"),
        React.createElement(collapse_1.default, { data: [editorPanel, sampleFolderPanel] })));
};
exports.Basic = Basic;
//# sourceMappingURL=2-Collapse.stories.js.map