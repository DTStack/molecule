import { BaseAction } from 'mo/glue/baseAction';
import { CATEGORIES, KeyChord, KeyCode, KeyMod } from 'mo/monaco';
import { IMoleculeContext, KeybindingWeight } from 'mo/types';

export default class ToggleBlockCommentAction extends BaseAction {
    static readonly ID = 'menuBar.item.toggleBlockComment';

    constructor(private molecule: IMoleculeContext) {
        super({
            id: ToggleBlockCommentAction.ID,
            label: molecule.locale.localize('menuBar.item.toggleBlockComment', 'Toggle Block Comment'),
            title: molecule.locale.localize('menuBar.item.toggleBlockComment', 'Toggle Block Comment'),
            category: CATEGORIES.Developer,
            alias: 'Toggle Block Comment',
            precondition: undefined,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                primary: KeyChord(KeyMod.Alt | KeyMod.Shift | KeyCode.KeyA),
            },
        });
    }
    run() {
        // Proxy action to monaco-editor
        this.molecule.editor.getCurrentGroup()?.editorInstance?.trigger('source', 'editor.action.blockComment', null);
    }
}
