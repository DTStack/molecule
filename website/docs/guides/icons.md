---
title: Icon
sidebar_label: Icon
---

Molecule uses the [@vscode/codicons](https://microsoft.github.io/vscode-codicons/dist/codicon.html) font icon by default, and also provides the [Icon](../api/namespaces/molecule.component#icon) component of React.

## Basic use

:::tip
All code demos in this part are based on the [molecule-demo](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo) project in [Quick Start](../quick-start).
:::

Introduce **Icon** component

```ts
import molecule from '@dtinsight/molecule';
<molecule.component.Icon type="check" />;
```

or

```ts
import { Icon } from '@dtinsight/molecule/esm/components';
<Icon type="check" />;
```

`type` is the **icon name**, refer to this [preview address](https://microsoft.github.io/vscode-codicons/dist/codicon.html) for the complete name list.

## Use Icon className

If you don’t want to use the built-in React `Icon` component, you can also use the `codicon` icon by using the **className** of the `Icon` font, for example:

```ts
<span className="codicon codicon-arrow-both"></span>
```

:::tip
For the complete online preview of [@vscode/codicons][codicon-url] icons, click [here][codicon-url]!
:::

[codicon-url]: https://microsoft.github.io/vscode-codicons/dist/codicon.html
