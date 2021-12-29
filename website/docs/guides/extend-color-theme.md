---
title: Color Theme
sidebar_label: Color Theme
---

[ColorTheme](../api/interfaces/molecule.IColorThemeService) is a very important function of Molecule. We have achieved **basic compatibility** with the [color theme](https://vscodethemes.com/) of the VSCode community. This article mainly introduces how to extend the relevant color theme extension packages in the **VSCode extension market**, and how to implement **custom** color themes.

## Use the theme of the VSCode community

:::tip
All the codes in this article are based on the [molecule-demo](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo) project in [Quick Start](../quick-start).
:::

First, we can open the [VSCode Theme market](https://vscodethemes.com/) and try to find a color theme you like.

Here we take the [One Dark Pro](https://github.com/Binaryify/OneDark-Pro.git) theme as an example. We need to find the theme on **GitHub** and make sure that we can get the code for the color theme. After finding the theme code, we switch to the `src/extensions` directory in the terminal and execute the `git clone https://github.com/Binaryify/OneDark-Pro.git` command to download the `One Dark Pro` theme code, as follows:

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

After the download is complete, we can see:

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

We can see that there are 3 folders under `OneDark-Pro/themes`, which means that the `One Dark Pro` theme contains 3 color themes.

:::tip
Due to technical reasons, Molecule does not seamlessly connect to the VSCode Color Theme extension. We need to make some simple **modifications** to the code of the `One Dark Pro` theme.
:::

### Transformation theme pack

First, we create a new `index.ts` file in the `OneDark-Pro` directory, the specific content is as follows:

```js
// Get the content in package.json
const OneDarkPro = require('./package.json');

// Get the detailed theme color content
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

// Declare the unique id of the current theme
OneDarkPro.id = 'OneDarkPro';

// Export the contents of package.json for use by Molecule
export { OneDarkPro };
```

:::tip
Except for `package.json`, `index.js`, and `themes` files in the `OneDark-Pro` directory, which are necessary, the rest of the files can be deleted.
:::

### Apply color theme

Finally, we add the extension package in `App.js`

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

We can use the shortcut key `Command/Ctrl + K` to quickly access the **Color Theme Panel**.

![colorTheme](/img/guides/colorThemePalette.jpg)

:::info
In addition to the several built-in color themes, we can already see the three color themes in the newly added color theme extension in the color theme panel, namely `One Dark Pro`, `One Dark Pro Darker` and `One Dark Pro Flat`.
:::

## Custom color theme

If the current VSCode extension market does not have a color theme that can satisfy you, then you can choose a **custom color theme** extension, which will take more time than using an existing color theme extension.

### Create a color theme extension

First, we create a folder named `MyTheme` under the `extensions` directory:

```shell
$ mkdir MyTheme
$ cd MyTheme
```

Then use the `npm init -y` command to create a new package.json file in the `MyTheme` folder.

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

Next we add the **necessary attributes** in `package.json` as follows:

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

-   The `label` attribute means the name `My Theme` displayed in the color theme panel after the theme is loaded by Molecule.
-   The `uiTheme` attribute means whether the theme is a dark theme, a light theme, or a high-contrast theme.
-   The `path` attribute means the path where the detailed theme configuration of the theme is located.

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
