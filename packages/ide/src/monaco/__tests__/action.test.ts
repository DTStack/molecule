import { CommandsRegistry } from 'monaco-editor/esm/vs/platform/commands/common/commands';
import { MenuRegistry } from 'monaco-editor/esm/vs/platform/actions/common/actions';
import { ContextKeyExpr } from 'monaco-editor/esm/vs/platform/contextkey/common/contextkey';

import { Action2, registerAction2 } from 'mo/monaco/action';
import { KeybindingWeight } from '../common';

describe('Test monaco action', () => {
    test('Register an Action via Action2 class', () => {
        const mockRun = jest.fn();
        class Test extends Action2 {
            static readonly ID = 'TestAction';
            static readonly LABEL = 'Test Action2';
            constructor() {
                super({
                    id: Test.ID,
                    label: Test.LABEL,
                    title: Test.LABEL,
                    alias: Test.LABEL,
                    precondition: true,
                    f1: true, // Whether show the QuickOpenFile in Command Palette
                    keybinding: {
                        weight: KeybindingWeight.WorkbenchContrib,
                        when: ContextKeyExpr.true,
                    },
                    menu: {
                        id: 'testMenu',
                        name: 'test',
                    },
                });
            }
            run = mockRun;
        }
        const testAction = registerAction2(Test);
        const command = CommandsRegistry.getCommand(Test.ID);
        command.handler();
        expect(testAction.dispose).not.toBeUndefined();
        expect(command).not.toBeUndefined();
        expect(mockRun).toBeCalled();
        testAction.dispose();
    });

    test('Register Menus via Action2 class', () => {
        class Test extends Action2 {
            static readonly ID = 'TestMenu';
            constructor() {
                super({
                    id: Test.ID,
                    precondition: true,
                    f1: false, // Whether show the QuickOpenFile in Command Palette
                    keybinding: {
                        weight: KeybindingWeight.WorkbenchContrib,
                        when: ContextKeyExpr.true,
                    },
                    menu: [
                        {
                            id: 'testMenu1',
                            name: 'test1',
                        },
                        {
                            id: 'testMenu2',
                            name: 'test2',
                        },
                    ],
                });
            }
            run() {}
        }
        registerAction2(Test);
        const menu = MenuRegistry.getMenuItems('testMenu1');
        expect(menu.length).toBe(1);
    });

    test('Register Keybindings via Action2 class', () => {
        class Test extends Action2 {
            static readonly ID = 'testKeybinding';
            constructor() {
                super({
                    id: Test.ID,
                    precondition: false,
                    f1: true, // Whether show the QuickOpenFile in Command Palette
                    keybinding: [
                        {
                            weight: KeybindingWeight.WorkbenchContrib,
                            when: ContextKeyExpr.true,
                        },
                    ],
                });
            }
            run() {}
        }
        registerAction2(Test);
        const command = CommandsRegistry.getCommand(Test.ID);
        expect(command).not.toBeUndefined();
    });
});
