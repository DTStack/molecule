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

[react/component.ts:44](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L44)

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

[services/workbench/statusBarService.ts:21](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/statusBarService.ts#L21)

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

### getState

▸ **getState**(): [`IStatusBar`](molecule.model.IStatusBar)

Get the Component state

#### Returns

[`IStatusBar`](molecule.model.IStatusBar)

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

#### Defined in

[react/component.ts:85](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L85)

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

[services/workbench/statusBarService.ts:38](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/statusBarService.ts#L38)

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

[services/workbench/statusBarService.ts:47](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/statusBarService.ts#L47)

---

### onUpdateState

▸ **onUpdateState**(`listener`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                       |
| :--------- | :------------------------------------------------------------------------------------------------------------------------- |
| `listener` | (`prevState`: [`IStatusBar`](molecule.model.IStatusBar), `nextState`: [`IStatusBar`](molecule.model.IStatusBar)) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

#### Defined in

[react/component.ts:73](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L73)

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

[services/workbench/statusBarService.ts:27](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/statusBarService.ts#L27)

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

| Name         | Type                                      |
| :----------- | :---------------------------------------- |
| `nextState?` | [`IStatusBar`](molecule.model.IStatusBar) |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[render](../classes/molecule.react.Component#render)

#### Defined in

[react/component.ts:69](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L69)

---

### reset

▸ **reset**(): `void`

Reset the contextMenu data and the StatusBar data , including right and left

#### Returns

`void`

#### Defined in

[services/workbench/statusBarService.ts:42](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/statusBarService.ts#L42)

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

[services/workbench/statusBarService.ts:33](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/statusBarService.ts#L33)
