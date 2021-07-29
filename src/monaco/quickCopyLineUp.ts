import 'reflect-metadata';
import { localize } from 'mo/i18n/localize';
import { KeyMod, KeyCode } from 'mo/monaco';
import { EditorService, IEditorService } from 'mo/services';
import { container } from 'tsyringe';
import { Action2, KeybindingWeight } from './common';
import { ACTION_QUICK_COPY_LINE_UP } from 'mo/model/keybinding';

export class QuickCopyLineUp extends Action2 {
    static readonly ID = ACTION_QUICK_COPY_LINE_UP;
    static readonly LABEL = localize('menu.copyLineUp', 'Copy Line Up');
    private readonly editorService: IEditorService;

    constructor() {
        super({
            id: QuickCopyLineUp.ID,
            label: QuickCopyLineUp.LABEL,
            title: QuickCopyLineUp.LABEL,
            alias: 'Copy Line Up',
            f1: false,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.BuiltinExtension,
                // eslint-disable-next-line new-cap
                primary: KeyMod.Alt | KeyMod.Shift | KeyCode.PageUp,
            },
        });
        this.editorService = container.resolve(EditorService);
    }

    run() {
        this.editorService.quickCopyLineUp();
    }
}
