"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var classnames_1 = require("classnames");
var className_1 = require("@/common/className");
require("./activityBar.scss");
var index_1 = require("./index");
function ActivityBarItem(props) {
    var _a = props.checked, checked = _a === void 0 ? false : _a, _b = props.name, name = _b === void 0 ? '' : _b, _c = props.data, data = _c === void 0 ? {} : _c, render = props.render, _d = props.iconName, iconName = _d === void 0 ? '' : _d;
    var content = '';
    if (render) {
        content = render();
    }
    return (React.createElement("li", { className: classnames_1.default(className_1.prefixClaName('item', index_1.ROOT_CLASS_NAME), checked ? 'checked' : ''), "data-id": data.id },
        React.createElement("a", { title: name, className: classnames_1.default('item-label', 'codicon', iconName) }, content),
        checked ? React.createElement("div", { className: "active-item-indicator" }) : null));
}
;
exports.default = react_1.memo(ActivityBarItem);
//# sourceMappingURL=activityBarItem.js.map