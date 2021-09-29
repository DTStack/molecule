---
id: 'molecule.IMenuBarService'
title: 'Interface: IMenuBarService'
sidebar_label: 'IMenuBarService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IMenuBarService

## Hierarchy

-   [`Component`](../classes/molecule.react.Component)<[`IMenuBar`](molecule.IMenuBar)\>

    ↳ **`IMenuBarService`**

## Implemented by

-   [`MenuBarService`](../classes/molecule.MenuBarService)

## Properties

### state

• `Protected` `Abstract` **state**: [`IMenuBar`](molecule.IMenuBar)

#### Inherited from

[Component](../classes/molecule.react.Component).[state](../classes/molecule.react.Component#state)

#### Defined in

[src/react/component.ts:25](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L25)

## Methods

### append

▸ **append**(`menuItem`, `parentId`): `void`

Append a new menu into the specific menu found by `parentId`

#### Parameters

| Name       | Type           | Description  |
| :--------- | :------------- | :----------- |
| `menuItem` | `IMenuBarItem` | the new menu |
| `parentId` | `string`       |              |

#### Returns

`void`

#### Defined in

[src/services/workbench/menuBarService.ts:25](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/menuBarService.ts#L25)

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

### getMenuById

▸ **getMenuById**(`menuId`): `undefined` \| `IMenuBarItem`

Get the specific menu item

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `menuId` | `string` |

#### Returns

`undefined` \| `IMenuBarItem`

#### Defined in

[src/services/workbench/menuBarService.ts:35](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/menuBarService.ts#L35)

---

### getState

▸ **getState**(): [`IMenuBar`](molecule.IMenuBar)

#### Returns

[`IMenuBar`](molecule.IMenuBar)

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

### onSelect

▸ **onSelect**(`callback`): `void`

listen to the onSelect event in menu

#### Parameters

| Name       | Type                           |
| :--------- | :----------------------------- |
| `callback` | (`menuId`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/menuBarService.ts:50](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/menuBarService.ts#L50)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

#### Parameters

| Name       | Type                                                                                                   |
| :--------- | :----------------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`IMenuBar`](molecule.IMenuBar), `nextState`: [`IMenuBar`](molecule.IMenuBar)) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:54](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L54)

---

### remove

▸ **remove**(`menuId`): `void`

Remove the specific menu item

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `menuId` | `string` |

#### Returns

`void`

#### Defined in

[src/services/workbench/menuBarService.ts:30](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/menuBarService.ts#L30)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type                            |
| :----------- | :------------------------------ |
| `nextState?` | [`IMenuBar`](molecule.IMenuBar) |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[render](../classes/molecule.react.Component#render)

#### Defined in

[src/react/component.ts:50](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L50)

---

### reset

▸ **reset**(): `void`

Reset menu bar data;

#### Returns

`void`

#### Defined in

[src/services/workbench/menuBarService.ts:45](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/menuBarService.ts#L45)

---

### setMenus

▸ **setMenus**(`data`): `void`

Set the menus data

#### Parameters

| Name   | Type             |
| :----- | :--------------- |
| `data` | `IMenuBarItem`[] |

#### Returns

`void`

#### Defined in

[src/services/workbench/menuBarService.ts:19](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/menuBarService.ts#L19)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                   | Description                |
| :---------- | :----------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`IMenuBar`](molecule.IMenuBar)\>                                                            | update target state values |
| `callback?` | (`prevState`: [`IMenuBar`](molecule.IMenuBar), `nextState`: [`IMenuBar`](molecule.IMenuBar)) => `void` | -                          |

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

▸ **update**(`menuId`, `menuItem`): `void`

Update the specific menu item data

#### Parameters

| Name       | Type           |
| :--------- | :------------- |
| `menuId`   | `string`       |
| `menuItem` | `IMenuBarItem` |

#### Returns

`void`

#### Defined in

[src/services/workbench/menuBarService.ts:41](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/menuBarService.ts#L41)
