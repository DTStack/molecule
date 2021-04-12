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
exports.MenuBarService = void 0;
var menuBar_1 = require("mo/model/workbench/menuBar");
var react_1 = require("mo/react");
var tsyringe_1 = require("tsyringe");
var MenuBarService = /** @class */ (function (_super) {
    __extends(MenuBarService, _super);
    function MenuBarService() {
        var _this = _super.call(this) || this;
        _this.state = tsyringe_1.container.resolve(menuBar_1.MenuBarModel);
        return _this;
    }
    MenuBarService.prototype.push = function (item) {
        var original = this.state.data || [];
        if (Array.isArray(item)) {
            original = original.concat(item);
        }
        else {
            original.push(item);
        }
    };
    MenuBarService.prototype.remove = function (index) {
        this.state.data.splice(index, 1);
    };
    MenuBarService = __decorate([
        tsyringe_1.singleton(),
        __metadata("design:paramtypes", [])
    ], MenuBarService);
    return MenuBarService;
}(react_1.Component));
exports.MenuBarService = MenuBarService;
//# sourceMappingURL=menuBarService.js.map