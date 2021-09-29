---
id: 'molecule.NotificationService'
title: 'Class: NotificationService'
sidebar_label: 'NotificationService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).NotificationService

## Hierarchy

-   [`Component`](molecule.react.Component)<[`INotification`](../interfaces/molecule.INotification)\>

    ↳ **`NotificationService`**

## Implements

-   [`INotificationService`](../interfaces/molecule.INotificationService)

## Constructors

### constructor

• **new NotificationService**()

#### Overrides

[Component](molecule.react.Component).[constructor](molecule.react.Component#constructor)

#### Defined in

[src/services/notificationService.ts:47](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/notificationService.ts#L47)

## Properties

### state

• `Protected` **state**: [`INotification`](../interfaces/molecule.INotification)<`any`\>

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[state](../interfaces/molecule.INotificationService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[src/services/notificationService.ts:45](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/notificationService.ts#L45)

## Methods

### add

▸ **add**<`T`\>(`items`): `null` \| [`INotificationItem`](../interfaces/molecule.INotificationItem)<`T`\>[]

Add new notification items

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                                                                    |
| :------ | :---------------------------------------------------------------------- |
| `items` | [`INotificationItem`](../interfaces/molecule.INotificationItem)<`T`\>[] |

#### Returns

`null` \| [`INotificationItem`](../interfaces/molecule.INotificationItem)<`T`\>[]

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[add](../interfaces/molecule.INotificationService#add)

#### Defined in

[src/services/notificationService.ts:101](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/notificationService.ts#L101)

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

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[forceUpdate](../interfaces/molecule.INotificationService#forceupdate)

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:58](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L58)

---

### getState

▸ **getState**(): [`INotification`](../interfaces/molecule.INotification)<`any`\>

#### Returns

[`INotification`](../interfaces/molecule.INotification)<`any`\>

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[getState](../interfaces/molecule.INotificationService#getstate)

#### Inherited from

[Component](molecule.react.Component).[getState](molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:62](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L62)

---

### onEvent

▸ **onEvent**(`name`, `callback`): `void`

Subscribe the component event

#### Parameters

| Name       | Type  |
| :--------- | :---- |
| `name`     | `any` |
| `callback` | `any` |

#### Returns

`void`

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[onEvent](../interfaces/molecule.INotificationService#onevent)

#### Inherited from

[Component](molecule.react.Component).[onEvent](molecule.react.Component#onevent)

#### Defined in

[src/react/component.ts:66](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L66)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

#### Parameters

| Name       | Type                                                                                                                                                                   |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`INotification`](../interfaces/molecule.INotification)<`any`\>, `nextState`: [`INotification`](../interfaces/molecule.INotification)<`any`\>) => `void` |

#### Returns

`void`

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[onUpdateState](../interfaces/molecule.INotificationService#onupdatestate)

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:54](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L54)

---

### remove

▸ **remove**(`id`): `void`

Remove the specific notification item by id

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `number` |

#### Returns

`void`

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[remove](../interfaces/molecule.INotificationService#remove)

#### Defined in

[src/services/notificationService.ts:79](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/notificationService.ts#L79)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type                                                            |
| :----------- | :-------------------------------------------------------------- |
| `nextState?` | [`INotification`](../interfaces/molecule.INotification)<`any`\> |

#### Returns

`void`

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[render](../interfaces/molecule.INotificationService#render)

#### Inherited from

[Component](molecule.react.Component).[render](molecule.react.Component#render)

#### Defined in

[src/react/component.ts:50](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L50)

---

### reset

▸ **reset**(): `void`

Reset notifications, this will clear the pending notifications

#### Returns

`void`

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[reset](../interfaces/molecule.INotificationService#reset)

#### Defined in

[src/services/notificationService.ts:120](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/notificationService.ts#L120)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                                                                                   | Description                |
| :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`INotification`](../interfaces/molecule.INotification)<`any`\>\>                                                                                            | update target state values |
| `callback?` | (`prevState`: [`INotification`](../interfaces/molecule.INotification)<`any`\>, `nextState`: [`INotification`](../interfaces/molecule.INotification)<`any`\>) => `void` | -                          |

#### Returns

`void`

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[setState](../interfaces/molecule.INotificationService#setstate)

#### Inherited from

[Component](molecule.react.Component).[setState](molecule.react.Component#setstate)

#### Defined in

[src/react/component.ts:37](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L37)

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

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventBus.ts#L11)

---

### toggleNotification

▸ **toggleNotification**(): `void`

Toggle the Notification view between display or hidden

#### Returns

`void`

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[toggleNotification](../interfaces/molecule.INotificationService#togglenotification)

#### Defined in

[src/services/notificationService.ts:52](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/notificationService.ts#L52)

---

### update

▸ **update**<`T`\>(`item`): `null` \| [`INotificationItem`](../interfaces/molecule.INotificationItem)<`T`\>

Update the specific notification item

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name   | Type                                                                  |
| :----- | :-------------------------------------------------------------------- |
| `item` | [`INotificationItem`](../interfaces/molecule.INotificationItem)<`T`\> |

#### Returns

`null` \| [`INotificationItem`](../interfaces/molecule.INotificationItem)<`T`\>

#### Implementation of

[INotificationService](../interfaces/molecule.INotificationService).[update](../interfaces/molecule.INotificationService#update)

#### Defined in

[src/services/notificationService.ts:58](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/notificationService.ts#L58)
