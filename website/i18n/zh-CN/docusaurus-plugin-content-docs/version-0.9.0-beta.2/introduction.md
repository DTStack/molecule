---
title: ''
sidebar_label: 简介
sidebar_position: 1
---

<div align="center">
 <img src="/molecule/img/logo@3x.png" width="20%" height="20%" alt="watchman-logo" />
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

## 简介

Molecule 是一款受 **VSCode** 启发，使用 **React.js** 构建的 **Web IDE UI** 框架。我们设计了类似 VSCode 的**扩展**（Extension)机制，可以帮助我们使用 React 组件快速完成对 Workbench 的自定义。Molecule 与 **React** 项目集成非常方便，我们已经在 [DTStack](https://www.dtstack.com/) 多个产品、项目中使用。

## 核心功能

-   内置 React 版本的 Visual Studio Code **Workbench** UI
-   基本兼容 Visual Studio Code 的 **ColorTheme**
-   支持使用 React 组件自定义 **Workbench** UI 样式
-   内置 Monaco Editor **Command Palette**、**Keybinding**等模块，并支持扩展
-   支持 **i18n**，内置简体中文、English 2 种语言
-   内置一个简单的 **Settings** 模块，支持在线编辑修改以及扩展
-   内置默认的 **Explorer**, **Search** 等组件，并支持扩展
-   Typescript 支持

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
    <MoleculeProvider extensions={[]}>
        <Workbench />
    </MoleculeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

`extension` 为 Workbench 应用的扩展入口，如何编写扩展，请参考[快速开始](./quick-start.md)。

## 贡献

更多请参考 [CONTRIBUTING](./contributing.md).

## License

Copyright © DTStack. All rights reserved.

Licensed under the MIT license.
