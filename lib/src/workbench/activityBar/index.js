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
exports.ActivityBarView = exports.ActivityBarItem = void 0;
var services_1 = require("mo/services");
var react_1 = require("mo/react");
var activityBar_1 = require("mo/controller/activityBar");
var activityBar_2 = require("./activityBar");
var tsyringe_1 = require("tsyringe");
__exportStar(require("./activityBar"), exports);
var activityBarItem_1 = require("./activityBarItem");
Object.defineProperty(exports, "ActivityBarItem", { enumerable: true, get: function () { return activityBarItem_1.default; } });
var activityBarController = tsyringe_1.container.resolve(activityBar_1.ActivityBarController);
exports.ActivityBarView = react_1.connect(services_1.activityBarService, activityBar_2.default, activityBarController);
//# sourceMappingURL=index.js.map