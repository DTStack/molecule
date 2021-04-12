"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonacoDemo = void 0;
var React = require("react");
var monaco_1 = require("mo/components/monaco");
require("../demo.scss");
var MonacoDemo = function () { return (React.createElement("div", null,
    React.createElement(monaco_1.default, { options: {
            value: "select * from abc",
            language: 'sql',
        } }))); };
exports.MonacoDemo = MonacoDemo;
exports.MonacoDemo.story = {
    name: 'Monaco Editor',
};
exports.default = {
    title: 'Monaco Editor',
    component: exports.MonacoDemo,
};
//# sourceMappingURL=5-Monaco.stories.js.map