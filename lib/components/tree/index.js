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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
exports.FileTypes = void 0;
var React = require("react");
var react_1 = require("react");
var react_2 = require("react");
var rc_tree_1 = require("rc-tree");
var icon_1 = require("mo/components/icon");
var className_1 = require("mo/common/className");
var FileTypes;
(function (FileTypes) {
    FileTypes["file"] = "file";
    FileTypes["folder"] = "folder";
    FileTypes["rootFolder"] = "rootFolder";
})(FileTypes = exports.FileTypes || (exports.FileTypes = {}));
var TreeView = function (props) {
    var className = props.className, _a = props.data, data = _a === void 0 ? [] : _a, draggable = props.draggable, onDropTree = props.onDropTree, onRightClick = props.onRightClick, onSelectTree = props.onSelectTree, renderTitle = props.renderTitle, // custom title
    restProps = __rest(props, ["className", "data", "draggable", "onDropTree", "onRightClick", "onSelectTree", "renderTitle"]);
    var _b = __read(react_1.useState([]), 2), expandedKeys = _b[0], setExpandedKeys = _b[1];
    var onExpand = function (expandedKeys) {
        console.log('onExpand', expandedKeys);
        setExpandedKeys(expandedKeys);
    };
    var onDrop = function (info) {
        if (!draggable)
            return;
        console.log(info);
        var dropKey = info.node.props.eventKey;
        var dragKey = info.dragNode.props.eventKey;
        var dropPos = info.node.props.pos.split('-');
        var dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
        var loopTree = function (data, key, callback) {
            data.forEach(function (item, index, arr) {
                if (item.key === key) {
                    return callback(item, index, arr);
                }
                if (item.children) {
                    return loopTree(item.children, key, callback);
                }
            });
        };
        var treeData = __spread(data);
        var dragObj;
        loopTree(treeData, dragKey, function (item, index, arr) {
            arr.splice(index, 1);
            dragObj = item;
        });
        if (!info.dropToGap) {
            loopTree(treeData, dropKey, function (item) {
                item.children = item.children || [];
                item.children.push(dragObj);
            });
        }
        else if ((info.node.props.children || []).length > 0 &&
            info.node.props.expanded &&
            dropPosition === 1) {
            loopTree(treeData, dropKey, function (item) {
                item.children = item.children || [];
                item.children.unshift(dragObj);
            });
        }
        else {
            var ar_1;
            var i_1;
            loopTree(treeData, dropKey, function (item, index, arr) {
                ar_1 = arr;
                i_1 = index;
            });
            if (dropPosition === -1) {
                ar_1.splice(i_1, 0, dragObj);
            }
            else {
                ar_1.splice(i_1 + 1, 0, dragObj);
            }
        }
        console.log('treeData', treeData);
        onDropTree && onDropTree(treeData);
    };
    var renderTreeNodes = function (data) { return data === null || data === void 0 ? void 0 : data.map(function (item, index) {
        var modify = item.modify, id = item.id, icon = item.icon, children = item.children;
        return (
        /**
         * TODO: antd TreeNode 目前强依赖于 Tree，不好抽离，后续还不支持的话，考虑重写..
         * https://github.com/ant-design/ant-design/issues/4688
         * https://github.com/ant-design/ant-design/issues/4853
         */
        React.createElement(rc_tree_1.TreeNode, { "data-id": "mo_treeNode_" + id, "data-index": index, data: item, title: renderTitle === null || renderTitle === void 0 ? void 0 : renderTitle(item, index), key: "" + id, icon: modify ? '' : React.createElement(icon_1.Icon, { type: icon }) }, children && renderTreeNodes(children)));
    }); };
    return (React.createElement("div", { className: className_1.classNames(className_1.prefixClaName('tree'), className) },
        React.createElement("div", { className: className_1.prefixClaName('tree', 'sidebar') },
            React.createElement(rc_tree_1.default, __assign({ prefixCls: "rc-tree", draggable: draggable, onDrop: onDrop, switcherIcon: React.createElement(icon_1.Icon, { type: "chevron-right" }), expandedKeys: expandedKeys, onExpand: onExpand, onSelect: function (selectedKeys, e) {
                    var _a, _b;
                    var _c = e.node.data, fileType = _c.fileType, modify = _c.modify;
                    var isFile = fileType === FileTypes.file;
                    if (isFile && !modify && props.onSelectFile) {
                        props.onSelectFile(e.node.data);
                    }
                    onSelectTree === null || onSelectTree === void 0 ? void 0 : onSelectTree((_b = (_a = e.node) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.id);
                }, onRightClick: onRightClick }, restProps), renderTreeNodes(data)))));
};
exports.default = react_2.memo(TreeView);
//# sourceMappingURL=index.js.map