---
id: 'molecule.ISidebarService'
title: 'Interface: ISidebarService'
sidebar_label: 'ISidebarService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).ISidebarService

## Hierarchy

-   [`Component`](../classes/molecule.react.Component)<[`ISidebar`](molecule.model.ISidebar)\>

    ↳ **`ISidebarService`**

## Implemented by

-   [`SidebarService`](../classes/molecule.SidebarService)

## Properties

### state

• `Protected` `Abstract` **state**: [`ISidebar`](molecule.model.ISidebar)

#### Inherited from

[Component](../classes/molecule.react.Component).[state](../classes/molecule.react.Component#state)

#### Defined in

[src/react/component.ts:42](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L42)

## Methods

### add

▸ **add**(`pane`, `isActive?`): `void`

Add a new Sidebar pane

#### Parameters

| Name        | Type                                          | Description                          |
| :---------- | :-------------------------------------------- | :----------------------------------- |
| `pane`      | [`ISidebarPane`](molecule.model.ISidebarPane) |                                      |
| `isActive?` | `boolean`                                     | Whether to activate the current pane |

#### Returns

`void`

#### Defined in

[src/services/workbench/sidebarService.ts:25](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/sidebarService.ts#L25)

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

### get

▸ **get**(`id`): `undefined` \| [`ISidebarPane`](molecule.model.ISidebarPane)

Get a specific pane via id

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `id` | `UniqueId` |

#### Returns

`undefined` \| [`ISidebarPane`](molecule.model.ISidebarPane)

#### Defined in

[src/services/workbench/sidebarService.ts:19](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/sidebarService.ts#L19)

---

### getState

▸ **getState**(): [`ISidebar`](molecule.model.ISidebar)

Get the Component state

#### Returns

[`ISidebar`](molecule.model.ISidebar)

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L83)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                               |
| :--------- | :----------------------------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`ISidebar`](molecule.model.ISidebar), `nextState`: [`ISidebar`](molecule.model.ISidebar)) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:71](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L71)

---

### remove

▸ **remove**(`id`): `void`

Remove a pane

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `id` | `UniqueId` |

#### Returns

`void`

#### Defined in

[src/services/workbench/sidebarService.ts:35](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/sidebarService.ts#L35)

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

| Name         | Type                                  |
| :----------- | :------------------------------------ |
| `nextState?` | [`ISidebar`](molecule.model.ISidebar) |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[render](../classes/molecule.react.Component#render)

#### Defined in

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L67)

---

### reset

▸ **reset**(): `void`

Reset the sidebar data

#### Returns

`void`

#### Defined in

[src/services/workbench/sidebarService.ts:44](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/sidebarService.ts#L44)

---

### setActive

▸ **setActive**(`id?`): `void`

Set the specific pane as active

#### Parameters

| Name  | Type       |
| :---- | :--------- |
| `id?` | `UniqueId` |

#### Returns

`void`

#### Defined in

[src/services/workbench/sidebarService.ts:40](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/sidebarService.ts#L40)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                               | Description                |
| :---------- | :----------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`ISidebar`](molecule.model.ISidebar)\>                                                                  | update target state values |
| `callback?` | (`prevState`: [`ISidebar`](molecule.model.ISidebar), `nextState`: [`ISidebar`](molecule.model.ISidebar)) => `void` | -                          |

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

▸ **update**(`pane`): `void`

Update a specific pane

#### Parameters

| Name   | Type                                          |
| :----- | :-------------------------------------------- |
| `pane` | [`ISidebarPane`](molecule.model.ISidebarPane) |

#### Returns

`void`

#### Defined in

[src/services/workbench/sidebarService.ts:30](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/sidebarService.ts#L30)
