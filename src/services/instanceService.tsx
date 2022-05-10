import { ILocaleService } from 'mo/i18n';
import { container } from 'tsyringe';
import * as controllers from 'mo/controller';
import type { Controller } from 'mo/react';
import { defaultExtensions } from 'mo/extensions';
import { GlobalEvent } from 'mo/common/event';
import { IConfigProps, IServiceCollection } from 'mo/provider/create';
import { ReactNode } from 'react';

interface IInstanceServiceProps {
    render: (dom: any) => void;
    onBeforeInit: (callback: () => void) => void;
}

enum InstanceHookKind {
    beforeInit = 'before.init',
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
            const localeService: ILocaleService = this._services.i18n;
            localeService.setCurrentLocale(config.defaultLocale);

            this._config.defaultLocale = config.defaultLocale;
        }

        if (Array.isArray(config.extensions)) {
            this._config.extensions.push(...config.extensions);
        }
    }

    public render = (workbench: ReactNode) => {
        this.emit(InstanceHookKind.beforeInit);

        Object.keys(controllers).forEach((key) => {
            const module = controllers[key];
            const controller = container.resolve<Controller>(module);
            controller.initView?.();
        });

        this._services.extension.load(this._config.extensions);

        this._services.monacoService.initWorkspace(
            this._services.layout.container!
        );

        return workbench;
    };

    public onBeforeInit = (callback: () => void) => {
        this.subscribe(InstanceHookKind.beforeInit, callback);
    };
}
