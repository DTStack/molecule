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

-   `HTMLElementProps`

    ↳ **`IActionBarProps`**

    ↳↳ [`IToolbarProps`](molecule.component.IToolbarProps)

## Indexable

▪ [key: `string`]: `any`

## Properties

### className

• `Optional` **className**: `string`

#### Inherited from

HTMLElementProps.className

#### Defined in

[src/common/types.ts:4](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/types.ts#L4)

---

### data

• **data**: [`IActionBarItemProps`](molecule.component.IActionBarItemProps)<`T`\>[]

#### Defined in

[src/components/actionBar/index.tsx:36](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/actionBar/index.tsx#L36)

---

### role

• `Optional` **role**: `string`

#### Inherited from

HTMLElementProps.role

#### Defined in

[src/common/types.ts:5](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/types.ts#L5)

---

### style

• `Optional` **style**: `CSSProperties`

#### Inherited from

HTMLElementProps.style

#### Defined in

[src/common/types.ts:3](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/types.ts#L3)

---

### title

• `Optional` **title**: `string`

#### Inherited from

HTMLElementProps.title

#### Defined in

[src/common/types.ts:2](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/types.ts#L2)

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

[src/components/actionBar/index.tsx:41](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/actionBar/index.tsx#L41)

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

[src/components/actionBar/index.tsx:37](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/actionBar/index.tsx#L37)
