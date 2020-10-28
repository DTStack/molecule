import 'reflect-metadata';
export * from './eventService';
export * from './activityBarService';
export * from './eventService';
export * from './extensionService';
export * from './menuBarService';
export * from './sidebarService';
export * from './themeService';
export * from './moleculeService';
export * from './editor/editorService';

import { container } from 'tsyringe';
import { ActivityBarService } from './activityBarService';
import { ExtensionService } from './extensionService';
import { SidebarService } from './sidebarService';
import { MenuBarService } from './menuBarService';
import { ThemeService } from './themeService';
import { EditorService } from './editor/editorService';

/**
 * The Services of Workbench
 */
const activityBar = container.resolve(ActivityBarService);
const sidebar = container.resolve(SidebarService);
const menuBar = container.resolve(MenuBarService);
const editor = container.resolve(EditorService);

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
    editor,
    extension,
    theme,
};
