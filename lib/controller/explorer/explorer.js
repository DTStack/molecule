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
var controller_1 = require("mo/react/controller");
var tsyringe_1 = require("tsyringe");
var mo_1 = require("mo");
var React = require("react");
var explore_1 = require("mo/workbench/sidebar/explore");
var ExplorerController = /** @class */ (function (_super) {
    __extends(ExplorerController, _super);
    function ExplorerController() {
        var _this = _super.call(this) || this;
        _this.createFile = function (e, type) {
            var _a, _b;
            e.stopPropagation();
            var explorerState = mo_1.explorerService.getState();
            var _c = (explorerState === null || explorerState === void 0 ? void 0 : explorerState.folderTree) || {}, data = _c.data, current = _c.current;
            // The current selected node id or the first root node
            var nodeId = (current === null || current === void 0 ? void 0 : current.id) || ((_a = data === null || data === void 0 ? void 0 : data[0]) === null || _a === void 0 ? void 0 : _a.id);
            (_b = mo_1.explorerService[type]) === null || _b === void 0 ? void 0 : _b.call(mo_1.explorerService, nodeId);
        };
        _this.onClick = function (event) {
            // console.log('onClick:', panelService);
        };
        _this.onHeaderToolbarClick = function (e, item) {
            e.stopPropagation();
            console.log('onClick:', e, item);
        };
        _this.initView();
        return _this;
    }
    ExplorerController.prototype.initView = function () {
        var _this = this;
        var state = mo_1.activityBarService.getState();
        var sideBarState = mo_1.sidebarService.getState();
        var explorerState = mo_1.explorerService.getState();
        var exploreActiveItem = {
            id: 'active-explorer',
            name: 'Explore',
            iconName: 'codicon-files',
        };
        mo_1.activityBarService.setState({
            selected: exploreActiveItem.id,
            data: __spread(state.data, [exploreActiveItem]),
        });
        var explorePane = {
            id: 'explore',
            title: 'EXPLORER',
            render: function () {
                return React.createElement(explore_1.ExplorerView, null);
            },
        };
        mo_1.activityBarService.onSelect(function (e, item) {
            console.log('Search Pane onClick:', e, item);
            if (item.id === exploreActiveItem.id) {
                mo_1.sidebarService.setState({
                    current: explorePane.id,
                });
            }
        });
        // sidebarService.push(explorePane);
        mo_1.sidebarService.setState({
            current: explorePane.id,
            panes: __spread(sideBarState.panes, [explorePane]),
        });
        /**
         * explorer service
         * includes collapse and tree
         */
        var editorPanel = {
            id: 'editors',
            name: 'OPEN EDITORS',
            toolbar: [
                {
                    id: 'toggle',
                    title: 'Toggle Vertical',
                    disabled: true,
                    iconName: 'codicon-editor-layout',
                },
                {
                    id: 'save',
                    title: 'Save All',
                    disabled: true,
                    iconName: 'codicon-save-all',
                },
                {
                    id: 'close',
                    title: 'Close All Editors',
                    iconName: 'codicon-close-all',
                },
            ],
            renderPanel: function () {
                return React.createElement("span", null, "editors");
            },
        };
        var sampleFolderPanel = {
            id: 'sample_folder',
            name: 'Sample Folder',
            toolbar: [
                {
                    id: 'new_file',
                    title: 'New File',
                    iconName: 'codicon-new-file',
                    onClick: function (e) {
                        _this.createFile(e, 'newFile');
                    },
                },
                {
                    id: 'new_folder',
                    title: 'New Folder',
                    iconName: 'codicon-new-folder',
                    onClick: function (e) {
                        _this.createFile(e, 'newFolder');
                    },
                },
                {
                    id: 'refresh',
                    title: 'Refresh Explorer',
                    iconName: 'codicon-refresh',
                },
                {
                    id: 'collapse',
                    title: 'Collapse Folders in Explorer',
                    iconName: 'codicon-collapse-all',
                },
            ],
            renderPanel: function () {
                var _a, _b;
                var folderProps = {
                    data: (_a = explorerState.folderTree) === null || _a === void 0 ? void 0 : _a.data,
                    contextMenu: (_b = explorerState.folderTree) === null || _b === void 0 ? void 0 : _b.contextMenu,
                };
                return React.createElement(explore_1.FolderTreeView, __assign({}, folderProps));
            },
        };
        var outlinePanel = {
            id: 'outline',
            name: 'OUTLINE',
            toolbar: [
                {
                    id: 'outline-collapse',
                    title: 'Collapse All',
                    iconName: 'codicon-collapse-all',
                },
                {
                    id: 'outline-more',
                    title: 'More Actions...',
                    iconName: 'codicon-ellipsis',
                },
            ],
        };
        mo_1.explorerService.addPanel([
            editorPanel,
            sampleFolderPanel,
            outlinePanel,
        ]);
    };
    ExplorerController = __decorate([
        tsyringe_1.singleton(),
        __metadata("design:paramtypes", [])
    ], ExplorerController);
    return ExplorerController;
}(controller_1.Controller));
exports.ExplorerController = ExplorerController;
//# sourceMappingURL=explorer.js.map