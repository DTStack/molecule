---
id: 'molecule.NotificationService'
title: 'Class: NotificationService'
sidebar_label: 'NotificationService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).NotificationService

## Hierarchy

-   [`Component`](molecule.react.Component)<[`INotification`](../interfaces/molecule.model.INotification)\>

    ↳ **`NotificationService`**

## Implements

-   [`INotificationService`](../interfaces/molecule.INotificationService)

## Constructors

### constructor

• **new NotificationService**()

#### Overrides

[Component](molecule.react.Component).[constructor](molecule.react.Component#constructor)

#### Defined in

[services/notificationService.ts:52](https://github.com/DTStack/molecule/blob/927b7d39/src/services/notificationService.ts#L52)

## Properties

### state

• `Protected` **state**: [`INotification`](../interfaces/molecule.model.INotification)<`any`\>

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[state](../interfaces/molecule.INotificationService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[services/notificationService.ts:50](https://github.com/DTStack/molecule/blob/927b7d39/src/services/notificationService.ts#L50)

## Methods

### add

▸ **add**<`T`\>(`items`): `null` \| [`INotificationItem`](../interfaces/molecule.model.INotificationItem)<`T`\>[]

Add new notification items

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                                                                          |
| :------ | :---------------------------------------------------------------------------- |
| `items` | [`INotificationItem`](../interfaces/molecule.model.INotificationItem)<`T`\>[] |

#### Returns

`null` \| [`INotificationItem`](../interfaces/molecule.model.INotificationItem)<`T`\>[]

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[add](../interfaces/molecule.INotificationService#add)

#### Defined in

[services/notificationService.ts:106](https://github.com/DTStack/molecule/blob/927b7d39/src/services/notificationService.ts#L106)

---

### clear

▸ **clear**(): `void`

Clear the notifications

#### Returns

`void`

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[clear](../interfaces/molecule.INotificationService#clear)

#### Defined in

[services/notificationService.ts:125](https://github.com/DTStack/molecule/blob/927b7d39/src/services/notificationService.ts#L125)

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

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[count](../interfaces/molecule.INotificationService#count)

#### Inherited from

[Component](molecule.react.Component).[count](molecule.react.Component#count)

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

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[emit](../interfaces/molecule.INotificationService#emit)

#### Inherited from

[Component](molecule.react.Component).[emit](molecule.react.Component#emit)

#### Defined in

[common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

Force to update the Component

#### Returns

`void`

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[forceUpdate](../interfaces/molecule.INotificationService#forceupdate)

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

#### Defined in

[react/component.ts:81](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L81)

---

### getState

▸ **getState**(): [`INotification`](../interfaces/molecule.model.INotification)<`any`\>

Get the Component state

#### Returns

[`INotification`](../interfaces/molecule.model.INotification)<`any`\>

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[getState](../interfaces/molecule.INotificationService#getstate)

#### Inherited from

[Component](molecule.react.Component).[getState](molecule.react.Component#getstate)

#### Defined in

[react/component.ts:85](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L85)

---

### onUpdateState

▸ **onUpdateState**(`listener`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                                                                               |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `listener` | (`prevState`: [`INotification`](../interfaces/molecule.model.INotification)<`any`\>, `nextState`: [`INotification`](../interfaces/molecule.model.INotification)<`any`\>) => `void` |

#### Returns

`void`

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[onUpdateState](../interfaces/molecule.INotificationService#onupdatestate)

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

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

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[remove](../interfaces/molecule.INotificationService#remove)

#### Defined in

[services/notificationService.ts:84](https://github.com/DTStack/molecule/blob/927b7d39/src/services/notificationService.ts#L84)

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

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[removeOnUpdateState](../interfaces/molecule.INotificationService#removeonupdatestate)

#### Inherited from

[Component](molecule.react.Component).[removeOnUpdateState](molecule.react.Component#removeonupdatestate)

#### Defined in

[react/component.ts:77](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L77)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type                                                                  |
| :----------- | :-------------------------------------------------------------------- |
| `nextState?` | [`INotification`](../interfaces/molecule.model.INotification)<`any`\> |

#### Returns

`void`

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[render](../interfaces/molecule.INotificationService#render)

#### Inherited from

[Component](molecule.react.Component).[render](molecule.react.Component#render)

#### Defined in

[react/component.ts:69](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L69)

---

### reset

▸ **reset**(): `void`

Reset notifications, this will clear the pending notifications

#### Returns

`void`

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[reset](../interfaces/molecule.INotificationService#reset)

#### Defined in

[services/notificationService.ts:131](https://github.com/DTStack/molecule/blob/927b7d39/src/services/notificationService.ts#L131)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                                                                                               | Description                |
| :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`INotification`](../interfaces/molecule.model.INotification)<`any`\>\>                                                                                                  | update target state values |
| `callback?` | (`prevState`: [`INotification`](../interfaces/molecule.model.INotification)<`any`\>, `nextState`: [`INotification`](../interfaces/molecule.model.INotification)<`any`\>) => `void` | -                          |

#### Returns

`void`

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[setState](../interfaces/molecule.INotificationService#setstate)

#### Inherited from

[Component](molecule.react.Component).[setState](molecule.react.Component#setstate)

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

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[subscribe](../interfaces/molecule.INotificationService#subscribe)

#### Inherited from

[Component](molecule.react.Component).[subscribe](molecule.react.Component#subscribe)

#### Defined in

[common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L11)

---

### toggleNotification

▸ **toggleNotification**(): `void`

Toggle the Notification view between display or hidden

#### Returns

`void`

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[toggleNotification](../interfaces/molecule.INotificationService#togglenotification)

#### Defined in

[services/notificationService.ts:57](https://github.com/DTStack/molecule/blob/927b7d39/src/services/notificationService.ts#L57)

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

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[unsubscribe](../interfaces/molecule.INotificationService#unsubscribe)

#### Inherited from

[Component](molecule.react.Component).[unsubscribe](molecule.react.Component#unsubscribe)

#### Defined in

[common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L37)

---

### update

▸ **update**<`T`\>(`item`): `null` \| [`INotificationItem`](../interfaces/molecule.model.INotificationItem)<`T`\>

Update the specific notification item

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name   | Type                                                                        |
| :----- | :-------------------------------------------------------------------------- |
| `item` | [`INotificationItem`](../interfaces/molecule.model.INotificationItem)<`T`\> |

#### Returns

`null` \| [`INotificationItem`](../interfaces/molecule.model.INotificationItem)<`T`\>

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[update](../interfaces/molecule.INotificationService#update)

#### Defined in

[services/notificationService.ts:63](https://github.com/DTStack/molecule/blob/927b7d39/src/services/notificationService.ts#L63)
