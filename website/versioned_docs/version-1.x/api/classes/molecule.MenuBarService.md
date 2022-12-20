---
id: 'molecule.MenuBarService'
title: 'Class: MenuBarService'
sidebar_label: 'MenuBarService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).MenuBarService

## Hierarchy

-   [`Component`](molecule.react.Component)<[`IMenuBar`](../interfaces/molecule.model.IMenuBar)\>

    ↳ **`MenuBarService`**

## Implements

-   [`IMenuBarService`](../interfaces/molecule.IMenuBarService)

## Constructors

### constructor

• **new MenuBarService**()

#### Overrides

[Component](molecule.react.Component).[constructor](molecule.react.Component#constructor)

#### Defined in

[services/workbench/menuBarService.ts:60](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/menuBarService.ts#L60)

## Properties

### sperator

• `Private` **sperator**: `string` = `'-'`

#### Defined in

[services/workbench/menuBarService.ts:58](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/menuBarService.ts#L58)

---

### state

• `Protected` **state**: [`IMenuBar`](../interfaces/molecule.model.IMenuBar)

#### Implementation of

[IMenuBarService](../interfaces/molecule.IMenuBarService).[state](../interfaces/molecule.IMenuBarService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[services/workbench/menuBarService.ts:57](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/menuBarService.ts#L57)

## Methods

### append

▸ **append**(`menuItem`, `parentId`): `void`

Append a new menu into the specific menu found by `parentId`

#### Parameters

| Name       | Type                                                        |
| :--------- | :---------------------------------------------------------- |
| `menuItem` | [`IMenuBarItem`](../interfaces/molecule.model.IMenuBarItem) |
| `parentId` | `UniqueId`                                                  |

#### Returns

`void`

#### Implementation of

[IMenuBarService](../interfaces/molecule.IMenuBarService).[append](../interfaces/molecule.IMenuBarService#append)

#### Defined in

[services/workbench/menuBarService.ts:106](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/menuBarService.ts#L106)

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

[IMenuBarService](../interfaces/molecule.IMenuBarService).[count](../interfaces/molecule.IMenuBarService#count)

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

[IMenuBarService](../interfaces/molecule.IMenuBarService).[emit](../interfaces/molecule.IMenuBarService#emit)

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

[IMenuBarService](../interfaces/molecule.IMenuBarService).[forceUpdate](../interfaces/molecule.IMenuBarService#forceupdate)

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

#### Defined in

[react/component.ts:81](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L81)

---

### getMenuById

▸ **getMenuById**(`menuId`): `undefined` \| [`IMenuBarItem`](../interfaces/molecule.model.IMenuBarItem)

Get the specific menu item

#### Parameters

| Name     | Type       |
| :------- | :--------- |
| `menuId` | `UniqueId` |

#### Returns

`undefined` \| [`IMenuBarItem`](../interfaces/molecule.model.IMenuBarItem)

#### Implementation of

[IMenuBarService](../interfaces/molecule.IMenuBarService).[getMenuById](../interfaces/molecule.IMenuBarService#getmenubyid)

#### Defined in

[services/workbench/menuBarService.ts:95](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/menuBarService.ts#L95)

---

### getReferenceMenu

▸ `Private` **getReferenceMenu**(`menuId`): `undefined` \| { `path`: `string` ; `source`: [`IMenuBarItem`](../interfaces/molecule.model.IMenuBarItem) }

Get the specific menu reference type via menuId

#### Parameters

| Name     | Type       |
| :------- | :--------- |
| `menuId` | `UniqueId` |

#### Returns

`undefined` \| { `path`: `string` ; `source`: [`IMenuBarItem`](../interfaces/molecule.model.IMenuBarItem) }

source is the target menu and path is the collections of indexs that contain the specific menu position

#### Defined in

[services/workbench/menuBarService.ts:70](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/menuBarService.ts#L70)

---

### getState

▸ **getState**(): [`IMenuBar`](../interfaces/molecule.model.IMenuBar)

Get the Component state

#### Returns

[`IMenuBar`](../interfaces/molecule.model.IMenuBar)

#### Implementation of

[IMenuBarService](../interfaces/molecule.IMenuBarService).[getState](../interfaces/molecule.IMenuBarService#getstate)

#### Inherited from

[Component](molecule.react.Component).[getState](molecule.react.Component#getstate)

#### Defined in

[react/component.ts:85](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L85)

---

### onSelect

▸ **onSelect**(`callback`): `void`

listen to the onSelect event in menu

#### Parameters

| Name       | Type                             |
| :--------- | :------------------------------- |
| `callback` | (`menuId`: `UniqueId`) => `void` |

#### Returns

`void`

#### Implementation of

[IMenuBarService](../interfaces/molecule.IMenuBarService).[onSelect](../interfaces/molecule.IMenuBarService#onselect)

#### Defined in

[services/workbench/menuBarService.ts:168](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/menuBarService.ts#L168)

---

### onUpdateState

▸ **onUpdateState**(`listener`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                                           |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| `listener` | (`prevState`: [`IMenuBar`](../interfaces/molecule.model.IMenuBar), `nextState`: [`IMenuBar`](../interfaces/molecule.model.IMenuBar)) => `void` |

#### Returns

`void`

#### Implementation of

[IMenuBarService](../interfaces/molecule.IMenuBarService).[onUpdateState](../interfaces/molecule.IMenuBarService#onupdatestate)

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

#### Defined in

[react/component.ts:73](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L73)

---

### remove

▸ **remove**(`menuId`): `void`

Remove the specific menu item

#### Parameters

| Name     | Type       |
| :------- | :--------- |
| `menuId` | `UniqueId` |

#### Returns

`void`

#### Implementation of

[IMenuBarService](../interfaces/molecule.IMenuBarService).[remove](../interfaces/molecule.IMenuBarService#remove)

#### Defined in

[services/workbench/menuBarService.ts:123](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/menuBarService.ts#L123)

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

[IMenuBarService](../interfaces/molecule.IMenuBarService).[removeOnUpdateState](../interfaces/molecule.IMenuBarService#removeonupdatestate)

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
| `nextState?` | [`IMenuBar`](../interfaces/molecule.model.IMenuBar) |

#### Returns

`void`

#### Implementation of

[IMenuBarService](../interfaces/molecule.IMenuBarService).[render](../interfaces/molecule.IMenuBarService#render)

#### Inherited from

[Component](molecule.react.Component).[render](molecule.react.Component#render)

#### Defined in

[react/component.ts:69](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L69)

---

### reset

▸ **reset**(): `void`

Reset menu bar data;

#### Returns

`void`

#### Implementation of

[IMenuBarService](../interfaces/molecule.IMenuBarService).[reset](../interfaces/molecule.IMenuBarService#reset)

#### Defined in

[services/workbench/menuBarService.ts:162](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/menuBarService.ts#L162)

---

### setMenus

▸ **setMenus**(`menuData`): `void`

Set the menus data

#### Parameters

| Name       | Type                                                          |
| :--------- | :------------------------------------------------------------ |
| `menuData` | [`IMenuBarItem`](../interfaces/molecule.model.IMenuBarItem)[] |

#### Returns

`void`

#### Implementation of

[IMenuBarService](../interfaces/molecule.IMenuBarService).[setMenus](../interfaces/molecule.IMenuBarService#setmenus)

#### Defined in

[services/workbench/menuBarService.ts:100](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/menuBarService.ts#L100)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                                                           | Description                |
| :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`IMenuBar`](../interfaces/molecule.model.IMenuBar)\>                                                                                | update target state values |
| `callback?` | (`prevState`: [`IMenuBar`](../interfaces/molecule.model.IMenuBar), `nextState`: [`IMenuBar`](../interfaces/molecule.model.IMenuBar)) => `void` | -                          |

#### Returns

`void`

#### Implementation of

[IMenuBarService](../interfaces/molecule.IMenuBarService).[setState](../interfaces/molecule.IMenuBarService#setstate)

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

[IMenuBarService](../interfaces/molecule.IMenuBarService).[subscribe](../interfaces/molecule.IMenuBarService#subscribe)

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

[IMenuBarService](../interfaces/molecule.IMenuBarService).[unsubscribe](../interfaces/molecule.IMenuBarService#unsubscribe)

#### Inherited from

[Component](molecule.react.Component).[unsubscribe](molecule.react.Component#unsubscribe)

#### Defined in

[common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L37)

---

### update

▸ **update**(`menuId`, `menuItem?`): `void`

Update the specific menu item data

#### Parameters

| Name       | Type                                                        |
| :--------- | :---------------------------------------------------------- |
| `menuId`   | `UniqueId`                                                  |
| `menuItem` | [`IMenuBarItem`](../interfaces/molecule.model.IMenuBarItem) |

#### Returns

`void`

#### Implementation of

[IMenuBarService](../interfaces/molecule.IMenuBarService).[update](../interfaces/molecule.IMenuBarService#update)

#### Defined in

[services/workbench/menuBarService.ts:149](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/menuBarService.ts#L149)
