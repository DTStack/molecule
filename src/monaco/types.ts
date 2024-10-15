// @ts-nocheck
// ===================== Override monaco-editor's types =====================
import type { UniqueId } from 'mo/types';
import { editor, IDisposable, Uri } from 'monaco-editor';
import { Color as MonacoColor } from 'monaco-editor/esm/vs/base/common/color';
import { KeyChord as MonacoKeyChord } from 'monaco-editor/esm/vs/base/common/keyCodes';
import {
    Disposable as MonacoDisposable,
    DisposableStore as MonacoDisposableStore,
} from 'monaco-editor/esm/vs/base/common/lifecycle';
import { ICodeEditorService as MonacoICodeEditorService } from 'monaco-editor/esm/vs/editor/browser/services/codeEditorService';
import { OpenerService as MonacoOpenerService } from 'monaco-editor/esm/vs/editor/browser/services/openerService';
import { TokenizationRegistry as MonacoTokenizationRegistry } from 'monaco-editor/esm/vs/editor/common/modes.js';
import { generateTokensCSSForColorMap as MonacoGenerateTokensCSSForColorMap } from 'monaco-editor/esm/vs/editor/common/modes/supports/tokenization.js';
import { IModelService as MonacoIModelService } from 'monaco-editor/esm/vs/editor/common/services/modelService.js';
import { IModeService as MonacoIModeService } from 'monaco-editor/esm/vs/editor/common/services/modeService.js';
import { ITextModelService as MonacoITextModelService } from 'monaco-editor/esm/vs/editor/common/services/resolverService';
import { IEditorWorkerService as MonacoIEditorWorkerService } from 'monaco-editor/esm/vs/editor/common/services/editorWorkerService';
import { AbstractEditorCommandsQuickAccessProvider as MonacoAbstractEditorCommandsQuickAccessProvider } from 'monaco-editor/esm/vs/editor/contrib/quickAccess/commandsQuickAccess';
import { AbstractGotoLineQuickAccessProvider as MonacoAbstractGotoLineQuickAccessProvider } from 'monaco-editor/esm/vs/editor/contrib/quickAccess/gotoLineQuickAccess';
import {
    SimpleEditorModelResolverService as MonacoSimpleEditorModelResolverService,
    SimpleLayoutService as MonacoSimpleLayoutService,
} from 'monaco-editor/esm/vs/editor/standalone/browser/simpleServices';
import {
    StandaloneEditor as MonacoStandaloneEditor,
    StandaloneDiffEditor as MonacoStandaloneDiffEditor,
} from 'monaco-editor/esm/vs/editor/standalone/browser/standaloneCodeEditor';
import {
    DynamicStandaloneServices as MonacoDynamicStandaloneServices,
    StaticServices as MonacoStaticServices,
} from 'monaco-editor/esm/vs/editor/standalone/browser/standaloneServices';
import { IStandaloneThemeService as MonacoIStandaloneThemeService } from 'monaco-editor/esm/vs/editor/standalone/common/standaloneThemeService';
import { localize as MonacoLocalize } from 'monaco-editor/esm/vs/nls';
import { IAccessibilityService as MonacoIAccessibilityService } from 'monaco-editor/esm/vs/platform/accessibility/common/accessibility';
import {
    MenuId as MonacoMenuId,
    MenuRegistry as MonacoMenuRegistry,
} from 'monaco-editor/esm/vs/platform/actions/common/actions';
import {
    CommandsRegistry as MonacoCommandsRegistry,
    ICommandService as MonacoICommandService,
} from 'monaco-editor/esm/vs/platform/commands/common/commands';
import { IConfigurationService as MonacoIConfigurationService } from 'monaco-editor/esm/vs/platform/configuration/common/configuration';
import {
    ContextKeyExpr as MonacoContextKeyExpr,
    IContextKeyService as MonacoIContextKeyService,
} from 'monaco-editor/esm/vs/platform/contextkey/common/contextkey';
import { IContextViewService as MonacoIContextViewService } from 'monaco-editor/esm/vs/platform/contextview/browser/contextView';
import { IDialogService as MonacoIDialogService } from 'monaco-editor/esm/vs/platform/dialogs/common/dialogs';
import {
    _util as _monacoUtil,
    IInstantiationService as MonacoIInstantiationService,
} from 'monaco-editor/esm/vs/platform/instantiation/common/instantiation';
import { ServiceCollection as MonacoServiceCollection } from 'monaco-editor/esm/vs/platform/instantiation/common/serviceCollection';
import { IKeybindingService as MonacoIKeybindingService } from 'monaco-editor/esm/vs/platform/keybinding/common/keybinding';
import { KeybindingsRegistry as MonacoKeybindingsRegistry } from 'monaco-editor/esm/vs/platform/keybinding/common/keybindingsRegistry';
import { ResolvedKeybindingItem as MonacoResolvedKeybindingItem } from 'monaco-editor/esm/vs/platform/keybinding/common/resolvedKeybindingItem';
import { ILayoutService as MonacoILayoutService } from 'monaco-editor/esm/vs/platform/layout/browser/layoutService';
import { INotificationService as MonacoINotificationService } from 'monaco-editor/esm/vs/platform/notification/common/notification';
import { IOpenerService as MonacoIOpenerService } from 'monaco-editor/esm/vs/platform/opener/common/opener';
import { QuickInputService as MonacoQuickInputService } from 'monaco-editor/esm/vs/platform/quickinput/browser/quickInput';
import {
    Extensions as MonacoExtensions,
    IQuickAccessRegistry,
} from 'monaco-editor/esm/vs/platform/quickinput/common/quickAccess';
import { IQuickInputService as MonacoIQuickInputService } from 'monaco-editor/esm/vs/platform/quickinput/common/quickInput';
import { Registry as MonacoRegistry } from 'monaco-editor/esm/vs/platform/registry/common/platform';
import { ITelemetryService as MonacoITelemetryService } from 'monaco-editor/esm/vs/platform/telemetry/common/telemetry';
import { IContextMenuService as MonacoIContextMenuService } from 'monaco-editor/esm/vs/platform/contextview/browser/contextView';
import { IEditorProgressService as MonacoIEditorProgressService } from 'monaco-editor/esm/vs/platform/progress/common/progress';
import { IClipboardService as MonacoIClipboardService } from 'monaco-editor/esm/vs/platform/clipboard/common/clipboardService';

export const _util: {
    serviceIds: Map<string, ServiceIdentifier<any>>;
    DI_TARGET: '$di$target';
    DI_DEPENDENCIES: '$di$dependencies';
} = _monacoUtil;

// TODO
type ICommandsQuickAccessOptions = any;
type ITelemetryService = any;
type IDialogService = any;

interface AbstractEditorCommandsQuickAccessProvider {
    PREFIX: string;
    new (
        options: ICommandsQuickAccessOptions,
        instantiationService: IInstantiationService,
        keybindingService: IKeybindingService,
        commandService: ICommandService,
        telemetryService: ITelemetryService,
        dialogService: IDialogService
    ): {
        getCodeEditorCommandPicks(): ICommandQuickPick[];
    };
}

type TokenizationRegistry = {
    setColorMap: (colorMap: ColorClass[]) => void;
};
export const TokenizationRegistry: TokenizationRegistry = MonacoTokenizationRegistry;

type generateTokensCSSForColorMap = (colorMap: ColorClass[]) => string;
export const generateTokensCSSForColorMap: generateTokensCSSForColorMap = MonacoGenerateTokensCSSForColorMap;

export const AbstractEditorCommandsQuickAccessProvider: AbstractEditorCommandsQuickAccessProvider =
    MonacoAbstractEditorCommandsQuickAccessProvider;
export const AbstractGotoLineQuickAccessProvider = MonacoAbstractGotoLineQuickAccessProvider;

export interface Disposable extends IDisposable {
    None: IDisposable;
}
export const Disposable: Disposable = MonacoDisposable;

// TODO
type IQuickAccessProviderDescriptor = any;

export interface IQuickAccessRegistry {
    providers: any[];
    /**
     * Registers a quick access provider to the platform.
     */
    registerQuickAccessProvider(provider: IQuickAccessProviderDescriptor): IDisposable;

    /**
     * Get all registered quick access providers.
     */
    getQuickAccessProviders(): IQuickAccessProviderDescriptor[];

    /**
     * Get a specific quick access provider for a given prefix.
     */
    getQuickAccessProvider(prefix: string): IQuickAccessProviderDescriptor | undefined;
}

export type Extensions = {
    Quickaccess: 'workbench.contributions.quickaccess';
};
export const Extensions: Extensions = MonacoExtensions;

export interface Registry {
    as<T>(id: string): T;
}
export const Registry: Registry = MonacoRegistry;

/**
 * An event with zero or one parameters that can be subscribed to. The event is a function itself.
 */
export interface Event<T> {
    (listener: (e: T) => any, thisArgs?: any, disposables?: IDisposable[]): IDisposable;
}

// from:monaco-editor/esm/vs/platform/instantiation/common/instantiation
export interface ServiceIdentifier<T> {
    (...args: any[]): void;
    type: T;
}
/**
 * As same as type ServicesAccessor from [monaco-editor/esm/vs/platform/instantiation/common/instantiation]
 */
export interface ServicesAccessor {
    get<T>(id: ServiceIdentifier<T>): T;
    has(id: ServiceIdentifier<any>): boolean;
    set(id: ServiceIdentifier, service: any): void;
    dispose(): void;
}

export interface IQuickPickItemHighlights {
    label?: IMatch[];
    description?: IMatch[];
    detail?: IMatch[];
}

export interface IMatch {
    start: number;
    end: number;
}

type URI = typeof Uri;

export interface IQuickInputButton {
    /** iconPath or iconClass required */
    iconPath?: { dark: URI; light?: URI };
    /** iconPath or iconClass required */
    iconClass?: string;
    tooltip?: string;
    /**
     * Whether to always show the button. By default buttons
     * are only visible when hovering over them with the mouse
     */
    alwaysVisible?: boolean;
}

export interface IQuickPickItem {
    type?: 'item';
    id?: UniqueId;
    label: string;
    meta?: string;
    ariaLabel?: string;
    description?: string;
    detail?: string;
    iconClasses?: string[];
    italic?: boolean;
    strikethrough?: boolean;
    highlights?: IQuickPickItemHighlights;
    buttons?: IQuickInputButton[];
    picked?: boolean;
    alwaysShow?: boolean;
}

export interface IQuickPickSeparator {
    type: 'separator';
    label?: string;
}

export type QuickPickInput<T = IQuickPickItem> = T | IQuickPickSeparator;

export interface IQuickPickWillAcceptEvent {
    /**
     * Allows to disable the default accept handling
     * of the picker. If `veto` is called, the picker
     * will not trigger the `onDidAccept` event.
     */
    veto(): void;
}

export interface IQuickPickDidAcceptEvent {
    /**
     * Signals if the picker item is to be accepted
     * in the background while keeping the picker open.
     */
    inBackground: boolean;
}

export interface IQuickPickItemButtonEvent<T extends IQuickPickItem> {
    button: IQuickInputButton;
    item: T;
}

export enum ItemActivation {
    NONE,
    FIRST,
    SECOND,
    LAST,
}

export interface IKeyMods {
    readonly ctrlCmd: boolean;
    readonly alt: boolean;
}

export enum QuickInputHideReason {
    /**
     * Focus moved away from the quick input.
     */
    Blur = 1,

    /**
     * An explicit user gesture, e.g. pressing Escape key.
     */
    Gesture,

    /**
     * Anything else.
     */
    Other,
}

export interface IQuickInputHideEvent {
    reason: QuickInputHideReason;
}

export interface IQuickInput extends IDisposable {
    readonly onDidHide: Event<IQuickInputHideEvent>;
    readonly onDispose: Event<void>;

    title: string | undefined;

    description: string | undefined;

    step: number | undefined;

    totalSteps: number | undefined;

    enabled: boolean;

    contextKey: string | undefined;

    busy: boolean;

    ignoreFocusOut: boolean;

    show(): void;

    hide(): void;
}

export interface IQuickPick<T extends IQuickPickItem> extends IQuickInput {
    value: string;

    /**
     * A method that allows to massage the value used
     * for filtering, e.g, to remove certain parts.
     */
    filterValue: (value: string) => string;

    ariaLabel: string | undefined;

    placeholder: string | undefined;

    readonly onDidChangeValue: Event<string>;

    readonly onWillAccept: Event<IQuickPickWillAcceptEvent>;
    readonly onDidAccept: Event<IQuickPickDidAcceptEvent>;

    /**
     * If enabled, will fire the `onDidAccept` event when
     * pressing the arrow-right key with the idea of accepting
     * the selected item without closing the picker.
     */
    canAcceptInBackground: boolean;

    ok: boolean | 'default';

    readonly onDidCustom: Event<void>;

    customButton: boolean;

    customLabel: string | undefined;

    customHover: string | undefined;

    buttons: ReadonlyArray<IQuickInputButton>;

    readonly onDidTriggerButton: Event<IQuickInputButton>;

    readonly onDidTriggerItemButton: Event<IQuickPickItemButtonEvent<T>>;

    items: ReadonlyArray<T | IQuickPickSeparator>;

    canSelectMany: boolean;

    matchOnDescription: boolean;

    matchOnDetail: boolean;

    matchOnLabel: boolean;

    sortByLabel: boolean;

    autoFocusOnList: boolean;

    keepScrollPosition: boolean;

    activeItems: ReadonlyArray<T>;

    readonly onDidChangeActive: Event<T[]>;

    /**
     * Allows to control which entry should be activated by default.
     */
    itemActivation: ItemActivation;

    selectedItems: ReadonlyArray<T>;

    readonly onDidChangeSelection: Event<T[]>;

    readonly keyMods: IKeyMods;

    valueSelection: Readonly<[number, number]> | undefined;

    validationMessage: string | undefined;

    inputHasFocus(): boolean;

    focusOnInput(): void;

    /**
     * Hides the input box from the picker UI. This is typically used
     * in combination with quick-navigation where no search UI should
     * be presented.
     */
    hideInput: boolean;

    hideCheckAll: boolean;
}
type QuickAccessController = any;

interface IQuickInputService {
    quickAccess: QuickAccessController;
    /**
     * Provides raw access to the quick pick controller.
     */
    createQuickPick<T extends IQuickPickItem>(): IQuickPick<T>;
}

interface ICodeEditorService {}

interface IOpenerService {
    new (editorService: any, commandService: any): {} & IDisposable;
}

interface IModeService {}
interface IModelService {}
interface ITextModelService {}

// Redefine the types from monaco
const KeyChord: (firstPart: any, secondPart?: any) => number = MonacoKeyChord;
const localize: (data: string, message: string, ...args: any[]) => string = MonacoLocalize;
const ICodeEditorService: ServiceIdentifier<ICodeEditorService> = MonacoICodeEditorService;
const IQuickInputService: ServiceIdentifier<IQuickInputService> = MonacoIQuickInputService;
const IModeService: ServiceIdentifier<IModeService> = MonacoIModeService;
const IModelService: ServiceIdentifier<IModelService> = MonacoIModelService;
const ITextModelService: ServiceIdentifier<ITextModelService> = MonacoITextModelService;
const OpenerService: IOpenerService = MonacoOpenerService;

const DisposableStore: {
    DISABLE_DISPOSED_WARNING: boolean;
    new (): {
        dispose(): void;
        isDisposed(): boolean;
        clear(): void;
        add<T extends IDisposable>(o: T): T;
    } & IDisposable;
} = MonacoDisposableStore;

type IMenuItem = any;
type ISubmenuItem = any;
const MenuRegistry: {
    addCommand(userCommand: any): IDisposable;

    /**
     * @deprecated Use `appendMenuItem` or most likely use `registerAction2` instead. There should be no strong
     * reason to use this directly.
     */
    appendMenuItems(items: Iterable<{ id: MenuId; item: IMenuItem | ISubmenuItem }>): IDisposable;
    appendMenuItem(menu: MenuId, item: IMenuItem | ISubmenuItem): IDisposable;
    getCommands(): Map<string, IMenuItem | ISubmenuItem>;
} = MonacoMenuRegistry;

interface MenuId {
    new (identifier: string): { id: string };
    for(identifier: string): MenuId;
    _instances: Map<string, MenuId>;
    CommandPalette: MenuId;
}
const MenuId: MenuId = MonacoMenuId;
const CommandsRegistry: {
    registerCommand: (idOrCommand?: string | any) => IDisposable;
} = MonacoCommandsRegistry;

const ContextKeyExpr: {
    and: (...args: any[]) => any;
} = MonacoContextKeyExpr;

const KeybindingsRegistry: {
    registerKeybindingRule(rule: any): IDisposable;
    getDefaultKeybindings(): ResolvedKeybindingItem[];
} = MonacoKeybindingsRegistry;

export const CATEGORIES = {
    View: { value: localize('view', 'View'), original: 'View' },
    Help: { value: localize('help', 'Help'), original: 'Help' },
    Preferences: {
        value: localize('preferences', 'Preferences'),
        original: 'Preferences',
    },
    Developer: {
        value: localize(
            {
                key: 'developer',
                comment: ['A developer on Code itself or someone diagnosing issues in Code'],
            },
            'Developer'
        ),
        original: 'Developer',
    },
};

interface ResolvedKeybindingItem {
    when: any;
    command: any;
    keybinding: any;
}
const ResolvedKeybindingItem: ResolvedKeybindingItem = MonacoResolvedKeybindingItem;

type ColorClass = {
    transparent: (factor: number) => ColorClass;
    lighten(factor: number): ColorClass;
    darken(factor: number): ColorClass;
    isDarkerThan: (another: ColorClass) => boolean;
    toString(): string;
};
interface Color {
    fromHex(hex: null): null;
    fromHex(hex: string): ColorClass;
    fromHex(hex: string | null): ColorClass | null;
    white: ColorClass;
    transparent: ColorClass;
    blue: ColorClass;
    cyan: ColorClass;
    black: ColorClass;
    getLighterColor: (of: ColorClass, relative: ColorClass, factor: number) => ColorClass;
    getDarkerColor: (of: ColorClass, relative: ColorClass, factor: number) => ColorClass;
    Format: {
        CSS: {
            formatHexA(hex: ColorClass, compact?: boolean): string;
            parseHex(hex: string): ColorClass;
        };
    };
    new (): ColorClass;
}

interface SimpleEditorModelResolverService {
    new (modelService: IModelService): SimpleEditorModelResolverService & IDisposable;
    setEditor(editor: editor.IStandaloneCodeEditor | editor.IStandaloneDiffEditor): void;
}
const SimpleEditorModelResolverService: SimpleEditorModelResolverService = MonacoSimpleEditorModelResolverService;

interface SimpleLayoutService {
    dimension: any;
    container: any;
    focus(): void;
}
const SimpleLayoutService: new (_codeEditorService: ICodeEditorService, _container: any) => SimpleLayoutService =
    MonacoSimpleLayoutService;

const Color: Color = MonacoColor;

type StandaloneEditor = new (
    domElement: any,
    _options: any,
    toDispose: any,
    instantiationService: any,
    codeEditorService: any,
    commandService: any,
    contextKeyService: any,
    keybindingService: any,
    contextViewService: any,
    themeService: any,
    notificationService: any,
    configurationService: any,
    accessibilityService: any,
    modelService: any,
    modeService: any
) => editor.IStandaloneCodeEditor;
const StandaloneEditor: StandaloneEditor = MonacoStandaloneEditor;

type StandaloneDiffEditor = new (
    domElement: any,
    _options: any,
    toDispose: any,
    instantiationService: any,
    contextKeyService: any,
    keybindingService: any,
    contextViewService: any,
    editorWorkerService: any,
    codeEditorService: any,
    themeService: any,
    notificationService: any,
    configurationService: any,
    contextMenuService: any,
    editorProgressService: any,
    clipboardService: any
) => editor.IStandaloneDiffEditor;
const StandaloneDiffEditor: StandaloneDiffEditor = MonacoStandaloneDiffEditor;

type DynamicStandaloneServices = new (
    domElement: HTMLElement | null,
    overrides?: editor.IEditorOverrideServices
) => ServicesAccessor;
const DynamicStandaloneServices: DynamicStandaloneServices = MonacoDynamicStandaloneServices;

type StaticServices = Record<string, any>;
const StaticServices: StaticServices = MonacoStaticServices;

type IStandaloneThemeService = any;
const IStandaloneThemeService: IStandaloneThemeService = MonacoIStandaloneThemeService;

type IAccessibilityService = any;
const IAccessibilityService: IAccessibilityService = MonacoIAccessibilityService;

type IConfigurationService = any;
const IConfigurationService: IConfigurationService = MonacoIConfigurationService;

type IContextKeyService = any;
const IContextKeyService: IContextKeyService = MonacoIContextKeyService;

type IContextViewService = any;
const IContextViewService: IContextViewService = MonacoIContextViewService;

type IInstantiationService = any;
const IInstantiationService: IInstantiationService = MonacoIInstantiationService;

type ICommandService = any;
const ICommandService: ICommandService = MonacoICommandService;

type ITelemetryService = any;
export const ITelemetryService: ITelemetryService = MonacoITelemetryService;

type IDialogService = any;
export const IDialogService: IDialogService = MonacoIDialogService;

type ServiceCollection = any;
const ServiceCollection: ServiceCollection = MonacoServiceCollection;

type IKeybindingService = any;
const IKeybindingService: IKeybindingService = MonacoIKeybindingService;

type ILayoutService = any;
const ILayoutService: ILayoutService = MonacoILayoutService;

type INotificationService = any;
const INotificationService: INotificationService = MonacoINotificationService;

const IOpenerService: ServiceIdentifier<IOpenerService> = MonacoIOpenerService;

type QuickInputService = any;
const QuickInputService: QuickInputService = MonacoQuickInputService;

type IEditorWorkerService = any;
const IEditorWorkerService: IEditorWorkerService = MonacoIEditorWorkerService;

type IContextMenuService = any;
const IContextMenuService: IContextMenuService = MonacoIContextMenuService;

type IEditorProgressService = any;
const IEditorProgressService: IEditorProgressService = MonacoIEditorProgressService;

type IClipboardService = any;
const IClipboardService: IClipboardService = MonacoIClipboardService;

// TODO
type IPickerQuickAccessItem = {
    label: string;
};

export interface ICommandQuickPick extends IPickerQuickAccessItem {
    commandId: string;
    commandAlias?: string;
}

export {
    Color,
    CommandsRegistry,
    ContextKeyExpr,
    DisposableStore,
    DynamicStandaloneServices,
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
    IEditorWorkerService,
    IContextMenuService,
    IEditorProgressService,
    IClipboardService,
    KeybindingsRegistry,
    KeyChord,
    localize,
    MenuId,
    MenuRegistry,
    OpenerService,
    QuickInputService,
    ResolvedKeybindingItem,
    ServiceCollection,
    SimpleEditorModelResolverService,
    SimpleLayoutService,
    StandaloneEditor,
    StandaloneDiffEditor,
    StaticServices,
};
