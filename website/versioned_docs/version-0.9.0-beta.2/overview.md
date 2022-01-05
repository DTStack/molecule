---
title: Overview
sidebar_label: Overview
---

Before Molecule is for official use, let's learn some **fundamentals** about it, to make sure that you can have a [quick start](./quick-start.md) of Molecule.

![molecule](/img/molecule.png)

## Extension

[Extension](./guides/extension) is a **plug-in technology** used by Molecule to realize **function customization**. With the extension, it's easy to extend core functionalities such as **Workbench, ColorTheme, i18n, Settings,Keybinding, QuickAccess**.

## Workbench

[Workbench](./guides/extend-workbench)
is the most important part in IDE UI. It contains many components，which includes 6 main modules named **MenuBar**, **ActivityBar**, **Sidebar**, **Editor**, **Panel**, and **StatusBar** in Molecule.
Each core module provides a **React component** and a basic **Service object** for developers to operate or customize.

## ColorTheme

Molecule is compatible with [VSCode ColorTheme](https://code.visualstudio.com/api/references/theme-color), and implement a set of extension mechanisms. Use the shortcut combination `Command/Ctrl + K` to open the theme '**switch panel**', or through the '**settings menu**', you can see the '**ColorTheme**' at the bottom of the menu.

There are kinds of built-in themes in Molecule ,including `Dark`, `Light`, `Monakai`, `Github Plus`, `High Contrast`,etc.

## i18n

Molecule has a basic [Internationalization (i18n)](./guides/extend-locales) program and supports the extension mechanism. There are three built-in languages ​​by default, **Chinese**, **English** and **Korean**.
We can use the shortcut combination `Command/Ctrl Shift + L` to open the language 「**switch panel**」, select a language, and then confirm the selection, and then there will be a reminder window in the **bottom right corner** of the page. Clicking to confirm will reload the current page, and then the locale will be changed.

For more details about the **customized** locale, please refer to [Extended Language Environment](./guides/extend-locales).

## Settings

Molecule supports modifying some configuration items in [Settings](./guides/extend-settings). When you want to modify the size of the **font** in the **editor**, you only need to open the '**Settings**' option in the settings menu, and then change the value of `editor.fontSize` from **12** to **14**.

For more details about the **Extended settings**, please refer to [Extended settings](./guides/extend-settings).

## Keybinding

Molecule utilizes the powerful Keybinding service of monaco-editor to support customizing various [Keybinding](./guides/extend-keybinding) in an extended manner. Molecule also has some built-in shortcut keys by default:

-   `Command/Ctrl + ,` can quickly access settings;
-   `Command/Ctrl + Shift + L` can quickly switch **locale**;
-   `Command/Ctrl + Shift + P` can quickly access **Command Palette**;

For how to **Customize Keybinding**, please refer to [Extended Shortcut Keys](./guides/extend-keybinding).

## QuickAccess

![QuickAccess](/img/guides/quick-access.jpg)

[QuickAccess](./guides/extend-quick-access) is an interactive component of scenes in editor tools such as **VSCode and Sublime**. We are based on the built-in `QuickInputService` of monaco-editor and Molecule's extension mechanism, allowing developers to easily implement their own quick access.

For more information on how to **customize quick access**, please refer to [Extended Quick Access](./guides/extend-quick-access) to learn how to extend the quick access panel.

## Components

Molecule provides many basic React UI [Atomic Components](./api/namespaces/molecule.component) such as [Menu][menu-url],[TreeView][treeview-url],[ContextMenu][ctxmenu-url],etc. At the same time, our Workbench UI is built on the basis of these components. Through these built-in components, we can meet the extension demands of out developers on UI to a greater extend. In addition, Molecule also supports the use of third-party UI component libraries like [antd](http://ant.design/), to meet its own custom requirements.

Currently, we use Storybook to develop and maintain these components. Regarding the use of these components, we can find examples in [stories](https://github.com/DTStack/molecule/tree/main/stories) under the source code repository.

[menu-url]: ./api/namespaces/molecule.component#menu
[ctxmenu-url]: ./api/namespaces/molecule.component#usecontextmenu
[treeview-url]: ./api/namespaces/molecule.component#treeview
