"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorView = exports.Editor = void 0;
require("reflect-metadata");
var react_1 = require("mo/react");
var tsyringe_1 = require("tsyringe");
var services_1 = require("mo/services");
var editor_1 = require("mo/controller/editor");
var editor_2 = require("./editor");
Object.defineProperty(exports, "Editor", { enumerable: true, get: function () { return editor_2.Editor; } });
var editorController = tsyringe_1.container.resolve(editor_1.EditorController);
var EditorView = react_1.connect(services_1.editorService, editor_2.Editor, editorController);
exports.EditorView = EditorView;
//# sourceMappingURL=index.js.map