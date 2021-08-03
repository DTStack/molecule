import 'reflect-metadata';
import { localize } from 'mo/i18n/localize';
import { KeyMod, KeyCode } from 'mo/monaco';
import { EditorService, IEditorService } from 'mo/services';
import { container } from 'tsyringe';
import { Action2, KeybindingWeight } from './common';
import { ACTION_QUICK_REDO } from 'mo/model/keybinding';

export class QuickRedo extends Action2 {
    static readonly ID = ACTION_QUICK_REDO;
    static readonly LABEL = localize('menu.redo', 'Redo');
    static readonly DESC = 'Redo';
    private readonly editorService: IEditorService;

    constructor() {
        super({
            id: QuickRedo.ID,
            title: {
                value: QuickRedo.LABEL,
                original: QuickRedo.DESC,
            },
            label: QuickRedo.LABEL,
            alias: QuickRedo.DESC,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                // eslint-disable-next-line new-cap
                primary: KeyMod.CtrlCmd | KeyMod.Shift | KeyCode.KEY_Z,
            },
        });
        this.editorService = container.resolve(EditorService);
    }

    run() {
        const editorInstance = this.editorService.editorInstance;
        editorInstance!.focus();
        if (!document.execCommand(QuickRedo.DESC)) {
            editorInstance?.getModel()?.[QuickRedo.DESC]?.();
        }
    }
}
