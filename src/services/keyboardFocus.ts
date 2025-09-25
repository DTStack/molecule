import {
    type editor as MonacoEditor,
    IAccessibilityService,
    ICodeEditorService,
    ICommandService,
    IConfigurationService,
    IContextKeyService,
    IHoverService,
    IInstantiationService,
    IKeybindingService,
    ILanguageConfigurationService,
    ILanguageFeaturesService,
    ILanguageService,
    IModelService,
    INotificationService,
    IStandaloneThemeService,
    ServiceCollection,
    StandaloneEditor,
} from 'mo/monaco';
import { injectable } from 'tsyringe';

export interface IKeyboardFocusService {
    /**
     * Initialize the keyboard focus service with Monaco services
     */
    initialize(services: ServiceCollection): void;

    /**
     * Dispose the keyboard focus service and clean up resources
     */
    dispose(): void;

    /**
     * Ensure the hidden editor has focus when QuickInputService operations are needed
     */
    ensureQuickInputContext(): void;

    /**
     * Register an editor for focus tracking
     */
    registerEditor(editor: MonacoEditor.IStandaloneCodeEditor): void;
}

/**
 * Service responsible for managing keyboard focus and global shortcut key functionality.
 * This service creates and manages a hidden editor to ensure Monaco Editor's shortcut keys
 * work even when no visible editor has focus.
 */
@injectable()
export class KeyboardFocusService implements IKeyboardFocusService {
    private _hiddenEditor: MonacoEditor.IStandaloneCodeEditor | null = null;
    private _hiddenEditorContainer: HTMLElement | null = null;
    private _hiddenEditorStyle: HTMLStyleElement | null = null;
    private _focusedEditor: MonacoEditor.IStandaloneCodeEditor | null = null;
    private _isInitialized = false;
    private _globalKeydownHandler: ((e: KeyboardEvent) => void) | null = null;
    private _services: ServiceCollection | null = null;

    constructor() {}

    public initialize(services: ServiceCollection): void {
        if (this._isInitialized) {
            console.warn('KeyboardFocusService is already initialized');
            return;
        }

        this._services = services;

        // Create hidden editor after Monaco services are available
        // Use RAF to ensure DOM is ready and services are fully initialized
        window.requestAnimationFrame(() => {
            this.createHiddenEditor();
            this._isInitialized = true;
        });
    }

    public dispose(): void {
        if (!this._isInitialized) {
            return;
        }

        this.disposeHiddenEditor();
        this._isInitialized = false;
    }

    public ensureQuickInputContext(): void {
        if (!this._isInitialized) {
            console.warn('KeyboardFocusService: Service not initialized');
            return;
        }

        if (this._hiddenEditor && this._hiddenEditorContainer) {
            try {
                this._hiddenEditor.focus();
            } catch (error) {
                console.warn('Failed to focus hidden editor:', error);
            }
        } else {
            console.warn('KeyboardFocusService: Hidden editor not available, QuickInputService may not work properly');
        }
    }

    public registerEditor(editor: MonacoEditor.IStandaloneCodeEditor): void {
        if (!this._isInitialized) {
            console.warn('KeyboardFocusService: Service not initialized, cannot register editor');
            return;
        }

        this.setupEditorFocusTracking(editor);
    }

    /**
     * Create a hidden editor to ensure QuickInputService always has a focused editor context
     */
    private createHiddenEditor(): void {
        if (!this._services) {
            console.warn('KeyboardFocusService: Monaco services not available');
            return;
        }

        try {
            // Create a hidden container for the editor
            this._hiddenEditorContainer = document.createElement('div');
            this._hiddenEditorContainer.className = 'mo-hidden-editor-container';
            document.body.appendChild(this._hiddenEditorContainer);

            // Create a style element to hide the editor
            this._hiddenEditorStyle = document.createElement('style');
            this._hiddenEditorStyle.textContent = `
                .mo-hidden-editor-container {
                    pointer-events: none;
                    position: fixed;
                    left: -9999px;
                    top: -9999px;
                    width: 100vw;
                    height: 100vh;
                    z-index: 9999;
                }
                .mo-hidden-editor-container .monaco-editor {
                    background-color: transparent;
                    outline: none;
                }
                .mo-hidden-editor-container .monaco-editor > *:not(.overflow-guard) {
                    opacity: 0;
                }
                .mo-hidden-editor-container .monaco-editor .overflow-guard > *:not(.overlayWidgets) {
                    opacity: 0;
                }
                .mo-hidden-editor-container .monaco-editor .overflow-guard .overlayWidgets {
                    pointer-events: auto;
                }
            `;
            document.head.appendChild(this._hiddenEditorStyle);

            // Create the hidden editor with minimal configuration
            this._hiddenEditor = new StandaloneEditor(
                this._hiddenEditorContainer,
                {
                    readOnly: true,
                    minimap: { enabled: false },
                    scrollbar: { vertical: 'hidden', horizontal: 'hidden' },
                    lineNumbers: 'off',
                },
                this._services.get(IInstantiationService),
                this._services.get(ICodeEditorService),
                this._services.get(ICommandService),
                this._services.get(IContextKeyService),
                this._services.get(IHoverService),
                this._services.get(IKeybindingService),
                this._services.get(IStandaloneThemeService),
                this._services.get(INotificationService),
                this._services.get(IConfigurationService),
                this._services.get(IAccessibilityService),
                this._services.get(IModelService),
                this._services.get(ILanguageService),
                this._services.get(ILanguageConfigurationService),
                this._services.get(ILanguageFeaturesService)
            );

            // Setup global keydown event listener
            this._globalKeydownHandler = this.handleGlobalKeydown.bind(this);
            document.addEventListener('keydown', this._globalKeydownHandler);
        } catch (error) {
            console.warn('Failed to create hidden editor:', error);
        }
    }

    /**
     * Dispose the hidden editor and clean up resources
     */
    private disposeHiddenEditor(): void {
        if (this._hiddenEditor) {
            this._hiddenEditor.dispose();
            this._hiddenEditor = null;
        }

        if (this._hiddenEditorContainer && this._hiddenEditorContainer.parentNode) {
            this._hiddenEditorContainer.parentNode.removeChild(this._hiddenEditorContainer);
            this._hiddenEditorContainer = null;
        }

        if (this._hiddenEditorStyle && this._hiddenEditorStyle.parentNode) {
            this._hiddenEditorStyle.parentNode.removeChild(this._hiddenEditorStyle);
            this._hiddenEditorStyle = null;
        }

        if (this._globalKeydownHandler) {
            document.removeEventListener('keydown', this._globalKeydownHandler);
            this._globalKeydownHandler = null;
        }

        this._focusedEditor = null;
    }

    /**
     * Setup focus tracking for a regular editor instance
     */
    private setupEditorFocusTracking(editor: MonacoEditor.IStandaloneCodeEditor): void {
        editor.onDidFocusEditorText(() => {
            this._focusedEditor = editor;
        });

        editor.onDidBlurEditorText(() => {
            if (this._focusedEditor === editor) {
                this._focusedEditor = null;
            }
        });
    }

    /**
     * Handle global keydown events with smart focus management
     */
    private handleGlobalKeydown(e: KeyboardEvent): void {
        // Only handle events with modifier keys
        if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)) {
            return;
        }

        // No regular editor has focus, ensure QuickInput context for all modifier key combinations
        if (!this._focusedEditor || !this._focusedEditor.hasTextFocus()) {
            this.ensureQuickInputContext();
        }
    }
}
