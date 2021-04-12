"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorModel = exports.EditorGroupModel = exports.EditorEvent = void 0;
require("reflect-metadata");
var tsyringe_1 = require("tsyringe");
var EditorEvent;
(function (EditorEvent) {
    EditorEvent["OnCloseTab"] = "editor.closeTab";
    EditorEvent["OnCloseAll"] = "editor.closeAll";
    EditorEvent["OnMoveTab"] = "editor.moveTab";
    EditorEvent["OpenTab"] = "editor.openTab";
    EditorEvent["OnSelectTab"] = "editor.selectTab";
    EditorEvent["OnSplitEditorRight"] = "editor.splitEditorRight";
})(EditorEvent = exports.EditorEvent || (exports.EditorEvent = {}));
var baseMenu = [
    {
        id: 'closeToRight',
        name: 'Close To Right',
    },
    {
        id: 'closeSaved',
        name: 'Close Saved',
    },
];
var initialActions = __spread([
    {
        id: 'showOpenEditors',
        name: 'Show Opened Editors',
    }
], baseMenu);
var initialMenu = __spread([
    {
        id: 'close',
        name: 'Close',
    },
    {
        id: 'closeOther',
        name: 'Close Others',
    },
    {
        id: 'closeToRight',
        name: 'Close To Right',
    }
], baseMenu);
var EditorGroupModel = /** @class */ (function () {
    function EditorGroupModel(id, tab, data, actions, menu, editorInstance) {
        if (actions === void 0) { actions = initialActions; }
        if (menu === void 0) { menu = initialMenu; }
        this.id = id;
        this.data = data;
        this.menu = menu;
        this.actions = actions;
        this.tab = tab;
        this.editorInstance = editorInstance;
    }
    return EditorGroupModel;
}());
exports.EditorGroupModel = EditorGroupModel;
var EditorModel = /** @class */ (function () {
    function EditorModel() {
        this.current = null;
        this.groups = [];
    }
    EditorModel = __decorate([
        tsyringe_1.injectable()
    ], EditorModel);
    return EditorModel;
}());
exports.EditorModel = EditorModel;
//# sourceMappingURL=editor.js.map