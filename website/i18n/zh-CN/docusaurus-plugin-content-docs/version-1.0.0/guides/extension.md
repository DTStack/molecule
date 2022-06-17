---
title: 扩展（Extension）
sidebar_label: 扩展
---

[扩展（Extension）][ext-url] 作为 Molecule 最重要的**核心**模块之一，主要是提供了一套扩展 IDE Workbench 的机制。通过这种机制，我们可以轻松的实现自定义，并且可以管理这些扩展应用。

## 扩展接口（IExtension)

[扩展（Extension）][ext-url] 是一个包含 `id`、`name`、`activate`、`dispose` 等**属性**和**方法**的接口，通过该**接口类型**，可以帮助开发者更快的创建扩展程序。

Molecule 支持你使用**字面量**或者 **class** 关键字的方式来定义扩展对象，具体看开发者自己的偏好。

### 自面量对象

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

### class 对象

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

在 Molecule 中，我们可以通过 [ExtensionService][service-url] 服务对象来管理**扩展程序**。例如**添加、查询、删除**等操作, 例如：

```ts
// Add Extension, but no activated
molecule.extension.add(extensions);
// Dispose the Extension
molecule.extension.dispose(extensionId);
// Get an Extension
molecule.extension.getExtension(extensionId);
```

## 禁用扩展

在有些情况下，开发者可能会想要**禁用**一些 Molecule 中内置的扩展程序，这里可以使用 [ExtensionService][service-url] 中的 [`inactive`][inactive-url] 方法，示例：

```ts
import React from 'react';
import molecule from '@dtinsight/molecule';
import { create, Workbench } from '@dtinsight/molecule';
import '@dtinsight/molecule/esm/style/mo.css';

// All Extension instances
import extensions from './extensions';

const moInstance = create({
    extensions,
});

moInstance.onBeforeLoad(() => {
    molecule.extension.inactive((ext) => {
        // Inactive the Extension which id is ExampleExt
        return extension.id === 'ExampleExt';
    });
});

const App = () => moInstance.render(<Workbench />);

export default App;
```

:::caution
需要注意到是，[inactive][inactive-url] 方法，需要在 [create](../api#create) 导出的生命周期 onBeforeLoad 中使用。
:::

[inactive-url]: ../api/interfaces/molecule.IExtensionService#inactive
[service-url]: ../api/classes/molecule.ExtensionService
[cmd-url]: ../api/classes/molecule.ExtensionService#executecommand
[ext-url]: ../api/interfaces/molecule.model.IExtension
