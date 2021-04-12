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
exports.PanelController = void 0;
var controller_1 = require("mo/react/controller");
var services_1 = require("mo/services");
var tsyringe_1 = require("tsyringe");
var panel_1 = require("mo/model/workbench/panel");
var PanelController = /** @class */ (function (_super) {
    __extends(PanelController, _super);
    function PanelController() {
        var _this = _super.call(this) || this;
        _this.onTabChange = function (key) {
            var _a;
            var state = services_1.panelService.getState();
            if (key) {
                services_1.panelService.setState({
                    current: (_a = state.data) === null || _a === void 0 ? void 0 : _a.find(function (item) { return item.id === key; }),
                });
            }
            _this.emit(panel_1.PanelEvent.onTabChange, key);
        };
        _this.onToolbarClick = function (e, item) {
            if (item.id === panel_1.PANEL_TOOLBOX_CLOSE.id) {
                services_1.panelService.showHide();
            }
            else if (item.id === panel_1.PANEL_TOOLBOX_RESIZE.id) {
                services_1.panelService.maximizeRestore();
            }
            _this.emit(panel_1.PanelEvent.onToolbarClick, e, item);
        };
        return _this;
    }
    PanelController = __decorate([
        tsyringe_1.singleton(),
        __metadata("design:paramtypes", [])
    ], PanelController);
    return PanelController;
}(controller_1.Controller));
exports.PanelController = PanelController;
//# sourceMappingURL=panel.js.map