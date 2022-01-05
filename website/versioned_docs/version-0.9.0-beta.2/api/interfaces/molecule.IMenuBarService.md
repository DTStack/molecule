---
id: 'molecule.IMenuBarService'
title: 'Interface: IMenuBarService'
sidebar_label: 'IMenuBarService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IMenuBarService

## Hierarchy

-   [`Component`](../classes/molecule.react.Component)<[`IMenuBar`](molecule.model.IMenuBar)\>

    ↳ **`IMenuBarService`**

## Implemented by

-   [`MenuBarService`](../classes/molecule.MenuBarService)

## Properties

### state

• `Protected` `Abstract` **state**: [`IMenuBar`](molecule.model.IMenuBar)

#### Inherited from

[Component](../classes/molecule.react.Component).[state](../classes/molecule.react.Component#state)

#### Defined in

[src/react/component.ts:42](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L42)

## Methods

### append

▸ **append**(`menuItem`, `parentId`): `void`

Append a new menu into the specific menu found by `parentId`

#### Parameters

| Name       | Type                                          | Description  |
| :--------- | :-------------------------------------------- | :----------- |
| `menuItem` | [`IMenuBarItem`](molecule.model.IMenuBarItem) | the new menu |
| `parentId` | `UniqueId`                                    |              |

#### Returns

`void`

#### Defined in

[src/services/workbench/menuBarService.ts:25](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/menuBarService.ts#L25)

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

### getMenuById

▸ **getMenuById**(`menuId`): `undefined` \| [`IMenuBarItem`](molecule.model.IMenuBarItem)

Get the specific menu item

#### Parameters

| Name     | Type       |
| :------- | :--------- |
| `menuId` | `UniqueId` |

#### Returns

`undefined` \| [`IMenuBarItem`](molecule.model.IMenuBarItem)

#### Defined in

[src/services/workbench/menuBarService.ts:35](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/menuBarService.ts#L35)

---

### getState

▸ **getState**(): [`IMenuBar`](molecule.model.IMenuBar)

Get the Component state

#### Returns

[`IMenuBar`](molecule.model.IMenuBar)

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L83)

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

#### Defined in

[src/services/workbench/menuBarService.ts:50](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/menuBarService.ts#L50)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                               |
| :--------- | :----------------------------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`IMenuBar`](molecule.model.IMenuBar), `nextState`: [`IMenuBar`](molecule.model.IMenuBar)) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:71](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L71)

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

#### Defined in

[src/services/workbench/menuBarService.ts:30](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/menuBarService.ts#L30)

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

| Name         | Type                                  |
| :----------- | :------------------------------------ |
| `nextState?` | [`IMenuBar`](molecule.model.IMenuBar) |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[render](../classes/molecule.react.Component#render)

#### Defined in

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L67)

---

### reset

▸ **reset**(): `void`

Reset menu bar data;

#### Returns

`void`

#### Defined in

[src/services/workbench/menuBarService.ts:45](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/menuBarService.ts#L45)

---

### setMenus

▸ **setMenus**(`data`): `void`

Set the menus data

#### Parameters

| Name   | Type                                            |
| :----- | :---------------------------------------------- |
| `data` | [`IMenuBarItem`](molecule.model.IMenuBarItem)[] |

#### Returns

`void`

#### Defined in

[src/services/workbench/menuBarService.ts:19](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/menuBarService.ts#L19)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                               | Description                |
| :---------- | :----------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`IMenuBar`](molecule.model.IMenuBar)\>                                                                  | update target state values |
| `callback?` | (`prevState`: [`IMenuBar`](molecule.model.IMenuBar), `nextState`: [`IMenuBar`](molecule.model.IMenuBar)) => `void` | -                          |

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

▸ **update**(`menuId`, `menuItem`): `void`

Update the specific menu item data

#### Parameters

| Name       | Type                                          |
| :--------- | :-------------------------------------------- |
| `menuId`   | `UniqueId`                                    |
| `menuItem` | [`IMenuBarItem`](molecule.model.IMenuBarItem) |

#### Returns

`void`

#### Defined in

[src/services/workbench/menuBarService.ts:41](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/menuBarService.ts#L41)
