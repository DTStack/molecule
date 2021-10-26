---
id: 'molecule.IActivityBarService'
title: 'Interface: IActivityBarService'
sidebar_label: 'IActivityBarService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IActivityBarService

## Hierarchy

-   [`Component`](../classes/molecule.react.Component)<[`IActivityBar`](molecule.IActivityBar)\>

    ↳ **`IActivityBarService`**

## Implemented by

-   [`ActivityBarService`](../classes/molecule.ActivityBarService)

## Properties

### state

• `Protected` `Abstract` **state**: [`IActivityBar`](molecule.IActivityBar)

#### Inherited from

[Component](../classes/molecule.react.Component).[state](../classes/molecule.react.Component#state)

#### Defined in

[src/react/component.ts:42](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L42)

## Methods

### add

▸ **add**(`data`, `isActive?`): `void`

Add IActivityBarItem data

#### Parameters

| Name        | Type                                                                                                 | Description                                                                         |
| :---------- | :--------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| `data`      | [`IActivityBarItem`](molecule.IActivityBarItem) \| [`IActivityBarItem`](molecule.IActivityBarItem)[] | -                                                                                   |
| `isActive?` | `boolean`                                                                                            | If provide, Activity Bar will set data active automatically. Only works in one data |

#### Returns

`void`

#### Defined in

[src/services/workbench/activityBarService.ts:26](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/activityBarService.ts#L26)

---

### addContextMenu

▸ **addContextMenu**(`data`): `void`

Add new contextMenus for the activityBar

#### Parameters

| Name   | Type                                                   |
| :----- | :----------------------------------------------------- |
| `data` | `IActivityMenuItemProps` \| `IActivityMenuItemProps`[] |

#### Returns

`void`

#### Defined in

[src/services/workbench/activityBarService.ts:49](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/activityBarService.ts#L49)

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

[src/common/event/eventBus.ts:28](https://github.com/DTStack/molecule/blob/3c64296/src/common/event/eventBus.ts#L28)

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

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/3c64296/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

Force to update the Component

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[forceUpdate](../classes/molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:79](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L79)

---

### getState

▸ **getState**(): [`IActivityBar`](molecule.IActivityBar)

Get the Component state

#### Returns

[`IActivityBar`](molecule.IActivityBar)

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L83)

---

### onChange

▸ **onChange**(`callback`): `any`

Called when activity bar item which is not global is changed

#### Parameters

| Name       | Type                                                                   |
| :--------- | :--------------------------------------------------------------------- |
| `callback` | (`prevSelectedKey?`: `string`, `nextSelectedKey?`: `string`) => `void` |

#### Returns

`any`

#### Defined in

[src/services/workbench/activityBarService.ts:65](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/activityBarService.ts#L65)

---

### onClick

▸ **onClick**(`callback`): `any`

Add click event listener

#### Parameters

| Name       | Type                                                                                         |
| :--------- | :------------------------------------------------------------------------------------------- |
| `callback` | (`selectedKey`: `string`, `item`: [`IActivityBarItem`](molecule.IActivityBarItem)) => `void` |

#### Returns

`any`

#### Defined in

[src/services/workbench/activityBarService.ts:61](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/activityBarService.ts#L61)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                   |
| :--------- | :--------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`IActivityBar`](molecule.IActivityBar), `nextState`: [`IActivityBar`](molecule.IActivityBar)) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:71](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L71)

---

### remove

▸ **remove**(`id`): `void`

Remove the specific activity bar by id

#### Parameters

| Name | Type                   |
| :--- | :--------------------- |
| `id` | `string` \| `string`[] |

#### Returns

`void`

#### Defined in

[src/services/workbench/activityBarService.ts:35](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/activityBarService.ts#L35)

---

### removeContextMenu

▸ **removeContextMenu**(`id`): `void`

Remove the specific contextMenu item by id

#### Parameters

| Name | Type                   | Description    |
| :--- | :--------------------- | :------------- |
| `id` | `string` \| `string`[] | contextmenu id |

#### Returns

`void`

#### Defined in

[src/services/workbench/activityBarService.ts:56](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/activityBarService.ts#L56)

---

### removeOnUpdateState

▸ **removeOnUpdateState**(): `void`

Remove the Component update event listening

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[removeOnUpdateState](../classes/molecule.react.Component#removeonupdatestate)

#### Defined in

[src/react/component.ts:75](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L75)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type                                    |
| :----------- | :-------------------------------------- |
| `nextState?` | [`IActivityBar`](molecule.IActivityBar) |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[render](../classes/molecule.react.Component#render)

#### Defined in

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L67)

---

### reset

▸ **reset**(): `void`

Reset the activityBar state data,
if you want to whole customize the activityBar, you can reset it first,
and then using the activityBar.add() method to fill the data you need.

#### Returns

`void`

#### Defined in

[src/services/workbench/activityBarService.ts:21](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/activityBarService.ts#L21)

---

### setActive

▸ **setActive**(`id?`): `void`

Set active bar

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `id?` | `string` |

#### Returns

`void`

#### Defined in

[src/services/workbench/activityBarService.ts:30](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/activityBarService.ts#L30)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                                   | Description                |
| :---------- | :--------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`IActivityBar`](molecule.IActivityBar)\>                                                                    | update target state values |
| `callback?` | (`prevState`: [`IActivityBar`](molecule.IActivityBar), `nextState`: [`IActivityBar`](molecule.IActivityBar)) => `void` | -                          |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[setState](../classes/molecule.react.Component#setstate)

#### Defined in

[src/react/component.ts:54](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L54)

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

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/3c64296/src/common/event/eventBus.ts#L11)

---

### toggleBar

▸ **toggleBar**(`id`): `void`

Toggle the specific activity bar between show or hide

#### Parameters

| Name | Type     | Description     |
| :--- | :------- | :-------------- |
| `id` | `string` | activity bar id |

#### Returns

`void`

#### Defined in

[src/services/workbench/activityBarService.ts:40](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/activityBarService.ts#L40)

---

### toggleContextMenuChecked

▸ **toggleContextMenuChecked**(`id`): `void`

Toggle the contextMenu between checked or unchecked

#### Parameters

| Name | Type     | Description    |
| :--- | :------- | :------------- |
| `id` | `string` | contextmenu id |

#### Returns

`void`

#### Defined in

[src/services/workbench/activityBarService.ts:45](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/activityBarService.ts#L45)

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

[src/common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/3c64296/src/common/event/eventBus.ts#L37)
