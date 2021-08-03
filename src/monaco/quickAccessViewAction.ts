import 'reflect-metadata';
import * as monaco from 'monaco-editor';
import { localize } from 'monaco-editor/esm/vs/nls';
import { DisposableStore } from 'monaco-editor/esm/vs/base/common/lifecycle';
import { QuickCommandNLS } from 'monaco-editor/esm/vs/editor/common/standaloneStrings';
import { CancellationToken } from 'monaco-editor/esm/vs/base/common/cancellation';
import { IQuickInputService } from 'monaco-editor/esm/vs/platform/quickinput/common/quickInput';

import { ICommandQuickPick } from 'monaco-editor/esm/vs/platform/quickinput/browser/commandsQuickAccess';
import { AbstractEditorCommandsQuickAccessProvider } from 'monaco-editor/esm/vs/editor/contrib/quickAccess/commandsQuickAccess';
import {
    IInstantiationService,
    ServicesAccessor,
} from 'monaco-editor/esm/vs/platform/instantiation/common/instantiation';
import { IKeybindingService } from 'monaco-editor/esm/vs/platform/keybinding/common/keybinding';
import { ICommandService } from 'monaco-editor/esm/vs/platform/commands/common/commands';
import { ITelemetryService } from 'monaco-editor/esm/vs/platform/telemetry/common/telemetry';
import { INotificationService } from 'monaco-editor/esm/vs/platform/notification/common/notification';
import { Codicon } from 'monaco-editor/esm/vs/base/common/codicons';
import { TriggerAction } from 'monaco-editor/esm/vs/platform/quickinput/browser/pickerQuickAccess';
import {
    MenuId,
    MenuRegistry,
} from 'monaco-editor/esm/vs/platform/actions/common/actions';
import { stripIcons } from 'monaco-editor/esm/vs/base/common/iconLabels';

import { KeyMod, KeyCode } from 'mo/monaco';
import { container } from 'tsyringe';
import { EditorService, IEditorService } from 'mo/services';
import { Action2, KeybindingWeight } from './common';
import { MonacoService } from './monacoService';
import { registerQuickAccessProvider } from './quickAccessProvider';
import { ACTION_QUICK_COMMAND } from 'mo/model/keybinding';

export class CommandQuickAccessProvider extends AbstractEditorCommandsQuickAccessProvider {
    static PREFIX = '>';
    protected readonly editorService: IEditorService | undefined;
    protected get activeTextEditorControl():
        | monaco.editor.IStandaloneCodeEditor
        | undefined {
        return this.editorService?.editorInstance;
    }

    protected static get services() {
        return container.resolve(MonacoService).services;
    }

    constructor() {
        super(
            {
                showAlias: false,
                noResultsPick: {
                    label: localize('noCommandResults', 'No matching commands'),
                    commandId: '',
                },
            },
            CommandQuickAccessProvider.services.get(IInstantiationService),
            CommandQuickAccessProvider.services.get(IKeybindingService),
            CommandQuickAccessProvider.services.get(ICommandService),
            CommandQuickAccessProvider.services.get(ITelemetryService),
            CommandQuickAccessProvider.services.get(INotificationService)
        );
        this.editorService = container.resolve(EditorService);
    }

    protected async getCommandPicks(
        disposables: DisposableStore,
        token: CancellationToken
    ): Promise<Array<ICommandQuickPick>> {
        if (token.isCancellationRequested) {
            return [];
        }

        return [
            ...(<AbstractEditorCommandsQuickAccessProvider>(
                this
            )).getCodeEditorCommandPicks(),
            ...this.getGlobalCommandPicks(disposables),
        ].map((c) => ({
            ...c,
            buttons: [
                {
                    iconClass: Codicon.gear.classNames,
                    tooltip: localize(
                        'configure keybinding',
                        'Configure Keybinding'
                    ),
                },
            ],
            trigger: (): TriggerAction => {
                return TriggerAction.CLOSE_PICKER;
            },
        }));
    }

    protected getGlobalCommandPicks(
        disposables: DisposableStore
    ): ICommandQuickPick[] {
        const globalCommandPicks: ICommandQuickPick[] = [];
        const globalCommandsMenu = MenuRegistry.getMenuItems(
            MenuId.CommandPalette
        );

        for (const menu of globalCommandsMenu) {
            // Label
            let label =
                (typeof menu.command.title === 'string'
                    ? menu.command.title
                    : menu.command.title.value) || menu.command.id;

            // Category
            const category =
                typeof menu.command.category === 'string'
                    ? menu.command.category
                    : menu.command.category?.value;
            if (category) {
                label = localize(
                    'commandWithCategory',
                    '{0}: {1}',
                    category,
                    label
                );
            }

            // Alias
            const aliasLabel =
                typeof menu.command.title !== 'string'
                    ? menu.command.title.original
                    : undefined;
            const aliasCategory =
                category &&
                menu.command.category &&
                typeof menu.command.category !== 'string'
                    ? menu.command.category.original
                    : undefined;
            const commandAlias =
                aliasLabel && category
                    ? aliasCategory
                        ? `${aliasCategory}: ${aliasLabel}`
                        : `${category}: ${aliasLabel}`
                    : aliasLabel;

            globalCommandPicks.push({
                commandId: menu.command.id,
                commandAlias,
                label: stripIcons(label),
            });
        }

        return globalCommandPicks;
    }
}

registerQuickAccessProvider({
    ctor: CommandQuickAccessProvider,
    prefix: CommandQuickAccessProvider.PREFIX,
    placeholder: localize(
        'commandsQuickAccessPlaceholder',
        'Type the name of a command to run.'
    ),
    helpEntries: [
        {
            description: localize(
                'commandsQuickAccess',
                'Show and Run Commands'
            ),
            needsEditor: false,
        },
    ],
});

export class CommandQuickAccessViewAction extends Action2 {
    static ID = ACTION_QUICK_COMMAND;

    constructor() {
        super({
            id: CommandQuickAccessViewAction.ID,
            label: QuickCommandNLS.quickCommandActionLabel,
            alias: 'Command Palette',
            title: {
                value: localize('showTriggerActions', 'Command Palette'),
                original: 'Command Palette',
            },
            f1: false,
            keybinding: {
                weight: KeybindingWeight.WorkbenchContrib,
                when: undefined,
                primary: KeyMod.CtrlCmd | KeyMod.Shift | KeyCode.KEY_P,
                secondary: [KeyCode.F1],
            },
        });
    }

    run(accessor: ServicesAccessor): void {
        accessor
            .get(IQuickInputService)
            .quickAccess.show(CommandQuickAccessProvider.PREFIX);
    }
}
