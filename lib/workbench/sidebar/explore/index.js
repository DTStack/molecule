"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderTree = exports.FolderTreeView = exports.Explorer = exports.ExplorerView = void 0;
var react_1 = require("mo/react");
var services_1 = require("mo/services");
var controller_1 = require("mo/controller");
var explore_1 = require("./explore");
Object.defineProperty(exports, "Explorer", { enumerable: true, get: function () { return explore_1.Explorer; } });
var folderTree_1 = require("./folderTree");
exports.FolderTree = folderTree_1.default;
var ExplorerView = react_1.connect(services_1.explorerService, explore_1.Explorer, controller_1.explorerController);
exports.ExplorerView = ExplorerView;
var FolderTreeView = react_1.connect(services_1.explorerService, folderTree_1.default, controller_1.folderTreeController);
exports.FolderTreeView = FolderTreeView;
//# sourceMappingURL=index.js.map