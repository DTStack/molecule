---
title: 快捷访问（QuickAccess)
sidebar_label: 快捷访问
---

得益于 [Monaco Editor](https://microsoft.github.io/monaco-editor/) **快捷访问 （QuickAccess）** 强大的扩展能力，我们把允许开发者在 Molecule 中通过 **Extension** 的方式，去自定义**快捷访问**功能。

:::info
Molecule 中的快捷访问功能，与[快捷键](./extend-keybinding.md)功能一样, 都得依赖 `Action2` 抽象类。目前实现此功能需要引入相关的 monaco-editor 模块。
:::

![Search files by name](/img/guides/extend-quickAccess-1.png)

## 定义快捷访问 Action 对象

:::tip
本文内容中的所有代码，都以 [Quick Start](../quick-start) 中的 [molecule-demo](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo) 项目为基础演示。
:::

我们一起来看个具体示例：

![Search files by name](/img/guides/extend-quickAccess.png)

图中的 **「快速访问搜索」** 面板，通过快捷键 `Command/Ctrl + P` 打开，通过输入文件名称，即可以 **AutoComplete** 的效果展示出文件列表，**选中文件**则在**编辑器**中打开。

首先，我们新建一个 `quickOpenAction.ts` 文件, 文件中定义了 `QuickOpenAction` Action 对象：

```ts title="/src/extensions/theFirstExtension/quickOpenAction.ts"
import { KeybindingWeight } from '@dtinsight/molecule/esm/monaco/common';
import { KeyCode, KeyMod } from '@dtinsight/molecule/esm/monaco';
import { Action2 } from '@dtinsight/molecule/esm/monaco/action';
import {
    IQuickInputService,
    //@ts-ignore
} from 'monaco-editor/esm/vs/platform/quickinput/common/quickInput';
//@ts-ignore
import { KeyChord } from 'monaco-editor/esm/vs/base/common/keyCodes';

import molecule from '@dtinsight/molecule';
import { debounce } from 'lodash';

import API from '../../api';
import { transformToEditorTab } from '../../common';

export class QuickOpenAction extends Action2 {
    static readonly ID = 'QuickOpenFile';
    static readonly LABEL = 'Search files by name';

    constructor() {
        super({
            id: QuickOpenAction.ID,
            label: QuickOpenAction.LABEL,
            title: QuickOpenAction.LABEL,
            alias: QuickOpenAction.LABEL,
            precondition: undefined,
            f1: true, // Whether show the QuickOpenFile in Command Palette
            keybinding: {
                // Keybinding
                weight: KeybindingWeight.WorkbenchContrib,
                when: undefined,
                primary: KeyChord(KeyMod.CtrlCmd | KeyCode.KEY_P),
            },
        });
    }

    run(accessor: any, ...args: any[]) {
        const quickInputService = accessor.get(IQuickInputService); // Get the quickInput

        const quickPick = quickInputService.createQuickPick();
        quickPick.items = [];
        quickPick.placeholder = QuickOpenAction.LABEL;

        quickPick.activeItems = [];
        quickPick.canSelectMany = false;

        const queryPick = debounce((value) => {
            API.query(value).then((res) => {
                // Query by the name
                quickPick.items = res.map((item) => {
                    // Display the result
                    item.label = item.name;
                    return item;
                });
            });
        }, 300);

        quickPick.onDidChangeValue(queryPick);

        quickPick.onDidAccept((i: any) => {
            const item = quickPick.activeItems[0];
            if (item) {
                molecule.editor.open(transformToEditorTab(item));
            }
            quickPick.hide();
        });
        quickPick.show();
    }
}
```

代码中 `QuickOpenAction `继承了一个 `Action2` 对象，该对象默认封装在了 Molecule 中。我们在构造器中声明 **Action** 的一些基本信息。其中 `id` 为必要的参数，`label` 用于显示当前的 Action 名称，`run` 方法处理**触发**后的逻辑。

## 注册 Action

跟其他的扩展程序相同， `QuickOpenAction` 对象需要在扩展 `activate` 方法中激活：

```ts
activate(extensionCtx: IExtensionService): void {
    // Register the Action
    molecule.extension.registerAction(QuickOpenAction);
    // Or
    // extensionCtx.registerAction(QuickOpenAction);
}
```

这里我们需要使用 [ExtensionService](../api/interfaces/molecule.IExtensionService) 对象的 `registerAction` 方法来注册。重新加载
应用界面，然后我们可以在 **Command Palette** 中找到 **Search files by name** 项，同时也可以使用快捷键 `Command/Ctrl + P` 来激活。
