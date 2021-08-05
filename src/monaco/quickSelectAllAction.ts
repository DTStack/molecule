import 'reflect-metadata';
import { localize } from 'mo/i18n/localize';

import { KeyMod, KeyCode } from 'mo/monaco';
import { container } from 'tsyringe';
import { EditorService, IEditorService } from 'mo/services';
import { Action2, KeybindingWeight } from './common';
import { ACTION_QUICK_SELECT_ALL } from 'mo/model/keybinding';

export class QuickSelectAllAction extends Action2 {
    static ID = ACTION_QUICK_SELECT_ALL;
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
                primary: KeyMod.CtrlCmd | KeyCode.KEY_A,
            },
        });
        this.editorService = container.resolve(EditorService);
    }

    run(): void {
        this.editorService.editorInstance!.focus();
        this.editorService.editorInstance!.setSelection(
            this.editorService.editorInstance!.getModel()!.getFullModelRange()
        );
    }
}
