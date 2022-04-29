import molecule from '@dtinsight/molecule';
import { IQuickInputService } from 'monaco-editor/esm/vs/platform/quickinput/common/quickInput';
import { KeyChord } from 'monaco-editor/esm/vs/base/common/keyCodes';
import { debounce } from 'lodash';

export class QuickOpenAction extends molecule.monaco.Action2 {
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
                weight: molecule.monaco.KeybindingWeight.WorkbenchContrib,
                when: undefined,
                // eslint-disable-next-line new-cap
                primary: KeyChord(
                    molecule.monacoApi.KeyMod.CtrlCmd |
                        molecule.monacoApi.KeyCode.KeyP
                ),
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
