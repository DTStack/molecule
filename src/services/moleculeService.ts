import { IEditor } from 'mo/core/workbench/editor';
import { IActivityBar } from 'mo/core/workbench/activityBar';
import { ITheme } from 'mo/core/theme';
import { ISidebar } from 'mo/core/workbench/sidebar';
import { IMenuBar } from 'mo/core/workbench/menuBar';
import { IMolecule } from 'mo/core/molecule';
import { singleton } from 'tsyringe';
@singleton()
export class MoleculeService implements IMolecule {
    public menuBar: IMenuBar;
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
        menuBar: IMenuBar,
        // statusBar: StatusBar,
        activityBar: IActivityBar,
        editor: IEditor,
        sidebar: ISidebar,
        // panel: Panel,
        // layout: Layout,
        theme: ITheme,
        // iconTheme: IconTheme,
        // settings: Settings,
        // local: Local,
        // shortcutKeys: ShortcutKeys,
    ) {
        this.menuBar = menuBar;
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
