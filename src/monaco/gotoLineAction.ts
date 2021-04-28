import 'reflect-metadata';
import { QuickCommandNLS } from 'monaco-editor/esm/vs/editor/common/standaloneStrings';
import { monacoService } from './monacoService';
import { IQuickInputService } from 'monaco-editor/esm/vs/platform/quickinput/common/quickInput';
import * as monaco from 'monaco-editor';
import { AbstractEditorCommandsQuickAccessProvider } from 'monaco-editor/esm/vs/editor/contrib/quickAccess/commandsQuickAccess';
import { Action } from 'monaco-editor/esm/vs/base/common/actions';
import { EditorContextKeys } from 'monaco-editor/esm/vs/editor/common/editorContextKeys';
import { CommandsRegistry } from 'monaco-editor/esm/vs/platform/commands/common/commands';
import { singleton, container } from 'tsyringe';
import { KeybindingWeight } from './common';

@singleton()
export class GotoLineAction extends Action {
    static ID = 'editor.action.quickCommand';
    private readonly quickInputService: IQuickInputService;

    constructor() {
        super({
            id: GotoLineAction.ID,
            label: QuickCommandNLS.quickCommandActionLabel,
            alias: 'Command Palette',
            precondition: undefined,
            kbOpts: {
                kbExpr: EditorContextKeys.focus,
                primary: monaco.KeyCode.F1,
                weight: KeybindingWeight.EditorContrib,
            },
            contextMenuOpts: {
                group: 'z_commands',
                order: 1,
            },
        });
        this.quickInputService = monacoService.services.get(IQuickInputService);
    }

    run(): void {
        this.quickInputService.quickAccess.show(
            AbstractEditorCommandsQuickAccessProvider.PREFIX
        );
    }
}

CommandsRegistry.registerCommand(GotoLineAction.ID, (serviceAccessor) => {
    const selectColorAction = container.resolve(GotoLineAction);
    selectColorAction.run();
});
