import { ReactElement } from 'react';
import { ILocale } from 'mo/i18n';
import { container } from 'tsyringe';
import type { Controller } from 'mo/react';
import { defaultExtensions } from 'mo/extensions';
import { GlobalEvent } from 'mo/common/event';
import { IConfigProps } from 'mo/provider/create';
import { IExtension } from 'mo/model';
import { STORE_KEY } from 'mo/i18n/localeService';
import molecule from 'mo';
import {
    ActivityBarController,
    AuxiliaryController,
    EditorController,
    EditorTreeController,
    ExplorerController,
    ExtensionController,
    FolderTreeController,
    LayoutController,
    MenuBarController,
    NotificationController,
    OutlineController,
    PanelController,
    ProblemsController,
    SearchController,
    SettingsController,
    SidebarController,
    StatusBarController,
} from 'mo/controller';

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

export default class InstanceService
    extends GlobalEvent
    implements IInstanceServiceProps
{
    private _config = {
        extensions: defaultExtensions.concat(),
        defaultLocale: 'en',
    };

    private rendered = false;

    constructor(config: IConfigProps) {
        super();
        if (config.defaultLocale) {
            this._config.defaultLocale = config.defaultLocale;
        }

        if (Array.isArray(config.extensions)) {
            this._config.extensions.push(...config.extensions);
        }
    }

    private initialLocaleService = (languagesExts: IExtension[]) => {
        const locales = languagesExts.reduce((pre, cur) => {
            const languages = cur.contributes?.languages || [];
            return pre.concat(languages);
        }, [] as ILocale[]);

        molecule.i18n.initialize(
            locales,
            localStorage.getItem(STORE_KEY) || this._config.defaultLocale
        );
    };

    public getConfig: () => IConfigProps = () => {
        return Object.assign({}, this._config);
    };

    public render = (workbench: ReactElement) => {
        if (!this.rendered) {
            this.emit(InstanceHookKind.beforeInit);

            // get all locales including builtin and custom locales
            const [languages, others] = molecule.extension.splitLanguagesExts(
                this._config.extensions
            );
            this.initialLocaleService(languages);

            const controllers = [
                ActivityBarController,
                AuxiliaryController,
                EditorController,
                /**
                 * Explorer should called before EditorTreeController,
                 * @refer https://github.com/DTStack/molecule/issues/829
                 */
                ExplorerController,
                EditorTreeController,
                ExtensionController,
                FolderTreeController,
                LayoutController,
                MenuBarController,
                NotificationController,
                OutlineController,
                PanelController,
                ProblemsController,
                SearchController,
                SettingsController,
                SidebarController,
                StatusBarController,
            ];

            // resolve all controllers, and call `initView` to inject initial values into services
            Object.keys(controllers).forEach((key) => {
                const module = controllers[key];
                const controller = container.resolve<Controller>(module);
                controller.initView?.();
            });

            this.emit(InstanceHookKind.beforeLoad);
            molecule.extension.load(others);

            molecule.layout.onWorkbenchDidMount(() => {
                molecule.monacoService.initWorkspace(
                    molecule.layout.container!
                );
            });
            this.rendered = true;
        }

        return workbench;
    };

    public onBeforeInit = (callback: () => void) => {
        this.subscribe(InstanceHookKind.beforeInit, callback);
    };

    public onBeforeLoad = (callback: () => void) => {
        this.subscribe(InstanceHookKind.beforeLoad, callback);
    };
}
