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
exports.ExplorerService = exports.TreeView = void 0;
var tsyringe_1 = require("tsyringe");
var component_1 = require("mo/react/component");
var explorer_1 = require("mo/model/workbench/explorer");
var tree_1 = require("mo/components/tree");
var mo_1 = require("mo");
var model_1 = require("mo/model");
var TreeView = /** @class */ (function () {
    /**
     *
     * @param obj // tree object
     * @param childNodeName // loop properties
     * @example indexes data structure example:
     * {
            [2]: {
                id: 2,
                node: {},
                parent: 1,
                prev: null,
                next: 3
            },
            ...
        }
     */
    function TreeView(obj, childNodeName) {
        var _a;
        if (childNodeName === void 0) { childNodeName = 'children'; }
        this.count = 1; // nodes count
        this.obj = obj || (_a = {}, _a[childNodeName] = [], _a);
        this.indexes = {};
        this.childNodeName = childNodeName;
        this.generate(this.obj);
    }
    TreeView.prototype.generate = function (obj) {
        var _a;
        var indexes = this.indexes;
        var startId = obj.id;
        var self = this;
        var index = { id: startId, node: obj };
        indexes[startId + ''] = index;
        this.count++;
        if ((_a = obj[this.childNodeName]) === null || _a === void 0 ? void 0 : _a.length) {
            walk(obj[this.childNodeName], index);
        }
        function walk(objs, parent) {
            var children = []; // current children ids
            objs.forEach(function (obj, i) {
                var _a;
                var index = {};
                index.id = obj.id;
                index.node = obj;
                if (parent)
                    index.parent = parent.id;
                indexes[obj.id + ''] = index;
                children.push(obj.id);
                self.count++;
                if ((_a = obj[self.childNodeName]) === null || _a === void 0 ? void 0 : _a.length) {
                    walk(obj[self.childNodeName], index);
                }
            });
            parent[self.childNodeName] = children;
            children.forEach(function (id, i) {
                var index = indexes[id + ''];
                if (i > 0)
                    index.prev = children[i - 1];
                if (i < children.length - 1)
                    index.next = children[i + 1];
            });
        }
        return index;
    };
    TreeView.prototype.getIndex = function (id) {
        var index = this.indexes[id + ''];
        if (index)
            return index;
    };
    TreeView.prototype.removeIndex = function (index) {
        var self = this;
        del(index);
        function del(index) {
            var _a;
            delete self.indexes[index.id + ''];
            if ((_a = index[self.childNodeName]) === null || _a === void 0 ? void 0 : _a.length) {
                index[self.childNodeName].forEach(function (child) {
                    del(self.getIndex(child));
                });
            }
        }
    };
    TreeView.prototype.get = function (id) {
        var index = this.getIndex(id);
        if (index === null || index === void 0 ? void 0 : index.node)
            return index.node;
        return null;
    };
    TreeView.prototype.remove = function (id) {
        var index = this.getIndex(id);
        var node = this.get(id);
        var parentIndex = this.getIndex(index.parent);
        var parentNode = this.get(index.parent);
        parentNode[this.childNodeName].splice(parentNode[this.childNodeName].indexOf(node), 1);
        parentIndex[this.childNodeName].splice(parentIndex[this.childNodeName].indexOf(id), 1);
        this.removeIndex(index);
        this.updateChildren(parentIndex[this.childNodeName]);
        return node;
    };
    TreeView.prototype.update = function (id, extra) {
        if (extra === void 0) { extra = {}; }
        var index = this.getIndex(id);
        var node = this.get(id);
        var parentIndex = this.getIndex(index.parent);
        var parentNode = this.get(index.parent);
        parentNode[this.childNodeName].splice(parentNode[this.childNodeName].indexOf(node), 1, __assign(__assign({}, node), extra));
        this.updateChildren(parentIndex[this.childNodeName]);
        return node;
    };
    TreeView.prototype.updateChildren = function (children) {
        var self = this;
        children.forEach(function (id, i) {
            var index = self.getIndex(id);
            index.prev = index.next = null;
            if (i > 0)
                index.prev = children[i - 1];
            if (i < children.length - 1)
                index.next = children[i + 1];
        });
    };
    TreeView.prototype.insert = function (obj, parentId, i) {
        var parentIndex = this.getIndex(parentId);
        var parentNode = this.get(parentId);
        var index = this.generate(obj);
        index.parent = parentId;
        parentNode[this.childNodeName] = parentNode[this.childNodeName] || [];
        parentIndex[this.childNodeName] = parentIndex[this.childNodeName] || [];
        parentNode[this.childNodeName].splice(i, 0, obj);
        parentIndex[this.childNodeName].splice(i, 0, index.id);
        this.updateChildren(parentIndex[this.childNodeName]);
        if (parentIndex.parent) {
            this.updateChildren(this.getIndex(parentIndex.parent)[this.childNodeName]);
        }
        return index;
    };
    TreeView.prototype.insertBefore = function (obj, destId) {
        var destIndex = this.getIndex(destId);
        var parentId = destIndex.parent;
        var i = this.getIndex(parentId)[this.childNodeName].indexOf(destId);
        return this.insert(obj, parentId, i);
    };
    TreeView.prototype.insertAfter = function (obj, destId) {
        var destIndex = this.getIndex(destId);
        var parentId = destIndex.parent;
        var i = this.getIndex(parentId)[this.childNodeName].indexOf(destId);
        return this.insert(obj, parentId, i + 1);
    };
    TreeView.prototype.prepend = function (obj, destId) {
        return this.insert(obj, destId, 0);
    };
    TreeView.prototype.append = function (obj, destId) {
        var destIndex = this.getIndex(destId);
        destIndex[this.childNodeName] = destIndex[this.childNodeName] || [];
        return this.insert(obj, destId, destIndex[this.childNodeName].length);
    };
    return TreeView;
}());
exports.TreeView = TreeView;
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
        var next = __spread(this.state.data);
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
    ExplorerService.prototype.remove = function (index) {
        var data = this.state.data;
        var next = __spread(data);
        if (index > -1) {
            next.splice(index, 1);
        }
        this.setState({
            data: next,
        });
    };
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
    ExplorerService.prototype.getCurrentRootFolderAndIndex = function (id) {
        var currentRootFolder = this.getRootFolderById(id);
        var index = this.getRootFolderIndexByRootId(currentRootFolder.id);
        return {
            index: index,
            currentRootFolder: currentRootFolder,
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
            var treeInstance = new TreeView(folder);
            if (treeInstance.get(id)) {
                rootNode = folder;
            }
        });
        return rootNode;
    };
    ExplorerService.prototype.addRootFolder = function (folder) {
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
    };
    ExplorerService.prototype.removeRootFolder = function (id) {
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
    ExplorerService.prototype.setActive = function (id) {
        var folderTree = this.state.folderTree;
        var currentRootFolder = this.getCurrentRootFolderAndIndex(id).currentRootFolder;
        var tree = new TreeView(currentRootFolder);
        var currentNode = tree.get(id);
        this.setState({
            folderTree: __assign(__assign({}, folderTree), { current: currentNode }),
        });
    };
    ExplorerService.prototype.updateFile = function (file, callback) {
        var folderTree = this.state.folderTree;
        var id = file.id, name = file.name, fileType = file.fileType;
        var cloneData = (folderTree === null || folderTree === void 0 ? void 0 : folderTree.data) || [];
        var _a = this.getCurrentRootFolderAndIndex(id), currentRootFolder = _a.currentRootFolder, index = _a.index;
        var tree = new TreeView(currentRootFolder);
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
    ExplorerService.prototype.rename = function (id, callback) {
        var folderTree = this.state.folderTree;
        var cloneData = (folderTree === null || folderTree === void 0 ? void 0 : folderTree.data) || [];
        var _a = this.getCurrentRootFolderAndIndex(id), currentRootFolder = _a.currentRootFolder, index = _a.index;
        var tree = new TreeView(currentRootFolder);
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
        var _a = this.getCurrentRootFolderAndIndex(id), currentRootFolder = _a.currentRootFolder, index = _a.index;
        var tree = new TreeView(currentRootFolder);
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
        var _a = this.getCurrentRootFolderAndIndex(id), currentRootFolder = _a.currentRootFolder, index = _a.index;
        var tree = new TreeView(currentRootFolder);
        if (!id) {
            var tabData = {
                id: "" + (Math.random() * 10 + 1),
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
        var _a = this.getCurrentRootFolderAndIndex(id), currentRootFolder = _a.currentRootFolder, index = _a.index;
        var tree = new TreeView(currentRootFolder);
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