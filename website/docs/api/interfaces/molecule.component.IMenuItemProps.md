---
id: 'molecule.component.IMenuItemProps'
title: 'Interface: IMenuItemProps'
sidebar_label: 'IMenuItemProps'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[component](../namespaces/molecule.component).IMenuItemProps

## Hierarchy

-   `Omit`<`HTMLElementProps`, `"title"`\>

    ↳ **`IMenuItemProps`**

    ↳↳ [`ISubMenuProps`](molecule.component.ISubMenuProps)

## Indexable

▪ [key: `string`]: `any`

## Properties

### className

• `Optional` **className**: `string`

#### Inherited from

Omit.className

#### Defined in

[src/typings/index.d.ts:12](https://github.com/DTStack/molecule/blob/22a59c7/src/typings/index.d.ts#L12)

---

### disabled

• `Optional` **disabled**: `boolean`

#### Defined in

[src/components/menu/menuItem.tsx:24](https://github.com/DTStack/molecule/blob/22a59c7/src/components/menu/menuItem.tsx#L24)

---

### icon

• `Optional` **icon**: `string` \| `Element`

The name of icon

#### Defined in

[src/components/menu/menuItem.tsx:17](https://github.com/DTStack/molecule/blob/22a59c7/src/components/menu/menuItem.tsx#L17)

---

### id

• `Optional` **id**: `string`

#### Inherited from

Omit.id

#### Defined in

[src/typings/index.d.ts:9](https://github.com/DTStack/molecule/blob/22a59c7/src/typings/index.d.ts#L9)

---

### keybinding

• `Optional` **keybinding**: `string`

The description of keybinding
example: ⇧⌘P

#### Defined in

[src/components/menu/menuItem.tsx:29](https://github.com/DTStack/molecule/blob/22a59c7/src/components/menu/menuItem.tsx#L29)

---

### name

• `Optional` **name**: `string`

Item Name

#### Defined in

[src/components/menu/menuItem.tsx:22](https://github.com/DTStack/molecule/blob/22a59c7/src/components/menu/menuItem.tsx#L22)

---

### sortIndex

• `Optional` **sortIndex**: `number`

#### Defined in

[src/components/menu/menuItem.tsx:35](https://github.com/DTStack/molecule/blob/22a59c7/src/components/menu/menuItem.tsx#L35)

---

### style

• `Optional` **style**: `CSSProperties`

#### Inherited from

Omit.style

#### Defined in

[src/typings/index.d.ts:11](https://github.com/DTStack/molecule/blob/22a59c7/src/typings/index.d.ts#L11)

---

### title

• `Optional` **title**: `string`

#### Defined in

[src/components/menu/menuItem.tsx:23](https://github.com/DTStack/molecule/blob/22a59c7/src/components/menu/menuItem.tsx#L23)

---

### type

• `Optional` **type**: `"divider"`

#### Defined in

[src/components/menu/menuItem.tsx:18](https://github.com/DTStack/molecule/blob/22a59c7/src/components/menu/menuItem.tsx#L18)

## Methods

### onClick

▸ `Optional` **onClick**(`e`, `item`): `void`

#### Parameters

| Name   | Type                                                  |
| :----- | :---------------------------------------------------- |
| `e`    | `MouseEvent`<`Element`, `MouseEvent`\>                |
| `item` | [`IMenuItemProps`](molecule.component.IMenuItemProps) |

#### Returns

`void`

#### Defined in

[src/components/menu/menuItem.tsx:34](https://github.com/DTStack/molecule/blob/22a59c7/src/components/menu/menuItem.tsx#L34)

---

### render

▸ `Optional` **render**(`data`): `ReactNode`

Custom render

#### Parameters

| Name   | Type                                                  |
| :----- | :---------------------------------------------------- |
| `data` | [`IMenuItemProps`](molecule.component.IMenuItemProps) |

#### Returns

`ReactNode`

#### Defined in

[src/components/menu/menuItem.tsx:33](https://github.com/DTStack/molecule/blob/22a59c7/src/components/menu/menuItem.tsx#L33)
