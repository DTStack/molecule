import { BaseAction } from 'mo/glue/baseAction';
import { CATEGORIES, KeyChord, KeyCode, KeyMod } from 'mo/monaco';
import { IMoleculeContext, KeybindingWeight } from 'mo/types';

import { isInputEle, isNativeWidget } from '../utils';

export default class CutAction extends BaseAction {
    static readonly ID = 'menuBar.item.cut';

    constructor(private molecule: IMoleculeContext) {
        super({
            id: CutAction.ID,
            label: molecule.locale.localize('menuBar.item.cut', 'Cut'),
            title: molecule.locale.localize('menuBar.item.cut', 'Cut'),
            category: CATEGORIES.Developer,
            alias: 'Cut',
            precondition: undefined,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                primary: KeyChord(KeyMod.CtrlCmd | KeyCode.KeyX),
            },
        });
    }
    run() {
        if (!isInputEle() || !isNativeWidget()) {
            // Proxy action to monaco-editor
            this.molecule.editor.getCurrentGroup()?.editorInstance?.focus();
            document.execCommand('cut');
        } else {
            document.execCommand('cut', false);
        }
    }
}
