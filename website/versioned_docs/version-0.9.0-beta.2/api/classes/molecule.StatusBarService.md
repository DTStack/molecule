---
id: 'molecule.StatusBarService'
title: 'Class: StatusBarService'
sidebar_label: 'StatusBarService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).StatusBarService

## Hierarchy

-   [`Component`](molecule.react.Component)<[`IStatusBar`](../interfaces/molecule.model.IStatusBar)\>

    ↳ **`StatusBarService`**

## Implements

-   [`IStatusBarService`](../interfaces/molecule.IStatusBarService)

## Constructors

### constructor

• **new StatusBarService**()

#### Overrides

[Component](molecule.react.Component).[constructor](molecule.react.Component#constructor)

#### Defined in

[src/services/workbench/statusBarService.ts:68](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/statusBarService.ts#L68)

## Properties

### state

• `Protected` **state**: [`IStatusBar`](../interfaces/molecule.model.IStatusBar)

#### Implementation of

[IStatusBarService](../interfaces/molecule.IStatusBarService).[state](../interfaces/molecule.IStatusBarService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[src/services/workbench/statusBarService.ts:66](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/statusBarService.ts#L66)

## Methods

### add

▸ **add**(`item`, `float`): `void`

Add a new StatusBar item into right or left status

#### Parameters

| Name    | Type                                                                    |
| :------ | :---------------------------------------------------------------------- |
| `item`  | [`IStatusBarItem`](../interfaces/molecule.model.IStatusBarItem)<`any`\> |
| `float` | [`Float`](../enums/molecule.model.Float)                                |

#### Returns

`void`

#### Implementation of

[IStatusBarService](../interfaces/molecule.IStatusBarService).[add](../interfaces/molecule.IStatusBarService#add)

#### Defined in

[src/services/workbench/statusBarService.ts:120](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/statusBarService.ts#L120)

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

[IStatusBarService](../interfaces/molecule.IStatusBarService).[count](../interfaces/molecule.IStatusBarService#count)

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

[IStatusBarService](../interfaces/molecule.IStatusBarService).[emit](../interfaces/molecule.IStatusBarService#emit)

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

[IStatusBarService](../interfaces/molecule.IStatusBarService).[forceUpdate](../interfaces/molecule.IStatusBarService#forceupdate)

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:79](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L79)

---

### getItem

▸ `Private` **getItem**(`item`, `float?`): `StatusBarItemInfos`

Get the item informations in right position or left position

#### Parameters

| Name     | Type                                                                    |
| :------- | :---------------------------------------------------------------------- |
| `item`   | [`IStatusBarItem`](../interfaces/molecule.model.IStatusBarItem)<`any`\> |
| `float?` | [`Float`](../enums/molecule.model.Float)                                |

#### Returns

`StatusBarItemInfos`

#### Defined in

[src/services/workbench/statusBarService.ts:78](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/statusBarService.ts#L78)

---

### getState

▸ **getState**(): [`IStatusBar`](../interfaces/molecule.model.IStatusBar)

Get the Component state

#### Returns

[`IStatusBar`](../interfaces/molecule.model.IStatusBar)

#### Implementation of

[IStatusBarService](../interfaces/molecule.IStatusBarService).[getState](../interfaces/molecule.IStatusBarService#getstate)

#### Inherited from

[Component](molecule.react.Component).[getState](molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L83)

---

### getStatusBarItem

▸ **getStatusBarItem**(`id`, `float?`): `null` \| [`IStatusBarItem`](../interfaces/molecule.model.IStatusBarItem)<`any`\>

Get the specific StatusBar item

#### Parameters

| Name     | Type                                     |
| :------- | :--------------------------------------- |
| `id`     | `UniqueId`                               |
| `float?` | [`Float`](../enums/molecule.model.Float) |

#### Returns

`null` \| [`IStatusBarItem`](../interfaces/molecule.model.IStatusBarItem)<`any`\>

#### Implementation of

[IStatusBarService](../interfaces/molecule.IStatusBarService).[getStatusBarItem](../interfaces/molecule.IStatusBarService#getstatusbaritem)

#### Defined in

[src/services/workbench/statusBarService.ts:152](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/statusBarService.ts#L152)

---

### onClick

▸ **onClick**(`callback`): `void`

Listen to the StatusBar click event

#### Parameters

| Name       | Type                                                                                                           |
| :--------- | :------------------------------------------------------------------------------------------------------------- |
| `callback` | (`e`: `MouseEvent`, `item`: [`IStatusBarItem`](../interfaces/molecule.model.IStatusBarItem)<`any`\>) => `void` |

#### Returns

`void`

#### Implementation of

[IStatusBarService](../interfaces/molecule.IStatusBarService).[onClick](../interfaces/molecule.IStatusBarService#onclick)

#### Defined in

[src/services/workbench/statusBarService.ts:181](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/statusBarService.ts#L181)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                                                   |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`IStatusBar`](../interfaces/molecule.model.IStatusBar), `nextState`: [`IStatusBar`](../interfaces/molecule.model.IStatusBar)) => `void` |

#### Returns

`void`

#### Implementation of

[IStatusBarService](../interfaces/molecule.IStatusBarService).[onUpdateState](../interfaces/molecule.IStatusBarService#onupdatestate)

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:71](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L71)

---

### remove

▸ **remove**(`id`, `float?`): `void`

Remove the specific StatusBar item

#### Parameters

| Name     | Type                                     |
| :------- | :--------------------------------------- |
| `id`     | `UniqueId`                               |
| `float?` | [`Float`](../enums/molecule.model.Float) |

#### Returns

`void`

#### Implementation of

[IStatusBarService](../interfaces/molecule.IStatusBarService).[remove](../interfaces/molecule.IStatusBarService#remove)

#### Defined in

[src/services/workbench/statusBarService.ts:157](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/statusBarService.ts#L157)

---

### removeOnUpdateState

▸ **removeOnUpdateState**(): `void`

Remove the Component update event listening

#### Returns

`void`

#### Implementation of

[IStatusBarService](../interfaces/molecule.IStatusBarService).[removeOnUpdateState](../interfaces/molecule.IStatusBarService#removeonupdatestate)

#### Inherited from

[Component](molecule.react.Component).[removeOnUpdateState](molecule.react.Component#removeonupdatestate)

#### Defined in

[src/react/component.ts:75](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L75)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type                                                    |
| :----------- | :------------------------------------------------------ |
| `nextState?` | [`IStatusBar`](../interfaces/molecule.model.IStatusBar) |

#### Returns

`void`

#### Implementation of

[IStatusBarService](../interfaces/molecule.IStatusBarService).[render](../interfaces/molecule.IStatusBarService#render)

#### Inherited from

[Component](molecule.react.Component).[render](molecule.react.Component#render)

#### Defined in

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L67)

---

### reset

▸ **reset**(): `void`

Reset the contextMenu data and the StatusBar data , including right and left

#### Returns

`void`

#### Implementation of

[IStatusBarService](../interfaces/molecule.IStatusBarService).[reset](../interfaces/molecule.IStatusBarService#reset)

#### Defined in

[src/services/workbench/statusBarService.ts:173](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/statusBarService.ts#L173)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                                                                   | Description                |
| :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`IStatusBar`](../interfaces/molecule.model.IStatusBar)\>                                                                                    | update target state values |
| `callback?` | (`prevState`: [`IStatusBar`](../interfaces/molecule.model.IStatusBar), `nextState`: [`IStatusBar`](../interfaces/molecule.model.IStatusBar)) => `void` | -                          |

#### Returns

`void`

#### Implementation of

[IStatusBarService](../interfaces/molecule.IStatusBarService).[setState](../interfaces/molecule.IStatusBarService#setstate)

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

[IStatusBarService](../interfaces/molecule.IStatusBarService).[subscribe](../interfaces/molecule.IStatusBarService#subscribe)

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

[IStatusBarService](../interfaces/molecule.IStatusBarService).[unsubscribe](../interfaces/molecule.IStatusBarService#unsubscribe)

#### Inherited from

[Component](molecule.react.Component).[unsubscribe](molecule.react.Component#unsubscribe)

#### Defined in

[src/common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L37)

---

### update

▸ **update**(`item`, `float?`): `void`

Update the specific StatusBar item, it'll update the item found in left

#### Parameters

| Name     | Type                                                                    |
| :------- | :---------------------------------------------------------------------- |
| `item`   | [`IStatusBarItem`](../interfaces/molecule.model.IStatusBarItem)<`any`\> |
| `float?` | [`Float`](../enums/molecule.model.Float)                                |

#### Returns

`void`

#### Implementation of

[IStatusBarService](../interfaces/molecule.IStatusBarService).[update](../interfaces/molecule.IStatusBarService#update)

#### Defined in

[src/services/workbench/statusBarService.ts:136](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/statusBarService.ts#L136)
