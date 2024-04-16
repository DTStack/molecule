import { BaseAction } from 'mo/glue/baseAction';
import { CATEGORIES, KeyChord, KeyCode, KeyMod } from 'mo/monaco';
import { IMoleculeContext, KeybindingWeight } from 'mo/types';

import { isInputEle, isNativeWidget } from '../utils';

export default class MoveLineUpAction extends BaseAction {
    static readonly ID = 'menuBar.item.moveLineUp';

    constructor(private molecule: IMoleculeContext) {
        super({
            id: MoveLineUpAction.ID,
            label: molecule.locale.localize('menuBar.item.moveLineUp', 'Move Line Up'),
            title: molecule.locale.localize('menuBar.item.moveLineUp', 'Move Line Up'),
            category: CATEGORIES.Developer,
            alias: 'Move Line Up',
            precondition: undefined,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                primary: KeyChord(KeyMod.Alt | KeyCode.UpArrow),
            },
        });
    }
    run() {
        if (!isInputEle() || !isNativeWidget()) {
            // Proxy action to monaco-editor
            this.molecule.editor
                .getCurrentGroup()
                ?.editorInstance?.trigger('copyLineUp', 'editor.action.moveLinesUpAction', null);
        }
    }
}
