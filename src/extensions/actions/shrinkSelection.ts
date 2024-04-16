import { BaseAction } from 'mo/glue/baseAction';
import { CATEGORIES, KeyChord, KeyCode, KeyMod } from 'mo/monaco';
import { IMoleculeContext, KeybindingWeight } from 'mo/types';

export default class ShrinkSelectionAction extends BaseAction {
    static readonly ID = 'menuBar.item.shrinkSelection';

    constructor(private molecule: IMoleculeContext) {
        super({
            id: ShrinkSelectionAction.ID,
            label: molecule.locale.localize('menuBar.item.shrinkSelection', 'Shrink Selection'),
            title: molecule.locale.localize('menuBar.item.shrinkSelection', 'Shrink Selection'),
            category: CATEGORIES.Developer,
            alias: 'Shrink Selection',
            precondition: undefined,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                primary: KeyChord(KeyMod.CtrlCmd | KeyMod.Alt | KeyMod.Shift | KeyCode.LeftArrow),
            },
        });
    }
    run() {
        // Proxy action to monaco-editor
        this.molecule.editor
            .getCurrentGroup()
            ?.editorInstance?.trigger('expandSelection', 'editor.action.smartSelect.shrink', null);
    }
}
