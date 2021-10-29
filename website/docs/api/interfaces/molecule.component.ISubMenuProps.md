---
id: 'molecule.component.ISubMenuProps'
title: 'Interface: ISubMenuProps'
sidebar_label: 'ISubMenuProps'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[component](../namespaces/molecule.component).ISubMenuProps

## Hierarchy

-   [`IMenuItemProps`](molecule.component.IMenuItemProps)

    ↳ **`ISubMenuProps`**

## Properties

### className

• `Optional` **className**: `string`

#### Inherited from

[IMenuItemProps](molecule.component.IMenuItemProps).[className](molecule.component.IMenuItemProps#classname)

#### Defined in

[src/typings/index.d.ts:12](https://github.com/DTStack/molecule/blob/22a59c7/src/typings/index.d.ts#L12)

---

### data

• `Optional` **data**: [`ISubMenuProps`](molecule.component.ISubMenuProps)[]

#### Defined in

[src/components/menu/subMenu.tsx:37](https://github.com/DTStack/molecule/blob/22a59c7/src/components/menu/subMenu.tsx#L37)

---

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IMenuItemProps](molecule.component.IMenuItemProps).[disabled](molecule.component.IMenuItemProps#disabled)

#### Defined in

[src/components/menu/menuItem.tsx:24](https://github.com/DTStack/molecule/blob/22a59c7/src/components/menu/menuItem.tsx#L24)

---

### icon

• `Optional` **icon**: `string` \| `Element`

The name of icon

#### Overrides

[IMenuItemProps](molecule.component.IMenuItemProps).[icon](molecule.component.IMenuItemProps#icon)

#### Defined in

[src/components/menu/subMenu.tsx:36](https://github.com/DTStack/molecule/blob/22a59c7/src/components/menu/subMenu.tsx#L36)

---

### id

• `Optional` **id**: `string`

#### Inherited from

[IMenuItemProps](molecule.component.IMenuItemProps).[id](molecule.component.IMenuItemProps#id)

#### Defined in

[src/typings/index.d.ts:9](https://github.com/DTStack/molecule/blob/22a59c7/src/typings/index.d.ts#L9)

---

### keybinding

• `Optional` **keybinding**: `string`

The description of keybinding
example: ⇧⌘P

#### Inherited from

[IMenuItemProps](molecule.component.IMenuItemProps).[keybinding](molecule.component.IMenuItemProps#keybinding)

#### Defined in

[src/components/menu/menuItem.tsx:29](https://github.com/DTStack/molecule/blob/22a59c7/src/components/menu/menuItem.tsx#L29)

---

### mode

• `Optional` **mode**: [`MenuMode`](../enums/molecule.component.MenuMode)

#### Defined in

[src/components/menu/subMenu.tsx:38](https://github.com/DTStack/molecule/blob/22a59c7/src/components/menu/subMenu.tsx#L38)

---

### name

• `Optional` **name**: `string`

Item Name

#### Inherited from

[IMenuItemProps](molecule.component.IMenuItemProps).[name](molecule.component.IMenuItemProps#name)

#### Defined in

[src/components/menu/menuItem.tsx:22](https://github.com/DTStack/molecule/blob/22a59c7/src/components/menu/menuItem.tsx#L22)

---

### sortIndex

• `Optional` **sortIndex**: `number`

#### Inherited from

[IMenuItemProps](molecule.component.IMenuItemProps).[sortIndex](molecule.component.IMenuItemProps#sortindex)

#### Defined in

[src/components/menu/menuItem.tsx:35](https://github.com/DTStack/molecule/blob/22a59c7/src/components/menu/menuItem.tsx#L35)

---

### style

• `Optional` **style**: `CSSProperties`

#### Inherited from

[IMenuItemProps](molecule.component.IMenuItemProps).[style](molecule.component.IMenuItemProps#style)

#### Defined in

[src/typings/index.d.ts:11](https://github.com/DTStack/molecule/blob/22a59c7/src/typings/index.d.ts#L11)

---

### title

• `Optional` **title**: `string`

#### Inherited from

[IMenuItemProps](molecule.component.IMenuItemProps).[title](molecule.component.IMenuItemProps#title)

#### Defined in

[src/components/menu/menuItem.tsx:23](https://github.com/DTStack/molecule/blob/22a59c7/src/components/menu/menuItem.tsx#L23)

---

### trigger

• `Optional` **trigger**: `TriggerEvent`

The event of show subMenu, default value is 'hover'

#### Defined in

[src/components/menu/subMenu.tsx:35](https://github.com/DTStack/molecule/blob/22a59c7/src/components/menu/subMenu.tsx#L35)

---

### type

• `Optional` **type**: `"divider"`

#### Inherited from

[IMenuItemProps](molecule.component.IMenuItemProps).[type](molecule.component.IMenuItemProps#type)

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

#### Inherited from

[IMenuItemProps](molecule.component.IMenuItemProps).[onClick](molecule.component.IMenuItemProps#onclick)

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

#### Inherited from

[IMenuItemProps](molecule.component.IMenuItemProps).[render](molecule.component.IMenuItemProps#render)

#### Defined in

[src/components/menu/menuItem.tsx:33](https://github.com/DTStack/molecule/blob/22a59c7/src/components/menu/menuItem.tsx#L33)
