import { BaseAction } from 'mo/glue/baseAction';
import { CATEGORIES, KeyChord, KeyCode, KeyMod } from 'mo/monaco';
import { IMoleculeContext, KeybindingWeight } from 'mo/types';

import { isInputEle, isNativeWidget } from '../utils';

export default class PasteAction extends BaseAction {
    static readonly ID = 'menuBar.item.paste';

    constructor(private molecule: IMoleculeContext) {
        super({
            id: PasteAction.ID,
            label: molecule.locale.localize('menuBar.item.paste', 'Paste'),
            title: molecule.locale.localize('menuBar.item.paste', 'Paste'),
            category: CATEGORIES.Developer,
            alias: 'Paste',
            precondition: undefined,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                primary: KeyChord(KeyMod.CtrlCmd | KeyCode.KeyV),
            },
        });
    }
    async run() {
        if (!isInputEle() || !isNativeWidget()) {
            // Proxy action to monaco-editor
            this.molecule.editor.getCurrentGroup()?.editorInstance?.focus();
            this.molecule.editor
                .getCurrentGroup()
                ?.editorInstance?.trigger('source', 'editor.action.clipboardPasteAction', null);
        } else {
            // FIXME: paste action is not working on Explorer
            const result = document.execCommand('paste');
            console.log('document.execCommand result: ', result);
        }
    }
}
