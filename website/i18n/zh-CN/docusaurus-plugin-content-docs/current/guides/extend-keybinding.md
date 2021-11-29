---
title: 快捷键（Keybinding）
sidebar_label: 快捷键
---

自定义快捷键跟 `QuickAccess` 功能生命的方式一样，都是通过继承 `Action2` 对象来实现。区别就是这里不用在 `run` 方法中调用 `IQuickInputService。`

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

## 注册 Action

```ts
activate(extensionCtx: IExtensionService): void {
    // Register the Action
    molecule.extension.registerAction(KeybindingAction);
    // Or
    // extensionCtx.registerAction(KeybindingAction);
}
```

上面的示例中，我们在这里定义了一个 `Command/Ctrl + S ` 的快捷键，触发后 `run` 方法执行了一个 `alert` 函数。

完整示例请看 [molecule-examples](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo/src/extensions/action)
