---
title: Event
sidebar_label: Event
---

An event actually is a callback function. The event-emitter calls the function when the corresponding event be emitted. For example, there is a button be called at editor, and it will emit an event called `molecule.editor.onClick`. And event-emitter will find the corresponding event according to the `molecule.editor.onClick` and then call it.

If there are multiples functions related to an event, these functions will be called in chain. And this is called **event chains**.

## Example

At most situations, we don't have to care about the event chains. Every functions whatever built-in or user-defined are all have to be called.

But if you want to stop the chain in some situations, you definitely have this situation, you could call `this.stopDelivery` to stop the delivery of event chains.

:::tips
The `this` context of the function is filled-in by Molecule.
:::

For example, if we want to stop delivery after calculating, and we can do like this:

```ts Stop delivery in synchronous
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

```ts Stop delivery in asynchronous
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

## Order

Functions in event chains are First In, Last Called(FILC). So the built-in functions are involved first, and called last.

Oppositely the user-defined functions are involved last, but called first.

So user-defined functions are ability to stop the delivery to the built-in functions.
