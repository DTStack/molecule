---
title: 内置数据（Builtin）
sidebar_label: 内置数据
---

为了方便用户，Molecule 会用一些内置数据来初始化 UI 界面。但是有时候，用户并不需要这些默认的数据。举个例子，如果我们这时候想要初始化一个没有默认 activity bar 数据的 Molecule 应用。

在 `src/App.js` 文件中, 我们有如下代码：

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

然后 Molecule 中有一个 `builtinService` 服务，用来管理内置数据。如果我们想要**禁用**默认的 activity bar，我们可以通过调用 `molecule.builtin.inactiveModule` 方法来禁用默认模块。

但是我们应该在什么地方调用这个方法呢？

如果我们在扩展（Extensions）里调用 `inactiveModule` 方法是不生效的。因为当 molecule 加载扩展的时候，界面 UI 早已经初始化成功了，而默认数据也早已经加载到页面上。所以很明显在初始化成功之后去禁用默认模块是不生效的。

## hooks

为了解决调用的时机问题，我们有一些 hooks 以供调用。

### onBeforeInit

`onBeforeInit` 是在初始化之前被调用。在这个阶段，界面 UI 还未初始化，扩展（Extensions）也还没加载。

用户可以在这个 hook 去禁用默认数据。

### onBeforeLoad

`onBeforeLoad` 是在加载扩展之前，初始化界面之后。在这个阶段，界面 UI 已经初始化，但是扩展还没加载。

在这个界面，用户禁用默认数据会失效。但是可以禁用扩展（Extensions）。

## 例子

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

模块默认值可以参考 [内置数据变量](https://github.com/DTStack/molecule/blob/main/src/services/builtinService/const.ts#L96)
