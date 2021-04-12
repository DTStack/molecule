"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propsTable = void 0;
var React = require("react");
require("./style.scss");
function propsTable(props) {
    var propDefinitions = props.propDefinitions;
    var propsFields = propDefinitions.map(function (_a) {
        var property = _a.property, propType = _a.propType, required = _a.required, description = _a.description, defaultValue = _a.defaultValue;
        return (React.createElement("tr", { key: property },
            React.createElement("td", null,
                property,
                required ? (React.createElement("span", { style: {
                        color: '#ff3348',
                        marginLeft: '5px',
                    } }, "*")) : null),
            React.createElement("td", null, description),
            React.createElement("td", null, propType),
            React.createElement("td", null, defaultValue)));
    });
    return (React.createElement("table", __assign({}, { width: '90%' }),
        React.createElement("thead", null,
            React.createElement("tr", null,
                React.createElement("th", null, "\u53C2\u6570"),
                React.createElement("th", null, "\u8BF4\u660E"),
                React.createElement("th", null, "\u7C7B\u578B"),
                React.createElement("th", null, "\u9ED8\u8BA4\u503C"))),
        React.createElement("tbody", null, propsFields)));
}
exports.propsTable = propsTable;
//# sourceMappingURL=index.js.map