import { BaseAction } from 'mo/glue/baseAction';
import { CATEGORIES, KeyChord, KeyCode, KeyMod } from 'mo/monaco';
import { IMoleculeContext, KeybindingWeight } from 'mo/types';

export default class QuickTogglePanelAction extends BaseAction {
    static readonly ID = 'workbench.action.showPanel';
    constructor(private molecule: IMoleculeContext) {
        super({
            id: QuickTogglePanelAction.ID,
            label: molecule.locale.localize('menu.showPanel.title', 'Toggle Panel'),
            title: molecule.locale.localize('menu.showPanel.title', 'Toggle Panel'),
            category: CATEGORIES.View,
            alias: 'Toggle Panel',
            precondition: undefined,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                primary: KeyChord(KeyMod.CtrlCmd | KeyCode.KeyJ),
            },
        });
    }
    run() {
        this.molecule.layout.setPanelVisibility((prev) => !prev);
    }
}
