import {
    type editor as MonacoEditor,
    EditorScopedLayoutService,
    IAccessibilityService,
    IAccessibilitySignalService,
    IClipboardService,
    ICodeEditorService,
    ICommandService,
    IConfigurationService,
    IContextKeyService,
    IContextMenuService,
    IContextViewService,
    IEditorProgressService,
    IEditorWorkerService,
    IHoverService,
    IInstantiationService,
    IKeybindingService,
    ILanguageConfigurationService,
    ILanguageFeaturesService,
    ILanguageService,
    ILayoutService,
    IModelService,
    INotificationService,
    IOpenerService,
    IQuickInputService,
    IStandaloneThemeService,
    ITelemetryService,
    OpenerService,
    QuickInputService,
    ServiceCollection,
    StandaloneDiffEditor,
    StandaloneEditor,
    StandaloneServices,
    StaticServices,
} from 'mo/monaco';
import { inject, injectable } from 'tsyringe';

import { ColorThemeService } from './colorTheme';
import { KeyboardFocusService } from './keyboardFocus';

type IEditorOverrideServices = MonacoEditor.IEditorOverrideServices;

@injectable()
export class MonacoService {
    private _services: ServiceCollection;
    private _container!: HTMLElement | null;
    private _keyboardFocusService!: KeyboardFocusService | null;

    constructor(@inject('colorTheme') private colorTheme: ColorThemeService) {}

    public setKeyboardFocusService(keyboardFocusService: KeyboardFocusService): void {
        this._keyboardFocusService = keyboardFocusService;
    }

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

    get QuickInputService(): IQuickInputService {
        return this.services.get(IQuickInputService);
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

        const standaloneEditor = new StandaloneEditor(
            domElement,
            options,
            services.get(IInstantiationService),
            services.get(ICodeEditorService),
            services.get(ICommandService),
            services.get(IContextKeyService),
            services.get(IHoverService),
            services.get(IKeybindingService),
            services.get(IStandaloneThemeService),
            services.get(INotificationService),
            services.get(IConfigurationService),
            services.get(IAccessibilityService),
            services.get(IModelService),
            services.get(ILanguageService),
            services.get(ILanguageConfigurationService),
            services.get(ILanguageFeaturesService)
        );

        // Should be called after the editor is created
        this.colorTheme.setCurrent(this.colorTheme.getCurrent());

        // Register editor with keyboard focus service for focus tracking
        if (this._keyboardFocusService) {
            this._keyboardFocusService.registerEditor(standaloneEditor);
        }

        return standaloneEditor;
    }

    public createDiffEditor(
        domElement: HTMLElement,
        options?: MonacoEditor.IStandaloneDiffEditorConstructionOptions,
        overrides?: IEditorOverrideServices
    ): MonacoEditor.IStandaloneDiffEditor {
        const services = this.services;

        this.mergeEditorServices(overrides);

        const standaloneDiffEditor = new StandaloneDiffEditor(
            domElement,
            options,
            services.get(IInstantiationService),
            services.get(IContextKeyService),
            services.get(ICodeEditorService),
            services.get(IStandaloneThemeService),
            services.get(INotificationService),
            services.get(IConfigurationService),
            services.get(IContextMenuService),
            services.get(IEditorProgressService),
            services.get(IClipboardService),
            services.get(IAccessibilitySignalService)
        );

        // Should be called after the editor is created
        this.colorTheme.setCurrent(this.colorTheme.getCurrent());

        return standaloneDiffEditor;
    }

    // When Application will unmount, call it
    public dispose() {
        if (this._keyboardFocusService) {
            this._keyboardFocusService.dispose();
        }
    }

    /**
     * Ensure the hidden editor has focus when QuickInputService operations are needed
     * This method should be called before any QuickInputService operations
     */
    public ensureQuickInputContext(): void {
        if (this._keyboardFocusService) {
            this._keyboardFocusService.ensureQuickInputContext();
        }
    }

    private createStandaloneServices(): ServiceCollection {
        const instantiationService = StandaloneServices.initialize({});
        const services = new ServiceCollection();
        const serviceIds = [
            IInstantiationService,
            ICodeEditorService,
            ICommandService,
            IConfigurationService,
            IContextKeyService,
            IKeybindingService,
            IContextViewService,
            IStandaloneThemeService,
            INotificationService,
            IAccessibilityService,
            IAccessibilitySignalService,
            IModelService,
            ILanguageService,
            ILanguageConfigurationService,
            ILanguageFeaturesService,
            IHoverService,
            IEditorWorkerService,
            IContextMenuService,
            IEditorProgressService,
            IClipboardService,
            ITelemetryService,
        ];

        serviceIds.forEach((serviceId) => {
            const service = StandaloneServices.get(serviceId);
            if (service) {
                services.set(serviceId, service);
            }
        });

        if (!services.get(IOpenerService)) {
            services.set(
                IOpenerService,
                new OpenerService(services.get(ICodeEditorService), services.get(ICommandService))
            );
        }

        const quickInputService = instantiationService.createInstance(QuickInputService);
        const layoutService = new EditorScopedLayoutService(
            this.container,
            StaticServices.codeEditorService.get(ICodeEditorService)
        );

        // Override layoutService
        services.set(ILayoutService, layoutService);

        // Override quickPickService
        services.set(IQuickInputService, quickInputService);

        // Override dispose for prevent disposed by instance
        this.dispose = services.dispose;
        services.dispose = () => {};

        // Initialize keyboard focus service after services are set up
        if (this._keyboardFocusService) {
            this._keyboardFocusService.initialize(services);
        }

        return services;
    }
}
