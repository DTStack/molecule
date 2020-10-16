"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarBarService = void 0;
var SidebarBarService = /** @class */ (function () {
    function SidebarBarService(panes, selected) {
        if (panes === void 0) { panes = []; }
        if (selected === void 0) { selected = ''; }
        this.panes = panes;
        this.selected = selected;
    }
    SidebarBarService.prototype.onSelect = function (key) {
        this.selected = key;
    };
    return SidebarBarService;
}());
exports.SidebarBarService = SidebarBarService;
//# sourceMappingURL=sidebarService.js.map