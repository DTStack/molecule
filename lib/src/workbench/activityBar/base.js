"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indicatorClassName = exports.labelClassName = exports.itemDisabledClassName = exports.itemCheckedClassName = exports.itemClassName = exports.globalItemsClassName = exports.normalItemsClassName = exports.containerClassName = exports.defaultClassName = void 0;
var className_1 = require("mo/common/className");
var id_1 = require("mo/common/id");
exports.defaultClassName = className_1.prefixClaName(id_1.ID_ACTIVITY_BAR);
exports.containerClassName = className_1.getBEMElement(exports.defaultClassName, 'container');
exports.normalItemsClassName = className_1.getBEMElement(exports.defaultClassName, 'normal');
exports.globalItemsClassName = className_1.getBEMElement(exports.defaultClassName, 'global');
exports.itemClassName = className_1.getBEMElement(exports.defaultClassName, 'item');
exports.itemCheckedClassName = className_1.getBEMModifier(exports.itemClassName, 'checked');
exports.itemDisabledClassName = className_1.getBEMModifier(exports.itemClassName, 'disabled');
exports.labelClassName = className_1.getBEMElement(exports.defaultClassName, 'label');
exports.indicatorClassName = className_1.getBEMElement(exports.defaultClassName, 'indicator');
//# sourceMappingURL=base.js.map