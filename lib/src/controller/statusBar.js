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
exports.StatusBarController = void 0;
var mo_1 = require("mo");
var controller_1 = require("mo/react/controller");
var services_1 = require("mo/services");
var tsyringe_1 = require("tsyringe");
var panel_1 = require("mo/model/workbench/panel");
var statusBar_1 = require("mo/model/workbench/statusBar");
var StatusBarController = /** @class */ (function (_super) {
    __extends(StatusBarController, _super);
    function StatusBarController() {
        var _this = _super.call(this) || this;
        _this.onClick = function (e, item) {
            var id = item.id;
            switch (id) {
                case statusBar_1.STATUS_PROBLEMS.id /** Problems */:
                    var _a = services_1.panelService.getState(), current = _a.current, hidden = _a.hidden;
                    if (hidden) {
                        services_1.panelService.showHide();
                    }
                    else if ((current === null || current === void 0 ? void 0 : current.id) !== panel_1.PANEL_PROBLEMS.id) {
                        services_1.panelService.open(panel_1.PANEL_PROBLEMS);
                    }
                    else {
                        services_1.panelService.showHide();
                    }
                    break;
                default:
            }
            _this.emit(mo_1.StatusBarEvent.onClick, e, item);
        };
        return _this;
    }
    StatusBarController = __decorate([
        tsyringe_1.singleton(),
        __metadata("design:paramtypes", [])
    ], StatusBarController);
    return StatusBarController;
}(controller_1.Controller));
exports.StatusBarController = StatusBarController;
//# sourceMappingURL=statusBar.js.map