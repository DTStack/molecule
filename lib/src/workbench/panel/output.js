"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var className_1 = require("mo/common/className");
var monaco_1 = require("mo/components/monaco");
var defaultClassName = className_1.prefixClaName('output');
function Output(props) {
    var data = props.data;
    return (React.createElement("div", { className: defaultClassName },
        React.createElement(monaco_1.default, { options: {
                value: data,
                readOnly: true,
                lineDecorationsWidth: 0,
                lineNumbers: 'off',
                minimap: undefined,
                automaticLayout: true,
            } })));
}
exports.default = react_1.memo(Output);
//# sourceMappingURL=output.js.map