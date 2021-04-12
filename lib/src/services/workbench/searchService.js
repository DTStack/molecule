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
exports.SearchService = void 0;
var tsyringe_1 = require("tsyringe");
var component_1 = require("mo/react/component");
var search_1 = require("mo/model/workbench/search");
var model_1 = require("mo/model");
var tree_1 = require("mo/components/tree");
var SearchService = /** @class */ (function (_super) {
    __extends(SearchService, _super);
    function SearchService() {
        var _this = _super.call(this) || this;
        _this.state = tsyringe_1.container.resolve(search_1.ISearchModel);
        return _this;
    }
    SearchService.prototype.setSearchValue = function (value) {
        this.setState({
            value: value,
        });
    };
    SearchService.prototype.setReplaceValue = function (value) {
        this.setState({
            replaceValue: value,
        });
    };
    SearchService.prototype.convertFoldToSearchTree = function (data) {
        var searchTreeData = [];
        var buildSearchTreeData = function (tree) {
            tree === null || tree === void 0 ? void 0 : tree.forEach(function (treeItem) {
                var _a, _b, _c;
                if (treeItem.fileType === tree_1.FileTypes.file) {
                    var treeNode = __assign(__assign({}, treeItem), new model_1.TreeNodeModel({
                        fileType: tree_1.FileTypes.folder,
                        id: treeItem.id,
                        name: treeItem.name,
                    }));
                    treeNode.children = (_c = (_b = (_a = treeItem.content) === null || _a === void 0 ? void 0 : _a.split('\n')) === null || _b === void 0 ? void 0 : _b.filter(Boolean)) === null || _c === void 0 ? void 0 : _c.map(function (item, index) {
                        return __assign(__assign({}, treeItem), new model_1.TreeNodeModel({
                            name: item,
                            content: treeItem.content,
                            id: treeItem.id + "_" + index,
                        }));
                    });
                    searchTreeData.push(treeNode);
                }
                if (treeItem.children)
                    buildSearchTreeData(treeItem.children);
            });
        };
        buildSearchTreeData(data);
        return searchTreeData;
    };
    SearchService.prototype.toggleCaseSensitive = function (addonId) {
        var isCaseSensitive = this.state.isCaseSensitive;
        this.setState({
            isCaseSensitive: !isCaseSensitive,
        });
        this.updateSearchAddonsCheckedStats(addonId, isCaseSensitive);
    };
    SearchService.prototype.toggleWholeWord = function (addonId) {
        var isWholeWords = this.state.isWholeWords;
        this.setState({
            isWholeWords: !isWholeWords,
        });
        this.updateSearchAddonsCheckedStats(addonId, isWholeWords);
    };
    SearchService.prototype.toggleRegex = function (addonId) {
        var isRegex = this.state.isRegex;
        this.setState({
            isRegex: !isRegex,
        });
        this.updateSearchAddonsCheckedStats(addonId, isRegex);
    };
    SearchService.prototype.togglePreserveCase = function (addonId) {
        var preserveCase = this.state.preserveCase;
        this.setState({
            preserveCase: !preserveCase,
        });
        this.updateReplaceAddonsCheckedStats(addonId, preserveCase);
    };
    SearchService.prototype.toggleReplaceAll = function () {
        console.log('toggleReplaceAll');
    };
    SearchService.prototype.updateSearchAddonsCheckedStats = function (addonId, checked) {
        var searchAddons = this.state.searchAddons;
        var newAddons = searchAddons === null || searchAddons === void 0 ? void 0 : searchAddons.map(function (addon) {
            return __assign(__assign({}, addon), { checked: addon.id === addonId ? !checked : addon.checked });
        });
        this.setState({
            searchAddons: newAddons,
        });
    };
    SearchService.prototype.updateReplaceAddonsCheckedStats = function (addonId, checked) {
        var replaceAddons = this.state.replaceAddons;
        var newAddons = replaceAddons === null || replaceAddons === void 0 ? void 0 : replaceAddons.map(function (addon) {
            return __assign(__assign({}, addon), { checked: addon.id === addonId ? !checked : addon.checked });
        });
        this.setState({
            replaceAddons: newAddons,
        });
    };
    SearchService.prototype.triggerQueryChange = function () { };
    SearchService.prototype.openSearchView = function () { };
    SearchService = __decorate([
        tsyringe_1.singleton(),
        __metadata("design:paramtypes", [])
    ], SearchService);
    return SearchService;
}(component_1.Component));
exports.SearchService = SearchService;
//# sourceMappingURL=searchService.js.map