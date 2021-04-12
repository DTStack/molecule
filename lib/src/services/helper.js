"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeViewUtil = exports.searchById = void 0;
function searchById(id) {
    return function (item) { return item.id === id; };
}
exports.searchById = searchById;
var TreeViewUtil = /** @class */ (function () {
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
    function TreeViewUtil(obj, childNodeName) {
        var _a;
        if (childNodeName === void 0) { childNodeName = 'children'; }
        this.count = 1; // nodes count
        this.obj = obj || (_a = {}, _a[childNodeName] = [], _a);
        this.indexes = {};
        this.childNodeName = childNodeName;
        this.generate(this.obj);
    }
    TreeViewUtil.prototype.generate = function (obj) {
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
    TreeViewUtil.prototype.getIndex = function (id) {
        var index = this.indexes[id + ''];
        if (index)
            return index;
    };
    TreeViewUtil.prototype.removeIndex = function (index) {
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
    TreeViewUtil.prototype.get = function (id) {
        var index = this.getIndex(id);
        if (index === null || index === void 0 ? void 0 : index.node)
            return index.node;
        return null;
    };
    TreeViewUtil.prototype.remove = function (id) {
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
    TreeViewUtil.prototype.update = function (id, extra) {
        if (extra === void 0) { extra = {}; }
        var index = this.getIndex(id);
        var node = this.get(id);
        var parentIndex = this.getIndex(index.parent);
        var parentNode = this.get(index.parent);
        parentNode[this.childNodeName].splice(parentNode[this.childNodeName].indexOf(node), 1, __assign(__assign({}, node), extra));
        this.updateChildren(parentIndex[this.childNodeName]);
        return node;
    };
    TreeViewUtil.prototype.updateChildren = function (children) {
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
    TreeViewUtil.prototype.insert = function (obj, parentId, i) {
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
    TreeViewUtil.prototype.insertBefore = function (obj, destId) {
        var destIndex = this.getIndex(destId);
        var parentId = destIndex.parent;
        var i = this.getIndex(parentId)[this.childNodeName].indexOf(destId);
        return this.insert(obj, parentId, i);
    };
    TreeViewUtil.prototype.insertAfter = function (obj, destId) {
        var destIndex = this.getIndex(destId);
        var parentId = destIndex.parent;
        var i = this.getIndex(parentId)[this.childNodeName].indexOf(destId);
        return this.insert(obj, parentId, i + 1);
    };
    TreeViewUtil.prototype.prepend = function (obj, destId) {
        return this.insert(obj, destId, 0);
    };
    TreeViewUtil.prototype.append = function (obj, destId) {
        var destIndex = this.getIndex(destId);
        destIndex[this.childNodeName] = destIndex[this.childNodeName] || [];
        return this.insert(obj, destId, destIndex[this.childNodeName].length);
    };
    return TreeViewUtil;
}());
exports.TreeViewUtil = TreeViewUtil;
//# sourceMappingURL=helper.js.map