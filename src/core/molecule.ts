import { IActivityBar } from './activityBar';
import { IEditor } from './editor';
import { ISidebar } from './sidebar';
import { ITheme } from './theme';

export interface IMolecule {
    sidebar: ISidebar;
    // menuBar: MenuBar;
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

export class Molecule {
    public sidebar: ISidebar;
    // public menuBar: MenuBar;
    // public statusBar: StatusBar;
    public activityBar: IActivityBar;
    public editor: IEditor;
    // public panel: Panel;
    // public layout: Layout;
    public theme: ITheme;
    // public iconTheme: IconTheme;
    // public settings: Settings;
    // public local: Local;
    // public shortcutKeys: ShortcutKeys;

    constructor(
        // menuBar: MenuBar,
        // statusBar: StatusBar,
        activityBar: IActivityBar,
        editor: IEditor,
        // panel: Panel,
        // layout: Layout,
        theme: ITheme,
        sidebar: ISidebar,
        // iconTheme: IconTheme,
        // settings: Settings,
        // local: Local,
        // shortcutKeys: ShortcutKeys,
    ) {
        this.sidebar = sidebar;
        // this.menuBar = menuBar;
        // this.statusBar = statusBar;
        this.activityBar = activityBar,
        this.editor = editor;
        // this.panel = panel;
        // this.layout = layout;
        this.theme = theme;
        // this.iconTheme = iconTheme;
        // this.settings = settings;
        // this.local = local;
        // this.shortcutKeys = shortcutKeys;
    }
};
