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
exports.IExplorerModel = exports.DEFAULT_PANELS = exports.SAMPLE_FOLDER_PANEL = exports.OUTLINE_PANEL = exports.EDITOR_PANEL = exports.OUTLINE_PANEL_ID = exports.EDITOR_PANEL_ID = exports.SAMPLE_FOLDER_PANEL_ID = exports.ExplorerEvent = void 0;
var React = require("react");
require("reflect-metadata");
var tsyringe_1 = require("tsyringe");
var folderTree_1 = require("./folderTree");
var ExplorerEvent;
(function (ExplorerEvent) {
    ExplorerEvent["onClick"] = "explorer.onClick";
    ExplorerEvent["onCollapseChange"] = "explorer.onCollapseChange";
})(ExplorerEvent = exports.ExplorerEvent || (exports.ExplorerEvent = {}));
exports.SAMPLE_FOLDER_PANEL_ID = 'Folders';
exports.EDITOR_PANEL_ID = 'OpenEditors';
exports.OUTLINE_PANEL_ID = 'Outline';
var builtInHeaderToolbar = {
    id: 'explorer-more',
    title: 'View and More Actions...',
    iconName: 'codicon-ellipsis',
    contextMenu: [
        {
            id: exports.EDITOR_PANEL_ID,
            title: 'Open Editors',
            name: 'Open Editors',
            icon: 'check',
        },
        {
            id: exports.SAMPLE_FOLDER_PANEL_ID,
            title: 'Folders',
            name: 'Folders',
            disabled: true,
            icon: 'check',
        },
        {
            id: exports.OUTLINE_PANEL_ID,
            title: 'Outline',
            name: 'Outline',
            icon: 'check',
        },
    ],
};
// Dedault Panel
exports.EDITOR_PANEL = {
    id: exports.EDITOR_PANEL_ID,
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
exports.OUTLINE_PANEL = {
    id: exports.OUTLINE_PANEL_ID,
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
exports.SAMPLE_FOLDER_PANEL = {
    id: exports.SAMPLE_FOLDER_PANEL_ID,
    name: 'Sample Folder',
    className: 'samplefolder',
    toolbar: [
        {
            id: folderTree_1.NEW_FILE_COMMAND_ID,
            title: 'New File',
            iconName: 'codicon-new-file',
        },
        {
            id: folderTree_1.NEW_FOLDER_COMMAND_ID,
            title: 'New Folder',
            iconName: 'codicon-new-folder',
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
};
exports.DEFAULT_PANELS = [exports.EDITOR_PANEL, exports.OUTLINE_PANEL];
var IExplorerModel = /** @class */ (function () {
    function IExplorerModel(data, headerToolBar) {
        if (data === void 0) { data = exports.DEFAULT_PANELS; }
        if (headerToolBar === void 0) { headerToolBar = builtInHeaderToolbar; }
        this.data = exports.DEFAULT_PANELS;
        this.data = data;
        this.headerToolBar = headerToolBar;
    }
    IExplorerModel = __decorate([
        tsyringe_1.injectable(),
        __metadata("design:paramtypes", [Array, Object])
    ], IExplorerModel);
    return IExplorerModel;
}());
exports.IExplorerModel = IExplorerModel;
//# sourceMappingURL=explorer.js.map