---
id: 'molecule.INotificationController'
title: 'Interface: INotificationController'
sidebar_label: 'INotificationController'
custom_edit_url: null
---

[molecule](../namespaces/molecule).INotificationController

## Methods

### onActionBarClick

▸ `Optional` **onActionBarClick**(`event`, `item`): `void`

#### Parameters

| Name    | Type                                                                    |
| :------ | :---------------------------------------------------------------------- |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\>                                  |
| `item`  | [`IActionBarItemProps`](molecule.component.IActionBarItemProps)<`any`\> |

#### Returns

`void`

#### Defined in

[src/controller/notification.tsx:30](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/notification.tsx#L30)

---

### onClick

▸ `Optional` **onClick**(`e`, `item`): `void`

#### Parameters

| Name   | Type                                                |
| :----- | :-------------------------------------------------- |
| `e`    | `MouseEvent`<`Element`, `MouseEvent`\>              |
| `item` | [`IStatusBarItem`](molecule.IStatusBarItem)<`any`\> |

#### Returns

`void`

#### Defined in

[src/controller/notification.tsx:29](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/notification.tsx#L29)

---

### onCloseNotification

▸ **onCloseNotification**(`item`): `void`

#### Parameters

| Name   | Type                                                      |
| :----- | :-------------------------------------------------------- |
| `item` | [`INotificationItem`](molecule.INotificationItem)<`any`\> |

#### Returns

`void`

#### Defined in

[src/controller/notification.tsx:28](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/notification.tsx#L28)

---

### toggleNotifications

▸ **toggleNotifications**(): `void`

Toggle the Notifications visibility

#### Returns

`void`

#### Defined in

[src/controller/notification.tsx:37](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/notification.tsx#L37)
