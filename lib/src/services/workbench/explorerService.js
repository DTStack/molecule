"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExplorerService = void 0;
var tsyringe_1 = require("tsyringe");
var component_1 = require("mo/react/component");
var explorer_1 = require("mo/model/workbench/explorer");
var explorer_2 = require("mo/model/workbench/explorer");
var helper_1 = require("../helper");
var tree_1 = require("mo/components/tree");
var mo_1 = require("mo");
var model_1 = require("mo/model");
var utils_1 = require("mo/common/utils");
var ExplorerService = /** @class */ (function (_super) {
    __extends(ExplorerService, _super);
    function ExplorerService() {
        var _this = _super.call(this) || this;
        _this.onDropTree = function (treeData) {
            var _a;
            _this.setState({
                folderTree: Object.assign((_a = _this.state.folderTree) === null || _a === void 0 ? void 0 : _a.data, {
                    data: treeData,
                }),
            });
        };
        _this.state = tsyringe_1.container.resolve(explorer_1.IExplorerModel);
        return _this;
    }
    /* ============================Panel============================ */
    ExplorerService.prototype.addPanel = function (data) {
        var next = __spreadArray([], __read(this.state.data));
        if (Array.isArray(data)) {
            next = next === null || next === void 0 ? void 0 : next.concat(data);
        }
        else {
            next === null || next === void 0 ? void 0 : next.push(data);
        }
        this.setState({
            data: next,
        });
    };
    ExplorerService.prototype.reset = function () {
        this.setState({
            data: [],
        });
    };
    ExplorerService.prototype.addOrRemovePanel = function (id) {
        var data = this.state.data;
        var next = __spreadArray([], __read(data));
        var index = next.findIndex(helper_1.searchById(id));
        if (index > -1) {
            this.remove(id);
        }
        else {
            var existPanel = explorer_2.DEFAULT_PANELS.find(helper_1.searchById(id));
            if (!existPanel)
                return;
            this.addPanel(existPanel);
        }
    };
    ExplorerService.prototype.remove = function (id) {
        var data = this.state.data;
        var next = __spreadArray([], __read(data));
        var index = next.findIndex(helper_1.searchById(id));
        if (index > -1) {
            next.splice(index, 1);
        }
        this.setState({
            data: next,
        });
    };
    // private updateHeaderToolBarCheckStatus(id: string) {
    //     const { headerToolBar, data } = this.state;
    //     const existPanel = data?.find(searchById(id));
    //     const next = [...headerToolBar!];
    //     this.setState({
    //         headerToolBar: next,
    //     });
    // }
    /* ============================Tree============================ */
    ExplorerService.prototype.getFileIconByExtensionName = function (name, fileType) {
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
    ExplorerService.prototype.getCurrentRootFolderInfo = function (id) {
        var currentRootFolder = this.getRootFolderById(id);
        var index = this.getRootFolderIndexByRootId(currentRootFolder.id);
        var tree = new helper_1.TreeViewUtil(currentRootFolder);
        return {
            index: index,
            currentRootFolder: currentRootFolder,
            tree: tree,
        };
    };
    ExplorerService.prototype.createTargetNodeById = function (id, treeInstance, extra) {
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
    ExplorerService.prototype.getRootFolderIndexByRootId = function (id) {
        var _a;
        return (_a = this.state.folderTree) === null || _a === void 0 ? void 0 : _a.data.findIndex(function (folder) { return folder.id === id; });
    };
    ExplorerService.prototype.getRootFolderByRootId = function (id) {
        var _a;
        return (_a = this.state.folderTree) === null || _a === void 0 ? void 0 : _a.data.find(function (folder) { return folder.id === id; });
    };
    ExplorerService.prototype.getRootFolderById = function (id) {
        var _a, _b;
        var rootNode = {};
        (_b = (_a = this.state.folderTree) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.forEach(function (folder) {
            var treeInstance = new helper_1.TreeViewUtil(folder);
            if (treeInstance.get(id)) {
                rootNode = folder;
            }
        });
        return rootNode;
    };
    ExplorerService.prototype.addRootFolder = function (folder) {
        var folderTree = this.state.folderTree;
        var next = __spreadArray([], __read(folderTree === null || folderTree === void 0 ? void 0 : folderTree.data));
        if (Array.isArray(folder)) {
            next = next === null || next === void 0 ? void 0 : next.concat(folder);
        }
        else {
            next === null || next === void 0 ? void 0 : next.push(folder);
        }
        this.setState({
            folderTree: __assign(__assign({}, folderTree), { data: next }),
        });
    };
    ExplorerService.prototype.removeRootFolder = function (id) {
        var folderTree = this.state.folderTree;
        var next = __spreadArray([], __read(folderTree === null || folderTree === void 0 ? void 0 : folderTree.data));
        var index = this.getRootFolderIndexByRootId(id);
        if (index > -1) {
            next.splice(index, 1);
        }
        this.setState({
            folderTree: __assign(__assign({}, folderTree), { data: next }),
        });
    };
    ExplorerService.prototype.setActive = function (id) {
        var folderTree = this.state.folderTree;
        var tree = this.getCurrentRootFolderInfo(id).tree;
        var currentNode = tree.get(id);
        this.setState({
            folderTree: __assign(__assign({}, folderTree), { current: currentNode }),
        });
    };
    ExplorerService.prototype.updateFileName = function (file, callback) {
        var folderTree = this.state.folderTree;
        var id = file.id, name = file.name, fileType = file.fileType;
        var cloneData = (folderTree === null || folderTree === void 0 ? void 0 : folderTree.data) || [];
        var _a = this.getCurrentRootFolderInfo(id), tree = _a.tree, index = _a.index;
        if (name) {
            tree.update(id, __assign(__assign({}, file), { icon: this.getFileIconByExtensionName(name, fileType), modify: false }));
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
    ExplorerService.prototype.updateFileContent = function (id, value) {
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
    ExplorerService.prototype.rename = function (id, callback) {
        var folderTree = this.state.folderTree;
        var cloneData = (folderTree === null || folderTree === void 0 ? void 0 : folderTree.data) || [];
        var _a = this.getCurrentRootFolderInfo(id), tree = _a.tree, index = _a.index;
        tree.update(id, {
            modify: true,
        });
        if (index > -1)
            cloneData[index] = tree.obj;
        this.setState({
            folderTree: __assign(__assign({}, folderTree), { data: cloneData }),
        });
        if (callback)
            callback();
    };
    ExplorerService.prototype.delete = function (id, callback) {
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
    ExplorerService.prototype.newFile = function (id, callback) {
        var folderTree = this.state.folderTree;
        var cloneData = (folderTree === null || folderTree === void 0 ? void 0 : folderTree.data) || [];
        var _a = this.getCurrentRootFolderInfo(id), tree = _a.tree, index = _a.index;
        if (!id) {
            var tabData = {
                id: "" + utils_1.randomId(),
                name: "Untitled",
                data: {
                    modified: false,
                },
            };
            mo_1.editorService.open(tabData);
        }
        this.createTargetNodeById(id, tree, {
            modify: true,
        });
        if (index > -1)
            cloneData[index] = tree.obj;
        this.setState({
            folderTree: __assign(__assign({}, folderTree), { data: cloneData }),
        });
        if (callback)
            callback();
    };
    ExplorerService.prototype.newFolder = function (id, callback) {
        var folderTree = this.state.folderTree;
        var cloneData = (folderTree === null || folderTree === void 0 ? void 0 : folderTree.data) || [];
        var _a = this.getCurrentRootFolderInfo(id), tree = _a.tree, index = _a.index;
        this.createTargetNodeById(id, tree, {
            fileType: tree_1.FileTypes.folder,
            modify: true,
        });
        if (index > -1)
            cloneData[index] = tree.obj;
        this.setState({
            folderTree: __assign(__assign({}, folderTree), { data: cloneData }),
        });
        if (callback)
            callback();
    };
    ExplorerService = __decorate([
        tsyringe_1.singleton(),
        __metadata("design:paramtypes", [])
    ], ExplorerService);
    return ExplorerService;
}(component_1.Component));
exports.ExplorerService = ExplorerService;
//# sourceMappingURL=explorerService.js.map