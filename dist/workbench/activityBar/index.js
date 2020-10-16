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
exports.ROOT_CLASS_NAME = void 0;
var React = require("react");
var react_1 = require("react");
var molecule_1 = require("@/provider/molecule");
var className_1 = require("@/common/className");
var activityBarItem_1 = require("./activityBarItem");
require("./activityBar.scss");
exports.ROOT_CLASS_NAME = 'activityBar';
function ActivityBar(props) {
    var _a;
    var moleculeCtx = React.useContext(molecule_1.MoleculeCtx);
    var activityBar = moleculeCtx.activityBar;
    var content = (_a = activityBar.data) === null || _a === void 0 ? void 0 : _a.map(function (item, index) { return (React.createElement(activityBarItem_1.default, __assign({ key: item.id }, item, { "data-index": index, checked: activityBar.selected === item.id }))); });
    if (activityBar.render) {
        content = activityBar.render();
    }
    var onClick = function (e) {
        activityBar.onClick(e, {});
    };
    return (React.createElement("div", { className: className_1.prefixClaName(exports.ROOT_CLASS_NAME), onClick: onClick },
        React.createElement("ul", { className: className_1.prefixClaName('container', exports.ROOT_CLASS_NAME) }, content)));
}
;
exports.default = react_1.memo(ActivityBar);
//# sourceMappingURL=index.js.map