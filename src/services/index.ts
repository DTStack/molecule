import 'reflect-metadata';
import { container } from 'tsyringe';

export * from './extensionService';
export * from './theme/colorThemeService';
export * from './workbench';
export * from './settingsService';

import {
    ColorThemeService,
    IColorThemeService,
} from './theme/colorThemeService';
import { ExtensionService, IExtensionService } from './extensionService';
import {
    ActivityBarService,
    IActivityBarService,
    ExplorerService,
    IExplorerService,
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
} from './workbench';
import { ISettingsService, SettingsService } from './settingsService';
import {
    INotificationService,
    NotificationService,
} from './notificationService';

/**
 * The Services of Workbench
 */
const activityBarService = container.resolve<IActivityBarService>(
    ActivityBarService
);
// explorer service
const explorerService = container.resolve<IExplorerService>(ExplorerService);
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
