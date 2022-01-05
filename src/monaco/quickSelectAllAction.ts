import 'reflect-metadata';
import { localize } from 'mo/i18n/localize';

import { KeyMod, KeyCode } from 'mo/monaco';
import { container } from 'tsyringe';
import { EditorService, IEditorService } from 'mo/services';
import { Action2, KeybindingWeight } from './common';
import { constants } from 'mo/services/builtinService/const';

export class QuickSelectAllAction extends Action2 {
    static readonly ID = constants.ACTION_QUICK_SELECT_ALL;
    static readonly DESC = 'Select All';
    static readonly LABEL = localize('menu.selectAll', 'Select All');
    private readonly editorService: IEditorService;

    constructor() {
        super({
            id: QuickSelectAllAction.ID,
            alias: QuickSelectAllAction.DESC,
            title: {
                value: QuickSelectAllAction.LABEL,
                original: QuickSelectAllAction.DESC,
            },
            f1: true,
            label: QuickSelectAllAction.LABEL,
            keybinding: {
                weight: KeybindingWeight.BuiltinExtension,
                when: undefined,
                primary: KeyMod.CtrlCmd | KeyCode.KeyA,
            },
        });
        this.editorService = container.resolve(EditorService);
    }

    selectEditorAll() {
        const editor = this.editorService.editorInstance;
        if (editor) {
            editor.focus();
            editor.setSelection(editor.getModel()!.getFullModelRange());
        }
    }

    isTextdom(ele: Element): ele is HTMLInputElement {
        return typeof (ele as HTMLInputElement).selectionStart === 'number';
    }

    run(accessor, ...args): void {
        const focusinEle = args[0];
        // execute the action via shortcut if focusinEle is undefined
        const currentFocusinEle: Element | null =
            focusinEle || document.activeElement;
        if (
            currentFocusinEle &&
            this.isTextdom(currentFocusinEle) &&
            !currentFocusinEle.className.includes('monaco')
        ) {
            // native element can select by the native method
            currentFocusinEle.select();
        } else {
            // monaco component should use the method from instance
            this.selectEditorAll();
        }
    }
}
