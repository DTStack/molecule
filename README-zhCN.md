<div align="center">

 <img src="./website/static/img/logo@1x.png" width="20%" height="20%" alt="watchman-logo">
 <h1>Molecule</h1>
 <h3>一个轻量的 Web IDE UI 框架</h3>

[![CI][ci-image]][ci-url] [![Codecov][codecov-image]][codecov-url] [![NPM downloads][download-img]][download-url] [![NPM version][npm-version]][npm-version-url]

</div>

[ci-image]: https://github.com/DTStack/molecule/actions/workflows/main.yml/badge.svg
[ci-url]: https://github.com/DTStack/molecule/actions/workflows/main.yml
[codecov-image]: https://codecov.io/gh/DTStack/molecule/branch/main/graph/badge.svg?token=PDjbCBo6qz
[codecov-url]: https://codecov.io/gh/DTStack/molecule
[download-img]: https://img.shields.io/npm/dm/@dtinsight/molecule.svg?style=flat
[download-url]: https://www.npmjs.com/package/@dtinsight/molecule
[npm-version]: https://img.shields.io/npm/v/@dtinsight/molecule.svg?style=flat-square
[npm-version-url]: https://www.npmjs.com/package/@dtinsight/molecule

Molecule 是一款基于 React.js, 可以帮助我们快速搭建 Web IDE UI 的框架。受 Visual Studio Code 启发，我们设计了简单的扩展（Extension)机制，使其拥有了一种简单的 Workbench 扩展能力。通过 Molecule 提供的 API 和扩展机制，我们可以轻松的在 React 项目中集成，使用自定义的 React 组件，快速实现产品所需要的基本功能。[在线预览](https://github.com/DTStack/molecule-examples)

## 核心功能

-   内置 **Visual Studio Code** Workbench UI 的 React **克隆**版本，并支持扩展
-   支持以扩展的方式，兼容基本的 Visual Studio Code 的 **ColorTheme**
-   支持使用 React 组件**自定义 Workbench** UI 样式
-   内置 Monaco Editor **Command Palette**、**Keybinding**等模块，并支持扩展
-   支持 **i18n**，默认内置简体中文、English 2 种语言, 支持以扩展的方式增加新的语言
-   内置一个简单的 **Settings** 模块，支持在线编辑修改，支持扩展机制
-   内置默认的 **Explorer**, **Search** 等模块，并支持自定义

## 安装

```bash
npm install @dtinsight/molecule
# Or
yarn add @dtinsight/molecule
```

## 基本使用

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { MoleculeProvider, Workbench } from '@dtinsight/molecule';
import '@dtinsight/molecule/esm/style/mo.css';

const App = () => (
    <MoleculeProvider extension={[]}>
        <Workbench />
    </MoleculeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

`extension` 为 Workbench 应用的扩展入口，具体应用扩展，请参考[快速开始](./website/docs/guides/the-first-extension.md)。

更多使用 [Examples](https://github.com/DTStack/molecule-examples)

## 文档

-   [简介](./website/docs/introduction.md)
-   [快速开始](./website/docs/introduction.md)
-   [API 文档](./website/docs/api/index.md)
-   [扩展 Workbench](./website/docs/guides/extends-workbench.md)

更多请参考 [Docs](./website/docs).

## 开发

首先 Clone 源码到本地

```bash
git clone git@github.com:DTStack/molecule.git
```

**开发模式**

```bash
yarn # install dependencies

yarn dev # 启动开发模式
```

Molecule 中的组件是基于 Storybook 开发并管理的，启动成功后
在浏览器通过`http://localhost:6006/`默认地址浏览。

**构建 & 预览**

这里除了 Storybook 提供的内置组件预览意外，我们提供了一个内置 Web 版本 的预览。

```bash
yarn build
yarn web # 预览打包后的 Web 版本
```

## 贡献

更多请参考 [CONTRIBUTING](./CONTRIBUTING.md).

## License

Copyright © DTStack. All rights reserved.

Licensed under the MIT license.
