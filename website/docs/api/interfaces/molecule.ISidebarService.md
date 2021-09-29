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

[src/react/component.ts:25](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L25)

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

[src/services/workbench/sidebarService.ts:24](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/sidebarService.ts#L24)

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

[src/services/workbench/sidebarService.ts:18](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/sidebarService.ts#L18)

---

### getState

▸ **getState**(): [`ISidebar`](molecule.ISidebar)

#### Returns

[`ISidebar`](molecule.ISidebar)

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

| Name       | Type                                                                                                   |
| :--------- | :----------------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`ISidebar`](molecule.ISidebar), `nextState`: [`ISidebar`](molecule.ISidebar)) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:54](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L54)

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

[src/services/workbench/sidebarService.ts:34](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/sidebarService.ts#L34)

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

[src/react/component.ts:50](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L50)

---

### reset

▸ **reset**(): `void`

Reset the sidebar data

#### Returns

`void`

#### Defined in

[src/services/workbench/sidebarService.ts:43](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/sidebarService.ts#L43)

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

[src/services/workbench/sidebarService.ts:39](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/sidebarService.ts#L39)

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

[src/services/workbench/sidebarService.ts:29](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/sidebarService.ts#L29)
