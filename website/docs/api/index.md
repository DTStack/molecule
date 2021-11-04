---
id: 'index'
title: 'Molecule'
slug: '/api/'
sidebar_label: 'Readme'
sidebar_position: 0
custom_edit_url: null
---

<div align="center">

 <img src="./website/static/img/logo@1x.png" width="20%" height="20%" alt="watchman-logo" />
 <h1>Molecule</h1>
 <h3>A lightweight Web IDE UI Framework</h3>

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

[中文](./README-zhCN.md) | [English](./README.md)

The **Molecule** is a lightweight **Web IDE UI** Framework built with React.js，and inspired by the VSCode. We also provide the Extension APIs the seem like VSCode, to help developers extend the Workbench easily. The Molecule integrates with React.js applications is simple. It has applied to many [DTStack](https://www.dtstack.com/) inner projects.

[Online Preview]((https://github.com/DTStack/molecule-examples)

## Features

-   Builtin the VSCode **Workbench** UI
-   Compatible with the VSCode **ColorTheme**
-   Customize the Workbench via **React Component** easily
-   Builtin Monaco-Editor **Command Palette, Keybinding** features
-   Support the **i18n**, builtin zhCN, and English
-   Builtin **Settings**, support to edit and extend via the Extension
-   Builtin basic **Explorer, Search** components, and support extending via the Extension
-   **Typescript** Ready

## Installation

```bash
npm install @dtinsight/molecule
# Or
yarn add @dtinsight/molecule
```

## Basic Usage

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

The `extension` is the Extension applications entry, more details about Extension, please read the [Quick Start](./website/docs/guides/the-first-extension.md).

## Document

-   [Introduction](./website/docs/introduction.md)
-   [Quick Start](./website/docs/.md)
-   [API](./website/docs/api/index.md)
-   [Extend Workbench](./website/docs/guides/extends-workbench.md)
-   [More Docs](./website/docs).
-   [Examples](https://github.com/DTStack/molecule-examples)

## Development

```bash
git clone git@github.com:DTStack/molecule.git
```

Clone the source code into your local

**Development Mode**

```bash
yarn # Install dependencies

yarn dev # Start dev mode
```

The Molecule using the **Storybook** to manage and develop the React components, the default visiting address is `http://localhost:6006/`.

**Build & Preview**

```bash
yarn build # Compile to ESM
yarn web # Web Preview Mode
```

We compile the source code into the ES6 modules and output to the **`esm`** folder. Besides the Storybook development mode, there also builtin a **Web Preview** mode using the ESM modules.

## Contributing

Refer to the [CONTRIBUTING](./CONTRIBUTING.md).

## License

Copyright © DTStack. All rights reserved.

Licensed under the MIT license.
