---
title: The First Extension
sidebar_label: The First Extension
sidebar_position: 1
---

In Molecule, all custom functions are done using [Extension](./guides/extension). Next, let us quickly learn how to write an extended application based on the [molecule-demo][demo-url] project.

:::tip
All the codes are based on the [molecule-demo](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo) project in [Quick Start](./quick-start).
:::

## A simple scene

![The First Extension](/img/the-first-extension.png)

As shown in the figure, we display series of code files in the **FolderTree** of **Explorer**. When the file is **clicked** by the mouse, it will be **opened** in the Editor on the right.

Molecule has some UI modules such as [Explorer](./guides/extend-builtin-ui.md#explorer)，[FolderTree][foldertree-url]，[Editor](./guides/extend-workbench#editor) built in by default.
To achieve the functions in the above figure, these requirements can be quickly achieved through the API provided by it, and developers do not need to care too much about the construction of the UI.

## Implementation

First, we create a new `extensions` folder under `src`, then create a `theFirstExtension` directory, and add the default module `index.ts`, as follows:

```bash
src/extensions
├── index.ts
└── theFirstExtension
    ├── folderTreeController.ts // folderTree
    ├── index.ts
```

### Create Extension Object

We create a new class called `FirstExtension` in `index.ts`, which implements the class [IExtension](./api/interfaces/molecule.model.IExtension) interface:

```ts title="src/extensions/theFirstExtension/index.ts"
import { IExtension } from '@dtinsight/molecule/esm/model/extension';
import { IExtensionService } from '@dtinsight/molecule/esm/services';
import * as folderTreeController from './folderTreeController';

export class FirstExtension implements IExtension {
    id: string = 'TheFirstExtension';
    name: string = 'The First Extension';

    activate(extensionCtx: IExtensionService): void {
        folderTreeController.initFolderTree();
        folderTreeController.handleSelectFolderTree();
    }

    dispose(extensionCtx: IExtensionService): void {
        throw new Error('Method not implemented.');
    }
}
```

The code snippet above shows that the class `FirstExtension` includes a method named `activate` that will be running when the program is activated. We write the **initialization** logic of the extension in this method;`dispose` is normally used to **cancel** extension programme and do some **recycling** operations. Importing `folderTreeController` including methods called `initFolderTree` and `handleSelectFolderTree` is used to process the **data initialization** and **event monitoring** of [FolderTree][foldertree-url].

:::info
For more details about the **Extension**, please refer to [Guides](./guides/extension.md).
:::

### Write control logic

Let's have a look at the specific implementation logic of the `folderTreeController` module:

-   `initFolderTree`： Responsible for obtaining the data of [FolderTree][foldertree-url], and rendering the data to the [FolderTree][foldertree-url] component after success
-   `handleSelectFolderTree`： Responsible for handling the `onSelectFile` event of [FolderTree][foldertree-url], after selecting the file, open it in [Editor](./api/namespaces/molecule#editor)

```ts title="/src/extensions/theFirstExtension/folderTreeController.ts"
import molecule from '@dtinsight/molecule';
import { IFolderTreeNodeProps } from '@dtinsight/molecule/esm/model';
import { transformToEditorTab } from '../../common';

import { cloneDeep } from 'lodash';
import API from '../../api';

export async function initFolderTree() {
    const res = await API.getFolderTree();
    if (res.message === 'success') {
        const folderTreeData = cloneDeep(res.data);
        molecule.folderTree.add(folderTreeData);
    }
}

export function handleSelectFolderTree() {
    molecule.folderTree.onSelectFile((file: IFolderTreeNodeProps) => {
        molecule.editor.open(transformToEditorTab(file));
    });
}
```

After fetching the data of FolderTree successfully through `API.getFolderTree` ,we use the [`molecule.folderTree.add`](./api/classes/molecule.FolderTreeService#add) method to add and display data to the [FolderTree] component; next, monitor **the selected file** through the [`molecule.folderTree.onSelectFile`](./api/classes/molecule.FolderTreeService#onselectfile) method; finally,open the file through the [`molecule.editor.open`](./api/interfaces/molecule.IEditorService#open) method.

:::caution
Pay more attention: In reality, the **data type** returned by `API.getFolderTree` is not [IFolderTreeNodeProps](./api/interfaces/molecule.model.IFolderTreeNodeProps) type, we often need to go through a **conversion** method. The mock data of the `API.getFolderTree` function in the example can be [View](https://github.com/DTStack/molecule-examples/blob/main/packages/molecule-demo/public/mock/folderTree.json). The `transformToEditorTab` in the `handleSelectFolderTree` method is a **transformation** method, which mainly converts `file` to [IEditorTab](./api/interfaces/molecule.model.IEditorTab) type.
:::

### Use extension

After defining class `FirstExtension`, it is used with [create][create-url]. Here we export all **extension objects** that need to be loaded in `extensions/index.ts` by default:

```ts title="/src/extensions/index.ts"
import { IExtension } from '@dtinsight/molecule/esm/model';
import { FirstExtension } from './theFirstExtension';

const extensions: IExtension[] = [new FirstExtension()];

export default extensions;
```

Import the `FirstExtension` object and instantiate it, and finally use `extensions` to export all **extension object instances**.

```tsx title="/src/app.tsx"
import extensions from './extensions';

const moInstance = create({
    extensions,
});
```

Finally, introduce `extensions` and pass in the `extensions` property of [create][create-url].

:::info
The above example is just a very simple application scenario. If you want to achieve a richer extension to [Workbench](/guides/extend-workbench.md), you can refer to [Workbench Extension Guide](./guides/extend-workbench.md) ).

Otherwise,[**Extension**](./guides/extension.md) is the quite important concept in Molecule.
Through it, we can extend many core modules such as [**ColorTheme**](./guides/extend-color-theme.md), [**Workbench**](guides/extend-workbench.md), [**i18n**](./guides/extend-locales.md),
[**Settings**](./guides/extend-settings.md), [**Keybinding**](./guides/extend-keybinding.md), [**QuickAccess**](./guides/extend-quick-access.md)

:::

## Complete Example

Please [view][demo-url] the complete source code of **First Extension**

[demo-url]: https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo/src/extensions/theFirstExtension
[foldertree-url]: ./guides/extend-builtin-ui#foldertree
[create-url]: ./api#create
