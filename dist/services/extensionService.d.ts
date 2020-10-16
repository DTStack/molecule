import { IContribute, IExtension, IExtensionEntry } from '@/core/extension';
import { IMolecule } from '@/core/molecule';
export declare class ExtensionService {
    extensions: IExtension[];
    moleculeCtx: IMolecule;
    constructor(extensionEntry: IExtensionEntry | undefined, moleculeCtx: IMolecule);
    /**
     * TODO: Current extension service can't parses VSCode theme, so needs to refactor
     * @param param0 extensionEntry object
     * @param moleculeCtx the context object of molecule
     */
    load({ location, extensions }: IExtensionEntry, moleculeCtx: IMolecule): void;
    loadContributes(contributes: IContribute): void;
    unload(id: string): void;
}
