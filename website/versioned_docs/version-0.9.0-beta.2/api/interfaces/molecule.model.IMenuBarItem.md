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

[src/model/workbench/menuBar.ts:20](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/menuBar.ts#L20)

---

### icon

• `Optional` **icon**: `string` \| `Element`

#### Defined in

[src/model/workbench/menuBar.ts:19](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/menuBar.ts#L19)

---

### id

• `Optional` **id**: `UniqueId`

#### Defined in

[src/model/workbench/menuBar.ts:17](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/menuBar.ts#L17)

---

### name

• `Optional` **name**: `string`

#### Defined in

[src/model/workbench/menuBar.ts:18](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/menuBar.ts#L18)

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

[src/model/workbench/menuBar.ts:21](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/menuBar.ts#L21)
