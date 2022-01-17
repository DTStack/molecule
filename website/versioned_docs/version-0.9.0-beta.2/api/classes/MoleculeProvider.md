---
id: 'MoleculeProvider'
title: 'Class: MoleculeProvider'
sidebar_label: 'MoleculeProvider'
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

-   `Component`<[`IMoleculeProps`](../interfaces/IMoleculeProps)\>

    ↳ **`MoleculeProvider`**

## Constructors

### constructor

• **new MoleculeProvider**(`props`)

#### Parameters

| Name    | Type                                             |
| :------ | :----------------------------------------------- |
| `props` | [`IMoleculeProps`](../interfaces/IMoleculeProps) |

#### Overrides

Component&lt;IMoleculeProps\&gt;.constructor

#### Defined in

[src/provider/molecule.tsx:41](https://github.com/DTStack/molecule/blob/b5324fcf/src/provider/molecule.tsx#L41)

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

Component.context

#### Defined in

node_modules/@types/react/index.d.ts:469

---

### extensionService

• `Private` `Readonly` **extensionService**: [`IExtensionService`](../interfaces/molecule.IExtensionService)

#### Defined in

[src/provider/molecule.tsx:36](https://github.com/DTStack/molecule/blob/b5324fcf/src/provider/molecule.tsx#L36)

---

### layoutService

• `Private` `Readonly` **layoutService**: [`ILayoutService`](../interfaces/molecule.ILayoutService)

#### Defined in

[src/provider/molecule.tsx:38](https://github.com/DTStack/molecule/blob/b5324fcf/src/provider/molecule.tsx#L38)

---

### localeService

• `Private` `Readonly` **localeService**: [`ILocaleService`](../interfaces/molecule.ILocaleService)

#### Defined in

[src/provider/molecule.tsx:39](https://github.com/DTStack/molecule/blob/b5324fcf/src/provider/molecule.tsx#L39)

---

### monacoService

• `Private` `Readonly` **monacoService**: `IMonacoService`

#### Defined in

[src/provider/molecule.tsx:37](https://github.com/DTStack/molecule/blob/b5324fcf/src/provider/molecule.tsx#L37)

---

### props

• `Readonly` **props**: `Readonly`<[`IMoleculeProps`](../interfaces/IMoleculeProps)\> & `Readonly`<`Object`\>

#### Inherited from

Component.props

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

Component.refs

#### Defined in

node_modules/@types/react/index.d.ts:500

---

### state

• **state**: `Readonly`<`Object`\>

#### Inherited from

Component.state

#### Defined in

node_modules/@types/react/index.d.ts:495

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

Component.contextType

#### Defined in

node_modules/@types/react/index.d.ts:451

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

Component.UNSAFE_componentWillMount

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

| Name          | Type                                                          |
| :------------ | :------------------------------------------------------------ |
| `nextProps`   | `Readonly`<[`IMoleculeProps`](../interfaces/IMoleculeProps)\> |
| `nextContext` | `any`                                                         |

#### Returns

`void`

#### Inherited from

Component.UNSAFE_componentWillReceiveProps

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

| Name          | Type                                                          |
| :------------ | :------------------------------------------------------------ |
| `nextProps`   | `Readonly`<[`IMoleculeProps`](../interfaces/IMoleculeProps)\> |
| `nextState`   | `Readonly`<`Object`\>                                         |
| `nextContext` | `any`                                                         |

#### Returns

`void`

#### Inherited from

Component.UNSAFE_componentWillUpdate

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

Component.componentDidCatch

#### Defined in

node_modules/@types/react/index.d.ts:636

---

### componentDidMount

▸ **componentDidMount**(): `void`

#### Returns

`void`

#### Overrides

Component.componentDidMount

#### Defined in

[src/provider/molecule.tsx:50](https://github.com/DTStack/molecule/blob/b5324fcf/src/provider/molecule.tsx#L50)

---

### componentDidUpdate

▸ `Optional` **componentDidUpdate**(`prevProps`, `prevState`, `snapshot?`): `void`

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters

| Name        | Type                                                          |
| :---------- | :------------------------------------------------------------ |
| `prevProps` | `Readonly`<[`IMoleculeProps`](../interfaces/IMoleculeProps)\> |
| `prevState` | `Readonly`<`Object`\>                                         |
| `snapshot?` | `any`                                                         |

#### Returns

`void`

#### Inherited from

Component.componentDidUpdate

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

Component.componentWillMount

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

| Name          | Type                                                          |
| :------------ | :------------------------------------------------------------ |
| `nextProps`   | `Readonly`<[`IMoleculeProps`](../interfaces/IMoleculeProps)\> |
| `nextContext` | `any`                                                         |

#### Returns

`void`

#### Inherited from

Component.componentWillReceiveProps

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

Component.componentWillUnmount

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

| Name          | Type                                                          |
| :------------ | :------------------------------------------------------------ |
| `nextProps`   | `Readonly`<[`IMoleculeProps`](../interfaces/IMoleculeProps)\> |
| `nextState`   | `Readonly`<`Object`\>                                         |
| `nextContext` | `any`                                                         |

#### Returns

`void`

#### Inherited from

Component.componentWillUpdate

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

Component.forceUpdate

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

| Name        | Type                                                          |
| :---------- | :------------------------------------------------------------ |
| `prevProps` | `Readonly`<[`IMoleculeProps`](../interfaces/IMoleculeProps)\> |
| `prevState` | `Readonly`<`Object`\>                                         |

#### Returns

`any`

#### Inherited from

Component.getSnapshotBeforeUpdate

#### Defined in

node_modules/@types/react/index.d.ts:672

---

### initLocaleExts

▸ **initLocaleExts**(`languages`): `void`

#### Parameters

| Name        | Type                                                      |
| :---------- | :-------------------------------------------------------- |
| `languages` | [`IExtension`](../interfaces/molecule.model.IExtension)[] |

#### Returns

`void`

#### Defined in

[src/provider/molecule.tsx:83](https://github.com/DTStack/molecule/blob/b5324fcf/src/provider/molecule.tsx#L83)

---

### initWorkbenchUI

▸ **initWorkbenchUI**(): `void`

Register all controllers and execute the initView method automatically to inject the default value
into the corresponding service

#### Returns

`void`

#### Defined in

[src/provider/molecule.tsx:98](https://github.com/DTStack/molecule/blob/b5324fcf/src/provider/molecule.tsx#L98)

---

### initialize

▸ **initialize**(): `void`

#### Returns

`void`

#### Defined in

[src/provider/molecule.tsx:56](https://github.com/DTStack/molecule/blob/b5324fcf/src/provider/molecule.tsx#L56)

---

### render

▸ **render**(): `Element`

#### Returns

`Element`

#### Overrides

Component.render

#### Defined in

[src/provider/molecule.tsx:106](https://github.com/DTStack/molecule/blob/b5324fcf/src/provider/molecule.tsx#L106)

---

### setState

▸ **setState**<`K`\>(`state`, `callback?`): `void`

#### Type parameters

| Name | Type            |
| :--- | :-------------- |
| `K`  | extends `never` |

#### Parameters

| Name        | Type                                                                                                                                                                                             |
| :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `state`     | `null` \| {} \| (`prevState`: `Readonly`<`Object`\>, `props`: `Readonly`<[`IMoleculeProps`](../interfaces/IMoleculeProps)\>) => `null` \| {} \| `Pick`<`Object`, `K`\> \| `Pick`<`Object`, `K`\> |
| `callback?` | () => `void`                                                                                                                                                                                     |

#### Returns

`void`

#### Inherited from

Component.setState

#### Defined in

node_modules/@types/react/index.d.ts:481

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

| Name          | Type                                                          |
| :------------ | :------------------------------------------------------------ |
| `nextProps`   | `Readonly`<[`IMoleculeProps`](../interfaces/IMoleculeProps)\> |
| `nextState`   | `Readonly`<`Object`\>                                         |
| `nextContext` | `any`                                                         |

#### Returns

`boolean`

#### Inherited from

Component.shouldComponentUpdate

#### Defined in

node_modules/@types/react/index.d.ts:626
