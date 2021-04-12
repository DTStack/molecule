"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IExplorerModel = exports.TreeNodeModel = exports.ExplorerEvent = void 0;
require("reflect-metadata");
var tsyringe_1 = require("tsyringe");
var tree_1 = require("mo/components/tree");
var ExplorerEvent;
(function (ExplorerEvent) {
    ExplorerEvent["onClick"] = "explorer.onClick";
})(ExplorerEvent = exports.ExplorerEvent || (exports.ExplorerEvent = {}));
var builtInHeaderToolbar = [
    {
        id: 'explorer-more',
        title: 'View and More Actions...',
        iconName: 'codicon-ellipsis',
    },
];
var commonContextMenu = [
    {
        id: 'rename',
        name: 'Rename',
    },
    {
        id: 'delete',
        name: 'Delete',
    },
];
var TreeNodeModel = /** @class */ (function () {
    function TreeNodeModel(props) {
        if (props === void 0) { props = {}; }
        var id = props.id, _a = props.name, name = _a === void 0 ? '' : _a, _b = props.location, location = _b === void 0 ? '' : _b, _c = props.fileType, fileType = _c === void 0 ? tree_1.FileTypes.file : _c, _d = props.children, children = _d === void 0 ? [] : _d, _e = props.icon, icon = _e === void 0 ? '' : _e, _f = props.modify, modify = _f === void 0 ? false : _f;
        (this.fileType = fileType),
            (this.modify = modify),
            (this.name = name),
            (this.id = id || Math.random() * 10 + 1),
            (this.location = location),
            (this.children = children),
            (this.icon = icon);
    }
    return TreeNodeModel;
}());
exports.TreeNodeModel = TreeNodeModel;
var IExplorerModel = /** @class */ (function () {
    function IExplorerModel() {
        this.data = [];
        this.folderTree = {
            contextMenu: commonContextMenu,
            current: null,
            data: [],
        };
        this.headerToolBar = builtInHeaderToolbar;
    }
    IExplorerModel = __decorate([
        tsyringe_1.injectable()
    ], IExplorerModel);
    return IExplorerModel;
}());
exports.IExplorerModel = IExplorerModel;
//# sourceMappingURL=explorer.js.map