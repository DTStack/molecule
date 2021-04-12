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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropDown = void 0;
var React = require("react");
var className_1 = require("mo/common/className");
var contextView_1 = require("../contextView");
var dom_1 = require("mo/common/dom");
var defaultDropDownClassName = className_1.prefixClaName('drop-down');
exports.DropDown = React.forwardRef(function (props, ref) {
    var _a;
    var className = props.className, overlay = props.overlay, children = props.children, _b = props.placement, placement = _b === void 0 ? 'right' : _b, _c = props.trigger, trigger = _c === void 0 ? 'click' : _c, extra = __rest(props, ["className", "overlay", "children", "placement", "trigger"]);
    var contextView = contextView_1.useContextView({
        render: function () { return overlay; },
    });
    React.useImperativeHandle(ref, function () { return ({
        dispose: function () {
            contextView.hide();
        },
    }); });
    var claNames = className_1.classNames(defaultDropDownClassName, className_1.getBEMModifier(defaultDropDownClassName, placement), className);
    var events = (_a = {},
        _a[dom_1.triggerEvent(trigger)] = function (e) {
            var target = e.currentTarget;
            var rect = target.getBoundingClientRect();
            var position = dom_1.getPositionByPlacement(placement, rect);
            contextView.show(position);
            // If placement is left or top,
            // need re calculate the position by menu size
            if (placement === 'left' || placement === 'top') {
                var overlay_1 = contextView.view.getBoundingClientRect();
                overlay_1.x = rect.x;
                overlay_1.y = rect.y;
                position = dom_1.getPositionByPlacement(placement, overlay_1);
                contextView.show(position);
            }
        },
        _a);
    return (React.createElement("div", __assign({ className: claNames }, events, extra), children));
});
//# sourceMappingURL=index.js.map