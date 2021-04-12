import { IContribute, IExtension } from 'mo/model/extension';
export interface IExtensionService {
    /**
     * The extensions
     */
    extensions?: IExtension[];
    /**
     * Load extensions
     * @param extensionEntry
     * @param moleculeCtx
     */
    load(extensions: IExtension[]): any;
    loadContributes(contributes: IContribute): any;
    unload(extension: IExtension): any;
}
export declare class ExtensionService implements IExtensionService {
    extensions: IExtension[];
    constructor(extensions?: IExtension[]);
    load(extensions?: IExtension[]): void;
    loadContributes(contributes: IContribute): void;
    unload(extension: IExtension): void;
}
