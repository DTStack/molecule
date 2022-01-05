---
id: 'molecule.component.Select'
title: 'Class: Select'
sidebar_label: 'Select'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[component](../namespaces/molecule.component).Select

## Hierarchy

-   `PureComponent`<[`ISelectProps`](../interfaces/molecule.component.ISelectProps), `IState`\>

    ↳ **`Select`**

## Constructors

### constructor

• **new Select**(`props`)

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `props` | `any` |

#### Overrides

PureComponent&lt;ISelectProps, IState\&gt;.constructor

#### Defined in

[src/components/select/select.tsx:60](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/select/select.tsx#L60)

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

PureComponent.context

#### Defined in

node_modules/@types/react/index.d.ts:469

---

### contextView

• `Private` **contextView**: [`IContextView`](../interfaces/molecule.component.IContextView)

#### Defined in

[src/components/select/select.tsx:55](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/select/select.tsx#L55)

---

### props

• `Readonly` **props**: `Readonly`<[`ISelectProps`](../interfaces/molecule.component.ISelectProps)\> & `Readonly`<`Object`\>

#### Inherited from

PureComponent.props

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

PureComponent.refs

#### Defined in

node_modules/@types/react/index.d.ts:500

---

### selectElm

• `Private` **selectElm**: `RefObject`<`HTMLDivElement`\>

#### Defined in

[src/components/select/select.tsx:57](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/select/select.tsx#L57)

---

### selectInput

• `Private` **selectInput**: `RefObject`<`HTMLInputElement`\>

#### Defined in

[src/components/select/select.tsx:58](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/select/select.tsx#L58)

---

### state

• **state**: `IState`

#### Overrides

PureComponent.state

#### Defined in

[src/components/select/select.tsx:56](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/select/select.tsx#L56)

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

PureComponent.contextType

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

PureComponent.UNSAFE_componentWillMount

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

| Name          | Type                                                                         |
| :------------ | :--------------------------------------------------------------------------- |
| `nextProps`   | `Readonly`<[`ISelectProps`](../interfaces/molecule.component.ISelectProps)\> |
| `nextContext` | `any`                                                                        |

#### Returns

`void`

#### Inherited from

PureComponent.UNSAFE_componentWillReceiveProps

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

| Name          | Type                                                                         |
| :------------ | :--------------------------------------------------------------------------- |
| `nextProps`   | `Readonly`<[`ISelectProps`](../interfaces/molecule.component.ISelectProps)\> |
| `nextState`   | `Readonly`<`IState`\>                                                        |
| `nextContext` | `any`                                                                        |

#### Returns

`void`

#### Inherited from

PureComponent.UNSAFE_componentWillUpdate

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

PureComponent.componentDidCatch

#### Defined in

node_modules/@types/react/index.d.ts:636

---

### componentDidMount

▸ **componentDidMount**(): `void`

#### Returns

`void`

#### Overrides

PureComponent.componentDidMount

#### Defined in

[src/components/select/select.tsx:79](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/select/select.tsx#L79)

---

### componentDidUpdate

▸ `Optional` **componentDidUpdate**(`prevProps`, `prevState`, `snapshot?`): `void`

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters

| Name        | Type                                                                         |
| :---------- | :--------------------------------------------------------------------------- |
| `prevProps` | `Readonly`<[`ISelectProps`](../interfaces/molecule.component.ISelectProps)\> |
| `prevState` | `Readonly`<`IState`\>                                                        |
| `snapshot?` | `any`                                                                        |

#### Returns

`void`

#### Inherited from

PureComponent.componentDidUpdate

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

PureComponent.componentWillMount

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

| Name          | Type                                                                         |
| :------------ | :--------------------------------------------------------------------------- |
| `nextProps`   | `Readonly`<[`ISelectProps`](../interfaces/molecule.component.ISelectProps)\> |
| `nextContext` | `any`                                                                        |

#### Returns

`void`

#### Inherited from

PureComponent.componentWillReceiveProps

#### Defined in

node_modules/@types/react/index.d.ts:722

---

### componentWillUnmount

▸ **componentWillUnmount**(): `void`

#### Returns

`void`

#### Overrides

PureComponent.componentWillUnmount

#### Defined in

[src/components/select/select.tsx:89](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/select/select.tsx#L89)

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

| Name          | Type                                                                         |
| :------------ | :--------------------------------------------------------------------------- |
| `nextProps`   | `Readonly`<[`ISelectProps`](../interfaces/molecule.component.ISelectProps)\> |
| `nextState`   | `Readonly`<`IState`\>                                                        |
| `nextContext` | `any`                                                                        |

#### Returns

`void`

#### Inherited from

PureComponent.componentWillUpdate

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

PureComponent.forceUpdate

#### Defined in

node_modules/@types/react/index.d.ts:486

---

### getDefaultState

▸ `Private` **getDefaultState**(`props`): `Object`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `props` | `any` |

#### Returns

`Object`

| Name                                     | Type                                                                                                                                                                                           |
| :--------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isOpen`                                 | `boolean`                                                                                                                                                                                      |
| `option`                                 | `Object`                                                                                                                                                                                       |
| `option.about?`                          | `string`                                                                                                                                                                                       |
| `option.accessKey?`                      | `string`                                                                                                                                                                                       |
| `option.aria-activedescendant?`          | `string`                                                                                                                                                                                       |
| `option.aria-atomic?`                    | `boolean` \| `"true"` \| `"false"`                                                                                                                                                             |
| `option.aria-autocomplete?`              | `"none"` \| `"inline"` \| `"list"` \| `"both"`                                                                                                                                                 |
| `option.aria-busy?`                      | `boolean` \| `"true"` \| `"false"`                                                                                                                                                             |
| `option.aria-checked?`                   | `boolean` \| `"true"` \| `"false"` \| `"mixed"`                                                                                                                                                |
| `option.aria-colcount?`                  | `number`                                                                                                                                                                                       |
| `option.aria-colindex?`                  | `number`                                                                                                                                                                                       |
| `option.aria-colspan?`                   | `number`                                                                                                                                                                                       |
| `option.aria-controls?`                  | `string`                                                                                                                                                                                       |
| `option.aria-current?`                   | `boolean` \| `"time"` \| `"true"` \| `"false"` \| `"page"` \| `"step"` \| `"location"` \| `"date"`                                                                                             |
| `option.aria-describedby?`               | `string`                                                                                                                                                                                       |
| `option.aria-details?`                   | `string`                                                                                                                                                                                       |
| `option.aria-disabled?`                  | `boolean` \| `"true"` \| `"false"`                                                                                                                                                             |
| `option.aria-dropeffect?`                | `"link"` \| `"none"` \| `"copy"` \| `"execute"` \| `"move"` \| `"popup"`                                                                                                                       |
| `option.aria-errormessage?`              | `string`                                                                                                                                                                                       |
| `option.aria-expanded?`                  | `boolean` \| `"true"` \| `"false"`                                                                                                                                                             |
| `option.aria-flowto?`                    | `string`                                                                                                                                                                                       |
| `option.aria-grabbed?`                   | `boolean` \| `"true"` \| `"false"`                                                                                                                                                             |
| `option.aria-haspopup?`                  | `boolean` \| `"dialog"` \| `"menu"` \| `"true"` \| `"false"` \| `"listbox"` \| `"tree"` \| `"grid"`                                                                                            |
| `option.aria-hidden?`                    | `boolean` \| `"true"` \| `"false"`                                                                                                                                                             |
| `option.aria-invalid?`                   | `boolean` \| `"true"` \| `"false"` \| `"grammar"` \| `"spelling"`                                                                                                                              |
| `option.aria-keyshortcuts?`              | `string`                                                                                                                                                                                       |
| `option.aria-label?`                     | `string`                                                                                                                                                                                       |
| `option.aria-labelledby?`                | `string`                                                                                                                                                                                       |
| `option.aria-level?`                     | `number`                                                                                                                                                                                       |
| `option.aria-live?`                      | `"off"` \| `"assertive"` \| `"polite"`                                                                                                                                                         |
| `option.aria-modal?`                     | `boolean` \| `"true"` \| `"false"`                                                                                                                                                             |
| `option.aria-multiline?`                 | `boolean` \| `"true"` \| `"false"`                                                                                                                                                             |
| `option.aria-multiselectable?`           | `boolean` \| `"true"` \| `"false"`                                                                                                                                                             |
| `option.aria-orientation?`               | `"horizontal"` \| `"vertical"`                                                                                                                                                                 |
| `option.aria-owns?`                      | `string`                                                                                                                                                                                       |
| `option.aria-placeholder?`               | `string`                                                                                                                                                                                       |
| `option.aria-posinset?`                  | `number`                                                                                                                                                                                       |
| `option.aria-pressed?`                   | `boolean` \| `"true"` \| `"false"` \| `"mixed"`                                                                                                                                                |
| `option.aria-readonly?`                  | `boolean` \| `"true"` \| `"false"`                                                                                                                                                             |
| `option.aria-relevant?`                  | `"text"` \| `"additions"` \| `"additions removals"` \| `"additions text"` \| `"all"` \| `"removals"` \| `"removals additions"` \| `"removals text"` \| `"text additions"` \| `"text removals"` |
| `option.aria-required?`                  | `boolean` \| `"true"` \| `"false"`                                                                                                                                                             |
| `option.aria-roledescription?`           | `string`                                                                                                                                                                                       |
| `option.aria-rowcount?`                  | `number`                                                                                                                                                                                       |
| `option.aria-rowindex?`                  | `number`                                                                                                                                                                                       |
| `option.aria-rowspan?`                   | `number`                                                                                                                                                                                       |
| `option.aria-selected?`                  | `boolean` \| `"true"` \| `"false"`                                                                                                                                                             |
| `option.aria-setsize?`                   | `number`                                                                                                                                                                                       |
| `option.aria-sort?`                      | `"none"` \| `"ascending"` \| `"descending"` \| `"other"`                                                                                                                                       |
| `option.aria-valuemax?`                  | `number`                                                                                                                                                                                       |
| `option.aria-valuemin?`                  | `number`                                                                                                                                                                                       |
| `option.aria-valuenow?`                  | `number`                                                                                                                                                                                       |
| `option.aria-valuetext?`                 | `string`                                                                                                                                                                                       |
| `option.autoCapitalize?`                 | `string`                                                                                                                                                                                       |
| `option.autoCorrect?`                    | `string`                                                                                                                                                                                       |
| `option.autoSave?`                       | `string`                                                                                                                                                                                       |
| `option.children?`                       | `ReactNode`                                                                                                                                                                                    |
| `option.className?`                      | `string`                                                                                                                                                                                       |
| `option.color?`                          | `string`                                                                                                                                                                                       |
| `option.contentEditable?`                | `Booleanish` \| `"inherit"`                                                                                                                                                                    |
| `option.contextMenu?`                    | `string`                                                                                                                                                                                       |
| `option.css?`                            | `InterpolationWithTheme`<`any`\>                                                                                                                                                               |
| `option.dangerouslySetInnerHTML?`        | `Object`                                                                                                                                                                                       |
| `option.dangerouslySetInnerHTML.__html`  | `string`                                                                                                                                                                                       |
| `option.datatype?`                       | `string`                                                                                                                                                                                       |
| `option.defaultChecked?`                 | `boolean`                                                                                                                                                                                      |
| `option.defaultValue?`                   | `string` \| `number` \| readonly `string`[]                                                                                                                                                    |
| `option.description?`                    | `string`                                                                                                                                                                                       |
| `option.dir?`                            | `string`                                                                                                                                                                                       |
| `option.disabled?`                       | `boolean`                                                                                                                                                                                      |
| `option.draggable?`                      | `Booleanish`                                                                                                                                                                                   |
| `option.hidden?`                         | `boolean`                                                                                                                                                                                      |
| `option.id?`                             | `string`                                                                                                                                                                                       |
| `option.inlist?`                         | `any`                                                                                                                                                                                          |
| `option.inputMode?`                      | `"text"` \| `"none"` \| `"tel"` \| `"url"` \| `"email"` \| `"numeric"` \| `"decimal"` \| `"search"`                                                                                            |
| `option.is?`                             | `string`                                                                                                                                                                                       |
| `option.itemID?`                         | `string`                                                                                                                                                                                       |
| `option.itemProp?`                       | `string`                                                                                                                                                                                       |
| `option.itemRef?`                        | `string`                                                                                                                                                                                       |
| `option.itemScope?`                      | `boolean`                                                                                                                                                                                      |
| `option.itemType?`                       | `string`                                                                                                                                                                                       |
| `option.key?`                            | `null` \| `Key`                                                                                                                                                                                |
| `option.lang?`                           | `string`                                                                                                                                                                                       |
| `option.name?`                           | `string`                                                                                                                                                                                       |
| `option.onAbort?`                        | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onAbortCapture?`                 | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onAnimationEnd?`                 | `AnimationEventHandler`<`HTMLDivElement`\>                                                                                                                                                     |
| `option.onAnimationEndCapture?`          | `AnimationEventHandler`<`HTMLDivElement`\>                                                                                                                                                     |
| `option.onAnimationIteration?`           | `AnimationEventHandler`<`HTMLDivElement`\>                                                                                                                                                     |
| `option.onAnimationIterationCapture?`    | `AnimationEventHandler`<`HTMLDivElement`\>                                                                                                                                                     |
| `option.onAnimationStart?`               | `AnimationEventHandler`<`HTMLDivElement`\>                                                                                                                                                     |
| `option.onAnimationStartCapture?`        | `AnimationEventHandler`<`HTMLDivElement`\>                                                                                                                                                     |
| `option.onAuxClick?`                     | `MouseEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onAuxClickCapture?`              | `MouseEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onBeforeInput?`                  | `FormEventHandler`<`HTMLDivElement`\>                                                                                                                                                          |
| `option.onBeforeInputCapture?`           | `FormEventHandler`<`HTMLDivElement`\>                                                                                                                                                          |
| `option.onBlur?`                         | `FocusEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onBlurCapture?`                  | `FocusEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onCanPlay?`                      | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onCanPlayCapture?`               | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onCanPlayThrough?`               | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onCanPlayThroughCapture?`        | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onChange?`                       | `FormEventHandler`<`HTMLDivElement`\>                                                                                                                                                          |
| `option.onChangeCapture?`                | `FormEventHandler`<`HTMLDivElement`\>                                                                                                                                                          |
| `option.onClick?`                        | `MouseEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onClickCapture?`                 | `MouseEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onCompositionEnd?`               | `CompositionEventHandler`<`HTMLDivElement`\>                                                                                                                                                   |
| `option.onCompositionEndCapture?`        | `CompositionEventHandler`<`HTMLDivElement`\>                                                                                                                                                   |
| `option.onCompositionStart?`             | `CompositionEventHandler`<`HTMLDivElement`\>                                                                                                                                                   |
| `option.onCompositionStartCapture?`      | `CompositionEventHandler`<`HTMLDivElement`\>                                                                                                                                                   |
| `option.onCompositionUpdate?`            | `CompositionEventHandler`<`HTMLDivElement`\>                                                                                                                                                   |
| `option.onCompositionUpdateCapture?`     | `CompositionEventHandler`<`HTMLDivElement`\>                                                                                                                                                   |
| `option.onContextMenu?`                  | `MouseEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onContextMenuCapture?`           | `MouseEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onCopy?`                         | `ClipboardEventHandler`<`HTMLDivElement`\>                                                                                                                                                     |
| `option.onCopyCapture?`                  | `ClipboardEventHandler`<`HTMLDivElement`\>                                                                                                                                                     |
| `option.onCut?`                          | `ClipboardEventHandler`<`HTMLDivElement`\>                                                                                                                                                     |
| `option.onCutCapture?`                   | `ClipboardEventHandler`<`HTMLDivElement`\>                                                                                                                                                     |
| `option.onDoubleClick?`                  | `MouseEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onDoubleClickCapture?`           | `MouseEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onDrag?`                         | `DragEventHandler`<`HTMLDivElement`\>                                                                                                                                                          |
| `option.onDragCapture?`                  | `DragEventHandler`<`HTMLDivElement`\>                                                                                                                                                          |
| `option.onDragEnd?`                      | `DragEventHandler`<`HTMLDivElement`\>                                                                                                                                                          |
| `option.onDragEndCapture?`               | `DragEventHandler`<`HTMLDivElement`\>                                                                                                                                                          |
| `option.onDragEnter?`                    | `DragEventHandler`<`HTMLDivElement`\>                                                                                                                                                          |
| `option.onDragEnterCapture?`             | `DragEventHandler`<`HTMLDivElement`\>                                                                                                                                                          |
| `option.onDragExit?`                     | `DragEventHandler`<`HTMLDivElement`\>                                                                                                                                                          |
| `option.onDragExitCapture?`              | `DragEventHandler`<`HTMLDivElement`\>                                                                                                                                                          |
| `option.onDragLeave?`                    | `DragEventHandler`<`HTMLDivElement`\>                                                                                                                                                          |
| `option.onDragLeaveCapture?`             | `DragEventHandler`<`HTMLDivElement`\>                                                                                                                                                          |
| `option.onDragOver?`                     | `DragEventHandler`<`HTMLDivElement`\>                                                                                                                                                          |
| `option.onDragOverCapture?`              | `DragEventHandler`<`HTMLDivElement`\>                                                                                                                                                          |
| `option.onDragStart?`                    | `DragEventHandler`<`HTMLDivElement`\>                                                                                                                                                          |
| `option.onDragStartCapture?`             | `DragEventHandler`<`HTMLDivElement`\>                                                                                                                                                          |
| `option.onDrop?`                         | `DragEventHandler`<`HTMLDivElement`\>                                                                                                                                                          |
| `option.onDropCapture?`                  | `DragEventHandler`<`HTMLDivElement`\>                                                                                                                                                          |
| `option.onDurationChange?`               | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onDurationChangeCapture?`        | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onEmptied?`                      | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onEmptiedCapture?`               | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onEncrypted?`                    | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onEncryptedCapture?`             | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onEnded?`                        | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onEndedCapture?`                 | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onError?`                        | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onErrorCapture?`                 | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onFocus?`                        | `FocusEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onFocusCapture?`                 | `FocusEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onGotPointerCapture?`            | `PointerEventHandler`<`HTMLDivElement`\>                                                                                                                                                       |
| `option.onGotPointerCaptureCapture?`     | `PointerEventHandler`<`HTMLDivElement`\>                                                                                                                                                       |
| `option.onInput?`                        | `FormEventHandler`<`HTMLDivElement`\>                                                                                                                                                          |
| `option.onInputCapture?`                 | `FormEventHandler`<`HTMLDivElement`\>                                                                                                                                                          |
| `option.onInvalid?`                      | `FormEventHandler`<`HTMLDivElement`\>                                                                                                                                                          |
| `option.onInvalidCapture?`               | `FormEventHandler`<`HTMLDivElement`\>                                                                                                                                                          |
| `option.onKeyDown?`                      | `KeyboardEventHandler`<`HTMLDivElement`\>                                                                                                                                                      |
| `option.onKeyDownCapture?`               | `KeyboardEventHandler`<`HTMLDivElement`\>                                                                                                                                                      |
| `option.onKeyPress?`                     | `KeyboardEventHandler`<`HTMLDivElement`\>                                                                                                                                                      |
| `option.onKeyPressCapture?`              | `KeyboardEventHandler`<`HTMLDivElement`\>                                                                                                                                                      |
| `option.onKeyUp?`                        | `KeyboardEventHandler`<`HTMLDivElement`\>                                                                                                                                                      |
| `option.onKeyUpCapture?`                 | `KeyboardEventHandler`<`HTMLDivElement`\>                                                                                                                                                      |
| `option.onLoad?`                         | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onLoadCapture?`                  | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onLoadStart?`                    | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onLoadStartCapture?`             | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onLoadedData?`                   | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onLoadedDataCapture?`            | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onLoadedMetadata?`               | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onLoadedMetadataCapture?`        | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onLostPointerCapture?`           | `PointerEventHandler`<`HTMLDivElement`\>                                                                                                                                                       |
| `option.onLostPointerCaptureCapture?`    | `PointerEventHandler`<`HTMLDivElement`\>                                                                                                                                                       |
| `option.onMouseDown?`                    | `MouseEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onMouseDownCapture?`             | `MouseEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onMouseEnter?`                   | `MouseEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onMouseLeave?`                   | `MouseEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onMouseMove?`                    | `MouseEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onMouseMoveCapture?`             | `MouseEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onMouseOut?`                     | `MouseEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onMouseOutCapture?`              | `MouseEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onMouseOver?`                    | `MouseEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onMouseOverCapture?`             | `MouseEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onMouseUp?`                      | `MouseEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onMouseUpCapture?`               | `MouseEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onPaste?`                        | `ClipboardEventHandler`<`HTMLDivElement`\>                                                                                                                                                     |
| `option.onPasteCapture?`                 | `ClipboardEventHandler`<`HTMLDivElement`\>                                                                                                                                                     |
| `option.onPause?`                        | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onPauseCapture?`                 | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onPlay?`                         | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onPlayCapture?`                  | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onPlaying?`                      | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onPlayingCapture?`               | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onPointerCancel?`                | `PointerEventHandler`<`HTMLDivElement`\>                                                                                                                                                       |
| `option.onPointerCancelCapture?`         | `PointerEventHandler`<`HTMLDivElement`\>                                                                                                                                                       |
| `option.onPointerDown?`                  | `PointerEventHandler`<`HTMLDivElement`\>                                                                                                                                                       |
| `option.onPointerDownCapture?`           | `PointerEventHandler`<`HTMLDivElement`\>                                                                                                                                                       |
| `option.onPointerEnter?`                 | `PointerEventHandler`<`HTMLDivElement`\>                                                                                                                                                       |
| `option.onPointerEnterCapture?`          | `PointerEventHandler`<`HTMLDivElement`\>                                                                                                                                                       |
| `option.onPointerLeave?`                 | `PointerEventHandler`<`HTMLDivElement`\>                                                                                                                                                       |
| `option.onPointerLeaveCapture?`          | `PointerEventHandler`<`HTMLDivElement`\>                                                                                                                                                       |
| `option.onPointerMove?`                  | `PointerEventHandler`<`HTMLDivElement`\>                                                                                                                                                       |
| `option.onPointerMoveCapture?`           | `PointerEventHandler`<`HTMLDivElement`\>                                                                                                                                                       |
| `option.onPointerOut?`                   | `PointerEventHandler`<`HTMLDivElement`\>                                                                                                                                                       |
| `option.onPointerOutCapture?`            | `PointerEventHandler`<`HTMLDivElement`\>                                                                                                                                                       |
| `option.onPointerOver?`                  | `PointerEventHandler`<`HTMLDivElement`\>                                                                                                                                                       |
| `option.onPointerOverCapture?`           | `PointerEventHandler`<`HTMLDivElement`\>                                                                                                                                                       |
| `option.onPointerUp?`                    | `PointerEventHandler`<`HTMLDivElement`\>                                                                                                                                                       |
| `option.onPointerUpCapture?`             | `PointerEventHandler`<`HTMLDivElement`\>                                                                                                                                                       |
| `option.onProgress?`                     | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onProgressCapture?`              | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onRateChange?`                   | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onRateChangeCapture?`            | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onReset?`                        | `FormEventHandler`<`HTMLDivElement`\>                                                                                                                                                          |
| `option.onResetCapture?`                 | `FormEventHandler`<`HTMLDivElement`\>                                                                                                                                                          |
| `option.onScroll?`                       | `UIEventHandler`<`HTMLDivElement`\>                                                                                                                                                            |
| `option.onScrollCapture?`                | `UIEventHandler`<`HTMLDivElement`\>                                                                                                                                                            |
| `option.onSeeked?`                       | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onSeekedCapture?`                | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onSeeking?`                      | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onSeekingCapture?`               | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onSelect?`                       | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onSelectCapture?`                | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onStalled?`                      | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onStalledCapture?`               | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onSubmit?`                       | `FormEventHandler`<`HTMLDivElement`\>                                                                                                                                                          |
| `option.onSubmitCapture?`                | `FormEventHandler`<`HTMLDivElement`\>                                                                                                                                                          |
| `option.onSuspend?`                      | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onSuspendCapture?`               | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onTimeUpdate?`                   | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onTimeUpdateCapture?`            | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onTouchCancel?`                  | `TouchEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onTouchCancelCapture?`           | `TouchEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onTouchEnd?`                     | `TouchEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onTouchEndCapture?`              | `TouchEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onTouchMove?`                    | `TouchEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onTouchMoveCapture?`             | `TouchEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onTouchStart?`                   | `TouchEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onTouchStartCapture?`            | `TouchEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onTransitionEnd?`                | `TransitionEventHandler`<`HTMLDivElement`\>                                                                                                                                                    |
| `option.onTransitionEndCapture?`         | `TransitionEventHandler`<`HTMLDivElement`\>                                                                                                                                                    |
| `option.onVolumeChange?`                 | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onVolumeChangeCapture?`          | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onWaiting?`                      | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onWaitingCapture?`               | `ReactEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onWheel?`                        | `WheelEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.onWheelCapture?`                 | `WheelEventHandler`<`HTMLDivElement`\>                                                                                                                                                         |
| `option.placeholder?`                    | `string`                                                                                                                                                                                       |
| `option.prefix?`                         | `string`                                                                                                                                                                                       |
| `option.property?`                       | `string`                                                                                                                                                                                       |
| `option.radioGroup?`                     | `string`                                                                                                                                                                                       |
| `option.ref?`                            | `LegacyRef`<`HTMLDivElement`\>                                                                                                                                                                 |
| `option.resource?`                       | `string`                                                                                                                                                                                       |
| `option.results?`                        | `number`                                                                                                                                                                                       |
| `option.role?`                           | `string`                                                                                                                                                                                       |
| `option.security?`                       | `string`                                                                                                                                                                                       |
| `option.slot?`                           | `string`                                                                                                                                                                                       |
| `option.spellCheck?`                     | `Booleanish`                                                                                                                                                                                   |
| `option.style?`                          | `CSSProperties`                                                                                                                                                                                |
| `option.suppressContentEditableWarning?` | `boolean`                                                                                                                                                                                      |
| `option.suppressHydrationWarning?`       | `boolean`                                                                                                                                                                                      |
| `option.tabIndex?`                       | `number`                                                                                                                                                                                       |
| `option.title?`                          | `string`                                                                                                                                                                                       |
| `option.translate?`                      | `"yes"` \| `"no"`                                                                                                                                                                              |
| `option.typeof?`                         | `string`                                                                                                                                                                                       |
| `option.unselectable?`                   | `"on"` \| `"off"`                                                                                                                                                                              |
| `option.value?`                          | `string`                                                                                                                                                                                       |
| `option.vocab?`                          | `string`                                                                                                                                                                                       |

#### Defined in

[src/components/select/select.tsx:114](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/select/select.tsx#L114)

---

### getSnapshotBeforeUpdate

▸ `Optional` **getSnapshotBeforeUpdate**(`prevProps`, `prevState`): `any`

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters

| Name        | Type                                                                         |
| :---------- | :--------------------------------------------------------------------------- |
| `prevProps` | `Readonly`<[`ISelectProps`](../interfaces/molecule.component.ISelectProps)\> |
| `prevState` | `Readonly`<`IState`\>                                                        |

#### Returns

`any`

#### Inherited from

PureComponent.getSnapshotBeforeUpdate

#### Defined in

node_modules/@types/react/index.d.ts:672

---

### handleOnClickOption

▸ **handleOnClickOption**(`e`): `void`

#### Parameters

| Name | Type                                   |
| :--- | :------------------------------------- |
| `e`  | `MouseEvent`<`Element`, `MouseEvent`\> |

#### Returns

`void`

#### Defined in

[src/components/select/select.tsx:121](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/select/select.tsx#L121)

---

### handleOnClickSelect

▸ **handleOnClickSelect**(`e`): `void`

#### Parameters

| Name | Type                                   |
| :--- | :------------------------------------- |
| `e`  | `MouseEvent`<`Element`, `MouseEvent`\> |

#### Returns

`void`

#### Defined in

[src/components/select/select.tsx:158](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/select/select.tsx#L158)

---

### handleOnHoverOption

▸ **handleOnHoverOption**(`e`): `void`

#### Parameters

| Name | Type                                   |
| :--- | :------------------------------------- |
| `e`  | `MouseEvent`<`Element`, `MouseEvent`\> |

#### Returns

`void`

#### Defined in

[src/components/select/select.tsx:145](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/select/select.tsx#L145)

---

### render

▸ **render**(): `Element`

#### Returns

`Element`

#### Overrides

PureComponent.render

#### Defined in

[src/components/select/select.tsx:190](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/select/select.tsx#L190)

---

### setState

▸ **setState**<`K`\>(`state`, `callback?`): `void`

#### Type parameters

| Name | Type                   |
| :--- | :--------------------- |
| `K`  | extends keyof `IState` |

#### Parameters

| Name        | Type                                                                                                                                                                                                                        |
| :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `state`     | `null` \| `IState` \| (`prevState`: `Readonly`<`IState`\>, `props`: `Readonly`<[`ISelectProps`](../interfaces/molecule.component.ISelectProps)\>) => `null` \| `IState` \| `Pick`<`IState`, `K`\> \| `Pick`<`IState`, `K`\> |
| `callback?` | () => `void`                                                                                                                                                                                                                |

#### Returns

`void`

#### Inherited from

PureComponent.setState

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

| Name          | Type                                                                         |
| :------------ | :--------------------------------------------------------------------------- |
| `nextProps`   | `Readonly`<[`ISelectProps`](../interfaces/molecule.component.ISelectProps)\> |
| `nextState`   | `Readonly`<`IState`\>                                                        |
| `nextContext` | `any`                                                                        |

#### Returns

`boolean`

#### Inherited from

PureComponent.shouldComponentUpdate

#### Defined in

node_modules/@types/react/index.d.ts:626

---

### getDerivedStateFromProps

▸ `Static` **getDerivedStateFromProps**(`props`, `state`): `null` \| { `option`: [`ISelectOptionProps`](../interfaces/molecule.component.ISelectOptionProps) }

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `props` | `any` |
| `state` | `any` |

#### Returns

`null` \| { `option`: [`ISelectOptionProps`](../interfaces/molecule.component.ISelectOptionProps) }

#### Defined in

[src/components/select/select.tsx:70](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/select/select.tsx#L70)

---

### getSelectOption

▸ `Static` `Private` **getSelectOption**(`props`): [`ISelectOptionProps`](../interfaces/molecule.component.ISelectOptionProps)

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `props` | `any` |

#### Returns

[`ISelectOptionProps`](../interfaces/molecule.component.ISelectOptionProps)

#### Defined in

[src/components/select/select.tsx:93](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/select/select.tsx#L93)
