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
exports.IFolderTreeModel = exports.TreeNodeModel = exports.FOLDER_PANEL_CONTEXT_MENU = exports.FILE_CONTEXT_MENU = exports.ROOT_FOLDER_CONTEXT_MENU = exports.BASE_CONTEXT_MENU = exports.COMMON_CONTEXT_MENU = exports.DOWNLOAD_COMMAND_ID = exports.FIND_IN_WORKSPACE_ID = exports.ADD_ROOT_FOLDER_COMMAND_ID = exports.OPEN_TO_SIDE_COMMAND_ID = exports.DELETE_COMMAND_ID = exports.REMOVE_COMMAND_ID = exports.RENAME_COMMAND_ID = exports.NEW_FOLDER_COMMAND_ID = exports.NEW_FILE_COMMAND_ID = exports.FolderTreeEvent = void 0;
require("reflect-metadata");
var tsyringe_1 = require("tsyringe");
var tree_1 = require("mo/components/tree");
var utils_1 = require("mo/common/utils");
var FolderTreeEvent;
(function (FolderTreeEvent) {
    FolderTreeEvent["onClick"] = "folderTree.onClick";
    FolderTreeEvent["onSelectFile"] = "folderTree.onSelectFile";
})(FolderTreeEvent = exports.FolderTreeEvent || (exports.FolderTreeEvent = {}));
exports.NEW_FILE_COMMAND_ID = 'explorer.newFile';
exports.NEW_FOLDER_COMMAND_ID = 'explorer.newFolder';
exports.RENAME_COMMAND_ID = 'explorer.rename';
exports.REMOVE_COMMAND_ID = 'explorer.remove';
exports.DELETE_COMMAND_ID = 'explorer.delete';
exports.OPEN_TO_SIDE_COMMAND_ID = 'explorer.openToSide';
exports.ADD_ROOT_FOLDER_COMMAND_ID = 'addRootFolder';
exports.FIND_IN_WORKSPACE_ID = 'filesExplorer.findInWorkspace';
exports.DOWNLOAD_COMMAND_ID = 'explorer.download';
exports.COMMON_CONTEXT_MENU = [
    {
        id: exports.RENAME_COMMAND_ID,
        name: 'Rename',
    },
    {
        id: exports.DELETE_COMMAND_ID,
        name: 'Delete',
    },
];
exports.BASE_CONTEXT_MENU = [
    {
        id: exports.NEW_FILE_COMMAND_ID,
        name: 'New File',
    },
    {
        id: exports.NEW_FOLDER_COMMAND_ID,
        name: 'New Folder',
    },
];
exports.ROOT_FOLDER_CONTEXT_MENU = [
    {
        id: exports.REMOVE_COMMAND_ID,
        name: 'Remove Folder',
    },
];
exports.FILE_CONTEXT_MENU = [
    {
        id: exports.OPEN_TO_SIDE_COMMAND_ID,
        name: 'Open to the Side',
    },
];
// Sample folder panel area ContextMenu
exports.FOLDER_PANEL_CONTEXT_MENU = [
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
var TreeNodeModel = /** @class */ (function () {
    function TreeNodeModel(props) {
        if (props === void 0) { props = {}; }
        var id = props.id, _a = props.name, name = _a === void 0 ? '' : _a, _b = props.location, location = _b === void 0 ? '' : _b, _c = props.fileType, fileType = _c === void 0 ? tree_1.FileTypes.file : _c, _d = props.children, children = _d === void 0 ? [] : _d, _e = props.icon, icon = _e === void 0 ? '' : _e, _f = props.isEditable, isEditable = _f === void 0 ? false : _f, _g = props.content, content = _g === void 0 ? '' : _g;
        this.fileType = fileType;
        this.isEditable = isEditable;
        this.name = name;
        this.id = id || utils_1.randomId();
        this.location = location;
        this.children = children;
        this.icon = icon;
        this.content = content;
    }
    return TreeNodeModel;
}());
exports.TreeNodeModel = TreeNodeModel;
var builtInFolderTree = {
    contextMenu: exports.COMMON_CONTEXT_MENU,
    current: null,
    folderPanelContextMenu: exports.FOLDER_PANEL_CONTEXT_MENU,
    data: [],
};
var IFolderTreeModel = /** @class */ (function () {
    function IFolderTreeModel(folderTree) {
        if (folderTree === void 0) { folderTree = builtInFolderTree; }
        this.folderTree = folderTree;
    }
    IFolderTreeModel = __decorate([
        tsyringe_1.injectable(),
        __metadata("design:paramtypes", [Object])
    ], IFolderTreeModel);
    return IFolderTreeModel;
}());
exports.IFolderTreeModel = IFolderTreeModel;
//# sourceMappingURL=folderTree.js.map