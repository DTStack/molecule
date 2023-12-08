import { ExtendsActions } from './actions';
import { ExtendsActivityBar } from './activityBar';
import { ExtendsEditor } from './editor';
import { ExtendsEditorTree } from './editorTree';
import { ExtendsExplorer } from './explorer';
import { ExtendsFolderTree } from './folderTree';
import { LocalesExtends } from './locales';
import { ExtendsMenuBar } from './menuBar';
import { ExtendsNotification } from './notification';
import { ExtendsPanel } from './panel';
import { ExtendsSearch } from './search';
import { ExtendsSettings } from './settings';
import { ExtendsSidebar } from './sidebar';
import { ExtendsStatusBar } from './statusBar';
import { ColorThemeExtension } from './themes';

export default [
    LocalesExtends,
    ColorThemeExtension,
    ExtendsActions,
    ExtendsEditor,
    ExtendsActivityBar,
    ExtendsEditorTree,
    ExtendsPanel,
    ExtendsMenuBar,
    ExtendsNotification,
    ExtendsStatusBar,
    ExtendsSearch,
    ExtendsSettings,
    ExtendsFolderTree,
    ExtendsSidebar,
    ExtendsExplorer,
];
