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
exports.SearchController = void 0;
var controller_1 = require("mo/react/controller");
var tsyringe_1 = require("tsyringe");
var mo_1 = require("mo");
var React = require("react");
var search_1 = require("mo/workbench/sidebar/search");
var controller_2 = require("mo/controller");
var mo_2 = require("mo");
var search_2 = require("mo/model/workbench/search");
var SearchController = /** @class */ (function (_super) {
    __extends(SearchController, _super);
    function SearchController() {
        var _this = _super.call(this) || this;
        _this.setSearchValue = function (value) {
            var _a;
            (_a = mo_2.searchService.setSearchValue) === null || _a === void 0 ? void 0 : _a.call(mo_2.searchService, value);
        };
        _this.setReplaceValue = function (value) {
            var _a;
            (_a = mo_2.searchService.setReplaceValue) === null || _a === void 0 ? void 0 : _a.call(mo_2.searchService, value);
        };
        _this.onToggleAddon = function (addon) {
            var addonId = addon === null || addon === void 0 ? void 0 : addon.id;
            switch (addonId) {
                case search_2.SEARCH_CASE_SENSITIVE_COMMAND_ID: {
                    _this.onToggleCaseSensitive(addonId);
                    break;
                }
                case search_2.SEARCH_WHOLE_WORD_COMMAND_ID: {
                    _this.onToggleWholeWord(addonId);
                    break;
                }
                case search_2.SEARCH_REGULAR_EXPRESSION_COMMAND_ID: {
                    _this.onToggleRegex(addonId);
                    break;
                }
                case search_2.SEARCH_PRESERVE_CASE_COMMAND_ID: {
                    _this.onTogglePreserveCase(addonId);
                    break;
                }
                case search_2.SEARCH_REPLACE_ALL_COMMAND_ID: {
                    _this.onToggleRegex(addonId);
                    break;
                }
                default:
                    console.log('no addon');
            }
        };
        _this.onToggleCaseSensitive = function (addonId) {
            var _a;
            (_a = mo_2.searchService.toggleCaseSensitive) === null || _a === void 0 ? void 0 : _a.call(mo_2.searchService, addonId);
        };
        _this.onToggleWholeWord = function (addonId) {
            var _a;
            (_a = mo_2.searchService.toggleWholeWord) === null || _a === void 0 ? void 0 : _a.call(mo_2.searchService, addonId);
        };
        _this.onToggleRegex = function (addonId) {
            var _a;
            (_a = mo_2.searchService.toggleRegex) === null || _a === void 0 ? void 0 : _a.call(mo_2.searchService, addonId);
        };
        _this.onTogglePreserveCase = function (addonId) {
            var _a;
            (_a = mo_2.searchService.togglePreserveCase) === null || _a === void 0 ? void 0 : _a.call(mo_2.searchService, addonId);
        };
        _this.onToggleRepalceAll = function (addonId) {
            var _a;
            (_a = mo_2.searchService.toggleReplaceAll) === null || _a === void 0 ? void 0 : _a.call(mo_2.searchService, addonId);
        };
        _this.convertFoldToSearchTree = function (data) {
            var _a;
            return (_a = mo_2.searchService.convertFoldToSearchTree) === null || _a === void 0 ? void 0 : _a.call(mo_2.searchService, data);
        };
        _this.initView();
        return _this;
    }
    SearchController.prototype.initView = function () {
        var searchSidePane = {
            id: 'searchPane',
            title: 'SEARCH',
            render: function () {
                return React.createElement(search_1.SearchPanelView, __assign({}, controller_2.searchController));
            },
        };
        mo_1.sidebarService.push(searchSidePane);
        var searchActivityItem = {
            id: 'search',
            name: 'Search',
            iconName: 'codicon-search',
        };
        mo_1.activityBarService.addBar(searchActivityItem);
        mo_1.activityBarService.onSelect(function (e, item) {
            if (item.id === searchActivityItem.id) {
                mo_1.sidebarService.setState({
                    current: searchSidePane.id,
                });
            }
        });
    };
    SearchController = __decorate([
        tsyringe_1.singleton(),
        __metadata("design:paramtypes", [])
    ], SearchController);
    return SearchController;
}(controller_1.Controller));
exports.SearchController = SearchController;
//# sourceMappingURL=search.js.map