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

[components/select/select.tsx:60](https://github.com/DTStack/molecule/blob/927b7d39/src/components/select/select.tsx#L60)

## Properties

### contextView

• `Private` **contextView**: [`IContextView`](../interfaces/molecule.component.IContextView)

#### Defined in

[components/select/select.tsx:55](https://github.com/DTStack/molecule/blob/927b7d39/src/components/select/select.tsx#L55)

---

### selectElm

• `Private` **selectElm**: `RefObject`<`HTMLDivElement`\>

#### Defined in

[components/select/select.tsx:57](https://github.com/DTStack/molecule/blob/927b7d39/src/components/select/select.tsx#L57)

---

### selectInput

• `Private` **selectInput**: `RefObject`<`HTMLInputElement`\>

#### Defined in

[components/select/select.tsx:58](https://github.com/DTStack/molecule/blob/927b7d39/src/components/select/select.tsx#L58)

---

### state

• **state**: `IState`

#### Overrides

PureComponent.state

#### Defined in

[components/select/select.tsx:56](https://github.com/DTStack/molecule/blob/927b7d39/src/components/select/select.tsx#L56)

## Methods

### componentDidMount

▸ **componentDidMount**(): `void`

#### Returns

`void`

#### Overrides

PureComponent.componentDidMount

#### Defined in

[components/select/select.tsx:79](https://github.com/DTStack/molecule/blob/927b7d39/src/components/select/select.tsx#L79)

---

### componentWillUnmount

▸ **componentWillUnmount**(): `void`

#### Returns

`void`

#### Overrides

PureComponent.componentWillUnmount

#### Defined in

[components/select/select.tsx:89](https://github.com/DTStack/molecule/blob/927b7d39/src/components/select/select.tsx#L89)

---

### getDefaultState

▸ `Private` **getDefaultState**(`props`): `Object`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `props` | `any` |

#### Returns

`Object`

| Name                  | Type                                                                                           |
| :-------------------- | :--------------------------------------------------------------------------------------------- |
| `isOpen`              | `boolean`                                                                                      |
| `option`              | { `description?`: `string` ; `disabled?`: `boolean` ; `name?`: `string` ; `value?`: `string` } |
| `option.description?` | `string`                                                                                       |
| `option.disabled?`    | `boolean`                                                                                      |
| `option.name?`        | `string`                                                                                       |
| `option.value?`       | `string`                                                                                       |

#### Defined in

[components/select/select.tsx:114](https://github.com/DTStack/molecule/blob/927b7d39/src/components/select/select.tsx#L114)

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

[components/select/select.tsx:121](https://github.com/DTStack/molecule/blob/927b7d39/src/components/select/select.tsx#L121)

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

[components/select/select.tsx:158](https://github.com/DTStack/molecule/blob/927b7d39/src/components/select/select.tsx#L158)

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

[components/select/select.tsx:145](https://github.com/DTStack/molecule/blob/927b7d39/src/components/select/select.tsx#L145)

---

### render

▸ **render**(): `Element`

#### Returns

`Element`

#### Overrides

PureComponent.render

#### Defined in

[components/select/select.tsx:190](https://github.com/DTStack/molecule/blob/927b7d39/src/components/select/select.tsx#L190)

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

[components/select/select.tsx:70](https://github.com/DTStack/molecule/blob/927b7d39/src/components/select/select.tsx#L70)

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

[components/select/select.tsx:93](https://github.com/DTStack/molecule/blob/927b7d39/src/components/select/select.tsx#L93)
