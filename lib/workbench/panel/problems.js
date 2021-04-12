"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var className_1 = require("mo/common/className");
var defaultClassName = className_1.prefixClaName('problems');
function Problems(props) {
    var data = props.data;
    return (React.createElement("div", { className: defaultClassName, style: { margin: '0 18px' } },
        "Problems ",
        data));
}
exports.default = react_1.memo(Problems);
//# sourceMappingURL=problems.js.map