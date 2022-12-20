---
title: i18n
sidebar_label: i18n
---

Molecule has built-in a simple **internationalization (i18n)** solution to support our basic internationalization needs. We have built-in three basic languages: **simplified Chinese (zh-CN)**, **English (en default)** and **Korean (ko-KR)**.

:::tip
All code demos in this part are based on the [molecule-demo](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo) project in [Quick Start](../quick-start).
:::

## Switch language

We provide **2 ways** to switch languages by default. The first way is to use the shortcut key `Command/Ctrl + Shift + L`:

![Select Display Language](/img/guides/extend-language.png)

The second way is to use the shortcut key `Command/Ctrl + ,` to open the [Settings](./extend-settings) panel in the [Editor](./extend-workbench), and then modify the `locale` field in the **JSON** configuration:

![Select Display Language](/img/guides/extend-language2.png)

After the modification is completed, Molecule will pop up an update message in the [Notification](./extend-builtin-ui#notification) bar, and then we can select **Reload** to reload the page application.

## [LocaleService](../api/classes/molecule.LocaleService)

**LocaleService** provides some basic [API](../api/classes/molecule.LocaleService) methods, these methods can help us to complete the expansion of internationalization functions, for example:

**Localize** an object:

```ts
molecule.locale.localize('sourceKey', 'default value');
```

Set the **current** localized language:

```ts
// Set the zh-CN as the current locale language
molecule.locale.setCurrentLocale('zh-CN');
```

## Custom language

**Internationalized language** is also an extension of Molecule. We provide a very convenient way to **customize the language**, which is to use `JSON` files to define internationalized **language package** data.

Let's take a look at an example!

First, you can create a new folder named `i18n` under the `extensions` directory in your project.

```bash
src/extensions/i18n
├── index.ts
└── zh-CN.json
```

`index.ts` is used to define localized extension objects.

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

`zh-CN.json` is a language pack resource file of type [ILocale](../api/interfaces/molecule.ILocale):

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

Among these properties, `inherit` is optional, indicating whether to **inherit** the existing **(zh-CN/en)** language files, and `source` indicates the specific localized data, whose content is expressed in the form of **key-value**.

After adding the language pack resource file, **refresh** the entire page. You can open the language switch panel with the shortcut key `Command/Ctrl + Shift + L`, and then you can find the `简体中文 - 自定义` option.

:::info
Unfortunately, although Molecule uses React to build the entire application, it is currently unable to **switch languages in real time** due to architectural reasons. The entire page application needs to be reloaded to refresh the locale.
:::
