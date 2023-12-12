import { BaseAction } from 'mo/glue/baseAction';
import { IQuickInputService, KeyCode, KeyMod, ServicesAccessor } from 'mo/monaco';
import { IMoleculeContext, KeybindingWeight } from 'mo/types';

// TODO: migrate CommandQuickAccessProvider

export class QuickAccessCommandAction extends BaseAction {
    static readonly ID = 'menuBar.item.commandPalette';
    static PREFIX = '>';

    constructor(private molecule: IMoleculeContext) {
        super({
            id: QuickAccessCommandAction.ID,
            label: molecule.locale.localize('menuBar.item.commandPalette', 'Command Palette'),
            title: molecule.locale.localize('menuBar.item.commandPalette', 'Command Palette'),
            alias: 'Command Palette',
            f1: false,
            keybinding: {
                weight: KeybindingWeight.WorkbenchContrib,
                when: undefined,
                primary: KeyMod.CtrlCmd | KeyMod.Shift | KeyCode.KeyP,
                secondary: [KeyCode.F1],
            },
        });
    }

    run(accessor: ServicesAccessor): void {
        accessor.get(IQuickInputService).quickAccess.show(QuickAccessCommandAction.PREFIX);
    }
}
