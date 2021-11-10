---
title: 编写第一个扩展
sidebar_label: 编写第一个扩展
sidebar_position: 1
---

我们已经成功在 [molecule-demo](./quickStart.md) 中整合了 Molecule，接下里我们开始编写第一个扩展程序，让 Molecule 帮助我们实现产品功能。 看到这里不清楚如何安装使用的同学，可以阅读[快速开始](./quickStart.md)。

## 一个简单的需求

我们已经在 [Quick Start](./quickStart.md) 中利用 [create-react-app](https://github.com/facebook/create-react-app) 成功安装并集成了 Molecule，现在我们可以尝试利用其提供的 [Extension API](./api/interfaces/molecule.IExtension)，实现一个简单的场景：

<div align="center">
 <img src="/static/img/the-first-extension.png" alt="The First Extension" />
</div>

上图实现一个简单的目录树，并支持通过点击文件，在右侧的编辑器中打开该文件。Molecule 默认内置了 [explorer](./api/namespaces/molecule#explorer)，[folderTree](./api/namespaces/molecule#foldertree)，[editor](./api/namespaces/molecule#editor) 等等模块，通过其提供的 API，我们可以快速实现这个需求，而无需过多关心 UI 上的构建工作。

## 实现方法

首先，我们在 `src` 下新建一个 `extensions` 文件夹，然后创建一个 `the-first-extension` 目录, 并新建扩展程序默认模块 `index.ts`，如下：

```bash
src/extensions
├── index.ts
└── the-first-extension
    ├── folderTreeController.ts
    ├── index.ts
```

### 创建扩展（Extension）对象

在 Molecule 中，[扩展（Extension）](./api/interfaces/molecule.IExtension)对象是一个包含 `id`, `name`, `activate`, `dispose` 等基本**属性**和**方法**的对象。通过 [MoleculeProvider](./api/classes/MoleculeProvider) 的 `extensions` API 属性，我们可以将实例化的扩展对象传入，而 Molecule 将自动加载传入的扩展程序。

如果你当前工作的是 **Typescript** 项目的话那就更好了，只需要简单的**实现（implements）**一下 [IExtension](./api/interfaces/molecule.IExtension) 接口，这里以上图的扩展程序为例：

```ts
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

这里我们定义了一个实现 `IExtension` 接口的 `FirstExtension` 的对象。`activate` 为扩展程序激活时所触发的方法，我们将在这个方法中执行扩展程序的**初始化**操作； `dispose` 则是用于**消除**扩展程序时所触发的方法，一般可以做一些回收的操作。

### 编写控制逻辑

按上图中所展示的需求，我们可以简单拆分为 2 个部分：

-   `initFolderTree`： 获取文件树的数据，并渲染数据到 `folderTree`
-   `handleSelectFolderTree`： 监听 `folderTree` 的 `onSelectFile` 事件，选中文件后，在 [editor](./api/namespaces/molecule#editor) 中打开文件

```ts title="/src/extensions/the-first-extension/folderTreeController.ts"
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

在`API.getFolderTree` 方法获取文件树数据成功后，我们通过 [folderTree](./api/classes/molecule.FolderTreeService) 服务的 [add](./api/classes/molecule.FolderTreeService#add) 方法，将数据添加并展示到 [FolderTree](./api/classes/molecule.FolderTreeService) 组件中。通过 [onSelectFile](./api/classes/molecule.FolderTreeService#onSelectFile) 方法监听选中文件，通过 [editor](./api/interfaces/molecule.IEditorService) 服务的 [open](./api/interfaces/molecule.IEditorService#open) 方法打开文件。[folderTree](./api/interfaces/molecule.IFolderTreeService), [editor](./api/interfaces/molecule.IEditorService) 服务对象能做的事情远非如此，关于服务对象的更多内容，请参考 [API 文档](./api) 。

:::caution

需要注意到是，在现实情况中，`API.getFolderTree` 返回的数据结构并不是直接符合 folderTree 接口的，
我们往往需要经过一个**转换**方法。这里可以通过 API 文档查看 [IFolderTreeNodeProps](./api/interfaces/molecule.IFolderTreeNodeProps) 类型的详细声明。示例中 `folderTree` 的 Mock 数据可以在这里[查看](https://github.com/DTStack/molecule-examples/blob/main/packages/molecule-demo/public/mock/folderTree.json)。`handleSelectFolderTree` 方法中的 `transformToEditorTab` 同为一个**转换**方法，主要是将`file`转换为满足 [IEditorTab](./api/interfaces/molecule.IEditorTab) 的类型。

:::

### 使用扩展

这里我们默认在 `extensions/index.ts` 中导出所有需要加载的**扩展对象**：

```ts title="/src/extensions/index.ts"
import { IExtension } from '@dtinsight/molecule/esm/model';
import { FirstExtension } from './the-first-extension';

const extensions: IExtension[] = [new FirstExtension()];

export default extensions;
```

如代码所示，我们导入 `FirstExtension` 对象并将其实例化，最后使用 `extensions` 导出所有扩展程序。

```tsx title="/src/app.tsx"
import extensions from './extensions';

<MoleculeProvider extensions={extensions}>
    <Workbench />
</MoleculeProvider>;
```

最后，引入 `extensions` 并传入 `MoleculeProvider` 的 `extensions` 属性。

:::info
上例只是一个很简单的应用，想要完成更复杂的业务场景，需要我们了解更多的 Molecule [API](./api) 信息。

另外，**Extension** 为 Molecule 中非常重要的概念，通过它我们才可以完成对整个 Molecule 应用中的 **ColorTheme**, **Workbench**, **i18n**,
**Settings**, **Keybindings**, **QuickAccess** 等等核心模块的扩展，更多关于 Extension 接口的信息，请[查看](./api/interfaces/molecule.IExtension)。

:::

## 完整示例

**第一个扩展**的完整源码，请[浏览](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo/src/extensions/the-first-extension)。
