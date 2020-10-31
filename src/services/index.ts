import 'reflect-metadata';
export * from './eventService';
export * from './workbench/activityBarService';
export * from './eventService';
export * from './extensionService';
export * from './workbench/menuBarService';
export * from './workbench/sidebarService';
export * from './themeService';
export * from './workbench/editorService';
export * from './react/mapState';
export * from './workbench/statusBarService';
export * from './react';

import { container } from 'tsyringe';
import { ActivityBarService, IActivityBarService } from './workbench/activityBarService';
import { ExtensionService, IExtensionService } from './extensionService';
import { ISidebarService, SidebarService } from './workbench/sidebarService';
import { IMenuBarService, MenuBarService } from './workbench/menuBarService';
import { ThemeService } from './themeService';
import { EditorService, IEditorService } from './workbench/editorService';
import { IStatusBarService, StatusBarService } from './workbench/statusBarService';

/**
 * The Services of Workbench
 */
const activityBar = container.resolve<IActivityBarService>(ActivityBarService);
const sidebar = container.resolve<ISidebarService>(SidebarService);
const menuBar = container.resolve<IMenuBarService>(MenuBarService);
const editor = container.resolve<IEditorService>(EditorService);
const statusBar = container.resolve<IStatusBarService>(StatusBarService);

/**
 * The theme service,
 * TODO: think about break themeService into ColorTheme and IconTheme
 */
const theme = container.resolve(ThemeService);

/**
 * Note: The extension service depends on other workbench services,
 * So it need initialized be last one.
 */
const extension = container.resolve<IExtensionService>(ExtensionService);

export {
    activityBar,
    sidebar,
    menuBar,
    statusBar,
    editor,
    extension,
    theme,
};
