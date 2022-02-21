---
title: 图标（Icon）
sidebar_label: 图标
---

Molecule 默认引用了 [@vscode/codicons](https://microsoft.github.io/vscode-codicons/dist/codicon.html) 字体图标，并且我们提供了
React [Icon](../api/namespaces/molecule.component#icon) 组件版本。

## 基本使用

:::tip
本文内容中的所有代码，都以 [Quick Start](../quick-start) 中的 [molecule-demo](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo) 项目为基础演示。
:::

引入 **Icon** 组件

```ts
import molecule from '@dtinsight/molecule';
<molecule.component.Icon type="check" />;
```

或者

```ts
import { Icon } from '@dtinsight/molecule/esm/components';
<Icon type="check" />;
```

`type` 为**图标名称**，完整的名称请参考这个[预览地址](https://microsoft.github.io/vscode-codicons/dist/codicon.html)。

## 使用 Icon 类名

如果不想使用内置的 React `Icon` 组件，也可以使用 `Icon` 字体的的**类名（className）**来使用 `codicon` 图标, 例如：

```ts
<span class="codicon codicon-arrow-both"></span>
```

:::tip
完整的 [@vscode/codicons][codicon-url] 图标在线预览地址，请点击[这里！][codicon-url]
:::

[codicon-url]: https://microsoft.github.io/vscode-codicons/dist/codicon.html
