import { ExtendsStatusBar } from './statusBar';
import { ExtendsEditor } from './editor';
import { ExtendsNotification } from './notification';
import { ExtendsProblems } from './problems';
import { ExtendsFolderTree } from './folderTree';
import { ExtendsMenuBar } from './menuBar';
import { ExtendsActivityBar } from './activityBar';
import { ExtendsPanel } from './panel';
// import { ExtendsExplorer } from './explorer';

import { defaultColorThemeExtension } from './theme-defaults';
import { monokaiColorThemeExtension } from './theme-monokai';
import { paleNightColorThemeExtension } from './vscode-palenight-theme';

/**
 * Default extensions
 */
export const defaultExtensions = [
    ExtendsPanel,
    ExtendsActivityBar,
    ExtendsEditor,
    ExtendsMenuBar,
    ExtendsStatusBar,
    ExtendsProblems,
    ExtendsNotification,
    // ExtendsExplorer,
    defaultColorThemeExtension,
    monokaiColorThemeExtension,
    paleNightColorThemeExtension,
    ExtendsFolderTree,
];
