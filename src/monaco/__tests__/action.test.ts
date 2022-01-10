import { CommandsRegistry } from 'monaco-editor/esm/vs/platform/commands/common/commands';

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
                    precondition: undefined,
                    f1: true, // Whether show the QuickOpenFile in Command Palette
                    keybinding: {
                        weight: KeybindingWeight.WorkbenchContrib,
                        when: undefined,
                        // eslint-disable-next-line new-cap
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
    });
});
