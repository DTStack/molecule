---
title: Color Theme
sidebar_label: Color Theme
---

[ColorTheme](../api/interfaces/molecule.IColorThemeService) is a very important function of Molecule. We have achieved **basic compatibility** with the [color theme](https://vscodethemes.com/) of the VSCode community. This part mainly introduces how to extend the relevant color theme extension packages in the **VSCode extension market**, and how to implement **custom** color themes.

## Use the theme of the VSCode community

:::tip
All code demos in this part are based on the [molecule-demo](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo) project in [Quick Start](../quick-start).
:::

First, we can open the [VSCode Theme market](https://vscodethemes.com/) and try to find a color theme you like.

Take the [One Dark Pro](https://github.com/Binaryify/OneDark-Pro.git) theme as an example. We need to find the theme on **GitHub** and make sure that we can get the code for the color theme. After finding the theme code, switch to the `src/extensions` directory in the terminal and execute the `git clone https://github.com/Binaryify/OneDark-Pro.git` command to download the `One Dark Pro` theme code, as follows:

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

After the download is completed, we can see:

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

const moInstance = create({
    extensions: [OneDarkPro],
});
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

Then, we create a file with the path of `themes/MyTheme.json`, the specific content is as follows:

```json
{
    "name": "My Theme",
    "type": "dark",
    "colors": {
        "statusBar.background": "#ff0000"
    }
}
```

-   `name` represents the current color theme, it is recommended to be consistent with the above `label` attribute
-   `type` represents the type of the current color theme
-   `colors` represents the specific colors of the current color theme

Here we can see that `My Theme` changed the background color of [StatusBar](extend-workbench#statusbar) to red.

:::info
Molecule's ColorTheme is **compatible** with [VSCode ColorTheme](https://code.visualstudio.com/api/references/theme-color). For more **color modification items**, please refer to [VSCode ColorTheme](https://code.visualstudio.com/api/references/theme-color).
:::

Then we create the `index.ts` file under the `MyTheme` directory, the specific content of the file is as follows:

```js
// Get the content in package.json
const MyTheme = require('./package.json');

// Get detailed theme color content
const themes = [require('./themes/MyTheme.json')];

const packageThemes = MyTheme.contributes?.themes || [];

MyTheme.contributes.themes = packageThemes.map((theme, index) => {
    // Add id to each theme
    theme.id = theme.label;
    theme = Object.assign({}, theme, themes[index]);
    return theme;
});

// Declare the unique id of the current theme
MyTheme.id = 'MyTheme';

// Export the contents of package.json for use by Molecule
export { MyTheme };
```

### Apply color theme extension

Similarly, custom theme extensions are also need to be introduced in the params of [create](../api#create) component in `App.js`:

```js title="src/App.js"
import { OneDarkPro } from './extensions/OneDark-Pro';
import { MyTheme } from './extensions/MyTheme';

const moInstance = create({
    extensions: [OneDarkPro, MyTheme],
});
```

Open **the color theme quick access panel**, we should be able to see the theme of `My Theme`. After selecting this theme, the **background color** of the [StatusBar](extend-workbench#statusbar) at the bottom changes to red.

## ColorTheme service object

Molecule provides the [ColorTheme](../api/classes/molecule.ColorThemeService) service object, which supports developers to do some active operations when necessary, such as [setting theme](../api/classes/molecule.ColorThemeService#settheme), [getting theme](../api/classes/molecule.ColorThemeService#getthemebyid), and so on.

```ts
// Set the current Color Theme
molecule.colorTheme.setTheme(themeId);
// Get Themes
molecule.colorTheme.getThemes();
```

For more information about [ColorTheme](../api/classes/molecule.ColorThemeService) operations, please refer to [API](../api/classes/molecule.ColorThemeService).
