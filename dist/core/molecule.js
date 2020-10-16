"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Molecule = void 0;
var Molecule = /** @class */ (function () {
    // public iconTheme: IconTheme;
    // public settings: Settings;
    // public local: Local;
    // public shortcutKeys: ShortcutKeys;
    function Molecule(
    // menuBar: MenuBar,
    // statusBar: StatusBar,
    activityBar, editor, 
    // panel: Panel,
    // layout: Layout,
    theme, sidebar) {
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
    return Molecule;
}());
exports.Molecule = Molecule;
;
//# sourceMappingURL=molecule.js.map