import { ExtendsFolderTree } from './folderTree';
import { ExtendsActivityBar } from './activityBar';
import { ExtendsPanel } from './panel';
import { ExtendsExplorer } from './explorer';
import { ExtendsEditorTree } from './editorTree';

import { defaultColorThemeExtension } from './theme-defaults';
import { monokaiColorThemeExtension } from './theme-monokai';
import { paleNightColorThemeExtension } from './vscode-palenight-theme';
import { webStormIntelliJExtension } from './vscode-intellij-darcula-theme-master';
import { githubPlusExtension } from './github-plus-theme-master';

/**
 * Default extensions
 */
export const defaultExtensions = [
    ExtendsPanel,
    ExtendsActivityBar,
    ExtendsExplorer,
    ExtendsEditorTree,
    defaultColorThemeExtension,
    monokaiColorThemeExtension,
    paleNightColorThemeExtension,
    webStormIntelliJExtension,
    githubPlusExtension,
    ExtendsFolderTree,
];
