import type React from 'react';

import type { ILocale } from './models/locale';
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
import type { SearchService } from './services/search';
import type { SettingsService } from './services/setting';
import type { SidebarService } from './services/sidebar';
import type { StatusBarService } from './services/statusBar';
import type { TreeNodeModel } from './utils/tree';
import type { editor, KeyCode, languages } from './monaco';

/**
 * Represents the type of a position.
 * It can be either 'auto' or a number.
 */
export type PosType = 'auto' | number;

/**
 * Represents a functional type that takes a value of type T and returns a value of type T.
 * @template T The type of the value.
 */
export type Functional<T> = (prev: T) => T;

/**
 * Represents a variant type that can either be of type T or a functional type.
 * @template T - The base type of the variant.
 */
export type Variant<T> = T | Functional<T>;

/**
 * Represents a type that can be either an array of T or a single instance of T.
 * @template T - The type of the elements in the array or the single instance.
 */
export type Arraylize<T> = T[] | T;

/**
 * Represents a type that includes an optional `hidden` property.
 * If `T` is `void`, it will only have the `hidden` property.
 * Otherwise, it will have all properties of `T` and the `hidden` property.
 */
export type WithHidden<T extends object | void> = T extends void ? { hidden?: boolean } : T & { hidden?: boolean };

/**
 * @refer: https://code.visualstudio.com/api/references/icons-in-labels#icon-listing
 */
export type IconType = string | JSX.Element;

/**
 * Represents a type that requires an 'id' property of type UniqueId.
 * @template T - The type that requires an 'id' property.
 */
export type RequiredId<T extends { id: UniqueId }> = Partial<T> & Required<Pick<T, 'id'>>;

/**
 * Represents a record with an ID.
 * @template T - The type of additional properties in the record.
 */
export type RecordWithId<T> = T & { id: UniqueId };

/**
 * Represents a tree model with generic type T.
 */
export type TreeModel<T> = RecordWithId<{ children?: T[] }>;

/**
 * Represents a generic render function.
 * @template T The type of data to be rendered.
 */
export type Render<T> = {
    render?: RenderFunction<T>;
};

/**
 * Extends the parameters of a function type with additional arguments.
 *
 * @template T - The function type to extend.
 * @template Arguments - The additional arguments to add to the function type.
 * @returns A new function type with the extended parameters.
 */
export type ExtendParameters<T, Arguments extends any[]> = T extends (...args: infer P) => infer R
    ? (...args: [...P, ...Arguments]) => R
    : never;

/**
 * Represents a function that renders an item of type T and returns a React node.
 * @template T The type of the item to be rendered.
 * @param item The item to be rendered.
 * @returns A React node representing the rendered item.
 */
export type RenderFunction<T> = (item: T) => React.ReactNode;

/**
 * Represents an iterable item with optional properties.
 */
export type IterableItem = RecordWithId<
    WithHidden<{
        /**
         * The name of the item.
         */
        name?: React.ReactNode;
        /**
         * The icon type of the item.
         */
        icon?: IconType;
        /**
         * The sort index of the item.
         */
        sortIndex?: number;
        /**
         * Indicates if the item is disabled.
         */
        disabled?: boolean;
    }>
>;

/**
 * Represents the properties of an HTML element.
 */
export interface HTMLElementProps {
    /**
     * The title of the HTML element.
     */
    title?: string;
    /**
     * The inline style of the HTML element.
     */
    style?: React.CSSProperties;
    /**
     * The class name of the HTML element.
     */
    className?: string;
    /**
     * The role of the HTML element.
     */
    role?: string;
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
 * The SearchMode of search
 */
export enum SearchMode {
    list = 'list',
    tree = 'tree',
}
export type SearchModeLiteral = keyof typeof SearchMode;

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

/**
 * Represents a unique identifier that can be either a string or a number.
 */
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
    controllers: Record<string, any>;
    modules: Map<string, Factory | null>;
    localize: Localize;
}

/**
 * Represents the type of a factory function..
 */
export type Factory = ReturnType<Parameters<typeof React.lazy>[0]>;

export type IMoleculeContext = IContext['molecule'];

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
export type Localize = (sourceKey: string, defaultValue: string, ...args: any[]) => string;

/**
 * Represents the properties of a menu item.
 */
/**
 * Represents the properties of a menu item.
 */
export interface IMenuItemProps extends Render<IMenuItemProps>, IterableItem, TreeModel<IMenuItemProps> {
    /**
     * The type of the menu item.
     */
    type?: 'divider';
    /**
     * The grouping of menu items.
     */
    group?: 'inline';
    /**
     * The description of the keybinding.
     * Example: ⇧⌘P
     */
    keybinding?: string;
    /**
     * The symbolic identifier of the menu item.
     */
    symbolic?: UniqueId;
    /**
     * The title of the menu item.
     */
    title?: string;
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
    Modules = 'modules',
}

/**
 * Represents the contribution interface.
 */
export interface IContribute {
    /**
     * Optional contribution for languages.
     */
    [IContributeType.Languages]?: ILocale[];
    /**
     * Optional contribution for commands.
     */
    [IContributeType.Commands]?: any[];
    // [IContributeType.Configuration]?: any;
    [IContributeType.Grammar]?: (languages.ILanguageExtensionPoint & {
        scopeName: string;
        /**
         * The path of the grammar file.
         */
        grammar: string;
        /**
         * Scopes that are injected *into* this scope. For example, the
         * `text.html.markdown` scope likely has a number of injections to support
         * fenced code blocks.
         */
        injections?: string[];
    })[];
    /**
     * Optional contribution for themes.
     */
    [IContributeType.Themes]?: IColorTheme[];
    /**
     * Optional contribution for modules.
     */
    [IContributeType.Modules]?: Record<string, Factory | null>;
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
     * @deprecated
     */
    displayName?: string;
    /**
     * The version of extension
     * @deprecated
     */
    version?: string;
    /**
     * The categories of extension
     * @deprecated
     */
    categories?: IExtensionType[];
    /**
     * The kind of extension
     * @deprecated
     */
    extensionKind?: IExtensionType[];
    /**
     * The main file path of extension
     * Extension system will load the extension by this file
     */
    contributes?: IContribute;
    /**
     * The entry of extension
     * @deprecated
     */
    main?: string;
    /**
     * The Icon of extension
     * @deprecated
     */
    icon?: IconType;
    /**
     * The description of extension
     * @deprecated
     */
    description?: string;
    /**
     * The publisher of extension
     * @deprecated
     */
    publisher?: string;
    /**
     * The path of extension
     * @deprecated
     */
    path?: string;
    /**
     * Whether disable current extension, the extension default status is enable
     * @deprecated
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

export type MenuHandler = (item: IMenuItemProps) => void;
export type GroupMenuHandler = ExtendParameters<MenuHandler, [groupId: UniqueId]>;

/**
 * Represents the properties of a breadcrumb item.
 */
export interface IBreadcrumbItemProps extends Render<IBreadcrumbItemProps> {
    /**
     * The unique identifier of the breadcrumb item.
     */
    id: UniqueId;
    /**
     * The name of the breadcrumb item.
     */
    name: string;
    /**
     * The icon type of the breadcrumb item.
     */
    icon?: IconType;
}

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

/**
 * Represents a keyboard event handler with extended parameters.
 * @template T - The type of the event target.
 */
export type KeyboardEventHandler<T> = ExtendParameters<React.KeyboardEventHandler<T>, [treeNode: TreeNodeModel<any>]>;

/**
 * Represents a focus event handler with extended parameters.
 * @template T The type of the event target.
 */
export type FocusEventHandler<T> = ExtendParameters<React.FocusEventHandler<T>, [treeNode: TreeNodeModel<any>]>;

export type IPosition = {
    x: number;
    y: number;
};

/**
 * Represents a position handler function.
 * @param position - The position parameter.
 */
export type PositionHandler = (position: IPosition) => void;
/**
 * Represents a handler for a context menu with parameters of type T.
 * @template T - The type of parameters for the context menu handler.
 */
export type ContextMenuHandler<T extends any[]> = ExtendParameters<PositionHandler, T>;

/**
 * Represents a function that predicts a partial value of type T based on input data.
 * @template T The type of the input data and the partial value to be predicted.
 * @param data The input data used for prediction.
 * @returns A partial value of type T predicted based on the input data.
 */
export type Predict<T, R = Partial<T>> = (data: T) => R;

// ========== ActivityBar Types ==========
/**
 * Represents the top activity bar item.
 */
export interface ITopActivityBarItem extends HTMLElementProps, IterableItem, Render<IActivityBarItem> {
    alignment: 'top';
}

/**
 * Represents a bottom activity bar item.
 */
export interface IBottomActivityBarItem extends HTMLElementProps, IterableItem, Render<IActivityBarItem> {
    /**
     * The alignment of the activity bar item.
     */
    alignment: 'bottom';
    /**
     * The context menu for the activity bar item.
     */
    contextMenu?: IMenuItemProps[];
}

/**
 * Represents an activity bar item that can be either a top activity bar item or a bottom activity bar item.
 */
export type IActivityBarItem = ITopActivityBarItem | IBottomActivityBarItem;

// ========== Color Themes ==========
/**
 * Represents the color settings for a token.
 */
export interface TokenColor {
    /**
     * The name of the token color.
     */
    name?: string;
    /**
     * The scope(s) to which the token color applies.
     */
    scope?: Arraylize<string>;
    /**
     * Additional settings for the token color.
     */
    settings?: Record<string, string>;
}

/**
 * Represents a color theme.
 */
export type IColorTheme = {
    /**
     * The label of the color theme.
     */
    label: string;
    /**
     * The UI theme of the color theme.
     */
    uiTheme: editor.BuiltinTheme;
} & RecordWithId<{
    /**
     * The name of the color theme.
     */
    name?: string;
    /**
     * The description of the color theme.
     */
    description?: string;
    /**
     * The colors defined in the color theme.
     */
    colors?: Record<string, string | null>;
    /**
     * The token colors defined in the color theme.
     */
    tokenColors?: TokenColor[];
    /**
     * Whether semantic highlighting is enabled for the color theme.
     * Semantic highlighting enhances the highlighting in the editor.
     * For more information, visit: https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide
     */
    semanticHighlighting?: boolean;
}>;
// ========== Editor ==========

/**
 * Represents an editor tab.
 * @template T - The type of data associated with the tab.
 */
export interface IEditorTab<T> extends Render<IEditorTab<T>>, Pick<IterableItem, 'id' | 'name' | 'icon'> {
    model?: editor.ITextModel;
    /**
     * If value is a string, render the editor.
     * If value is an array, render the diffEditor.
     * The array format is [original, modified].
     */
    value?: string | [string, string];
    language?: string;
    breadcrumb?: IBreadcrumbItemProps[];
    modified?: boolean;
    data?: T;
    diffEditorModel?: editor.IDiffEditorModel;
}

export type TabGroup = { tabId: UniqueId; groupId: UniqueId };

/**
 * Represents the result for search
 */
export interface SearchResult {
    /**
     * The total count of search result
     */
    total: number;
    /**
     * The results of search
     */
    results: RecordWithId<SearchResultItem>[];
}

/**
 * Represents a search result item.
 */
export interface SearchResultItem {
    /**
     * The filename of the search result item.
     */
    filename: string;
    /**
     * The path of the search result item.
     */
    path?: string;
    /**
     * The text of the search result item.
     */
    data: string;
    /**
     * The line number of the search result item.
     */
    lineNumber: number;
    icon?: TreeNodeModel<any>['icon'];
    disabled?: TreeNodeModel<any>['disabled'];
}
