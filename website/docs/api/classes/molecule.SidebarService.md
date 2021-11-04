---
id: 'molecule.SidebarService'
title: 'Class: SidebarService'
sidebar_label: 'SidebarService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).SidebarService

## Hierarchy

-   [`Component`](molecule.react.Component)<[`ISidebar`](../interfaces/molecule.ISidebar)\>

    ↳ **`SidebarService`**

## Implements

-   [`ISidebarService`](../interfaces/molecule.ISidebarService)

## Constructors

### constructor

• **new SidebarService**()

#### Overrides

[Component](molecule.react.Component).[constructor](molecule.react.Component#constructor)

#### Defined in

[src/services/workbench/sidebarService.ts:52](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/sidebarService.ts#L52)

## Properties

### state

• `Protected` **state**: [`ISidebar`](../interfaces/molecule.ISidebar)

#### Implementation of

[ISidebarService](../interfaces/molecule.ISidebarService).[state](../interfaces/molecule.ISidebarService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[src/services/workbench/sidebarService.ts:50](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/sidebarService.ts#L50)

## Methods

### add

▸ **add**(`data`, `isActive?`): `void`

Add a new Sidebar pane

#### Parameters

| Name       | Type           | Default value |
| :--------- | :------------- | :------------ |
| `data`     | `ISidebarPane` | `undefined`   |
| `isActive` | `boolean`      | `false`       |

#### Returns

`void`

#### Implementation of

[ISidebarService](../interfaces/molecule.ISidebarService).[add](../interfaces/molecule.ISidebarService#add)

#### Defined in

[src/services/workbench/sidebarService.ts:68](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/sidebarService.ts#L68)

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

[ISidebarService](../interfaces/molecule.ISidebarService).[count](../interfaces/molecule.ISidebarService#count)

#### Inherited from

[Component](molecule.react.Component).[count](molecule.react.Component#count)

#### Defined in

[src/common/event/eventBus.ts:28](https://github.com/DTStack/molecule/blob/b675cb9/src/common/event/eventBus.ts#L28)

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

[ISidebarService](../interfaces/molecule.ISidebarService).[emit](../interfaces/molecule.ISidebarService#emit)

#### Inherited from

[Component](molecule.react.Component).[emit](molecule.react.Component#emit)

#### Defined in

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/b675cb9/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

Force to update the Component

#### Returns

`void`

#### Implementation of

[ISidebarService](../interfaces/molecule.ISidebarService).[forceUpdate](../interfaces/molecule.ISidebarService#forceupdate)

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:79](https://github.com/DTStack/molecule/blob/b675cb9/src/react/component.ts#L79)

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

#### Implementation of

[ISidebarService](../interfaces/molecule.ISidebarService).[get](../interfaces/molecule.ISidebarService#get)

#### Defined in

[src/services/workbench/sidebarService.ts:63](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/sidebarService.ts#L63)

---

### getPane

▸ `Private` **getPane**(`id`): `undefined` \| `ISidebarPane`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`undefined` \| `ISidebarPane`

#### Defined in

[src/services/workbench/sidebarService.ts:57](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/sidebarService.ts#L57)

---

### getState

▸ **getState**(): [`ISidebar`](../interfaces/molecule.ISidebar)

Get the Component state

#### Returns

[`ISidebar`](../interfaces/molecule.ISidebar)

#### Implementation of

[ISidebarService](../interfaces/molecule.ISidebarService).[getState](../interfaces/molecule.ISidebarService#getstate)

#### Inherited from

[Component](molecule.react.Component).[getState](molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/b675cb9/src/react/component.ts#L83)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                               |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`ISidebar`](../interfaces/molecule.ISidebar), `nextState`: [`ISidebar`](../interfaces/molecule.ISidebar)) => `void` |

#### Returns

`void`

#### Implementation of

[ISidebarService](../interfaces/molecule.ISidebarService).[onUpdateState](../interfaces/molecule.ISidebarService#onupdatestate)

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:71](https://github.com/DTStack/molecule/blob/b675cb9/src/react/component.ts#L71)

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

#### Implementation of

[ISidebarService](../interfaces/molecule.ISidebarService).[remove](../interfaces/molecule.ISidebarService#remove)

#### Defined in

[src/services/workbench/sidebarService.ts:103](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/sidebarService.ts#L103)

---

### removeOnUpdateState

▸ **removeOnUpdateState**(): `void`

Remove the Component update event listening

#### Returns

`void`

#### Implementation of

[ISidebarService](../interfaces/molecule.ISidebarService).[removeOnUpdateState](../interfaces/molecule.ISidebarService#removeonupdatestate)

#### Inherited from

[Component](molecule.react.Component).[removeOnUpdateState](molecule.react.Component#removeonupdatestate)

#### Defined in

[src/react/component.ts:75](https://github.com/DTStack/molecule/blob/b675cb9/src/react/component.ts#L75)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type                                          |
| :----------- | :-------------------------------------------- |
| `nextState?` | [`ISidebar`](../interfaces/molecule.ISidebar) |

#### Returns

`void`

#### Implementation of

[ISidebarService](../interfaces/molecule.ISidebarService).[render](../interfaces/molecule.ISidebarService#render)

#### Inherited from

[Component](molecule.react.Component).[render](molecule.react.Component#render)

#### Defined in

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/b675cb9/src/react/component.ts#L67)

---

### reset

▸ **reset**(): `void`

Reset the sidebar data

#### Returns

`void`

#### Implementation of

[ISidebarService](../interfaces/molecule.ISidebarService).[reset](../interfaces/molecule.ISidebarService#reset)

#### Defined in

[src/services/workbench/sidebarService.ts:141](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/sidebarService.ts#L141)

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

#### Implementation of

[ISidebarService](../interfaces/molecule.ISidebarService).[setActive](../interfaces/molecule.ISidebarService#setactive)

#### Defined in

[src/services/workbench/sidebarService.ts:124](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/sidebarService.ts#L124)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                                               | Description                |
| :---------- | :--------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`ISidebar`](../interfaces/molecule.ISidebar)\>                                                                          | update target state values |
| `callback?` | (`prevState`: [`ISidebar`](../interfaces/molecule.ISidebar), `nextState`: [`ISidebar`](../interfaces/molecule.ISidebar)) => `void` | -                          |

#### Returns

`void`

#### Implementation of

[ISidebarService](../interfaces/molecule.ISidebarService).[setState](../interfaces/molecule.ISidebarService#setstate)

#### Inherited from

[Component](molecule.react.Component).[setState](molecule.react.Component#setstate)

#### Defined in

[src/react/component.ts:54](https://github.com/DTStack/molecule/blob/b675cb9/src/react/component.ts#L54)

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

[ISidebarService](../interfaces/molecule.ISidebarService).[subscribe](../interfaces/molecule.ISidebarService#subscribe)

#### Inherited from

[Component](molecule.react.Component).[subscribe](molecule.react.Component#subscribe)

#### Defined in

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/b675cb9/src/common/event/eventBus.ts#L11)

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

[ISidebarService](../interfaces/molecule.ISidebarService).[unsubscribe](../interfaces/molecule.ISidebarService#unsubscribe)

#### Inherited from

[Component](molecule.react.Component).[unsubscribe](molecule.react.Component#unsubscribe)

#### Defined in

[src/common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/b675cb9/src/common/event/eventBus.ts#L37)

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

#### Implementation of

[ISidebarService](../interfaces/molecule.ISidebarService).[update](../interfaces/molecule.ISidebarService#update)

#### Defined in

[src/services/workbench/sidebarService.ts:89](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/sidebarService.ts#L89)
