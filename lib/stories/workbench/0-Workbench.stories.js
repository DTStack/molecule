"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDEDemo = void 0;
require("mo/style/mo.scss");
var React = require("react");
var index_1 = require("mo/index");
var extensions_1 = require("../extensions");
require("../demo.scss");
var IDEDemo = function () { return (React.createElement(index_1.MoleculeProvider, { extensions: extensions_1.customExtensions, locales: [] },
    React.createElement(index_1.Workbench, null))); };
exports.IDEDemo = IDEDemo;
exports.IDEDemo.story = {
    name: 'Workbench',
};
exports.default = {
    title: 'Workbench',
    component: exports.IDEDemo,
};
//# sourceMappingURL=0-Workbench.stories.js.map