"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuBarView = exports.MenuBar = void 0;
require("mo/workbench/menuBar/style.scss");
var services_1 = require("mo/services");
var react_1 = require("mo/react");
var menuBar_1 = require("./menuBar");
exports.MenuBar = menuBar_1.default;
var controller_1 = require("mo/controller");
var MenuBarView = react_1.connect(services_1.menuBarService, menuBar_1.default, controller_1.menuBarController);
exports.MenuBarView = MenuBarView;
//# sourceMappingURL=index.js.map