"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var className_1 = require("@/common/className");
var Tabs = function (props) {
    var data = props.data;
    var tabs = data.map(function (tab) {
        return (React.createElement("a", { key: tab.id }, tab.name));
    });
    return (React.createElement("div", { className: className_1.prefixClaName('tabs') }, tabs));
};
exports.default = Tabs;
//# sourceMappingURL=index.js.map