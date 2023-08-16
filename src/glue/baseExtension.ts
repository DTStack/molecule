import type { IContribute, IExtensionType, UniqueId } from 'mo/types';

export default abstract class BaseExtension {
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
    activate(): void {
        throw new Error('Should achieve activate method');
    }
    /**
     * Do something when the Extension disposing.
     * For example, you can recover the UI state, or remove the Objects in memory.
     * @param extensionCtx The Context of Extension instance
     */
    dispose?(): void;

    constructor(id: UniqueId, name: string) {
        this.id = id;
        this.name = name;
    }
}
