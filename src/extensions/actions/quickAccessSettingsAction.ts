import { BaseAction } from 'mo/glue/baseAction';
import { KeyChord, KeyCode, KeyMod } from 'mo/monaco';
import { IMoleculeContext, KeybindingWeight } from 'mo/types';

export class QuickAccessSettingsAction extends BaseAction {
    static readonly ID = 'activityBar.item.setting';

    constructor(private molecule: IMoleculeContext) {
        super({
            id: QuickAccessSettingsAction.ID,
            label: molecule.locale.localize('activityBar.item.setting', 'Settings'),
            title: molecule.locale.localize('activityBar.item.setting', 'Settings'),
            alias: 'Open Settings (JSON)',
            precondition: undefined,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                primary: KeyChord(KeyMod.CtrlCmd | KeyCode.Comma),
            },
        });
    }

    run() {
        this.molecule.settings.access();
    }
}
