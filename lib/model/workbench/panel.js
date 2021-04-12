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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanelModel = exports.PANEL_TOOLBOX_RESIZE = exports.PANEL_TOOLBOX_CLOSE = exports.PANEL_OUTPUT = exports.PANEL_PROBLEMS = exports.PanelEvent = void 0;
var React = require("react");
var tsyringe_1 = require("tsyringe");
var output_1 = require("mo/workbench/panel/output");
var problems_1 = require("mo/workbench/panel/problems");
var PanelEvent;
(function (PanelEvent) {
    PanelEvent["onTabChange"] = "panel.onTabChange";
    PanelEvent["onToolbarClick"] = "panel.onToolbarClick";
})(PanelEvent = exports.PanelEvent || (exports.PanelEvent = {}));
exports.PANEL_PROBLEMS = {
    id: 'ProblemsPane',
    name: 'problems',
    data: null,
    renderPanel: function (item) { return React.createElement(problems_1.default, __assign({}, item)); },
};
exports.PANEL_OUTPUT = {
    id: 'OutputPane',
    name: 'output',
    data: 'output',
    renderPanel: function (item) { return React.createElement(output_1.default, __assign({}, item)); },
};
exports.PANEL_TOOLBOX_CLOSE = {
    id: 'Close',
    title: 'Close Panel',
    iconName: 'codicon-close',
};
exports.PANEL_TOOLBOX_RESIZE = {
    id: 'Resize',
    title: 'Maximize Panel Size',
    iconName: 'codicon-chevron-up',
};
var PanelModel = /** @class */ (function () {
    function PanelModel() {
        this.current = exports.PANEL_OUTPUT;
        this.data = ([exports.PANEL_PROBLEMS, exports.PANEL_OUTPUT]);
        this.hidden = false;
        this.maximize = false;
        this.toolbox = [
            exports.PANEL_TOOLBOX_RESIZE,
            exports.PANEL_TOOLBOX_CLOSE,
        ];
    }
    PanelModel = __decorate([
        tsyringe_1.injectable()
    ], PanelModel);
    return PanelModel;
}());
exports.PanelModel = PanelModel;
//# sourceMappingURL=panel.js.map