import React, { ReactElement } from 'react';
import Container from 'mo/client/container';
import { IWorkbenchProps } from 'mo/client/workbench';
import * as controller from 'mo/controllers';
import defaultExtensions from 'mo/extensions';
import { GlobalEvent } from 'mo/glue';
import { container, Lifecycle } from 'tsyringe';

import { AuxiliaryBarService } from './auxiliaryBar';
import { LayoutService } from './layout';

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
    render: (dom: ReactElement) => ReactElement;
    onBeforeInit: (callback: () => void) => void;
    onBeforeLoad: (callback: () => void) => void;
}

enum InstanceHookKind {
    beforeInit = 'before.init',
    beforeLoad = 'before.load',
}

export default class InstanceService extends GlobalEvent implements IInstanceServiceProps {
    private _config: Required<IConfigProps> = {
        extensions: defaultExtensions.concat(),
        defaultLocale: 'en',
    };

    private childContainer = container.createChildContainer();

    constructor(config: IConfigProps) {
        super();
        if (config.defaultLocale) {
            this._config.defaultLocale = config.defaultLocale;
        }

        if (Array.isArray(config.extensions)) {
            this._config.extensions.push(...config.extensions);
        }

        this.childContainer.register('auxiliaryBar', AuxiliaryBarService, {
            lifecycle: Lifecycle.ContainerScoped,
        });
        this.childContainer.register('layout', LayoutService, {
            lifecycle: Lifecycle.ContainerScoped,
        });
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

    public render = (workbench: ReactElement) => {
        this.emit(InstanceHookKind.beforeInit);

        this.emit(InstanceHookKind.beforeLoad);

        const auxiliaryBar = this.childContainer.resolve<AuxiliaryBarService>('auxiliaryBar');
        const layout = this.childContainer.resolve<LayoutService>('layout');

        const layoutController = this.childContainer.resolve(controller.layout.LayoutController);

        return React.createElement(
            Container,
            { value: { molecule: { auxiliaryBar, layout } } },
            React.cloneElement(workbench, {
                onEditorChange: layoutController.onEditorChange,
                onSideChange: layoutController.onSideChange,
            } as IWorkbenchProps)
        );
    };

    public onBeforeInit = (callback: () => void) => {
        this.subscribe(InstanceHookKind.beforeInit, callback);
    };

    public onBeforeLoad = (callback: () => void) => {
        this.subscribe(InstanceHookKind.beforeLoad, callback);
    };
}
