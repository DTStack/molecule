"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorMarkers = void 0;
var React = require("react");
function EditorMarkers(props) {
    var _a = props.data, data = _a === void 0 ? { ln: 0, col: 0 } : _a;
    return React.createElement("span", null, "Ln " + data.ln + ", Col " + data.col);
}
exports.EditorMarkers = EditorMarkers;
//# sourceMappingURL=index.js.map