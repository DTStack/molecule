---
id: 'molecule.model.INotificationItem'
title: 'Interface: INotificationItem<T>'
sidebar_label: 'INotificationItem'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[model](../namespaces/molecule.model).INotificationItem

## Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

## Properties

### id

• **id**: `UniqueId`

#### Defined in

[src/model/notification.tsx:12](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/notification.tsx#L12)

---

### status

• `Optional` **status**: [`NotificationStatus`](../enums/molecule.model.NotificationStatus)

#### Defined in

[src/model/notification.tsx:15](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/notification.tsx#L15)

---

### value

• **value**: `T`

#### Defined in

[src/model/notification.tsx:13](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/notification.tsx#L13)

## Methods

### render

▸ `Optional` **render**(`item`): `ReactNode`

#### Parameters

| Name   | Type                                                            |
| :----- | :-------------------------------------------------------------- |
| `item` | [`INotificationItem`](molecule.model.INotificationItem)<`any`\> |

#### Returns

`ReactNode`

#### Defined in

[src/model/notification.tsx:14](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/notification.tsx#L14)
