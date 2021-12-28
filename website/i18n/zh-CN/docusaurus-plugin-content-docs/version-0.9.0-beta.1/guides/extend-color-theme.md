---
title: 颜色主题（ColorTheme）
sidebar_label: 颜色主题
---

[颜色主题（ColorTheme）](../api/interfaces/molecule.IColorThemeService)是 Molecule 非常重要的功能，我们做到了**基本兼容** VSCode 的社区的[颜色主题](https://vscodethemes.com/)。本文主要是介绍如何扩展 **VSCode 扩展市场中**的相关颜色主题扩展包，以及如何实现**自定义**颜色主题。

## 使用 VSCode 社区的主题

:::tip
本文内容中的所有代码，都以 [Quick Start](../quick-start) 中的 [molecule-demo](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo) 项目为基础演示。
:::

首先，我们可以打开这个 [VSCode Theme 市场](https://vscodethemes.com/), 尝试找到一款你喜欢的颜色主题。

这里我们以 [One Dark Pro](https://github.com/Binaryify/OneDark-Pro.git) 主题为例，我们需要在 **GitHub** 上找到该主题, 并确保我们可以获得该颜色主题的代码。找到主题代码后，我们在终端切换到 `src/extensions` 目录下，执行 `git clone https://github.com/Binaryify/OneDark-Pro.git` 命令，下载 `One Dark Pro` 主题代码， 如下：

```shell
$ pwd
~/molecule-demo/src/extensions

$ git clone https://github.com/Binaryify/OneDark-Pro.git
Cloning into 'OneDark-Pro'...
remote: Enumerating objects: 4493, done.
remote: Counting objects: 100% (800/800), done.
remote: Compressing objects: 100% (421/421), done.
remote: Total 4493 (delta 532), reused 577 (delta 364), pack-reused 3693
Receiving objects: 100% (4493/4493), 19.68 MiB | 358.00 KiB/s, done.
Resolving deltas: 100% (2830/2830), done.
```

下载完成后，我们可以看到：

```shell
$ tree -L 2  ./src
./src
├── App.css
├── App.js
├── App.test.js
├── extensions
│   └── OneDark-Pro
├── index.css
├── index.js
├── logo.svg
├── reportWebVitals.js
└── setupTests.js
```

我们可以看到在 `OneDark-Pro/themes` 下有 3 个文件夹，这表示 `One Dark Pro` 主题中包含了 3 种颜色主题。

:::tip
由于实现技术的原因，Molecule 并不是无缝衔接 VSCode Color Theme 扩展的, 我们需要对 `One Dark Pro` 主题的代码做一些简单**改造**。
:::

### 改造主题包

首先，我们在 `OneDark-Pro` 目录下新建 `index.ts` 文件，具体内容如下:

```js
// 读取 package.json 中的内容
const OneDarkPro = require('./package.json');

// 读取详细的主题颜色内容
const themes = [
    require('./themes/OneDark-Pro.json'),
    require('./themes/OneDark-Pro-flat.json'),
    require('./themes/OneDark-Pro-darker.json'),
];

const packageThemes = OneDarkPro.contributes?.themes || [];

OneDarkPro.contributes.themes = packageThemes.map((theme, index) => {
    theme.id = theme.label;
    theme = Object.assign({}, theme, themes[index]);
    return theme;
});

// 声明当前主题的唯一 id
OneDarkPro.id = 'OneDarkPro';

// 导出 package.json 的内容供 Molecule 使用
export { OneDarkPro };
```

:::tip
`OneDark-Pro` 目录下除了 `package.json`、`index.js`、`themes` 3 个文件为必要以外，其余文件均可以删除。
:::

### 应用颜色主题

最后，我们在 `App.js` 中添加该扩展包

```js title="src/App.js"
import { OneDarkPro } from './extensions/OneDark-Pro';

function App() {
    return (
        <MoleculeProvider extensions={[OneDarkPro]}>
            <Workbench />
        </MoleculeProvider>
    );
}
```

我们可以通过快捷键 `Command/Ctrl + K` 快速访问**「颜色主题面板」**。

![colorTheme](/img/guides/colorThemePalette.jpg)

:::info
除了内置的几个颜色主题外，我们已经可以在颜色主题面板中看到刚才我们新添加的颜色主题扩展中的三个颜色主题，分别是 `One Dark Pro`，`One Dark Pro Darker` 以及 `One Dark Pro Flat`。
:::

## 自定义颜色主题

如果当前 VSCode 扩展市场没有颜色主题能满足你，那么你可以选择**自定义颜色主题**扩展，相比使用已存在的颜色主题扩展，自定义颜色主题扩展会需要更多的时间。

### 创建颜色主题扩展

首先，我们在 `extensions` 目录下创建一个文件夹 `MyTheme` 的文件夹：

```shell
$ mkdir MyTheme
$ cd MyTheme
```

然后在 `MyTheme` 文件夹下通过 `npm init -y` 命令新建一个 `package.json` 文件.

```shell
$ tree -L 2
.
├── MyTheme
│   └── package.json
└── OneDark-Pro
    ├── index.js
    ├── package.json
    └── themes
```

接下来我们在 `package.json` 中添加**必要的属性**，如下:

```diff
{
    "name": "my-theme",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
+   "contributes": {
+     "themes": [
+       {
+         "label": "My Theme",
+         "uiTheme": "vs-dark",
+         "path": "./themes/MyTheme.json"
+       }
+     ]
+   }
}
```

-   `label` 属性的意思是当该主题被 Molecule 加载后，在颜色主题面板中显示的名称 `My Theme`。
-   `uiTheme` 属性的意思是该主题是暗黑主题还是亮色主题，抑或是高对比度主题.
-   `path` 属性的意思是该主题的详细主题配置所在的路径.

然后，我们再创建一个 `themes/MyTheme.json` 文件，具体内容如下：

```json
{
    "name": "My Theme",
    "type": "dark",
    "colors": {
        "statusBar.background": "#ff0000"
    }
}
```

-   `name` 表示当前颜色主题，建议与上面的 `label` 属性保持一致
-   `type` 表示当前颜色主题的类型
-   `colors` 表示当前颜色主题的具体颜色

这里我们可以看到，`My Theme` 主题修改了 [StatusBar](extend-workbench#状态栏statusbar) 的背景颜色为红色。

:::info
Molecule 的 ColorTheme **兼容** [VSCode ColorTheme](https://code.visualstudio.com/api/references/theme-color)，
更多的**颜色修改项**，请查阅 [VSCode ColorTheme](https://code.visualstudio.com/api/references/theme-color)。
:::

然后我们在 `MyTheme` 目录下创建 `index.ts`，具体内容如下：

```js
// 读取 package.json 中的内容
const MyTheme = require('./package.json');

// 读取详细的主题颜色内容
const themes = [require('./themes/MyTheme.json')];

const packageThemes = MyTheme.contributes?.themes || [];

MyTheme.contributes.themes = packageThemes.map((theme, index) => {
    // 为每个 theme 添加 id
    theme.id = theme.label;
    theme = Object.assign({}, theme, themes[index]);
    return theme;
});

// 声明当前主题的唯一 id
MyTheme.id = 'MyTheme';

// 导出 package.json 的内容供 Molecule 使用
export { MyTheme };
```

### 应用颜色主题扩展

同样, 自定义的主题扩展程序也是在 `App.js` 中的 [MoleculeProvider](../api/classes/MoleculeProvider) 组件中引入：

```js title="src/App.js"
import { OneDarkPro } from './extensions/OneDark-Pro';
import { MyTheme } from './extensions/MyTheme';

function App() {
    return (
        <MoleculeProvider extensions={[OneDarkPro, MyTheme]}>
            <Workbench />
        </MoleculeProvider>
    );
}
```

打开在**颜色主题快速访问面板**，我们应该就能看到 `My Theme` 的主题了。选择该主题后，底部 [StatusBar](extend-workbench#状态栏statusbar) 的**背景颜色**即变成了红色。

## 颜色主题（ColorTheme） 服务对象

Molecule 提供了 [ColorTheme](../api/classes/molecule.ColorThemeService) 服务对象，支持开发者在必要的情况下主动做一些主动操作，例如[设置主题](../api/classes/molecule.ColorThemeService#settheme)、[获取主题](../api/classes/molecule.ColorThemeService#getthemebyid) 等等。

```ts
// Set the current Color Theme
molecule.colorTheme.setTheme(themeId);
// Get Themes
molecule.colorTheme.getThemes();
```

更多有关 [ColorTheme](../api/classes/molecule.ColorThemeService) 的操作，请参考[API](../api/classes/molecule.ColorThemeService)。
