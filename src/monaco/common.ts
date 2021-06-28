import {
    IDisposable,
    DisposableStore,
} from 'monaco-editor/esm/vs/base/common/lifecycle';
import { ContextKeyExpr } from 'monaco-editor/esm/vs/platform/contextkey/common/contextkey';
import { KeybindingsRegistry } from 'monaco-editor/esm/vs/platform/keybinding/common/keybindingsRegistry';
import { ServicesAccessor } from 'monaco-editor/esm/vs/platform/instantiation/common/instantiation';
import { CommandsRegistry } from 'monaco-editor/esm/vs/platform/commands/common/commands';
import { localize } from 'monaco-editor/esm/vs/nls';
import {
    MenuRegistry,
    MenuId,
} from 'monaco-editor/esm/vs/platform/actions/common/actions';

export enum KeybindingWeight {
    EditorCore = 0,
    EditorContrib = 100,
    WorkbenchContrib = 200,
    BuiltinExtension = 300,
    ExternalExtension = 400,
}

export const CATEGORIES = {
    View: { value: localize('view', 'View'), original: 'View' },
    Help: { value: localize('help', 'Help'), original: 'Help' },
    Preferences: {
        value: localize('preferences', 'Preferences'),
        original: 'Preferences',
    },
    Developer: {
        value: localize(
            {
                key: 'developer',
                comment: [
                    'A developer on Code itself or someone diagnosing issues in Code',
                ],
            },
            'Developer'
        ),
        original: 'Developer',
    },
};

export abstract class Action2 {
    constructor(
        readonly desc: Readonly<{
            /**
             * Specify visible in quick access view
             */
            f1: boolean;
            [key: string]: any;
        }>
    ) {}
    abstract run(accessor: ServicesAccessor, ...args: any[]): any;
}

export function registerAction2(ctor: { new (): Action2 }): IDisposable {
    const disposables = new DisposableStore();
    // eslint-disable-next-line new-cap
    const action = new ctor();

    const { f1, menu, keybinding, description, ...command } = action.desc;

    // command
    disposables.add(
        CommandsRegistry.registerCommand({
            id: command.id,
            handler: (accessor, ...args) => action.run(accessor, ...args),
            description: description,
        })
    );

    // menu
    if (Array.isArray(menu)) {
        disposables.add(
            MenuRegistry.appendMenuItems(
                menu.map((item) => ({
                    id: item.id,
                    item: { command, ...item },
                }))
            )
        );
    } else if (menu) {
        disposables.add(
            MenuRegistry.appendMenuItem(menu.id, { command, ...menu })
        );
    }
    if (f1) {
        disposables.add(
            MenuRegistry.appendMenuItem(MenuId.CommandPalette, {
                command,
                when: command.precondition,
            })
        );
        disposables.add(MenuRegistry.addCommand(command));
    }

    // keybinding
    if (Array.isArray(keybinding)) {
        for (const item of keybinding) {
            KeybindingsRegistry.registerKeybindingRule({
                ...item,
                id: command.id,
                when: command.precondition
                    ? ContextKeyExpr.and(command.precondition, item.when)
                    : item.when,
            });
        }
    } else if (keybinding) {
        KeybindingsRegistry.registerKeybindingRule({
            ...keybinding,
            id: command.id,
            when: command.precondition
                ? ContextKeyExpr.and(command.precondition, keybinding.when)
                : keybinding.when,
        });
    }

    return disposables;
}
