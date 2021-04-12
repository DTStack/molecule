"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mo/workbench/menuBar/style.scss");
var React = require("react");
var className_1 = require("mo/common/className");
var menu_1 = require("mo/components/menu");
var dropdown_1 = require("mo/components/dropdown");
var icon_1 = require("mo/components/icon");
var defaultClassName = className_1.prefixClaName('menuBar');
var actionClassName = className_1.getBEMElement(defaultClassName, 'action');
function MenuBar(props) {
    var data = props.data, onClick = props.onClick;
    var childRef = React.useRef();
    var handleClick = function (e, item) {
        onClick === null || onClick === void 0 ? void 0 : onClick(e, item);
        childRef.current.dispose();
    };
    var overlay = (React.createElement(menu_1.Menu, { onClick: handleClick, style: { width: 200 }, data: data }));
    return (React.createElement("div", { className: defaultClassName },
        React.createElement(dropdown_1.DropDown, { ref: childRef, trigger: "click", className: actionClassName, placement: "right", overlay: overlay },
            React.createElement(icon_1.Icon, { type: "menu" }))));
}
exports.default = MenuBar;
//# sourceMappingURL=menuBar.js.map