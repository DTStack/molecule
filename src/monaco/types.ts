// @ts-nocheck
// ===================== Override monaco-editor's types =====================
import type { UniqueId } from 'mo/types';
import type { editor, IDisposable } from 'monaco-editor';
import { Color as MonacoColor } from 'monaco-editor/esm/vs/base/common/color';
import { KeyChord as MonacoKeyChord } from 'monaco-editor/esm/vs/base/common/keyCodes';
import {
    Disposable as MonacoDisposable,
    DisposableStore as MonacoDisposableStore,
} from 'monaco-editor/esm/vs/base/common/lifecycle';
import { ICodeEditorService as MonacoICodeEditorService } from 'monaco-editor/esm/vs/editor/browser/services/codeEditorService';
import { OpenerService as MonacoOpenerService } from 'monaco-editor/esm/vs/editor/browser/services/openerService';
import { IModelService as MonacoIModelService } from 'monaco-editor/esm/vs/editor/common/services/modelService.js';
import { IModeService as MonacoIModeService } from 'monaco-editor/esm/vs/editor/common/services/modeService.js';
import { ITextModelService as MonacoITextModelService } from 'monaco-editor/esm/vs/editor/common/services/resolverService';
import { AbstractGotoLineQuickAccessProvider as MonacoAbstractGotoLineQuickAccessProvider } from 'monaco-editor/esm/vs/editor/contrib/quickAccess/gotoLineQuickAccess';
import {
    SimpleEditorModelResolverService as MonacoSimpleEditorModelResolverService,
    SimpleLayoutService as MonacoSimpleLayoutService,
} from 'monaco-editor/esm/vs/editor/standalone/browser/simpleServices';
import { StandaloneEditor as MonacoStandaloneEditor } from 'monaco-editor/esm/vs/editor/standalone/browser/standaloneCodeEditor';
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
import { IInstantiationService as MonacoIInstantiationService } from 'monaco-editor/esm/vs/platform/instantiation/common/instantiation';
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

export interface IQuickPickItem {
    type?: 'item';
    id?: UniqueId;
    label: string;
    description?: string;
}

export interface IQuickPickSeparator {
    type?: 'separator';
    id?: UniqueId;
    label?: string;
}

export type QuickPickInput<T = IQuickPickItem> = T | IQuickPickSeparator;

interface IQuickPick<T> {
    placeholder: string | undefined;
    value: string;
    items: ReadonlyArray<QuickPickInput<T>>;
    activeItems: ReadonlyArray<T>;
    canSelectMany: boolean;
    /**
     * Event called when the user submits the input.
     */
    readonly onDidAccept: Event<void>;
    readonly onDidChangeActive: Event<T[]>;
    readonly onDidHide: Event<void>;
    show(): void;

    hide(): void;
}

type QuickAccessController = any;

interface IQuickInputService {
    quickAccess: QuickAccessController;
    /**
     * Provides raw access to the quick pick controller.
     */
    createQuickPick<T>(): IQuickPick<T>;
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
        };
    };
    new (): ColorClass;
}

interface SimpleEditorModelResolverService {
    new (modelService: IModelService): SimpleEditorModelResolverService & IDisposable;
    setEditor(editor: editor.IStandaloneCodeEditor): void;
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
    StaticServices,
};
