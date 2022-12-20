---
id: 'molecule.IActivityBarService'
title: 'Interface: IActivityBarService'
sidebar_label: 'IActivityBarService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IActivityBarService

## Hierarchy

-   [`Component`](../classes/molecule.react.Component)<[`IActivityBar`](molecule.model.IActivityBar)\>

    ↳ **`IActivityBarService`**

## Implemented by

-   [`ActivityBarService`](../classes/molecule.ActivityBarService)

## Properties

### state

• `Protected` `Abstract` **state**: [`IActivityBar`](molecule.model.IActivityBar)

#### Inherited from

[Component](../classes/molecule.react.Component).[state](../classes/molecule.react.Component#state)

#### Defined in

[react/component.ts:44](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L44)

## Methods

### add

▸ **add**(`data`, `isActive?`): `void`

Add IActivityBarItem data

#### Parameters

| Name        | Type                                                                                                             | Description                                                                         |
| :---------- | :--------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| `data`      | [`IActivityBarItem`](molecule.model.IActivityBarItem) \| [`IActivityBarItem`](molecule.model.IActivityBarItem)[] | -                                                                                   |
| `isActive?` | `boolean`                                                                                                        | If provide, Activity Bar will set data active automatically. Only works in one data |

#### Returns

`void`

#### Defined in

[services/workbench/activityBarService.ts:27](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/activityBarService.ts#L27)

---

### addContextMenu

▸ **addContextMenu**(`data`): `void`

Add new contextMenus for the activityBar

#### Parameters

| Name   | Type                                                                                                                                     |
| :----- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| `data` | [`IActivityMenuItemProps`](molecule.model.IActivityMenuItemProps) \| [`IActivityMenuItemProps`](molecule.model.IActivityMenuItemProps)[] |

#### Returns

`void`

#### Defined in

[services/workbench/activityBarService.ts:50](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/activityBarService.ts#L50)

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

▸ **getState**(): [`IActivityBar`](molecule.model.IActivityBar)

Get the Component state

#### Returns

[`IActivityBar`](molecule.model.IActivityBar)

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

#### Defined in

[react/component.ts:85](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L85)

---

### onChange

▸ **onChange**(`callback`): `any`

Called when activity bar item which is not global is changed

#### Parameters

| Name       | Type                                                                       |
| :--------- | :------------------------------------------------------------------------- |
| `callback` | (`prevSelectedKey?`: `UniqueId`, `nextSelectedKey?`: `UniqueId`) => `void` |

#### Returns

`any`

#### Defined in

[services/workbench/activityBarService.ts:66](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/activityBarService.ts#L66)

---

### onClick

▸ **onClick**(`callback`): `any`

Add click event listener

#### Parameters

| Name       | Type                                                                                                 |
| :--------- | :--------------------------------------------------------------------------------------------------- |
| `callback` | (`selectedKey`: `UniqueId`, `item`: [`IActivityBarItem`](molecule.model.IActivityBarItem)) => `void` |

#### Returns

`any`

#### Defined in

[services/workbench/activityBarService.ts:62](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/activityBarService.ts#L62)

---

### onUpdateState

▸ **onUpdateState**(`listener`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                               |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| `listener` | (`prevState`: [`IActivityBar`](molecule.model.IActivityBar), `nextState`: [`IActivityBar`](molecule.model.IActivityBar)) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

#### Defined in

[react/component.ts:73](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L73)

---

### remove

▸ **remove**(`id`): `void`

Remove the specific activity bar by id

#### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `id` | `UniqueId` \| `UniqueId`[] |

#### Returns

`void`

#### Defined in

[services/workbench/activityBarService.ts:36](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/activityBarService.ts#L36)

---

### removeContextMenu

▸ **removeContextMenu**(`id`): `void`

Remove the specific contextMenu item by id

#### Parameters

| Name | Type                       | Description    |
| :--- | :------------------------- | :------------- |
| `id` | `UniqueId` \| `UniqueId`[] | contextmenu id |

#### Returns

`void`

#### Defined in

[services/workbench/activityBarService.ts:57](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/activityBarService.ts#L57)

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

| Name         | Type                                          |
| :----------- | :-------------------------------------------- |
| `nextState?` | [`IActivityBar`](molecule.model.IActivityBar) |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[render](../classes/molecule.react.Component#render)

#### Defined in

[react/component.ts:69](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L69)

---

### reset

▸ **reset**(): `void`

Reset the activityBar state data,
if you want to whole customize the activityBar, you can reset it first,
and then using the activityBar.add() method to fill the data you need.

#### Returns

`void`

#### Defined in

[services/workbench/activityBarService.ts:22](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/activityBarService.ts#L22)

---

### setActive

▸ **setActive**(`id?`): `void`

Set active bar

#### Parameters

| Name  | Type       |
| :---- | :--------- |
| `id?` | `UniqueId` |

#### Returns

`void`

#### Defined in

[services/workbench/activityBarService.ts:31](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/activityBarService.ts#L31)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                                               | Description                |
| :---------- | :--------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`IActivityBar`](molecule.model.IActivityBar)\>                                                                          | update target state values |
| `callback?` | (`prevState`: [`IActivityBar`](molecule.model.IActivityBar), `nextState`: [`IActivityBar`](molecule.model.IActivityBar)) => `void` | -                          |

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

### toggleBar

▸ **toggleBar**(`id`): `void`

Toggle the specific activity bar between show or hide

#### Parameters

| Name | Type       | Description     |
| :--- | :--------- | :-------------- |
| `id` | `UniqueId` | activity bar id |

#### Returns

`void`

#### Defined in

[services/workbench/activityBarService.ts:41](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/activityBarService.ts#L41)

---

### toggleContextMenuChecked

▸ **toggleContextMenuChecked**(`id`): `void`

Toggle the contextMenu between checked or unchecked

#### Parameters

| Name | Type       | Description    |
| :--- | :--------- | :------------- |
| `id` | `UniqueId` | contextmenu id |

#### Returns

`void`

#### Defined in

[services/workbench/activityBarService.ts:46](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/activityBarService.ts#L46)

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
