import { BaseAction } from 'mo/glue/baseAction';
import { CATEGORIES, KeyChord, KeyCode, KeyMod } from 'mo/monaco';
import { IMoleculeContext, KeybindingWeight } from 'mo/types';

export default class UndoAction extends BaseAction {
    static readonly ID = 'menuBar.item.undo';

    constructor(private molecule: IMoleculeContext) {
        super({
            id: UndoAction.ID,
            label: molecule.locale.localize('menuBar.item.undo', 'Undo'),
            title: molecule.locale.localize('menuBar.item.undo', 'Undo'),
            category: CATEGORIES.Developer,
            alias: 'Cursor Undo',
            precondition: undefined,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                primary: KeyChord(KeyMod.CtrlCmd | KeyCode.KeyZ),
            },
        });
    }
    run() {
        // Proxy action to monaco-editor
        this.molecule.editor.getCurrentGroup()?.editorInstance?.trigger('undo', 'undo', null);
    }
}
