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
    function SidebarModel(panes, selected, hidden) {
        if (panes === void 0) { panes = []; }
        if (selected === void 0) { selected = ''; }
        if (hidden === void 0) { hidden = false; }
        this.hidden = false;
        this.panes = panes;
        this.current = selected;
        this.hidden = hidden;
    }
    SidebarModel = __decorate([
        tsyringe_1.injectable(),
        __metadata("design:paramtypes", [Array, String, Object])
    ], SidebarModel);
    return SidebarModel;
}());
exports.SidebarModel = SidebarModel;
//# sourceMappingURL=sidebar.js.map