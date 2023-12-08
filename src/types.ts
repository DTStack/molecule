import type { editor, KeyCode } from 'monaco-editor';

import type { IColorTheme } from './models/colorTheme';
import type { ILocale, LocaleKind } from './models/locale';
import type { ActionService } from './services/action';
import type { ActivityBarService } from './services/activityBar';
import type { AuxiliaryBarService } from './services/auxiliaryBar';
import type { BuiltinService } from './services/builtin';
import type { ColorThemeService } from './services/colorTheme';
import type { ContextMenuService } from './services/contextMenu';
import type { EditorService } from './services/editor';
import type { EditorTreeService } from './services/editorTree';
import type { ExplorerService } from './services/explorer';
import type { FolderTreeService } from './services/folderTree';
import type { LayoutService } from './services/layout';
import type { LocaleService } from './services/locale';
import type { MenuBarService } from './services/menuBar';
import type { MonacoService } from './services/monaco';
import type { NotificationService } from './services/notification';
import type { OutputService } from './services/output';
import type { PanelService } from './services/panel';
import { SearchService } from './services/search';
import type { SettingsService } from './services/setting';
import type { SidebarService } from './services/sidebar';
import type { StatusBarService } from './services/statusBar';
import { TreeNodeModel } from './utils/tree';
import type { BaseController } from './glue';

export type { IEditorTab } from './models/editor';

export type RequiredId<T extends { id: UniqueId }> = Partial<T> & Required<Pick<T, 'id'>>;

export type BuiltinTheme = editor.BuiltinTheme;

export type RecordWithId<T> = { id: UniqueId; [key: string]: any } & T;

export type TreeModel<T> = RecordWithId<{ children?: T[] }>;

/**
 * The type definition for the each iterable item
 */
export interface IItemProps {
    id: UniqueId;
    name?: string;
    hidden?: boolean;
    icon?: IconType;
    sortIndex?: number;
}

export interface ISimpleKeybinding {
    ctrlKey: boolean;
    shiftKey: boolean;
    altKey: boolean;
    metaKey: boolean;
    keyCode: KeyCode;
}

export enum KeybindingWeight {
    EditorCore = 0,
    EditorContrib = 100,
    WorkbenchContrib = 200,
    BuiltinExtension = 300,
    ExternalExtension = 400,
}

/**
 * The Alignment of layout
 */
export enum Alignment {
    top = 'top',
    bottom = 'bottom',
    left = 'left',
    right = 'right',
}
export type AlignmentLiteral = keyof typeof Alignment;

/**
 * The Direction of layout
 */
export enum Direction {
    vertical = 'vertical',
    horizontal = 'horizontal',
}
export type DirectionLiteral = keyof typeof Direction;

/**
 * The FolderTree types
 */
export enum FileTypes {
    File = 'File',
    Folder = 'Folder',
    RootFolder = 'RootFolder',
}
export type FileTypeLiteral = keyof typeof FileTypes;

export interface HTMLElementProps {
    title?: string;
    style?: React.CSSProperties;
    className?: string;
    role?: string;
}

export type UniqueId = string | number;

export interface IContext {
    molecule: {
        contextMenu: ContextMenuService;
        auxiliaryBar: AuxiliaryBarService;
        layout: LayoutService;
        statusBar: StatusBarService;
        locale: LocaleService;
        builtin: BuiltinService;
        menuBar: MenuBarService;
        activityBar: ActivityBarService;
        sidebar: SidebarService;
        explorer: ExplorerService;
        folderTree: FolderTreeService;
        panel: PanelService;
        output: OutputService;
        editor: EditorService;
        colorTheme: ColorThemeService;
        action: ActionService;
        editorTree: EditorTreeService;
        notification: NotificationService;
        search: SearchService;
        settings: SettingsService;
    };
    monaco: MonacoService;
    controllers: { [key in keyof IContext['molecule']]: BaseController };
    localize: Localize;
}
export type IMoleculeContext = IContext['molecule'];

export type Functional<T> = (prev: T) => T;
export type FunctionalOrSingle<T> = T | ((prev: T) => T);
export type ArraylizeOrSingle<T> = T[] | T;

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

// https://code.visualstudio.com/api/references/icons-in-labels#icon-listing
export type IconType = string | JSX.Element;

/**
 * Context Menu types
 */
export interface IMenuItemProps extends TreeModel<IMenuItemProps> {
    /**
     * The name of icon
     */
    icon?: IconType;
    type?: 'divider';
    /**
     * the grouping of menu items.
     */
    group?: 'inline';
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

/**
 * Color scheme used by the OS and by color themes.
 */
export enum ColorScheme {
    DARK = 'dark',
    LIGHT = 'light',
    HIGH_CONTRAST = 'hc',
}

export type ColorSchemeLiteral = Lowercase<keyof typeof ColorScheme>;

export interface IContribute {
    [IContributeType.Languages]?: ILocale[];
    [IContributeType.Commands]?: any[];
    // [IContributeType.Configuration]?: any;
    // [IContributeType.Grammar]?: any;
    [IContributeType.Themes]?: IColorTheme[];
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
    icon?: IconType;
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
     * @param ctx The Context of Extension instance
     */
    activate(ctx: IMoleculeContext, monaco: MonacoService): void;
    /**
     * Do something when the Extension disposing.
     * For example, you can recover the UI state, or remove the Objects in memory.
     * @param ctx The Context of Extension instance
     */
    dispose?(ctx: IMoleculeContext): void;
}

/**
 * Extend the parameters for a function
 */
type ExtendParameters<T, Arguments extends any[]> = T extends (...args: infer P) => infer R
    ? (...args: [...P, ...Arguments]) => R
    : never;

export type ContextMenuEventHandler = (item: IMenuItemProps) => void;
export type ContextMenuEditorHandler = ExtendParameters<
    ContextMenuEventHandler,
    [tabId: UniqueId, groupId: UniqueId]
>;
export type ContextMenuGroupHandler = ExtendParameters<
    ContextMenuEventHandler,
    [groupId: UniqueId]
>;

export type RenderProps<T> = {
    render?: RenderFunctionProps<T>;
};
export type RenderFunctionProps<T> = (item: T) => React.ReactNode;

/**
 * The type definition for the Tab data construct
 */
export interface ITabProps<T = any, P = any> extends RenderProps<ITabProps<T, P>>, IItemProps {
    /**
     * Mark the tab status to be closable,
     * Default is true
     */
    closable?: boolean;
    data?: T;
}

export interface IBreadcrumbItemProps extends RenderProps<IBreadcrumbItemProps> {
    id: UniqueId;
    name: string;
    icon?: IconType;
}

export enum DragAction {
    /** dragOver */
    hover = 'hover',
    /** drop */
    drop = 'drop',
}

export type IDragProps = {
    type: DragAction;
    from: {
        groupId: UniqueId;
        tabId: UniqueId;
    };
    to: {
        groupId: UniqueId;
        tabId: UniqueId;
    };
    info: Record<string, any>;
};

export type IEditorOptions = editor.IEditorOptions;

/**
 * validate status
 */
export enum ValidateStatus {
    info = 'info',
    warning = 'warning',
    error = 'error',
    validating = 'validating',
}
export type ValidateStatusLiteral = keyof typeof ValidateStatus;

/**
 * validate status for input
 */
export type InputValidateInfo = {
    status: ValidateStatusLiteral;
    message: string;
};

type ISearchResultData = {
    language: string;
    value: string;
    breadcrumb: string[];
};
export type SearchResultItem = TreeNodeModel<ISearchResultData>;
export type MouseEventHandler<T = HTMLDivElement> = (e: React.MouseEvent<T, MouseEvent>, node: TreeNodeModel<any>) => void;

export type KeyboardEventHandler<T = HTMLDivElement> = (e: React.KeyboardEvent<T>, node: TreeNodeModel<any>) => void;

export type FolderTreeInsertOption = {
    /**
     * drag type， same level or child level，default is same level
     * true： child level
     * false：same level
     */
    gap?: boolean;
    /**
     * insert index
     */
    index?: number;
};
