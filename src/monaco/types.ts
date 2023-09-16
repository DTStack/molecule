// @ts-nocheck
// ===================== Override monaco-editor's types =====================
import type { UniqueId } from 'mo/types';
import type { IDisposable } from 'monaco-editor';
import { Color as MonacoColor } from 'monaco-editor/esm/vs/base/common/color';
import { KeyChord as MonacoKeyChord } from 'monaco-editor/esm/vs/base/common/keyCodes';
import { DisposableStore as MonacoDisposableStore } from 'monaco-editor/esm/vs/base/common/lifecycle';
import { localize as MonacoLocalize } from 'monaco-editor/esm/vs/nls';
import {
    MenuId as MonacoMenuId,
    MenuRegistry as MonacoMenuRegistry,
} from 'monaco-editor/esm/vs/platform/actions/common/actions';
import { CommandsRegistry as MonacoCommandsRegistry } from 'monaco-editor/esm/vs/platform/commands/common/commands';
import { ContextKeyExpr as MonacoContextKeyExpr } from 'monaco-editor/esm/vs/platform/contextkey/common/contextkey';
import { KeybindingsRegistry as MonacoKeybindingsRegistry } from 'monaco-editor/esm/vs/platform/keybinding/common/keybindingsRegistry';
import { ResolvedKeybindingItem as MonacoResolvedKeybindingItem } from 'monaco-editor/esm/vs/platform/keybinding/common/resolvedKeybindingItem';
import { IQuickInputService as MonacoIQuickInputService } from 'monaco-editor/esm/vs/platform/quickinput/common/quickInput';

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
}

export interface IQuickPickItem {
    type?: 'item';
    id?: UniqueId;
    label: string;
    description?: string;
}

export interface IQuickPickSeparator {
    type: 'separator';
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

interface IQuickInputService {
    /**
     * Provides raw access to the quick pick controller.
     */
    createQuickPick<T>(): IQuickPick<T>;
}

// Redefine the types from monaco
const KeyChord: (firstPart: any, secondPart?: any) => number = MonacoKeyChord;
const localize: (data: string, message: string, ...args: any[]) => string = MonacoLocalize;
const IQuickInputService: ServiceIdentifier<IQuickInputService> = MonacoIQuickInputService;

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
    transparent: (factor: number) => string;
    lighten(factor: number): string;
    darken(factor: number): string;
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
    new (): ColorClass;
}

const Color: Color = MonacoColor;

export {
    Color,
    CommandsRegistry,
    ContextKeyExpr,
    DisposableStore,
    IQuickInputService,
    KeybindingsRegistry,
    KeyChord,
    localize,
    MenuId,
    MenuRegistry,
    ResolvedKeybindingItem,
};
