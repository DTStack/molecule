import { ExtendStatusBar } from './statusBar';
import { defaultColorThemeExtension } from './theme-defaults';
import { monokaiColorThemeExtension } from './theme-monokai';
import { paleNightColorThemeExtension } from './vscode-palenight-theme';
import { ExtendFolderTree } from './folderTree';

/**
 * Default extensions
 */
export const defaultExtensions = [
    ExtendStatusBar,
    defaultColorThemeExtension,
    monokaiColorThemeExtension,
    paleNightColorThemeExtension,
    ExtendFolderTree,
];
