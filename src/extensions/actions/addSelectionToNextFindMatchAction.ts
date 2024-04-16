import { BaseAction } from 'mo/glue/baseAction';
import { CATEGORIES, KeyChord, KeyCode, KeyMod } from 'mo/monaco';
import { IMoleculeContext, KeybindingWeight } from 'mo/types';

export default class AddSelectionToNextFindMatchAction extends BaseAction {
    static readonly ID = 'menuBar.item.addSelectionToNextFindMatch';

    constructor(private molecule: IMoleculeContext) {
        super({
            id: AddSelectionToNextFindMatchAction.ID,
            label: molecule.locale.localize(
                'menuBar.item.addSelectionToNextFindMatch',
                'Add Selection To Next Find Match'
            ),
            title: molecule.locale.localize(
                'menuBar.item.addSelectionToNextFindMatch',
                'Add Selection To Next Find Match'
            ),
            category: CATEGORIES.Developer,
            alias: 'Add Selection To Next Find Match',
            precondition: undefined,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                primary: KeyChord(KeyMod.CtrlCmd | KeyCode.KeyD),
            },
        });
    }
    run() {
        const editor = this.molecule.editor.getCurrentGroup()?.editorInstance;
        editor?.focus();
        editor?.trigger('source', 'editor.action.addSelectionToNextFindMatch', null);
    }
}
