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

[react/component.ts:44](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L44)

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

[services/workbench/menuBarService.ts:25](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/menuBarService.ts#L25)

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

[services/workbench/menuBarService.ts:35](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/menuBarService.ts#L35)

---

### getState

▸ **getState**(): [`IMenuBar`](molecule.model.IMenuBar)

Get the Component state

#### Returns

[`IMenuBar`](molecule.model.IMenuBar)

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

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

#### Defined in

[services/workbench/menuBarService.ts:50](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/menuBarService.ts#L50)

---

### onUpdateState

▸ **onUpdateState**(`listener`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                               |
| :--------- | :----------------------------------------------------------------------------------------------------------------- |
| `listener` | (`prevState`: [`IMenuBar`](molecule.model.IMenuBar), `nextState`: [`IMenuBar`](molecule.model.IMenuBar)) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

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

#### Defined in

[services/workbench/menuBarService.ts:30](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/menuBarService.ts#L30)

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

| Name         | Type                                  |
| :----------- | :------------------------------------ |
| `nextState?` | [`IMenuBar`](molecule.model.IMenuBar) |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[render](../classes/molecule.react.Component#render)

#### Defined in

[react/component.ts:69](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L69)

---

### reset

▸ **reset**(): `void`

Reset menu bar data;

#### Returns

`void`

#### Defined in

[services/workbench/menuBarService.ts:45](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/menuBarService.ts#L45)

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

[services/workbench/menuBarService.ts:19](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/menuBarService.ts#L19)

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

[services/workbench/menuBarService.ts:41](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/menuBarService.ts#L41)
