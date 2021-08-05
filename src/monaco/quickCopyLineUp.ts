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
    static readonly DESC = 'Copy Line Up';
    private readonly editorService: IEditorService;

    constructor() {
        super({
            id: QuickCopyLineUp.ID,
            title: {
                value: QuickCopyLineUp.LABEL,
                original: QuickCopyLineUp.DESC,
            },
            label: QuickCopyLineUp.LABEL,
            alias: QuickCopyLineUp.DESC,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                // eslint-disable-next-line new-cap
                primary: KeyMod.Alt | KeyMod.Shift | KeyCode.PageUp,
            },
        });
        this.editorService = container.resolve(EditorService);
    }

    run() {
        this.editorService.editorInstance
            ?.getAction(ACTION_QUICK_COPY_LINE_UP)
            .run();
    }
}
