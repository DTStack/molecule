import { BaseAction } from 'mo/glue/baseAction';
import { CATEGORIES, KeyChord, KeyCode, KeyMod } from 'mo/monaco';
import { IMoleculeContext, KeybindingWeight } from 'mo/types';

export default class CopyAction extends BaseAction {
    static readonly ID = 'menuBar.item.copy';

    constructor(private molecule: IMoleculeContext) {
        super({
            id: CopyAction.ID,
            label: molecule.locale.localize('menuBar.item.copy', 'Copy'),
            title: molecule.locale.localize('menuBar.item.copy', 'Copy'),
            category: CATEGORIES.Developer,
            alias: 'Copy',
            precondition: undefined,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                primary: KeyChord(KeyMod.CtrlCmd | KeyCode.KeyC),
            },
        });
    }
    run() {
        document.execCommand('copy', false);
    }
}
