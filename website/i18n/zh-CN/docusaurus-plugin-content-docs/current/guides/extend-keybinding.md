---
title: 快捷键（Keybinding）
sidebar_label: 快捷键
---

Molecule 基于 **monaco-editor** 提供了一个 `Action2` 的抽象类，通过继承这个 `Action2` 对象来实现一些**自定义 Action**，并可以通过
**快捷键、执行命令、Command Palette** 的方式来触发。

**快捷键（Keybinding）**是一种通过监听键盘按键触发的 **Action**，我们通过 monaco-editor 内置的 **Keybinding 服务**，可以轻松实现**快捷键自定义**的功能。

## 定义 Action 对象

```ts
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

上面的示例中，我们在这里定义了一个 `Command/Ctrl + S ` 的**组合键**，触发函数 `run` 执行了一个 `alert` 函数。

## 注册 Action

```ts
activate(extensionCtx: IExtensionService): void {
    // Register the Action
    molecule.extension.registerAction(KeybindingAction);
    // Or
    // extensionCtx.registerAction(KeybindingAction);
}
```

定义好的 Action 对象，需要在扩展程序 `activate` 的时候，使用 [ExtensionService](/docs/api/classes/molecule.ExtensionService) 对象的 `registerAction` 方法进行注册。

## 主动执行 Action

除了使用 [Keybinding](/docs/guides/extend-keybinding) 的方式， **Command Palette** 的方式触发这个 **Action** 以外，
我们也可以通过 [executeCommand](/docs/api/classes/molecule.ExtensionService#executecommand) 方法去**主动**执行这个 `KeybindingAction`。

```ts
molecule.extension.executeCommand('AutoSave', args);
```

Keybinding 的完整示例请看 [molecule-examples](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo/src/extensions/action)
