"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusBarModel = exports.StatusBarEvent = void 0;
var tsyringe_1 = require("tsyringe");
/**
 * The activity bar event definition
 */
var StatusBarEvent;
(function (StatusBarEvent) {
    /**
     * Selected an activity bar
     */
    StatusBarEvent["onClick"] = "statusBar.onClick";
    /**
     * Activity bar data changed
     */
    StatusBarEvent["DataChanged"] = "statusBar.data";
})(StatusBarEvent = exports.StatusBarEvent || (exports.StatusBarEvent = {}));
var StatusBarModel = /** @class */ (function () {
    function StatusBarModel() {
        this.leftItems = [];
        this.rightItems = [];
    }
    StatusBarModel = __decorate([
        tsyringe_1.injectable()
    ], StatusBarModel);
    return StatusBarModel;
}());
exports.StatusBarModel = StatusBarModel;
//# sourceMappingURL=statusBar.js.map