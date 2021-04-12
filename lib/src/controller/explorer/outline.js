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
exports.OutlineController = void 0;
var controller_1 = require("mo/react/controller");
var tsyringe_1 = require("tsyringe");
var mo_1 = require("mo");
var OutlineController = /** @class */ (function (_super) {
    __extends(OutlineController, _super);
    function OutlineController() {
        var _this = _super.call(this) || this;
        _this.onClick = function (event) {
            // console.log('onClick:', panelService);
        };
        _this.initView();
        return _this;
    }
    OutlineController.prototype.initView = function () {
        var outlinePanel = {
            id: 'outline',
            name: 'OUTLINE',
            toolbar: [
                {
                    id: 'outline-collapse',
                    title: 'Collapse All',
                    iconName: 'codicon-collapse-all',
                },
                {
                    id: 'outline-more',
                    title: 'More Actions...',
                    iconName: 'codicon-ellipsis',
                },
            ],
        };
        mo_1.explorerService.addPanel(outlinePanel);
    };
    OutlineController = __decorate([
        tsyringe_1.singleton(),
        __metadata("design:paramtypes", [])
    ], OutlineController);
    return OutlineController;
}(controller_1.Controller));
exports.OutlineController = OutlineController;
//# sourceMappingURL=outline.js.map