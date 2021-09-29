---
id: 'index'
title: 'molecule'
slug: '/api/'
sidebar_label: 'Readme'
sidebar_position: 0
custom_edit_url: null
---

# Molecule

[![codecov](https://codecov.io/gh/DTStack/molecule/branch/main/graph/badge.svg?token=PDjbCBo6qz)](https://codecov.io/gh/DTStack/molecule)

A Web IDE UI library built by React.js, inspired by the Visual Studio Code.

## Features

-   Provides the default IDE Workbench same as the Visual Studio Code
-   Allow to extends the default IDE Workbench
-   Supports customize the IDE Workbench by React Component easily

## Installation

```bash
npm install molecule
# Or
yarn add molecule
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

For more complex examples please read the below document.

## Document

-   Basic React UI Components
-   Workbench Parts
-   Extension Services
-   Advanced Usage

## TODO

-   Allow Users to customize settings
-   Support internationalization, default includes zhCN, English
-   Support alter keybinding

## Contributing

Refer to the [CONTRIBUTING](./CONTRIBUTING.md).

## Licence

MIT
