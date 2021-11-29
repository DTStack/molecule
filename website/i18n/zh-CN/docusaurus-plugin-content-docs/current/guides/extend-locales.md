---
title: 国际化（i18n）
sidebar_label: 国际化
---

Molecule 内置了一个简单的**国际化（i18n）**方案，支持我们基本的国际化需求。我们内置了**简体中文（zh-CN）**、**英文（en 默认）**2 种基本的语言。

## 切换语言

默认我们提供了**2 种**方法切换。第一种使用 `Command/Ctrl + Shift + L` 快捷键：

![Select Display Language](/img/guides/extend-language.png)

第二种，打开 (`Command/Ctrl + ,`)设置（Settings) 面板，修改 `locale` 字段：

![Select Display Language](/img/guides/extend-language2.png)

修改完成后，Molecule 会在**通知栏（Notification）**弹出更新消息，我们选择 **Reload** 即可重新加载。

## [本地服务（LocaleService） 对象](/docs/api/classes/molecule.i18n.LocaleService)

**LocaleService** 提供了一些基础的 [API](/docs/api/classes/molecule.i18n.LocaleService) 方法，这些方法可以帮助我们完成对国际化功能的扩展，例如：

本地化(localize)一个对象:

```ts
molecule.locale.localize('sourceKey', 'default value');
```

设置当前的本地化语言：

```ts
// Set the zh-CN as the current locale language
molecule.locale.setCurrentLocale('zh-CN');
```

## 自定义语言

**国际化语言** 作为我们 Molecule 的一种扩展类型，我们提供了一种非常简便的自定义本地化语言的方式。我们支持使用 `JSON` 文件来定义我们的国际化数据。

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

`zh-CN.json` 为 [ILocale](/docs/api/interfaces/molecule.i18n.ILocale) 类型的语言包资源文件:

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

其中 `inherit` 是可选项，表示是否继承已存在的（zh-CN/en) 的语言文件，`source` 具体的本地化数据，以 **key-value** 的形式表示。

完整示例请查看 [molecule-example](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo/src/extensions/i18n)。

:::info
遗憾的是，Molecule 使用了 React 技术来构建整个应用，但是国际化功能因为目前架构的原因，
无法做到切换后实时切换语言，需要重新加载整个页面应用。
:::
