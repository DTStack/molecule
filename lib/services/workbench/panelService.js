"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanelService = void 0;
var react_1 = require("mo/react");
var tsyringe_1 = require("tsyringe");
var panel_1 = require("mo/model/workbench/panel");
var helper_1 = require("../helper");
var PanelService = /** @class */ (function (_super) {
    __extends(PanelService, _super);
    function PanelService() {
        var _this = _super.call(this) || this;
        _this.state = tsyringe_1.container.resolve(panel_1.PanelModel);
        return _this;
    }
    PanelService.prototype.showHide = function () {
        this.setState({
            hidden: !this.state.hidden,
        });
    };
    PanelService.prototype.maximizeRestore = function () {
        var maximize = !this.state.maximize;
        var _a = this.state.toolbox, toolbox = _a === void 0 ? [] : _a;
        var resizeBtnIndex = toolbox === null || toolbox === void 0 ? void 0 : toolbox.findIndex(helper_1.searchById(panel_1.PANEL_TOOLBOX_RESIZE.id));
        var resizeBtn = toolbox[resizeBtnIndex];
        if (resizeBtn) {
            if (maximize) {
                toolbox[resizeBtnIndex] = Object.assign({}, resizeBtn, {
                    title: 'Restore Panel Size',
                    iconName: 'codicon-chevron-down',
                });
            }
            else {
                toolbox[resizeBtnIndex] = panel_1.PANEL_TOOLBOX_RESIZE;
            }
            this.setState({
                maximize: !this.state.maximize,
            });
        }
    };
    PanelService.prototype.open = function (data) {
        var current = this.getById(data.id);
        if (!current) {
            this.add(data);
            current = data;
        }
        this.setState({
            current: current,
        });
    };
    PanelService.prototype.getById = function (id) {
        var _a = this.state.data, data = _a === void 0 ? [] : _a;
        return data.find(helper_1.searchById(id));
    };
    PanelService.prototype.updateOutput = function (data) {
        return this.update(Object.assign(panel_1.PANEL_OUTPUT, data));
    };
    PanelService.prototype.updateProblems = function (data) {
        return this.update(Object.assign(panel_1.PANEL_PROBLEMS, data));
    };
    PanelService.prototype.clearProblems = function () {
        this.updateOutput(Object.assign(panel_1.PANEL_PROBLEMS, { data: null }));
    };
    PanelService.prototype.appendOutput = function (content) {
        var output = this.getById(panel_1.PANEL_OUTPUT.id);
        if (output) {
            output.data = output.data + content;
            this.updateOutput(output);
        }
    };
    PanelService.prototype.clearOutput = function () {
        this.updateOutput(Object.assign(panel_1.PANEL_OUTPUT, { data: '' }));
    };
    PanelService.prototype.add = function (data) {
        var original = this.state.data || [];
        if (Array.isArray(data)) {
            original = original.concat(data);
        }
        else {
            original.push(data);
        }
        this.setState({
            data: original,
        });
    };
    PanelService.prototype.update = function (data) {
        var panes = this.state.data || [];
        var targetIndex = panes === null || panes === void 0 ? void 0 : panes.findIndex(helper_1.searchById(data.id));
        if (targetIndex !== undefined && targetIndex > -1) {
            Object.assign(panes[targetIndex], data);
            this.render();
            return panes[targetIndex];
        }
        return undefined;
    };
    PanelService.prototype.remove = function (id) {
        var data = this.state.data;
        var targetIndex = data === null || data === void 0 ? void 0 : data.findIndex(helper_1.searchById(id));
        if (targetIndex !== undefined && targetIndex > -1) {
            var result = (data === null || data === void 0 ? void 0 : data.splice(targetIndex, 1)) || [];
            this.setState({
                data: data,
            });
            return result[0];
        }
        return undefined;
    };
    PanelService.prototype.onTabChange = function (callback) {
        this.subscribe(panel_1.PanelEvent.onTabChange, callback);
    };
    PanelService.prototype.onToolbarClick = function (callback) {
        this.subscribe(panel_1.PanelEvent.onToolbarClick, callback);
    };
    PanelService = __decorate([
        tsyringe_1.singleton(),
        __metadata("design:paramtypes", [])
    ], PanelService);
    return PanelService;
}(react_1.Component));
exports.PanelService = PanelService;
//# sourceMappingURL=panelService.js.map