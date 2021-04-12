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
exports.SidebarService = void 0;
var react_1 = require("mo/react");
var tsyringe_1 = require("tsyringe");
var sidebar_1 = require("mo/model/workbench/sidebar");
var SidebarService = /** @class */ (function (_super) {
    __extends(SidebarService, _super);
    function SidebarService() {
        var _this = _super.call(this) || this;
        _this.state = tsyringe_1.container.resolve(sidebar_1.SidebarModel);
        return _this;
    }
    SidebarService.prototype.push = function (data) {
        var original = this.state.panes;
        original === null || original === void 0 ? void 0 : original.push(data);
    };
    SidebarService = __decorate([
        tsyringe_1.singleton(),
        __metadata("design:paramtypes", [])
    ], SidebarService);
    return SidebarService;
}(react_1.Component));
exports.SidebarService = SidebarService;
//# sourceMappingURL=sidebarService.js.map