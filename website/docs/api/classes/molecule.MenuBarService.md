---
id: 'molecule.MenuBarService'
title: 'Class: MenuBarService'
sidebar_label: 'MenuBarService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).MenuBarService

## Hierarchy

-   [`Component`](molecule.react.Component)<[`IMenuBar`](../interfaces/molecule.IMenuBar)\>

    ↳ **`MenuBarService`**

## Implements

-   [`IMenuBarService`](../interfaces/molecule.IMenuBarService)

## Constructors

### constructor

• **new MenuBarService**()

#### Overrides

[Component](molecule.react.Component).[constructor](molecule.react.Component#constructor)

#### Defined in

[src/services/workbench/menuBarService.ts:59](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/menuBarService.ts#L59)

## Properties

### sperator

• `Private` **sperator**: `string` = `'-'`

#### Defined in

[src/services/workbench/menuBarService.ts:57](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/menuBarService.ts#L57)

---

### state

• `Protected` **state**: [`IMenuBar`](../interfaces/molecule.IMenuBar)

#### Implementation of

[IMenuBarService](../interfaces/molecule.IMenuBarService).[state](../interfaces/molecule.IMenuBarService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[src/services/workbench/menuBarService.ts:56](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/menuBarService.ts#L56)

## Methods

### append

▸ **append**(`menuItem`, `parentId`): `void`

Append a new menu into the specific menu found by `parentId`

#### Parameters

| Name       | Type           |
| :--------- | :------------- |
| `menuItem` | `IMenuBarItem` |
| `parentId` | `string`       |

#### Returns

`void`

#### Implementation of

[IMenuBarService](../interfaces/molecule.IMenuBarService).[append](../interfaces/molecule.IMenuBarService#append)

#### Defined in

[src/services/workbench/menuBarService.ts:105](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/menuBarService.ts#L105)

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

[IMenuBarService](../interfaces/molecule.IMenuBarService).[emit](../interfaces/molecule.IMenuBarService#emit)

#### Inherited from

[Component](molecule.react.Component).[emit](molecule.react.Component#emit)

#### Defined in

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[IMenuBarService](../interfaces/molecule.IMenuBarService).[forceUpdate](../interfaces/molecule.IMenuBarService#forceupdate)

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

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

#### Implementation of

[IMenuBarService](../interfaces/molecule.IMenuBarService).[getMenuById](../interfaces/molecule.IMenuBarService#getmenubyid)

#### Defined in

[src/services/workbench/menuBarService.ts:94](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/menuBarService.ts#L94)

---

### getReferenceMenu

▸ `Private` **getReferenceMenu**(`menuId`): `undefined` \| { `path`: `string` ; `source`: `IMenuBarItem` }

Get the specific menu reference type via menuId

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `menuId` | `string` |

#### Returns

`undefined` \| { `path`: `string` ; `source`: `IMenuBarItem` }

source is the target menu and path is the collections of indexs that contain the specific menu position

#### Defined in

[src/services/workbench/menuBarService.ts:69](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/menuBarService.ts#L69)

---

### getState

▸ **getState**(): [`IMenuBar`](../interfaces/molecule.IMenuBar)

#### Returns

[`IMenuBar`](../interfaces/molecule.IMenuBar)

#### Implementation of

[IMenuBarService](../interfaces/molecule.IMenuBarService).[getState](../interfaces/molecule.IMenuBarService#getstate)

#### Inherited from

[Component](molecule.react.Component).[getState](molecule.react.Component#getstate)

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

#### Implementation of

[IMenuBarService](../interfaces/molecule.IMenuBarService).[onEvent](../interfaces/molecule.IMenuBarService#onevent)

#### Inherited from

[Component](molecule.react.Component).[onEvent](molecule.react.Component#onevent)

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

#### Implementation of

[IMenuBarService](../interfaces/molecule.IMenuBarService).[onSelect](../interfaces/molecule.IMenuBarService#onselect)

#### Defined in

[src/services/workbench/menuBarService.ts:167](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/menuBarService.ts#L167)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

#### Parameters

| Name       | Type                                                                                                                               |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`IMenuBar`](../interfaces/molecule.IMenuBar), `nextState`: [`IMenuBar`](../interfaces/molecule.IMenuBar)) => `void` |

#### Returns

`void`

#### Implementation of

[IMenuBarService](../interfaces/molecule.IMenuBarService).[onUpdateState](../interfaces/molecule.IMenuBarService#onupdatestate)

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

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

#### Implementation of

[IMenuBarService](../interfaces/molecule.IMenuBarService).[remove](../interfaces/molecule.IMenuBarService#remove)

#### Defined in

[src/services/workbench/menuBarService.ts:122](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/menuBarService.ts#L122)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type                                          |
| :----------- | :-------------------------------------------- |
| `nextState?` | [`IMenuBar`](../interfaces/molecule.IMenuBar) |

#### Returns

`void`

#### Implementation of

[IMenuBarService](../interfaces/molecule.IMenuBarService).[render](../interfaces/molecule.IMenuBarService#render)

#### Inherited from

[Component](molecule.react.Component).[render](molecule.react.Component#render)

#### Defined in

[src/react/component.ts:50](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L50)

---

### reset

▸ **reset**(): `void`

Reset menu bar data;

#### Returns

`void`

#### Implementation of

[IMenuBarService](../interfaces/molecule.IMenuBarService).[reset](../interfaces/molecule.IMenuBarService#reset)

#### Defined in

[src/services/workbench/menuBarService.ts:161](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/menuBarService.ts#L161)

---

### setMenus

▸ **setMenus**(`menuData`): `void`

Set the menus data

#### Parameters

| Name       | Type             |
| :--------- | :--------------- |
| `menuData` | `IMenuBarItem`[] |

#### Returns

`void`

#### Implementation of

[IMenuBarService](../interfaces/molecule.IMenuBarService).[setMenus](../interfaces/molecule.IMenuBarService#setmenus)

#### Defined in

[src/services/workbench/menuBarService.ts:99](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/menuBarService.ts#L99)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                                               | Description                |
| :---------- | :--------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`IMenuBar`](../interfaces/molecule.IMenuBar)\>                                                                          | update target state values |
| `callback?` | (`prevState`: [`IMenuBar`](../interfaces/molecule.IMenuBar), `nextState`: [`IMenuBar`](../interfaces/molecule.IMenuBar)) => `void` | -                          |

#### Returns

`void`

#### Implementation of

[IMenuBarService](../interfaces/molecule.IMenuBarService).[setState](../interfaces/molecule.IMenuBarService#setstate)

#### Inherited from

[Component](molecule.react.Component).[setState](molecule.react.Component#setstate)

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

#### Implementation of

[IMenuBarService](../interfaces/molecule.IMenuBarService).[subscribe](../interfaces/molecule.IMenuBarService#subscribe)

#### Inherited from

[Component](molecule.react.Component).[subscribe](molecule.react.Component#subscribe)

#### Defined in

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventBus.ts#L11)

---

### update

▸ **update**(`menuId`, `menuItem?`): `void`

Update the specific menu item data

#### Parameters

| Name       | Type           |
| :--------- | :------------- |
| `menuId`   | `string`       |
| `menuItem` | `IMenuBarItem` |

#### Returns

`void`

#### Implementation of

[IMenuBarService](../interfaces/molecule.IMenuBarService).[update](../interfaces/molecule.IMenuBarService#update)

#### Defined in

[src/services/workbench/menuBarService.ts:148](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/menuBarService.ts#L148)
