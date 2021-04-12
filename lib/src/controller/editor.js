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
var editor_1 = require("mo/model/workbench/editor");
var menuBar_1 = require("mo/model/workbench/menuBar");
var controller_1 = require("mo/react/controller");
var services_1 = require("mo/services");
var tsyringe_1 = require("tsyringe");
var monaco = require("monaco-editor");
var statusBar_1 = require("mo/model/workbench/statusBar");
var EditorController = /** @class */ (function (_super) {
    __extends(EditorController, _super);
    function EditorController() {
        var _this = _super.call(this) || this;
        // Group Pos locate here temporary, we can move it to state or localStorage in future.
        _this.groupSplitPos = [];
        _this.editorStates = new Map();
        _this.onClickContextMenu = function (e, item, tabItem) {
            var menuId = item === null || item === void 0 ? void 0 : item.id;
            var tabId = tabItem === null || tabItem === void 0 ? void 0 : tabItem.id;
            var current = services_1.editorService.getState().current;
            var groupId = current === null || current === void 0 ? void 0 : current.id;
            switch (menuId) {
                case editor_1.EDITOR_MENU_CLOSE: {
                    _this.onCloseTab(tabId, groupId);
                    break;
                }
                case editor_1.EDITOR_MENU_CLOSE_OTHERS: {
                    _this.onCloseOthers(tabItem, groupId);
                    break;
                }
                case editor_1.EDITOR_MENU_CLOSE_ALL: {
                    _this.onCloseAll(groupId);
                    break;
                }
                case editor_1.EDITOR_MENU_CLOSE_TO_RIGHT: {
                    _this.onCloseToRight(tabItem, groupId);
                    break;
                }
                case editor_1.EDITOR_MENU_CLOSE_TO_LEFT: {
                    _this.onCloseToLeft(tabItem, groupId);
                    break;
                }
            }
        };
        _this.onCloseAll = function (groupId) {
            services_1.editorService.closeAll(groupId);
            _this.emit(editor_1.EditorEvent.OnCloseAll, groupId);
        };
        _this.updateCurrentValue = function () {
            var _a, _b, _c, _d;
            var current = services_1.editorService.getState().current;
            var newValue = (_b = (_a = current === null || current === void 0 ? void 0 : current.tab) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.value;
            var model = (_c = current === null || current === void 0 ? void 0 : current.editorInstance) === null || _c === void 0 ? void 0 : _c.getModel();
            model === null || model === void 0 ? void 0 : model.pushEditOperations([], [
                {
                    range: model === null || model === void 0 ? void 0 : model.getFullModelRange(),
                    text: newValue,
                },
            ]);
            (_d = current === null || current === void 0 ? void 0 : current.editorInstance) === null || _d === void 0 ? void 0 : _d.focus();
        };
        _this.onCloseTab = function (tabId, groupId) {
            if (tabId && groupId) {
                services_1.editorService.closeTab(tabId, groupId);
                _this.updateCurrentValue();
                _this.emit(editor_1.EditorEvent.OnCloseTab, tabId, groupId);
            }
        };
        _this.onCloseToRight = function (tabItem, groupId) {
            services_1.editorService.closeToRight(tabItem, groupId);
            _this.updateCurrentValue();
            _this.emit(editor_1.EditorEvent.OnCloseToRight, tabItem, groupId);
        };
        _this.onCloseToLeft = function (tabItem, groupId) {
            services_1.editorService.closeToLeft(tabItem, groupId);
            _this.updateCurrentValue();
            _this.emit(editor_1.EditorEvent.OnCloseToLeft, tabItem, groupId);
        };
        _this.onCloseOthers = function (tabItem, groupId) {
            services_1.editorService.closeOthers(tabItem, groupId);
            _this.updateCurrentValue();
            _this.emit(editor_1.EditorEvent.OnCloseOthers, tabItem, groupId);
        };
        _this.onMoveTab = function (updateTabs, groupId) {
            services_1.editorService.updateGroup(groupId, {
                data: updateTabs,
            });
            _this.emit(editor_1.EditorEvent.OnMoveTab, updateTabs, groupId);
        };
        _this.onSelectTab = function (tabId, groupId) {
            services_1.editorService.setActive(groupId, tabId);
            _this.updateCurrentValue();
            _this.emit(editor_1.EditorEvent.OnSelectTab, tabId, groupId);
        };
        _this.onUpdateEditorIns = function (editorInstance, groupId) {
            var _a, _b;
            if (!editorInstance)
                return;
            _this.initEditorEvents(editorInstance, groupId);
            _this.registerActions(editorInstance);
            services_1.editorService.updateGroup(groupId, {
                editorInstance: editorInstance,
            });
            services_1.editorService.updateCurrentGroup({ editorInstance: editorInstance });
            var current = services_1.editorService.getState().current;
            var tab = current === null || current === void 0 ? void 0 : current.tab;
            _this.openFile(editorInstance, tab === null || tab === void 0 ? void 0 : tab.name, (_a = tab === null || tab === void 0 ? void 0 : tab.data) === null || _a === void 0 ? void 0 : _a.value, (_b = tab === null || tab === void 0 ? void 0 : tab.data) === null || _b === void 0 ? void 0 : _b.language);
        };
        _this.registerActions = function (editorInstance) {
            menuBar_1.undoRedoMenu.forEach(function (_a) {
                var id = _a.id, label = _a.label;
                editorInstance === null || editorInstance === void 0 ? void 0 : editorInstance.addAction({
                    id: id,
                    label: label,
                    run: function () {
                        var _a;
                        editorInstance.focus();
                        if (!document.execCommand(id)) {
                            (_a = editorInstance === null || editorInstance === void 0 ? void 0 : editorInstance.getModel()) === null || _a === void 0 ? void 0 : _a[id]();
                        }
                    },
                });
            });
        };
        _this.onSplitEditorRight = function () {
            services_1.editorService.cloneGroup();
            _this.emit(editor_1.EditorEvent.OnSplitEditorRight);
        };
        _this.onPaneSizeChange = function (newSize) {
            _this.groupSplitPos = newSize;
        };
        _this.onChangeEditorProps = function (prevProps, props) {
            var path = props.path, options = props.options;
            if ((prevProps === null || prevProps === void 0 ? void 0 : prevProps.path) !== path) {
                var current = services_1.editorService.getState().current;
                var editorInstance = current === null || current === void 0 ? void 0 : current.editorInstance;
                _this.editorStates.set(prevProps.path, editorInstance === null || editorInstance === void 0 ? void 0 : editorInstance.saveViewState());
                _this.openFile(editorInstance, path, options === null || options === void 0 ? void 0 : options.value, options === null || options === void 0 ? void 0 : options.language);
            }
        };
        return _this;
    }
    EditorController.prototype.open = function (tab, groupId) {
        services_1.editorService.open(tab, groupId);
    };
    EditorController.prototype.initEditorEvents = function (editorInstance, groupId) {
        var _this = this;
        if (!editorInstance)
            return;
        editorInstance.onDidChangeModelContent(function (event) {
            var _a, _b, _c;
            var newValue = (_a = editorInstance.getModel()) === null || _a === void 0 ? void 0 : _a.getValue();
            var current = services_1.editorService.getState().current;
            var tab = current === null || current === void 0 ? void 0 : current.tab;
            if (!tab)
                return;
            var notSave = newValue !== ((_b = tab === null || tab === void 0 ? void 0 : tab.data) === null || _b === void 0 ? void 0 : _b.value);
            services_1.editorService.updateTab({
                id: tab.id,
                data: __assign(__assign({}, tab.data), { modified: notSave, value: newValue }),
            }, groupId);
            services_1.folderTreeService.updateFileContent((_c = current === null || current === void 0 ? void 0 : current.tab) === null || _c === void 0 ? void 0 : _c.id, newValue);
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
    EditorController.prototype.openFile = function (editorInstance, path, value, language) {
        this.initializeFile(path, value, language);
        var model = monaco.editor.getModel(monaco.Uri.parse(path));
        editorInstance.setModel(model);
        // Restore the editor state for the file
        var editorState = this.editorStates.get(path);
        if (editorState) {
            editorInstance.restoreViewState(editorState);
        }
        editorInstance === null || editorInstance === void 0 ? void 0 : editorInstance.focus();
    };
    EditorController.prototype.initializeFile = function (path, value, language) {
        var model = monaco.editor.getModel(monaco.Uri.parse(path));
        if (model) {
            model === null || model === void 0 ? void 0 : model.pushEditOperations([], [
                {
                    range: model === null || model === void 0 ? void 0 : model.getFullModelRange(),
                    text: value,
                },
            ], []);
        }
        else {
            model = monaco.editor.createModel(value, language, monaco.Uri.parse(path));
        }
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
            var position = editorInstance.getPosition();
            services_1.statusBarService.updateItem(Object.assign(statusBar_1.STATUS_EDITOR_INFO, {
                data: {
                    ln: position === null || position === void 0 ? void 0 : position.lineNumber,
                    col: position === null || position === void 0 ? void 0 : position.column,
                },
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