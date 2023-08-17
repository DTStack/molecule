import type { ILocale, LocaleKind } from './models/locale';
import type { AuxiliaryBarService } from './services/auxiliaryBar';
import type { BuiltinService } from './services/builtin';
import type { LayoutService } from './services/layout';
import type { LocaleService } from './services/locale';
import type { StatusBarService } from './services/statusBar';
import type { BaseController } from './glue';

export interface HTMLElementProps extends Omit<HTMLElement, 'title' | 'style' | 'className'> {
    title?: string;
    style?: React.CSSProperties;
    className?: string;
    role?: string;
}

export type UniqueId = string | number;

export interface IContext {
    molecule: {
        auxiliaryBar: AuxiliaryBarService;
        layout: LayoutService;
        statusBar: StatusBarService;
        locale: LocaleService;
        builtin: BuiltinService;
    };
    controllers: { [key in keyof IContext['molecule']]: BaseController };
    localize: Localize;
}
export type IMoleculeContext = IContext['molecule'];

export type Functional<T> = (prev: T) => T;

export type WithHiddenProperty<T extends object | void> = T extends void
    ? { hidden: boolean }
    : T & { hidden: boolean };

/**
 * Returns the international text located by source key，or the default value if it is not find
 * For examples:
 * ```ts
 * localize('id','default value'); // hello ${i}, ${i}
 * localize('id','default value', 'world'); // hello world, ${i}
 * localize('id','default value', 'world', 'molecule'); // hello world, molecule
 * ```
 * @param sourceKey The key value located in the source international text
 * @param defaultValue The default value to be used when not find the international text
 * @param args If provided, it will used as the values to be replaced in the international text
 * @returns
 */
export type Localize = (
    sourceKey: keyof LocaleKind,
    defaultValue: string,
    ...args: any[]
) => string;

export interface IMenuItemProps {
    id: UniqueId;
    /**
     * The name of icon
     */
    icon?: string | JSX.Element;
    type?: 'divider';
    /**
     * Item Name
     */
    name?: string;
    disabled?: boolean;
    /**
     * The description of keybinding
     * example: ⇧⌘P
     */
    keybinding?: string;
    /**
     * Custom render
     */
    render?: (data: IMenuItemProps) => React.ReactNode;
    sortIndex?: number;
    children?: IMenuItemProps[];
}

/**
 * Defines extension types
 */
export enum IExtensionType {
    Theme = 'Themes',
    Normal = 'normal',
    Settings = 'settings',
    Locals = 'locales',
    Menus = 'menus',
    Workbench = 'workbench',
}

export enum IContributeType {
    Languages = 'languages',
    Commands = 'commands',
    Configuration = 'configuration',
    Grammar = 'grammars',
    Themes = 'themes',
    IconTheme = 'iconThemes',
}

export interface IContribute {
    [IContributeType.Languages]?: ILocale[];
    // [IContributeType.Commands]?: any;
    // [IContributeType.Configuration]?: any;
    // [IContributeType.Grammar]?: any;
    // [IContributeType.Themes]?: IColorTheme[];
    // [IContributeType.IconTheme]?: IIconTheme[];
}

/**
 * The interface of extension,
 * there need every extension to implement this interface
 */
export interface IExtension {
    /**
     * The ID of extension required
     */
    id: UniqueId;
    /**
     * The name of extension
     */
    name: string;
    /**
     * The display name of extension
     */
    displayName?: string;
    /**
     * The version of extension
     */
    version?: string;
    /**
     * The categories of extension
     */
    categories?: IExtensionType[];
    /**
     * The kind of extension
     */
    extensionKind?: IExtensionType[];
    /**
     * The main file path of extension
     * Extension system will load the extension by this file
     */
    contributes?: IContribute;
    /**
     * The entry of extension
     */
    main?: string;
    /**
     * The Icon of extension
     */
    icon?: string | JSX.Element;
    /**
     * The description of extension
     */
    description?: string;
    /**
     * The publisher of extension
     */
    publisher?: string;
    /**
     * The path of extension
     */
    path?: string;
    /**
     * Whether disable current extension, the extension default status is enable
     */
    disable?: boolean;
    /**
     * Do something you want when the Extension is activating.
     * The ExtensionService will call the `activate` method after
     * added the Extension instance.
     * @param extensionCtx The Context of Extension instance
     */
    activate(extensionCtx: any): void;
    /**
     * Do something when the Extension disposing.
     * For example, you can recover the UI state, or remove the Objects in memory.
     * @param extensionCtx The Context of Extension instance
     */
    dispose?(extensionCtx: any): void;
}
