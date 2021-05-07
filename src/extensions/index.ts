import { ExtendStatusBar } from './statusBar';
import { ExtendEditor } from './editor';
import { ExtendNotification } from './notification';
import { ExtendProblems } from './problems';

import { defaultColorThemeExtension } from './theme-defaults';
import { monokaiColorThemeExtension } from './theme-monokai';
import { paleNightColorThemeExtension } from './vscode-palenight-theme';
import { ExtendFolderTree } from './folderTree';

/**
 * Default extensions
 */
export const defaultExtensions = [
    ExtendEditor,
    ExtendStatusBar,
    ExtendProblems,
    ExtendNotification,
    defaultColorThemeExtension,
    monokaiColorThemeExtension,
    paleNightColorThemeExtension,
    ExtendFolderTree,
];
