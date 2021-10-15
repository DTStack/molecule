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
import {
    EditorController,
    EditorTreeController,
    ExplorerController,
    IEditorController,
    IEditorTreeController,
    IExplorerController,
    INotificationController,
    IOutlineController,
    IPanelController,
    IProblemsController,
    ISearchController,
    IStatusBarController,
    NotificationController,
    OutlineController,
    PanelController,
    ProblemsController,
    SearchController,
    StatusBarController,
} from 'mo/controller';

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

    private readonly explorerController: IExplorerController;
    private readonly editorTreeController: IEditorTreeController;
    private readonly outlineController: IOutlineController;
    private readonly editorController: IEditorController;
    private readonly problemsController: IProblemsController;
    private readonly noticationController: INotificationController;
    private readonly statusBarController: IStatusBarController;
    private readonly searchController: ISearchController;
    private readonly panelController: IPanelController;

    constructor(props: IMoleculeProps) {
        super(props);
        this.localeService = container.resolve(LocaleService);
        this.monacoService = container.resolve(MonacoService);
        this.extensionService = container.resolve(ExtensionService);
        this.layoutService = container.resolve(LayoutService);

        this.explorerController = container.resolve(ExplorerController);
        this.editorTreeController = container.resolve(EditorTreeController);
        this.outlineController = container.resolve(OutlineController);
        this.editorController = container.resolve(EditorController);
        this.problemsController = container.resolve(ProblemsController);
        this.noticationController = container.resolve(NotificationController);
        this.statusBarController = container.resolve(StatusBarController);
        this.searchController = container.resolve(SearchController);
        this.panelController = container.resolve(PanelController);
        this.preloadLocales();
    }

    componentDidMount() {
        this.initialize();
        this.explorerController.initView?.();
        this.editorTreeController.initView();
        this.outlineController.initView();
        this.editorController.initView?.();
        this.problemsController.initView?.();
        this.noticationController.initView?.();
        this.statusBarController.initView?.();
        this.searchController.initView?.();
        this.panelController.initView?.();
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
