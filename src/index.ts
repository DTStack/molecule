import 'reflect-metadata';
import { container } from 'tsyringe';

export * from 'mo/model';
export * from 'mo/react';
export * from 'mo/services';
export * from 'mo/provider';
export * from 'mo/workbench';
export * from 'mo/common/event';

import 'mo/controller';

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
} from 'mo/services';

/**
 * The Services of Workbench
 */
const activityBarService = container.resolve<IActivityBarService>(
    ActivityBarService
);
// explorer service
const explorerService = container.resolve<IExplorerService>(ExplorerService);
const folderTreeService = container.resolve<IFolderTreeService>(
    FolderTreeService
);
const searchService = container.resolve<ISearchService>(SearchService);
const sidebarService = container.resolve<ISidebarService>(SidebarService);
const menuBarService = container.resolve<IMenuBarService>(MenuBarService);
const editorService = container.resolve<IEditorService>(EditorService);
const statusBarService = container.resolve<IStatusBarService>(StatusBarService);
const panelService = container.resolve<IPanelService>(PanelService);
const notificationService = container.resolve<INotificationService>(
    NotificationService
);

/**
 * The ColorTheme service,
 */
const colorThemeService = container.resolve<IColorThemeService>(
    ColorThemeService
);

/**
 * Note: The extension service depends on other workbench services,
 * So it need initialized be last one.
 */
const extensionService = container.resolve<IExtensionService>(ExtensionService);

/**
 * Settings service
 */
const settingsService = container.resolve<ISettingsService>(SettingsService);

export {
    activityBarService,
    explorerService,
    folderTreeService,
    searchService,
    sidebarService,
    menuBarService,
    statusBarService,
    panelService,
    editorService,
    extensionService,
    colorThemeService,
    settingsService,
    notificationService,
};
