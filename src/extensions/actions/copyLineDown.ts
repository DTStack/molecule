import { BaseAction } from 'mo/glue/baseAction';
import { CATEGORIES, KeyChord, KeyCode, KeyMod } from 'mo/monaco';
import { IMoleculeContext, KeybindingWeight } from 'mo/types';

import { isInputEle, isNativeWidget } from '../utils';

export default class CopyLineDownAction extends BaseAction {
    static readonly ID = 'menuBar.item.copyLineDown';

    constructor(private molecule: IMoleculeContext) {
        super({
            id: CopyLineDownAction.ID,
            label: molecule.locale.localize('menuBar.item.copyLineDown', 'Copy Line Down'),
            title: molecule.locale.localize('menuBar.item.copyLineDown', 'Copy Line Down'),
            category: CATEGORIES.Developer,
            alias: 'Copy Line Down',
            precondition: undefined,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                primary: KeyChord(KeyMod.Shift | KeyMod.Alt | KeyCode.DownArrow),
            },
        });
    }
    run() {
        if (!isInputEle() || !isNativeWidget()) {
            // Proxy action to monaco-editor
            this.molecule.editor
                .getCurrentGroup()
                ?.editorInstance?.trigger('copyLineUp', 'editor.action.copyLinesDownAction', null);
        }
    }
}
