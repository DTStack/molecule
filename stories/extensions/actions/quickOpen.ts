import { IQuickInputService } from 'monaco-editor/esm/vs/platform/quickinput/common/quickInput';
import { KeyChord } from 'monaco-editor/esm/vs/base/common/keyCodes';

import { debounce } from 'lodash';
import { KeyCode, KeyMod } from '@dtinsight/molecule/monaco';
import { Action2 } from '@dtinsight/molecule';
import { KeybindingWeight } from '@dtinsight/molecule';

export class QuickOpenAction extends Action2 {
    static readonly ID = 'QuickOpenFile';
    static readonly LABEL = 'Search files by name';

    constructor() {
        super({
            id: QuickOpenAction.ID,
            label: QuickOpenAction.LABEL,
            title: QuickOpenAction.LABEL,
            alias: QuickOpenAction.LABEL,
            precondition: undefined,
            f1: true, // Whether show the QuickOpenFile in Command Palette
            keybinding: {
                weight: KeybindingWeight.WorkbenchContrib,
                when: undefined,
                // eslint-disable-next-line new-cap
                primary: KeyChord(KeyMod.CtrlCmd | KeyCode.KeyP),
            },
        });
    }

    run(accessor: any, ...args: any[]) {
        const quickInputService = accessor.get(IQuickInputService);

        const quickPick = quickInputService.createQuickPick();
        quickPick.items = [];
        quickPick.placeholder = QuickOpenAction.LABEL;

        quickPick.activeItems = [];
        quickPick.canSelectMany = false;

        const queryPick = debounce((value) => {}, 300);

        quickPick.onDidChangeValue(queryPick);

        quickPick.onDidAccept((i: any) => {
            const item = quickPick.activeItems[0];
            if (item) {
                alert('quickOpen');
            }
            quickPick.hide();
        });
        quickPick.show();
    }
}
