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
exports.ExplorerService = void 0;
var tsyringe_1 = require("tsyringe");
var component_1 = require("mo/react/component");
var explorer_1 = require("mo/model/workbench/explorer/explorer");
var helper_1 = require("../../helper");
var ExplorerService = /** @class */ (function (_super) {
    __extends(ExplorerService, _super);
    function ExplorerService() {
        var _this = _super.call(this) || this;
        _this.state = tsyringe_1.container.resolve(explorer_1.IExplorerModel);
        return _this;
    }
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
    ExplorerService.prototype.remove = function (id) {
        var data = this.state.data;
        var next = __spread(data);
        var index = next.findIndex(helper_1.searchById(id));
        if (index > -1) {
            next.splice(index, 1);
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
    ExplorerService.prototype.onClick = function (callback) {
        this.subscribe(explorer_1.ExplorerEvent.onClick, callback);
    };
    ExplorerService.prototype.togglePanel = function (id) {
        var data = this.state.data;
        var next = __spread(data);
        var index = next.findIndex(helper_1.searchById(id));
        if (index > -1) {
            this.remove(id);
        }
        else {
            var existPanel = explorer_1.DEFAULT_PANELS.concat([
                explorer_1.SAMPLE_FOLDER_PANEL,
            ]).find(helper_1.searchById(id));
            if (!existPanel)
                return;
            this.addPanel(existPanel);
        }
        this.updateActionsCheckStatus(id);
    };
    ExplorerService.prototype.addAction = function (action) {
        var headerToolBar = this.state.headerToolBar;
        var newActions = headerToolBar === null || headerToolBar === void 0 ? void 0 : headerToolBar.contextMenu;
        if (Array.isArray(action)) {
            newActions = newActions === null || newActions === void 0 ? void 0 : newActions.concat(action);
        }
        else {
            newActions === null || newActions === void 0 ? void 0 : newActions.push(action);
        }
        var next = __assign(__assign({}, headerToolBar), { contextMenu: newActions });
        this.setState({
            headerToolBar: next,
        });
    };
    ExplorerService.prototype.removeAction = function (id) {
        var headerToolBar = this.state.headerToolBar;
        var newActions = (headerToolBar === null || headerToolBar === void 0 ? void 0 : headerToolBar.contextMenu) || [];
        var index = newActions === null || newActions === void 0 ? void 0 : newActions.findIndex(helper_1.searchById(id));
        if (index > -1) {
            newActions.splice(index, 1);
        }
        var next = __assign(__assign({}, headerToolBar), { contextMenu: newActions });
        this.setState({
            headerToolBar: next,
        });
    };
    ExplorerService.prototype.updateActionsCheckStatus = function (id) {
        var _a;
        var _b = this.state, headerToolBar = _b.headerToolBar, data = _b.data;
        var existPanel = data === null || data === void 0 ? void 0 : data.find(helper_1.searchById(id));
        var newActions = (_a = headerToolBar === null || headerToolBar === void 0 ? void 0 : headerToolBar.contextMenu) === null || _a === void 0 ? void 0 : _a.map(function (item) {
            return __assign(__assign({}, item), { icon: item.id === id
                    ? Boolean(existPanel)
                        ? 'check'
                        : ''
                    : item.icon });
        });
        var next = __assign(__assign({}, headerToolBar), { contextMenu: newActions });
        this.setState({
            headerToolBar: next,
        });
    };
    ExplorerService.prototype.updateRender = function () {
        this.render();
    };
    ExplorerService = __decorate([
        tsyringe_1.singleton(),
        __metadata("design:paramtypes", [])
    ], ExplorerService);
    return ExplorerService;
}(component_1.Component));
exports.ExplorerService = ExplorerService;
//# sourceMappingURL=explorerService.js.map