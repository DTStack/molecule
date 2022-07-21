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

## Create a Project in One Line

We provide a command line tool to create a project quickly. It uses [create-react-app](https://github.com/facebook/create-react-app) to create this project.

### npx

```bash
npx @dtinsight/create molecule-demo
```

Or create the project based on the **TypeScript** template

```bash
npx @dtinsight/create molecule-demo -t
```

_[npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f)_

### Yarn

```bash
yarn create @dtinsight/ molecule-demo
```

Or create the project based on the **TypeScript** template

```bash
yarn create @dtinsight/ molecule-demo -t
```

_`yarn create` is available in Yarn 0.25+_

### Startup Project

After waiting a second, you could see `Happy coding!😊` in terminal. And then just following the guide to start up your project.

## Create a Project Manually

We use the [create-react-app](https://github.com/facebook/create-react-app) scaffolding tool officially recommended by React as an example,
Here we **strongly recommend** the use of the **Typescript** template:

```bash
npx create-react-app molecule-demo --template typescript
```

This command will create a directory called `molecule-demo` in the current directory and switch to the project folder:

```bash
cd molecule-demo
```

### Install Molecule

Then, you need to install the dependency of molecule:

```bash
yarn add @dtinsight/molecule
# or
npm install @dtinsight/molecule
```

This command will automatically install Molecule's dependencies in the `molecule-demo` project.

### Basic Use

Open the `src/App.js` file and replace the contents of the file with the following:

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

`extensions` are extensions that need to be customized.

And open the `src/index.js` file and change it to the following:

```diff title="src/index.js"
root.render(
-  <React.StrictMode>
    <App />
-  </React.StrictMode>
);
```

:::caution
It's **noticed** that the Molecule for now is not compatible with `React.StrictMode`. So we should remove `React.StrictMode` from `src/index.js`.
:::

### Startup Project

Finally, run the `start` command in the terminal:

```bash
yarn start
# or npm
npm run start
```

This command will automatically open the address [http://localhost:3000](http://localhost:3000) in the default browser, and you can see the default IDE interface of Molecule.

![molecule](/img/molecule.png)

## Use Monaco Editor language pack

Now, you can see the page in browser, but that's not enough. If you want to develop an Web IDE with specific language. You should use the language pack of Monaco Editor to highlight the language in Web IDE.

To use the language pack of Monaco Editor, you need to use the plugin [`monaco-editor-webpack-plugin`](https://www.npmjs.com/package/monaco-editor-webpack-plugin), so here we have to extend the default configuration of **Webpack**.
First, we install the [react-app-rewired](https://github.com/timarney/react-app-rewired), and then create a `config-overrides.js` file in the project's root directory to override the default Webpack configuration. The specific usage of the `monaco-editor-webpack-plugin` plugin is as follows:

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
