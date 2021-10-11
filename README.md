# Molecule

[![CI][ci-image]][ci-url] [![Codecov][codecov-image]][codecov-url] [![NPM downloads][download-img]][download-url]

[ci-image]: https://github.com/DTStack/molecule/actions/workflows/main.yml/badge.svg
[ci-url]: https://github.com/DTStack/molecule/actions/workflows/main.yml
[codecov-image]: https://codecov.io/gh/DTStack/molecule/branch/main/graph/badge.svg?token=PDjbCBo6qz
[codecov-url]: https://codecov.io/gh/DTStack/molecule
[download-img]: https://img.shields.io/npm/dm/@dtinsight/molecule.svg?style=flat
[download-url]: https://www.npmjs.com/package/@dtinsight/molecule

A lightweight Web IDE UI Framework, built with React.js, and inspired by the Visual Studio Code.

## Features

-   Provides the default IDE Workbench same as the Visual Studio Code
-   Easy to extends the default IDE Workbench via the Extension
-   Atomic React Components, Easy to customize the IDE UI

---

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
import { MoleculeProvider, Workbench } from 'molecule';
import 'molecule/esm/style/mo.css';

const App = () => (
    <MoleculeProvider extension={[]}>
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
