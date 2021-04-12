"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indicatorClassName = exports.keybindingClassName = exports.menuContentClassName = exports.labelClassName = exports.checkClassName = exports.defaultMenuItemClassName = exports.horizontalMenuClassName = exports.verticalMenuClassName = exports.defaultSubMenuClassName = exports.defaultMenuClassName = void 0;
var className_1 = require("mo/common/className");
exports.defaultMenuClassName = className_1.prefixClaName('menu');
exports.defaultSubMenuClassName = className_1.prefixClaName('sub-menu');
exports.verticalMenuClassName = className_1.getBEMModifier(exports.defaultMenuClassName, 'vertical');
exports.horizontalMenuClassName = className_1.getBEMModifier(exports.defaultMenuClassName, 'horizontal');
exports.defaultMenuItemClassName = className_1.getBEMElement(exports.defaultMenuClassName, 'item');
exports.checkClassName = className_1.getBEMElement(exports.defaultMenuClassName, 'check');
exports.labelClassName = className_1.getBEMElement(exports.defaultMenuClassName, 'label');
exports.menuContentClassName = className_1.getBEMElement(exports.defaultMenuClassName, 'content');
exports.keybindingClassName = className_1.getBEMElement(exports.defaultMenuClassName, 'keybinding');
exports.indicatorClassName = className_1.getBEMElement(exports.defaultMenuClassName, 'indicator');
//# sourceMappingURL=base.js.map