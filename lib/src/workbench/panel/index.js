"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanelView = void 0;
var mo_1 = require("mo");
var controller_1 = require("mo/controller");
var panel_1 = require("./panel");
var PanelView = mo_1.connect(mo_1.panelService, panel_1.default, controller_1.panelController);
exports.PanelView = PanelView;
//# sourceMappingURL=index.js.map