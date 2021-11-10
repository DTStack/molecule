import 'reflect-metadata';
import { localize } from 'mo/i18n/localize';
import { KeyMod, KeyCode, Uri, editor as MonacoEditor } from 'mo/monaco';
import { EditorService, IEditorService } from 'mo/services';
import { container } from 'tsyringe';
import { Action2, KeybindingWeight } from './common';
import { constants } from 'mo/services/builtinService/const';

export class QuickUndo extends Action2 {
    static readonly ID = constants.ACTION_QUICK_UNDO;
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
                primary: KeyMod.CtrlCmd | KeyCode.KeyZ,
            },
        });
        this.editorService = container.resolve(EditorService);
    }

    isTextdom(ele: Element): ele is HTMLInputElement {
        return typeof (ele as HTMLInputElement).selectionStart === 'number';
    }

    run(accessor, ...args) {
        const focusinEle = args[0];
        const currentFocusinEle: Element | null =
            focusinEle || document.activeElement;
        if (
            currentFocusinEle &&
            this.isTextdom(currentFocusinEle) &&
            !currentFocusinEle.className.includes('monaco')
        ) {
            // native dom use the native methods
            document.execCommand('undo');
        } else {
            // monaco component should use the method from instance
            const editorInstance = this.editorService.editorInstance;
            if (editorInstance) {
                const currentActiveGroup = this.editorService.getState()
                    .current;
                if (currentActiveGroup) {
                    const tab = this.editorService.getTabById(
                        currentActiveGroup.activeTab!,
                        currentActiveGroup.id!
                    );
                    editorInstance?.focus();
                    const model = MonacoEditor.getModel(
                        Uri.parse(tab!.id!.toString())
                    )!;
                    (model as any).undo();
                }
            }
        }
    }
}
