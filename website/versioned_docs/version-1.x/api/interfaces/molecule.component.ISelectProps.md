---
id: 'molecule.component.ISelectProps'
title: 'Interface: ISelectProps'
sidebar_label: 'ISelectProps'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[component](../namespaces/molecule.component).ISelectProps

## Hierarchy

-   `Omit`<`ComponentProps`<`"div"`\>, `"onSelect"`\>

    ↳ **`ISelectProps`**

## Properties

### children

• `Optional` **children**: `ReactNode`

#### Overrides

Omit.children

#### Defined in

[components/select/select.tsx:28](https://github.com/DTStack/molecule/blob/927b7d39/src/components/select/select.tsx#L28)

---

### className

• `Optional` **className**: `string`

#### Overrides

Omit.className

#### Defined in

[components/select/select.tsx:25](https://github.com/DTStack/molecule/blob/927b7d39/src/components/select/select.tsx#L25)

---

### defaultValue

• `Optional` **defaultValue**: `string`

#### Overrides

Omit.defaultValue

#### Defined in

[components/select/select.tsx:26](https://github.com/DTStack/molecule/blob/927b7d39/src/components/select/select.tsx#L26)

---

### placeholder

• `Optional` **placeholder**: `string`

#### Overrides

Omit.placeholder

#### Defined in

[components/select/select.tsx:27](https://github.com/DTStack/molecule/blob/927b7d39/src/components/select/select.tsx#L27)

---

### style

• `Optional` **style**: `CSSProperties`

#### Overrides

Omit.style

#### Defined in

[components/select/select.tsx:24](https://github.com/DTStack/molecule/blob/927b7d39/src/components/select/select.tsx#L24)

---

### value

• `Optional` **value**: `string`

#### Defined in

[components/select/select.tsx:23](https://github.com/DTStack/molecule/blob/927b7d39/src/components/select/select.tsx#L23)

## Methods

### onSelect

▸ `Optional` **onSelect**(`e`, `selectedOption?`): `void`

#### Parameters

| Name              | Type                                                          |
| :---------------- | :------------------------------------------------------------ |
| `e`               | `MouseEvent`<`Element`, `MouseEvent`\>                        |
| `selectedOption?` | [`ISelectOptionProps`](molecule.component.ISelectOptionProps) |

#### Returns

`void`

#### Defined in

[components/select/select.tsx:29](https://github.com/DTStack/molecule/blob/927b7d39/src/components/select/select.tsx#L29)
