import { BaseAction } from 'mo/glue/baseAction';
import { CATEGORIES, KeyChord, KeyCode, KeyMod } from 'mo/monaco';
import { IMoleculeContext, KeybindingWeight } from 'mo/types';

export default class AddCursorBelowAction extends BaseAction {
    static readonly ID = 'menuBar.item.addCursorBelow';

    constructor(private molecule: IMoleculeContext) {
        super({
            id: AddCursorBelowAction.ID,
            label: molecule.locale.localize('menuBar.item.addCursorBelow', 'Add Cursor Below'),
            title: molecule.locale.localize('menuBar.item.addCursorBelow', 'Add Cursor Below'),
            category: CATEGORIES.Developer,
            alias: 'Add Cursor Below',
            precondition: undefined,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                primary: KeyChord(KeyMod.Alt | KeyMod.CtrlCmd | KeyCode.DownArrow),
            },
        });
    }
    run() {
        const editor = this.molecule.editor.getCurrentGroup()?.editorInstance;
        editor?.focus();
        editor?.trigger('source', 'editor.action.insertCursorBelow', null);
    }
}
