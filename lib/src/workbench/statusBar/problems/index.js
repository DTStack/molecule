"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProblemsMarkers = void 0;
var React = require("react");
var icon_1 = require("mo/components/icon");
function ProblemsMarkers(props) {
    var _a = props.data, data = _a === void 0 ? { errors: 0, warnings: 0, infos: 0 } : _a;
    return (React.createElement(React.Fragment, null,
        React.createElement(icon_1.Icon, { type: "error" }), " " + data.errors + " ",
        React.createElement(icon_1.Icon, { type: "warning" }), " " + data.warnings + " ",
        React.createElement(icon_1.Icon, { type: "info" }), " " + data.infos));
}
exports.ProblemsMarkers = ProblemsMarkers;
//# sourceMappingURL=index.js.map