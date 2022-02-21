---
id: 'molecule.component.IActionBarItemProps'
title: 'Interface: IActionBarItemProps<T>'
sidebar_label: 'IActionBarItemProps'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[component](../namespaces/molecule.component).IActionBarItemProps

## Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

## Indexable

▪ [key: `string`]: `any`

## Properties

### checked

• `Optional` **checked**: `boolean`

#### Defined in

[src/components/actionBar/index.tsx:23](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/actionBar/index.tsx#L23)

---

### contextMenu

• `Optional` **contextMenu**: [`IMenuItemProps`](molecule.component.IMenuItemProps)[]

#### Defined in

[src/components/actionBar/index.tsx:25](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/actionBar/index.tsx#L25)

---

### data

• `Optional` **data**: `T`

#### Defined in

[src/components/actionBar/index.tsx:24](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/actionBar/index.tsx#L24)

---

### disabled

• `Optional` **disabled**: `boolean`

#### Defined in

[src/components/actionBar/index.tsx:22](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/actionBar/index.tsx#L22)

---

### icon

• `Optional` **icon**: `string` \| `Element`

#### Defined in

[src/components/actionBar/index.tsx:21](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/actionBar/index.tsx#L21)

---

### id

• **id**: `UniqueId`

#### Defined in

[src/components/actionBar/index.tsx:18](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/actionBar/index.tsx#L18)

---

### name

• `Optional` **name**: `ReactNode`

#### Defined in

[src/components/actionBar/index.tsx:20](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/actionBar/index.tsx#L20)

---

### title

• `Optional` **title**: `string` \| `Element`

#### Defined in

[src/components/actionBar/index.tsx:19](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/actionBar/index.tsx#L19)

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

[src/components/actionBar/index.tsx:30](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/actionBar/index.tsx#L30)

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

[src/components/actionBar/index.tsx:26](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/actionBar/index.tsx#L26)
