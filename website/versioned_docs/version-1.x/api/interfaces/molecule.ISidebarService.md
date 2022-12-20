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

[react/component.ts:44](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L44)

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

[services/workbench/sidebarService.ts:25](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/sidebarService.ts#L25)

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

[services/workbench/sidebarService.ts:19](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/sidebarService.ts#L19)

---

### getState

▸ **getState**(): [`ISidebar`](molecule.model.ISidebar)

Get the Component state

#### Returns

[`ISidebar`](molecule.model.ISidebar)

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

#### Defined in

[react/component.ts:85](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L85)

---

### onUpdateState

▸ **onUpdateState**(`listener`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                               |
| :--------- | :----------------------------------------------------------------------------------------------------------------- |
| `listener` | (`prevState`: [`ISidebar`](molecule.model.ISidebar), `nextState`: [`ISidebar`](molecule.model.ISidebar)) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

#### Defined in

[react/component.ts:73](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L73)

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

[services/workbench/sidebarService.ts:35](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/sidebarService.ts#L35)

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

| Name         | Type                                  |
| :----------- | :------------------------------------ |
| `nextState?` | [`ISidebar`](molecule.model.ISidebar) |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[render](../classes/molecule.react.Component#render)

#### Defined in

[react/component.ts:69](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L69)

---

### reset

▸ **reset**(): `void`

Reset the sidebar data

#### Returns

`void`

#### Defined in

[services/workbench/sidebarService.ts:44](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/sidebarService.ts#L44)

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

[services/workbench/sidebarService.ts:40](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/sidebarService.ts#L40)

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

[services/workbench/sidebarService.ts:30](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/sidebarService.ts#L30)
