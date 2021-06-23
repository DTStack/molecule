import { GlobalEvent } from 'mo/common/event';
import { Action2, registerAction2 } from 'mo/monaco/common';

export interface IKeybindingService {
    /**
     * Register keybinding based in Action2,
     * @example
     * ```ts
     * const action = class Action extends Action2 {};
     * registerKeybinding(action);
     * ```
     */
    registerKeybinding: (actionClass: { new (): Action2 }) => void;
}

export class KeybindingService
    extends GlobalEvent
    implements IKeybindingService {
    constructor() {
        super();
    }
    public readonly registerKeybinding = (actionClass: { new (): Action2 }) => {
        registerAction2(actionClass);
    };
}
