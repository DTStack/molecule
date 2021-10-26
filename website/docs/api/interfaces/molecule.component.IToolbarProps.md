---
id: 'molecule.component.IToolbarProps'
title: 'Interface: IToolbarProps<T>'
sidebar_label: 'IToolbarProps'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[component](../namespaces/molecule.component).IToolbarProps

## Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

## Hierarchy

-   [`IActionBarProps`](molecule.component.IActionBarProps)

    ↳ **`IToolbarProps`**

## Properties

### className

• `Optional` **className**: `string`

#### Inherited from

[IActionBarProps](molecule.component.IActionBarProps).[className](molecule.component.IActionBarProps#classname)

#### Defined in

[src/components/actionBar/index.tsx:34](https://github.com/DTStack/molecule/blob/3c64296/src/components/actionBar/index.tsx#L34)

---

### data

• **data**: [`IActionBarItemProps`](molecule.component.IActionBarItemProps)<`any`\>[]

#### Inherited from

[IActionBarProps](molecule.component.IActionBarProps).[data](molecule.component.IActionBarProps#data)

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

#### Inherited from

[IActionBarProps](molecule.component.IActionBarProps).[onClick](molecule.component.IActionBarProps#onclick)

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

#### Inherited from

[IActionBarProps](molecule.component.IActionBarProps).[onContextMenuClick](molecule.component.IActionBarProps#oncontextmenuclick)

#### Defined in

[src/components/actionBar/index.tsx:35](https://github.com/DTStack/molecule/blob/3c64296/src/components/actionBar/index.tsx#L35)
