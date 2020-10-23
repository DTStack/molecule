import 'reflect-metadata';
import 'mo/style/main.scss';
import 'vscode-codicons/dist/codicon.css';
// import { container } from 'tsyringe';

import { EditorService } from 'mo/services/editor/editorService';
import { ActivityBarService } from 'mo/services/activityBarService';
import { ThemeService } from 'mo/services/themeServices';
import { SidebarService } from 'mo/services/sidebarService';
import { MenuBarService } from 'mo/services/menuBarService';
import { defaultExtensions } from 'mo/extensions';
import { ExtensionService } from './services/extensionService';

export * from 'mo/workbench';
export * from 'mo/common/event';
export * from 'mo/core/workbench/activityBar';
export * from 'mo/services/eventService';

export const activityBarService = new ActivityBarService();
export const menuBarService = new MenuBarService();
export const editorService = new EditorService();
export const sidebarService = new SidebarService();
export const themeService = new ThemeService('vs-dark', 'vs-dark');
export const extensionService = new ExtensionService(defaultExtensions);
