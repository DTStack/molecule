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
exports.FolderTreeController = void 0;
var tsyringe_1 = require("tsyringe");
var controller_1 = require("mo/react/controller");
var tree_1 = require("mo/components/tree");
var mo_1 = require("mo");
var controller_2 = require("mo/controller");
var dialog_1 = require("mo/components/dialog");
var model_1 = require("mo/model");
var confirm = dialog_1.default.confirm;
var FolderTreeController = /** @class */ (function (_super) {
    __extends(FolderTreeController, _super);
    function FolderTreeController() {
        var _this = _super.call(this) || this;
        _this.onSelectFile = function (file, isUpdate) {
            var _a, _b, _c;
            var fileType = file.fileType, isEditable = file.isEditable;
            var isFile = fileType === tree_1.FileTypes.file;
            mo_1.folderTreeService.setActive(file === null || file === void 0 ? void 0 : file.id);
            if (!isFile || isEditable)
                return;
            var tabData = __assign(__assign({}, file), { id: (_b = (_a = "" + file.id) === null || _a === void 0 ? void 0 : _a.split('_')) === null || _b === void 0 ? void 0 : _b[0], modified: false, data: {
                    value: file.content,
                    path: 'desktop/moslecule/editor1',
                    language: 'sql',
                } });
            var _d = ((_c = mo_1.editorService.getState()) === null || _c === void 0 ? void 0 : _c.current) || {}, id = _d.id, _e = _d.data, data = _e === void 0 ? [] : _e;
            if (isUpdate) {
                var tabId_1 = file.id;
                var index = data === null || data === void 0 ? void 0 : data.findIndex(function (tab) { return tab.id == tabId_1; });
                if (index > -1) {
                    if (id)
                        mo_1.editorService.updateTab(tabData, id);
                }
                else {
                    mo_1.editorService.open(tabData);
                }
            }
            else {
                mo_1.editorService.open(tabData);
            }
            _this.emit(model_1.FolderTreeEvent.onSelectFile, tabData, isUpdate);
        };
        _this.onDropTree = function (treeNode) {
            mo_1.folderTreeService.onDropTree(treeNode);
        };
        _this.getInputEvent = function (events) {
            return events;
        };
        _this.onClickContextMenu = function (e, item, node, events) {
            var _a;
            if (node === void 0) { node = {}; }
            var menuId = item.id;
            var _b = node, nodeId = _b.id, name = _b.name;
            console.log('onClickContextMenu => Item', item);
            switch (menuId) {
                case model_1.RENAME_COMMAND_ID: {
                    mo_1.folderTreeService.rename(nodeId, function () {
                        var _a;
                        (_a = events === null || events === void 0 ? void 0 : events.setValue) === null || _a === void 0 ? void 0 : _a.call(events, name);
                        events === null || events === void 0 ? void 0 : events.onFocus();
                    });
                    break;
                }
                case model_1.DELETE_COMMAND_ID: {
                    confirm({
                        title: "Are you sure you want to delete '" + name + "' ?",
                        content: 'This action is irreversible!',
                        onOk: function () {
                            mo_1.folderTreeService.delete(nodeId, function () {
                                var _a, _b;
                                controller_2.editorController.onCloseTab("" + nodeId, (_b = (_a = mo_1.editorService.getState()) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.id);
                            });
                        },
                    });
                    break;
                }
                case model_1.NEW_FILE_COMMAND_ID: {
                    mo_1.folderTreeService.newFile(nodeId, function () {
                        events === null || events === void 0 ? void 0 : events.onFocus();
                    });
                    break;
                }
                case model_1.NEW_FOLDER_COMMAND_ID: {
                    mo_1.folderTreeService.newFolder(nodeId, function () {
                        events === null || events === void 0 ? void 0 : events.onFocus();
                    });
                    break;
                }
                case model_1.REMOVE_COMMAND_ID: {
                    mo_1.folderTreeService.removeRootFolder(nodeId);
                    break;
                }
                case model_1.ADD_ROOT_FOLDER_COMMAND_ID: {
                    (_a = mo_1.folderTreeService.addRootFolder) === null || _a === void 0 ? void 0 : _a.call(mo_1.folderTreeService, new model_1.TreeNodeModel({
                        name: "molecule_temp" + Math.random(),
                        fileType: 'rootFolder',
                    }));
                    break;
                }
                case model_1.OPEN_TO_SIDE_COMMAND_ID: {
                    console.log('OpenTab');
                    break;
                    // editorService.open();
                }
            }
        };
        _this.filterContextMenu = function (menus, node) {
            var menu;
            switch (node.fileType) {
                case tree_1.FileTypes.file: {
                    menu = model_1.FILE_CONTEXT_MENU.concat(menus);
                    break;
                }
                case tree_1.FileTypes.folder: {
                    menu = model_1.BASE_CONTEXT_MENU.concat(menus);
                    break;
                }
                case tree_1.FileTypes.rootFolder: {
                    menu = model_1.BASE_CONTEXT_MENU.concat(model_1.ROOT_FOLDER_CONTEXT_MENU);
                    break;
                }
                default:
                    menu = menus;
            }
            return menu;
        };
        _this.initView();
        return _this;
    }
    FolderTreeController.prototype.initView = function () { };
    FolderTreeController = __decorate([
        tsyringe_1.singleton(),
        __metadata("design:paramtypes", [])
    ], FolderTreeController);
    return FolderTreeController;
}(controller_1.Controller));
exports.FolderTreeController = FolderTreeController;
//# sourceMappingURL=folderTree.js.map