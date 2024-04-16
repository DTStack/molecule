import { BaseAction } from 'mo/glue/baseAction';
import { CATEGORIES, KeyChord, KeyCode, KeyMod } from 'mo/monaco';
import { IMoleculeContext, KeybindingWeight } from 'mo/types';

export default class FindAction extends BaseAction {
    static readonly ID = 'menuBar.item.find';

    constructor(private molecule: IMoleculeContext) {
        super({
            id: FindAction.ID,
            label: molecule.locale.localize('menuBar.item.find', 'Find'),
            title: molecule.locale.localize('menuBar.item.find', 'Find'),
            category: CATEGORIES.Developer,
            alias: 'Find',
            precondition: undefined,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                primary: KeyChord(KeyMod.CtrlCmd | KeyCode.KeyF),
            },
        });
    }
    run() {
        // Proxy action to monaco-editor
        this.molecule.editor.getCurrentGroup()?.editorInstance?.trigger('source', 'actions.find', null);
    }
}
