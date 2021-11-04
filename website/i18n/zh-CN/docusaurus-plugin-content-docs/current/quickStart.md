---
title: 快速开始
sidebar_label: 快速开始
sidebar_position: 2
---

# 快速开始

## 前置需求

-   [Node.js](https://nodejs.org/en/) - 在所有准备以前，你需要先安装 Node.js, 并且确保 Node 的版本大于或等于 12.13.0 (可以通过 `node -v` 命令查看当前 Node 版本). 推荐在 Mac 系统中使用 [nvm](https://github.com/nvm-sh/nvm) 来管理 Node.js 多版本。

```bash
$ node -v
v12.13.0
```

-   [Yarn](https://yarnpkg.com/en/) - 强烈推荐用 Yarn 作为包管理工具替代 npm。

## 安装依赖

我们以 [creat-creat-app](https://github.com/facebook/create-react-app) 作为开始

首先，我们通过 `creat-creat-app` 创建一个新的项目，

```bash
npx create-react-app molecule-demo
```

这个命令会在当前目录下创建一个叫 `molecule-demo` 的目录。

一旦依赖都安装完成，你可以在终端中切换到你的项目文件夹：

```bash
cd molecule-demo
```

然后，你需要安装 molecule 的依赖：

```bash
npm install @dtinsight/molecule
# 或者
yarn add @dtinsight/molecule
```

这个命令将会在 `molecule-demo` 项目中安装 molecule 的依赖。

然后，打开 `src/App.js` 文件，将该文件的内容替换成如下：

```js
// src/App.js
import React from 'react';
import { MoleculeProvider, Workbench } from '@dtinsight/molecule';
import '@dtinsight/molecule/esm/style/mo.css';

function App() {
    return (
        <MoleculeProvider extensions={[]}>
            <Workbench />
        </MoleculeProvider>
    );
}

export default App;
```

## 启动项目

然后在终端中运行 `start` 命令：

```bash
yarn start
# 或者 npm
npm run start
```

这个命令会自动打开 [http://localhost:3000](http://localhost:3000) 页面或者你可以手动打开这个页面，打开后你会看到一个简单的 IDE 界面。
