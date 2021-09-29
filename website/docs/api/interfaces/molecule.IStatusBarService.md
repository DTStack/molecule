---
id: 'molecule.IStatusBarService'
title: 'Interface: IStatusBarService'
sidebar_label: 'IStatusBarService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IStatusBarService

## Hierarchy

-   [`Component`](../classes/molecule.react.Component)<[`IStatusBar`](molecule.IStatusBar)\>

    ↳ **`IStatusBarService`**

## Implemented by

-   [`StatusBarService`](../classes/molecule.StatusBarService)

## Properties

### state

• `Protected` `Abstract` **state**: [`IStatusBar`](molecule.IStatusBar)

#### Inherited from

[Component](../classes/molecule.react.Component).[state](../classes/molecule.react.Component#state)

#### Defined in

[src/react/component.ts:25](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L25)

## Methods

### add

▸ **add**(`item`, `float`): `void`

Add a new StatusBar item into right or left status

#### Parameters

| Name    | Type                                                | Description                        |
| :------ | :-------------------------------------------------- | :--------------------------------- |
| `item`  | [`IStatusBarItem`](molecule.IStatusBarItem)<`any`\> |                                    |
| `float` | `Float`                                             | position the item to left or right |

#### Returns

`void`

#### Defined in

[src/services/workbench/statusBarService.ts:22](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/statusBarService.ts#L22)

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

### getState

▸ **getState**(): [`IStatusBar`](molecule.IStatusBar)

#### Returns

[`IStatusBar`](molecule.IStatusBar)

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:62](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L62)

---

### getStatusBarItem

▸ **getStatusBarItem**(`id`, `float?`): `null` \| [`IStatusBarItem`](molecule.IStatusBarItem)<`any`\>

Get the specific StatusBar item

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `id`     | `string` |
| `float?` | `Float`  |

#### Returns

`null` \| [`IStatusBarItem`](molecule.IStatusBarItem)<`any`\>

#### Defined in

[src/services/workbench/statusBarService.ts:39](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/statusBarService.ts#L39)

---

### onClick

▸ **onClick**(`callback`): `any`

Listen to the StatusBar click event

#### Parameters

| Name       | Type                                                                                       |
| :--------- | :----------------------------------------------------------------------------------------- |
| `callback` | (`e`: `MouseEvent`, `item`: [`IStatusBarItem`](molecule.IStatusBarItem)<`any`\>) => `void` |

#### Returns

`any`

#### Defined in

[src/services/workbench/statusBarService.ts:48](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/statusBarService.ts#L48)

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

| Name       | Type                                                                                                           |
| :--------- | :------------------------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`IStatusBar`](molecule.IStatusBar), `nextState`: [`IStatusBar`](molecule.IStatusBar)) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:54](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L54)

---

### remove

▸ **remove**(`id`, `float?`): `void`

Remove the specific StatusBar item

#### Parameters

| Name     | Type     | Description                                            |
| :------- | :------- | :----------------------------------------------------- |
| `id`     | `string` |                                                        |
| `float?` | `Float`  | if provided, it'll remove the item in spcific position |

#### Returns

`void`

#### Defined in

[src/services/workbench/statusBarService.ts:28](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/statusBarService.ts#L28)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type                                |
| :----------- | :---------------------------------- |
| `nextState?` | [`IStatusBar`](molecule.IStatusBar) |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[render](../classes/molecule.react.Component#render)

#### Defined in

[src/react/component.ts:50](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L50)

---

### reset

▸ **reset**(): `void`

Reset the contextMenu data and the StatusBar data , including right and left

#### Returns

`void`

#### Defined in

[src/services/workbench/statusBarService.ts:43](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/statusBarService.ts#L43)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                           | Description                |
| :---------- | :------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`IStatusBar`](molecule.IStatusBar)\>                                                                | update target state values |
| `callback?` | (`prevState`: [`IStatusBar`](molecule.IStatusBar), `nextState`: [`IStatusBar`](molecule.IStatusBar)) => `void` | -                          |

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

▸ **update**(`item`, `float?`): `void`

Update the specific StatusBar item, it'll update the item found in left

#### Parameters

| Name     | Type                                                | Description                                             |
| :------- | :-------------------------------------------------- | :------------------------------------------------------ |
| `item`   | [`IStatusBarItem`](molecule.IStatusBarItem)<`any`\> | the id field is required                                |
| `float?` | `Float`                                             | if provided, it'll update the item in specific position |

#### Returns

`void`

#### Defined in

[src/services/workbench/statusBarService.ts:34](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/statusBarService.ts#L34)
