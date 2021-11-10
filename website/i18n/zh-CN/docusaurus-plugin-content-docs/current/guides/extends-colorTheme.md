# 颜色主题扩展

本章内容包括如何扩展 VSCode 扩展市场中的相关颜色主题扩展包，以及如何自定义自己的颜色主题扩展包。

## 已存在的颜色主题扩展

Molecule 支持扩展部分 VSCode 扩展市场中的颜色主题扩展包，接下来就以[快速开始](../quickStart)中生成的项目为例子，阐述如何加载已存在的颜色主题包。

首先，你需要在 VSCode 市场中找到一款你喜欢的颜色主题，这里我们以 `One Dark Pro` 为例。在确认该主题之后，我们需要在 `github` 上找到该主题的项目地址以确保我们可以获取到颜色主题的代码。

然后，我们在 `src` 目录下新建 `extensions` 目录，用以存放该项目中所有的扩展，然后我们在终端中打开该 `extensions` 目录，在该目录下执行 `git clone https://github.com/Binaryify/OneDark-Pro.git` 命令下载 `One Dark Pro` 主题代码.

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

在这之后，我们的文件目录为

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

我们可以看到在 `OneDark-Pro/themes` 下有 3 个文件夹，这表示 `One Dark Pro` 主题中包含了 3 种颜色主题。然后由于一些特殊性，我们需要对 `One Dark Pro` 主题的代码做一些简单的修改。

### 改造主题包

首先，我们在 `OneDark-Pro` 目录下新建 `index.js` 文件，写入以下内容:

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

:::info
建议将 `OneDark-Pro` 目录下除了 `package.json`、`index.js`、`themes` 三个文件或文件夹保留以外，其余均可以删除

```shell
$ tree -L 3 ./src
./src
├── App.css
├── App.js
├── App.test.js
├── extensions
│   └── OneDark-Pro
│       ├── index.js
│       ├── package.json
│       └── themes
├── index.css
├── index.js
├── logo.svg
├── reportWebVitals.js
└── setupTests.js
```

:::

### 应用颜色主题

然后，我们在 `App.js` 中添加该扩展包

```js
// src/App.js

import { OneDarkPro } from './extensions/OneDark-Pro';

function App() {
    return (
        <MoleculeProvider extensions={[OneDarkPro]}>
            <Workbench />
        </MoleculeProvider>
    );
}
```

通过 `yarn start` 启动项目后，我们可以通过快捷键 `Command/Ctrl + K` 快速访问颜色主题面板。

![colorTheme](/img/guides/colorThemePalette.jpg)

除了内置的几个颜色主题外，我们已经可以在颜色主题面板中看到刚才我们新添加的颜色主题扩展中的三个颜色主题，分别是 `One Dark Pro`,`One Dark Pro Darker` 以及 `One Dark Pro Flat`.

## 自定义颜色主题扩展

### 创建自定义颜色主题扩展

如果当前 VSCode 扩展市场没有颜色主题能满足你，那么你可以选择自定义颜色主题扩展，相比使用已存在的颜色主题扩展，自定义颜色主题扩展会需要更多的时间。

首先，你需要为你的颜色主题考虑一个名字，这里我们以 `My Theme` 作为示例。我么你需要在 `extensions` 目录下创建一个文件夹，名字就叫 `MyTheme`

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

绝大多数 `package.json` 文件里的内容都是一个 `JavaScript` 程序员应该知道的，所以这里就不详细说明了。接下来我们在 `package.json` 中添加必要的属性，如下:

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

-   `label` 属性的意思是当该主题被 Molecule 加载后，在颜色主题面板中显示的名称。
-   `uiTheme` 属性的意思是该主题是暗黑主题还是亮色主题，抑或是高对比度主题.
-   `path` 属性的意思是该主题的详细主题配置所在的路径.

然后，我们需要创建 `themes/MyTheme.json` 文件，其中的内容如下：

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

这里我们可以看到，`My Theme` 主题修改了 `statusBar` 的背景颜色为红色，具体还有许多的颜色可以修改，具体参考 [VSCode Theme](https://code.visualstudio.com/api/references/theme-color)。

然后我们在 `MyTheme` 目录下创建 `index.js`，并写入以下内容,

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

### 应用颜色主题

这部分和 [应用颜色主题](/extends-colorTheme#应用颜色主题) 一致，同样也是在 `App.js` 中添加该扩展包并且启动项目

```js
// src/App.js

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

启动项目后，我们就可以在颜色主题快速访问面板中看到 `My Theme` 的主题，并且选择该主题后，底部状态栏的背景颜色变成了红色。

## 总结

本节内容介绍了如何在 Molecule 中加载社区颜色主题扩展和如何创建并加载自定义的颜色主题扩展。
