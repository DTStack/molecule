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

[src/services/notificationService.ts:51](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/notificationService.ts#L51)

## Properties

### state

• `Protected` **state**: [`INotification`](../interfaces/molecule.model.INotification)<`any`\>

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[state](../interfaces/molecule.INotificationService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[src/services/notificationService.ts:49](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/notificationService.ts#L49)

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

[src/services/notificationService.ts:105](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/notificationService.ts#L105)

---

### clear

▸ **clear**(): `void`

Clear the notifications

#### Returns

`void`

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[clear](../interfaces/molecule.INotificationService#clear)

#### Defined in

[src/services/notificationService.ts:124](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/notificationService.ts#L124)

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

[src/common/event/eventBus.ts:28](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L28)

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

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L20)

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

[src/react/component.ts:79](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L79)

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

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L83)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                                                                               |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`INotification`](../interfaces/molecule.model.INotification)<`any`\>, `nextState`: [`INotification`](../interfaces/molecule.model.INotification)<`any`\>) => `void` |

#### Returns

`void`

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[onUpdateState](../interfaces/molecule.INotificationService#onupdatestate)

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:71](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L71)

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

[src/services/notificationService.ts:83](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/notificationService.ts#L83)

---

### removeOnUpdateState

▸ **removeOnUpdateState**(): `void`

Remove the Component update event listening

#### Returns

`void`

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[removeOnUpdateState](../interfaces/molecule.INotificationService#removeonupdatestate)

#### Inherited from

[Component](molecule.react.Component).[removeOnUpdateState](molecule.react.Component#removeonupdatestate)

#### Defined in

[src/react/component.ts:75](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L75)

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

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L67)

---

### reset

▸ **reset**(): `void`

Reset notifications, this will clear the pending notifications

#### Returns

`void`

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[reset](../interfaces/molecule.INotificationService#reset)

#### Defined in

[src/services/notificationService.ts:130](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/notificationService.ts#L130)

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

[src/react/component.ts:54](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L54)

---

### subscribe

▸ **subscribe**(`name`, `callback`): `void`

Subscribe the service event

#### Parameters

| Name       | Type                   | Description       |
| :--------- | :--------------------- | :---------------- |
| `name`     | `string` \| `string`[] | Event name        |
| `callback` | `Function`             | Callback function |

#### Returns

`void`

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[subscribe](../interfaces/molecule.INotificationService#subscribe)

#### Inherited from

[Component](molecule.react.Component).[subscribe](molecule.react.Component#subscribe)

#### Defined in

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L11)

---

### toggleNotification

▸ **toggleNotification**(): `void`

Toggle the Notification view between display or hidden

#### Returns

`void`

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[toggleNotification](../interfaces/molecule.INotificationService#togglenotification)

#### Defined in

[src/services/notificationService.ts:56](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/notificationService.ts#L56)

---

### unsubscribe

▸ **unsubscribe**(`name`): `void`

Unsubscribe the specific event

#### Parameters

| Name   | Type  | Description    |
| :----- | :---- | :------------- |
| `name` | `any` | The event name |

#### Returns

`void`

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[unsubscribe](../interfaces/molecule.INotificationService#unsubscribe)

#### Inherited from

[Component](molecule.react.Component).[unsubscribe](molecule.react.Component#unsubscribe)

#### Defined in

[src/common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L37)

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

[src/services/notificationService.ts:62](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/notificationService.ts#L62)
