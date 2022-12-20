---
id: 'molecule.component.IInputProps'
title: 'Interface: IInputProps'
sidebar_label: 'IInputProps'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[component](../namespaces/molecule.component).IInputProps

## Hierarchy

-   `Omit`<`React.InputHTMLAttributes`<`HTMLInputElement`\>, `"size"` \| `"onChange"` \| `"onKeyDown"` \| `"onPressEnter"`\>

    ↳ **`IInputProps`**

## Properties

### className

• `Optional` **className**: `string`

#### Overrides

Omit.className

#### Defined in

[components/input/input.tsx:23](https://github.com/DTStack/molecule/blob/927b7d39/src/components/input/input.tsx#L23)

---

### defaultValue

• `Optional` **defaultValue**: `string`

#### Overrides

Omit.defaultValue

#### Defined in

[components/input/input.tsx:22](https://github.com/DTStack/molecule/blob/927b7d39/src/components/input/input.tsx#L22)

---

### disabled

• `Optional` **disabled**: `boolean`

#### Overrides

Omit.disabled

#### Defined in

[components/input/input.tsx:13](https://github.com/DTStack/molecule/blob/927b7d39/src/components/input/input.tsx#L13)

---

### onPressEnter

• `Optional` **onPressEnter**: `KeyboardEventHandler`<`HTMLInputElement`\>

#### Defined in

[components/input/input.tsx:24](https://github.com/DTStack/molecule/blob/927b7d39/src/components/input/input.tsx#L24)

---

### placeholder

• `Optional` **placeholder**: `string`

#### Overrides

Omit.placeholder

#### Defined in

[components/input/input.tsx:19](https://github.com/DTStack/molecule/blob/927b7d39/src/components/input/input.tsx#L19)

---

### size

• `Optional` **size**: `SizeType`

#### Defined in

[components/input/input.tsx:14](https://github.com/DTStack/molecule/blob/927b7d39/src/components/input/input.tsx#L14)

---

### style

• `Optional` **style**: `CSSProperties`

#### Overrides

Omit.style

#### Defined in

[components/input/input.tsx:21](https://github.com/DTStack/molecule/blob/927b7d39/src/components/input/input.tsx#L21)

---

### type

• `Optional` **type**: `LiteralUnion`<`"button"` \| `"search"` \| `"text"` \| `"checkbox"` \| `"submit"`, `string`\>

#### Overrides

Omit.type

#### Defined in

[components/input/input.tsx:15](https://github.com/DTStack/molecule/blob/927b7d39/src/components/input/input.tsx#L15)

---

### value

• `Optional` **value**: `string`

#### Overrides

Omit.value

#### Defined in

[components/input/input.tsx:20](https://github.com/DTStack/molecule/blob/927b7d39/src/components/input/input.tsx#L20)

## Methods

### onChange

▸ `Optional` **onChange**(`e`): `void`

#### Parameters

| Name | Type                                                        |
| :--- | :---------------------------------------------------------- |
| `e`  | `ChangeEvent`<`HTMLTextAreaElement` \| `HTMLInputElement`\> |

#### Returns

`void`

#### Defined in

[components/input/input.tsx:26](https://github.com/DTStack/molecule/blob/927b7d39/src/components/input/input.tsx#L26)

---

### onKeyDown

▸ `Optional` **onKeyDown**(`e`): `void`

#### Parameters

| Name | Type                                 |
| :--- | :----------------------------------- |
| `e`  | `KeyboardEvent`<`HTMLInputElement`\> |

#### Returns

`void`

#### Defined in

[components/input/input.tsx:25](https://github.com/DTStack/molecule/blob/927b7d39/src/components/input/input.tsx#L25)
