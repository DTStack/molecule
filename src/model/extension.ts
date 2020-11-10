import { IExtensionService } from 'mo/services';

/**
 * Defines extension types
 */
export enum IExtensionType {
    Theme = 'themes',
    Normal = 'normal',
    Settings = 'settings',
    Locals = 'locals',
    Menus = 'menus',
    Workbench = 'workbench',
}

export enum IContributeType {
    Languages = 'languages',
    Commands = 'commands',
    Configuration = 'configuration',
    Grammar = 'grammars',
}

export interface IContribute {
    [IContributeType.Languages]: any;
    [IContributeType.Commands]: any;
    [IContributeType.Configuration]: any;
    [IContributeType.Grammar]: any;
}

/**
 * The interface of extension,
 * there need every extension to implement this interface
 */
export interface IExtension {
    /**
     * The name of extension
     */
    name?: string;
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
    icon?: string;
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
     * Activate current extension
     */
    activate(extensionCtx: IExtensionService): void;
}
