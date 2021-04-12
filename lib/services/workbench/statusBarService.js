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
exports.StatusBarService = void 0;
var statusBar_1 = require("mo/model/workbench/statusBar");
var react_1 = require("mo/react");
var tsyringe_1 = require("tsyringe");
function searchById(id) {
    return function (item) { return item.id === id; };
}
var StatusBarService = /** @class */ (function (_super) {
    __extends(StatusBarService, _super);
    function StatusBarService() {
        var _this = _super.call(this) || this;
        _this.state = tsyringe_1.container.resolve(statusBar_1.StatusBarModel);
        return _this;
    }
    StatusBarService.prototype.onClick = function (callback) {
        this.subscribe(statusBar_1.StatusBarEvent.onClick, callback);
    };
    StatusBarService.prototype.remove = function (id, arr) {
        var index = arr.findIndex(searchById(id));
        var result = arr.splice(index, 1);
        return result[0];
    };
    StatusBarService.prototype.removeLeftItem = function (id) {
        return this.remove(id, this.state.leftItems);
    };
    StatusBarService.prototype.removeRightItem = function (id) {
        return this.remove(id, this.state.rightItems);
    };
    StatusBarService.prototype.findById = function (id) {
        var result;
        var _a = this.state, leftItems = _a.leftItems, rightItems = _a.rightItems;
        result = leftItems.find(searchById(id));
        if (!result) {
            result = rightItems.find(searchById(id));
        }
        return result;
    };
    StatusBarService.prototype.appendLeftItem = function (item) {
        this.state.leftItems.push(item);
        this.render();
    };
    StatusBarService.prototype.appendRightItem = function (item) {
        this.state.rightItems.push(item);
        this.render();
    };
    StatusBarService.prototype.updateItem = function (item) {
        var original = this.findById(item.id);
        if (original) {
            Object.assign(original, item);
            this.render();
        }
    };
    StatusBarService = __decorate([
        tsyringe_1.singleton(),
        __metadata("design:paramtypes", [])
    ], StatusBarService);
    return StatusBarService;
}(react_1.Component));
exports.StatusBarService = StatusBarService;
//# sourceMappingURL=statusBarService.js.map