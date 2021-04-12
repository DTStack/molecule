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
Object.defineProperty(exports, "__esModule", { value: true });
exports.monacoService = exports.MonacoService = void 0;
require("reflect-metadata");
var tsyringe_1 = require("tsyringe");
var standaloneCodeEditor_1 = require("monaco-editor/esm/vs/editor/standalone/browser/standaloneCodeEditor");
var simpleServices_1 = require("monaco-editor/esm/vs/editor/standalone/browser/simpleServices");
var resolverService_1 = require("monaco-editor/esm/vs/editor/common/services/resolverService");
var standaloneServices_1 = require("monaco-editor/esm/vs/editor/standalone/browser/standaloneServices");
var instantiation_1 = require("monaco-editor/esm/vs/platform/instantiation/common/instantiation");
var codeEditorService_1 = require("monaco-editor/esm/vs/editor/browser/services/codeEditorService");
var commands_1 = require("monaco-editor/esm/vs/platform/commands/common/commands");
var contextkey_1 = require("monaco-editor/esm/vs/platform/contextkey/common/contextkey");
var keybinding_1 = require("monaco-editor/esm/vs/platform/keybinding/common/keybinding");
var contextView_1 = require("monaco-editor/esm/vs/platform/contextview/browser/contextView");
var standaloneThemeService_1 = require("monaco-editor/esm/vs/editor/standalone/common/standaloneThemeService");
var notification_1 = require("monaco-editor/esm/vs/platform/notification/common/notification");
var configuration_1 = require("monaco-editor/esm/vs/platform/configuration/common/configuration");
var accessibility_1 = require("monaco-editor/esm/vs/platform/accessibility/common/accessibility");
var opener_1 = require("monaco-editor/esm/vs/platform/opener/common/opener");
var openerService_1 = require("monaco-editor/esm/vs/editor/browser/services/openerService");
var quickInput_1 = require("monaco-editor/esm/vs/platform/quickinput/browser/quickInput");
var quickInput_2 = require("monaco-editor/esm/vs/platform/quickinput/common/quickInput");
var layoutService_1 = require("monaco-editor/esm/vs/platform/layout/browser/layoutService");
var id_1 = require("mo/common/id");
var MonacoService = /** @class */ (function () {
    function MonacoService() {
        this.simpleEditorModelResolverService = null;
    }
    Object.defineProperty(MonacoService.prototype, "services", {
        get: function () {
            if (!this._services) {
                this._services = this.createStandaloneServices();
            }
            return this._services;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonacoService.prototype, "container", {
        get: function () {
            return document.getElementById(id_1.ID_APP);
        },
        enumerable: false,
        configurable: true
    });
    MonacoService.prototype.mergeEditorServices = function (overrides) {
        if (overrides) {
            var services = this.services;
            for (var serviceId in overrides) {
                if (serviceId) {
                    var service = services.get(serviceId);
                    if (service && overrides[serviceId]) {
                        services.set(serviceId, overrides[serviceId]);
                    }
                }
            }
        }
    };
    MonacoService.prototype.create = function (domElement, options, overrides) {
        var services = this.services;
        this.mergeEditorServices(overrides);
        var standaloneEditor = new standaloneCodeEditor_1.StandaloneEditor(domElement, options, services, services.get(instantiation_1.IInstantiationService), services.get(codeEditorService_1.ICodeEditorService), services.get(commands_1.ICommandService), services.get(contextkey_1.IContextKeyService), services.get(keybinding_1.IKeybindingService), services.get(contextView_1.IContextViewService), services.get(standaloneThemeService_1.IStandaloneThemeService), services.get(notification_1.INotificationService), services.get(configuration_1.IConfigurationService), services.get(accessibility_1.IAccessibilityService));
        if (this.simpleEditorModelResolverService) {
            this.simpleEditorModelResolverService.setEditor(standaloneEditor);
        }
        return standaloneEditor;
    };
    MonacoService.prototype.createStandaloneServices = function () {
        var services = new standaloneServices_1.DynamicStandaloneServices(this.container);
        this.overrideServices(services);
        if (!services.has(resolverService_1.ITextModelService)) {
            this.simpleEditorModelResolverService = new simpleServices_1.SimpleEditorModelResolverService(standaloneServices_1.StaticServices.modelService.get());
            services.set(resolverService_1.ITextModelService, this.simpleEditorModelResolverService);
        }
        if (!services.has(opener_1.IOpenerService)) {
            services.set(opener_1.IOpenerService, new openerService_1.OpenerService(services.get(codeEditorService_1.ICodeEditorService), services.get(commands_1.ICommandService)));
        }
        return services;
    };
    MonacoService.prototype.overrideServices = function (services) {
        var instantiationService = services.get(instantiation_1.IInstantiationService);
        var quickInputService = instantiationService.createInstance(quickInput_1.QuickInputService);
        var layoutService = new simpleServices_1.SimpleLayoutService(standaloneServices_1.StaticServices.codeEditorService.get(codeEditorService_1.ICodeEditorService), this.container);
        // Override layoutService
        services.set(layoutService_1.ILayoutService, layoutService);
        // Override quickPickService
        services.set(quickInput_2.IQuickInputService, quickInputService);
    };
    MonacoService = __decorate([
        tsyringe_1.singleton(),
        __metadata("design:paramtypes", [])
    ], MonacoService);
    return MonacoService;
}());
exports.MonacoService = MonacoService;
exports.monacoService = tsyringe_1.container.resolve(MonacoService);
//# sourceMappingURL=monacoService.js.map