import { BaseAction } from 'mo/glue/baseAction';
import { CATEGORIES, KeyChord, KeyCode, KeyMod } from 'mo/monaco';
import { IMoleculeContext, KeybindingWeight } from 'mo/types';

export default class SelectHighlightsAction extends BaseAction {
    static readonly ID = 'menuBar.item.selectHighlights';

    constructor(private molecule: IMoleculeContext) {
        super({
            id: SelectHighlightsAction.ID,
            label: molecule.locale.localize('menuBar.item.selectHighlights', 'Select All Occurrences'),
            title: molecule.locale.localize('menuBar.item.selectHighlights', 'Select All Occurrences'),
            category: CATEGORIES.Developer,
            alias: 'Select All Occurrences',
            precondition: undefined,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                primary: KeyChord(KeyMod.CtrlCmd | KeyMod.Shift | KeyCode.KeyL),
            },
        });
    }
    run() {
        const editor = this.molecule.editor.getCurrentGroup()?.editorInstance;
        editor?.focus();
        editor?.trigger('source', 'editor.action.selectHighlights', null);
    }
}
