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
exports.ExplorerController = void 0;
var React = require("react");
var controller_1 = require("mo/react/controller");
var tsyringe_1 = require("tsyringe");
var services_1 = require("mo/services");
var explore_1 = require("mo/workbench/sidebar/explore");
var menuBar_1 = require("mo/model/workbench/menuBar");
var controller_2 = require("mo/controller");
var explorer_1 = require("mo/model/workbench/explorer/explorer");
var model_1 = require("mo/model");
var ExplorerController = /** @class */ (function (_super) {
    __extends(ExplorerController, _super);
    function ExplorerController() {
        var _this = _super.call(this) || this;
        _this.createFileOrFolder = function (type) {
            var _a, _b;
            var folderTreeState = services_1.folderTreeService.getState();
            var _c = (folderTreeState === null || folderTreeState === void 0 ? void 0 : folderTreeState.folderTree) || {}, data = _c.data, current = _c.current;
            // The current selected node id or the first root node
            var nodeId = (current === null || current === void 0 ? void 0 : current.id) || ((_a = data === null || data === void 0 ? void 0 : data[0]) === null || _a === void 0 ? void 0 : _a.id);
            (_b = services_1.folderTreeService[type]) === null || _b === void 0 ? void 0 : _b.call(services_1.folderTreeService, nodeId);
        };
        _this.onClick = function (event, item) {
            _this.emit(explorer_1.ExplorerEvent.onClick, event, item);
        };
        _this.onActionsContextMenuClick = function (e, item) {
            console.log('onActionsContextMenuClick', e, item);
            var panelId = item === null || item === void 0 ? void 0 : item.id;
            services_1.explorerService.togglePanel(panelId);
        };
        _this.onCollapseChange = function (keys) {
            _this.emit(explorer_1.ExplorerEvent.onCollapseChange, keys);
        };
        _this.onCollapseToolbar = function (item) {
            console.log('item', item);
            var toolbarId = item.id;
            switch (toolbarId) {
                case model_1.NEW_FILE_COMMAND_ID: {
                    _this.createFileOrFolder('newFile');
                    break;
                }
                case model_1.NEW_FOLDER_COMMAND_ID: {
                    _this.createFileOrFolder('newFolder');
                    break;
                }
                default:
                    console.log('onCollapseToolbar');
            }
        };
        _this.initView();
        return _this;
    }
    ExplorerController.prototype.initView = function () {
        var ctx = this;
        var state = services_1.activityBarService.getState();
        var sideBarState = services_1.sidebarService.getState();
        var exploreActiveItem = {
            id: 'active-explorer',
            name: 'Explore',
            iconName: 'codicon-files',
        };
        services_1.activityBarService.setState({
            selected: exploreActiveItem.id,
            data: __spread(state.data, [exploreActiveItem]),
        });
        var explorerEvent = {
            onClick: ctx.onClick,
            onCollapseChange: ctx.onCollapseChange,
            onActionsContextMenuClick: ctx.onActionsContextMenuClick,
            onCollapseToolbar: ctx.onCollapseToolbar,
        };
        var explorePane = {
            id: 'explore',
            title: 'EXPLORER',
            render: function () {
                return React.createElement(explore_1.ExplorerView, __assign({}, explorerEvent));
            },
        };
        services_1.activityBarService.onSelect(function (e, item) {
            var hidden = services_1.sidebarService.getState().hidden;
            if (item.id === exploreActiveItem.id) {
                var isShow = hidden ? !hidden : hidden;
                services_1.sidebarService.setState({
                    current: explorePane.id,
                    hidden: isShow,
                });
                services_1.menuBarService.update(menuBar_1.MENU_VIEW_SIDEBAR, {
                    icon: 'check',
                });
            }
        });
        services_1.sidebarService.setState({
            current: explorePane.id,
            panes: __spread(sideBarState.panes, [explorePane]),
        });
        services_1.explorerService.addPanel([
            __assign(__assign({}, model_1.SAMPLE_FOLDER_PANEL), { renderPanel: this.renderFolderTree }),
        ]);
    };
    ExplorerController.prototype.renderFolderTree = function () {
        var _a;
        return (React.createElement(explore_1.FolderTreeView, __assign({}, (_a = services_1.folderTreeService.getState()) === null || _a === void 0 ? void 0 : _a.folderTree, controller_2.folderTreeController)));
    };
    ExplorerController = __decorate([
        tsyringe_1.singleton(),
        __metadata("design:paramtypes", [])
    ], ExplorerController);
    return ExplorerController;
}(controller_1.Controller));
exports.ExplorerController = ExplorerController;
//# sourceMappingURL=explorer.js.map