import 'reflect-metadata';
import { container } from 'tsyringe';
import * as React from 'react';

import { IColorTheme } from 'mo/model/colorTheme';
import { defaultExtensions } from 'mo/extensions';
import { IExtension } from 'mo/model/extension';
import { ILocale } from 'mo/i18n/localization';
import {
    ExtensionService,
    IExtensionService,
} from 'mo/services/extensionService';
import { ID_APP } from 'mo/common/id';
import { IMonacoService, MonacoService } from 'mo/monaco/monacoService';
import { CommandQuickAccessViewAction } from 'mo/monaco/quickAccessViewAction';
import { registerAction2 } from 'mo/monaco/common';
import { QuickAccessSettings } from 'mo/monaco/quickAccessSettingsAction';
import { SelectColorThemeAction } from 'mo/monaco/selectColorThemeAction';
import { ILocaleService, LocaleService } from 'mo/i18n/localeService';
import { SelectLocaleAction } from 'mo/i18n/selectLocaleAction';
export interface IMoleculeProps {
    extensions?: IExtension[];
    locales?: ILocale[];
    /**
     * Localization id
     */
    locale?: string;
    colorTheme?: IColorTheme[];
}
export interface IMoleculeState {}

export const MoleculeCtx = React.createContext({});
export class MoleculeProvider extends React.Component<IMoleculeProps> {
    private readonly extensionService!: IExtensionService;
    private readonly monacoService!: IMonacoService;
    private readonly localeService!: ILocaleService;

    constructor(props: IMoleculeProps) {
        super(props);
        this.localeService = container.resolve(LocaleService);
        this.monacoService = container.resolve(MonacoService);
        this.extensionService = container.resolve(ExtensionService);

        this.preloadLocales();
    }

    componentDidMount() {
        this.initialize();
    }

    public get container() {
        return document.getElementById(ID_APP) || document.body;
    }

    preloadLocales() {
        const { locales = [], locale } = this.props;
        this.localeService.initialize(locales, locale);
    }

    initialize() {
        const { extensions = [] } = this.props;

        this.monacoService.initWorkspace(this.container);
        this.extensionService.load(defaultExtensions);
        this.extensionService.load(extensions);

        this.initWorkbenchActions();
    }

    /**
     * TODO: move the register of actions to extensionService
     */
    initWorkbenchActions() {
        registerAction2(CommandQuickAccessViewAction);
        registerAction2(SelectColorThemeAction);
        registerAction2(QuickAccessSettings);
        registerAction2(SelectLocaleAction);
    }

    public render() {
        return (
            <MoleculeCtx.Provider value={{}}>
                {this.props.children}
            </MoleculeCtx.Provider>
        );
    }
}
