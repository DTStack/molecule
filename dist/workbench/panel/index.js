"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var className_1 = require("@/common/className");
require("./panel.scss");
function Panel(props) {
    console.log('Panel render:', props);
    return (React.createElement("div", { className: className_1.prefixClaName('panel') }, "Panel"));
}
;
exports.default = react_1.memo(Panel);
//# sourceMappingURL=index.js.map