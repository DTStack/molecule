import { IActivityBar } from './activityBar';

export class Sidebar {}
export class MenuBar {}
export class Panel {}
export class StatusBar {}
export class Editor {}
export class Layout {}
export class Theme {}
export class IconTheme {}
export class Settings {}
export class Local {}
export class ShortcutKeys {}

export interface IMolecule {
    // sidebar: Sidebar;
    // menuBar: MenuBar;
    // statusBar: StatusBar;
    activityBar: IActivityBar;
    // panel: Panel;
    // editor: Editor;
    // layout: Layout;
    // theme: Theme;
    // iconTheme: IconTheme;
    // local: Local;
    // shortcutKeys: ShortcutKeys;
}

export class Molecule {
    public sidebar: Sidebar;
    public menuBar: MenuBar;
    public statusBar: StatusBar;
    public activityBar: IActivityBar;
    public panel: Panel;
    public editor: Editor;
    public layout: Layout;
    public theme: Theme;
    public iconTheme: IconTheme;
    public settings: Settings;
    public local: Local;
    public shortcutKeys: ShortcutKeys;

    constructor(
        sidebar: Sidebar,
        menuBar: MenuBar,
        statusBar: StatusBar,
        activityBar: IActivityBar,
        editor: Editor,
        panel: Panel,
        layout: Layout,
        theme: Theme,
        iconTheme: IconTheme,
        settings: Settings,
        local: Local,
        shortcutKeys: ShortcutKeys,
    ) {
        this.sidebar = sidebar;
        this.menuBar = menuBar;
        this.statusBar = statusBar;
        this.activityBar = activityBar,
        this.panel = panel;
        this.editor = editor;
        this.layout = layout;
        this.theme = theme;
        this.iconTheme = iconTheme;
        this.settings = settings;
        this.local = local;
        this.shortcutKeys = shortcutKeys;
    }
};

// TODO
