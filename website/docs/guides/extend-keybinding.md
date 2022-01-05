---
title: Keybinding
sidebar_label: Keybinding
---

[Monaco Editor](https://microsoft.github.io/monaco-editor/) has a very powerful **Keybinding** service built in. On this basis, Molecule has transplanted the abstract class of `Action2` in VSCode. Developers can implement some **custom actions** by inheriting this `Action2` object, and they can be triggered by **shortcut keys, execution commands, Command Palette** and so on.

This part will elaborate on how to implement a custom **Keybinding Action**.

:::tip
All code demos in this part are based on the [molecule-demo](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo) project in [Quick Start](../quick-start).
:::

## Define Action object

First, we define the `KeybindingAction` object based on the `Action2` abstract class:

```ts title="src/extensions/action/keybindingAction.ts"
import {
    Action2,
    KeybindingWeight,
} from '@dtinsight/molecule/esm/monaco/common';
import { KeyCode, KeyMod } from '@dtinsight/molecule/esm/monaco';
//@ts-ignore
import { KeyChord } from 'monaco-editor/esm/vs/base/common/keyCodes';

export class KeybindingAction extends Action2 {
    static readonly ID = 'AutoSave';

    constructor() {
        super({
            id: KeybindingAction.ID,
            precondition: undefined, // Define some precondition
            f1: false, // Not show in the Command Palette
            keybinding: {
                weight: KeybindingWeight.WorkbenchContrib,
                when: undefined,
                primary: KeyChord(KeyMod.CtrlCmd | KeyCode.KEY_S),
            },
        });
    }

    run(accessor: any, ...args: any[]) {
        alert('Save success!');
        // do something
    }
}
```

In the code, the `keybinding` field is the main part of the shortcut key. We define a `Command/Ctrl + S` **key combination** in `primary`, which **triggers** the `run` function to execute an `alert`. The `id` parameter is the **ID** of the current Action. We can use the `executeCommand(actionId)` method to [trigger](#actively-execute-action) this Action actively.

## Register Action

```ts title="src/extensions/action/index.ts"
activate(extensionCtx: IExtensionService): void {
    // Register the Action
    molecule.extension.registerAction(KeybindingAction);
    // Or
    // extensionCtx.registerAction(KeybindingAction);
}
```

The defined Action object needs to be registered by using the `registerAction` method of the [ExtensionService](../api/classes/molecule.ExtensionService) object.

:::tip
The Action object also needs to be registered in the `activate` phase of the extension to take effect.
:::

## Actively execute Action

In addition to using [Keybinding](extend-keybinding) and **Command Palette** to trigger **Action**, developers can also **actively trigger** the execution of Actions through the [executeCommand](../api/classes/molecule.ExtensionService#executecommand) method. Take `KeybindingAction` as an example:

```ts
molecule.extension.executeCommand('AutoSave', args);
```

The complete example can refer to [molecule-examples](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo/src/extensions/action).
