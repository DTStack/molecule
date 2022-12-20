---
title: 快捷键（Keybinding）
sidebar_label: 快捷键
---

[Monaco Editor](https://microsoft.github.io/monaco-editor/) 内置来非常强大的 **快捷键（Keybinding）** 服务，Molecule 在此基础上，移植了 VSCode 中的 `Action2` 抽象类。开发者可以通过继承这个 `Action2` 对象，来实现一些**自定义 Action**，并可以通过
**快捷键、执行命令、Command Palette** 等方式来触发。

本文将详细阐述，如何实现自定义 **Keybinding Action**。

:::tip
本文内容中的所有代码，都以 [Quick Start](../quick-start) 中的 [molecule-demo](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo) 项目为基础演示。
:::

## 定义 Action 对象

首先，我们先基于 `Action2` 抽象类，定义 `KeybindingAction` 对象：

```ts title="src/extensions/action/keybindingAction.ts"
import { KeybindingWeight } from '@dtinsight/molecule/esm/monaco/common';
import { KeyCode, KeyMod } from '@dtinsight/molecule/esm/monaco';
import { Action2 } from '@dtinsight/molecule/esm/monaco/action';
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

代码中，`keybinding` 字段则是快捷键的主要部分。我们在 `primary` 这里定义了一个 `Command/Ctrl + S ` 的**组合键**，**触发函数** `run` 执行了一个 `alert`。 其中 `id` 参数为 当前 Action 的 **ID**，我们可以使用 `executeCommand(actionId)` 方法[主动触发](#主动执行-action)这个 Action。

## 注册 Action

```ts title="src/extensions/action/index.ts"
activate(extensionCtx: IExtensionService): void {
    // Register the Action
    molecule.extension.registerAction(KeybindingAction);
    // Or
    // extensionCtx.registerAction(KeybindingAction);
}
```

定义好的 Action 对象，需要使用 [ExtensionService](../api/classes/molecule.ExtensionService) 对象的 `registerAction` 方法进行注册。

:::tip
Action 对象同样要在扩展程序 `activate` 的阶段进行注册，才能生效。
:::

## 主动执行 Action

除了使用 [Keybinding](extend-keybinding)、 **Command Palette** 的方式触发 **Action** 以外，
开发者也可以通过 [executeCommand](../api/classes/molecule.ExtensionService#executecommand) 方法去**主动触发**执行 Action。以 `KeybindingAction` 为例：

```ts
molecule.extension.executeCommand('AutoSave', args);
```

以上完整的示例请看 [molecule-examples](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo/src/extensions/action)。
