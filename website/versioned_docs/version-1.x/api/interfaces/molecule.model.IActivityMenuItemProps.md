---
id: 'molecule.model.IActivityMenuItemProps'
title: 'Interface: IActivityMenuItemProps'
sidebar_label: 'IActivityMenuItemProps'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[model](../namespaces/molecule.model).IActivityMenuItemProps

## Hierarchy

-   [`IMenuItemProps`](molecule.component.IMenuItemProps)

    ↳ **`IActivityMenuItemProps`**

## Properties

### className

• `Optional` **className**: `string`

#### Inherited from

[IMenuItemProps](molecule.component.IMenuItemProps).[className](molecule.component.IMenuItemProps#classname)

#### Defined in

[common/types.ts:4](https://github.com/DTStack/molecule/blob/927b7d39/src/common/types.ts#L4)

---

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IMenuItemProps](molecule.component.IMenuItemProps).[disabled](molecule.component.IMenuItemProps#disabled)

#### Defined in

[components/menu/menuItem.tsx:26](https://github.com/DTStack/molecule/blob/927b7d39/src/components/menu/menuItem.tsx#L26)

---

### icon

• `Optional` **icon**: `string` \| `Element`

The name of icon

#### Inherited from

[IMenuItemProps](molecule.component.IMenuItemProps).[icon](molecule.component.IMenuItemProps#icon)

#### Defined in

[components/menu/menuItem.tsx:20](https://github.com/DTStack/molecule/blob/927b7d39/src/components/menu/menuItem.tsx#L20)

---

### id

• **id**: `UniqueId`

#### Overrides

[IMenuItemProps](molecule.component.IMenuItemProps).[id](molecule.component.IMenuItemProps#id)

#### Defined in

[model/workbench/activityBar.ts:32](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/activityBar.ts#L32)

---

### keybinding

• `Optional` **keybinding**: `string`

The description of keybinding
example: ⇧⌘P

#### Inherited from

[IMenuItemProps](molecule.component.IMenuItemProps).[keybinding](molecule.component.IMenuItemProps#keybinding)

#### Defined in

[components/menu/menuItem.tsx:31](https://github.com/DTStack/molecule/blob/927b7d39/src/components/menu/menuItem.tsx#L31)

---

### name

• `Optional` **name**: `string`

Item Name

#### Inherited from

[IMenuItemProps](molecule.component.IMenuItemProps).[name](molecule.component.IMenuItemProps#name)

#### Defined in

[components/menu/menuItem.tsx:25](https://github.com/DTStack/molecule/blob/927b7d39/src/components/menu/menuItem.tsx#L25)

---

### role

• `Optional` **role**: `string`

#### Inherited from

[IMenuItemProps](molecule.component.IMenuItemProps).[role](molecule.component.IMenuItemProps#role)

#### Defined in

[common/types.ts:5](https://github.com/DTStack/molecule/blob/927b7d39/src/common/types.ts#L5)

---

### sortIndex

• `Optional` **sortIndex**: `number`

#### Inherited from

[IMenuItemProps](molecule.component.IMenuItemProps).[sortIndex](molecule.component.IMenuItemProps#sortindex)

#### Defined in

[components/menu/menuItem.tsx:37](https://github.com/DTStack/molecule/blob/927b7d39/src/components/menu/menuItem.tsx#L37)

---

### style

• `Optional` **style**: `CSSProperties`

#### Inherited from

[IMenuItemProps](molecule.component.IMenuItemProps).[style](molecule.component.IMenuItemProps#style)

#### Defined in

[common/types.ts:3](https://github.com/DTStack/molecule/blob/927b7d39/src/common/types.ts#L3)

---

### title

• `Optional` **title**: `string`

#### Inherited from

[IMenuItemProps](molecule.component.IMenuItemProps).[title](molecule.component.IMenuItemProps#title)

#### Defined in

[common/types.ts:2](https://github.com/DTStack/molecule/blob/927b7d39/src/common/types.ts#L2)

---

### type

• `Optional` **type**: `"divider"`

#### Inherited from

[IMenuItemProps](molecule.component.IMenuItemProps).[type](molecule.component.IMenuItemProps#type)

#### Defined in

[components/menu/menuItem.tsx:21](https://github.com/DTStack/molecule/blob/927b7d39/src/components/menu/menuItem.tsx#L21)

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

[components/menu/menuItem.tsx:36](https://github.com/DTStack/molecule/blob/927b7d39/src/components/menu/menuItem.tsx#L36)

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

[components/menu/menuItem.tsx:35](https://github.com/DTStack/molecule/blob/927b7d39/src/components/menu/menuItem.tsx#L35)
