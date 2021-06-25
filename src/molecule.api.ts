import 'reflect-metadata';
import { container } from 'tsyringe';

export * as event from 'mo/common/event';
export * as react from 'mo/react';
export * as component from 'mo/components';
export * from 'mo/workbench';
export * from 'mo/services';
export {} from 'mo/i18n';

export {
    IExtension,
    IColorTheme,
    ISettings,
    IColors,
    TokenColor,
    ColorScheme,
} from 'mo/model';

import {
    ILayoutService,
    LayoutService,
    ActivityBarService,
    IActivityBarService,
    ExplorerService,
    IExplorerService,
    FolderTreeService,
    IFolderTreeService,
    SearchService,
    ISearchService,
    ISidebarService,
    SidebarService,
    IMenuBarService,
    MenuBarService,
    IStatusBarService,
    StatusBarService,
    EditorService,
    IEditorService,
    IPanelService,
    PanelService,
    INotificationService,
    NotificationService,
    IColorThemeService,
    ColorThemeService,
    ISettingsService,
    SettingsService,
    IProblemsService,
    ProblemsService,
    IEditorTreeService,
    EditorTreeService,
} from 'mo/services';

import { ILocaleService, LocaleService } from './i18n/localeService';
/**
 * layout service
 */
export const layout = container.resolve<ILayoutService>(LayoutService);

/**
 * Register the Locales service first
 */
export const il8n = container.resolve<ILocaleService>(LocaleService);

/**
 * The Services of Workbench
 */
export const activityBar: IActivityBarService = container.resolve<IActivityBarService>(
    ActivityBarService
);

// explorer service
export const explorer: IExplorerService = container.resolve<IExplorerService>(
    ExplorerService
);
export const folderTree: IFolderTreeService = container.resolve<IFolderTreeService>(
    FolderTreeService
);

export const editorTree = container.resolve<IEditorTreeService>(
    EditorTreeService
);

export const search = container.resolve<ISearchService>(SearchService);
export const sidebar = container.resolve<ISidebarService>(SidebarService);
export const menuBar = container.resolve<IMenuBarService>(MenuBarService);
export const editor = container.resolve<IEditorService>(EditorService);
export const statusBar = container.resolve<IStatusBarService>(StatusBarService);
export const panel = container.resolve<IPanelService>(PanelService);
export const notification = container.resolve<INotificationService>(
    NotificationService
);

export const problems = container.resolve<IProblemsService>(ProblemsService);

/**
 * The ColorTheme service,
 */
export const colorTheme = container.resolve<IColorThemeService>(
    ColorThemeService
);

/**
 * Settings service
 */
export const settings = container.resolve<ISettingsService>(SettingsService);
