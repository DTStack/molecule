"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionService = void 0;
var tsyringe_1 = require("tsyringe");
var error_1 = require("mo/common/error");
var extension_1 = require("mo/model/extension");
var mo_1 = require("mo");
var logger_1 = require("mo/common/logger");
var ExtensionService = /** @class */ (function () {
    function ExtensionService(extensions) {
        if (extensions === void 0) { extensions = []; }
        this.extensions = [];
        this.load(extensions);
    }
    ExtensionService.prototype.load = function (extensions) {
        var _this = this;
        if (extensions === void 0) { extensions = []; }
        try {
            if ((extensions === null || extensions === void 0 ? void 0 : extensions.length) === 0)
                return;
            this.extensions = this.extensions.concat(extensions);
            logger_1.default.info('ExtensionService.extensions:', this.extensions);
            var ctx_1 = this;
            extensions === null || extensions === void 0 ? void 0 : extensions.forEach(function (extension, index) {
                if (extension && extension.activate) {
                    extension.activate(ctx_1);
                }
                if (extension && extension.contributes) {
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
            switch (type) {
                case extension_1.IContributeType.Themes: {
                    var themes = contributes[type];
                    if (themes) {
                        mo_1.colorThemeService.load(themes);
                    }
                }
            }
        });
    };
    ExtensionService.prototype.unload = function (extension) {
        console.log('unload extension:', extension.name);
    };
    ExtensionService = __decorate([
        tsyringe_1.singleton(),
        __param(0, tsyringe_1.inject('Extensions')),
        __metadata("design:paramtypes", [Array])
    ], ExtensionService);
    return ExtensionService;
}());
exports.ExtensionService = ExtensionService;
tsyringe_1.container.register('Extensions', { useValue: [] });
//# sourceMappingURL=extensionService.js.map