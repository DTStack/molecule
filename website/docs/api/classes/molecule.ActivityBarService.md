---
id: 'molecule.ActivityBarService'
title: 'Class: ActivityBarService'
sidebar_label: 'ActivityBarService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).ActivityBarService

## Hierarchy

-   [`Component`](molecule.react.Component)<[`IActivityBar`](../interfaces/molecule.IActivityBar)\>

    ↳ **`ActivityBarService`**

## Implements

-   [`IActivityBarService`](../interfaces/molecule.IActivityBarService)

## Constructors

### constructor

• **new ActivityBarService**()

#### Overrides

[Component](molecule.react.Component).[constructor](molecule.react.Component#constructor)

#### Defined in

[src/services/workbench/activityBarService.ts:77](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/activityBarService.ts#L77)

## Properties

### sidebarService

• `Private` **sidebarService**: [`ISidebarService`](../interfaces/molecule.ISidebarService)

#### Defined in

[src/services/workbench/activityBarService.ts:75](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/activityBarService.ts#L75)

---

### state

• `Protected` **state**: [`IActivityBar`](../interfaces/molecule.IActivityBar)

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[state](../interfaces/molecule.IActivityBarService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[src/services/workbench/activityBarService.ts:74](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/activityBarService.ts#L74)

## Methods

### add

▸ **add**(`data`, `isActive?`): `void`

Add IActivityBarItem data

#### Parameters

| Name       | Type                                                                                                                             | Default value |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------- | :------------ |
| `data`     | [`IActivityBarItem`](../interfaces/molecule.IActivityBarItem) \| [`IActivityBarItem`](../interfaces/molecule.IActivityBarItem)[] | `undefined`   |
| `isActive` | `boolean`                                                                                                                        | `false`       |

#### Returns

`void`

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[add](../interfaces/molecule.IActivityBarService#add)

#### Defined in

[src/services/workbench/activityBarService.ts:97](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/activityBarService.ts#L97)

---

### addContextMenu

▸ **addContextMenu**(`contextMenu`): `void`

Add new contextMenus for the activityBar

#### Parameters

| Name          | Type                                                   |
| :------------ | :----------------------------------------------------- |
| `contextMenu` | `IActivityMenuItemProps` \| `IActivityMenuItemProps`[] |

#### Returns

`void`

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[addContextMenu](../interfaces/molecule.IActivityBarService#addcontextmenu)

#### Defined in

[src/services/workbench/activityBarService.ts:183](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/activityBarService.ts#L183)

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

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[forceUpdate](../interfaces/molecule.IActivityBarService#forceupdate)

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:58](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L58)

---

### getRemoveList

▸ `Private` **getRemoveList**<`T`\>(`id`, `data`): `number`[]

#### Type parameters

| Name | Type                                                                                              |
| :--- | :------------------------------------------------------------------------------------------------ |
| `T`  | extends [`IActivityBarItem`](../interfaces/molecule.IActivityBarItem) \| `IActivityMenuItemProps` |

#### Parameters

| Name   | Type                   |
| :----- | :--------------------- |
| `id`   | `string` \| `string`[] |
| `data` | `T`[]                  |

#### Returns

`number`[]

#### Defined in

[src/services/workbench/activityBarService.ts:112](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/activityBarService.ts#L112)

---

### getState

▸ **getState**(): [`IActivityBar`](../interfaces/molecule.IActivityBar)

#### Returns

[`IActivityBar`](../interfaces/molecule.IActivityBar)

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[getState](../interfaces/molecule.IActivityBarService#getstate)

#### Inherited from

[Component](molecule.react.Component).[getState](molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:62](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L62)

---

### onChange

▸ **onChange**(`callback`): `void`

Called when activity bar item which is not global is changed

#### Parameters

| Name       | Type                                                                   |
| :--------- | :--------------------------------------------------------------------- |
| `callback` | (`prevSelectedKey?`: `string`, `nextSelectedKey?`: `string`) => `void` |

#### Returns

`void`

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[onChange](../interfaces/molecule.IActivityBarService#onchange)

#### Defined in

[src/services/workbench/activityBarService.ts:224](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/activityBarService.ts#L224)

---

### onClick

▸ **onClick**(`callback`): `void`

Add click event listener

#### Parameters

| Name       | Type                                                                                                       |
| :--------- | :--------------------------------------------------------------------------------------------------------- |
| `callback` | (`selectedKey`: `string`, `item`: [`IActivityBarItem`](../interfaces/molecule.IActivityBarItem)) => `void` |

#### Returns

`void`

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[onClick](../interfaces/molecule.IActivityBarService#onclick)

#### Defined in

[src/services/workbench/activityBarService.ts:218](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/activityBarService.ts#L218)

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

[IActivityBarService](../interfaces/molecule.IActivityBarService).[onEvent](../interfaces/molecule.IActivityBarService#onevent)

#### Inherited from

[Component](molecule.react.Component).[onEvent](molecule.react.Component#onevent)

#### Defined in

[src/react/component.ts:66](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L66)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

#### Parameters

| Name       | Type                                                                                                                                               |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`IActivityBar`](../interfaces/molecule.IActivityBar), `nextState`: [`IActivityBar`](../interfaces/molecule.IActivityBar)) => `void` |

#### Returns

`void`

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[onUpdateState](../interfaces/molecule.IActivityBarService#onupdatestate)

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:54](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L54)

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

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[remove](../interfaces/molecule.IActivityBarService#remove)

#### Defined in

[src/services/workbench/activityBarService.ts:125](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/activityBarService.ts#L125)

---

### removeContextMenu

▸ **removeContextMenu**(`id`): `void`

Remove the specific contextMenu item by id

#### Parameters

| Name | Type                   |
| :--- | :--------------------- |
| `id` | `string` \| `string`[] |

#### Returns

`void`

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[removeContextMenu](../interfaces/molecule.IActivityBarService#removecontextmenu)

#### Defined in

[src/services/workbench/activityBarService.ts:198](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/activityBarService.ts#L198)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type                                                  |
| :----------- | :---------------------------------------------------- |
| `nextState?` | [`IActivityBar`](../interfaces/molecule.IActivityBar) |

#### Returns

`void`

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[render](../interfaces/molecule.IActivityBarService#render)

#### Inherited from

[Component](molecule.react.Component).[render](molecule.react.Component#render)

#### Defined in

[src/react/component.ts:50](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L50)

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

[src/services/workbench/activityBarService.ts:89](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/activityBarService.ts#L89)

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

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[setActive](../interfaces/molecule.IActivityBarService#setactive)

#### Defined in

[src/services/workbench/activityBarService.ts:83](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/activityBarService.ts#L83)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                                                               | Description                |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`IActivityBar`](../interfaces/molecule.IActivityBar)\>                                                                                  | update target state values |
| `callback?` | (`prevState`: [`IActivityBar`](../interfaces/molecule.IActivityBar), `nextState`: [`IActivityBar`](../interfaces/molecule.IActivityBar)) => `void` | -                          |

#### Returns

`void`

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[setState](../interfaces/molecule.IActivityBarService#setstate)

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

[IActivityBarService](../interfaces/molecule.IActivityBarService).[subscribe](../interfaces/molecule.IActivityBarService#subscribe)

#### Inherited from

[Component](molecule.react.Component).[subscribe](molecule.react.Component#subscribe)

#### Defined in

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventBus.ts#L11)

---

### toggleBar

▸ **toggleBar**(`id`): `void`

Toggle the specific activity bar between show or hide

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`void`

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[toggleBar](../interfaces/molecule.IActivityBarService#togglebar)

#### Defined in

[src/services/workbench/activityBarService.ts:145](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/activityBarService.ts#L145)

---

### toggleContextMenuChecked

▸ **toggleContextMenuChecked**(`id`): `void`

Toggle the contextMenu between checked or unchecked

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`void`

#### Implementation of

[IActivityBarService](../interfaces/molecule.IActivityBarService).[toggleContextMenuChecked](../interfaces/molecule.IActivityBarService#togglecontextmenuchecked)

#### Defined in

[src/services/workbench/activityBarService.ts:166](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/activityBarService.ts#L166)
