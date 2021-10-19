import 'reflect-metadata';
import { container } from 'tsyringe';
import React, { createContext, Component } from 'react';

import { IColorTheme } from 'mo/model/colorTheme';
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
    extensions?: IExtension[];
    /**
     * Specify a default locale
     */
    defaultLocale?: string;
    colorTheme?: IColorTheme[];
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
        this.initialize();
        this.initControllers();
    }

    public get container() {
        return this.layoutService.container;
    }

    initialize() {
        const { extensions = [], defaultLocale = BuiltInDefault } = this.props;

        const currentLocale = localStorage.getItem(STORE_KEY) || defaultLocale;
        /**
         * TODO: 添加针对主题的默认值
         */
        this.monacoService.initWorkspace(this.container!);
        this.extensionService.load(defaultExtensions);
        this.extensionService.load(extensions);
        const locales = this.localeService.getLocales();
        this.localeService.initialize(locales, currentLocale);
    }

    /**
     * Register all controllers and execute the initView method automatically to inject the default value into the corresponding service
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
