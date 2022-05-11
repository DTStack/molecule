import { ReactNode } from 'react';
import { ILocale } from 'mo/i18n';
import { container } from 'tsyringe';
import * as controllers from 'mo/controller';
import type { Controller } from 'mo/react';
import { defaultExtensions } from 'mo/extensions';
import { GlobalEvent } from 'mo/common/event';
import { IConfigProps, IServiceCollection } from 'mo/provider/create';
import { IExtension } from 'mo/model';
import { STORE_KEY } from 'mo/i18n/localeService';

interface IInstanceServiceProps {
    render: (dom: any) => void;
    onBeforeInit: (callback: () => void) => void;
    onBeforeLoad: (callback: () => void) => void;
}

enum InstanceHookKind {
    beforeInit = 'before.init',
    beforeLoad = 'before.load',
}

export default class InstanceService
    extends GlobalEvent
    implements IInstanceServiceProps
{
    private _services: IServiceCollection;
    private _config = {
        extensions: defaultExtensions,
        defaultLocale: 'en',
    };

    constructor(config: IConfigProps, services: IServiceCollection) {
        super();
        this._services = services;

        if (config.defaultLocale) {
            this._config.defaultLocale = config.defaultLocale;
        }

        if (Array.isArray(config.extensions)) {
            this._config.extensions.push(...config.extensions);
        }
    }

    public initialLocaleService = (languagesExts: IExtension[]) => {
        const locales = languagesExts.reduce((pre, cur) => {
            const languages = cur.contributes?.languages || [];
            return pre.concat(languages);
        }, [] as ILocale[]);

        this._services.i18n.initialize(
            locales,
            localStorage.getItem(STORE_KEY) || this._config.defaultLocale
        );
    };

    public render = (workbench: ReactNode) => {
        this.emit(InstanceHookKind.beforeInit);

        // get all locales including builtin and custom locales
        const [languages, others] = this._services.extension.splitLanguagesExts(
            this._config.extensions
        );
        this.initialLocaleService(languages);

        // resolve all controllers, and call `initView` to inject initial values into services
        Object.keys(controllers).forEach((key) => {
            const module = controllers[key];
            const controller = container.resolve<Controller>(module);
            controller.initView?.();
        });

        this.emit(InstanceHookKind.beforeLoad);
        this._services.extension.load(others);

        this._services.monacoService.initWorkspace(
            this._services.layout.container!
        );

        return workbench;
    };

    public onBeforeInit = (callback: () => void) => {
        this.subscribe(InstanceHookKind.beforeInit, callback);
    };

    public onBeforeLoad = (callback: () => void) => {
        this.subscribe(InstanceHookKind.beforeLoad, callback);
    };
}
