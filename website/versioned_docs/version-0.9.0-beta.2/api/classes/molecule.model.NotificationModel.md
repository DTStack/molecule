---
id: 'molecule.model.NotificationModel'
title: 'Class: NotificationModel<T>'
sidebar_label: 'NotificationModel'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[model](../namespaces/molecule.model).NotificationModel

## Type parameters

| Name |
| :--- |
| `T`  |

## Implements

-   [`INotification`](../interfaces/molecule.model.INotification)<`T`\>

## Constructors

### constructor

• **new NotificationModel**<`T`\>(`id?`, `name?`, `data?`, `sortIndex?`, `showNotifications?`, `actionBar?`, `render`)

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name                | Type                                                                                    | Default value |
| :------------------ | :-------------------------------------------------------------------------------------- | :------------ |
| `id`                | `UniqueId`                                                                              | `''`          |
| `name`              | `string`                                                                                | `''`          |
| `data`              | [`INotificationItem`](../interfaces/molecule.model.INotificationItem)<`T`\>[]           | `[]`          |
| `sortIndex`         | `number`                                                                                | `1`           |
| `showNotifications` | `boolean`                                                                               | `false`       |
| `actionBar`         | [`IActionBarItemProps`](../interfaces/molecule.component.IActionBarItemProps)<`any`\>[] | `[]`          |
| `render`            | () => `ReactNode`                                                                       | `undefined`   |

#### Defined in

[src/model/notification.tsx:33](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/notification.tsx#L33)

## Properties

### actionBar

• **actionBar**: [`IActionBarItemProps`](../interfaces/molecule.component.IActionBarItemProps)<`any`\>[]

#### Implementation of

[INotification](../interfaces/molecule.model.INotification).[actionBar](../interfaces/molecule.model.INotification#actionbar)

#### Defined in

[src/model/notification.tsx:31](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/notification.tsx#L31)

---

### data

• **data**: [`INotificationItem`](../interfaces/molecule.model.INotificationItem)<`T`\>[]

#### Implementation of

[INotification](../interfaces/molecule.model.INotification).[data](../interfaces/molecule.model.INotification#data)

#### Defined in

[src/model/notification.tsx:27](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/notification.tsx#L27)

---

### id

• **id**: `UniqueId`

#### Implementation of

[INotification](../interfaces/molecule.model.INotification).[id](../interfaces/molecule.model.INotification#id)

#### Defined in

[src/model/notification.tsx:25](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/notification.tsx#L25)

---

### name

• **name**: `string`

#### Implementation of

[INotification](../interfaces/molecule.model.INotification).[name](../interfaces/molecule.model.INotification#name)

#### Defined in

[src/model/notification.tsx:26](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/notification.tsx#L26)

---

### render

• **render**: () => `ReactNode`

#### Type declaration

▸ (): `ReactNode`

##### Returns

`ReactNode`

#### Implementation of

[INotification](../interfaces/molecule.model.INotification).[render](../interfaces/molecule.model.INotification#render)

#### Defined in

[src/model/notification.tsx:29](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/notification.tsx#L29)

---

### showNotifications

• **showNotifications**: `boolean`

#### Implementation of

[INotification](../interfaces/molecule.model.INotification).[showNotifications](../interfaces/molecule.model.INotification#shownotifications)

#### Defined in

[src/model/notification.tsx:30](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/notification.tsx#L30)

---

### sortIndex

• **sortIndex**: `number`

#### Implementation of

[INotification](../interfaces/molecule.model.INotification).[sortIndex](../interfaces/molecule.model.INotification#sortindex)

#### Defined in

[src/model/notification.tsx:28](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/notification.tsx#L28)
