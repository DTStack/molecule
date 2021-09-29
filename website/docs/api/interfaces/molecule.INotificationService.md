---
id: 'molecule.INotificationService'
title: 'Interface: INotificationService'
sidebar_label: 'INotificationService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).INotificationService

## Hierarchy

-   [`Component`](../classes/molecule.react.Component)<[`INotification`](molecule.INotification)\>

    ↳ **`INotificationService`**

## Implemented by

-   [`NotificationService`](../classes/molecule.NotificationService)

## Properties

### state

• `Protected` `Abstract` **state**: [`INotification`](molecule.INotification)<`any`\>

#### Inherited from

[Component](../classes/molecule.react.Component).[state](../classes/molecule.react.Component#state)

#### Defined in

[src/react/component.ts:25](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L25)

## Methods

### add

▸ **add**<`T`\>(`items`): `null` \| [`INotificationItem`](molecule.INotificationItem)<`T`\>[]

Add new notification items

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                                                      |
| :------ | :-------------------------------------------------------- |
| `items` | [`INotificationItem`](molecule.INotificationItem)<`T`\>[] |

#### Returns

`null` \| [`INotificationItem`](molecule.INotificationItem)<`T`\>[]

#### Defined in

[src/services/notificationService.ts:20](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/notificationService.ts#L20)

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

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[forceUpdate](../classes/molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:58](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L58)

---

### getState

▸ **getState**(): [`INotification`](molecule.INotification)<`any`\>

#### Returns

[`INotification`](molecule.INotification)<`any`\>

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[onEvent](../classes/molecule.react.Component#onevent)

#### Defined in

[src/react/component.ts:66](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L66)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

#### Parameters

| Name       | Type                                                                                                                                       |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`INotification`](molecule.INotification)<`any`\>, `nextState`: [`INotification`](molecule.INotification)<`any`\>) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

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

#### Defined in

[src/services/notificationService.ts:25](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/notificationService.ts#L25)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type                                              |
| :----------- | :------------------------------------------------ |
| `nextState?` | [`INotification`](molecule.INotification)<`any`\> |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[render](../classes/molecule.react.Component#render)

#### Defined in

[src/react/component.ts:50](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L50)

---

### reset

▸ **reset**(): `void`

Reset notifications, this will clear the pending notifications

#### Returns

`void`

#### Defined in

[src/services/notificationService.ts:38](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/notificationService.ts#L38)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                                                       | Description                |
| :---------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`INotification`](molecule.INotification)<`any`\>\>                                                                              | update target state values |
| `callback?` | (`prevState`: [`INotification`](molecule.INotification)<`any`\>, `nextState`: [`INotification`](molecule.INotification)<`any`\>) => `void` | -                          |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[setState](../classes/molecule.react.Component#setstate)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[subscribe](../classes/molecule.react.Component#subscribe)

#### Defined in

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventBus.ts#L11)

---

### toggleNotification

▸ **toggleNotification**(): `void`

Toggle the Notification view between display or hidden

#### Returns

`void`

#### Defined in

[src/services/notificationService.ts:34](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/notificationService.ts#L34)

---

### update

▸ **update**<`T`\>(`item`): `null` \| [`INotificationItem`](molecule.INotificationItem)<`T`\>

Update the specific notification item

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name   | Type                                                    | Description                                 |
| :----- | :------------------------------------------------------ | :------------------------------------------ |
| `item` | [`INotificationItem`](molecule.INotificationItem)<`T`\> | notification item, the id field is required |

#### Returns

`null` \| [`INotificationItem`](molecule.INotificationItem)<`T`\>

#### Defined in

[src/services/notificationService.ts:30](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/notificationService.ts#L30)
