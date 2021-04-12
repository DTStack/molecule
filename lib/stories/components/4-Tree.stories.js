"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var tree_1 = require("mo/components/tree");
var tree_2 = require("mo/components/tree");
var react_1 = require("@storybook/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var stories = react_1.storiesOf('Tree', module);
stories.addDecorator(addon_knobs_1.withKnobs);
var folder = tree_1.FileTypes.folder;
var file = tree_1.FileTypes.file;
stories.add('Basic Usage', function () {
    var treeData = [
        {
            id: 1,
            name: folder,
            fileType: folder,
            children: [
                {
                    id: 2,
                    name: 'abc',
                    fileType: folder,
                    children: [
                        {
                            id: 3,
                            name: 'test.txt',
                            fileType: file,
                            icon: 'symbol-file',
                        },
                    ],
                },
                {
                    id: 6,
                    name: 'xyz',
                    fileType: folder,
                    children: [
                        {
                            id: 7,
                            name: 'test.pdf',
                            fileType: file,
                            icon: 'file-pdf',
                        },
                    ],
                },
                {
                    id: 10,
                    name: 'file.yaml',
                    fileType: file,
                },
            ],
        },
    ];
    return (React.createElement("div", null,
        React.createElement("h2", null, "\u7B80\u8FF0"),
        React.createElement("p", null, "Tree \u591A\u5C42\u6B21\u7684\u7ED3\u6784\u5217\u8868\u3002\u5B9E\u73B0\u7EC4\u4EF6\u62D6\u62FD\u3001\u53F3\u952E\u9762\u677F\u7B49\u7B80\u5355\u529F\u80FD\uFF0C\u53EF\u4EE5\u901A\u8FC7 renderTitle \u9002\u914D Tree \u66F4\u591A\u573A\u666F"),
        React.createElement("h3", null, "\u4F7F\u7528\u793A\u4F8B Tree"),
        React.createElement(tree_2.default, { data: treeData, draggable: true, renderTitle: function (node) { return node.name; } })));
});
//# sourceMappingURL=4-Tree.stories.js.map