import 'reflect-metadata';
import { container } from 'tsyringe';

export * from './extensionService';
export * from './theme/colorThemeService';
export * from './workbench';

import { ColorThemeService, IColorThemeService } from './theme/colorThemeService';
import { ExtensionService, IExtensionService } from './extensionService';
import {
    ActivityBarService,
    IActivityBarService,
    ExplorerService,
    IExplorerService,
    ISidebarService,
    SidebarService,
    IMenuBarService,
    MenuBarService,
    IStatusBarService,
    StatusBarService,
    EditorService,
    IEditorService,
} from './workbench';

/**
 * The Services of Workbench
 */
const activityBarService = container.resolve<IActivityBarService>(
    ActivityBarService
);
// explorer service
const explorerService = container.resolve<IExplorerService>(ExplorerService);
const sidebarService = container.resolve<ISidebarService>(SidebarService);
const menuBarService = container.resolve<IMenuBarService>(MenuBarService);
const editorService = container.resolve<IEditorService>(EditorService);
const statusBarService = container.resolve<IStatusBarService>(StatusBarService);

/**
 * The theme service,
 * TODO: think about break themeService into ColorTheme and IconTheme
 */
const colorThemeService = container.resolve<IColorThemeService>(ColorThemeService);

/**
 * Note: The extension service depends on other workbench services,
 * So it need initialized be last one.
 */
const extensionService = container.resolve<IExtensionService>(ExtensionService);

export {
    activityBarService,
    explorerService,
    sidebarService,
    menuBarService,
    statusBarService,
    editorService,
    extensionService,
    colorThemeService,
};
