---
title: QuickAccess
sidebar_label: QuickAccess
---

Thanks to the powerful extension capabilities of [Monaco Editor](https://microsoft.github.io/monaco-editor/)'s **QuickAccess**, Molecule supports developers to customize the **quick access** functions through **Extension**.

:::info
Same as the [Keybinding](./extend-keybinding) function, the QuickAccess function in Molecule relies on the `Action2` abstract class. To implement this function at present, the related monaco-editor module needs to be introduced.
:::

![Search files by name](/img/guides/extend-quickAccess-1.png)

## Define the Action object for quick access

:::tip
All code demos in this part are based on the [molecule-demo](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo) project in [Quick Start](../quick-start).
:::

Let's take a look at a specific example:

![Search files by name](/img/guides/extend-quickAccess.png)

The **"Quick Access Search"** panel in the picture is opened by the shortcut key `Command/Ctrl + P`. By entering the file name, you can see the file list displayed in the effect of **AutoComplete**. After the file is **selected**, it will be opened in the **editor**.

First, let's create a new `quickOpenAction.ts` file, which defines the `QuickOpenAction` Action object:

```ts title="/src/extensions/theFirstExtension/quickOpenAction.ts"
import {
    Action2,
    KeybindingWeight,
} from '@dtinsight/molecule/esm/monaco/common';
import { KeyCode, KeyMod } from '@dtinsight/molecule/esm/monaco';
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

The `QuickOpenAction` in the code inherits an `Action2` object, which is encapsulated in Molecule by default. We declare some basic information of `Action` in the constructor. Among them, `id` is a necessary parameter, `label` is used to display the current Action name, and the `run` method processes the logic after **triggering**.

## Register Action

Like other extensions, the `QuickOpenAction` object needs to be activated in the extension's `activate` method:

```ts
activate(extensionCtx: IExtensionService): void {
    // Register the Action
    molecule.extension.registerAction(QuickOpenAction);
    // Or
    // extensionCtx.registerAction(QuickOpenAction);
}
```

Here we need to use the `registerAction` method of the [ExtensionService](../api/interfaces/molecule.IExtensionService) object to register the `QuickOpenAction` object. Reload the application interface, and then we can find the **Search files by name** item in the **Command Palette**. In addition, you can also use the shortcut key `Command/Ctrl + P` to open the quick access search panel to find it.
