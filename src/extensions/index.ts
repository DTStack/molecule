import { ExtendsActions } from './actions';
import { ExtendsActivityBar } from './activityBar';
import { ExtendsEditor } from './editor';
import { ExtendsEditorTree } from './editorTree';
import { LocalesExtends } from './locales';
import { ExtendsMenuBar } from './menuBar';
import { ExtendsNotification } from './notification';
import { ExtendsPanel } from './panel';
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
];
