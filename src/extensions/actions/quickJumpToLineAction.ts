import { BaseAction } from 'mo/glue/baseAction';
import { CATEGORIES, IQuickInputService, KeyChord, KeyCode, KeyMod, type ServicesAccessor } from 'mo/monaco';
import { type IMoleculeContext, KeybindingWeight } from 'mo/types';

export default class QuickJumpToLineAction extends BaseAction {
    static readonly ID = 'workbench.action.jumpToLine';
    static PREFIX = ':';

    constructor(private molecule: IMoleculeContext) {
        super({
            id: QuickJumpToLineAction.ID,
            label: molecule.locale.localize(QuickJumpToLineAction.ID, 'Jump To Line'),
            title: molecule.locale.localize(QuickJumpToLineAction.ID, 'Jump To Line'),
            category: CATEGORIES.Developer,
            alias: 'Jump To Line',
            precondition: undefined,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                primary: KeyChord(KeyMod.WinCtrl | KeyCode.KeyG),
            },
        });
    }

    run(accessor: ServicesAccessor) {
        accessor.get(IQuickInputService).quickAccess.show(QuickJumpToLineAction.PREFIX);
    }
}
