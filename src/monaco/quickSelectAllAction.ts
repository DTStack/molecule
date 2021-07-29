import 'reflect-metadata';
import { localize } from 'mo/i18n/localize';

import { KeyMod, KeyCode } from 'mo/monaco';
import { container } from 'tsyringe';
import { EditorService, IEditorService } from 'mo/services';
import { Action2, KeybindingWeight } from './common';
import { ACTION_QUICK_SELECT_ALL } from 'mo/model/keybinding';

export class QuickSelectAllAction extends Action2 {
    static ID = ACTION_QUICK_SELECT_ALL;
    private readonly editorService: IEditorService;

    constructor() {
        super({
            id: QuickSelectAllAction.ID,
            alias: 'Select All',
            title: {
                value: localize('menu.selectAll', 'Select All'),
                original: 'Select All',
            },
            f1: false,
            keybinding: {
                weight: KeybindingWeight.BuiltinExtension,
                when: undefined,
                primary: KeyMod.CtrlCmd | KeyCode.KEY_A,
            },
        });
        this.editorService = container.resolve(EditorService);
    }

    run(): void {
        this.editorService.selectAll();
    }
}
