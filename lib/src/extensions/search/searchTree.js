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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var mo_1 = require("mo");
var tree_1 = require("mo/components/tree");
var className_1 = require("mo/common/className");
var serviceProps = {
    onSelectFile: function (fileData) {
        var tabData = __assign(__assign({}, fileData), { activeTab: fileData.id, data: {
                modified: false,
            } });
        mo_1.editorService.open(tabData, tabData.activeTab);
    },
};
var SearchTree = function (props) {
    var treeNodeSearchValClassName = className_1.getBEMModifier(className_1.getBEMElement(className_1.prefixClaName('tree'), 'treeNode'), 'search');
    var data = props.data, searchValue = props.searchValue, restProps = __rest(props, ["data", "searchValue"]);
    return (React.createElement(tree_1.default, __assign({ data: data, renderTitle: function (node, index) {
            var name = node.name;
            var searchIndex = name.indexOf(searchValue);
            var beforeStr = name.substr(0, searchIndex);
            var afterStr = name.substr(searchIndex + (searchValue === null || searchValue === void 0 ? void 0 : searchValue.length));
            var title = searchIndex > -1 ? (React.createElement("span", null,
                beforeStr,
                React.createElement("span", { className: treeNodeSearchValClassName }, searchValue),
                afterStr)) : (name);
            return title;
        }, onSelectFile: serviceProps.onSelectFile }, restProps)));
};
exports.default = react_1.memo(SearchTree);
//# sourceMappingURL=searchTree.js.map