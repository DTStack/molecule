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

[src/react/component.ts:42](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L42)

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

[src/services/workbench/activityBarService.ts:27](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/activityBarService.ts#L27)

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

[src/services/workbench/activityBarService.ts:50](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/activityBarService.ts#L50)

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

▸ **getState**(): [`IActivityBar`](molecule.model.IActivityBar)

Get the Component state

#### Returns

[`IActivityBar`](molecule.model.IActivityBar)

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L83)

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

[src/services/workbench/activityBarService.ts:66](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/activityBarService.ts#L66)

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

[src/services/workbench/activityBarService.ts:62](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/activityBarService.ts#L62)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                               |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`IActivityBar`](molecule.model.IActivityBar), `nextState`: [`IActivityBar`](molecule.model.IActivityBar)) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:71](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L71)

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

[src/services/workbench/activityBarService.ts:36](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/activityBarService.ts#L36)

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

[src/services/workbench/activityBarService.ts:57](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/activityBarService.ts#L57)

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

| Name         | Type                                          |
| :----------- | :-------------------------------------------- |
| `nextState?` | [`IActivityBar`](molecule.model.IActivityBar) |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[render](../classes/molecule.react.Component#render)

#### Defined in

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L67)

---

### reset

▸ **reset**(): `void`

Reset the activityBar state data,
if you want to whole customize the activityBar, you can reset it first,
and then using the activityBar.add() method to fill the data you need.

#### Returns

`void`

#### Defined in

[src/services/workbench/activityBarService.ts:22](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/activityBarService.ts#L22)

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

[src/services/workbench/activityBarService.ts:31](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/activityBarService.ts#L31)

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

[src/services/workbench/activityBarService.ts:41](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/activityBarService.ts#L41)

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

[src/services/workbench/activityBarService.ts:46](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/activityBarService.ts#L46)

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
