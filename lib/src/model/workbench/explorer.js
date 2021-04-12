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
exports.IExplorerModel = exports.TreeNodeModel = exports.DEFAULT_PANELS = exports.OUTLINE_PANEL = exports.EDITOR_PANEL = exports.folderPanelContextMenu = exports.fileContextMenu = exports.rootFolderContextMenu = exports.baseContextMenu = exports.commonContextMenu = exports.DOWNLOAD_COMMAND_ID = exports.FIND_IN_WORKSPACE_ID = exports.ADD_ROOT_FOLDER_COMMAND_ID = exports.OPEN_TO_SIDE_COMMAND_ID = exports.DELETE_COMMAND_ID = exports.REMOVE_COMMAND_ID = exports.RENAME_COMMAND_ID = exports.NEW_FOLDER_COMMAND_ID = exports.NEW_FILE_COMMAND_ID = exports.ExplorerEvent = void 0;
var React = require("react");
require("reflect-metadata");
var tsyringe_1 = require("tsyringe");
var tree_1 = require("mo/components/tree");
var utils_1 = require("mo/common/utils");
var ExplorerEvent;
(function (ExplorerEvent) {
    ExplorerEvent["onClick"] = "explorer.onClick";
})(ExplorerEvent = exports.ExplorerEvent || (exports.ExplorerEvent = {}));
exports.NEW_FILE_COMMAND_ID = 'explorer.newFile';
exports.NEW_FOLDER_COMMAND_ID = 'explorer.newFolder';
exports.RENAME_COMMAND_ID = 'explorer.rename';
exports.REMOVE_COMMAND_ID = 'explorer.remove';
exports.DELETE_COMMAND_ID = 'explorer.delete';
exports.OPEN_TO_SIDE_COMMAND_ID = 'explorer.openToSide';
exports.ADD_ROOT_FOLDER_COMMAND_ID = 'addRootFolder';
exports.FIND_IN_WORKSPACE_ID = 'filesExplorer.findInWorkspace';
exports.DOWNLOAD_COMMAND_ID = 'explorer.download';
var builtInHeaderToolbar = [
    {
        id: 'explorer-more',
        name: 'View and More Actions...',
        iconName: 'codicon-ellipsis',
        type: 'global',
        contextMenu: [
            {
                id: 'OpenEditors',
                name: 'Open Editors',
                icon: 'check',
            },
            {
                id: 'Folders',
                name: 'Folders',
                icon: 'check',
            },
            {
                id: 'Outline',
                name: 'Outline',
                icon: 'check',
            },
        ],
    },
];
// TODO: name property extract, to adapt Localize,
// TODO: Refactor the constants naming to uppercase_underline format
exports.commonContextMenu = [
    {
        id: exports.RENAME_COMMAND_ID,
        name: 'Rename',
    },
    {
        id: exports.DELETE_COMMAND_ID,
        name: 'Delete',
    },
];
exports.baseContextMenu = [
    {
        id: exports.NEW_FILE_COMMAND_ID,
        name: 'New File',
    },
    {
        id: exports.NEW_FOLDER_COMMAND_ID,
        name: 'New Folder',
    },
];
exports.rootFolderContextMenu = [
    {
        id: exports.REMOVE_COMMAND_ID,
        name: 'Remove Folder',
    },
];
exports.fileContextMenu = [
    {
        id: exports.OPEN_TO_SIDE_COMMAND_ID,
        name: 'Open to the Side',
    },
];
// Sample folder panel area ContextMenu
exports.folderPanelContextMenu = [
    {
        id: exports.ADD_ROOT_FOLDER_COMMAND_ID,
        name: 'Add Folder to Workspace...',
    },
    {
        id: exports.FIND_IN_WORKSPACE_ID,
        name: 'Find in Workspace...',
    },
    {
        id: exports.DOWNLOAD_COMMAND_ID,
        name: 'Download...',
    },
];
// Dedault Panel
exports.EDITOR_PANEL = {
    id: 'OpenEditors',
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
    id: 'Outline',
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
exports.DEFAULT_PANELS = [exports.EDITOR_PANEL, exports.OUTLINE_PANEL];
var TreeNodeModel = /** @class */ (function () {
    function TreeNodeModel(props) {
        if (props === void 0) { props = {}; }
        var id = props.id, _a = props.name, name = _a === void 0 ? '' : _a, _b = props.location, location = _b === void 0 ? '' : _b, _c = props.fileType, fileType = _c === void 0 ? tree_1.FileTypes.file : _c, _d = props.children, children = _d === void 0 ? [] : _d, _e = props.icon, icon = _e === void 0 ? '' : _e, _f = props.modify, modify = _f === void 0 ? false : _f, _g = props.value, value = _g === void 0 ? '' : _g;
        this.fileType = fileType;
        this.modify = modify;
        this.name = name;
        this.id = id || utils_1.randomId();
        this.location = location;
        this.children = children;
        this.icon = icon;
        this.value = value;
    }
    return TreeNodeModel;
}());
exports.TreeNodeModel = TreeNodeModel;
var builtInFolderTree = {
    contextMenu: exports.commonContextMenu,
    current: null,
    folderPanelContextMenu: exports.folderPanelContextMenu,
    data: [],
};
var IExplorerModel = /** @class */ (function () {
    function IExplorerModel(data, folderTree, headerToolBar) {
        if (data === void 0) { data = exports.DEFAULT_PANELS; }
        if (folderTree === void 0) { folderTree = builtInFolderTree; }
        if (headerToolBar === void 0) { headerToolBar = builtInHeaderToolbar; }
        this.data = exports.DEFAULT_PANELS;
        this.data = data;
        this.folderTree = folderTree;
        this.headerToolBar = headerToolBar;
    }
    IExplorerModel = __decorate([
        tsyringe_1.injectable(),
        __metadata("design:paramtypes", [Array, Object, Array])
    ], IExplorerModel);
    return IExplorerModel;
}());
exports.IExplorerModel = IExplorerModel;
//# sourceMappingURL=explorer.js.map