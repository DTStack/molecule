---
title: 快速开始
sidebar_label: 快速开始
sidebar_position: 2
---

## 前置要求

> -   **Node.js 12.13.0 +** 版本
> -   **React.js 16.14.0 +** 版本
> -   [Yarn](https://yarnpkg.com/en/) - 推荐使用 **Yarn** 作为包管理

:::info
可以通过 `node -v` 命令查看当前 Node 版本。 推荐在 Mac 系统中使用 [nvm](https://github.com/nvm-sh/nvm) 来管理 Node.js 多版本
:::

## 命令行创建项目

我们提供了命令行工具快速创建 Molecule 项目。该工具是基于 [create-react-app](https://github.com/facebook/create-react-app) 创建项目的

### npx

```bash
npx @dtinsight/create molecule-demo
```

或者你需要创建一个基于 **TypeScript** 的项目

```bash
npx @dtinsight/create molecule-demo -t
```

_[npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) 要求 npm 的版本是 5.2+ 或更高, [低版本的 npm 使用方式参考](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f)_

### Yarn

```bash
yarn create @dtinsight/ molecule-demo
```

或者你需要创建一个基于 **TypeScript** 的项目

```bash
yarn create @dtinsight/ molecule-demo -t
```

_`yarn create` 要求 Yarn 的版本在 0.25+_

### 启动项目

在等待安装依赖一会儿后，终端显示 `Happy coding!😊` 则表示安装成功。接下来只需要按照终端上的向导启动项目即可。

## 手动创建项目

我们使用 React 官方推荐的 [create-react-app](https://github.com/facebook/create-react-app) 脚手架工具作为示例，
这里我们**强烈推荐**使用 **Typescript** 模板：

```bash
npx create-react-app molecule-demo --template typescript
```

这个命令会在当前目录下，创建一个叫 `molecule-demo` 的目录，切换到项目文件夹：

```bash
cd molecule-demo
```

### 安装 Molecule

然后，你需要安装 molecule 的依赖：

```bash
yarn add @dtinsight/molecule
# 或者
npm install @dtinsight/molecule
```

这个命令会在 `molecule-demo` 项目中自动安装 Molecule 的依赖。

### 基本使用

打开 `src/App.js` 文件，将该文件的内容替换成如下：

```js title="src/App.js"
import React from 'react';
import { create, Workbench } from '@dtinsight/molecule';
import '@dtinsight/molecule/esm/style/mo.css';

const moInstance = create({
    extensions: [],
});

const App = () => moInstance.render(<Workbench />);

export default App;
```

`extensions` 是需要自定义的扩展程序。

然后，打开 `src/index.js` 文件，并修改如下的部分:

```diff title="src/index.js"
root.render(
-  <React.StrictMode>
    <App />
-  </React.StrictMode>
);
```

:::caution
需要注意的是目前 Molecule 还无法与 `React.StrictMode` 兼容，所以我们需要在 `src/index.js` 中移除 `React.StrictMode`。
:::

### 启动项目

最后，在终端中运行`start` 命令：

```bash
yarn start
# 或者 npm
npm run start
```

这个命令会自动在默认浏览器中打开 [http://localhost:3000](http://localhost:3000) 这个地址，即可看到 Molecule 默认的 IDE 界面。

![Quick Start](/img/molecule.png)

## 使用 Monaco Editor 语言包

现在，你可以在浏览器中打开并看到 Molecule 的页面了，但是这仍然是远远不够的。如果你想要开发一个特定语法的 Web IDE 应用，你需要借助 Monaco Editor 的语言包来使得你的语法能够在 Web IDE 中高亮。

使用 Monaco Editor 的语言包，需要使用插件 [`monaco-editor-webpack-plugin`](https://www.npmjs.com/package/monaco-editor-webpack-plugin)，所以这里我们得扩展下 **Webpack** 的默认配置。
首先我们先安装 [react-app-rewired](https://github.com/timarney/react-app-rewired) 工具，然后在项目根目录创建一个`config-overrides.js` 文件，用来覆盖默认 Webpack 配置。 `monaco-editor-webpack-plugin` 插件具体使用如下：

```js title="config-overrides.js"
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

/* config-overrides.js */
module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config.plugins = [
        ...config.plugins,
        new MonacoWebpackPlugin([
            'javascript',
            'typescript',
            'css',
            'html',
            'json',
        ]),
    ];

    return config;
};
```

完整的代码示例，请查看 [molecule-demo](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo) 项目。
