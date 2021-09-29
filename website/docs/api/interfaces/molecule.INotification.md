---
id: 'molecule.INotification'
title: 'Interface: INotification<T>'
sidebar_label: 'INotification'
custom_edit_url: null
---

[molecule](../namespaces/molecule).INotification

## Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

## Hierarchy

-   [`IStatusBarItem`](molecule.IStatusBarItem)

    ↳ **`INotification`**

## Properties

### actionBar

• `Optional` **actionBar**: [`IActionBarItemProps`](molecule.component.IActionBarItemProps)<`any`\>[]

#### Defined in

[src/model/notification.tsx:21](https://github.com/DTStack/molecule/blob/1b0aa04/src/model/notification.tsx#L21)

---

### className

• `Optional` **className**: `string`

#### Inherited from

[IStatusBarItem](molecule.IStatusBarItem).[className](molecule.IStatusBarItem#classname)

#### Defined in

[src/typings/index.d.ts:10](https://github.com/DTStack/molecule/blob/1b0aa04/src/typings/index.d.ts#L10)

---

### data

• `Optional` **data**: [`INotificationItem`](molecule.INotificationItem)<`T`\>[]

#### Overrides

[IStatusBarItem](molecule.IStatusBarItem).[data](molecule.IStatusBarItem#data)

#### Defined in

[src/model/notification.tsx:19](https://github.com/DTStack/molecule/blob/1b0aa04/src/model/notification.tsx#L19)

---

### id

• **id**: `string`

#### Inherited from

[IStatusBarItem](molecule.IStatusBarItem).[id](molecule.IStatusBarItem#id)

#### Defined in

[src/model/workbench/statusBar.tsx:11](https://github.com/DTStack/molecule/blob/1b0aa04/src/model/workbench/statusBar.tsx#L11)

---

### name

• `Optional` **name**: `string`

#### Inherited from

[IStatusBarItem](molecule.IStatusBarItem).[name](molecule.IStatusBarItem#name)

#### Defined in

[src/model/workbench/statusBar.tsx:16](https://github.com/DTStack/molecule/blob/1b0aa04/src/model/workbench/statusBar.tsx#L16)

---

### showNotifications

• `Optional` **showNotifications**: `boolean`

#### Defined in

[src/model/notification.tsx:20](https://github.com/DTStack/molecule/blob/1b0aa04/src/model/notification.tsx#L20)

---

### sortIndex

• `Optional` **sortIndex**: `number`

#### Inherited from

[IStatusBarItem](molecule.IStatusBarItem).[sortIndex](molecule.IStatusBarItem#sortindex)

#### Defined in

[src/model/workbench/statusBar.tsx:12](https://github.com/DTStack/molecule/blob/1b0aa04/src/model/workbench/statusBar.tsx#L12)

---

### style

• `Optional` **style**: `CSSProperties`

#### Inherited from

[IStatusBarItem](molecule.IStatusBarItem).[style](molecule.IStatusBarItem#style)

#### Defined in

[src/typings/index.d.ts:9](https://github.com/DTStack/molecule/blob/1b0aa04/src/typings/index.d.ts#L9)

---

### title

• `Optional` **title**: `string`

#### Inherited from

[IStatusBarItem](molecule.IStatusBarItem).[title](molecule.IStatusBarItem#title)

#### Defined in

[src/typings/index.d.ts:8](https://github.com/DTStack/molecule/blob/1b0aa04/src/typings/index.d.ts#L8)

## Methods

### onClick

▸ `Optional` **onClick**(`e`, `item?`): `any`

#### Parameters

| Name    | Type                                                |
| :------ | :-------------------------------------------------- |
| `e`     | `MouseEvent`<`Element`, `MouseEvent`\>              |
| `item?` | [`IStatusBarItem`](molecule.IStatusBarItem)<`any`\> |

#### Returns

`any`

#### Inherited from

[IStatusBarItem](molecule.IStatusBarItem).[onClick](molecule.IStatusBarItem#onclick)

#### Defined in

[src/model/workbench/statusBar.tsx:14](https://github.com/DTStack/molecule/blob/1b0aa04/src/model/workbench/statusBar.tsx#L14)

---

### render

▸ `Optional` **render**(`item`): `ReactNode`

#### Parameters

| Name   | Type                                                |
| :----- | :-------------------------------------------------- |
| `item` | [`IStatusBarItem`](molecule.IStatusBarItem)<`any`\> |

#### Returns

`ReactNode`

#### Inherited from

[IStatusBarItem](molecule.IStatusBarItem).[render](molecule.IStatusBarItem#render)

#### Defined in

[src/model/workbench/statusBar.tsx:15](https://github.com/DTStack/molecule/blob/1b0aa04/src/model/workbench/statusBar.tsx#L15)
