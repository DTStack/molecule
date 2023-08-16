import React from 'react';
import { createRoot } from 'react-dom/client';
import Container from 'mo/client/container';
import * as controller from 'mo/controllers';
import defaultExtensions from 'mo/extensions';
import { GlobalEvent } from 'mo/glue';
import { container, type InjectionToken, Lifecycle } from 'tsyringe';
import type { constructor } from 'tsyringe/dist/typings/types';

import { AuxiliaryBarService } from './auxiliaryBar';
import { BuiltinService } from './builtin';
import { LayoutService } from './layout';
import { LocaleService } from './locale';
import { StatusBarService } from './statusBar';

// [TODO)
type IExtension = any;

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
        extensions: defaultExtensions.concat(),
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

        if (Array.isArray(config.extensions)) {
            this._config.extensions.push(...config.extensions);
        }

        this.register('locale', LocaleService);
        this.register('builtin', BuiltinService);
        this.register('auxiliaryBar', AuxiliaryBarService);
        this.register('layout', LayoutService);
        this.register('statusBar', StatusBarService);
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
        const builtin = this.resolve<BuiltinService>('builtin');
        this.emit(InstanceHookKind.beforeInit);

        this.emit(InstanceHookKind.beforeLoad);

        const auxiliaryBar = this.resolve<AuxiliaryBarService>('auxiliaryBar');
        const layout = this.resolve<LayoutService>('layout');
        const statusBar = this.resolve<StatusBarService>('statusBar');

        const layoutController = this.resolve(controller.layout.LayoutController);
        const statusBarController = this.resolve(controller.statusBar.StatusBarController);

        this.root = this.root || createRoot(container);
        this.root.render(
            React.createElement(Container, {
                value: {
                    molecule: { auxiliaryBar, layout, statusBar, locale, builtin },
                    controllers: {
                        layout: layoutController,
                        statusBar: statusBarController,
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
