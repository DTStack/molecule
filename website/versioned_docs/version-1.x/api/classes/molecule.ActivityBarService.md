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

[services/workbench/activityBarService.ts:82](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/activityBarService.ts#L82)

## Properties

### sidebarService

• `Private` **sidebarService**: [`ISidebarService`](../interfaces/molecule.ISidebarService)

#### Defined in

[services/workbench/activityBarService.ts:80](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/activityBarService.ts#L80)

---

### state

• `Protected` **state**: [`IActivityBar`](../interfaces/molecule.model.IActivityBar)

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[state](../interfaces/molecule.IActivityBarService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[services/workbench/activityBarService.ts:79](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/activityBarService.ts#L79)

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

[services/workbench/activityBarService.ts:102](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/activityBarService.ts#L102)

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

[services/workbench/activityBarService.ts:196](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/activityBarService.ts#L196)

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

[IActivityBarService](../interfaces/molecule.IActivityBarService).[emit](../interfaces/molecule.IActivityBarService#emit)

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

[IActivityBarService](../interfaces/molecule.IActivityBarService).[forceUpdate](../interfaces/molecule.IActivityBarService#forceupdate)

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

#### Defined in

[react/component.ts:81](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L81)

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

[services/workbench/activityBarService.ts:125](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/activityBarService.ts#L125)

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

[react/component.ts:85](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L85)

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

[services/workbench/activityBarService.ts:237](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/activityBarService.ts#L237)

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

[services/workbench/activityBarService.ts:231](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/activityBarService.ts#L231)

---

### onUpdateState

▸ **onUpdateState**(`listener`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                                                           |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `listener` | (`prevState`: [`IActivityBar`](../interfaces/molecule.model.IActivityBar), `nextState`: [`IActivityBar`](../interfaces/molecule.model.IActivityBar)) => `void` |

#### Returns

`void`

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[onUpdateState](../interfaces/molecule.IActivityBarService#onupdatestate)

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

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

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[remove](../interfaces/molecule.IActivityBarService#remove)

#### Defined in

[services/workbench/activityBarService.ts:138](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/activityBarService.ts#L138)

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

[services/workbench/activityBarService.ts:211](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/activityBarService.ts#L211)

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

[IActivityBarService](../interfaces/molecule.IActivityBarService).[removeOnUpdateState](../interfaces/molecule.IActivityBarService#removeonupdatestate)

#### Inherited from

[Component](molecule.react.Component).[removeOnUpdateState](molecule.react.Component#removeonupdatestate)

#### Defined in

[react/component.ts:77](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L77)

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

[react/component.ts:69](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L69)

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

[services/workbench/activityBarService.ts:94](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/activityBarService.ts#L94)

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

[services/workbench/activityBarService.ts:88](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/activityBarService.ts#L88)

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

[IActivityBarService](../interfaces/molecule.IActivityBarService).[subscribe](../interfaces/molecule.IActivityBarService#subscribe)

#### Inherited from

[Component](molecule.react.Component).[subscribe](molecule.react.Component#subscribe)

#### Defined in

[common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L11)

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

[services/workbench/activityBarService.ts:158](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/activityBarService.ts#L158)

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

[services/workbench/activityBarService.ts:179](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/activityBarService.ts#L179)

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

[IActivityBarService](../interfaces/molecule.IActivityBarService).[unsubscribe](../interfaces/molecule.IActivityBarService#unsubscribe)

#### Inherited from

[Component](molecule.react.Component).[unsubscribe](molecule.react.Component#unsubscribe)

#### Defined in

[common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L37)
