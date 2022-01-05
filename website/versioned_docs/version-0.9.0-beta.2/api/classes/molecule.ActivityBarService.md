---
id: 'molecule.ActivityBarService'
title: 'Class: ActivityBarService'
sidebar_label: 'ActivityBarService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).ActivityBarService

## Hierarchy

-   [`Component`](molecule.react.Component)<[`IActivityBar`](../interfaces/molecule.model.IActivityBar)\>

    ↳ **`ActivityBarService`**

## Implements

-   [`IActivityBarService`](../interfaces/molecule.IActivityBarService)

## Constructors

### constructor

• **new ActivityBarService**()

#### Overrides

[Component](molecule.react.Component).[constructor](molecule.react.Component#constructor)

#### Defined in

[src/services/workbench/activityBarService.ts:81](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/activityBarService.ts#L81)

## Properties

### sidebarService

• `Private` **sidebarService**: [`ISidebarService`](../interfaces/molecule.ISidebarService)

#### Defined in

[src/services/workbench/activityBarService.ts:79](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/activityBarService.ts#L79)

---

### state

• `Protected` **state**: [`IActivityBar`](../interfaces/molecule.model.IActivityBar)

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[state](../interfaces/molecule.IActivityBarService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[src/services/workbench/activityBarService.ts:78](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/activityBarService.ts#L78)

## Methods

### add

▸ **add**(`data`, `isActive?`): `void`

Add IActivityBarItem data

#### Parameters

| Name       | Type                                                                                                                                         | Default value |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------- | :------------ |
| `data`     | [`IActivityBarItem`](../interfaces/molecule.model.IActivityBarItem) \| [`IActivityBarItem`](../interfaces/molecule.model.IActivityBarItem)[] | `undefined`   |
| `isActive` | `boolean`                                                                                                                                    | `false`       |

#### Returns

`void`

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[add](../interfaces/molecule.IActivityBarService#add)

#### Defined in

[src/services/workbench/activityBarService.ts:101](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/activityBarService.ts#L101)

---

### addContextMenu

▸ **addContextMenu**(`contextMenu`): `void`

Add new contextMenus for the activityBar

#### Parameters

| Name          | Type                                                                                                                                                                 |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contextMenu` | [`IActivityMenuItemProps`](../interfaces/molecule.model.IActivityMenuItemProps) \| [`IActivityMenuItemProps`](../interfaces/molecule.model.IActivityMenuItemProps)[] |

#### Returns

`void`

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[addContextMenu](../interfaces/molecule.IActivityBarService#addcontextmenu)

#### Defined in

[src/services/workbench/activityBarService.ts:195](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/activityBarService.ts#L195)

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

[IActivityBarService](../interfaces/molecule.IActivityBarService).[count](../interfaces/molecule.IActivityBarService#count)

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

[IActivityBarService](../interfaces/molecule.IActivityBarService).[emit](../interfaces/molecule.IActivityBarService#emit)

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

[IActivityBarService](../interfaces/molecule.IActivityBarService).[forceUpdate](../interfaces/molecule.IActivityBarService#forceupdate)

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:79](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L79)

---

### getRemoveList

▸ `Private` **getRemoveList**<`T`\>(`id`, `data`): `number`[]

#### Type parameters

| Name | Type                                                                                                                                                           |
| :--- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `T`  | extends [`IActivityBarItem`](../interfaces/molecule.model.IActivityBarItem) \| [`IActivityMenuItemProps`](../interfaces/molecule.model.IActivityMenuItemProps) |

#### Parameters

| Name   | Type                       |
| :----- | :------------------------- |
| `id`   | `UniqueId` \| `UniqueId`[] |
| `data` | `T`[]                      |

#### Returns

`number`[]

#### Defined in

[src/services/workbench/activityBarService.ts:124](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/activityBarService.ts#L124)

---

### getState

▸ **getState**(): [`IActivityBar`](../interfaces/molecule.model.IActivityBar)

Get the Component state

#### Returns

[`IActivityBar`](../interfaces/molecule.model.IActivityBar)

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[getState](../interfaces/molecule.IActivityBarService#getstate)

#### Inherited from

[Component](molecule.react.Component).[getState](molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L83)

---

### onChange

▸ **onChange**(`callback`): `void`

Called when activity bar item which is not global is changed

#### Parameters

| Name       | Type                                                                       |
| :--------- | :------------------------------------------------------------------------- |
| `callback` | (`prevSelectedKey?`: `UniqueId`, `nextSelectedKey?`: `UniqueId`) => `void` |

#### Returns

`void`

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[onChange](../interfaces/molecule.IActivityBarService#onchange)

#### Defined in

[src/services/workbench/activityBarService.ts:236](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/activityBarService.ts#L236)

---

### onClick

▸ **onClick**(`callback`): `void`

Add click event listener

#### Parameters

| Name       | Type                                                                                                               |
| :--------- | :----------------------------------------------------------------------------------------------------------------- |
| `callback` | (`selectedKey`: `UniqueId`, `item`: [`IActivityBarItem`](../interfaces/molecule.model.IActivityBarItem)) => `void` |

#### Returns

`void`

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[onClick](../interfaces/molecule.IActivityBarService#onclick)

#### Defined in

[src/services/workbench/activityBarService.ts:230](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/activityBarService.ts#L230)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                                                           |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`IActivityBar`](../interfaces/molecule.model.IActivityBar), `nextState`: [`IActivityBar`](../interfaces/molecule.model.IActivityBar)) => `void` |

#### Returns

`void`

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[onUpdateState](../interfaces/molecule.IActivityBarService#onupdatestate)

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

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

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[remove](../interfaces/molecule.IActivityBarService#remove)

#### Defined in

[src/services/workbench/activityBarService.ts:137](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/activityBarService.ts#L137)

---

### removeContextMenu

▸ **removeContextMenu**(`id`): `void`

Remove the specific contextMenu item by id

#### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `id` | `UniqueId` \| `UniqueId`[] |

#### Returns

`void`

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[removeContextMenu](../interfaces/molecule.IActivityBarService#removecontextmenu)

#### Defined in

[src/services/workbench/activityBarService.ts:210](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/activityBarService.ts#L210)

---

### removeOnUpdateState

▸ **removeOnUpdateState**(): `void`

Remove the Component update event listening

#### Returns

`void`

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[removeOnUpdateState](../interfaces/molecule.IActivityBarService#removeonupdatestate)

#### Inherited from

[Component](molecule.react.Component).[removeOnUpdateState](molecule.react.Component#removeonupdatestate)

#### Defined in

[src/react/component.ts:75](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L75)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type                                                        |
| :----------- | :---------------------------------------------------------- |
| `nextState?` | [`IActivityBar`](../interfaces/molecule.model.IActivityBar) |

#### Returns

`void`

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[render](../interfaces/molecule.IActivityBarService#render)

#### Inherited from

[Component](molecule.react.Component).[render](molecule.react.Component#render)

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

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[reset](../interfaces/molecule.IActivityBarService#reset)

#### Defined in

[src/services/workbench/activityBarService.ts:93](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/activityBarService.ts#L93)

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

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[setActive](../interfaces/molecule.IActivityBarService#setactive)

#### Defined in

[src/services/workbench/activityBarService.ts:87](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/activityBarService.ts#L87)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                                                                           | Description                |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`IActivityBar`](../interfaces/molecule.model.IActivityBar)\>                                                                                        | update target state values |
| `callback?` | (`prevState`: [`IActivityBar`](../interfaces/molecule.model.IActivityBar), `nextState`: [`IActivityBar`](../interfaces/molecule.model.IActivityBar)) => `void` | -                          |

#### Returns

`void`

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[setState](../interfaces/molecule.IActivityBarService#setstate)

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

[IActivityBarService](../interfaces/molecule.IActivityBarService).[subscribe](../interfaces/molecule.IActivityBarService#subscribe)

#### Inherited from

[Component](molecule.react.Component).[subscribe](molecule.react.Component#subscribe)

#### Defined in

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L11)

---

### toggleBar

▸ **toggleBar**(`id`): `void`

Toggle the specific activity bar between show or hide

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `id` | `UniqueId` |

#### Returns

`void`

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[toggleBar](../interfaces/molecule.IActivityBarService#togglebar)

#### Defined in

[src/services/workbench/activityBarService.ts:157](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/activityBarService.ts#L157)

---

### toggleContextMenuChecked

▸ **toggleContextMenuChecked**(`id`): `void`

Toggle the contextMenu between checked or unchecked

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `id` | `UniqueId` |

#### Returns

`void`

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[toggleContextMenuChecked](../interfaces/molecule.IActivityBarService#togglecontextmenuchecked)

#### Defined in

[src/services/workbench/activityBarService.ts:178](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/activityBarService.ts#L178)

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

[IActivityBarService](../interfaces/molecule.IActivityBarService).[unsubscribe](../interfaces/molecule.IActivityBarService#unsubscribe)

#### Inherited from

[Component](molecule.react.Component).[unsubscribe](molecule.react.Component#unsubscribe)

#### Defined in

[src/common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L37)
