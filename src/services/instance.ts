import React from 'react';
import { createRoot } from 'react-dom/client';
import Container from 'mo/client/container';
import { APP_PREFIX } from 'mo/const';
import { GlobalEvent } from 'mo/glue';
import type { IExtension } from 'mo/types';
import { getValue, setValue } from 'mo/utils/storage';
import { container, type InjectionToken, Lifecycle } from 'tsyringe';
import type { constructor } from 'tsyringe/dist/typings/types';

import type { ActionService } from './action';
import type { ActivityBarService } from './activityBar';
import type { AuxiliaryBarService } from './auxiliaryBar';
import type { BuiltinService } from './builtin';
import type { ColorThemeService } from './colorTheme';
import type { ContextMenuService } from './contextMenu';
import type { EditorService } from './editor';
import type { EditorTreeService } from './editorTree';
import type { ExplorerService } from './explorer';
import type { ExtensionService } from './extension';
import type { FolderTreeService } from './folderTree';
import type { LayoutService } from './layout';
import { LocaleService } from './locale';
import type { MenuBarService } from './menuBar';
import type { ModuleService } from './module';
import type { MonacoService } from './monaco';
import type { NotificationService } from './notification';
import type { OutputService } from './output';
import type { PanelService } from './panel';
import type { SearchService } from './search';
import type { SettingsService } from './setting';
import type { SidebarService } from './sidebar';
import type { StatusBarService } from './statusBar';

export interface IConfigProps {
    /**
     * Molecule Extension instances, after the MoleculeProvider
     * did mount, then handle it.
     */
    extensions?: IExtension[];
    /**
     * Specify a default locale Id, the Molecule built-in `zh-CN`, `en-US` two languages, and
     * default locale Id is `en-US`.
     */
    defaultLocale?: 'zh-CN' | 'en-US' | 'ko-KR' | (string & {});
}

interface IInstanceServiceProps {
    getConfig: () => IConfigProps;
    render: (container?: HTMLElement | null) => void;
    onBeforeInit: (callback: () => void) => void;
    onBeforeLoad: (callback: () => void) => void;
}

enum InstanceHookKind {
    beforeInit = 'before.init',
    beforeLoad = 'before.load',
}

export class InstanceService extends GlobalEvent implements IInstanceServiceProps {
    private root: ReturnType<typeof createRoot> | undefined;
    private _config: Required<IConfigProps> = {
        extensions: [],
        defaultLocale: 'en-US',
    };

    private loading = true;

    private childContainer = container.createChildContainer();

    private register<T>(token: string, cto: constructor<T>) {
        this.childContainer.register(token, cto, {
            lifecycle: Lifecycle.ContainerScoped,
        });
    }

    private resolve<T>(token: InjectionToken<T>) {
        return this.childContainer.resolve<T>(token);
    }

    private createRootElement() {
        const div = document.createElement('div');
        div.id = APP_PREFIX;
        return div;
    }

    private localeInit(defaultLocale: IConfigProps['defaultLocale']) {
        const storedLocale = getValue(LocaleService.STORE_KEY);
        return storedLocale || defaultLocale || this._config.defaultLocale;
    }

    private getServices() {
        const locale = this.resolve<LocaleService>('locale');
        locale.setCurrent(this._config.defaultLocale);
        const builtin = this.resolve<BuiltinService>('builtin');
        this.emit(InstanceHookKind.beforeInit);

        this.emit(InstanceHookKind.beforeLoad);
        const module = this.resolve<ModuleService>('module');
        const monaco = this.resolve<MonacoService>('monaco');
        const contextMenu = this.resolve<ContextMenuService>('contextMenu');
        const auxiliaryBar = this.resolve<AuxiliaryBarService>('auxiliaryBar');
        const layout = this.resolve<LayoutService>('layout');
        const statusBar = this.resolve<StatusBarService>('statusBar');
        const menuBar = this.resolve<MenuBarService>('menuBar');
        const activityBar = this.resolve<ActivityBarService>('activityBar');
        const sidebar = this.resolve<SidebarService>('sidebar');
        const explorer = this.resolve<ExplorerService>('explorer');
        const folderTree = this.resolve<FolderTreeService>('folderTree');
        const panel = this.resolve<PanelService>('panel');
        const output = this.resolve<OutputService>('output');
        const editor = this.resolve<EditorService>('editor');
        const colorTheme = this.resolve<ColorThemeService>('colorTheme');
        const editorTree = this.resolve<EditorTreeService>('editorTree');
        const notification = this.resolve<NotificationService>('notification');
        const search = this.resolve<SearchService>('search');
        const settings = this.resolve<SettingsService>('settings');
        const action = this.resolve<ActionService>('action');

        // extensions should resolved after all other services
        const extension = this.resolve<ExtensionService>('extension');

        return {
            locale,
            builtin,
            contextMenu,
            auxiliaryBar,
            layout,
            statusBar,
            menuBar,
            activityBar,
            sidebar,
            explorer,
            folderTree,
            panel,
            output,
            editor,
            colorTheme,
            action,
            editorTree,
            notification,
            search,
            settings,
            monaco,
            module,
            extension,
        };
    }

    private async registerServices() {
        // ===================== Dynamic import all services =====================
        // FIXME: Performance
        return Promise.all([
            import('./action'),
            import('./activityBar'),
            import('./auxiliaryBar'),
            import('./builtin'),
            import('./colorTheme'),
            import('./contextMenu'),
            import('./editor'),
            import('./editorTree'),
            import('./explorer'),
            import('./extension'),
            import('./folderTree'),
            import('./layout'),
            import('./locale'),
            import('./menuBar'),
            import('./module'),
            import('./monaco'),
            import('./notification'),
            import('./output'),
            import('./panel'),
            import('./search'),
            import('./setting'),
            import('./sidebar'),
            import('./statusBar'),
        ]).then(
            ([
                { ActionService },
                { ActivityBarService },
                { AuxiliaryBarService },
                { BuiltinService },
                { ColorThemeService },
                { ContextMenuService },
                { EditorService },
                { EditorTreeService },
                { ExplorerService },
                { ExtensionService },
                { FolderTreeService },
                { LayoutService },
                { LocaleService },
                { MenuBarService },
                { ModuleService },
                { MonacoService },
                { NotificationService },
                { OutputService },
                { PanelService },
                { SearchService },
                { SettingsService },
                { SidebarService },
                { StatusBarService },
            ]) => {
                // =====================================================
                this.register('action', ActionService);
                this.register('activityBar', ActivityBarService);
                this.register('auxiliaryBar', AuxiliaryBarService);
                this.register('builtin', BuiltinService);
                this.register('colorTheme', ColorThemeService);
                this.register('contextMenu', ContextMenuService);
                this.register('editor', EditorService);
                this.register('editorTree', EditorTreeService);
                this.register('explorer', ExplorerService);
                this.register('extension', ExtensionService);
                this.register('folderTree', FolderTreeService);
                this.register('layout', LayoutService);
                this.register('locale', LocaleService);
                this.register('menuBar', MenuBarService);
                this.register('module', ModuleService);
                this.register('monaco', MonacoService);
                this.register('notification', NotificationService);
                this.register('output', OutputService);
                this.register('panel', PanelService);
                this.register('search', SearchService);
                this.register('settings', SettingsService);
                this.register('sidebar', SidebarService);
                this.register('statusBar', StatusBarService);
            }
        );
    }

    private async downloadNLS() {
        const locale = getValue(LocaleService.STORE_KEY);
        if (locale) {
            switch (locale) {
                case 'zh-CN': {
                    const data = await import('monaco-editor-nls/locale/zh-hans.json');
                    window.__locale__ ??= {};
                    window.__locale__[locale] = data.default;
                    break;
                }

                case 'en-US': {
                    window.__locale__ = undefined;
                    break;
                }
                case 'ko-KR': {
                    const data = await import('monaco-editor-nls/locale/ko.json');
                    window.__locale__ ??= {};
                    window.__locale__[locale] = data.default;
                    break;
                }
                default:
                    break;
            }
        }
    }

    constructor(config: IConfigProps) {
        super();
        this._config.defaultLocale = this.localeInit(config.defaultLocale);
        setValue(LocaleService.STORE_KEY, this._config.defaultLocale);

        this.loading = true;
        Promise.all([
            this.registerServices(),
            import('../extensions').then((module) => {
                this._config.extensions.push(...module.default);
                if (Array.isArray(config.extensions)) {
                    this._config.extensions.unshift(...config.extensions);
                }
            }),
            this.downloadNLS(),
        ])
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                this.loading = false;
                if (this.predict) {
                    this.render(this.predict);
                }
            });
    }

    public getConfig: () => IConfigProps = () => {
        return Object.assign({}, this._config);
    };

    private async overrideQuickAccessProviders(services: ReturnType<typeof this.getServices>) {
        await import('../monaco/override').then(
            ({ registerGotoLineQuickAccessProvider, registerCommandsQuickAccessProvider }) => {
                registerGotoLineQuickAccessProvider(services);
                registerCommandsQuickAccessProvider(services);
            }
        );
    }

    private predict: Parameters<typeof this.render>[0] = undefined;
    public render = (container?: HTMLElement | null) => {
        if (this.loading) {
            this.predict = container;
            return;
        } else {
            this.predict = undefined;
        }
        if (!container) return null;
        const services = this.getServices();
        // override QuickAccess Providers
        this.overrideQuickAccessProviders(services);
        services.monaco.initWorkspace(container);

        services.extension.add(this._config.extensions);
        // load contributes
        services.extension.load();
        const controllers = Array.from(services.module.controllers).reduce<Record<string, any>>((acc, [key, value]) => {
            acc[key] = this.resolve(value);
            return acc;
        }, {});
        // activate extensions
        services.extension.activate();
        const root = this.createRootElement();
        this.root ||= createRoot(root);
        this.root.render(
            React.createElement(Container, {
                value: {
                    molecule: services,
                    monaco: services.monaco,
                    localize: services.locale.localize,
                    modules: services.module.modules,
                    controllers,
                },
            })
        );
        container.appendChild(root);
    };

    public onBeforeInit = (callback: () => void) => {
        this.subscribe(InstanceHookKind.beforeInit, callback);
    };

    public onBeforeLoad = (callback: () => void) => {
        this.subscribe(InstanceHookKind.beforeLoad, callback);
    };

    public dispose() {
        this.resolve<ExtensionService>('extension').disposeAll();
        this.childContainer.clearInstances();
        this.reset();
        this.root?.unmount();
        this.root = undefined;
        this.predict = undefined;
    }
}
