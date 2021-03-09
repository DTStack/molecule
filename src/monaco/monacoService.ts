import 'reflect-metadata';
import { singleton } from 'tsyringe';

import {
    IStandaloneEditorConstructionOptions,
    IStandaloneCodeEditor,
    StandaloneEditor,
} from 'monaco-editor/esm/vs/editor/standalone/browser/standaloneCodeEditor';

import {
    SimpleEditorModelResolverService,
    SimpleLayoutService,
} from 'monaco-editor/esm/vs/editor/standalone/browser/simpleServices';
import { ITextModelService } from 'monaco-editor/esm/vs/editor/common/services/resolverService';
import {
    StaticServices,
    IEditorOverrideServices,
    DynamicStandaloneServices,
} from 'monaco-editor/esm/vs/editor/standalone/browser/standaloneServices';
import { IInstantiationService } from 'monaco-editor/esm/vs/platform/instantiation/common/instantiation';
import { ICodeEditorService } from 'monaco-editor/esm/vs/editor/browser/services/codeEditorService';
import { ICommandService } from 'monaco-editor/esm/vs/platform/commands/common/commands';
import { IContextKeyService } from 'monaco-editor/esm/vs/platform/contextkey/common/contextkey';
import { IKeybindingService } from 'monaco-editor/esm/vs/platform/keybinding/common/keybinding';
import { IContextViewService } from 'monaco-editor/esm/vs/platform/contextview/browser/contextView';
import { IStandaloneThemeService } from 'monaco-editor/esm/vs/editor/standalone/common/standaloneThemeService';
import { INotificationService } from 'monaco-editor/esm/vs/platform/notification/common/notification';
import { IConfigurationService } from 'monaco-editor/esm/vs/platform/configuration/common/configuration';
import { IAccessibilityService } from 'monaco-editor/esm/vs/platform/accessibility/common/accessibility';
import { IOpenerService } from 'monaco-editor/esm/vs/platform/opener/common/opener';
import { OpenerService } from 'monaco-editor/esm/vs/editor/browser/services/openerService';
import { QuickInputService } from 'monaco-editor/esm/vs/platform/quickinput/browser/quickInput';
import { IQuickInputService } from 'monaco-editor/esm/vs/platform/quickinput/common/quickInput';
import { ILayoutService } from 'monaco-editor/esm/vs/platform/layout/browser/layoutService';
import { ServiceCollection } from 'monaco-editor/esm/vs/platform/instantiation/common/serviceCollection';

import { ID_APP } from 'mo/common/id';

export interface IMonacoService {
    readonly services: ServiceCollection;
    readonly container: HTMLElement | null;
    create(
        domElement: HTMLElement,
        options?: IStandaloneEditorConstructionOptions,
        overrides?: IEditorOverrideServices
    ): IStandaloneCodeEditor;
}

@singleton()
export class MonacoService implements IMonacoService {
    private _services: ServiceCollection;
    private simpleEditorModelResolverService: SimpleEditorModelResolverService | null = null;

    constructor() {}

    get services() {
        if (!this._services) {
            this._services = this.createStandaloneServices();
        }
        return this._services;
    }

    get container() {
        return document.getElementById(ID_APP);
    }

    // private mergeEditorServices(overrides?: IEditorOverrideServices) {
    //     if (overrides) {
    //         const services = this.services;
    //         for (const serviceId in overrides) {
    //             if (serviceId) {
    //                 const service = services.get(serviceId);
    //                 if (service && overrides[serviceId]){
    //                     services.set(serviceId, overrides[serviceId]);
    //                 }
    //             }
    //         }
    //     }
    // }

    public create(
        domElement: HTMLElement,
        options?: IStandaloneEditorConstructionOptions,
        overrides?: IEditorOverrideServices
    ): IStandaloneCodeEditor {
        const services = this.services;

        const standaloneEditor = new StandaloneEditor(
            domElement,
            options,
            services,
            services.get(IInstantiationService),
            services.get(ICodeEditorService),
            services.get(ICommandService),
            services.get(IContextKeyService),
            services.get(IKeybindingService),
            services.get(IContextViewService),
            services.get(IStandaloneThemeService),
            services.get(INotificationService),
            services.get(IConfigurationService),
            services.get(IAccessibilityService)
        );

        if (this.simpleEditorModelResolverService) {
            this.simpleEditorModelResolverService.setEditor(standaloneEditor);
        }
        return standaloneEditor;
    }

    private createStandaloneServices(): ServiceCollection {
        const services = new DynamicStandaloneServices(this.container);

        this.overrideServices(services);

        if (!services.has(ITextModelService)) {
            this.simpleEditorModelResolverService = new SimpleEditorModelResolverService(
                StaticServices.modelService.get()
            );
            services.set(
                ITextModelService,
                this.simpleEditorModelResolverService
            );
        }

        if (!services.has(IOpenerService)) {
            services.set(
                IOpenerService,
                new OpenerService(
                    services.get(ICodeEditorService),
                    services.get(ICommandService)
                )
            );
        }

        return services;
    }

    private overrideServices(services) {
        const instantiationService = services.get(IInstantiationService);

        const quickInputService = instantiationService.createInstance(
            QuickInputService
        );
        const layoutService = new SimpleLayoutService(
            StaticServices.codeEditorService.get(ICodeEditorService),
            this.container
        );

        // Override layoutService
        services.set(ILayoutService, layoutService);

        // Override quickPickService
        services.set(IQuickInputService, quickInputService);
    }
}
