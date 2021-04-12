"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activityBarItemFloatClassName = exports.defaultExplorerClassName = exports.defaultClassName = void 0;
var className_1 = require("mo/common/className");
var id_1 = require("mo/common/id");
exports.defaultClassName = className_1.prefixClaName(id_1.ID_SIDE_BAR);
var defaultExplorerClassName = className_1.prefixClaName(id_1.ID_EXPLORER, exports.defaultClassName);
exports.defaultExplorerClassName = defaultExplorerClassName;
var activityBarItemFloatClassName = className_1.getBEMModifier(className_1.getBEMElement(defaultExplorerClassName, id_1.ID_ACTIVITY_BAR), 'float');
exports.activityBarItemFloatClassName = activityBarItemFloatClassName;
//# sourceMappingURL=base.js.map