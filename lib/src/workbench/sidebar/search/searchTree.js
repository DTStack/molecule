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
var tree_1 = require("mo/components/tree");
var controller_1 = require("mo/controller");
var base_1 = require("./base");
var SearchTree = function (props) {
    var _a = props.data, data = _a === void 0 ? [] : _a, _b = props.value, value = _b === void 0 ? '' : _b, isCaseSensitive = props.isCaseSensitive, isWholeWords = props.isWholeWords, isRegex = props.isRegex, restProps = __rest(props, ["data", "value", "isCaseSensitive", "isWholeWords", "isRegex"]);
    console.log('SearchTree => Props', props);
    var getSeachValueIndex = function (queryVal, text) {
        var searchIndex;
        var onlyCaseSensitiveMatch = isCaseSensitive;
        var onlyWholeWordsMatch = isWholeWords;
        var useAllCondtionsMatch = isCaseSensitive && isWholeWords;
        var notUseConditionsMatch = !isCaseSensitive && !isWholeWords;
        if (isRegex) {
            if (onlyCaseSensitiveMatch) {
                searchIndex = text.search(new RegExp(queryVal));
            }
            if (onlyWholeWordsMatch) {
                searchIndex = text.search(new RegExp('\\b' + queryVal + '\\b'), 'i');
            }
            if (useAllCondtionsMatch) {
                searchIndex = text.search(new RegExp('\\b' + queryVal + '\\b'));
            }
            if (notUseConditionsMatch) {
                searchIndex = text
                    .toLowerCase()
                    .search(new RegExp(queryVal, 'i'));
            }
        }
        else {
            if (onlyCaseSensitiveMatch) {
                searchIndex = text.indexOf(queryVal);
            }
            // TODO：应使用字符串方法做搜索匹配，暂时使用正则匹配
            if (onlyWholeWordsMatch) {
                var reg = new RegExp('\\b' + (queryVal === null || queryVal === void 0 ? void 0 : queryVal.toLowerCase()) + '\\b');
                searchIndex = text.toLowerCase().search(reg);
            }
            if (useAllCondtionsMatch) {
                searchIndex = text.search(new RegExp('\\b' + queryVal + '\\b'));
            }
            if (notUseConditionsMatch) {
                searchIndex = text
                    .toLowerCase()
                    .indexOf(queryVal === null || queryVal === void 0 ? void 0 : queryVal.toLowerCase());
            }
        }
        return searchIndex;
    };
    return (React.createElement(tree_1.default, __assign({ data: data, renderTitle: function (node, index) {
            var name = node.name;
            var searchIndex = getSeachValueIndex(value, name);
            var beforeStr = name.substr(0, searchIndex);
            var currentValue = name.substr(searchIndex, value === null || value === void 0 ? void 0 : value.length);
            var afterStr = name.substr(searchIndex + (value === null || value === void 0 ? void 0 : value.length));
            var title = searchIndex > -1 ? (React.createElement("span", null,
                beforeStr,
                React.createElement("span", { className: base_1.matchSearchValueClassName }, currentValue),
                afterStr)) : (name);
            return title;
        }, onSelectFile: controller_1.folderTreeController.onSelectFile }, restProps)));
};
exports.default = react_1.memo(SearchTree);
//# sourceMappingURL=searchTree.js.map