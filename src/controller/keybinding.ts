import { Controller } from 'mo/react';
import { ResolvedKeybindingItem } from 'monaco-editor/esm/vs/platform/keybinding/common/resolvedKeybindingItem';
import { KeybindingsRegistry } from 'monaco-editor/esm/vs/platform/keybinding/common/keybindingsRegistry';
import { singleton } from 'tsyringe';
import { ISimpleKeybinding, KeyCodeString } from 'mo/model/keybinding';

export interface IKeybindingController {
    /**
     * Query global keybingding
     * @example
     * ```ts
     * const key = queryGlobalKeybinding('workbench.test');
     * // [{ctrlKey: boolean; shiftKey: false; altKey: false; metaKey: false; keyCode: 0;}]
     * ```
     */
    queryGlobalKeybinding: (id: string) => ISimpleKeybinding[] | null;
    /**
     * Convert simple keybinding to a string
     * @example
     * ```ts
     * const key = queryGlobalKeybinding('workbench.test');
     * // [{ctrlKey: boolean; shiftKey: false; altKey: false; metaKey: true; keyCode: 82;}]
     * convertSimpleKeybindingToString(key);
     * // ⌘,
     * ```
     */
    convertSimpleKeybindingToString: (
        keybinding?: ISimpleKeybinding[]
    ) => string;
}

@singleton()
export class KeybindingController
    extends Controller
    implements IKeybindingController {
    constructor() {
        super();
    }

    public queryGlobalKeybinding = (id: string) => {
        const defaultKeybindings: ResolvedKeybindingItem[] = KeybindingsRegistry.getDefaultKeybindings();
        const globalKeybindings = defaultKeybindings.filter((key) => !key.when);

        // 'Cause one action can occupy multiply keybinding, so there should be filter rather than find
        const targetKeybinding = globalKeybindings.filter(
            (i) => i.command === id
        );

        if (targetKeybinding.length) {
            // Since it's sorted out by the weight when getDefaultKeybindings, the targetKeybinding is sorted by weight
            // Get lower priority keybinding
            const lowerPriorty = targetKeybinding[targetKeybinding.length - 1];
            // keybinding which is chord key[组合键] can get more than 1 parts
            const keybindings: ISimpleKeybinding[] =
                lowerPriorty.keybinding.parts;
            return keybindings;
        }
        return null;
    };

    public convertSimpleKeybindingToString = (
        keybinding: ISimpleKeybinding[] = []
    ) => {
        return (
            keybinding
                .map((key) => {
                    let res = '';
                    if (key.altKey) {
                        res += '⌥';
                    }
                    if (key.ctrlKey) {
                        res += '⌃';
                    }
                    if (key.metaKey) {
                        res += '⌘';
                    }
                    if (key.shiftKey) {
                        res += '⇧';
                    }
                    if (key.keyCode) {
                        res += KeyCodeString[key.keyCode] || '';
                    }
                    return res;
                })
                // Insert a space between chord key
                .join(' ')
        );
    };
}
