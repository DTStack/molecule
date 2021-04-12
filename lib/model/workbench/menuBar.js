"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuBarModel = exports.MenuBarEvent = void 0;
var tsyringe_1 = require("tsyringe");
/**
 * The activity bar event definition
 */
var MenuBarEvent;
(function (MenuBarEvent) {
    /**
     * Selected an activity bar
     */
    MenuBarEvent["onClick"] = "menuBar.onClick";
})(MenuBarEvent = exports.MenuBarEvent || (exports.MenuBarEvent = {}));
var MenuBarModel = /** @class */ (function () {
    function MenuBarModel(data) {
        if (data === void 0) { data = []; }
        this.data = data;
    }
    MenuBarModel = __decorate([
        tsyringe_1.injectable(),
        __param(0, tsyringe_1.inject('MenuBarData')),
        __metadata("design:paramtypes", [Array])
    ], MenuBarModel);
    return MenuBarModel;
}());
exports.MenuBarModel = MenuBarModel;
tsyringe_1.container.register('MenuBarData', { useValue: [] });
//# sourceMappingURL=menuBar.js.map