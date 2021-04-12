import 'reflect-metadata';
export * from './extensionService';
export * from './theme/colorThemeService';
export * from './workbench';
export * from './settingsService';
import { IColorThemeService } from './theme/colorThemeService';
import { IExtensionService } from './extensionService';
import { IActivityBarService, IExplorerService, ISidebarService, IMenuBarService, IStatusBarService, IEditorService, IPanelService } from './workbench';
import { ISettingsService } from './settingsService';
/**
 * The Services of Workbench
 */
declare const activityBarService: IActivityBarService;
declare const explorerService: IExplorerService;
declare const sidebarService: ISidebarService;
declare const menuBarService: IMenuBarService;
declare const editorService: IEditorService;
declare const statusBarService: IStatusBarService;
declare const panelService: IPanelService;
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
export { activityBarService, explorerService, sidebarService, menuBarService, statusBarService, panelService, editorService, extensionService, colorThemeService, settingsService, };
