---
id: 'molecule.component.IActionBarProps'
title: 'Interface: IActionBarProps<T>'
sidebar_label: 'IActionBarProps'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[component](../namespaces/molecule.component).IActionBarProps

## Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

## Hierarchy

-   **`IActionBarProps`**

    ↳ [`IToolbarProps`](molecule.component.IToolbarProps)

## Properties

### className

• `Optional` **className**: `string`

#### Defined in

[src/components/actionBar/index.tsx:34](https://github.com/DTStack/molecule/blob/3c64296/src/components/actionBar/index.tsx#L34)

---

### data

• **data**: [`IActionBarItemProps`](molecule.component.IActionBarItemProps)<`T`\>[]

#### Defined in

[src/components/actionBar/index.tsx:33](https://github.com/DTStack/molecule/blob/3c64296/src/components/actionBar/index.tsx#L33)

## Methods

### onClick

▸ `Optional` **onClick**(`event`, `item`): `void`

#### Parameters

| Name    | Type                                                                    |
| :------ | :---------------------------------------------------------------------- |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\>                                  |
| `item`  | [`IActionBarItemProps`](molecule.component.IActionBarItemProps)<`any`\> |

#### Returns

`void`

#### Defined in

[src/components/actionBar/index.tsx:39](https://github.com/DTStack/molecule/blob/3c64296/src/components/actionBar/index.tsx#L39)

---

### onContextMenuClick

▸ `Optional` **onContextMenuClick**(`e`, `item`): `void`

#### Parameters

| Name   | Type                                                                 |
| :----- | :------------------------------------------------------------------- |
| `e`    | `MouseEvent`<`Element`, `MouseEvent`\>                               |
| `item` | `undefined` \| [`IMenuItemProps`](molecule.component.IMenuItemProps) |

#### Returns

`void`

#### Defined in

[src/components/actionBar/index.tsx:35](https://github.com/DTStack/molecule/blob/3c64296/src/components/actionBar/index.tsx#L35)
