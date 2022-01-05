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

[src/common/event/eventBus.ts:28](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L28)

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

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L20)

---

### initView

▸ `Optional` `Abstract` **initView**(): `void`

#### Returns

`void`

#### Inherited from

Partial.initView

#### Defined in

[src/react/controller.ts:4](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/controller.ts#L4)

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

[src/controller/notification.tsx:22](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/notification.tsx#L22)

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

[src/controller/notification.tsx:21](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/notification.tsx#L21)

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

[src/controller/notification.tsx:20](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/notification.tsx#L20)

---

### subscribe

▸ `Optional` **subscribe**(`name`, `callback`): `void`

Subscribe the service event

#### Parameters

| Name       | Type                   | Description       |
| :--------- | :--------------------- | :---------------- |
| `name`     | `string` \| `string`[] | Event name        |
| `callback` | `Function`             | Callback function |

#### Returns

`void`

#### Inherited from

Partial.subscribe

#### Defined in

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L11)

---

### toggleNotifications

▸ **toggleNotifications**(): `void`

Toggle the Notifications visibility

#### Returns

`void`

#### Defined in

[src/controller/notification.tsx:29](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/notification.tsx#L29)

---

### unsubscribe

▸ `Optional` **unsubscribe**(`name`): `void`

Unsubscribe the specific event

#### Parameters

| Name   | Type  | Description    |
| :----- | :---- | :------------- |
| `name` | `any` | The event name |

#### Returns

`void`

#### Inherited from

Partial.unsubscribe

#### Defined in

[src/common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L37)
