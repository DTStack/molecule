---
id: 'molecule.ISidebarService'
title: 'Interface: ISidebarService'
sidebar_label: 'ISidebarService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).ISidebarService

## Hierarchy

-   [`Component`](../classes/molecule.react.Component)<[`ISidebar`](molecule.ISidebar)\>

    ↳ **`ISidebarService`**

## Implemented by

-   [`SidebarService`](../classes/molecule.SidebarService)

## Properties

### state

• `Protected` `Abstract` **state**: [`ISidebar`](molecule.ISidebar)

#### Inherited from

[Component](../classes/molecule.react.Component).[state](../classes/molecule.react.Component#state)

#### Defined in

[src/react/component.ts:42](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L42)

## Methods

### add

▸ **add**(`pane`, `isActive?`): `void`

Add a new Sidebar pane

#### Parameters

| Name        | Type           | Description                          |
| :---------- | :------------- | :----------------------------------- |
| `pane`      | `ISidebarPane` |                                      |
| `isActive?` | `boolean`      | Whether to activate the current pane |

#### Returns

`void`

#### Defined in

[src/services/workbench/sidebarService.ts:24](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/sidebarService.ts#L24)

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

### get

▸ **get**(`id`): `undefined` \| `ISidebarPane`

Get a specific pane via id

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`undefined` \| `ISidebarPane`

#### Defined in

[src/services/workbench/sidebarService.ts:18](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/sidebarService.ts#L18)

---

### getState

▸ **getState**(): [`ISidebar`](molecule.ISidebar)

Get the Component state

#### Returns

[`ISidebar`](molecule.ISidebar)

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L83)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                   |
| :--------- | :----------------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`ISidebar`](molecule.ISidebar), `nextState`: [`ISidebar`](molecule.ISidebar)) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:71](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L71)

---

### remove

▸ **remove**(`id`): `void`

Remove a pane

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`void`

#### Defined in

[src/services/workbench/sidebarService.ts:34](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/sidebarService.ts#L34)

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

| Name         | Type                            |
| :----------- | :------------------------------ |
| `nextState?` | [`ISidebar`](molecule.ISidebar) |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[render](../classes/molecule.react.Component#render)

#### Defined in

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L67)

---

### reset

▸ **reset**(): `void`

Reset the sidebar data

#### Returns

`void`

#### Defined in

[src/services/workbench/sidebarService.ts:43](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/sidebarService.ts#L43)

---

### setActive

▸ **setActive**(`id?`): `void`

Set the specific pane as active

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `id?` | `string` |

#### Returns

`void`

#### Defined in

[src/services/workbench/sidebarService.ts:39](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/sidebarService.ts#L39)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                   | Description                |
| :---------- | :----------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`ISidebar`](molecule.ISidebar)\>                                                            | update target state values |
| `callback?` | (`prevState`: [`ISidebar`](molecule.ISidebar), `nextState`: [`ISidebar`](molecule.ISidebar)) => `void` | -                          |

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

---

### update

▸ **update**(`pane`): `void`

Update a specific pane

#### Parameters

| Name   | Type           |
| :----- | :------------- |
| `pane` | `ISidebarPane` |

#### Returns

`void`

#### Defined in

[src/services/workbench/sidebarService.ts:29](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/sidebarService.ts#L29)
