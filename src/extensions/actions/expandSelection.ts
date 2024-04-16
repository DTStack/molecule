import { BaseAction } from 'mo/glue/baseAction';
import { CATEGORIES, KeyChord, KeyCode, KeyMod } from 'mo/monaco';
import { IMoleculeContext, KeybindingWeight } from 'mo/types';

export default class ExpandSelectionAction extends BaseAction {
    static readonly ID = 'menuBar.item.expandSelection';

    constructor(private molecule: IMoleculeContext) {
        super({
            id: ExpandSelectionAction.ID,
            label: molecule.locale.localize('menuBar.item.expandSelection', 'Expand Selection'),
            title: molecule.locale.localize('menuBar.item.expandSelection', 'Expand Selection'),
            category: CATEGORIES.Developer,
            alias: 'Expand Selection',
            precondition: undefined,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                primary: KeyChord(KeyMod.CtrlCmd | KeyMod.Alt | KeyMod.Shift | KeyCode.RightArrow),
            },
        });
    }
    run() {
        // Proxy action to monaco-editor
        this.molecule.editor
            .getCurrentGroup()
            ?.editorInstance?.trigger('expandSelection', 'editor.action.smartSelect.expand', null);
    }
}
