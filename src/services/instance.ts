import React from 'react';
import { createRoot } from 'react-dom/client';
import Container from 'mo/client/container';
import { APP_PREFIX } from 'mo/const';
import defaultExtensions from 'mo/extensions';
import { GlobalEvent } from 'mo/glue';
import type { IExtension } from 'mo/types';
import { getValue } from 'mo/utils/storage';
import { container, type InjectionToken, Lifecycle } from 'tsyringe';
import type { constructor } from 'tsyringe/dist/typings/types';

import { ActionService } from './action';
import { ActivityBarService } from './activityBar';
import { AuxiliaryBarService } from './auxiliaryBar';
import { BuiltinService } from './builtin';
import { ColorThemeService } from './colorTheme';
import { ContextMenuService } from './contextMenu';
import { EditorService } from './editor';
import { EditorTreeService } from './editorTree';
import { ExplorerService } from './explorer';
import { ExtensionService } from './extension';
import { FolderTreeService } from './folderTree';
import { LayoutService } from './layout';
import { LocaleService } from './locale';
import { MenuBarService } from './menuBar';
import { ModuleService } from './module';
import { MonacoService } from './monaco';
import { NotificationService } from './notification';
import { OutputService } from './output';
import { PanelService } from './panel';
import { SearchService } from './search';
import { SettingsService } from './setting';
import { SidebarService } from './sidebar';
import { StatusBarService } from './statusBar';

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
    defaultLocale?: string;
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

    constructor(config: IConfigProps) {
        super();
        this._config.defaultLocale = this.localeInit(config.defaultLocale);
        this._config.extensions.push(...defaultExtensions);

        if (Array.isArray(config.extensions)) {
            this._config.extensions.unshift(...config.extensions);
        }

        // ===================== Registers =====================
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
        // =====================================================
    }

    public getConfig: () => IConfigProps = () => {
        return Object.assign({}, this._config);
    };

    public render = (container?: HTMLElement | null) => {
        if (!container) return null;
        const services = this.getServices();
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
        this.childContainer.clearInstances();
        this.resolve<MonacoService>('monaco').dispose();
    }
}
