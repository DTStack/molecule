/**
 * Defines extension types
 */
export enum IExtensionType {
    Theme = 'themes',
    Normal = 'normal',
    Languages = 'languages',
    Settings = 'settings',
    Locals = 'locals',
    Menus = 'menus',
    Commands = 'commands',
    Workbench = 'workbench'
}

export interface IContribute extends Object{
    [IExtensionType.Theme]: {

    }
}

/**
 * The interface of extension,
 * there need every extension to implement this interface
 */
export interface IExtension extends Object {
    /**
     * The name of extension
     */
    name: string;
    /**
     * The display name of extension
     */
    displayName: string;
    /**
     * The version of extension
     */
    version: string;
    /**
     * The categories of extension
     */
    categories: IExtensionType[],
    /**
     * The main file path of extension
     * Extension system will load the extension by this file
     */
    contributes: IContribute,
    /**
     * The entry of extension
     */
    main: string,
    /**
     * The description of extension
     */
    description: string,
    /**
     * Whether disable current extension, the extension default status is enable
     */
    disable: boolean;
}
