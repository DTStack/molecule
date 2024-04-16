import { BaseAction } from 'mo/glue/baseAction';
import { CATEGORIES, KeyChord, KeyCode, KeyMod } from 'mo/monaco';
import { IMoleculeContext, KeybindingWeight } from 'mo/types';

export default class ReplaceAction extends BaseAction {
    static readonly ID = 'menuBar.item.replace';

    constructor(private molecule: IMoleculeContext) {
        super({
            id: ReplaceAction.ID,
            label: molecule.locale.localize('menuBar.item.replace', 'Replace'),
            title: molecule.locale.localize('menuBar.item.replace', 'Replace'),
            category: CATEGORIES.Developer,
            alias: 'Replace',
            precondition: undefined,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                primary: KeyChord(KeyMod.Alt | KeyMod.Shift | KeyCode.KeyF),
            },
        });
    }
    run() {
        // Proxy action to monaco-editor
        this.molecule.editor
            .getCurrentGroup()
            ?.editorInstance?.trigger('source', 'editor.action.startFindReplaceAction', null);
    }
}
