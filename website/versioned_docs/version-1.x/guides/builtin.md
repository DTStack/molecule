---
title: Builtin
sidebar_label: Builtin
---

For convenience, molecule has some built-in data to initialize the layout UI. But sometimes, you don't need some default data. For example now, we want to initialize an application without the default activity bar.

In `src/App.js`, we get this code:

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

And we have a service named `builtinService` to manage the built-in data. So if we want to **disable** the default activity bar, we could call `molecule.builtin.inactiveModule` method to set module inactive.

But here is a question where should I call this method?

It's not working that you call `inactiveModule` method in extensions, because when molecule loads extensions, the layout UI already initialized with built-in data. It's obviously not working if you inactive a module after actived.

## hooks

For solving the timing problems, there are some hooks you can call from moInstance.

### onBeforeInit

The `onBeforeInit` is called before initializing. At this time, the layout UI isn't initialized yet. And the extensions are not loaded too.

You can disable some built-in data at this hook.

### onBeforeLoad

The `onBeforeLoad` is called before loading extensions. At this time, the layout UI is initialized. But the extensions are not loaded.

You can't disable some built-in data at this hook. But You can inactive some extensions at this hook.

## Example

```js title="src/App.js"
import React from 'react';
import { create, Workbench } from '@dtinsight/molecule';
import '@dtinsight/molecule/esm/style/mo.css';

const moInstance = create({
    extensions: [],
});

moInstance.onBeforeInit(() => {
    molecule.builtin.inactiveModule('activityBarData');
});

const App = () => moInstance.render(<Workbench />);

export default App;
```

The module you can refer to [constants](https://github.com/DTStack/molecule/blob/main/src/services/builtinService/const.ts#L96)
