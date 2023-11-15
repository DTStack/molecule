import { BaseAction } from 'mo/glue/baseAction';
import {
    IQuickInputService,
    KeyChord,
    KeyCode,
    KeyMod,
    localize,
    type ServicesAccessor,
} from 'mo/monaco';
import { type IMoleculeContext, KeybindingWeight } from 'mo/types';

export default class QuickJumpToLineAction extends BaseAction {
    static readonly ID = 'workbench.action.jumpToLine';
    static PREFIX = ':';

    constructor(private ctx: IMoleculeContext) {
        super({
            id: QuickJumpToLineAction.ID,
            label: localize('jumpToLine.label', 'Jump To Line'),
            title: localize('jumpToLine.label', 'Jump To Line'),
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
        accessor.get(IQuickInputService).quickAccess.show(">");
    }
}
