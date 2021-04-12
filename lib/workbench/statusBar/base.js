"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortByIndex = exports.itemClassName = exports.rightItemsClassName = exports.leftItemsClassName = exports.statusBarClassName = void 0;
var className_1 = require("mo/common/className");
exports.statusBarClassName = className_1.prefixClaName('statusBar');
exports.leftItemsClassName = className_1.getBEMElement(exports.statusBarClassName, 'left-items');
exports.rightItemsClassName = className_1.getBEMElement(exports.statusBarClassName, 'right-items');
exports.itemClassName = className_1.getBEMElement(exports.statusBarClassName, 'item');
function sortByIndex(a, b) {
    return a.sortIndex - b.sortIndex;
}
exports.sortByIndex = sortByIndex;
//# sourceMappingURL=base.js.map