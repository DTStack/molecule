import 'reflect-metadata';
import { container } from 'tsyringe';
import React, { createContext, Component } from 'react';

import { defaultExtensions } from 'mo/extensions';
import { BuiltInDefault } from 'mo/extensions/locales-defaults';
import { IExtension } from 'mo/model/extension';
import {
    ExtensionService,
    IExtensionService,
} from 'mo/services/extensionService';
import { LocaleService, ILocaleService } from 'mo/i18n';
import { STORE_KEY } from 'mo/i18n/localeService';
import { IMonacoService, MonacoService } from 'mo/monaco/monacoService';
import { ILayoutService, LayoutService } from 'mo/services';
import * as controllers from 'mo/controller';
import type { Controller } from 'mo/react';

export interface IMoleculeProps {
    /**
     * Molecule Extension instances, after the MoleculeProvider
     * did mount, then handle it.
     */
    extensions?: IExtension[];
    /**
     * Specify a default locale Id, the Molecule built-in zh-CN, en two languages.
     */
    defaultLocale?: string;
}
export interface IMoleculeState {}

export const MoleculeCtx = createContext({});

export class MoleculeProvider extends Component<IMoleculeProps> {
    private readonly extensionService!: IExtensionService;
    private readonly monacoService!: IMonacoService;
    private readonly layoutService!: ILayoutService;
    private readonly localeService!: ILocaleService;

    constructor(props: IMoleculeProps) {
        super(props);

        this.monacoService = container.resolve(MonacoService);
        this.extensionService = container.resolve(ExtensionService);
        this.layoutService = container.resolve(LayoutService);
        this.localeService = container.resolve(LocaleService);
    }

    componentDidMount() {
        // Note: the initControllers method must executing before the initExtensions,
        // because many of extensions depend on the Controllers init the Services state
        this.initControllers();
        this.initExtensions();
    }

    loadLocaleExts(languages: IExtension[]) {
        const { defaultLocale = BuiltInDefault } = this.props;

        this.extensionService.load(languages);

        // And Molecule should set the correct locale before loading normal extensions in case of
        // the localize method returns incorrect international text caused by incorrect current locale in the normal extensions
        const currentLocale = localStorage.getItem(STORE_KEY) || defaultLocale;
        this.localeService.setCurrentLocale(currentLocale);
    }

    initExtensions() {
        const { extensions = [] } = this.props;

        const [languages, resetExts] = this.extensionService.splitLanguagesExts(
            extensions
        );

        this.monacoService.initWorkspace(this.layoutService.container!);

        // Molecule should load the language extensions first to
        // ensure that the custom language extensions is registered in localeService
        this.loadLocaleExts(languages);

        this.extensionService.load(defaultExtensions);
        this.extensionService.load(resetExts);
    }

    /**
     * Register all controllers and execute the initView method automatically to inject the default value
     * into the corresponding service
     */
    initControllers() {
        Object.keys(controllers).forEach((key) => {
            const module = controllers[key];
            const controller = container.resolve<Controller>(module);
            controller.initView?.();
        });
    }

    public render() {
        return (
            <MoleculeCtx.Provider value={{}}>
                {this.props.children}
            </MoleculeCtx.Provider>
        );
    }
}
