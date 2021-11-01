---
sidebar_position: 1
---

# Installation

## Requirements

-   [Node.js](https://nodejs.org/en/) - First of all, you should install Node.js, and make sure the node version is 12.13.0 or above (which can be checked by running `node -v`). It's recommended that to manage the multiple Node.js versions for Mac OSX by using [nvm](https://github.com/nvm-sh/nvm)

```bash
$ node -v
v12.13.0
```

-   [Yarn](https://yarnpkg.com/en/) - And it's highly recommended to use Yarn to manage packages rather than the npm client.

## Installation

Let's start with [creat-creat-app](https://github.com/facebook/create-react-app)

First, we create a new project by `creat-creat-app`

```bash
npx create-react-app molecule-demo
```

It will create a directory called `molecule-demo` inside the current folder.

Once the installation is done, you can open your project folder:

```bash
cd molecule-demo
```

Then, you should install the molecule:

```bash
npm install @dtinsight/molecule
# Or
yarn add @dtinsight/molecule
```

It will install the molecule packages in the `molecule-demo` project.

And open the `src/App.js` file, change the content like:

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

## StartUp

And then, run the `start` script in terminal:

```bash
yarn start
# or npm
npm run start
```

It will open [http://localhost:3000](http://localhost:3000) automatically in browser or you can open it in yourself, you can see a simple IDE interface in page.
