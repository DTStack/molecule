"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorService = void 0;
var EditorService = /** @class */ (function () {
    function EditorService(current, groups) {
        if (groups === void 0) { groups = []; }
        this.current = current;
        this.groups = groups;
    }
    EditorService.prototype.open = function (tab, groupId) {
        var group = this.current;
        if (groupId) {
            group = this.groups.find(function (group) { return group.id === groupId; });
        }
        if (group) {
            group.tabs.push(tab);
            group.activeTab = tab;
        }
    };
    EditorService.prototype.closeAll = function () {
    };
    EditorService.prototype.onClose = function () {
    };
    EditorService.prototype.close = function (index, callback) {
    };
    return EditorService;
}());
exports.EditorService = EditorService;
//# sourceMappingURL=editorService.js.map