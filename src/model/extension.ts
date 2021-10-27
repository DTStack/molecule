import { IExtensionService } from 'mo/services';
import { IColorTheme } from './colorTheme';
import { IIconTheme } from './iconTheme';
import { ILocale } from 'mo/i18n';

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
    [IContributeType.Commands]?: any;
    [IContributeType.Configuration]?: any;
    [IContributeType.Grammar]?: any;
    [IContributeType.Themes]?: IColorTheme[];
    [IContributeType.IconTheme]?: IIconTheme[];
}

/**
 * The interface of extension,
 * there need every extension to implement this interface
 */
export interface IExtension {
    /**
     * The ID of extension required
     */
    id: string;
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
    activate(extensionCtx: IExtensionService): void;
    /**
     * Do something when the Extension disposing.
     * For example, you can recover the UI state, or remove the Objects in memory.
     * @param extensionCtx The Context of Extension instance
     */
    dispose(extensionCtx: IExtensionService): void;
}
