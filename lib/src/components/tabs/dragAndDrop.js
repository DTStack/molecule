"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_dnd_1 = require("react-dnd");
var react_dnd_html5_backend_1 = require("react-dnd-html5-backend");
var react_1 = require("react");
var RNDContext = react_dnd_1.createDndContext(react_dnd_html5_backend_1.default);
function DragAndDrop(_a) {
    var children = _a.children;
    var manager = react_1.useRef(RNDContext);
    return (React.createElement(react_dnd_1.DndProvider, { manager: manager.current.dragDropManager }, children));
}
exports.default = DragAndDrop;
//# sourceMappingURL=dragAndDrop.js.map