"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusBarView = void 0;
var controller_1 = require("mo/controller");
var react_1 = require("mo/react");
var services_1 = require("mo/services");
var statusBar_1 = require("./statusBar");
__exportStar(require("./statusBar"), exports);
exports.StatusBarView = react_1.connect(services_1.statusBarService, statusBar_1.default, controller_1.statusBarController);
//# sourceMappingURL=index.js.map