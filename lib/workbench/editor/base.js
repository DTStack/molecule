"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupBreadcrumbClassName = exports.groupActionsItemClassName = exports.groupActionsClassName = exports.groupTabsClassName = exports.groupHeaderClassName = exports.groupContainerClassName = exports.groupClassName = exports.defaultEditorClassName = void 0;
var className_1 = require("mo/common/className");
exports.defaultEditorClassName = className_1.prefixClaName('editor');
exports.groupClassName = className_1.getBEMElement(exports.defaultEditorClassName, 'group');
exports.groupContainerClassName = className_1.getBEMElement(exports.defaultEditorClassName, 'group-container');
exports.groupHeaderClassName = className_1.getBEMElement(exports.defaultEditorClassName, 'group-header');
exports.groupTabsClassName = className_1.getBEMElement(exports.defaultEditorClassName, 'group-tabs');
exports.groupActionsClassName = className_1.getBEMElement(exports.defaultEditorClassName, 'group-actions');
exports.groupActionsItemClassName = className_1.getBEMElement(exports.defaultEditorClassName, 'group-actions-item');
exports.groupBreadcrumbClassName = className_1.getBEMElement(exports.defaultEditorClassName, 'group-breadcrumb');
//# sourceMappingURL=base.js.map