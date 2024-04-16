import { BaseAction } from 'mo/glue/baseAction';
import { CATEGORIES, KeyChord, KeyCode, KeyMod } from 'mo/monaco';
import { IMoleculeContext, KeybindingWeight } from 'mo/types';

export default class ToggleLineCommentAction extends BaseAction {
    static readonly ID = 'menuBar.item.toggleLineComment';

    constructor(private molecule: IMoleculeContext) {
        super({
            id: ToggleLineCommentAction.ID,
            label: molecule.locale.localize('menuBar.item.toggleLineComment', 'Toggle Line Comment'),
            title: molecule.locale.localize('menuBar.item.toggleLineComment', 'Toggle Line Comment'),
            category: CATEGORIES.Developer,
            alias: 'Toggle Line Comment',
            precondition: undefined,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                primary: KeyChord(KeyMod.CtrlCmd | KeyCode.Slash),
            },
        });
    }
    run() {
        // Proxy action to monaco-editor
        this.molecule.editor.getCurrentGroup()?.editorInstance?.trigger('source', 'editor.action.commentLine', null);
    }
}
