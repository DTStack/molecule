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

[common/types.ts:4](https://github.com/DTStack/molecule/blob/927b7d39/src/common/types.ts#L4)

---

### data

• **data**: [`IActionBarItemProps`](molecule.component.IActionBarItemProps)<`any`\>[]

#### Inherited from

[IActionBarProps](molecule.component.IActionBarProps).[data](molecule.component.IActionBarProps#data)

#### Defined in

[components/actionBar/index.tsx:36](https://github.com/DTStack/molecule/blob/927b7d39/src/components/actionBar/index.tsx#L36)

---

### role

• `Optional` **role**: `string`

#### Inherited from

[IActionBarProps](molecule.component.IActionBarProps).[role](molecule.component.IActionBarProps#role)

#### Defined in

[common/types.ts:5](https://github.com/DTStack/molecule/blob/927b7d39/src/common/types.ts#L5)

---

### style

• `Optional` **style**: `CSSProperties`

#### Inherited from

[IActionBarProps](molecule.component.IActionBarProps).[style](molecule.component.IActionBarProps#style)

#### Defined in

[common/types.ts:3](https://github.com/DTStack/molecule/blob/927b7d39/src/common/types.ts#L3)

---

### title

• `Optional` **title**: `string`

#### Inherited from

[IActionBarProps](molecule.component.IActionBarProps).[title](molecule.component.IActionBarProps#title)

#### Defined in

[common/types.ts:2](https://github.com/DTStack/molecule/blob/927b7d39/src/common/types.ts#L2)

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

[components/actionBar/index.tsx:41](https://github.com/DTStack/molecule/blob/927b7d39/src/components/actionBar/index.tsx#L41)

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

[components/actionBar/index.tsx:37](https://github.com/DTStack/molecule/blob/927b7d39/src/components/actionBar/index.tsx#L37)
