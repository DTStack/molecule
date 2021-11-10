import { KeybindingHelper } from '../keybinding';

jest.mock(
    'monaco-editor/esm/vs/platform/keybinding/common/keybindingsRegistry',
    () => {
        return {
            KeybindingsRegistry: {
                getDefaultKeybindings: () => {
                    return new Array(10).fill(1).map((_, index) => ({
                        command: `test.${index}`,
                        commandArgs: undefined,
                        extensionId: null,
                        isBuiltinExtension: false,
                        keybinding: [
                            {
                                altKey: false,
                                ctrlKey: false,
                                keyCode: 31,
                                metaKey: true,
                                shiftKey: false,
                            },
                        ],
                        weight1: 0,
                        weight2: 0,
                        when: null,
                    }));
                },
            },
        };
    }
);

jest.mock('mo/model/keybinding', () => {
    const originalModule = jest.requireActual('mo/model/keybinding');
    return {
        ...originalModule,
        KeyCodeString: { 31: 'A', 32: 'B' },
    };
});

describe('Test Keybinding', () => {
    test('Should query correct keybinding', () => {
        let res = KeybindingHelper.queryGlobalKeybinding('undo');
        expect(res).toBeNull();

        res = KeybindingHelper.queryGlobalKeybinding('test.1');
        expect(res).toEqual([
            {
                altKey: false,
                ctrlKey: false,
                keyCode: 31,
                metaKey: true,
                shiftKey: false,
            },
        ]);
    });

    test('Should convert to string in macOS', () => {
        KeybindingHelper._isMac = true;
        // empty keybindings
        let res = KeybindingHelper.convertSimpleKeybindingToString();
        expect(res).toBe('');

        // meta keybindings
        res = KeybindingHelper.convertSimpleKeybindingToString([
            {
                altKey: false,
                ctrlKey: false,
                keyCode: 31,
                metaKey: true,
                shiftKey: false,
            },
        ]);
        expect(res).toBe('⌘A');

        // alt keybindings
        res = KeybindingHelper.convertSimpleKeybindingToString([
            {
                altKey: true,
                ctrlKey: false,
                keyCode: 31,
                metaKey: false,
                shiftKey: false,
            },
        ]);
        expect(res).toBe('⌥A');

        // ctrl keybindings
        res = KeybindingHelper.convertSimpleKeybindingToString([
            {
                altKey: false,
                ctrlKey: true,
                keyCode: 31,
                metaKey: false,
                shiftKey: false,
            },
        ]);
        expect(res).toBe('⌃A');

        // shift keybindings
        res = KeybindingHelper.convertSimpleKeybindingToString([
            {
                altKey: false,
                ctrlKey: false,
                keyCode: 31,
                metaKey: false,
                shiftKey: true,
            },
        ]);
        expect(res).toBe('⇧A');

        // combine all keybindings
        res = KeybindingHelper.convertSimpleKeybindingToString([
            {
                altKey: true,
                ctrlKey: true,
                keyCode: 31,
                metaKey: true,
                shiftKey: true,
            },
        ]);
        expect(res).toBe('⌥⌃⌘⇧A');

        // chore key
        res = KeybindingHelper.convertSimpleKeybindingToString([
            {
                altKey: false,
                ctrlKey: false,
                keyCode: 31,
                metaKey: true,
                shiftKey: false,
            },
            {
                altKey: false,
                ctrlKey: false,
                keyCode: 32,
                metaKey: true,
                shiftKey: false,
            },
        ]);
        expect(res).toBe('⌘A ⌘B');
    });

    test('Should covert to string in windows', () => {
        KeybindingHelper._isMac = false;
        // empty keybindings
        let res = KeybindingHelper.convertSimpleKeybindingToString();
        expect(res).toBe('');

        // meta keybindings
        res = KeybindingHelper.convertSimpleKeybindingToString([
            {
                altKey: false,
                ctrlKey: false,
                keyCode: 31,
                metaKey: true,
                shiftKey: false,
            },
        ]);
        expect(res).toBe('Meta+A');

        // alt keybindings
        res = KeybindingHelper.convertSimpleKeybindingToString([
            {
                altKey: true,
                ctrlKey: false,
                keyCode: 31,
                metaKey: false,
                shiftKey: false,
            },
        ]);
        expect(res).toBe('Alt+A');

        // ctrl keybindings
        res = KeybindingHelper.convertSimpleKeybindingToString([
            {
                altKey: false,
                ctrlKey: true,
                keyCode: 31,
                metaKey: false,
                shiftKey: false,
            },
        ]);
        expect(res).toBe('Ctrl+A');

        // shift keybindings
        res = KeybindingHelper.convertSimpleKeybindingToString([
            {
                altKey: false,
                ctrlKey: false,
                keyCode: 31,
                metaKey: false,
                shiftKey: true,
            },
        ]);
        expect(res).toBe('Shift+A');

        // combine all keybindings
        res = KeybindingHelper.convertSimpleKeybindingToString([
            {
                altKey: true,
                ctrlKey: true,
                keyCode: 31,
                metaKey: true,
                shiftKey: true,
            },
        ]);
        expect(res).toBe('Alt+Ctrl+Meta+Shift+A');

        // chore key
        res = KeybindingHelper.convertSimpleKeybindingToString([
            {
                altKey: false,
                ctrlKey: false,
                keyCode: 31,
                metaKey: true,
                shiftKey: false,
            },
            {
                altKey: false,
                ctrlKey: false,
                keyCode: 32,
                metaKey: true,
                shiftKey: false,
            },
        ]);
        expect(res).toBe('Meta+A Meta+B');
    });
});
