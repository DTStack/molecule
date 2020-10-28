import 'reflect-metadata';
export * from './eventService';
export * from './workbench/activityBarService';
export * from './eventService';
export * from './extensionService';
export * from './workbench/menuBarService';
export * from './workbench/sidebarService';
export * from './themeService';
export * from './workbench/editorService';
export * from './stateService';
export * from './workbench/statusBarService';

import { container } from 'tsyringe';
import { ActivityBarService } from './workbench/activityBarService';
import { ExtensionService } from './extensionService';
import { SidebarService } from './workbench/sidebarService';
import { MenuBarService } from './workbench/menuBarService';
import { ThemeService } from './themeService';
import { EditorService } from './workbench/editorService';
import { StatusBarService } from './workbench/statusBarService';

/**
 * The Services of Workbench
 */
const activityBar = container.resolve(ActivityBarService);
const sidebar = container.resolve(SidebarService);
const menuBar = container.resolve(MenuBarService);
const editor = container.resolve(EditorService);
const statusBar = container.resolve(StatusBarService);

/**
 * The theme service,
 * TODO: think about break themeService into ColorTheme and IconTheme
 */
const theme = container.resolve(ThemeService);

/**
 * Note: The extension service depends on other workbench services,
 * So it need initialized be last one.
 */
const extension = container.resolve(ExtensionService);

export {
    activityBar,
    sidebar,
    menuBar,
    statusBar,
    editor,
    extension,
    theme,
};
