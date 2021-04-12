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
exports.useContextMenu = void 0;
var contextView_1 = require("mo/components/contextView");
function useContextMenu(props) {
    var anchor = props.anchor, render = props.render;
    if (!anchor) {
        return;
    }
    var contextView = contextView_1.useContextView({
        render: render,
    });
    var onContextMenu = function (e) {
        e.preventDefault();
        contextView.show({
            x: e.clientX,
            y: e.clientY,
        }, render);
    };
    anchor.addEventListener('contextmenu', onContextMenu);
    var dispose = function () {
        contextView.hide();
        anchor.removeEventListener('contextmenu', onContextMenu);
    };
    return __assign(__assign({}, contextView), { dispose: dispose });
}
exports.useContextMenu = useContextMenu;
//# sourceMappingURL=index.js.map