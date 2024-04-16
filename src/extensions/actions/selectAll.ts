import { BaseAction } from 'mo/glue/baseAction';
import { CATEGORIES, KeyChord, KeyCode, KeyMod } from 'mo/monaco';
import { IMoleculeContext, KeybindingWeight } from 'mo/types';

import { isInputEle, isNativeWidget } from '../utils';

export default class SelectAllAction extends BaseAction {
    static readonly ID = 'menuBar.item.selectAll';

    constructor(private molecule: IMoleculeContext) {
        super({
            id: SelectAllAction.ID,
            label: molecule.locale.localize('menuBar.item.selectAll', 'Select All'),
            title: molecule.locale.localize('menuBar.item.selectAll', 'Select All'),
            category: CATEGORIES.Developer,
            alias: 'Select All',
            precondition: undefined,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                primary: KeyChord(KeyMod.CtrlCmd | KeyCode.KeyA),
            },
        });
    }
    run() {
        if (!isInputEle() || !isNativeWidget()) {
            // Proxy action to monaco-editor
            const editor = this.molecule.editor.getCurrentGroup()?.editorInstance;
            const model = editor?.getModel();
            if (model && editor) {
                const range = model.getFullModelRange();
                editor.setSelection(range);
                editor.focus();
            }
        } else {
            document.execCommand('selectAll', false);
        }
    }
}
