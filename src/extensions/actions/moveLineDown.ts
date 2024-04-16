import { BaseAction } from 'mo/glue/baseAction';
import { CATEGORIES, KeyChord, KeyCode, KeyMod } from 'mo/monaco';
import { IMoleculeContext, KeybindingWeight } from 'mo/types';

import { isInputEle, isNativeWidget } from '../utils';

export default class MoveLineDownAction extends BaseAction {
    static readonly ID = 'menuBar.item.moveLineDown';

    constructor(private molecule: IMoleculeContext) {
        super({
            id: MoveLineDownAction.ID,
            label: molecule.locale.localize('menuBar.item.moveLineDown', 'Move Line Down'),
            title: molecule.locale.localize('menuBar.item.moveLineDown', 'Move Line Down'),
            category: CATEGORIES.Developer,
            alias: 'Move Line Down',
            precondition: undefined,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                primary: KeyChord(KeyMod.Alt | KeyCode.DownArrow),
            },
        });
    }
    run() {
        if (!isInputEle() || !isNativeWidget()) {
            // Proxy action to monaco-editor
            this.molecule.editor
                .getCurrentGroup()
                ?.editorInstance?.trigger('copyLineUp', 'editor.action.moveLinesDownAction', null);
        }
    }
}
