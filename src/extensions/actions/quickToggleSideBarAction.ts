import { BaseAction } from 'mo/glue/baseAction';
import { CATEGORIES, KeyChord, KeyCode, KeyMod } from 'mo/monaco';
import { IMoleculeContext, KeybindingWeight } from 'mo/types';

export default class QuickToggleSidebarAction extends BaseAction {
    static readonly ID = 'menuBar.item.sidebar';

    constructor(private molecule: IMoleculeContext) {
        super({
            id: QuickToggleSidebarAction.ID,
            label: molecule.locale.localize('menuBar.item.sidebar', 'Toggle Side Bar Visibility'),
            title: molecule.locale.localize('menuBar.item.sidebar', 'Toggle Side Bar Visibility'),
            category: CATEGORIES.View,
            alias: 'Toggle Side Bar',
            precondition: undefined,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                primary: KeyChord(KeyMod.CtrlCmd | KeyCode.KeyB),
            },
        });
    }
    run() {
        this.molecule.layout.setSidebar((prev) => !prev);
    }
}
