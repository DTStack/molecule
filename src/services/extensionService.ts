import 'reflect-metadata';
import { singleton, inject, container } from 'tsyringe';
import { ErrorMsg } from 'mo/common/error';
import { IContribute, IContributeType, IExtension } from 'mo/model/extension';
import { IColorTheme } from 'mo/model/colorTheme';
import logger from 'mo/common/logger';
import {
    ColorThemeService,
    IColorThemeService,
} from './theme/colorThemeService';
import { Action2, registerAction2 } from 'mo/monaco/common';
import { IMonacoService, MonacoService } from 'mo/monaco/monacoService';

export interface IExtensionService {
    /**
     * Load the extension objects and then execute them
     * @param extensions The extension array
     */
    load(extensions: IExtension[]);
    /**
     * Get an extension by name
     * @param name The extension name
     */
    getExtension(name: string): IExtension | undefined;
    /**
     * Get All loaded extensions
     * @return Extension Array
     */
    getAllExtensions(): IExtension[];
    /**
     * Remove the specific extension
     * @param extension The extension name is required
     */
    remove(extension: IExtension);
    /**
     * Reset the extensions data
     */
    reset(): void;
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
}

@singleton()
export class ExtensionService implements IExtensionService {
    private extensions: IExtension[] = [];
    private readonly colorThemeService: IColorThemeService;
    private readonly monacoService: IMonacoService;

    constructor(@inject('Extensions') extensions: IExtension[] = []) {
        this.load(extensions);
        this.colorThemeService = container.resolve(ColorThemeService);
        this.monacoService = container.resolve(MonacoService);
    }

    public getExtension(name: string): IExtension | undefined {
        return this.extensions.find((ext) => ext.name === name);
    }

    public reset(): void {
        this.extensions = [];
    }

    public getAllExtensions(): IExtension[] {
        return this.extensions.concat();
    }

    public load(extensions: IExtension[]) {
        try {
            if (extensions?.length === 0) return;
            this.extensions = this.extensions.concat(extensions);
            logger.info('ExtensionService.extensions:', this.extensions);
            const ctx = this;
            extensions?.forEach((extension: IExtension, index: number) => {
                if (extension && extension.activate) {
                    extension.activate(ctx);
                }

                if (extension && extension.contributes) {
                    this.loadContributes(extension.contributes);
                }
            });
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
                    if (themes) {
                        this.colorThemeService.load(themes);
                    }
                }
                // TODO: support the Commands type of extension
                // case IContributeType.Commands: {
                //     this.registerAction();
                // }
            }
        });
    }

    public registerAction(actionClass: { new (): Action2 }) {
        registerAction2(actionClass);
    }

    public executeCommand(id, ...args) {
        this.monacoService.commandService.executeCommand(id, ...args);
    }

    public remove(extension: IExtension): IExtension[] | undefined {
        const extIndex = this.extensions.findIndex(
            (ext) => ext.name === extension.name
        );
        if (extIndex > -1) {
            return this.extensions.splice(extIndex, 1);
        }
        return undefined;
    }
}

container.register('Extensions', { useValue: [] });
