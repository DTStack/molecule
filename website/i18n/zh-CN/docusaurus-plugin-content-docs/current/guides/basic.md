---
title: 基础指南
sidebar_label: 基础指南
---

# 基础指南

在介绍 Molecule 的基础配置之前，在阅读以下内容之前请确保您会 JavaScript。

## 工作台

工作台是 Molecule 中最重要的界面。

### 概念

为了减少学习成本，我们把 Molecule 的工作台划分成了多个部分。

如你所见，下图就是 Molecule 的工作台布局。

![molecule](/img/guides/molecule.jpg)

> 如果无法看清，请右键选择在新标签页中打开图片。

首先，我们把工作台划分成两个部分，分别是 `statusBar` 和主要区域。

-   `statusBar` 位于整个页面的最底下。通常来说，我们可以放一些信息在这里，比如说当前标签页的语言，当前光标所在行和列等等信息。

主要区域又被划分成三个区域，分别为 `sideBar`, `editor` 和 `panel`。

-   `sideBar` 在整个页面的最左边。它只包含了页面上最左边的一列，所以它只控制最左边这一列渲染什么东西。如果你想要实现一个完整的功能，你应该和 `activityBar` 一起使用。
-   `editor` 是 Molecule 中最重要的部分。当没有打开编辑器标签页的时候，Molecule 会渲染一个入口页面在这块区域。当然，这个入口页面是支持自定义的。
-   `panel` 的位置是在 `editor` 的下面。通常来说，我们会把一些编辑器标签页相关的信息放在这些面板之中。例如：我们有内置的「问题」面板用来展示每个打开的标签页中的问题详情。
-   `activityBar` 在 `sidebar` 的边上。我们在解释 `sideBar` 的时候提到了 `activityBar`，所以 `activityBar` 可以理解为是 `sideBar` 的具体补充。例如：我们在 `sideBar` 和 `activityBar` 中都有内置的「浏览」模块，其中 `sideBar` 支持选中「浏览」模块， 而 `activityBar` 负责渲染「浏览」模块的面板。

![molecule](/img/guides/layout-marks.jpg)

> 如果无法看清，请右键选择在新标签页中打开图片。

除了这些我们提到的概念以外，还有其他的一些概念可以在使用的时候去了解和熟悉。

目前，我们了解了 `statusBar`, `sideBar`, `editor`, `panel`, 和 `activityBar` 的概念。去了解和熟悉这些概念很重要，因为只有了解了这些概念后，才能更好地使用 Molecule 的接口。

### 扩展插件

Molecule 支持通过扩展插件来丰富自身的功能。我们不仅可以在扩展插件中新增功能，还可以在扩展插件中禁用某些指定的内置模块从而实现自定义自己的 IDE。

总而言之，我们可以通过在扩展插件中使用这些概念来控制 Molecule 的行为。

## 颜色主题

当你打开设置菜单，你可以在菜单的最下面看到「颜色主题」。点击它将会在页面顶部打开一个快速访问面板。

在 Molecule 中我们有许多内置的主题，包括 `Dark`, `Light`, `Monakai`, `Github Plus`, `High Contrast` 等等。

你可以在这些内置的主题中任选一个，或者你也可以通过扩展插件自定义自己的主题。

如果你想要自定义自己的主题，那么你可以参考 [VSCode Theme](https://code.visualstudio.com/api/references/theme-color).

## 语言环境

在 Molecule 中有两种内置的语言环境，分别是中文和英文，你可以选择其中的一种进行切换。首先，你可以在设置菜单中打开「命令面板」，然后输入 `select display language` 并选择一种语言，然后确认选择。

然后在页面的右下角将会有一个提醒窗口，点击确认会重新加载当前页面，之后语言环境就会发生更改。

如果内置的语言环境无法满足你，那么你可以按照你的需求定义其他语言环境。

更多关于如果定义自己的语言环境的细节，请参考[扩展语言环境](extends-locales)。

## 设置

Molecule 支持通过在设置中修改部分配置项。例如：当你想要修改编辑器的字体大小时，只需要打开设置菜单中的「设置」选项，然后把 `editor.fontSize` 的值从 12 修改至 14 即可。在稍微等待几秒钟后，设置将会生效。

有时，你会想要去扩展设置项来修改其他的一些东西。你可以参考 [扩展设置](extends-settings) 来了解如何去扩展设置。

## 快捷键

除了一些特殊的快捷键以外，例如 `Command/Ctrl + W`, `Command/Ctrl + S`, Molecule 支持设置绝大多数的快捷键。

Molecule 中有许多内置的快捷键来处理快速访问，比如：

-   `Command/Ctrl + ,` 可以快速访问设置；
-   `Command/Ctrl + Shift + L` 可以快速切换语言环境；
-   `Command/Ctrl + Shift + P` 可以快速访问命令中心；
-   等等；

有时，你想要注册新的快捷键，你可以参考[扩展快捷键](extends-keybindings)了解如何注册新的快捷键。

## 快速访问

快速访问面板提供了一种方便的方式去快速访问命令或方法。你可以在 Molecule 中通过快捷键 `Command/Ctrl + Shift + P` 快速访问它。

![QuickAccess](/img/guides/quick-access.jpg)

> 如果无法看清，请右键选择在新标签页中打开图片。

有时，你想要把你自己的命令或方法注册到快速访问面板上，你可以参考[扩展快速访问](extends-quickAccess)来了解如何扩展快速访问面板。

## 内置

如上所示，在 Molecule 中有需要内置的命令和方法。但是如果用户不想要某个功能，那么他/她应该如何去禁用这个功能呢？

答案是通过 `builtin` 服务。Molecule 将所有的内置命令和方法都搜集入 `builtin` 服务，然后将其分发到其他的服务中去注册。

所以，如果你想要禁用某一个内置的命令或功能，只需要使用 `builtin` 服务。更多关于如何使用 `builtin` 服务的信息，请参考[扩展内置](extends-builtin)。
