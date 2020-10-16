"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorGroupService = void 0;
var EditorGroupService = /** @class */ (function () {
    function EditorGroupService(id, activeTab, tabs, breadcrumb, actions, menu, editorInstance) {
        this.id = id;
        this.tabs = tabs;
        this.menu = menu;
        this.actions = actions;
        this.activeTab = activeTab;
        this.breadcrumb = breadcrumb;
        this.editorInstance = editorInstance;
    }
    return EditorGroupService;
}());
exports.EditorGroupService = EditorGroupService;
//# sourceMappingURL=groupService.js.map