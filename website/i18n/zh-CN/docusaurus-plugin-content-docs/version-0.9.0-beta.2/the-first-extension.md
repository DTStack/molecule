---
title: 编写第一个扩展
sidebar_label: 编写第一个扩展
sidebar_position: 1
---

在 Molecule 中，所有的自定义的功能，都是利用[扩展（Extension）](./guides/extension)来完成的。接下来让我们基于 [molecule-demo][demo-url] 项目，快速学习一下如何编写一个扩展应用。

:::tip
本文内容中的所有代码，都以 [Quick Start](./quick-start) 中的 [molecule-demo](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo) 项目为基础演示。
:::

## 一个简单的场景

![The First Extension](/img/the-first-extension.png)

如图，我们在 **Explorer** 中的文件树（FolderTree）中展示了一系列的代码文件，当鼠标**点击**文件后，则在右侧的编辑器（Editor）中**打开**该文件。

Molecule 默认内置了 [Explorer](./guides/extend-builtin-ui.md#浏览面板explorer)，[FolderTree][foldertree-url]，[Editor](./guides/extend-workbench#编辑器editor) 等基础 UI 模块，实现上图的功能，只需要通过其提供的 API，就可以快速实现这些需求，而开发者无需过多关心 UI 上的构建工作。

## 具体实现

首先，我们在 `src` 下新建一个 `extensions` 文件夹，然后创建一个 `theFirstExtension` 目录, 并添加默认模块 `index.ts`，如下：

```bash
src/extensions
├── index.ts
└── theFirstExtension
    ├── folderTreeController.ts // folderTree
    ├── index.ts
```

### 创建扩展（Extension）对象

我们在 `index.ts` 中新建一个叫 `FirstExtension` 的类，该类实现类 [IExtension](./api/interfaces/molecule.model.IExtension) 接口：

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

上述代码中 `FirstExtension` 对象包含一个 `activate` 程序激活时所触发的方法，我们在这个方法中编写扩展程序的**初始化**逻辑； `dispose` 函数一般用于**取消**扩展程序时触发的方法，做一些**回收**的操作。我们使用 `folderTreeController` 分别执行了 `initFolderTree` 和 `handleSelectFolderTree` 方法，用来处理 [FolderTree][foldertree-url] 的**数据初始化**和**事件监听**。

:::info
更多关于 **Extension** 的介绍内容，请参考 [Guides](./guides/extension.md)
:::

### 编写控制逻辑

我们来看看 `folderTreeController` 模块的具体实现逻辑：

-   `initFolderTree`： 负责获取 [FolderTree][foldertree-url] 的数据，成功后并渲染数据到 [FolderTree][foldertree-url] 组件
-   `handleSelectFolderTree`： 负责处理 [FolderTree][foldertree-url] 的 `onSelectFile` 事件，选中后文件，在 [Editor](./guides/extend-workbench#编辑器editor) 中打开

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

在`API.getFolderTree` 方法获取文件树数据成功后，我们通过 [`molecule.folderTree.add`](./api/classes/molecule.FolderTreeService#add) 方法，将数据添加并展示到 [FolderTree](./api/classes/molecule.FolderTreeService) 组件中；通过 [`molecule.folderTree.onSelectFile`](./api/classes/molecule.FolderTreeService#onselectfile) 方法监听**选中文件**；最后通过 [`molecule.editor.open`](./api/interfaces/molecule.IEditorService#open) 方法打开文件。

:::caution
需要注意的是，在现实情况中，`API.getFolderTree` 返回的**数据类型**并不是 [IFolderTreeNodeProps](./api/interfaces/molecule.model.IFolderTreeNodeProps) 类型，我们往往需要经过一个**转换**方法。示例中 `API.getFolderTree` 函数的 Mock 数据可以[查看](https://github.com/DTStack/molecule-examples/blob/main/packages/molecule-demo/public/mock/folderTree.json)。`handleSelectFolderTree` 方法中的 `transformToEditorTab` 为一个**转换**方法，主要是将`file`转换为[IEditorTab](./api/interfaces/molecule.model.IEditorTab) 类型。
:::

### 使用扩展

定义好的 `FirstExtension` 对象，最后需要配合 [MoleculeProvider][provider-url] 来使用。这里我们默认在 `extensions/index.ts` 中导出所有需要加载的**扩展对象**：

```ts title="/src/extensions/index.ts"
import { IExtension } from '@dtinsight/molecule/esm/model';
import { FirstExtension } from './theFirstExtension';

const extensions: IExtension[] = [new FirstExtension()];

export default extensions;
```

导入 `FirstExtension` 对象并将其实例化，最后使用 `extensions` 导出所有**扩展对象实例**。

```tsx title="/src/app.tsx"
import extensions from './extensions';

<MoleculeProvider extensions={extensions}>
    <Workbench />
</MoleculeProvider>;
```

最后，引入 `extensions` 并传入 [MoleculeProvider][provider-url] 的 `extensions` 属性。

:::info
上例只是一个很简单的应用场景，想要实现对 [Workbench](/guides/extend-workbench.md) 更丰富的扩展，可以参考 [工作台扩展指南](./guides/extend-workbench.md)。

另外，[**Extension**](./guides/extension.md) 为 Molecule 中非常重要的概念，通过它我们才可以完成对 [**ColorTheme**](./guides/extend-color-theme.md), [**Workbench**](guides/extend-workbench.md), [**i18n**](./guides/extend-locales.md),
[**Settings**](./guides/extend-settings.md), [**Keybindings**](./guides/extend-keybinding.md), [**QuickAccess**](./guides/extend-quick-access.md) 等等核心模块的扩展。

:::

## 完整示例

**第一个扩展**的完整源码，请[浏览][demo-url]。

[demo-url]: https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo/src/extensions/theFirstExtension
[foldertree-url]: ./guides/extend-builtin-ui#文件树foldertree
[provider-url]: ./api/classes/MoleculeProvider
