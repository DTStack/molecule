"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionService = void 0;
var error_1 = require("@/common/error");
var extension_1 = require("@/core/extension");
var extensions_1 = require("@/extensions");
var ExtensionService = /** @class */ (function () {
    function ExtensionService(extensionEntry, moleculeCtx) {
        if (extensionEntry === void 0) { extensionEntry = {}; }
        this.extensions = [];
        this.moleculeCtx = moleculeCtx;
        this.load(extensions_1.defaultExtensions, moleculeCtx);
        this.load(extensionEntry, moleculeCtx);
    }
    /**
     * TODO: Current extension service can't parses VSCode theme, so needs to refactor
     * @param param0 extensionEntry object
     * @param moleculeCtx the context object of molecule
     */
    ExtensionService.prototype.load = function (_a, moleculeCtx) {
        var _this = this;
        var location = _a.location, _b = _a.extensions, extensions = _b === void 0 ? [] : _b;
        try {
            if ((extensions === null || extensions === void 0 ? void 0 : extensions.length) === 0)
                return;
            this.extensions = this.extensions.concat(extensions || []);
            extensions === null || extensions === void 0 ? void 0 : extensions.forEach(function (extension, index) {
                if (extension.main) {
                    if (extension.activate) {
                        extension.activate(moleculeCtx);
                    }
                    else {
                        throw new Error(error_1.ErrorMsg.NotFoundActivate);
                    }
                }
                if (extension.contributes) {
                    _this.loadContributes(extension.contributes);
                }
            });
        }
        catch (e) {
            console.error(error_1.ErrorMsg.LoadExtensionFail, e);
        }
    };
    ExtensionService.prototype.loadContributes = function (contributes) {
        var contributeKeys = Object.keys(contributes);
        contributeKeys.forEach(function (type) {
            if (type === extension_1.IContributeType.Commands) {
                console.log('contributeKeys:', type);
                // ThemeService.load(extension[type]);
                // exts.push(extension);
            }
        });
    };
    ExtensionService.prototype.unload = function (id) {
        console.log('unload extension:', id);
    };
    return ExtensionService;
}());
exports.ExtensionService = ExtensionService;
//# sourceMappingURL=extensionService.js.map