import { ExtendsFolderTree } from './folderTree';
import { ExtendsMenuBar } from './menuBar';
import { ExtendsActivityBar } from './activityBar';
import { ExtendsPanel } from './panel';
import { ExtendsExplorer } from './explorer';
import { ExtendsEditorTree } from './editorTree';
import { ExtendsKeybinding } from './keybinding';

import { defaultColorThemeExtension } from './theme-defaults';
import { monokaiColorThemeExtension } from './theme-monokai';
import { paleNightColorThemeExtension } from './vscode-palenight-theme';

/**
 * Default extensions
 */
export const defaultExtensions = [
    ExtendsPanel,
    ExtendsActivityBar,
    ExtendsMenuBar,
    ExtendsExplorer,
    ExtendsEditorTree,
    defaultColorThemeExtension,
    monokaiColorThemeExtension,
    paleNightColorThemeExtension,
    ExtendsFolderTree,
    ExtendsKeybinding,
];
