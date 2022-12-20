---
id: 'molecule.component.IListProps'
title: 'Interface: IListProps'
sidebar_label: 'IListProps'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[component](../namespaces/molecule.component).IListProps

## Hierarchy

-   `Omit`<`ComponentProps`<`"ul"`\>, `"onSelect"`\>

    ↳ **`IListProps`**

## Properties

### current

• `Optional` **current**: `string`

Current active

#### Defined in

[components/list/list.tsx:16](https://github.com/DTStack/molecule/blob/927b7d39/src/components/list/list.tsx#L16)

---

### disable

• `Optional` **disable**: `UniqueId`

It's used to disable specific item, the value of disable is id string

#### Defined in

[components/list/list.tsx:20](https://github.com/DTStack/molecule/blob/927b7d39/src/components/list/list.tsx#L20)

---

### mode

• `Optional` **mode**: `"horizontal"` \| `"vertical"`

Default is vertical mode

#### Defined in

[components/list/list.tsx:12](https://github.com/DTStack/molecule/blob/927b7d39/src/components/list/list.tsx#L12)

## Methods

### onClick

▸ `Optional` **onClick**(`event`, `item?`): `void`

Listen to the click event of List

#### Parameters

| Name    | Type                                          | Description                  |
| :------ | :-------------------------------------------- | :--------------------------- |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\>        | React mouse event            |
| `item?` | [`IItemProps`](molecule.component.IItemProps) | Clicked the List item object |

#### Returns

`void`

#### Overrides

Omit.onClick

#### Defined in

[components/list/list.tsx:32](https://github.com/DTStack/molecule/blob/927b7d39/src/components/list/list.tsx#L32)

---

### onSelect

▸ `Optional` **onSelect**(`event`, `item?`): `void`

Listen to the select event of List

#### Parameters

| Name    | Type                                          | Description                   |
| :------ | :-------------------------------------------- | :---------------------------- |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\>        | React mouse event             |
| `item?` | [`IItemProps`](molecule.component.IItemProps) | Selected the List item object |

#### Returns

`void`

#### Defined in

[components/list/list.tsx:26](https://github.com/DTStack/molecule/blob/927b7d39/src/components/list/list.tsx#L26)
