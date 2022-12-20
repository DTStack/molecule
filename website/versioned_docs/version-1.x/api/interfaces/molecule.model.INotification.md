---
id: 'molecule.model.INotification'
title: 'Interface: INotification<T>'
sidebar_label: 'INotification'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[model](../namespaces/molecule.model).INotification

## Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

## Hierarchy

-   [`IStatusBarItem`](molecule.model.IStatusBarItem)<[`INotificationItem`](molecule.model.INotificationItem)<`T`\>[]\>

    ↳ **`INotification`**

## Implemented by

-   [`NotificationModel`](../classes/molecule.model.NotificationModel)

## Properties

### actionBar

• `Optional` **actionBar**: [`IActionBarItemProps`](molecule.component.IActionBarItemProps)<`any`\>[]

#### Defined in

[model/notification.tsx:21](https://github.com/DTStack/molecule/blob/927b7d39/src/model/notification.tsx#L21)

---

### className

• `Optional` **className**: `string`

#### Inherited from

[IStatusBarItem](molecule.model.IStatusBarItem).[className](molecule.model.IStatusBarItem#classname)

#### Defined in

[common/types.ts:4](https://github.com/DTStack/molecule/blob/927b7d39/src/common/types.ts#L4)

---

### data

• `Optional` **data**: [`INotificationItem`](molecule.model.INotificationItem)<`T`\>[]

#### Inherited from

[IStatusBarItem](molecule.model.IStatusBarItem).[data](molecule.model.IStatusBarItem#data)

#### Defined in

[model/workbench/statusBar.tsx:13](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/statusBar.tsx#L13)

---

### id

• **id**: `UniqueId`

#### Inherited from

[IStatusBarItem](molecule.model.IStatusBarItem).[id](molecule.model.IStatusBarItem#id)

#### Defined in

[model/workbench/statusBar.tsx:11](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/statusBar.tsx#L11)

---

### name

• `Optional` **name**: `string`

#### Inherited from

[IStatusBarItem](molecule.model.IStatusBarItem).[name](molecule.model.IStatusBarItem#name)

#### Defined in

[model/workbench/statusBar.tsx:16](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/statusBar.tsx#L16)

---

### role

• `Optional` **role**: `string`

#### Inherited from

[IStatusBarItem](molecule.model.IStatusBarItem).[role](molecule.model.IStatusBarItem#role)

#### Defined in

[common/types.ts:5](https://github.com/DTStack/molecule/blob/927b7d39/src/common/types.ts#L5)

---

### showNotifications

• `Optional` **showNotifications**: `boolean`

#### Defined in

[model/notification.tsx:20](https://github.com/DTStack/molecule/blob/927b7d39/src/model/notification.tsx#L20)

---

### sortIndex

• `Optional` **sortIndex**: `number`

#### Inherited from

[IStatusBarItem](molecule.model.IStatusBarItem).[sortIndex](molecule.model.IStatusBarItem#sortindex)

#### Defined in

[model/workbench/statusBar.tsx:12](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/statusBar.tsx#L12)

---

### style

• `Optional` **style**: `CSSProperties`

#### Inherited from

[IStatusBarItem](molecule.model.IStatusBarItem).[style](molecule.model.IStatusBarItem#style)

#### Defined in

[common/types.ts:3](https://github.com/DTStack/molecule/blob/927b7d39/src/common/types.ts#L3)

---

### title

• `Optional` **title**: `string`

#### Inherited from

[IStatusBarItem](molecule.model.IStatusBarItem).[title](molecule.model.IStatusBarItem#title)

#### Defined in

[common/types.ts:2](https://github.com/DTStack/molecule/blob/927b7d39/src/common/types.ts#L2)

## Methods

### onClick

▸ `Optional` **onClick**(`e`, `item?`): `any`

#### Parameters

| Name    | Type                                                      |
| :------ | :-------------------------------------------------------- |
| `e`     | `MouseEvent`<`Element`, `MouseEvent`\>                    |
| `item?` | [`IStatusBarItem`](molecule.model.IStatusBarItem)<`any`\> |

#### Returns

`any`

#### Inherited from

[IStatusBarItem](molecule.model.IStatusBarItem).[onClick](molecule.model.IStatusBarItem#onclick)

#### Defined in

[model/workbench/statusBar.tsx:14](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/statusBar.tsx#L14)

---

### render

▸ `Optional` **render**(`item`): `ReactNode`

#### Parameters

| Name   | Type                                                      |
| :----- | :-------------------------------------------------------- |
| `item` | [`IStatusBarItem`](molecule.model.IStatusBarItem)<`any`\> |

#### Returns

`ReactNode`

#### Inherited from

[IStatusBarItem](molecule.model.IStatusBarItem).[render](molecule.model.IStatusBarItem#render)

#### Defined in

[model/workbench/statusBar.tsx:15](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/statusBar.tsx#L15)
