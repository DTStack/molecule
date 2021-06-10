import 'reflect-metadata';
import { container } from 'tsyringe';

export * as event from 'mo/common/event';
export * as react from 'mo/react';
export * as component from 'mo/components';
export * from 'mo/workbench';
export * from 'mo/services';

export {
    IExtension,
    IColorTheme,
    ISettings,
    IColors,
    TokenColor,
    ColorScheme,
} from 'mo/model';

import {
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
    ILayoutService,
    LayoutService,
    EditorService,
    IEditorService,
    IPanelService,
    PanelService,
    INotificationService,
    NotificationService,
    IColorThemeService,
    ColorThemeService,
    IExtensionService,
    ExtensionService,
    ISettingsService,
    SettingsService,
    IProblemsService,
    ProblemsService,
} from 'mo/services';

/**
 * layout service
 */
export const layout = container.resolve<ILayoutService>(LayoutService);
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
 * Note: The extension service depends on other workbench services,
 * So it need initialized be last one.
 */
export const extension = container.resolve<IExtensionService>(ExtensionService);

/**
 * Settings service
 */
export const settings = container.resolve<ISettingsService>(SettingsService);
