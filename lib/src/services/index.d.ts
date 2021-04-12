import 'reflect-metadata';
export * from './extensionService';
export * from './theme/colorThemeService';
export * from './workbench';
export * from './settingsService';
import { IColorThemeService } from './theme/colorThemeService';
import { IExtensionService } from './extensionService';
import { IActivityBarService, IExplorerService, IFolderTreeService, ISearchService, ISidebarService, IMenuBarService, IStatusBarService, IEditorService, IPanelService } from './workbench';
import { ISettingsService } from './settingsService';
import { INotificationService } from './notificationService';
/**
 * The Services of Workbench
 */
declare const activityBarService: IActivityBarService;
declare const explorerService: IExplorerService;
declare const folderTreeService: IFolderTreeService;
declare const searchService: ISearchService;
declare const sidebarService: ISidebarService;
declare const menuBarService: IMenuBarService;
declare const editorService: IEditorService;
declare const statusBarService: IStatusBarService;
declare const panelService: IPanelService;
declare const notificationService: INotificationService;
/**
 * The ColorTheme service,
 */
declare const colorThemeService: IColorThemeService;
/**
 * Note: The extension service depends on other workbench services,
 * So it need initialized be last one.
 */
declare const extensionService: IExtensionService;
/**
 * Settings service
 */
declare const settingsService: ISettingsService;
export { activityBarService, explorerService, folderTreeService, searchService, sidebarService, menuBarService, statusBarService, panelService, editorService, extensionService, colorThemeService, settingsService, notificationService, };
