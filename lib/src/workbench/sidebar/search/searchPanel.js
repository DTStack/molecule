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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var toolbar_1 = require("mo/components/toolbar");
var className_1 = require("mo/common/className");
var sidebar_1 = require("mo/workbench/sidebar");
var search_1 = require("mo/components/search");
var searchTree_1 = require("./searchTree");
var services_1 = require("mo/services");
var folderTreeState = services_1.folderTreeService.getState();
var SearchPanel = /** @class */ (function (_super) {
    __extends(SearchPanel, _super);
    function SearchPanel(props) {
        var _this = _super.call(this, props) || this;
        _this.onClick = function (e, item) {
            console.log('onClick:', e, item);
        };
        return _this;
    }
    SearchPanel.prototype.render = function () {
        var _a;
        var _b = this.props, _c = _b.headerToolBar, headerToolBar = _c === void 0 ? [] : _c, value = _b.value, convertFoldToSearchTree = _b.convertFoldToSearchTree;
        return (React.createElement("div", { className: className_1.prefixClaName('search-pane', 'sidebar') },
            React.createElement(sidebar_1.Header, { title: "Search", toolbar: React.createElement(toolbar_1.default, { data: headerToolBar, onClick: this.onClick }) }),
            React.createElement(sidebar_1.Content, null,
                React.createElement(search_1.SearchWidget, __assign({}, this.props)),
                value && (React.createElement(searchTree_1.default, __assign({ data: convertFoldToSearchTree === null || convertFoldToSearchTree === void 0 ? void 0 : convertFoldToSearchTree((_a = folderTreeState === null || folderTreeState === void 0 ? void 0 : folderTreeState.folderTree) === null || _a === void 0 ? void 0 : _a.data) }, this.props))))));
    };
    return SearchPanel;
}(React.Component));
exports.default = SearchPanel;
//# sourceMappingURL=searchPanel.js.map