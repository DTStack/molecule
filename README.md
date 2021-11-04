# Molecule

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

The **Molecule** is a lightweight **Web IDE UI** Framework built with React.js，and inspired by the VSCode. We also provide the Extension APIs the seem like VSCode, to help developers extend the Workbench easily. The Molecule integrates with React.js applications is simple. It has applied to many [DTStack](https://www.dtstack.com/) inner projects.

[Online Preview]((https://github.com/DTStack/molecule-examples)

## Features

-   Provides the default IDE Workbench same as the Visual Studio Code
-   Easy to extend the default IDE Workbench via the Extension
-   Atomic React Components, Easy to customize the IDE UI

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

## Document

Refer to the [Docs](./docs).

## Contributing

Refer to the [CONTRIBUTING](./CONTRIBUTING.md).

## Licence

MIT
