---
id: 'molecule.SidebarService'
title: 'Class: SidebarService'
sidebar_label: 'SidebarService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).SidebarService

## Hierarchy

-   [`Component`](molecule.react.Component)<[`ISidebar`](../interfaces/molecule.model.ISidebar)\>

    ↳ **`SidebarService`**

## Implements

-   [`ISidebarService`](../interfaces/molecule.ISidebarService)

## Constructors

### constructor

• **new SidebarService**()

#### Overrides

[Component](molecule.react.Component).[constructor](molecule.react.Component#constructor)

#### Defined in

[services/workbench/sidebarService.ts:54](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/sidebarService.ts#L54)

## Properties

### state

• `Protected` **state**: [`ISidebar`](../interfaces/molecule.model.ISidebar)

#### Implementation of

[ISidebarService](../interfaces/molecule.ISidebarService).[state](../interfaces/molecule.ISidebarService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[services/workbench/sidebarService.ts:52](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/sidebarService.ts#L52)

## Methods

### add

▸ **add**(`data`, `isActive?`): `void`

Add a new Sidebar pane

#### Parameters

| Name       | Type                                                        | Default value |
| :--------- | :---------------------------------------------------------- | :------------ |
| `data`     | [`ISidebarPane`](../interfaces/molecule.model.ISidebarPane) | `undefined`   |
| `isActive` | `boolean`                                                   | `false`       |

#### Returns

`void`

#### Implementation of

[ISidebarService](../interfaces/molecule.ISidebarService).[add](../interfaces/molecule.ISidebarService#add)

#### Defined in

[services/workbench/sidebarService.ts:70](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/sidebarService.ts#L70)

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

[ISidebarService](../interfaces/molecule.ISidebarService).[emit](../interfaces/molecule.ISidebarService#emit)

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

[ISidebarService](../interfaces/molecule.ISidebarService).[forceUpdate](../interfaces/molecule.ISidebarService#forceupdate)

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

#### Defined in

[react/component.ts:81](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L81)

---

### get

▸ **get**(`id`): `undefined` \| [`ISidebarPane`](../interfaces/molecule.model.ISidebarPane)

Get a specific pane via id

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `id` | `UniqueId` |

#### Returns

`undefined` \| [`ISidebarPane`](../interfaces/molecule.model.ISidebarPane)

#### Implementation of

[ISidebarService](../interfaces/molecule.ISidebarService).[get](../interfaces/molecule.ISidebarService#get)

#### Defined in

[services/workbench/sidebarService.ts:65](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/sidebarService.ts#L65)

---

### getPane

▸ `Private` **getPane**(`id`): `undefined` \| [`ISidebarPane`](../interfaces/molecule.model.ISidebarPane)

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `id` | `UniqueId` |

#### Returns

`undefined` \| [`ISidebarPane`](../interfaces/molecule.model.ISidebarPane)

#### Defined in

[services/workbench/sidebarService.ts:59](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/sidebarService.ts#L59)

---

### getState

▸ **getState**(): [`ISidebar`](../interfaces/molecule.model.ISidebar)

Get the Component state

#### Returns

[`ISidebar`](../interfaces/molecule.model.ISidebar)

#### Implementation of

[ISidebarService](../interfaces/molecule.ISidebarService).[getState](../interfaces/molecule.ISidebarService#getstate)

#### Inherited from

[Component](molecule.react.Component).[getState](molecule.react.Component#getstate)

#### Defined in

[react/component.ts:85](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L85)

---

### onUpdateState

▸ **onUpdateState**(`listener`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                                           |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| `listener` | (`prevState`: [`ISidebar`](../interfaces/molecule.model.ISidebar), `nextState`: [`ISidebar`](../interfaces/molecule.model.ISidebar)) => `void` |

#### Returns

`void`

#### Implementation of

[ISidebarService](../interfaces/molecule.ISidebarService).[onUpdateState](../interfaces/molecule.ISidebarService#onupdatestate)

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

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

#### Implementation of

[ISidebarService](../interfaces/molecule.ISidebarService).[remove](../interfaces/molecule.ISidebarService#remove)

#### Defined in

[services/workbench/sidebarService.ts:105](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/sidebarService.ts#L105)

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

[ISidebarService](../interfaces/molecule.ISidebarService).[removeOnUpdateState](../interfaces/molecule.ISidebarService#removeonupdatestate)

#### Inherited from

[Component](molecule.react.Component).[removeOnUpdateState](molecule.react.Component#removeonupdatestate)

#### Defined in

[react/component.ts:77](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L77)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type                                                |
| :----------- | :-------------------------------------------------- |
| `nextState?` | [`ISidebar`](../interfaces/molecule.model.ISidebar) |

#### Returns

`void`

#### Implementation of

[ISidebarService](../interfaces/molecule.ISidebarService).[render](../interfaces/molecule.ISidebarService#render)

#### Inherited from

[Component](molecule.react.Component).[render](molecule.react.Component#render)

#### Defined in

[react/component.ts:69](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L69)

---

### reset

▸ **reset**(): `void`

Reset the sidebar data

#### Returns

`void`

#### Implementation of

[ISidebarService](../interfaces/molecule.ISidebarService).[reset](../interfaces/molecule.ISidebarService#reset)

#### Defined in

[services/workbench/sidebarService.ts:143](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/sidebarService.ts#L143)

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

#### Implementation of

[ISidebarService](../interfaces/molecule.ISidebarService).[setActive](../interfaces/molecule.ISidebarService#setactive)

#### Defined in

[services/workbench/sidebarService.ts:126](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/sidebarService.ts#L126)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                                                           | Description                |
| :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`ISidebar`](../interfaces/molecule.model.ISidebar)\>                                                                                | update target state values |
| `callback?` | (`prevState`: [`ISidebar`](../interfaces/molecule.model.ISidebar), `nextState`: [`ISidebar`](../interfaces/molecule.model.ISidebar)) => `void` | -                          |

#### Returns

`void`

#### Implementation of

[ISidebarService](../interfaces/molecule.ISidebarService).[setState](../interfaces/molecule.ISidebarService#setstate)

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

[ISidebarService](../interfaces/molecule.ISidebarService).[subscribe](../interfaces/molecule.ISidebarService#subscribe)

#### Inherited from

[Component](molecule.react.Component).[subscribe](molecule.react.Component#subscribe)

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

#### Implementation of

[ISidebarService](../interfaces/molecule.ISidebarService).[unsubscribe](../interfaces/molecule.ISidebarService#unsubscribe)

#### Inherited from

[Component](molecule.react.Component).[unsubscribe](molecule.react.Component#unsubscribe)

#### Defined in

[common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L37)

---

### update

▸ **update**(`pane`): `void`

Update a specific pane

#### Parameters

| Name   | Type                                                        |
| :----- | :---------------------------------------------------------- |
| `pane` | [`ISidebarPane`](../interfaces/molecule.model.ISidebarPane) |

#### Returns

`void`

#### Implementation of

[ISidebarService](../interfaces/molecule.ISidebarService).[update](../interfaces/molecule.ISidebarService#update)

#### Defined in

[services/workbench/sidebarService.ts:91](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/sidebarService.ts#L91)
