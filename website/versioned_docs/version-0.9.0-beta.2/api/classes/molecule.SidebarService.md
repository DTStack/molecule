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

[src/services/workbench/sidebarService.ts:53](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/sidebarService.ts#L53)

## Properties

### state

• `Protected` **state**: [`ISidebar`](../interfaces/molecule.model.ISidebar)

#### Implementation of

[ISidebarService](../interfaces/molecule.ISidebarService).[state](../interfaces/molecule.ISidebarService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[src/services/workbench/sidebarService.ts:51](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/sidebarService.ts#L51)

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

[src/services/workbench/sidebarService.ts:69](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/sidebarService.ts#L69)

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

[ISidebarService](../interfaces/molecule.ISidebarService).[emit](../interfaces/molecule.ISidebarService#emit)

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

[ISidebarService](../interfaces/molecule.ISidebarService).[forceUpdate](../interfaces/molecule.ISidebarService#forceupdate)

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:79](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L79)

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

[src/services/workbench/sidebarService.ts:64](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/sidebarService.ts#L64)

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

[src/services/workbench/sidebarService.ts:58](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/sidebarService.ts#L58)

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

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L83)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                                           |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`ISidebar`](../interfaces/molecule.model.ISidebar), `nextState`: [`ISidebar`](../interfaces/molecule.model.ISidebar)) => `void` |

#### Returns

`void`

#### Implementation of

[ISidebarService](../interfaces/molecule.ISidebarService).[onUpdateState](../interfaces/molecule.ISidebarService#onupdatestate)

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

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

#### Implementation of

[ISidebarService](../interfaces/molecule.ISidebarService).[remove](../interfaces/molecule.ISidebarService#remove)

#### Defined in

[src/services/workbench/sidebarService.ts:104](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/sidebarService.ts#L104)

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

[src/react/component.ts:75](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L75)

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

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L67)

---

### reset

▸ **reset**(): `void`

Reset the sidebar data

#### Returns

`void`

#### Implementation of

[ISidebarService](../interfaces/molecule.ISidebarService).[reset](../interfaces/molecule.ISidebarService#reset)

#### Defined in

[src/services/workbench/sidebarService.ts:142](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/sidebarService.ts#L142)

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

[src/services/workbench/sidebarService.ts:125](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/sidebarService.ts#L125)

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

[ISidebarService](../interfaces/molecule.ISidebarService).[subscribe](../interfaces/molecule.ISidebarService#subscribe)

#### Inherited from

[Component](molecule.react.Component).[subscribe](molecule.react.Component#subscribe)

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

#### Implementation of

[ISidebarService](../interfaces/molecule.ISidebarService).[unsubscribe](../interfaces/molecule.ISidebarService#unsubscribe)

#### Inherited from

[Component](molecule.react.Component).[unsubscribe](molecule.react.Component#unsubscribe)

#### Defined in

[src/common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L37)

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

[src/services/workbench/sidebarService.ts:90](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/sidebarService.ts#L90)
