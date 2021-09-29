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

[src/react/component.ts:25](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L25)

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

[src/services/workbench/explorer/explorerService.ts:41](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/explorerService.ts#L41)

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

[src/services/workbench/explorer/explorerService.ts:21](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/explorerService.ts#L21)

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

[src/services/workbench/explorer/explorerService.ts:46](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/explorerService.ts#L46)

---

### getState

▸ **getState**(): `IExplorer`

#### Returns

`IExplorer`

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:62](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L62)

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

[src/services/workbench/explorer/explorerService.ts:65](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/explorerService.ts#L65)

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

[src/services/workbench/explorer/explorerService.ts:75](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/explorerService.ts#L75)

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

[src/services/workbench/explorer/explorerService.ts:70](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/explorerService.ts#L70)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

#### Parameters

| Name       | Type                                                           |
| :--------- | :------------------------------------------------------------- |
| `callback` | (`prevState`: `IExplorer`, `nextState`: `IExplorer`) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:54](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L54)

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

[src/services/workbench/explorer/explorerService.ts:56](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/explorerService.ts#L56)

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

[src/services/workbench/explorer/explorerService.ts:29](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/explorerService.ts#L29)

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

[src/react/component.ts:50](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L50)

---

### reset

▸ **reset**(): `void`

Reset the ExplorerService state, it's mainly for customizing the Explorer

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/explorerService.ts:60](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/explorerService.ts#L60)

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

[src/services/workbench/explorer/explorerService.ts:37](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/explorerService.ts#L37)

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

[src/services/workbench/explorer/explorerService.ts:33](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/explorerService.ts#L33)

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

[src/services/workbench/explorer/explorerService.ts:51](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/explorerService.ts#L51)

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

[src/services/workbench/explorer/explorerService.ts:25](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/explorerService.ts#L25)
