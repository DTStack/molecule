import 'reflect-metadata';
import { container } from 'tsyringe';
import React, { createContext, Component } from 'react';

import { IColorTheme } from 'mo/model/colorTheme';
import { defaultExtensions } from 'mo/extensions';
import { IExtension } from 'mo/model/extension';
import { ILocale } from 'mo/i18n/localization';
import {
    ExtensionService,
    IExtensionService,
} from 'mo/services/extensionService';
import { IMonacoService, MonacoService } from 'mo/monaco/monacoService';
import { ILocaleService, LocaleService } from 'mo/i18n/localeService';
import { ILayoutService, LayoutService } from 'mo/services';

export interface IMoleculeProps {
    extensions?: IExtension[];
    /**
     * Locales data
     */
    locales?: ILocale[];
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
    private readonly localeService!: ILocaleService;
    private readonly layoutService!: ILayoutService;

    constructor(props: IMoleculeProps) {
        super(props);
        this.localeService = container.resolve(LocaleService);
        this.monacoService = container.resolve(MonacoService);
        this.extensionService = container.resolve(ExtensionService);
        this.layoutService = container.resolve(LayoutService);
        this.preloadLocales();
    }

    componentDidMount() {
        this.initialize();
    }

    preloadLocales() {
        const { locales = [], defaultLocale } = this.props;
        this.localeService.initialize(locales, defaultLocale);
    }

    public get container() {
        return this.layoutService.container;
    }

    initialize() {
        const { extensions = [] } = this.props;

        this.monacoService.initWorkspace(this.container!);
        this.extensionService.load(defaultExtensions);
        this.extensionService.load(extensions);
    }

    public render() {
        return (
            <MoleculeCtx.Provider value={{}}>
                {this.props.children}
            </MoleculeCtx.Provider>
        );
    }
}
