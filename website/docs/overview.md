# Basic

Before start to introduce the basic config about molecule, It's necessary to emphasize that the followings are based on you are a programmer of JavaScript.

## Workbench

Workbench is the main interface in molecule.

For reducing the cost of learning, we divide workbench into multiple parts.

As you see, this is a workbench interface for molecule IDE.

![molecule](/img/guides/molecule.jpg)

> If you can't see clearly, just open the image in a new tab.

First, we divide the workbench into two parts, which are `statusBar` and main content.

-   `statusBar` is located in the bottom of the whole page. In general, we put some informations here, like the language current tab used, the line of rows and columns, and so on.

And the main content is divided into three parts, which are `sideBar`, `editor` and `panel`.

-   `sideBar` is located in the left of the whole page. `sideBar` Only contains a column in the left of page, so it only controls what item will render in this column. And if you want to achieve a complete feature, you should use it with `activityBar`.
-   `editor` is the most important part in molecule. When there is no editor tab, we will render a entry page which you can customize it.
-   `panel` is located in the area under the `editor`. In general, we put some informations about editor tab in these panels. For example, we have built-in problems panel for showing the detail of problems in each opened tab.
-   `activityBar` is beside the `sidebar`. We mentioned it in `sideBar`, so it could be understood as the supplement of the `sideBar`. For example, we have built-in explorer in `sideBar` and `activityBar`, and It supports to select explorer in `sideBar` and render explorer panel in `activitybar`.

![molecule](/img/guides/layout-marks.jpg)

> If you can't see clearly, just open the image in a new tab.

## ColorTheme

When you open the settings menus, you can see the `Color Theme` in the bottom of menus. And It will open a quick access palette in the top of pages.

There are several built-in themes in molecule, including `Dark`, `Light`, `Monakai`, `Github Plus`, `High Contrast` and so on.

You can choose one theme in these built-in themes. Or you can customize your own theme throught extensions.

If you want to customize your own, then you can refer to the [VSCode Theme](https://code.visualstudio.com/api/references/theme-color).

## Locales

There are two built-in locales which are Chinese and English in molecule, you can choose one between them. First, you can open the `Command Palette` in settings menus. And then, type `select display language` and choose a language and confirm it.

There will be a notification in the bottom right corner of the page. And just reload current page, then the localed will changes.

If the built-in locales can't satisfy you, you can define the other languages as you like.

The more details about how to define your own locale, please refer to [extends-locales](extends-locales).

## Settings

Molecule support to change some configurations through settings. For example, If you want to change the font size of editor, you just open the `Settings` in settings menus, and then change the value of `editor.fontSize` from 12 to 14. Just waiting for a second, the settings will work.

Sometimes, you want to extends settings to change some other things. You can refer to [extends-settings](extends-settings) to know how to extends settings.

## Keybindings

Expect for some special shortcut keys, such as `Command/Ctrl + W`, `Command/Ctrl + S`, molecule supports to set a marjority of keybindings.

There are several built-in keybindings for quick accessing. For example,

-   `Command/Ctrl + ,` can access the settings tab quickly;
-   `Command/Ctrl + Shift + L` can access the locales Palette quickly;
-   `Command/Ctrl + Shift + P` can access the Command Palette quickly;
-   and so on.

Sometimes, you want to register new keybindings, you can refer to [extends-keybindings](extends-keybindings) to know how to register new keybindings.

## QuickAccess

The quick access palette provider a convenient way to access commands or features quickly. You can access it by shortcut key `Command/Ctrl + Shift + P` in molecule.

![QuickAccess](/img/guides/quick-access.jpg)

> If you can't see clearly, just open the image in a new tab.

Sometimes, you want to register your command or feature into quick access palette, you can refer to [extends-quickAccess](extends-quickAccess) to know how to extends quick access palette.

## Built-in

As your see, there are many built-in commands and features in molecule. But if the user doesn't want this feature, what should he or she do to disable the feature?

The answer is through the `builtin` service. Molecule gathers all built-in commands and features into the `builtin` service and distributes built-in commands to other services.

So if you want to disable a `builtin` command or feature, just have try `builtin` service. The more details about how to use `builtin` service, please refer to [extends-builtin](extends-builtin).

## Extension

Molecule support enriches its features through extensions. Not only can we add a new feature in extensions, but also disabled specific built-in modules in extensions.

But how can we add features through extensions? After the followings you will know something about it.
