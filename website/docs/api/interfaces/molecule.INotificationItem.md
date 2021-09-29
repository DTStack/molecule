---
id: 'molecule.INotificationItem'
title: 'Interface: INotificationItem<T>'
sidebar_label: 'INotificationItem'
custom_edit_url: null
---

[molecule](../namespaces/molecule).INotificationItem

## Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

## Properties

### id

• `Optional` **id**: `number`

#### Defined in

[src/model/notification.tsx:12](https://github.com/DTStack/molecule/blob/1b0aa04/src/model/notification.tsx#L12)

---

### status

• `Optional` **status**: `NotificationStatus`

#### Defined in

[src/model/notification.tsx:15](https://github.com/DTStack/molecule/blob/1b0aa04/src/model/notification.tsx#L15)

---

### value

• **value**: `T`

#### Defined in

[src/model/notification.tsx:13](https://github.com/DTStack/molecule/blob/1b0aa04/src/model/notification.tsx#L13)

## Methods

### render

▸ `Optional` **render**(`item`): `ReactNode`

#### Parameters

| Name   | Type                                                      |
| :----- | :-------------------------------------------------------- |
| `item` | [`INotificationItem`](molecule.INotificationItem)<`any`\> |

#### Returns

`ReactNode`

#### Defined in

[src/model/notification.tsx:14](https://github.com/DTStack/molecule/blob/1b0aa04/src/model/notification.tsx#L14)
