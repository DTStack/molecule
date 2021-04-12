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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.EditorController = void 0;
var React = require("react");
var editor_1 = require("mo/model/workbench/editor");
var controller_1 = require("mo/react/controller");
var services_1 = require("mo/services");
var tsyringe_1 = require("tsyringe");
var statusBar_1 = require("./statusBar");
var EditorController = /** @class */ (function (_super) {
    __extends(EditorController, _super);
    function EditorController() {
        var _this = _super.call(this) || this;
        // Group Pos locate here temporary, we can move it to state or localStorage in future.
        _this.groupSplitPos = [];
        _this.onCloseAll = function (groupId) {
            services_1.editorService.closeAll(groupId);
            _this.emit(editor_1.EditorEvent.OnCloseAll, groupId);
        };
        _this.updateCurrentValue = function () {
            var _a, _b;
            var current = services_1.editorService.getState().current;
            var newValue = (_b = (_a = current === null || current === void 0 ? void 0 : current.tab) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.value;
            if (newValue)
                current === null || current === void 0 ? void 0 : current.editorInstance.setValue(newValue);
        };
        _this.onCloseTab = function (tabKey, groupId) {
            if (tabKey && groupId) {
                services_1.editorService.closeTab(tabKey, groupId);
                _this.updateCurrentValue();
                _this.emit(editor_1.EditorEvent.OnCloseTab, tabKey, groupId);
            }
        };
        _this.onMoveTab = function (updateTabs, groupId) {
            services_1.editorService.updateGroup(groupId, {
                data: updateTabs,
            });
            _this.emit(editor_1.EditorEvent.OnMoveTab, updateTabs, groupId);
        };
        _this.onSelectTab = function (tabKey, groupId) {
            services_1.editorService.setActive(groupId, tabKey);
            _this.updateCurrentValue();
            _this.emit(editor_1.EditorEvent.OnSelectTab, tabKey, groupId);
        };
        _this.onUpdateEditorIns = function (editorInstance, groupId) {
            if (editorInstance) {
                _this.initEditorEvents(editorInstance, groupId);
                services_1.editorService.updateGroup(groupId, {
                    editorInstance: editorInstance,
                });
            }
        };
        _this.onSplitEditorRight = function () {
            services_1.editorService.cloneGroup();
            _this.emit(editor_1.EditorEvent.OnSplitEditorRight);
        };
        _this.onPaneSizeChange = function (newSize) {
            _this.groupSplitPos = newSize;
        };
        _this.onTabContextMenu = function (e, tab) {
            console.log('onTabContextMenu', e, tab);
        };
        return _this;
    }
    EditorController.prototype.open = function (tab, groupId) {
        services_1.editorService.open(tab, groupId);
        this.updateCurrentValue();
    };
    EditorController.prototype.initEditorEvents = function (editorInstance, groupId) {
        var _this = this;
        if (!editorInstance)
            return;
        editorInstance.onDidChangeModelContent(function (event) {
            var _a;
            var newValue = editorInstance.getValue();
            var current = services_1.editorService.getState().current;
            var tab = current === null || current === void 0 ? void 0 : current.tab;
            if (!tab)
                return;
            var notSave = newValue !== ((_a = tab === null || tab === void 0 ? void 0 : tab.data) === null || _a === void 0 ? void 0 : _a.value);
            services_1.editorService.updateTab({
                id: tab.id,
                data: __assign(__assign({}, tab.data), { modified: notSave, value: newValue }),
            }, groupId);
            _this.updateStatusBar(editorInstance);
        });
        editorInstance.onDidFocusEditorText(function () {
            var group = services_1.editorService.getGroupById(groupId);
            if (group === null || group === void 0 ? void 0 : group.tab.id) {
                services_1.editorService.setActive(groupId, group.tab.id);
                _this.updateEditorLineColumnInfo(editorInstance);
            }
        });
        editorInstance.onDidChangeCursorSelection(function () {
            _this.updateEditorLineColumnInfo(editorInstance);
        });
    };
    EditorController.prototype.updateStatusBar = function (editorInstance) {
        if (editorInstance) {
            var model = editorInstance === null || editorInstance === void 0 ? void 0 : editorInstance.getModel();
            var decorations = model === null || model === void 0 ? void 0 : model.getAllDecorations();
            console.log('decorations:', decorations);
        }
    };
    EditorController.prototype.updateEditorLineColumnInfo = function (editorInstance) {
        if (editorInstance) {
            var position_1 = editorInstance.getPosition();
            services_1.statusBarService.updateItem(Object.assign(statusBar_1.editorLineColumnItem, {
                render: function () { return (React.createElement("span", null,
                    "Ln ", position_1 === null || position_1 === void 0 ? void 0 :
                    position_1.lineNumber,
                    ", Col ", position_1 === null || position_1 === void 0 ? void 0 :
                    position_1.column)); },
            }));
        }
    };
    EditorController = __decorate([
        tsyringe_1.singleton(),
        __metadata("design:paramtypes", [])
    ], EditorController);
    return EditorController;
}(controller_1.Controller));
exports.EditorController = EditorController;
//# sourceMappingURL=editor.js.map