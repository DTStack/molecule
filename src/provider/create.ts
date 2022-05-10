import { ILocaleService, LocaleService } from 'mo/i18n';
import { IExtension } from 'mo/model';
import { IMonacoService, MonacoService } from 'mo/monaco/monacoService';
import {
    ActivityBarService,
    BuiltinService,
    ColorThemeService,
    EditorService,
    EditorTreeService,
    ExplorerService,
    ExtensionService,
    FolderTreeService,
    IActivityBarService,
    IBuiltinService,
    IColorThemeService,
    IEditorService,
    IEditorTreeService,
    IExplorerService,
    IExtensionService,
    IFolderTreeService,
    ILayoutService,
    IMenuBarService,
    INotificationService,
    IPanelService,
    IProblemsService,
    ISearchService,
    ISettingsService,
    ISidebarService,
    IStatusBarService,
    LayoutService,
    MenuBarService,
    NotificationService,
    PanelService,
    ProblemsService,
    SearchService,
    SettingsService,
    SidebarService,
    StatusBarService,
} from 'mo/services';
import InstanceService from 'mo/services/instanceService';
import { container, InjectionToken } from 'tsyringe';

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

enum ServiceUuidKind {
    monacoService = 'monacoService',
    layout = 'layout',
    i18n = 'i18n',
    activityBar = 'activityBar',
    explorer = 'explorer',
    folderTree = 'folderTree',
    editorTree = 'editorTree',
    search = 'search',
    sidebar = 'sidebar',
    menuBar = 'menuBar',
    editor = 'editor',
    statusBar = 'statusBar',
    panel = 'panel',
    notification = 'notification',
    problems = 'problems',
    colorTheme = 'colorTheme',
    settings = 'settings',
    builtin = 'builtin',
    extension = 'extension',
}

export type IServiceCollection = {
    [ServiceUuidKind.monacoService]: IMonacoService;
    [ServiceUuidKind.layout]: ILayoutService;
    [ServiceUuidKind.i18n]: ILocaleService;
    [ServiceUuidKind.activityBar]: IActivityBarService;
    [ServiceUuidKind.explorer]: IExplorerService;
    [ServiceUuidKind.folderTree]: IFolderTreeService;
    [ServiceUuidKind.editorTree]: IEditorTreeService;
    [ServiceUuidKind.search]: ISearchService;
    [ServiceUuidKind.sidebar]: ISidebarService;
    [ServiceUuidKind.menuBar]: IMenuBarService;
    [ServiceUuidKind.editor]: IEditorService;
    [ServiceUuidKind.statusBar]: IStatusBarService;
    [ServiceUuidKind.panel]: IPanelService;
    [ServiceUuidKind.notification]: INotificationService;
    [ServiceUuidKind.problems]: IProblemsService;
    [ServiceUuidKind.colorTheme]: IColorThemeService;
    [ServiceUuidKind.settings]: ISettingsService;
    [ServiceUuidKind.builtin]: IBuiltinService;
    [ServiceUuidKind.extension]: IExtensionService;
};

namespace stanalone {
    let instance: InstanceService | null = null;

    // used for internal
    const _services = <any>{};
    // used for user
    export const molecule: Partial<IServiceCollection> = {};

    function registerService<T extends IServiceCollection[ServiceUuidKind]>(
        Service: InjectionToken<T>,
        uuid: ServiceUuidKind
    ) {
        const service = container.resolve<T>(Service);
        _services[uuid] = service;

        molecule[uuid] = new Proxy(<any>{}, {
            get: function (_, prop) {
                if (!instance) {
                    console.warn(
                        new Error(
                            "Don't call service's methods before initialize the instance"
                        )
                    );
                    return () => {};
                }

                return service[prop];
            },
        });
    }

    registerService(MonacoService, ServiceUuidKind.monacoService);
    registerService(LayoutService, ServiceUuidKind.layout);
    registerService(LocaleService, ServiceUuidKind.i18n);
    registerService(ActivityBarService, ServiceUuidKind.activityBar);
    registerService(ExplorerService, ServiceUuidKind.explorer);
    registerService(FolderTreeService, ServiceUuidKind.folderTree);
    registerService(EditorTreeService, ServiceUuidKind.editorTree);
    registerService(SearchService, ServiceUuidKind.search);
    registerService(SidebarService, ServiceUuidKind.sidebar);
    registerService(MenuBarService, ServiceUuidKind.menuBar);
    registerService(EditorService, ServiceUuidKind.editor);
    registerService(StatusBarService, ServiceUuidKind.statusBar);
    registerService(PanelService, ServiceUuidKind.panel);
    registerService(NotificationService, ServiceUuidKind.notification);
    registerService(ProblemsService, ServiceUuidKind.problems);
    registerService(ColorThemeService, ServiceUuidKind.colorTheme);
    registerService(SettingsService, ServiceUuidKind.settings);
    registerService(BuiltinService, ServiceUuidKind.builtin);
    registerService(ExtensionService, ServiceUuidKind.extension);

    /**
     * Create an instance
     */
    export function create(config: IConfigProps) {
        if (instance) {
            return instance;
        }
        instance = new InstanceService(config, _services);
        return instance;
    }
}

export default function create(config: IConfigProps) {
    return stanalone.create(config);
}

export const molecule = <IServiceCollection>stanalone.molecule;
