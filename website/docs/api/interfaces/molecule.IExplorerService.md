---
id: 'molecule.IExplorerService'
title: 'Interface: IExplorerService'
sidebar_label: 'IExplorerService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IExplorerService

## Hierarchy

-   [`Component`](../classes/molecule.react.Component)<`IExplorer`\>

    ↳ **`IExplorerService`**

## Implemented by

-   [`ExplorerService`](../classes/molecule.ExplorerService)

## Properties

### state

• `Protected` `Abstract` **state**: `IExplorer`

#### Inherited from

[Component](../classes/molecule.react.Component).[state](../classes/molecule.react.Component#state)

#### Defined in

[src/react/component.ts:42](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L42)

## Methods

### addAction

▸ **addAction**(`action`): `void`

Only add an action in toolbar actions

#### Parameters

| Name     | Type                                                  |
| :------- | :---------------------------------------------------- |
| `action` | [`IMenuItemProps`](molecule.component.IMenuItemProps) |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/explorerService.ts:40](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/explorerService.ts#L40)

---

### addPanel

▸ **addPanel**(`panel`): `void`

Add a new panel, as well as add a new data for toolbar data

#### Parameters

| Name    | Type                                           |
| :------ | :--------------------------------------------- |
| `panel` | `IExplorerPanelItem` \| `IExplorerPanelItem`[] |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/explorerService.ts:20](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/explorerService.ts#L20)

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

[src/common/event/eventBus.ts:28](https://github.com/DTStack/molecule/blob/3c64296/src/common/event/eventBus.ts#L28)

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

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/3c64296/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

Force to update the Component

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[forceUpdate](../classes/molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:79](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L79)

---

### getAction

▸ **getAction**(`id`): `undefined` \| [`IMenuItemProps`](molecule.component.IMenuItemProps)

Get the specific action in toolbar actions

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`undefined` \| [`IMenuItemProps`](molecule.component.IMenuItemProps)

#### Defined in

[src/services/workbench/explorer/explorerService.ts:45](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/explorerService.ts#L45)

---

### getState

▸ **getState**(): `IExplorer`

Get the Component state

#### Returns

`IExplorer`

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L83)

---

### onClick

▸ **onClick**(`callback`): `any`

Listen to the Explorer header toolbar click event

#### Parameters

| Name       | Type                                                                                                           |
| :--------- | :------------------------------------------------------------------------------------------------------------- |
| `callback` | (`e`: `MouseEvent`, `item`: [`IActionBarItemProps`](molecule.component.IActionBarItemProps)<`any`\>) => `void` |

#### Returns

`any`

#### Defined in

[src/services/workbench/explorer/explorerService.ts:64](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/explorerService.ts#L64)

---

### onPanelToolbarClick

▸ **onPanelToolbarClick**(`callback`): `void`

Listen to the Explorer panel toolbar click event

#### Parameters

| Name       | Type                                                             |
| :--------- | :--------------------------------------------------------------- |
| `callback` | (`panel`: `IExplorerPanelItem`, `toolbarId`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/explorerService.ts:74](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/explorerService.ts#L74)

---

### onRemovePanel

▸ **onRemovePanel**(`callback`): `void`

Listen to the Explorer panel remove event

#### Parameters

| Name       | Type                                      |
| :--------- | :---------------------------------------- |
| `callback` | (`panel`: `IExplorerPanelItem`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/explorerService.ts:69](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/explorerService.ts#L69)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                           |
| :--------- | :------------------------------------------------------------- |
| `callback` | (`prevState`: `IExplorer`, `nextState`: `IExplorer`) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:71](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L71)

---

### removeAction

▸ **removeAction**(`id`): `void`

Remove the specific header toolbar action

#### Parameters

| Name | Type     | Description |
| :--- | :------- | :---------- |
| `id` | `string` | action id   |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/explorerService.ts:55](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/explorerService.ts#L55)

---

### removeOnUpdateState

▸ **removeOnUpdateState**(): `void`

Remove the Component update event listening

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[removeOnUpdateState](../classes/molecule.react.Component#removeonupdatestate)

#### Defined in

[src/react/component.ts:75](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L75)

---

### removePanel

▸ **removePanel**(`id`): `void`

Remove a panel via id, as well as remove the corresponding action bar

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/explorerService.ts:28](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/explorerService.ts#L28)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type        |
| :----------- | :---------- |
| `nextState?` | `IExplorer` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[render](../classes/molecule.react.Component#render)

#### Defined in

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L67)

---

### reset

▸ **reset**(): `void`

Reset the ExplorerService state, it's mainly for customizing the Explorer

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/explorerService.ts:59](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/explorerService.ts#L59)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                           | Description                |
| :---------- | :------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<`IExplorer`\>                                        | update target state values |
| `callback?` | (`prevState`: `IExplorer`, `nextState`: `IExplorer`) => `void` | -                          |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[setState](../classes/molecule.react.Component#setstate)

#### Defined in

[src/react/component.ts:54](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L54)

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

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/3c64296/src/common/event/eventBus.ts#L11)

---

### toggleHeaderBar

▸ **toggleHeaderBar**(`id`): `void`

Only toggle the toolbar status

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/explorerService.ts:36](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/explorerService.ts#L36)

---

### togglePanel

▸ **togglePanel**(`id`): `void`

Toggle panel hidden, as well as toggle the toolbar status

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/explorerService.ts:32](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/explorerService.ts#L32)

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

[src/common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/3c64296/src/common/event/eventBus.ts#L37)

---

### updateAction

▸ **updateAction**(`action`): `void`

Update the action in toolbar actions

#### Parameters

| Name     | Type                                                              |
| :------- | :---------------------------------------------------------------- |
| `action` | `Partial`<[`IMenuItemProps`](molecule.component.IMenuItemProps)\> |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/explorerService.ts:50](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/explorerService.ts#L50)

---

### updatePanel

▸ **updatePanel**(`data`): `void`

Update the panels data, as well as modify toolbar data

#### Parameters

| Name   | Type                             |
| :----- | :------------------------------- |
| `data` | `Partial`<`IExplorerPanelItem`\> |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/explorerService.ts:24](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/explorerService.ts#L24)
