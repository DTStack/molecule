import 'reflect-metadata';
import { localize } from 'mo/i18n/localize';
import { KeyMod, KeyCode } from 'mo/monaco';
import { EditorService, IEditorService } from 'mo/services';
import { container } from 'tsyringe';
import { Action2, KeybindingWeight } from './common';
import { ACTION_QUICK_UNDO } from 'mo/model/keybinding';

export class QuickUndo extends Action2 {
    static readonly ID = ACTION_QUICK_UNDO;
    static readonly LABEL = localize('menu.undo', 'Undo');
    static readonly DESC = 'Undo';
    private readonly editorService: IEditorService;

    constructor() {
        super({
            id: QuickUndo.ID,
            title: {
                value: QuickUndo.LABEL,
                original: QuickUndo.DESC,
            },
            label: QuickUndo.LABEL,
            alias: QuickUndo.DESC,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                // eslint-disable-next-line new-cap
                primary: KeyMod.CtrlCmd | KeyCode.KEY_Z,
            },
        });
        this.editorService = container.resolve(EditorService);
    }

    run() {
        const editorInstance = this.editorService.editorInstance;
        editorInstance!.focus();
        if (!document.execCommand(QuickUndo.DESC)) {
            editorInstance?.getModel()?.[QuickUndo.DESC]();
        }
    }
}
