import { IEditor } from '@/core/editor';
import { IActivityBar } from '@/core/activityBar';
import { ITheme } from '@/core/theme';
import { ISidebar } from '@/core/sidebar';


export class MoleculeService {
    // public menuBar: MenuBar;
    // public statusBar: StatusBar;
    public activityBar: IActivityBar;
    // public panel: Panel;
    public editor: IEditor;
    // public layout: Layout;
    public theme: ITheme;
    public sidebar: ISidebar;
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
        // this.menuBar = menuBar;
        // this.statusBar = statusBar;
        this.activityBar = activityBar;
        // this.panel = panel;
        this.editor = editor;
        // this.layout = layout;
        this.theme = theme;
        this.sidebar = sidebar;
        // this.iconTheme = iconTheme;
        // this.settings = settings;
        // this.local = local;
        // this.shortcutKeys = shortcutKeys;
    }
};

// // TODO
