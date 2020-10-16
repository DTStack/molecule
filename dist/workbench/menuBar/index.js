"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var className_1 = require("@/common/className");
require("./menuBar.scss");
function MenuBar() {
    return (React.createElement("div", { className: className_1.prefixClaName('menuBar') },
        React.createElement("a", { className: "menu-action codicon codicon-menu" })));
}
;
exports.default = react_1.memo(MenuBar);
//# sourceMappingURL=index.js.map