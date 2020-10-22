import { IActivityBar } from './workbench/activityBar';
import { IEditor } from './workbench/editor';
import { IMenuBar } from './workbench/menuBar';
import { ISidebar } from './workbench/sidebar';
import { ITheme } from './theme';

export interface IMolecule {
    sidebar: ISidebar;
    menuBar: IMenuBar;
    // statusBar: StatusBar;
    activityBar: IActivityBar;
    // panel: Panel;
    editor: IEditor;
    // layout: Layout;
    theme: ITheme;
    // iconTheme: IconTheme;
    // local: Local;
    // shortcutKeys: ShortcutKeys;
}
