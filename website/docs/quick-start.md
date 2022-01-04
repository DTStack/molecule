---
title: Quick Start
sidebar_label: Quick Start
sidebar_position: 2
---

## Prerequisites

> -   Node.js version: **Node.js 12.13.0 +**
> -   React.js version: **React.js 16.14.0 +**
> -   [Yarn](https://yarnpkg.com/en/) - Recommend to use **Yarn** as package management

:::info
use the `node -v` command to view the current Node version. It is recommended to use [nvm](https://github.com/nvm-sh/nvm) on Mac systems to manage multiple versions of Node.js.
:::

## Create a Project

We use the [create-react-app](https://github.com/facebook/create-react-app) scaffolding tool officially recommended by React as an example,
Here we **strongly recommend** the use of the **Typescript** template:

```bash
npx create-react-app molecule-demo --template typescript
```

This command will create a directory called `molecule-demo` in the current directory and switch to the project folder:

```bash
cd molecule-demo
```

## Install Molecule

Then, you need to install the dependency of molecule:

```bash
yarn add @dtinsight/molecule
# or
npm install @dtinsight/molecule
```

This command will automatically install Molecule's dependencies in the `molecule-demo` project.

## Basic Use

Open the `src/App.js` file and replace the contents of the file with the following:

```js title="src/App.js"
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

`extensions` are extensions that need to be customized.

## Startup Project

Finally, run the `start` command in the terminal:

```bash
yarn start
# or npm
npm run start
```

This command will automatically open the address [http://localhost:3000](http://localhost:3000) in the default browser, and you can see the default IDE interface of Molecule.

![molecule](/img/molecule.png)

## Use Monaco Editor language pack

To use the language pack of Monaco Editor, you need to use the plug-in `monaco-editor-webpack-plugin`, so here we have to extend the default configuration of **Webpack**.
First, we first install the [react-app-rewired](https://github.com/timarney/react-app-rewired) tool, and then create a `config-overrides.js` file in the project root directory to override the default Webpack configuration. The specific usage of the `monaco-editor-webpack-plugin` plugin is as follows:

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

For the complete code example, please check the [molecule-demo](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo) project.
