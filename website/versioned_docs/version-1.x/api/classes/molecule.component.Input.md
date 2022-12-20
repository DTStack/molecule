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

[components/input/input.tsx:80](https://github.com/DTStack/molecule/blob/927b7d39/src/components/input/input.tsx#L80)

## Properties

### input

• **input**: `null` \| `HTMLTextAreaElement` \| `HTMLInputElement` = `null`

#### Defined in

[components/input/input.tsx:78](https://github.com/DTStack/molecule/blob/927b7d39/src/components/input/input.tsx#L78)

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

[components/input/input.tsx:72](https://github.com/DTStack/molecule/blob/927b7d39/src/components/input/input.tsx#L72)

---

### defaultProps

▪ `Static` **defaultProps**: `Object`

#### Type declaration

| Name   | Type     |
| :----- | :------- |
| `type` | `string` |

#### Defined in

[components/input/input.tsx:74](https://github.com/DTStack/molecule/blob/927b7d39/src/components/input/input.tsx#L74)

## Methods

### handleChange

▸ **handleChange**(`e`): `void`

#### Parameters

| Name | Type                               |
| :--- | :--------------------------------- |
| `e`  | `ChangeEvent`<`HTMLInputElement`\> |

#### Returns

`void`

#### Defined in

[components/input/input.tsx:115](https://github.com/DTStack/molecule/blob/927b7d39/src/components/input/input.tsx#L115)

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

[components/input/input.tsx:123](https://github.com/DTStack/molecule/blob/927b7d39/src/components/input/input.tsx#L123)

---

### render

▸ **render**(): `Element`

#### Returns

`Element`

#### Overrides

React.Component.render

#### Defined in

[components/input/input.tsx:132](https://github.com/DTStack/molecule/blob/927b7d39/src/components/input/input.tsx#L132)

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

[components/input/input.tsx:105](https://github.com/DTStack/molecule/blob/927b7d39/src/components/input/input.tsx#L105)

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

[components/input/input.tsx:109](https://github.com/DTStack/molecule/blob/927b7d39/src/components/input/input.tsx#L109)

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

[components/input/input.tsx:93](https://github.com/DTStack/molecule/blob/927b7d39/src/components/input/input.tsx#L93)
