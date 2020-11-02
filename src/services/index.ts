import 'reflect-metadata';
import { container } from 'tsyringe';

export * from './extensionService';
export * from './themeService';
export * from './workbench';

import { ThemeService } from './themeService';
import { ExtensionService, IExtensionService } from './extensionService';
import {
    ActivityBarService, IActivityBarService,
    ISidebarService, SidebarService,
    IMenuBarService, MenuBarService,
    IStatusBarService, StatusBarService,
    EditorService, IEditorService,
} from './workbench';

/**
 * The Services of Workbench
 */
const activityBarService = container.resolve<IActivityBarService>(ActivityBarService);
const sidebarService = container.resolve<ISidebarService>(SidebarService);
const menuBarService = container.resolve<IMenuBarService>(MenuBarService);
const editorService = container.resolve<IEditorService>(EditorService);
const statusBarService = container.resolve<IStatusBarService>(StatusBarService);

/**
 * The theme service,
 * TODO: think about break themeService into ColorTheme and IconTheme
 */
const themeService = container.resolve(ThemeService);

/**
 * Note: The extension service depends on other workbench services,
 * So it need initialized be last one.
 */
const extensionService = container.resolve<IExtensionService>(ExtensionService);

export {
    activityBarService,
    sidebarService,
    menuBarService,
    statusBarService,
    editorService,
    extensionService,
    themeService,
};
