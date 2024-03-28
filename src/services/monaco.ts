import {
    DynamicStandaloneServices,
    type editor as MonacoEditor,
    IAccessibilityService,
    ICodeEditorService,
    ICommandService,
    IConfigurationService,
    IContextKeyService,
    IContextViewService,
    IInstantiationService,
    IKeybindingService,
    ILayoutService,
    IModelService,
    IModeService,
    INotificationService,
    IOpenerService,
    IQuickInputService,
    IStandaloneThemeService,
    ITextModelService,
    OpenerService,
    QuickInputService,
    ServiceCollection,
    SimpleEditorModelResolverService,
    SimpleLayoutService,
    StandaloneEditor,
    StaticServices,
} from 'mo/monaco';
import { injectable } from 'tsyringe';

type IEditorOverrideServices = MonacoEditor.IEditorOverrideServices;

@injectable()
export class MonacoService {
    private _services: ServiceCollection;
    private simpleEditorModelResolverService: SimpleEditorModelResolverService | null = null;
    private _container!: HTMLElement | null;

    constructor() {}

    public initWorkspace(container: HTMLElement) {
        this._container = container;
        this._services = this.createStandaloneServices();
    }

    get container() {
        return this._container;
    }

    get services() {
        return this._services;
    }

    get commandService() {
        return this.services.get(ICommandService);
    }

    private mergeEditorServices(overrides?: IEditorOverrideServices) {
        if (overrides) {
            const services = this.services;
            for (const serviceId in overrides) {
                if (serviceId) {
                    const service = services.get(serviceId);
                    if (service && overrides[serviceId]) {
                        services.set(serviceId, overrides[serviceId]);
                    }
                }
            }
        }
    }

    public create(
        domElement: HTMLElement,
        options?: MonacoEditor.IStandaloneEditorConstructionOptions,
        overrides?: IEditorOverrideServices
    ): MonacoEditor.IStandaloneCodeEditor {
        const services = this.services;

        this.mergeEditorServices(overrides);
        if (!services.has(ITextModelService)) {
            this.simpleEditorModelResolverService = new SimpleEditorModelResolverService(
                StaticServices.modelService.get()
            );
            services.set(ITextModelService, this.simpleEditorModelResolverService);
        }

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
            services.get(IAccessibilityService),
            services.get(IModelService),
            services.get(IModeService)
        );

        if (this.simpleEditorModelResolverService) {
            this.simpleEditorModelResolverService.setEditor(standaloneEditor);
        }

        return standaloneEditor;
    }

    // When Application will unmount, call it
    public dispose() {}

    private createStandaloneServices(): ServiceCollection {
        const services = new DynamicStandaloneServices(this.container);

        const instantiationService = services.get<any>(IInstantiationService);

        if (!services.has(IOpenerService)) {
            services.set(
                IOpenerService,
                new OpenerService(services.get(ICodeEditorService), services.get(ICommandService))
            );
        }

        const quickInputService = instantiationService.createInstance(QuickInputService);
        const layoutService = new SimpleLayoutService(
            StaticServices.codeEditorService.get(ICodeEditorService),
            this.container
        );

        // Override layoutService
        services.set(ILayoutService, layoutService);

        // Override quickPickService
        services.set(IQuickInputService, quickInputService);

        // Override dispose for prevent disposed by instance
        this.dispose = services.dispose;
        services.dispose = () => {};
        return services;
    }
}
