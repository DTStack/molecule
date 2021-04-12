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
exports.FolderTreeService = void 0;
var tsyringe_1 = require("tsyringe");
var component_1 = require("mo/react/component");
var folderTree_1 = require("mo/model/workbench/explorer/folderTree");
var helper_1 = require("../../helper");
var tree_1 = require("mo/components/tree");
var model_1 = require("mo/model");
var logger_1 = require("mo/common/logger");
var services_1 = require("mo/services");
var FolderTreeService = /** @class */ (function (_super) {
    __extends(FolderTreeService, _super);
    function FolderTreeService() {
        var _this = _super.call(this) || this;
        _this.initTree = function (tree) {
            var folderTree = _this.state.folderTree;
            _this.setState({
                folderTree: __assign(__assign({}, folderTree), { data: tree }),
            });
        };
        _this.onDropTree = function (treeData) {
            var _a;
            _this.setState({
                folderTree: Object.assign((_a = _this.state.folderTree) === null || _a === void 0 ? void 0 : _a.data, {
                    data: treeData,
                }),
            });
        };
        _this.state = tsyringe_1.container.resolve(folderTree_1.IFolderTreeModel);
        return _this;
    }
    FolderTreeService.prototype.getFileIconByExtensionName = function (name, fileType) {
        var _a;
        if (fileType === tree_1.FileTypes.folder)
            return '';
        var fileExtension = name && ((_a = name.split('.')) === null || _a === void 0 ? void 0 : _a[1]);
        var icon = 'symbol-file';
        switch (fileExtension) {
            case 'txt': {
                icon = 'symbol-file';
                break;
            }
            case 'js': {
                icon = 'file-binary';
                break;
            }
            case 'html': {
                icon = 'file-code';
                break;
            }
            case 'zip': {
                icon = 'file-zip';
                break;
            }
            default:
                icon;
        }
        return icon;
    };
    FolderTreeService.prototype.getCurrentRootFolderInfo = function (id) {
        var currentRootFolder = this.getRootFolderById(id);
        var index = this.getRootFolderIndexByRootId(currentRootFolder.id);
        var tree = new helper_1.TreeViewUtil(currentRootFolder);
        return {
            index: index,
            currentRootFolder: currentRootFolder,
            tree: tree,
        };
    };
    FolderTreeService.prototype.createTargetNodeById = function (id, treeInstance, extra) {
        var _a;
        var currentIndex = treeInstance.getIndex(id);
        // If the node type of the current id is a file, insert it at the parent node above it
        if (((_a = currentIndex === null || currentIndex === void 0 ? void 0 : currentIndex.node) === null || _a === void 0 ? void 0 : _a.fileType) === tree_1.FileTypes.file) {
            treeInstance.prepend(new model_1.TreeNodeModel(extra), currentIndex === null || currentIndex === void 0 ? void 0 : currentIndex.parent);
        }
        else {
            treeInstance.append(new model_1.TreeNodeModel(extra), id);
        }
    };
    FolderTreeService.prototype.getRootFolderIndexByRootId = function (id) {
        var _a;
        return (_a = this.state.folderTree) === null || _a === void 0 ? void 0 : _a.data.findIndex(function (folder) { return folder.id === id; });
    };
    FolderTreeService.prototype.getRootFolderByRootId = function (id) {
        var _a;
        return (_a = this.state.folderTree) === null || _a === void 0 ? void 0 : _a.data.find(function (folder) { return folder.id === id; });
    };
    FolderTreeService.prototype.getRootFolderById = function (id) {
        var _a, _b;
        var rootNode = {};
        (_b = (_a = this.state.folderTree) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.forEach(function (folder) {
            var treeInstance = new helper_1.TreeViewUtil(folder);
            if (treeInstance.get(id))
                rootNode = folder;
        });
        return rootNode;
    };
    FolderTreeService.prototype.addRootFolder = function (folder) {
        var folderTree = this.state.folderTree;
        var next = __spread(folderTree === null || folderTree === void 0 ? void 0 : folderTree.data);
        if (Array.isArray(folder)) {
            next = next === null || next === void 0 ? void 0 : next.concat(folder);
        }
        else {
            next === null || next === void 0 ? void 0 : next.push(folder);
        }
        this.setState({
            folderTree: __assign(__assign({}, folderTree), { data: next }),
        });
        services_1.explorerService.updateRender();
    };
    FolderTreeService.prototype.removeRootFolder = function (id) {
        var folderTree = this.state.folderTree;
        var next = __spread(folderTree === null || folderTree === void 0 ? void 0 : folderTree.data);
        var index = this.getRootFolderIndexByRootId(id);
        if (index > -1) {
            next.splice(index, 1);
        }
        this.setState({
            folderTree: __assign(__assign({}, folderTree), { data: next }),
        });
    };
    FolderTreeService.prototype.setActive = function (id) {
        var folderTree = this.state.folderTree;
        var tree = this.getCurrentRootFolderInfo(id).tree;
        var currentNode = tree.get(id);
        this.setState({
            folderTree: __assign(__assign({}, folderTree), { current: currentNode }),
        });
    };
    FolderTreeService.prototype.updateFileName = function (file, callback) {
        var folderTree = this.state.folderTree;
        var id = file.id, name = file.name, fileType = file.fileType;
        var cloneData = (folderTree === null || folderTree === void 0 ? void 0 : folderTree.data) || [];
        var _a = this.getCurrentRootFolderInfo(id), tree = _a.tree, index = _a.index;
        if (name) {
            tree.update(id, __assign(__assign({}, file), { icon: this.getFileIconByExtensionName(name, fileType), isEditable: false }));
        }
        else {
            tree.remove(id);
        }
        if (index > -1)
            cloneData[index] = tree.obj;
        this.setState({
            folderTree: __assign(__assign({}, folderTree), { data: cloneData }),
        });
        if (callback)
            callback();
    };
    FolderTreeService.prototype.updateFileContent = function (id, value) {
        var folderTree = this.state.folderTree;
        var cloneData = (folderTree === null || folderTree === void 0 ? void 0 : folderTree.data) || [];
        var _a = this.getCurrentRootFolderInfo(id), tree = _a.tree, index = _a.index;
        tree.update(id, {
            value: value,
        });
        if (index > -1)
            cloneData[index] = tree.obj;
        this.setState({
            folderTree: __assign(__assign({}, folderTree), { data: cloneData }),
        });
    };
    FolderTreeService.prototype.rename = function (id, callback) {
        var folderTree = this.state.folderTree;
        var cloneData = (folderTree === null || folderTree === void 0 ? void 0 : folderTree.data) || [];
        var _a = this.getCurrentRootFolderInfo(id), tree = _a.tree, index = _a.index;
        tree.update(id, {
            isEditable: true,
        });
        if (index > -1)
            cloneData[index] = tree.obj;
        this.setState({
            folderTree: __assign(__assign({}, folderTree), { data: cloneData }),
        });
        if (callback)
            callback();
    };
    FolderTreeService.prototype.delete = function (id, callback) {
        var folderTree = this.state.folderTree;
        var cloneData = (folderTree === null || folderTree === void 0 ? void 0 : folderTree.data) || [];
        var _a = this.getCurrentRootFolderInfo(id), tree = _a.tree, index = _a.index;
        tree.remove(id);
        if (index > -1)
            cloneData[index] = tree.obj;
        this.setState({
            folderTree: __assign(__assign({}, folderTree), { data: cloneData }),
        });
        if (callback)
            callback();
    };
    FolderTreeService.prototype.newFile = function (id, callback) {
        var folderTree = this.state.folderTree;
        var cloneData = (folderTree === null || folderTree === void 0 ? void 0 : folderTree.data) || [];
        var _a = this.getCurrentRootFolderInfo(id), tree = _a.tree, index = _a.index;
        if (!id) {
            logger_1.default.info('id is missing');
            return;
        }
        this.createTargetNodeById(id, tree, {
            isEditable: true,
        });
        if (index > -1)
            cloneData[index] = tree.obj;
        this.setState({
            folderTree: __assign(__assign({}, folderTree), { data: cloneData }),
        });
        if (callback)
            callback();
    };
    FolderTreeService.prototype.newFolder = function (id, callback) {
        var folderTree = this.state.folderTree;
        var cloneData = (folderTree === null || folderTree === void 0 ? void 0 : folderTree.data) || [];
        var _a = this.getCurrentRootFolderInfo(id), tree = _a.tree, index = _a.index;
        this.createTargetNodeById(id, tree, {
            fileType: tree_1.FileTypes.folder,
            isEditable: true,
        });
        if (index > -1)
            cloneData[index] = tree.obj;
        this.setState({
            folderTree: __assign(__assign({}, folderTree), { data: cloneData }),
        });
        if (callback)
            callback();
    };
    FolderTreeService.prototype.onSelectFile = function (callback) {
        this.subscribe(folderTree_1.FolderTreeEvent.onSelectFile, callback);
    };
    FolderTreeService = __decorate([
        tsyringe_1.singleton(),
        __metadata("design:paramtypes", [])
    ], FolderTreeService);
    return FolderTreeService;
}(component_1.Component));
exports.FolderTreeService = FolderTreeService;
//# sourceMappingURL=folderTreeService.js.map