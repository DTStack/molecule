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
