import 'reflect-metadata';
import { container } from 'tsyringe';
import React, { createContext, Component } from 'react';

import { defaultExtensions } from 'mo/extensions';
import { BuiltInId } from 'mo/extensions/locales-defaults';
import { IExtension } from 'mo/model/extension';
import {
    ExtensionService,
    IExtensionService,
} from 'mo/services/extensionService';
import { LocaleService, ILocaleService } from 'mo/i18n';
import { STORE_KEY, DEFAULT_LOCALE_ID } from 'mo/i18n/localeService';
import { IMonacoService, MonacoService } from 'mo/monaco/monacoService';
import { ILayoutService, LayoutService } from 'mo/services';
import * as controllers from 'mo/controller';
import type { Controller } from '@dtinsight/molecule-glue';

export interface IMoleculeProps {
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
        // The monacoService needs to be initialized each time the MoleculeProvider is loaded to
        // ensure that Keybinding events can be bound to the latest dom.
        this.monacoService.initWorkspace(this.layoutService.container!);

        if (!this.extensionService.isLoaded()) {
            this.initialize();
        }
    }

    initialize() {
        const { extensions = [] } = this.props;

        const [languages, restExts] =
            this.extensionService.splitLanguagesExts(extensions);

        // Molecule should load the language extensions first to
        // ensure that the custom language extensions is registered in localeService
        this.initLocaleExts(languages);

        // The Workbench depends on the monaco and locale extension
        this.initWorkbenchUI();

        // Init the built-in extensions
        this.extensionService.load(defaultExtensions);

        // Finally, handle the rest of extensions
        this.extensionService.load(restExts);

        // Mark the extensionService as loaded
        this.extensionService.setLoaded();
    }

    initLocaleExts(languages: IExtension[]) {
        const { defaultLocale = BuiltInId } = this.props;

        this.extensionService.load(languages);

        // And Molecule should set the correct locale before loading normal extensions in case of
        // the localize method returns incorrect international text caused by incorrect current locale in the normal extensions
        const currentLocale = localStorage.getItem(STORE_KEY) || defaultLocale;
        const preDefaultLocale = localStorage.getItem(DEFAULT_LOCALE_ID);
        let finalLocale = currentLocale;

        if (defaultLocale !== preDefaultLocale) {
            finalLocale = defaultLocale;
        }

        this.localeService.setCurrentLocale(finalLocale);
        localStorage.setItem(DEFAULT_LOCALE_ID, defaultLocale);
    }

    /**
     * Register all controllers and execute the initView method automatically to inject the default value
     * into the corresponding service
     */
    initWorkbenchUI() {
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
