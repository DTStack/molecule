---
id: 'molecule.INotificationService'
title: 'Interface: INotificationService'
sidebar_label: 'INotificationService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).INotificationService

## Hierarchy

-   [`Component`](../classes/molecule.react.Component)<[`INotification`](molecule.model.INotification)\>

    ↳ **`INotificationService`**

## Implemented by

-   [`NotificationService`](../classes/molecule.NotificationService)

## Properties

### state

• `Protected` `Abstract` **state**: [`INotification`](molecule.model.INotification)<`any`\>

#### Inherited from

[Component](../classes/molecule.react.Component).[state](../classes/molecule.react.Component#state)

#### Defined in

[react/component.ts:44](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L44)

## Methods

### add

▸ **add**<`T`\>(`items`): `null` \| [`INotificationItem`](molecule.model.INotificationItem)<`T`\>[]

Add new notification items

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                                                            |
| :------ | :-------------------------------------------------------------- |
| `items` | [`INotificationItem`](molecule.model.INotificationItem)<`T`\>[] |

#### Returns

`null` \| [`INotificationItem`](molecule.model.INotificationItem)<`T`\>[]

#### Defined in

[services/notificationService.ts:20](https://github.com/DTStack/molecule/blob/927b7d39/src/services/notificationService.ts#L20)

---

### clear

▸ **clear**(): `void`

Clear the notifications

#### Returns

`void`

#### Defined in

[services/notificationService.ts:38](https://github.com/DTStack/molecule/blob/927b7d39/src/services/notificationService.ts#L38)

---

### count

▸ **count**(`name`): `number`

Count the service event

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | Event name  |

#### Returns

`number`

#### Inherited from

[Component](../classes/molecule.react.Component).[count](../classes/molecule.react.Component#count)

#### Defined in

[common/event/eventBus.ts:28](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L28)

---

### emit

▸ **emit**(`name`, ...`args`): `void`

Emit the service event

#### Parameters

| Name      | Type     | Description |
| :-------- | :------- | :---------- |
| `name`    | `string` | Event name  |
| `...args` | `any`    | Arguments   |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[emit](../classes/molecule.react.Component#emit)

#### Defined in

[common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

Force to update the Component

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[forceUpdate](../classes/molecule.react.Component#forceupdate)

#### Defined in

[react/component.ts:81](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L81)

---

### getState

▸ **getState**(): [`INotification`](molecule.model.INotification)<`any`\>

Get the Component state

#### Returns

[`INotification`](molecule.model.INotification)<`any`\>

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

#### Defined in

[react/component.ts:85](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L85)

---

### onUpdateState

▸ **onUpdateState**(`listener`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                                                   |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `listener` | (`prevState`: [`INotification`](molecule.model.INotification)<`any`\>, `nextState`: [`INotification`](molecule.model.INotification)<`any`\>) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

#### Defined in

[react/component.ts:73](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L73)

---

### remove

▸ **remove**(`id`): `void`

Remove the specific notification item by id

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `id` | `UniqueId` |

#### Returns

`void`

#### Defined in

[services/notificationService.ts:25](https://github.com/DTStack/molecule/blob/927b7d39/src/services/notificationService.ts#L25)

---

### removeOnUpdateState

▸ **removeOnUpdateState**(`listener?`): `void`

Remove the Component update event listening, default is remove all,
also you can remove one by pass the listener

#### Parameters

| Name        | Type       |
| :---------- | :--------- |
| `listener?` | `Function` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[removeOnUpdateState](../classes/molecule.react.Component#removeonupdatestate)

#### Defined in

[react/component.ts:77](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L77)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type                                                    |
| :----------- | :------------------------------------------------------ |
| `nextState?` | [`INotification`](molecule.model.INotification)<`any`\> |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[render](../classes/molecule.react.Component#render)

#### Defined in

[react/component.ts:69](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L69)

---

### reset

▸ **reset**(): `void`

Reset notifications, this will clear the pending notifications

#### Returns

`void`

#### Defined in

[services/notificationService.ts:42](https://github.com/DTStack/molecule/blob/927b7d39/src/services/notificationService.ts#L42)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                                                                   | Description                |
| :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`INotification`](molecule.model.INotification)<`any`\>\>                                                                                    | update target state values |
| `callback?` | (`prevState`: [`INotification`](molecule.model.INotification)<`any`\>, `nextState`: [`INotification`](molecule.model.INotification)<`any`\>) => `void` | -                          |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[setState](../classes/molecule.react.Component#setstate)

#### Defined in

[react/component.ts:56](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L56)

---

### subscribe

▸ **subscribe**(`name`, `listener`): `void`

Subscribe the service event

#### Parameters

| Name       | Type                   | Description       |
| :--------- | :--------------------- | :---------------- |
| `name`     | `string` \| `string`[] | Event name        |
| `listener` | `Function`             | Listener function |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[subscribe](../classes/molecule.react.Component#subscribe)

#### Defined in

[common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L11)

---

### toggleNotification

▸ **toggleNotification**(): `void`

Toggle the Notification view between display or hidden

#### Returns

`void`

#### Defined in

[services/notificationService.ts:34](https://github.com/DTStack/molecule/blob/927b7d39/src/services/notificationService.ts#L34)

---

### unsubscribe

▸ **unsubscribe**(`name`, `listener?`): `void`

Unsubscribe the specific event and the listener function

#### Parameters

| Name        | Type       | Description                                                                 |
| :---------- | :--------- | :-------------------------------------------------------------------------- |
| `name`      | `any`      | The event name                                                              |
| `listener?` | `Function` | optional, it unsubscribes events via name if not pass the listener function |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[unsubscribe](../classes/molecule.react.Component#unsubscribe)

#### Defined in

[common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L37)

---

### update

▸ **update**<`T`\>(`item`): `null` \| [`INotificationItem`](molecule.model.INotificationItem)<`T`\>

Update the specific notification item

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name   | Type                                                          | Description                                 |
| :----- | :------------------------------------------------------------ | :------------------------------------------ |
| `item` | [`INotificationItem`](molecule.model.INotificationItem)<`T`\> | notification item, the id field is required |

#### Returns

`null` \| [`INotificationItem`](molecule.model.INotificationItem)<`T`\>

#### Defined in

[services/notificationService.ts:30](https://github.com/DTStack/molecule/blob/927b7d39/src/services/notificationService.ts#L30)
