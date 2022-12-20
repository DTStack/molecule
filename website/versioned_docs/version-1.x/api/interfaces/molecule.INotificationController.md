---
id: 'molecule.INotificationController'
title: 'Interface: INotificationController'
sidebar_label: 'INotificationController'
custom_edit_url: null
---

[molecule](../namespaces/molecule).INotificationController

## Hierarchy

-   `Partial`<[`Controller`](../classes/molecule.react.Controller)\>

    ↳ **`INotificationController`**

## Methods

### count

▸ `Optional` **count**(`name`): `number`

Count the service event

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | Event name  |

#### Returns

`number`

#### Inherited from

Partial.count

#### Defined in

[common/event/eventBus.ts:28](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L28)

---

### emit

▸ `Optional` **emit**(`name`, ...`args`): `void`

Emit the service event

#### Parameters

| Name      | Type     | Description |
| :-------- | :------- | :---------- |
| `name`    | `string` | Event name  |
| `...args` | `any`    | Arguments   |

#### Returns

`void`

#### Inherited from

Partial.emit

#### Defined in

[common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L20)

---

### initView

▸ `Optional` `Abstract` **initView**(): `void`

#### Returns

`void`

#### Inherited from

Partial.initView

#### Defined in

[react/controller.ts:4](https://github.com/DTStack/molecule/blob/927b7d39/src/react/controller.ts#L4)

---

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

[controller/notification.tsx:22](https://github.com/DTStack/molecule/blob/927b7d39/src/controller/notification.tsx#L22)

---

### onClick

▸ `Optional` **onClick**(`e`, `item`): `void`

#### Parameters

| Name   | Type                                                      |
| :----- | :-------------------------------------------------------- |
| `e`    | `MouseEvent`<`Element`, `MouseEvent`\>                    |
| `item` | [`IStatusBarItem`](molecule.model.IStatusBarItem)<`any`\> |

#### Returns

`void`

#### Defined in

[controller/notification.tsx:21](https://github.com/DTStack/molecule/blob/927b7d39/src/controller/notification.tsx#L21)

---

### onCloseNotification

▸ **onCloseNotification**(`item`): `void`

#### Parameters

| Name   | Type                                                            |
| :----- | :-------------------------------------------------------------- |
| `item` | [`INotificationItem`](molecule.model.INotificationItem)<`any`\> |

#### Returns

`void`

#### Defined in

[controller/notification.tsx:20](https://github.com/DTStack/molecule/blob/927b7d39/src/controller/notification.tsx#L20)

---

### subscribe

▸ `Optional` **subscribe**(`name`, `listener`): `void`

Subscribe the service event

#### Parameters

| Name       | Type                   | Description       |
| :--------- | :--------------------- | :---------------- |
| `name`     | `string` \| `string`[] | Event name        |
| `listener` | `Function`             | Listener function |

#### Returns

`void`

#### Inherited from

Partial.subscribe

#### Defined in

[common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L11)

---

### toggleNotifications

▸ **toggleNotifications**(): `void`

Toggle the Notifications visibility

#### Returns

`void`

#### Defined in

[controller/notification.tsx:29](https://github.com/DTStack/molecule/blob/927b7d39/src/controller/notification.tsx#L29)

---

### unsubscribe

▸ `Optional` **unsubscribe**(`name`, `listener?`): `void`

Unsubscribe the specific event and the listener function

#### Parameters

| Name        | Type       | Description                                                                 |
| :---------- | :--------- | :-------------------------------------------------------------------------- |
| `name`      | `any`      | The event name                                                              |
| `listener?` | `Function` | optional, it unsubscribes events via name if not pass the listener function |

#### Returns

`void`

#### Inherited from

Partial.unsubscribe

#### Defined in

[common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L37)
