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
    /**
     * Register action based in Action2,
     * @example
     * ```ts
     * const action = class Action extends Action2 {};
     * registerAction(action);
     * ```
     */
    registerAction(actionClass: { new (): Action2 }): void;
}

@singleton()
export class ExtensionService implements IExtensionService {
    public extensions: IExtension[] = [];
    private readonly colorThemeService: IColorThemeService;

    constructor(@inject('Extensions') extensions: IExtension[] = []) {
        this.load(extensions);
        this.colorThemeService = container.resolve(ColorThemeService);
    }

    public load(extensions: IExtension[] = []) {
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
            console.error(ErrorMsg.LoadExtensionFail, e);
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
                case IContributeType.Commands: {
                    // registerAction2();
                }
            }
        });
    }

    public registerAction(actionClass: { new (): Action2 }) {
        registerAction2(actionClass);
    }

    unload(extension: IExtension) {
        console.log('unload extension:', extension.name);
    }
}

container.register('Extensions', { useValue: [] });
