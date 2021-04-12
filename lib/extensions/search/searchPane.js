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
var React = require("react");
var toolbar_1 = require("mo/components/toolbar");
var className_1 = require("mo/common/className");
var sidebar_1 = require("mo/workbench/sidebar");
var mo_1 = require("mo");
var select_1 = require("mo/components/select");
var searchTree_1 = require("./searchTree");
var initialState = {
    input: '',
    toolbar: [
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
    ],
};
var explorerState = mo_1.explorerService.getState();
var SearchPane = /** @class */ (function (_super) {
    __extends(SearchPane, _super);
    function SearchPane(props) {
        var _this = _super.call(this, props) || this;
        _this.onClick = function (e, item) {
            console.log('onClick:', e, item);
        };
        _this.onInput = function (e) {
            var nextToolBar = __spread(_this.state.toolbar);
            var value = e.target.value;
            if (!value) {
                nextToolBar.forEach(function (item) {
                    item.disabled = true;
                });
            }
            else {
                nextToolBar.forEach(function (item) {
                    item.disabled = false;
                });
            }
            _this.setState({
                input: value,
                toolbar: nextToolBar,
            });
        };
        _this.onChangeTheme = function (e, option) {
            if (option && option.value) {
                console.log('onChangeTheme:', option.value);
                mo_1.colorThemeService.applyTheme(option.value);
            }
        };
        _this.state = initialState;
        return _this;
    }
    SearchPane.prototype.renderColorThemes = function () {
        var colorThemes = mo_1.colorThemeService.getThemes();
        var defaultTheme = mo_1.colorThemeService.colorTheme;
        var options = colorThemes.map(function (theme) {
            return (React.createElement(select_1.Option, { key: theme.id, value: theme.id }, theme.label));
        });
        return (React.createElement(select_1.Select, { defaultValue: defaultTheme.id, onSelect: this.onChangeTheme }, options));
    };
    SearchPane.prototype.render = function () {
        var _a;
        var toolbar = this.state.toolbar;
        var input = this.state.input;
        return (React.createElement("div", { className: className_1.prefixClaName('search-pane', 'sidebar') },
            React.createElement(sidebar_1.Header, { title: 'Search', toolbar: React.createElement(toolbar_1.default, { data: toolbar, onClick: this.onClick }) }),
            React.createElement(sidebar_1.Content, null,
                React.createElement("h1", null, "Search Pane"),
                React.createElement("p", null, input),
                React.createElement("input", { onInput: this.onInput }),
                input && (React.createElement(searchTree_1.default, { data: (_a = explorerState === null || explorerState === void 0 ? void 0 : explorerState.folderTree) === null || _a === void 0 ? void 0 : _a.data, searchValue: input })))));
    };
    return SearchPane;
}(React.Component));
exports.default = SearchPane;
//# sourceMappingURL=searchPane.js.map