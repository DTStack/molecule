---
title: 设置（Settings）
sidebar_label: 设置
---

Molecule 内置了一些**基本设置项**，例如**编辑器（Monaco Editor）**的基本设置、**颜色主题（colorTheme)**、本**地化的语言（locale)** 等。

![Open Settings](/img/guides/extend-settings.png)

上图中，显示了 `colorTheme`、`editor.renderWhitespace`、`editor.tabSize`, `editor.fontSize`、`locale` 这些配置项。用户可以根据自己的需要，在线修改。其中 `colorTheme` 和 `locale` 则需要看当前扩展的支持情况。

Molecule 除了可以在线修改配置，更重要的是， 支持开发者通过[扩展](./extension.md)**自定义**配置项。

## 打开设置

-   第一种、最快捷的方式，就是使用快捷键 `Command/Ctrl + ,`；

-   第二种、通过**快速访问（QuickAccess) **面板，通过快捷键`Command/Ctrl + Shift + P` 打开访问面板，搜索 **settings** 即可；
-   最后一种、就是通过访问 **ActivityBar** 上的**设置菜单**。

## 设置服务（SettingsService）对象

Molecule 内置了[设置服务（SettingsService）](../api/interfaces/molecule.ISettingsService)对象，除了扩展设置项以外，有些场景下，开发者可以利用它做一些基本操作：

```ts
// Get the setting configuration object
molecule.settings.getSettings();

// Update settings configuration
molecule.settings.update(settings: ISettings);

```

## 自定义配置项

:::tip
本文内容中的所有代码，都以 [Quick Start](../quick-start) 中的 [molecule-demo](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo) 项目为基础演示。
:::

Molecule 支持开发者扩展当前的**配置项**，以满足我们**自定义**的诉求。让我们一起看一个例子!

如果想在配置文件中增加一个 `project.id` 字段，如下:

```json
{
    "colorTheme": "Default Dark+",
    "editor.renderWhitespace": "none",
    "editor.tabSize": 4,
    "editor.fontSize": 12,
    "locale": "zh-CN",
    "project.id": 1
}
```

首先，先定义一个 `SettingsExtension` 对象，在 `customSettings` 对象下，定义我们要添加的 `project` 扩展字段：

```ts
export const customSettings = {
    project: {
        id: '1',
    },
};
export class SettingsExtension implements IExtension {
    id: string = 'ExtendSettings';
    name: string = 'Extend Settings';

    appendSettingsItems() {
        // Append the extended items
        molecule.settings.append(customSettings);
    }

    handleSettingsChange() {
        const panel = molecule.panel;
        // Listen to the Settings change
        molecule.settings.onChangeSettings((settings: any) => {
            alert('Settings changed:' + settings.project?.id);
            // do something
        });
    }

    activate(extensionCtx: IExtensionService): void {
        this.appendSettingsItems();
        this.handleSettingsChange();
    }

    dispose(extensionCtx: IExtensionService): void {}
}
```

然后，开发者可以利用 `onChangeSettings` 方法**监听配置项**的变化，然后去做相应的处理。完整示例请查看 [molecule-example](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo/src/extensions/settings)。

:::tip
目前 Molecule 并未缓存用户修改的设置，所有重新加载页面后，这些配置信息就好丢失。如果要避免这种情况，可以自己利用 localeStorage 之类的方案，存储用户的配置信息，然后利用 [SettingsService](../api/interfaces/molecule.ISettingsService) 去更新配置信息。
:::
