---
id: 'molecule.model.IMenuBarItem'
title: 'Interface: IMenuBarItem'
sidebar_label: 'IMenuBarItem'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[model](../namespaces/molecule.model).IMenuBarItem

## Properties

### data

• `Optional` **data**: [`ISubMenuProps`](molecule.component.ISubMenuProps)[]

#### Defined in

[model/workbench/menuBar.ts:21](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/menuBar.ts#L21)

---

### disabled

• `Optional` **disabled**: `boolean`

#### Defined in

[model/workbench/menuBar.ts:23](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/menuBar.ts#L23)

---

### icon

• `Optional` **icon**: `string` \| `Element`

#### Defined in

[model/workbench/menuBar.ts:20](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/menuBar.ts#L20)

---

### id

• `Optional` **id**: `UniqueId`

#### Defined in

[model/workbench/menuBar.ts:18](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/menuBar.ts#L18)

---

### name

• `Optional` **name**: `string`

#### Defined in

[model/workbench/menuBar.ts:19](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/menuBar.ts#L19)

## Methods

### render

▸ `Optional` **render**(`data`): `Element` \| `ReactNode`

#### Parameters

| Name   | Type                                                  |
| :----- | :---------------------------------------------------- |
| `data` | [`IMenuItemProps`](molecule.component.IMenuItemProps) |

#### Returns

`Element` \| `ReactNode`

#### Defined in

[model/workbench/menuBar.ts:22](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/menuBar.ts#L22)
