"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IContributeType = exports.IExtensionType = void 0;
/**
 * Defines extension types
 */
var IExtensionType;
(function (IExtensionType) {
    IExtensionType["Theme"] = "Themes";
    IExtensionType["Normal"] = "normal";
    IExtensionType["Settings"] = "settings";
    IExtensionType["Locals"] = "locals";
    IExtensionType["Menus"] = "menus";
    IExtensionType["Workbench"] = "workbench";
})(IExtensionType = exports.IExtensionType || (exports.IExtensionType = {}));
var IContributeType;
(function (IContributeType) {
    IContributeType["Languages"] = "languages";
    IContributeType["Commands"] = "commands";
    IContributeType["Configuration"] = "configuration";
    IContributeType["Grammar"] = "grammars";
    IContributeType["Themes"] = "themes";
    IContributeType["IconTheme"] = "iconThemes";
})(IContributeType = exports.IContributeType || (exports.IContributeType = {}));
//# sourceMappingURL=extension.js.map