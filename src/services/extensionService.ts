import { singleton, inject, container } from 'tsyringe';
import { ErrorMsg } from 'mo/common/error';
import { IContribute, IContributeType, IExtension } from 'mo/model/extension';

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
    load(extensions: IExtension[]);
    loadContributes(contributes: IContribute);
    unload(extension: IExtension);
}

@singleton()
export class ExtensionService implements IExtensionService {
    public extensions: IExtension[] = [];

    constructor(
        @inject('Extensions') extensions: IExtension[] = [],
    ) {
        this.load(extensions);
    }

    /**
     * TODO: Current extension service can't parses VSCode theme, so needs to refactor
     * @param param0 extensionEntry object
     * @param moleculeCtx the context object of molecule
     */
    public load(extensions: IExtension[] = []) {
        try {
            if (extensions?.length === 0) return;
            this.extensions = this.extensions.concat(extensions);
            const ctx = this;

            extensions?.forEach((extension: IExtension, index: number) => {
                if (extension.activate) {
                    extension.activate(ctx);
                } else {
                    // TODO: different kind of extension ,different hand
                    // throw new Error(ErrorMsg.NotFoundActivateMethod);
                }
                if (extension.contributes) {
                    this.loadContributes(extension.contributes);
                }
            });
        } catch (e) {
            console.error(ErrorMsg.LoadExtensionFail, e);
        }
    }

    public loadContributes(contributes: IContribute) {
        const contributeKeys = Object.keys(contributes);
        contributeKeys.forEach((type: string) => {
            if (type === IContributeType.Commands) {
                console.log('contributeKeys:', type);
                // ThemeService.load(extension[type]);
                // exts.push(extension);
            }
        });
    }

    unload(extension: IExtension) {
        console.log('unload extension:', extension.name);
    }
}

container.register('Extensions', { useValue: [] });
