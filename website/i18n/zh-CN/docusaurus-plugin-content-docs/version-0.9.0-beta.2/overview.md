---
title: 概览
sidebar_label: 概览
---

在正式开始使用 Molecule 前，我们一起来简单的了解下几个基本的**概念**，以确保您能[快速开始](./quick-start.md) Molecule 的使用。

![molecule](/img/molecule.png)

## 扩展（Extension）

[扩展（Extension）](./guides/extension)是 Molecule 用来实现**功能自定义**的**插件技术**。通过扩展机制，我们可以轻松实现自定义扩展 **Workbench、 ColorTheme、i18n、Settings、Keybinding、QuickAccess** 等核心功能。

## 工作台（Workbench）

[工作台（Workbench）](./guides/extend-workbench)是 IDE UI 中最重要的部分了。在 Molecule 中我们把工作台抽象成了多个子组件：**MenuBar**、 **ActivityBar**、**Sidebar**、 **Editor**、**Panel**、**StatusBar** 主要 6 大模块。每个核心模块又分别提供了 **React 组件**和基础的**服务（Service）对象**，以便开发者进行操作或者自定义。

## 颜色主题（ColorTheme）

Molecule 兼容了 [VSCode ColorTheme](https://code.visualstudio.com/api/references/theme-color) ，并实现了一套简单**扩展**机制。通过快捷键 `Command/Ctrl + K` 即可打开主题「**切换面板**」，或者通过「**设置菜单**」，在菜单的最下面看到「**颜色主题**」。

在 Molecule 中我们有许多内置的主题，包括 `Dark`、 `Light`、`Monakai`、`Github Plus`、`High Contrast` 等等。

## 国际化（i18n）

Molecule 有一个基本的[国际化（i18n）](./guides/extend-locales)方案，并支持扩展（Extension）机制。默认有三种内置的语言，分别是**中文**、**英文**和**韩文**。
我们可以通过快捷键 `Command/Ctrl Shift + L` 打开语言「**切换面板**」，选择一种语言，然后确认选择，然后在页面的**右下角**将会有一个提醒窗口，点击确认会重新加载当前页面，之后语言环境就会发生更改。

更多关于**自定义**语言环境的细节，请参考[扩展语言环境](./guides/extend-locales)。

## 设置（Settings）

Molecule 支持通过在[设置（Settings）](./guides/extend-settings)中修改部分配置项。例如：当你想要修改**编辑器**的**字体**大小时，只需要打开设置菜单中的「**设置**」选项，然后把 `editor.fontSize` 的值从 **12** 修改至 **14** 即可。

更多关于去**扩展设置项**的内容，请参考 [扩展设置](./guides/extend-settings) 。

## 快捷键（Keybinding）

Molecule 利用 monaco-editor 强大的 Keybinding 服务，支持以扩展的方式自定义各种[快捷键（Keybinding）](./guides/extend-keybinding)。Molecule 默认也有一些内置的快捷键：

-   `Command/Ctrl + ,` 可以快速访问设置；
-   `Command/Ctrl + Shift + L` 可以快速切换**语言环境**；
-   `Command/Ctrl + Shift + P` 可以快速访问**Command Palette**；

关于如何**自定义快捷键**，请参考[扩展快捷键](./guides/extend-keybinding)。

## 快捷访问（QuickAccess）

![QuickAccess](/img/guides/quick-access.jpg)

[快捷访问（QuickAccess）](./guides/extend-quick-access)是 **VSCode、Sublime** 等编辑器工具中场景的一种交互组件。我们基于 monaco-editor 内置的 `QuickInputService` 和 Molecule 的扩展机制，让开发者可以轻松的实现自己的快捷访问。

更多关于如何**自定义快捷访问**的内容，请参考[扩展快速访问](./guides/extend-quick-access)来了解如何扩展快速访问面板。

## 原子组件（Components)

Molecule 提供了很多基本的 React UI [原子组件](./api/namespaces/molecule.component)，例如 [Menu][menu-url]、[TreeView][treeview-url][、ContextMenu][ctxmenu-url] 等等。而我们的 Workbench UI 就是在这些组件的基础上构建而来。通过这些内置的组件，我们可以在更大程度上，满足我们开发者在 UI 上的扩展诉求。另外，Molecule 支持引用例如 [antd](http://ant.design/) 这类第三方的 UI 组件库，来满足自己的自定义诉求。

目前我们使用了 Storybook 来开发维护这些组件，关于这些组件的使用，我们可以在源码仓库下的 [stories](https://github.com/DTStack/molecule/tree/main/stories) 中找到示例。

[menu-url]: ./api/namespaces/molecule.component#menu
[ctxmenu-url]: ./api/namespaces/molecule.component#usecontextmenu
[treeview-url]: ./api/namespaces/molecule.component#treeview
