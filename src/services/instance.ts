import React from 'react';
import { createRoot } from 'react-dom/client';
import Container from 'mo/client/container';
import * as controller from 'mo/controllers';
import defaultExtensions from 'mo/extensions';
import { GlobalEvent } from 'mo/glue';
import type { IExtension } from 'mo/types';
import { container, type InjectionToken, Lifecycle } from 'tsyringe';
import type { constructor } from 'tsyringe/dist/typings/types';

import { AuxiliaryBarService } from './auxiliaryBar';
import { BuiltinService } from './builtin';
import { ExtensionService } from './extension';
import { LayoutService } from './layout';
import { LocaleService } from './locale';
import { MenuBarService } from './menuBar';
import { StatusBarService } from './statusBar';

export interface IConfigProps {
    /**
     * Molecule Extension instances, after the MoleculeProvider
     * did mount, then handle it.
     */
    extensions?: IExtension[];
    /**
     * Specify a default locale Id, the Molecule built-in `zh-CN`, `en` two languages, and
     * default locale Id is `en`.
     */
    defaultLocale?: string;
}

interface IInstanceServiceProps {
    getConfig: () => IConfigProps;
    render: (container?: HTMLElement | null) => void;
    onBeforeInit: (callback: () => void) => void;
    onBeforeLoad: (callback: () => void) => void;
}

enum InstanceHookKind {
    beforeInit = 'before.init',
    beforeLoad = 'before.load',
}

export default class InstanceService extends GlobalEvent implements IInstanceServiceProps {
    private root: ReturnType<typeof createRoot> | undefined;
    private _config: Required<IConfigProps> = {
        extensions: [],
        defaultLocale: 'en',
    };

    private childContainer = container.createChildContainer();

    private register<T>(token: string, cto: constructor<T>) {
        this.childContainer.register(token, cto, {
            lifecycle: Lifecycle.ContainerScoped,
        });
    }

    private resolve<T>(token: InjectionToken<T>) {
        return this.childContainer.resolve<T>(token);
    }

    constructor(config: IConfigProps) {
        super();
        if (config.defaultLocale) {
            this._config.defaultLocale = config.defaultLocale;
        }
        this._config.extensions.push(...defaultExtensions);

        if (Array.isArray(config.extensions)) {
            this._config.extensions.push(...config.extensions);
        }

        // ================ register all service ====================
        this.register('locale', LocaleService);
        this.register('builtin', BuiltinService);
        this.register('extension', ExtensionService);
        this.register('auxiliaryBar', AuxiliaryBarService);
        this.register('layout', LayoutService);
        this.register('statusBar', StatusBarService);
        this.register('menuBar', MenuBarService);
        // ==========================================================
    }

    // private initialLocaleService = (languagesExts: IExtension[]) => {
    // const locales = languagesExts.reduce((pre, cur) => {
    //     const languages = cur.contributes?.languages || [];
    //     return pre.concat(languages);
    // }, [] as ILocale[]);
    // molecule.i18n.initialize(
    //     locales,
    //     localStorage.getItem(STORE_KEY) || this._config.defaultLocale
    // );
    // };

    public getConfig: () => IConfigProps = () => {
        return Object.assign({}, this._config);
    };

    public render = (container?: HTMLElement | null) => {
        if (!container) return null;
        const locale = this.resolve<LocaleService>('locale');
        locale.setCurrentLocale(this._config.defaultLocale);
        const extension = this.resolve<ExtensionService>('extension');
        extension.add(this._config.extensions);

        const builtin = this.resolve<BuiltinService>('builtin');
        this.emit(InstanceHookKind.beforeInit);

        this.emit(InstanceHookKind.beforeLoad);

        const auxiliaryBar = this.resolve<AuxiliaryBarService>('auxiliaryBar');
        const layout = this.resolve<LayoutService>('layout');
        const statusBar = this.resolve<StatusBarService>('statusBar');
        const menuBar = this.resolve<MenuBarService>('menuBar');

        const layoutController = this.resolve(controller.layout.LayoutController);
        const statusBarController = this.resolve(controller.statusBar.StatusBarController);
        const menuBarController = this.resolve(controller.menuBar.MenuBarController);

        this.root = this.root || createRoot(container);
        this.root.render(
            React.createElement(Container, {
                value: {
                    molecule: { auxiliaryBar, layout, statusBar, locale, builtin, menuBar },
                    localize: locale.localize,
                    controllers: {
                        layout: layoutController,
                        statusBar: statusBarController,
                        menuBar: menuBarController,
                    } as any,
                },
            })
        );
    };

    public onBeforeInit = (callback: () => void) => {
        this.subscribe(InstanceHookKind.beforeInit, callback);
    };

    public onBeforeLoad = (callback: () => void) => {
        this.subscribe(InstanceHookKind.beforeLoad, callback);
    };

    public dispose() {
        this.childContainer.clearInstances();
    }
}
