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
var editor_1 = require("mo/controller/editor");
var dialog_1 = require("mo/components/dialog");
var confirm = dialog_1.default.confirm;
var FolderTreeController = /** @class */ (function (_super) {
    __extends(FolderTreeController, _super);
    function FolderTreeController() {
        var _this = _super.call(this) || this;
        _this.onSelectFile = function (file) {
            var tabData = __assign(__assign({}, file), { id: "" + file.id, modified: false, data: {
                    value: "hello tree " + file.id,
                    path: 'desktop/molecule/editor1',
                    language: 'ini',
                }, breadcrumb: [{ id: "" + file.id, name: 'editor.js' }] });
            mo_1.editorService.open(tabData);
        };
        _this.onSelectTree = function (id) {
            mo_1.explorerService.setActive(id);
        };
        _this.onDropTree = function (treeNode) {
            mo_1.explorerService.onDropTree(treeNode);
        };
        _this.onClickContextMenu = function (e, item, node, callback) {
            var menuId = item.id;
            var _a = node, nodeId = _a.id, name = _a.name;
            switch (menuId) {
                case 'rename': {
                    mo_1.explorerService.rename(nodeId, function () {
                        if (callback)
                            callback();
                    });
                    break;
                }
                case 'delete': {
                    confirm({
                        title: "Are you sure you want to delete '" + name + "' ?",
                        content: 'This action is irreversible!',
                        onOk: function () {
                            mo_1.explorerService.delete(nodeId, function () {
                                var _a, _b;
                                new editor_1.EditorController().onCloseTab("" + nodeId, (_b = (_a = mo_1.editorService.getState()) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.id);
                            });
                        },
                    });
                    break;
                }
                case 'newFile': {
                    mo_1.explorerService.newFile(nodeId, function () {
                        if (callback)
                            callback();
                    });
                    break;
                }
                case 'newFolder': {
                    mo_1.explorerService.newFolder(nodeId, function () {
                        if (callback)
                            callback();
                    });
                    break;
                }
                case 'remove': {
                    mo_1.explorerService.removeRootFolder(nodeId);
                    break;
                }
                case 'openTab': {
                    console.log('OpenTab');
                    break;
                    // editorService.open();
                }
            }
        };
        _this.filterContextMenu = function (menus, node) {
            var menu;
            var baseContextMenu = [
                {
                    id: 'newFile',
                    name: 'New File',
                },
                {
                    id: 'newFolder',
                    name: 'New Folder',
                },
            ];
            var rootFolderContextMenu = [
                {
                    id: 'remove',
                    name: 'Remove Folder',
                },
            ];
            var folderContextMenu = baseContextMenu.concat(menus);
            var fileContextMenu = [
                {
                    id: 'openToSide',
                    name: 'Open to the side',
                },
            ].concat(menus);
            var rootFodlerContextMenu = baseContextMenu.concat(rootFolderContextMenu);
            switch (node.fileType) {
                case tree_1.FileTypes.file: {
                    menu = fileContextMenu;
                    break;
                }
                case tree_1.FileTypes.folder: {
                    menu = folderContextMenu;
                    break;
                }
                case tree_1.FileTypes.rootFolder: {
                    menu = rootFodlerContextMenu;
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