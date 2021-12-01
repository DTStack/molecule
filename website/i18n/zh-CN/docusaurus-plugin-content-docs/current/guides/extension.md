---
title: 扩展（Extension）
sidebar_label: 扩展
---

扩展（Extension）作为 Molecule 最重要的核心模块之一，主要是提供了一套扩展 IDE Workbench 的机制。通过这种机制，我们可以轻松的实现自定义，并且可以管理这些扩展应用。

## 扩展接口（IExtension)

[扩展接口（IExtension）](/docs/api/interfaces/molecule.models.IExtension)**定义了扩展（Extension）**程序的类型，通过该接口类型，我们可以更快速的创建扩展程序。

**自面量对象**：

```ts
import { IContributeType, IExtension } from '@dtinsight/molecule/esm/model';
import { IExtensionService } from '@dtinsight/molecule/esm/services';

export const ExampleExt: IExtension = {
    id: 'ExampleExt',
    name: 'Example Extension',
    contributes: {},
    activate(extensionCtx: IExtensionService) {},
    dispose(extensionCtx: IExtensionService) {},
};
```

**类对象**实现扩展接口的方式：

```ts
import molecule from '@dtinsight/molecule';
import { IExtension } from '@dtinsight/molecule/esm/model/extension';
import { IExtensionService } from '@dtinsight/molecule/esm/services';

export class ExampleExt implements IExtension {
    id: string = 'ExampleExt';
    name: string = 'Example Extension';

    activate(extensionCtx: IExtensionService): void {
        // Do something
    }

    dispose(extensionCtx: IExtensionService): void {
        // Do something
    }
}
```

## 扩展服务（ExtensionService)

[ExtensionService][extensionservice] 是用来管理扩展程序的一个服务对象，例如常见的**添加、查询**等操作。服务对象我们可以通过 [`molecule.extension`][extensionservice] 直接访问。除去针对扩展的一些基本操作，ExtensionService 还负责了一些其他的常用操作。

### 执行内置命令（executeCommand）

我们在 [自定义 Action](/docs/guides/extend-quickAccess) 章节中有讲过如何定义一个 **Action**, 那么除了使用 [Keybinding](/docs/guides/extend-keybinding) 的方式， **Command Palette** 的方式触发这个 **Action** 以外，
我们也可以通过 [executeCommand][extensionservicecmd] 方法去主动执行这个 **Action**。

```ts
molecule.extension.executeCommand('ActionID', args);
```

## 禁用扩展

我们已经在上文中的诸多示例中讲述了 **Extension** 的使用方法。Molecule 默认内置了很多扩展程序，
但是有些情况下，开发者想要**禁用**这些默认扩展。

我们在 [ExtensionService][extensionservice] 中提供了一个 [inactive][inactive-link] 方法，以供我们去禁用某些扩展, 如下示例：

```ts
import React from 'react';
import molecule from '@dtinsight/molecule';
import { MoleculeProvider, Workbench } from '@dtinsight/molecule';
import '@dtinsight/molecule/esm/style/mo.css';

// All Extension instances
import extensions from './extensions';

molecule.extension.inactive((extension: IExtension) => {
    // Inactive the Extension which id is ExampleExt
    if (extension.id === 'ExampleExt') {
        return true;
    }
});

function App() {
    return (
        <MoleculeProvider extensions={extensions}>
            <Workbench />
        </MoleculeProvider>
    );
}

export default App;
```

:::info
需要注意到是，[inactive][inactive-link] 方法，需要在 [MoleculeProvider](/docs/api/classes/MoleculeProvider) 之前声明。
:::

[inactive-link]: /docs/api/interfaces/molecule.IExtensionService#inactive
[extensionservice]: /docs/api/classes/molecule.ExtensionService
[extensionservicecmd]: /docs/api/classes/molecule.ExtensionService#executecommand
