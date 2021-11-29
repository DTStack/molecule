---
title: 设置（Settings）
sidebar_label: 设置
---

<div align="center">
 <img src="/img/guides/extend-settings.png" alt="Open Settings" />
</div>

Molecule 内置了一些基本设置项，例如**编辑器（monaco-editor）**的基本设置、**颜色主题（colorTheme)**、本**地化的语言（locale)** 等等。
我们允许用户在使用应用时，根据需求修改这些配置。最重要的是，我们同样支持你使用 [Extension](/docs/api/interfaces/molecule.models.IExtension) 去**自定义**配置项。

## 基本功能

最快捷的方式，就是使用快捷键 `Command/Ctrl + ,`；第二种就是通过**快速访问（QuickAccess) **面板，通过快捷键`Command/Ctrl + Shift + P` 打开访问面板，搜索 **settings** 即可；最后一种就是通过访问 **ActivityBar** 上的设置菜单。

用户可以根据自己的需要，在线修改 `colorTheme`、`editor.renderWhitespace`、`editor.tabSize`, `editor.fontSize`、`locale` 这些配置。其中 `colorTheme` 和 `locale` 则需要看当前应用的数据情况

## 设置服务（SettingsService）对象

为了方便开发者对 Settings 功能的操作，我们同样内置了[设置服务（SettingsService）](/docs/api/interfaces/molecule.ISettingsService)对象，用来支持我们的基本操作。例如：

```ts
// Get the setting configuration object
molecule.settings.getSettings();

// Update settings configuration
molecule.settings.update(settings: ISettings);

```

更多操作，请查看[设置服务（SettingsService）](/docs/api/interfaces/molecule.ISettingsService) 的 API 文档。

## 自定义配置

Molecule 支持我们我们扩展当前的配置项，以满足我们自定义的诉求。让我们一起看一个例子!

如果我们想在配置文件中增加 `project.id` 字段:

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

声明一个扩展应用：

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

我们可以利用 `onChangeSettings` 方法监听**配置项**的变化，然后去做相应的处理。

完整示例请查看 [molecule-example](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo/src/extensions/settings)。

:::tip
目前 Molecule 并未缓存用户修改的设置，所有重新加载页面后，这些配置信息就好丢失。如果要避免这种情况，可以自己利用 localeStorage 之类的方案，存储用户的配置信息，然后利用 [SettingsService](/docs/api/interfaces/molecule.ISettingsService) 去更新配置信息。
:::
