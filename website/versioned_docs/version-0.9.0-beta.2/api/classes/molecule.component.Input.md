---
id: 'molecule.component.Input'
title: 'Class: Input'
sidebar_label: 'Input'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[component](../namespaces/molecule.component).Input

## Hierarchy

-   `Component`<[`IInputProps`](../interfaces/molecule.component.IInputProps), `InputState`\>

    ↳ **`Input`**

## Constructors

### constructor

• **new Input**(`props`)

#### Parameters

| Name    | Type                                                          |
| :------ | :------------------------------------------------------------ |
| `props` | [`IInputProps`](../interfaces/molecule.component.IInputProps) |

#### Overrides

React.Component&lt;IInputProps, InputState\&gt;.constructor

#### Defined in

[src/components/input/input.tsx:80](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/input/input.tsx#L80)

## Properties

### context

• **context**: `any`

If using the new style context, re-declare this in your class to be the
`React.ContextType` of your `static contextType`.
Should be used with type annotation or static contextType.

```ts
static contextType = MyContext
// For TS pre-3.7:
context!: React.ContextType<typeof MyContext>
// For TS 3.7 and above:
declare context: React.ContextType<typeof MyContext>
```

**`see`** https://reactjs.org/docs/context.html

#### Inherited from

React.Component.context

#### Defined in

node_modules/@types/react/index.d.ts:469

---

### input

• **input**: `null` \| `HTMLTextAreaElement` \| `HTMLInputElement` = `null`

#### Defined in

[src/components/input/input.tsx:78](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/input/input.tsx#L78)

---

### props

• `Readonly` **props**: `Readonly`<[`IInputProps`](../interfaces/molecule.component.IInputProps)\> & `Readonly`<`Object`\>

#### Inherited from

React.Component.props

#### Defined in

node_modules/@types/react/index.d.ts:494

---

### refs

• **refs**: `Object`

**`deprecated`**
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Index signature

▪ [key: `string`]: `ReactInstance`

#### Inherited from

React.Component.refs

#### Defined in

node_modules/@types/react/index.d.ts:500

---

### state

• **state**: `Readonly`<`InputState`\>

#### Inherited from

React.Component.state

#### Defined in

node_modules/@types/react/index.d.ts:495

---

### TextArea

▪ `Static` **TextArea**: (`__namedParameters`: [`ITextAreaProps`](../interfaces/molecule.component.ITextAreaProps)) => `Element`

#### Type declaration

▸ (`__namedParameters`): `Element`

##### Parameters

| Name                | Type                                                                |
| :------------------ | :------------------------------------------------------------------ |
| `__namedParameters` | [`ITextAreaProps`](../interfaces/molecule.component.ITextAreaProps) |

##### Returns

`Element`

#### Defined in

[src/components/input/input.tsx:72](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/input/input.tsx#L72)

---

### contextType

▪ `Static` `Optional` **contextType**: `Context`<`any`\>

If set, `this.context` will be set at runtime to the current value of the given Context.

Usage:

```ts
type MyContext = number;
const Ctx = React.createContext<MyContext>(0);

class Foo extends React.Component {
    static contextType = Ctx;
    context!: React.ContextType<typeof Ctx>;
    render() {
        return <>My context's value: {this.context}</>;
    }
}
```

**`see`** https://reactjs.org/docs/context.html#classcontexttype

#### Inherited from

React.Component.contextType

#### Defined in

node_modules/@types/react/index.d.ts:451

---

### defaultProps

▪ `Static` **defaultProps**: `Object`

#### Type declaration

| Name   | Type     |
| :----- | :------- |
| `type` | `string` |

#### Defined in

[src/components/input/input.tsx:74](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/input/input.tsx#L74)

## Methods

### UNSAFE_componentWillMount

▸ `Optional` **UNSAFE_componentWillMount**(): `void`

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Returns

`void`

#### Inherited from

React.Component.UNSAFE_componentWillMount

#### Defined in

node_modules/@types/react/index.d.ts:707

---

### UNSAFE_componentWillReceiveProps

▸ `Optional` **UNSAFE_componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name          | Type                                                                       |
| :------------ | :------------------------------------------------------------------------- |
| `nextProps`   | `Readonly`<[`IInputProps`](../interfaces/molecule.component.IInputProps)\> |
| `nextContext` | `any`                                                                      |

#### Returns

`void`

#### Inherited from

React.Component.UNSAFE_componentWillReceiveProps

#### Defined in

node_modules/@types/react/index.d.ts:739

---

### UNSAFE_componentWillUpdate

▸ `Optional` **UNSAFE_componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name          | Type                                                                       |
| :------------ | :------------------------------------------------------------------------- |
| `nextProps`   | `Readonly`<[`IInputProps`](../interfaces/molecule.component.IInputProps)\> |
| `nextState`   | `Readonly`<`InputState`\>                                                  |
| `nextContext` | `any`                                                                      |

#### Returns

`void`

#### Inherited from

React.Component.UNSAFE_componentWillUpdate

#### Defined in

node_modules/@types/react/index.d.ts:767

---

### componentDidCatch

▸ `Optional` **componentDidCatch**(`error`, `errorInfo`): `void`

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

#### Parameters

| Name        | Type        |
| :---------- | :---------- |
| `error`     | `Error`     |
| `errorInfo` | `ErrorInfo` |

#### Returns

`void`

#### Inherited from

React.Component.componentDidCatch

#### Defined in

node_modules/@types/react/index.d.ts:636

---

### componentDidMount

▸ `Optional` **componentDidMount**(): `void`

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

#### Returns

`void`

#### Inherited from

React.Component.componentDidMount

#### Defined in

node_modules/@types/react/index.d.ts:615

---

### componentDidUpdate

▸ `Optional` **componentDidUpdate**(`prevProps`, `prevState`, `snapshot?`): `void`

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters

| Name        | Type                                                                       |
| :---------- | :------------------------------------------------------------------------- |
| `prevProps` | `Readonly`<[`IInputProps`](../interfaces/molecule.component.IInputProps)\> |
| `prevState` | `Readonly`<`InputState`\>                                                  |
| `snapshot?` | `any`                                                                      |

#### Returns

`void`

#### Inherited from

React.Component.componentDidUpdate

#### Defined in

node_modules/@types/react/index.d.ts:678

---

### componentWillMount

▸ `Optional` **componentWillMount**(): `void`

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Returns

`void`

#### Inherited from

React.Component.componentWillMount

#### Defined in

node_modules/@types/react/index.d.ts:693

---

### componentWillReceiveProps

▸ `Optional` **componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name          | Type                                                                       |
| :------------ | :------------------------------------------------------------------------- |
| `nextProps`   | `Readonly`<[`IInputProps`](../interfaces/molecule.component.IInputProps)\> |
| `nextContext` | `any`                                                                      |

#### Returns

`void`

#### Inherited from

React.Component.componentWillReceiveProps

#### Defined in

node_modules/@types/react/index.d.ts:722

---

### componentWillUnmount

▸ `Optional` **componentWillUnmount**(): `void`

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

#### Returns

`void`

#### Inherited from

React.Component.componentWillUnmount

#### Defined in

node_modules/@types/react/index.d.ts:631

---

### componentWillUpdate

▸ `Optional` **componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name          | Type                                                                       |
| :------------ | :------------------------------------------------------------------------- |
| `nextProps`   | `Readonly`<[`IInputProps`](../interfaces/molecule.component.IInputProps)\> |
| `nextState`   | `Readonly`<`InputState`\>                                                  |
| `nextContext` | `any`                                                                      |

#### Returns

`void`

#### Inherited from

React.Component.componentWillUpdate

#### Defined in

node_modules/@types/react/index.d.ts:752

---

### forceUpdate

▸ **forceUpdate**(`callback?`): `void`

#### Parameters

| Name        | Type         |
| :---------- | :----------- |
| `callback?` | () => `void` |

#### Returns

`void`

#### Inherited from

React.Component.forceUpdate

#### Defined in

node_modules/@types/react/index.d.ts:486

---

### getSnapshotBeforeUpdate

▸ `Optional` **getSnapshotBeforeUpdate**(`prevProps`, `prevState`): `any`

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters

| Name        | Type                                                                       |
| :---------- | :------------------------------------------------------------------------- |
| `prevProps` | `Readonly`<[`IInputProps`](../interfaces/molecule.component.IInputProps)\> |
| `prevState` | `Readonly`<`InputState`\>                                                  |

#### Returns

`any`

#### Inherited from

React.Component.getSnapshotBeforeUpdate

#### Defined in

node_modules/@types/react/index.d.ts:672

---

### handleChange

▸ **handleChange**(`e`): `void`

#### Parameters

| Name | Type                               |
| :--- | :--------------------------------- |
| `e`  | `ChangeEvent`<`HTMLInputElement`\> |

#### Returns

`void`

#### Defined in

[src/components/input/input.tsx:115](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/input/input.tsx#L115)

---

### handleKeyDown

▸ **handleKeyDown**(`e`): `void`

#### Parameters

| Name | Type                                 |
| :--- | :----------------------------------- |
| `e`  | `KeyboardEvent`<`HTMLInputElement`\> |

#### Returns

`void`

#### Defined in

[src/components/input/input.tsx:123](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/input/input.tsx#L123)

---

### render

▸ **render**(): `Element`

#### Returns

`Element`

#### Overrides

React.Component.render

#### Defined in

[src/components/input/input.tsx:132](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/input/input.tsx#L132)

---

### saveInput

▸ **saveInput**(`input`): `void`

#### Parameters

| Name    | Type               |
| :------ | :----------------- |
| `input` | `HTMLInputElement` |

#### Returns

`void`

#### Defined in

[src/components/input/input.tsx:105](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/input/input.tsx#L105)

---

### setState

▸ **setState**<`K`\>(`state`, `callback?`): `void`

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `K`  | extends keyof `InputState` |

#### Parameters

| Name        | Type                                                                                                                                                                                                                                          |
| :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `state`     | `null` \| `InputState` \| (`prevState`: `Readonly`<`InputState`\>, `props`: `Readonly`<[`IInputProps`](../interfaces/molecule.component.IInputProps)\>) => `null` \| `InputState` \| `Pick`<`InputState`, `K`\> \| `Pick`<`InputState`, `K`\> |
| `callback?` | () => `void`                                                                                                                                                                                                                                  |

#### Returns

`void`

#### Inherited from

React.Component.setState

#### Defined in

node_modules/@types/react/index.d.ts:481

---

### setValue

▸ **setValue**(`value`): `void`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/components/input/input.tsx:109](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/input/input.tsx#L109)

---

### shouldComponentUpdate

▸ `Optional` **shouldComponentUpdate**(`nextProps`, `nextState`, `nextContext`): `boolean`

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters

| Name          | Type                                                                       |
| :------------ | :------------------------------------------------------------------------- |
| `nextProps`   | `Readonly`<[`IInputProps`](../interfaces/molecule.component.IInputProps)\> |
| `nextState`   | `Readonly`<`InputState`\>                                                  |
| `nextContext` | `any`                                                                      |

#### Returns

`boolean`

#### Inherited from

React.Component.shouldComponentUpdate

#### Defined in

node_modules/@types/react/index.d.ts:626

---

### getDerivedStateFromProps

▸ `Static` **getDerivedStateFromProps**(`nextProps`, `__namedParameters`): `Partial`<`InputState`\>

#### Parameters

| Name                | Type                                                          |
| :------------------ | :------------------------------------------------------------ |
| `nextProps`         | [`IInputProps`](../interfaces/molecule.component.IInputProps) |
| `__namedParameters` | `InputState`                                                  |

#### Returns

`Partial`<`InputState`\>

#### Defined in

[src/components/input/input.tsx:93](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/input/input.tsx#L93)
