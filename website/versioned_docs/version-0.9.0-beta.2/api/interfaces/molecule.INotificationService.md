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

[src/react/component.ts:42](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L42)

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

[src/services/notificationService.ts:20](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/notificationService.ts#L20)

---

### clear

▸ **clear**(): `void`

Clear the notifications

#### Returns

`void`

#### Defined in

[src/services/notificationService.ts:38](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/notificationService.ts#L38)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[emit](../classes/molecule.react.Component#emit)

#### Defined in

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

Force to update the Component

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[forceUpdate](../classes/molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:79](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L79)

---

### getState

▸ **getState**(): [`INotification`](molecule.model.INotification)<`any`\>

Get the Component state

#### Returns

[`INotification`](molecule.model.INotification)<`any`\>

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L83)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                                                   |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`INotification`](molecule.model.INotification)<`any`\>, `nextState`: [`INotification`](molecule.model.INotification)<`any`\>) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

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

#### Defined in

[src/services/notificationService.ts:25](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/notificationService.ts#L25)

---

### removeOnUpdateState

▸ **removeOnUpdateState**(): `void`

Remove the Component update event listening

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[removeOnUpdateState](../classes/molecule.react.Component#removeonupdatestate)

#### Defined in

[src/react/component.ts:75](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L75)

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

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L67)

---

### reset

▸ **reset**(): `void`

Reset notifications, this will clear the pending notifications

#### Returns

`void`

#### Defined in

[src/services/notificationService.ts:42](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/notificationService.ts#L42)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[subscribe](../classes/molecule.react.Component#subscribe)

#### Defined in

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L11)

---

### toggleNotification

▸ **toggleNotification**(): `void`

Toggle the Notification view between display or hidden

#### Returns

`void`

#### Defined in

[src/services/notificationService.ts:34](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/notificationService.ts#L34)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[unsubscribe](../classes/molecule.react.Component#unsubscribe)

#### Defined in

[src/common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L37)

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

[src/services/notificationService.ts:30](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/notificationService.ts#L30)
