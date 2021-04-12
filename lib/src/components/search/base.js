"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceBtnClassName = exports.searchContainerClassName = exports.replaceContainerClassName = exports.searchToolBarClassName = exports.defaultSearchClassName = void 0;
var className_1 = require("mo/common/className");
exports.defaultSearchClassName = className_1.prefixClaName('search');
exports.searchToolBarClassName = className_1.getBEMElement(exports.defaultSearchClassName, 'toolbar');
exports.replaceContainerClassName = className_1.getBEMElement(exports.defaultSearchClassName, 'replace');
exports.searchContainerClassName = className_1.getBEMElement(exports.defaultSearchClassName, 'search');
exports.replaceBtnClassName = className_1.getBEMElement(exports.replaceContainerClassName, 'button');
//# sourceMappingURL=base.js.map