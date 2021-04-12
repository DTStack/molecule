"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchPanel = exports.SearchPanelView = void 0;
var react_1 = require("mo/react");
var services_1 = require("mo/services");
var controller_1 = require("mo/controller");
var searchPanel_1 = require("./searchPanel");
exports.SearchPanel = searchPanel_1.default;
var SearchPanelView = react_1.connect(services_1.searchService, searchPanel_1.default, controller_1.searchController);
exports.SearchPanelView = SearchPanelView;
//# sourceMappingURL=index.js.map