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
exports.EditorModel = exports.EditorGroupModel = exports.EDITOR_MENU_SHOW_OPENEDITORS = exports.EDITOR_MENU_CLOSE = exports.EDITOR_MENU_CLOSE_OTHERS = exports.EDITOR_MENU_CLOSE_ALL = exports.EDITOR_MENU_CLOSE_TO_LEFT = exports.EDITOR_MENU_CLOSE_TO_RIGHT = exports.EditorEvent = void 0;
require("reflect-metadata");
var tsyringe_1 = require("tsyringe");
var EditorEvent;
(function (EditorEvent) {
    EditorEvent["OnCloseTab"] = "editor.closeTab";
    EditorEvent["OnCloseAll"] = "editor.closeAll";
    EditorEvent["OnCloseOthers"] = "editor.closeOthers";
    EditorEvent["OnCloseToLeft"] = "editor.closeToLeft";
    EditorEvent["OnCloseToRight"] = "editor.closeToRight";
    EditorEvent["OnMoveTab"] = "editor.moveTab";
    EditorEvent["OpenTab"] = "editor.openTab";
    EditorEvent["OnSelectTab"] = "editor.selectTab";
    EditorEvent["OnSplitEditorRight"] = "editor.splitEditorRight";
})(EditorEvent = exports.EditorEvent || (exports.EditorEvent = {}));
exports.EDITOR_MENU_CLOSE_TO_RIGHT = 'editor.closeToRight';
exports.EDITOR_MENU_CLOSE_TO_LEFT = 'editor.closeToLeft';
exports.EDITOR_MENU_CLOSE_ALL = 'editor.closeAll';
exports.EDITOR_MENU_CLOSE_OTHERS = 'editor.closeOthers';
exports.EDITOR_MENU_CLOSE = 'editor.close';
exports.EDITOR_MENU_SHOW_OPENEDITORS = 'editor.showOpenEditors';
var baseMenu = [
    {
        id: exports.EDITOR_MENU_CLOSE_ALL,
        name: 'Close All',
    },
];
var initialActions = __spread([
    {
        id: exports.EDITOR_MENU_SHOW_OPENEDITORS,
        name: 'Show Opened Editors',
    }
], baseMenu);
var initialMenu = __spread([
    {
        id: exports.EDITOR_MENU_CLOSE,
        name: 'Close',
    },
    {
        id: exports.EDITOR_MENU_CLOSE_OTHERS,
        name: 'Close Others',
    },
    {
        id: exports.EDITOR_MENU_CLOSE_TO_RIGHT,
        name: 'Close To Right',
    },
    {
        id: exports.EDITOR_MENU_CLOSE_TO_LEFT,
        name: 'Close To Left',
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
    function EditorModel(current, groups) {
        if (current === void 0) { current = null; }
        if (groups === void 0) { groups = []; }
        this.current = current;
        this.groups = groups;
    }
    EditorModel = __decorate([
        tsyringe_1.injectable(),
        __metadata("design:paramtypes", [Object, Array])
    ], EditorModel);
    return EditorModel;
}());
exports.EditorModel = EditorModel;
//# sourceMappingURL=editor.js.map