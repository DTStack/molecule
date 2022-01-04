---
title: Settings
sidebar_label: Settings
---

Molecule has some **basic settings** built-in, such as the basic settings of the **editor (Monaco Editor)**, **color theme (colorTheme)**, **localized language (locale)**, etc.

![Open Settings](/img/guides/extend-settings.png)

The above picture shows the configuration items `colorTheme`, `editor.renderWhitespace`, `editor.tabSize`, `editor.fontSize`, and `locale`. Users can modify the configuration online according to their needs. Among these configuration items, `colorTheme` and `locale` need to be configured according to the current extended support.

In addition to supporting online configuration modification, Molecule supports developers to **customize** configuration items through [extensions](./extension).

## Open settings

-   The first and fastest way is to use the shortcut key `Command/Ctrl + ,`;

-   The second way is to use the **QuickAccess** panel, open the access panel with the shortcut key `Command/Ctrl + Shift + P`, and search for **settings**;

-   The last way is to access the **settings menu** on the **ActivityBar**.

## SettingsService

Molecule has a built-in [SettingsService](../api/interfaces/molecule.ISettingsService) object. In addition to extended settings, in some scenarios, developers can use it to do some basic operations:

```ts
// Get the setting configuration object
molecule.settings.getSettings();

// Update settings configuration
molecule.settings.update(settings: ISettings);

```

## Custom configuration items

:::tip
All code demos in this part are based on the [molecule-demo](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo) project in [Quick Start](../quick-start).
:::

Molecule supports you to extend the current **configuration items** to meet your **customized** requirements. Let's see an example together!

If you want to add a `project.id` field to the configuration file as follows:

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

First, define a `SettingsExtension` object, and define the `project` extension field you want to add under the `customSettings` object:

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

Then, you can use the `onChangeSettings` method to **monitor** the changes of the **configuration items**, and then do the corresponding processing. The complete example refer to [molecule-example](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo/src/extensions/settings).

:::tip
Currently, Molecule does not cache user-modified settings, so after reloading the page, these configuration information will be lost. If you want to avoid this situation, you can use a solution such as localeStorage to store the user's configuration information, and then use [SettingsService](../api/interfaces/molecule.ISettingsService) to update the configuration information.
:::
