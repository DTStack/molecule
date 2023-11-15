import React from 'react';
import { createRoot } from 'react-dom/client';
import Container from 'mo/client/container';
import { APP_PREFIX } from 'mo/const';
import * as controller from 'mo/controllers';
import defaultExtensions from 'mo/extensions';
import { GlobalEvent } from 'mo/glue';
import type { IExtension } from 'mo/types';
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
import { MonacoService } from './monaco';
import { NotificationService } from './notification';
import { OutputService } from './output';
import { PanelService } from './panel';
import { SidebarService } from './sidebar';
import { StatusBarService } from './statusBar';

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

export default class InstanceService extends GlobalEvent implements IInstanceServiceProps {
    private root: ReturnType<typeof createRoot> | undefined;
    private _config: Required<IConfigProps> = {
        extensions: [],
        defaultLocale: 'en',
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

    constructor(config: IConfigProps) {
        super();
        if (config.defaultLocale) {
            this._config.defaultLocale = config.defaultLocale;
        }
        this._config.extensions.push(...defaultExtensions);

        if (Array.isArray(config.extensions)) {
            this._config.extensions.push(...config.extensions);
        }

        // ===================== Registers =====================
        this.register('locale', LocaleService);
        this.register('builtin', BuiltinService);
        this.register('contextMenu', ContextMenuService);
        this.register('extension', ExtensionService);
        this.register('auxiliaryBar', AuxiliaryBarService);
        this.register('layout', LayoutService);
        this.register('statusBar', StatusBarService);
        this.register('menuBar', MenuBarService);
        this.register('activityBar', ActivityBarService);
        this.register('sidebar', SidebarService);
        this.register('explorer', ExplorerService);
        this.register('folderTree', FolderTreeService);
        this.register('panel', PanelService);
        this.register('output', OutputService);
        this.register('editor', EditorService);
        this.register('colorTheme', ColorThemeService);
        this.register('action', ActionService);
        this.register('monaco', MonacoService);
        this.register('editorTree', EditorTreeService);
        this.register('notification', NotificationService);
        // =====================================================
    }

    // private initialLocaleService = (languagesExts: IExtension[]) => {
    // const locales = languagesExts.reduce((pre, cur) => {
    //     const languages = cur.contributes?.languages || [];
    //     return pre.concat(languages);
    // }, [] as ILocale[]);
    // molecule.i18n.initialize(
    //     locales,
    //     localStorage.getItem(STORE_KEY) || this._config.defaultLocale
    // );
    // };

    public getConfig: () => IConfigProps = () => {
        return Object.assign({}, this._config);
    };

    public render = (container?: HTMLElement | null) => {
        if (!container) return null;
        const locale = this.resolve<LocaleService>('locale');
        locale.setCurrentLocale(this._config.defaultLocale);
        const builtin = this.resolve<BuiltinService>('builtin');
        this.emit(InstanceHookKind.beforeInit);

        this.emit(InstanceHookKind.beforeLoad);
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

        const action = this.resolve<ActionService>('action');

        // extensions should resolved after all other services
        const extension = this.resolve<ExtensionService>('extension');

        monaco.initWorkspace(container);
        extension.add(this._config.extensions);
        // load contributes
        extension.load();

        const layoutController = this.resolve(controller.layout.LayoutController);
        const statusBarController = this.resolve(controller.statusBar.StatusBarController);
        const menuBarController = this.resolve(controller.menuBar.MenuBarController);
        const activityBarController = this.resolve(controller.activityBar.ActivityBarController);
        const sidebarController = this.resolve(controller.sidebar.SidebarController);
        const explorerController = this.resolve(controller.explorer.ExplorerController);
        const folderTreeController = this.resolve(controller.folderTree.FolderTreeController);
        const panelController = this.resolve(controller.panel.PanelController);
        const outputController = this.resolve(controller.output.OutputController);
        const editorController = this.resolve(controller.editor.EditorController);
        const editorTreeController = this.resolve(controller.editorTree.EditorTreeController);
        const notificationController = this.resolve(controller.notification.NotificationController);

        // activate extensions
        extension.activate();

        const root = this.createRootElement();

        this.root ||= createRoot(root);
        this.root.render(
            React.createElement(Container, {
                value: {
                    molecule: {
                        contextMenu,
                        auxiliaryBar,
                        layout,
                        statusBar,
                        locale,
                        builtin,
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
                    },
                    monaco,
                    localize: locale.localize,
                    controllers: {
                        layout: layoutController,
                        statusBar: statusBarController,
                        menuBar: menuBarController,
                        activityBar: activityBarController,
                        sidebar: sidebarController,
                        explorer: explorerController,
                        folderTree: folderTreeController,
                        panel: panelController,
                        output: outputController,
                        editor: editorController,
                        editorTree: editorTreeController,
                        notification: notificationController,
                    } as any,
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
    }
}
