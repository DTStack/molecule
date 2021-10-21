import 'reflect-metadata';
import { singleton, container } from 'tsyringe';
import { ErrorMsg } from 'mo/common/error';
import { IContribute, IContributeType, IExtension } from 'mo/model/extension';
import { IColorTheme } from 'mo/model/colorTheme';
import { ILocaleService, LocaleService, ILocale } from 'mo/i18n';
import logger from 'mo/common/logger';
import {
    ColorThemeService,
    IColorThemeService,
} from './theme/colorThemeService';
import { Action2, registerAction2 } from 'mo/monaco/common';
import { IMonacoService, MonacoService } from 'mo/monaco/monacoService';
import { searchById } from 'mo/common/utils';

export interface IExtensionService {
    /**
     * Load the extension instances and then activate them.
     * Notice: The ExtensionService doesn't load an existed Extension, if you want inactivate
     * someone extension, there can use the `ExtensionService.inactive` method, also if you want
     * remove a extension, you can use the `ExtensionService.dispose` method.
     * @param extensions The extension array
     */
    load(extensions: IExtension[]): void;
    /**
     * Add the extensions to ExtensionService, but no activated.
     * @param extensions The Extensions wait to added
     * @returns Unload Extensions
     */
    add(extensions: IExtension[]): IExtension[] | null;
    /**
     * Activate the extensions (includes `contributes` type).
     * Notice: this method only do  the `activate` work, not store the data into ExtensionService,
     * which means you can't get the Extension by the `ExtensionService. getExtension` method.
     * @param extensions
     */
    activate(extensions: IExtension[]): void;
    /**
     * Get an extension by the ID
     * @param name The extension ID
     */
    getExtension(id: string): IExtension | undefined;
    /**
     * Get All loaded extensions
     * @return Extension Array
     */
    getAllExtensions(): IExtension[];
    /**
     * Dispose the specific extension, and remove it from the ExtensionService
     * @param extension The extension name is required
     */
    dispose(extensionId: string): void;
    /**
     * Dispose all extensions, and reset the ExtensionService
     */
    disposeAll(): void;
    /**
     * Disable to activate some extensions, make use of it to filter some
     * extensions no need to activate. You need register the inactive event before the MoleculeProvider declaration.
     * @example
     * ```ts
     *  molecule.extension.inactive((extension: IExtension) => {
     *      if (/^(idA|idB)$/.test(extension.id)) {
     *          return true;
     *      }
     *  });
     *  <MoleculeProvider extensions={[]}></MoleculeProvider>
     * ```
     * @param predicate The predicate function
     */
    inactive(predicate: (extension: IExtension) => boolean): void;

    /**
     * Register a new action which is extends the Action2,
     * @example
     * ```ts
     * const action = class Action extends Action2 {};
     * registerAction(action);
     * ```
     */
    registerAction(actionClass: { new (): Action2 }): void;
    /**
     * Execute the registered command
     * @param id The command ID
     * @param args
     */
    executeCommand(id: string, ...args: any): void;
    /**
     * Reset the extensions to `[]`
     */
    reset(): void;
}

@singleton()
export class ExtensionService implements IExtensionService {
    private extensions: IExtension[] = [];
    private readonly colorThemeService: IColorThemeService;
    private readonly monacoService: IMonacoService;
    private _inactive: Function | undefined;
    private readonly localeService: ILocaleService;

    constructor(extensions: IExtension[] = []) {
        this.colorThemeService = container.resolve(ColorThemeService);
        this.monacoService = container.resolve(MonacoService);
        this.localeService = container.resolve(LocaleService);
    }

    public getExtension(id: string): IExtension | undefined {
        return this.extensions.find(searchById(id));
    }

    public reset(): void {
        this.extensions = [];
    }

    public getAllExtensions(): IExtension[] {
        return this.extensions.concat();
    }

    public add(extensions: IExtension[]): IExtension[] | null {
        if (!extensions || extensions?.length === 0) return null;
        /**
         * Filtered the exist Extensions
         */
        const unloadExtensions = extensions.filter((ext) => {
            const isExist = this.extensions.find(searchById(ext.id));
            if (isExist) {
                logger.warn(
                    'Warning: Unable to load the existed Extension:' + ext.id
                );
            }
            return !isExist;
        });
        if (unloadExtensions.length > 0) {
            this.extensions = this.extensions.concat(unloadExtensions);
        }
        return unloadExtensions;
    }

    public load(extensions: IExtension[]) {
        try {
            // First add the extensions
            const unloadExtensions = this.add(extensions);
            if (!unloadExtensions) return;

            // Then activate
            this.activate(unloadExtensions);
        } catch (e) {
            logger.error(ErrorMsg.LoadExtensionFail);
        }
    }

    public loadContributes(contributes: IContribute) {
        const contributeKeys = Object.keys(contributes);
        contributeKeys.forEach((type: string) => {
            switch (type) {
                case IContributeType.Themes: {
                    const themes: IColorTheme[] | undefined = contributes[type];
                    if (!themes) return;
                    return this.colorThemeService.addThemes(themes);
                }
                case IContributeType.Languages: {
                    const locales: ILocale[] | undefined = contributes[type];
                    if (!locales) return;
                    return this.localeService.addLocales(locales);
                }
            }
        });
    }

    public registerAction(actionClass: { new (): Action2 }) {
        registerAction2(actionClass);
    }

    public executeCommand(id, ...args) {
        this.monacoService.commandService.executeCommand(id, ...args);
    }

    public activate(extensions: IExtension[]): void {
        if (extensions.length === 0) return;

        const ctx = this;
        extensions?.forEach((extension: IExtension, index: number) => {
            // Ignore the inactive or invalid extension
            if (!extension || this.isInactive(extension)) return;

            if (extension.activate) {
                extension.activate(ctx);
            }

            if (extension.contributes) {
                this.loadContributes(extension.contributes);
            }
        });
    }

    public dispose(extensionId: string): void {
        const ctx = this;
        const extIndex = this.extensions.findIndex(searchById(extensionId));
        if (extIndex > -1) {
            const extension: IExtension = this.extensions[extIndex];
            extension.dispose?.(ctx);
            this.extensions.splice(extIndex, 1);
        }
    }

    public disposeAll() {
        this.extensions.forEach((ext) => {
            ext.dispose?.(this);
        });
        this.reset();
    }

    public inactive(predicate: (extension: IExtension) => boolean): void {
        this._inactive = predicate;
    }

    private isInactive(extension: IExtension): boolean {
        if (this._inactive && typeof this._inactive === 'function') {
            return this._inactive(extension);
        }
        return false;
    }
}
