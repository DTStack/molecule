import { BaseAction } from 'mo/glue/baseAction';
import { CATEGORIES, KeyChord, KeyCode, KeyMod } from 'mo/monaco';
import { IMoleculeContext, KeybindingWeight } from 'mo/types';

export default class AddCursorAboveAction extends BaseAction {
    static readonly ID = 'menuBar.item.addCursorAbove';

    constructor(private molecule: IMoleculeContext) {
        super({
            id: AddCursorAboveAction.ID,
            label: molecule.locale.localize('menuBar.item.addCursorAbove', 'Add Cursor Above'),
            title: molecule.locale.localize('menuBar.item.addCursorAbove', 'Add Cursor Above'),
            category: CATEGORIES.Developer,
            alias: 'Add Cursor Above',
            precondition: undefined,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                primary: KeyChord(KeyMod.Alt | KeyMod.CtrlCmd | KeyCode.UpArrow),
            },
        });
    }
    run() {
        const editor = this.molecule.editor.getCurrentGroup()?.editorInstance;
        editor?.focus();
        editor?.trigger('source', 'editor.action.insertCursorAbove', null);
    }
}
