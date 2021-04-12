"use strict";
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
exports.ISearchModel = exports.SEARCH_REPLACE_ALL_COMMAND_ID = exports.SEARCH_PRESERVE_CASE_COMMAND_ID = exports.SEARCH_REGULAR_EXPRESSION_COMMAND_ID = exports.SEARCH_WHOLE_WORD_COMMAND_ID = exports.SEARCH_CASE_SENSITIVE_COMMAND_ID = void 0;
require("reflect-metadata");
var tsyringe_1 = require("tsyringe");
exports.SEARCH_CASE_SENSITIVE_COMMAND_ID = 'search.matchCase';
exports.SEARCH_WHOLE_WORD_COMMAND_ID = 'search.matchWholeWord';
exports.SEARCH_REGULAR_EXPRESSION_COMMAND_ID = 'search.useRegularExpression';
exports.SEARCH_PRESERVE_CASE_COMMAND_ID = 'search.preserveCase';
exports.SEARCH_REPLACE_ALL_COMMAND_ID = 'search.replaceAll';
var builtInHeaderToolbar = [
    {
        id: 'Refresh',
        title: 'Refresh',
        disabled: true,
        iconName: 'codicon-refresh',
    },
    {
        id: 'Clear',
        disabled: true,
        title: 'Clear all',
        iconName: 'codicon-clear-all',
    },
    {
        id: 'Collapse',
        title: 'Collapse all',
        disabled: true,
        iconName: 'codicon-collapse-all',
    },
];
var defaultSearchAddons = [
    {
        id: exports.SEARCH_CASE_SENSITIVE_COMMAND_ID,
        title: 'Match Case',
        disabled: false,
        checked: false,
        iconName: 'codicon-case-sensitive',
    },
    {
        id: exports.SEARCH_WHOLE_WORD_COMMAND_ID,
        title: 'Match Whole Word',
        disabled: false,
        checked: false,
        iconName: 'codicon-whole-word',
    },
    {
        id: exports.SEARCH_REGULAR_EXPRESSION_COMMAND_ID,
        disabled: false,
        checked: false,
        title: 'Use Regular Expression',
        iconName: 'codicon-regex',
    },
];
var defaultReplaceAddons = [
    {
        id: exports.SEARCH_PRESERVE_CASE_COMMAND_ID,
        title: 'Preserve Case',
        disabled: false,
        checked: false,
        iconName: 'codicon-preserve-case',
    },
    {
        id: exports.SEARCH_REPLACE_ALL_COMMAND_ID,
        title: 'Replace All',
        disabled: false,
        checked: false,
        iconName: 'codicon-replace-all',
    },
];
var ISearchModel = /** @class */ (function () {
    function ISearchModel(headerToolBar, searchAddons, replaceAddons, value, replaceValue, isCaseSensitive, isWholeWords, isRegex, preserveCase) {
        if (headerToolBar === void 0) { headerToolBar = builtInHeaderToolbar; }
        if (searchAddons === void 0) { searchAddons = defaultSearchAddons; }
        if (replaceAddons === void 0) { replaceAddons = defaultReplaceAddons; }
        if (value === void 0) { value = ''; }
        if (replaceValue === void 0) { replaceValue = ''; }
        if (isCaseSensitive === void 0) { isCaseSensitive = false; }
        if (isWholeWords === void 0) { isWholeWords = false; }
        if (isRegex === void 0) { isRegex = false; }
        if (preserveCase === void 0) { preserveCase = false; }
        this.value = '';
        this.replaceValue = '';
        this.isRegex = false;
        this.isCaseSensitive = false;
        this.isWholeWords = false;
        this.preserveCase = false;
        this.headerToolBar = headerToolBar;
        this.searchAddons = searchAddons;
        this.replaceAddons = replaceAddons;
        this.value = value;
        this.replaceValue = replaceValue;
        this.isCaseSensitive = isCaseSensitive;
        this.isWholeWords = isWholeWords;
        this.isRegex = isRegex;
        this.preserveCase = preserveCase;
    }
    ISearchModel = __decorate([
        tsyringe_1.injectable(),
        __metadata("design:paramtypes", [Array, Array, Array, Object, Object, Object, Object, Object, Object])
    ], ISearchModel);
    return ISearchModel;
}());
exports.ISearchModel = ISearchModel;
//# sourceMappingURL=search.js.map