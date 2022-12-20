---
title: 订阅事件
sidebar_label: 订阅事件
---

一个订阅事件本质上就是一个回调函数。事件触发器将会在对应事件被触发的时候执行对应的订阅事件。例如：在 editor 上有一个按钮，点击按钮将会触发 `molecule.editor.onClick` 该事件。那么事件触发器将会根据 `molecule.editor.onClick` 找到对应的事件，并执行它。

如果某个事件有被多处订阅，那么这个事件将会有很多回调函数。这些函数如果被触发将会被链式调用。我们称之为事件链。

## 示例

在大部分情况下，我们并不需要关心事件链的存在。每一个回调函数都有其存在的理由，不论是内置还是用户定义的函数。

然而如果在某些业务场景下，我们需要阻止事件链的传递（你必然会遇到这样子的场景），那么我们只需要调用 `this.stopDelivery` 来阻止事件链的传递即可。

:::tips
回调函数的（`this`）上下文会被 Molecule 修改。
:::

例如，如果我们想在计算获得某种结果后，阻止事件的传递，那么我们可以这样操作：

```ts 同步阻止事件传递
molecule.editor.onClick(() => {
    // if result is true, and this function won't be called
    console.log('onClick');
});

molecule.editor.onClick(function (this: ListenerEventContext) {
    // do something
    const result = calculated();
    if (result) {
        this.stopDelivery();
    }
});
```

```ts 异步组织事件传递
molecule.editor.onClick(() => {
    // if result is true, and this function won't be called
    console.log('onClick');
});

molecule.editor.onClick(async function (this: ListenerEventContext) {
    await new Promise<void>((resolve) => {
        setTimeout(() => {
            this.stopDelivery();
            resolve();
        }, 0);
    });
});
```

## 顺序

事件链中的函数遵循先进后执行（FILC）。所以内置回调函数是先进后执行

相对的，用户定义的回调函数是后进先执行。所以用户定义的回调函数可以阻止事件传递到内置回调函数。
