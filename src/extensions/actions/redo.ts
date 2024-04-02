import { BaseAction } from 'mo/glue/baseAction';
import { CATEGORIES, KeyChord, KeyCode, KeyMod } from 'mo/monaco';
import { IMoleculeContext, KeybindingWeight } from 'mo/types';

export default class RedoAction extends BaseAction {
    static readonly ID = 'menuBar.item.redo';

    constructor(private molecule: IMoleculeContext) {
        super({
            id: RedoAction.ID,
            label: molecule.locale.localize('menuBar.item.redo', 'Redo'),
            title: molecule.locale.localize('menuBar.item.redo', 'Redo'),
            category: CATEGORIES.Developer,
            alias: 'Cursor Redo',
            precondition: undefined,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                primary: KeyChord(KeyMod.CtrlCmd | KeyMod.Shift | KeyCode.KeyZ),
            },
        });
    }
    run() {
        // Proxy action to monaco-editor
        this.molecule.editor.getCurrentGroup()?.editorInstance?.trigger('redo', 'redo', null);
    }
}
