---
title: 图标（Icon）
sidebar_label: 图标
---

Molecule 默认引用了 [@vscode/codicons](https://microsoft.github.io/vscode-codicons/dist/codicon.html) 字体图标，且我们提供了
React [Icon](/docs/api/namespaces/molecule.component#icon) 组件。

## 基本使用

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

`type` 类型名称请参考这个在线[预览地址](https://microsoft.github.io/vscode-codicons/dist/codicon.html)

## 使用 Icon 类名

如果不想使用内置的 `Icon` 组件，我们也可以使用 `Icon` 字体的的类名（className）来使用 `codicon` 图标：

```ts
<span class="codicon codicon-arrow-both"></span>
```

:::tip
完整的 [@vscode/codicons][codicon-url] 图标在线预览地址，请点击[这里！][codicon-url]
:::

[codicon-url]: https://microsoft.github.io/vscode-codicons/dist/codicon.html
