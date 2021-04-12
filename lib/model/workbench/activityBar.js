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
exports.ActivityBarModel = exports.ActivityBarEvent = void 0;
require("reflect-metadata");
var tsyringe_1 = require("tsyringe");
/**
 * The activity bar event definition
 */
var ActivityBarEvent;
(function (ActivityBarEvent) {
    /**
     * Selected an activity bar
     */
    ActivityBarEvent["Selected"] = "activityBar.selected";
    ActivityBarEvent["OnClick"] = "activityBar.onClick";
    /**
     * Activity bar data changed
     */
    ActivityBarEvent["DataChanged"] = "activityBar.data";
    ActivityBarEvent["ReRender"] = "activityBar.reRender";
})(ActivityBarEvent = exports.ActivityBarEvent || (exports.ActivityBarEvent = {}));
var ActivityBarModel = /** @class */ (function () {
    function ActivityBarModel(data, selected) {
        if (data === void 0) { data = []; }
        if (selected === void 0) { selected = ''; }
        this.data = data;
        this.selected = selected;
    }
    ActivityBarModel = __decorate([
        tsyringe_1.injectable(),
        __param(0, tsyringe_1.inject('ActivityBarData')),
        __param(1, tsyringe_1.inject('ActivityBarSelected')),
        __metadata("design:paramtypes", [Array, String])
    ], ActivityBarModel);
    return ActivityBarModel;
}());
exports.ActivityBarModel = ActivityBarModel;
tsyringe_1.container.register('ActivityBarData', { useValue: [] });
tsyringe_1.container.register('ActivityBarSelected', { useValue: '' });
//# sourceMappingURL=activityBar.js.map