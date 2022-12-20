---
title: 国际化（i18n）
sidebar_label: 国际化
---

Molecule 内置了一个简单的**国际化（i18n）**方案，支持我们基本的国际化需求。我们内置了**简体中文（zh-CN）**、**英文（en 默认）**和**韩文（ko-KR）**3 种基本的语言。

:::tip
本文内容中的所有代码，都以 [Quick Start](../quick-start) 中的 [molecule-demo](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo) 项目为基础演示。
:::

## 切换语言

默认我们提供了**2 种**方法切换。第一种使用 `Command/Ctrl + Shift + L` 快捷键：

![Select Display Language](/img/guides/extend-language.png)

第二种，打开使用快捷键 `Command/Ctrl + ,` 在 [Editor](./extend-workbench.md) 中打开[设置（Settings)](./extend-settings) 面板，修改 **JSON** 配置中的 `locale` 字段：

![Select Display Language](/img/guides/extend-language2.png)

修改完成后，Molecule 会在 通知栏[（Notification）](./extend-builtin-ui.md#通知栏notification)弹出更新消息，我们选择 **Reload** 即可重新加载。

## [本地化服务（LocaleService） 对象](../api/classes/molecule.LocaleService)

**LocaleService** 提供了一些基础的 [API](../api/classes/molecule.LocaleService) 方法，这些方法可以帮助我们完成对国际化功能的扩展，例如：

**本地化(localize)**一个对象:

```ts
molecule.locale.localize('sourceKey', 'default value');
```

设置**当前**的本地化语言：

```ts
// Set the zh-CN as the current locale language
molecule.locale.setCurrentLocale('zh-CN');
```

## 自定义语言

**国际化语言（i18n）** 同样是 Molecule 的一种扩展程序，我们提供了一种非常简便的**自定义语言**的方式, 支持使用 `JSON` 文件来定义国际化**语言包**数据。

我们一起来看个例子！

首先我们可以在自己项目中的 `extensions` 目录下，新建一个 `i18n` 的文件夹

```bash
src/extensions/i18n
├── index.ts
└── zh-CN.json
```

`index.ts` 用来定义本地化扩展对象

```ts
import { IContributeType, IExtension } from '@dtinsight/molecule/esm/model';

const zhCN = require('./zh-CN.json');
const locales = [zhCN];

export const ExtendLocales: IExtension = {
    id: 'ExtendLocales',
    name: 'Extend locales',
    contributes: {
        [IContributeType.Languages]: locales,
    },
};
```

`zh-CN.json` 为 [ILocale](../api/interfaces/molecule.ILocale) 类型的语言包资源文件:

```json
{
    "id": "custom-zh-CN",
    "name": "简体中文 - 自定义",
    "inherit": "zh-CN",
    "source": {
        "menu.file": "文件",
        "menu.newFile": "新建任务",
        "demo.running": "运行",
        "demo.dataSourceManagement": "数据源管理",
        "demo.terminal": "终端"
    }
}
```

其中 `inherit` 是可选项，表示是否**继承**已存在的**（zh-CN/en) **的语言文件，`source` 为具体的本地化数据，以 **key-value** 的形式表示。

添加完成后，**刷新**整个页面，我们可以通过 `Command/Ctrl + Shift + L `快捷键打开**语言切换面板**，找到 **简体中文 - 自定义** 选项。

:::info
遗憾的是，Molecule 虽然使用了 React 技术来构建整个应用，但是因为架构的原因，
目前无法做到切换后**实时切换**语言，需要**重新加载**整个页面应用，才能**刷新**语言环境。
:::
