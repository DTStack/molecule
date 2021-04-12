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
exports.SidebarModel = exports.SideBarEvent = void 0;
var tsyringe_1 = require("tsyringe");
/**
 * The Sidebar event definition
 */
var SideBarEvent;
(function (SideBarEvent) {
    /**
     * Selected an sidebar bar
     */
    SideBarEvent["onClick"] = "sidebar.onClick";
})(SideBarEvent = exports.SideBarEvent || (exports.SideBarEvent = {}));
var SidebarModel = /** @class */ (function () {
    function SidebarModel(panes, selected) {
        if (panes === void 0) { panes = []; }
        if (selected === void 0) { selected = ''; }
        this.panes = panes;
        this.current = selected;
    }
    SidebarModel = __decorate([
        tsyringe_1.injectable(),
        __param(0, tsyringe_1.inject('SidebarPane')),
        __param(1, tsyringe_1.inject('Selected')),
        __metadata("design:paramtypes", [Array, String])
    ], SidebarModel);
    return SidebarModel;
}());
exports.SidebarModel = SidebarModel;
tsyringe_1.container.register('SidebarPane', { useValue: [] });
tsyringe_1.container.register('Selected', { useValue: '' });
//# sourceMappingURL=sidebar.js.map