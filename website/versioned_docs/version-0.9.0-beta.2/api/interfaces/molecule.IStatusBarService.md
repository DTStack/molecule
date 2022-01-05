---
id: 'molecule.IStatusBarService'
title: 'Interface: IStatusBarService'
sidebar_label: 'IStatusBarService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IStatusBarService

## Hierarchy

-   [`Component`](../classes/molecule.react.Component)<[`IStatusBar`](molecule.model.IStatusBar)\>

    ↳ **`IStatusBarService`**

## Implemented by

-   [`StatusBarService`](../classes/molecule.StatusBarService)

## Properties

### state

• `Protected` `Abstract` **state**: [`IStatusBar`](molecule.model.IStatusBar)

#### Inherited from

[Component](../classes/molecule.react.Component).[state](../classes/molecule.react.Component#state)

#### Defined in

[src/react/component.ts:42](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L42)

## Methods

### add

▸ **add**(`item`, `float`): `void`

Add a new StatusBar item into right or left status

#### Parameters

| Name    | Type                                                      | Description                        |
| :------ | :-------------------------------------------------------- | :--------------------------------- |
| `item`  | [`IStatusBarItem`](molecule.model.IStatusBarItem)<`any`\> |                                    |
| `float` | [`Float`](../enums/molecule.model.Float)                  | position the item to left or right |

#### Returns

`void`

#### Defined in

[src/services/workbench/statusBarService.ts:21](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/statusBarService.ts#L21)

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

### getState

▸ **getState**(): [`IStatusBar`](molecule.model.IStatusBar)

Get the Component state

#### Returns

[`IStatusBar`](molecule.model.IStatusBar)

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L83)

---

### getStatusBarItem

▸ **getStatusBarItem**(`id`, `float?`): `null` \| [`IStatusBarItem`](molecule.model.IStatusBarItem)<`any`\>

Get the specific StatusBar item

#### Parameters

| Name     | Type                                     |
| :------- | :--------------------------------------- |
| `id`     | `UniqueId`                               |
| `float?` | [`Float`](../enums/molecule.model.Float) |

#### Returns

`null` \| [`IStatusBarItem`](molecule.model.IStatusBarItem)<`any`\>

#### Defined in

[src/services/workbench/statusBarService.ts:38](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/statusBarService.ts#L38)

---

### onClick

▸ **onClick**(`callback`): `any`

Listen to the StatusBar click event

#### Parameters

| Name       | Type                                                                                             |
| :--------- | :----------------------------------------------------------------------------------------------- |
| `callback` | (`e`: `MouseEvent`, `item`: [`IStatusBarItem`](molecule.model.IStatusBarItem)<`any`\>) => `void` |

#### Returns

`any`

#### Defined in

[src/services/workbench/statusBarService.ts:47](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/statusBarService.ts#L47)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                       |
| :--------- | :------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`IStatusBar`](molecule.model.IStatusBar), `nextState`: [`IStatusBar`](molecule.model.IStatusBar)) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:71](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L71)

---

### remove

▸ **remove**(`id`, `float?`): `void`

Remove the specific StatusBar item

#### Parameters

| Name     | Type                                     | Description                                            |
| :------- | :--------------------------------------- | :----------------------------------------------------- |
| `id`     | `UniqueId`                               |                                                        |
| `float?` | [`Float`](../enums/molecule.model.Float) | if provided, it'll remove the item in spcific position |

#### Returns

`void`

#### Defined in

[src/services/workbench/statusBarService.ts:27](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/statusBarService.ts#L27)

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

| Name         | Type                                      |
| :----------- | :---------------------------------------- |
| `nextState?` | [`IStatusBar`](molecule.model.IStatusBar) |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[render](../classes/molecule.react.Component#render)

#### Defined in

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L67)

---

### reset

▸ **reset**(): `void`

Reset the contextMenu data and the StatusBar data , including right and left

#### Returns

`void`

#### Defined in

[src/services/workbench/statusBarService.ts:42](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/statusBarService.ts#L42)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                                       | Description                |
| :---------- | :------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`IStatusBar`](molecule.model.IStatusBar)\>                                                                      | update target state values |
| `callback?` | (`prevState`: [`IStatusBar`](molecule.model.IStatusBar), `nextState`: [`IStatusBar`](molecule.model.IStatusBar)) => `void` | -                          |

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

▸ **update**(`item`, `float?`): `void`

Update the specific StatusBar item, it'll update the item found in left

#### Parameters

| Name     | Type                                                      | Description                                             |
| :------- | :-------------------------------------------------------- | :------------------------------------------------------ |
| `item`   | [`IStatusBarItem`](molecule.model.IStatusBarItem)<`any`\> | the id field is required                                |
| `float?` | [`Float`](../enums/molecule.model.Float)                  | if provided, it'll update the item in specific position |

#### Returns

`void`

#### Defined in

[src/services/workbench/statusBarService.ts:33](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/statusBarService.ts#L33)
