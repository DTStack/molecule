---
id: 'molecule.component.IItemProps'
title: 'Interface: IItemProps'
sidebar_label: 'IItemProps'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[component](../namespaces/molecule.component).IItemProps

## Hierarchy

-   `Omit`<`React.ComponentProps`<`"li"`\>, `"id"`\>

    ↳ **`IItemProps`**

## Properties

### active

• `Optional` **active**: `UniqueId`

#### Defined in

[components/list/item.tsx:10](https://github.com/DTStack/molecule/blob/927b7d39/src/components/list/item.tsx#L10)

---

### disable

• `Optional` **disable**: `UniqueId`

#### Defined in

[components/list/item.tsx:9](https://github.com/DTStack/molecule/blob/927b7d39/src/components/list/item.tsx#L9)

---

### disabled

• `Optional` **disabled**: `boolean`

#### Defined in

[components/list/item.tsx:8](https://github.com/DTStack/molecule/blob/927b7d39/src/components/list/item.tsx#L8)

---

### id

• **id**: `UniqueId`

#### Defined in

[components/list/item.tsx:7](https://github.com/DTStack/molecule/blob/927b7d39/src/components/list/item.tsx#L7)

## Methods

### onClick

▸ `Optional` **onClick**(`event`, `item?`): `void`

#### Parameters

| Name    | Type                                          |
| :------ | :-------------------------------------------- |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\>        |
| `item?` | [`IItemProps`](molecule.component.IItemProps) |

#### Returns

`void`

#### Overrides

Omit.onClick

#### Defined in

[components/list/item.tsx:11](https://github.com/DTStack/molecule/blob/927b7d39/src/components/list/item.tsx#L11)
