---
id: 'molecule.ExplorerService'
title: 'Class: ExplorerService'
sidebar_label: 'ExplorerService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).ExplorerService

## Hierarchy

-   [`Component`](molecule.react.Component)<`IExplorer`\>

    ↳ **`ExplorerService`**

## Implements

-   [`IExplorerService`](../interfaces/molecule.IExplorerService)

## Constructors

### constructor

• **new ExplorerService**()

#### Overrides

[Component](molecule.react.Component).[constructor](molecule.react.Component#constructor)

#### Defined in

[src/services/workbench/explorer/explorerService.ts:85](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/explorerService.ts#L85)

## Properties

### state

• `Protected` **state**: `IExplorer`

#### Implementation of

[IExplorerService](../interfaces/molecule.IExplorerService).[state](../interfaces/molecule.IExplorerService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[src/services/workbench/explorer/explorerService.ts:84](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/explorerService.ts#L84)

## Methods

### addAction

▸ **addAction**(`action`): `void`

Only add an action in toolbar actions

#### Parameters

| Name     | Type                                                                                                                                         |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| `action` | [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps) \| [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[] |

#### Returns

`void`

#### Implementation of

[IExplorerService](../interfaces/molecule.IExplorerService).[addAction](../interfaces/molecule.IExplorerService#addaction)

#### Defined in

[src/services/workbench/explorer/explorerService.ts:187](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/explorerService.ts#L187)

---

### addPanel

▸ **addPanel**(`data`): `void`

Add a new panel, as well as add a new data for toolbar data

#### Parameters

| Name   | Type                                           |
| :----- | :--------------------------------------------- |
| `data` | `IExplorerPanelItem` \| `IExplorerPanelItem`[] |

#### Returns

`void`

#### Implementation of

[IExplorerService](../interfaces/molecule.IExplorerService).[addPanel](../interfaces/molecule.IExplorerService#addpanel)

#### Defined in

[src/services/workbench/explorer/explorerService.ts:154](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/explorerService.ts#L154)

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

[IExplorerService](../interfaces/molecule.IExplorerService).[emit](../interfaces/molecule.IExplorerService#emit)

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

[IExplorerService](../interfaces/molecule.IExplorerService).[forceUpdate](../interfaces/molecule.IExplorerService#forceupdate)

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:58](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L58)

---

### getAction

▸ **getAction**(`id`): `undefined` \| [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)

Get the specific action in toolbar actions

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`undefined` \| [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)

#### Implementation of

[IExplorerService](../interfaces/molecule.IExplorerService).[getAction](../interfaces/molecule.IExplorerService#getaction)

#### Defined in

[src/services/workbench/explorer/explorerService.ts:94](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/explorerService.ts#L94)

---

### getState

▸ **getState**(): `IExplorer`

#### Returns

`IExplorer`

#### Implementation of

[IExplorerService](../interfaces/molecule.IExplorerService).[getState](../interfaces/molecule.IExplorerService#getstate)

#### Inherited from

[Component](molecule.react.Component).[getState](molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:62](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L62)

---

### onClick

▸ **onClick**(`callback`): `void`

Listen to the Explorer header toolbar click event

#### Parameters

| Name       | Type                                                                                                                         |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`e`: `MouseEvent`, `item`: [`IActionBarItemProps`](../interfaces/molecule.component.IActionBarItemProps)<`any`\>) => `void` |

#### Returns

`void`

#### Implementation of

[IExplorerService](../interfaces/molecule.IExplorerService).[onClick](../interfaces/molecule.IExplorerService#onclick)

#### Defined in

[src/services/workbench/explorer/explorerService.ts:281](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/explorerService.ts#L281)

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

[IExplorerService](../interfaces/molecule.IExplorerService).[onEvent](../interfaces/molecule.IExplorerService#onevent)

#### Inherited from

[Component](molecule.react.Component).[onEvent](molecule.react.Component#onevent)

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

#### Implementation of

[IExplorerService](../interfaces/molecule.IExplorerService).[onPanelToolbarClick](../interfaces/molecule.IExplorerService#onpaneltoolbarclick)

#### Defined in

[src/services/workbench/explorer/explorerService.ts:291](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/explorerService.ts#L291)

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

#### Implementation of

[IExplorerService](../interfaces/molecule.IExplorerService).[onRemovePanel](../interfaces/molecule.IExplorerService#onremovepanel)

#### Defined in

[src/services/workbench/explorer/explorerService.ts:287](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/explorerService.ts#L287)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

#### Parameters

| Name       | Type                                                           |
| :--------- | :------------------------------------------------------------- |
| `callback` | (`prevState`: `IExplorer`, `nextState`: `IExplorer`) => `void` |

#### Returns

`void`

#### Implementation of

[IExplorerService](../interfaces/molecule.IExplorerService).[onUpdateState](../interfaces/molecule.IExplorerService#onupdatestate)

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:54](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L54)

---

### removeAction

▸ **removeAction**(`id`): `void`

Remove the specific header toolbar action

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`void`

#### Implementation of

[IExplorerService](../interfaces/molecule.IExplorerService).[removeAction](../interfaces/molecule.IExplorerService#removeaction)

#### Defined in

[src/services/workbench/explorer/explorerService.ts:228](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/explorerService.ts#L228)

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

#### Implementation of

[IExplorerService](../interfaces/molecule.IExplorerService).[removePanel](../interfaces/molecule.IExplorerService#removepanel)

#### Defined in

[src/services/workbench/explorer/explorerService.ts:213](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/explorerService.ts#L213)

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

#### Implementation of

[IExplorerService](../interfaces/molecule.IExplorerService).[render](../interfaces/molecule.IExplorerService#render)

#### Inherited from

[Component](molecule.react.Component).[render](molecule.react.Component#render)

#### Defined in

[src/react/component.ts:50](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L50)

---

### reset

▸ **reset**(): `void`

Reset the ExplorerService state, it's mainly for customizing the Explorer

#### Returns

`void`

#### Implementation of

[IExplorerService](../interfaces/molecule.IExplorerService).[reset](../interfaces/molecule.IExplorerService#reset)

#### Defined in

[src/services/workbench/explorer/explorerService.ts:274](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/explorerService.ts#L274)

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

#### Implementation of

[IExplorerService](../interfaces/molecule.IExplorerService).[setState](../interfaces/molecule.IExplorerService#setstate)

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

[IExplorerService](../interfaces/molecule.IExplorerService).[subscribe](../interfaces/molecule.IExplorerService#subscribe)

#### Inherited from

[Component](molecule.react.Component).[subscribe](molecule.react.Component#subscribe)

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

#### Implementation of

[IExplorerService](../interfaces/molecule.IExplorerService).[toggleHeaderBar](../interfaces/molecule.IExplorerService#toggleheaderbar)

#### Defined in

[src/services/workbench/explorer/explorerService.ts:258](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/explorerService.ts#L258)

---

### toggleIcon

▸ `Private` **toggleIcon**(`icon?`): `""` \| `"check"`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `icon?` | `string` |

#### Returns

`""` \| `"check"`

#### Defined in

[src/services/workbench/explorer/explorerService.ts:90](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/explorerService.ts#L90)

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

#### Implementation of

[IExplorerService](../interfaces/molecule.IExplorerService).[togglePanel](../interfaces/molecule.IExplorerService#togglepanel)

#### Defined in

[src/services/workbench/explorer/explorerService.ts:242](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/explorerService.ts#L242)

---

### updateAction

▸ **updateAction**(`action`): `void`

Update the action in toolbar actions

#### Parameters

| Name     | Type                                                                            |
| :------- | :------------------------------------------------------------------------------ |
| `action` | `Partial`<[`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)\> |

#### Returns

`void`

#### Implementation of

[IExplorerService](../interfaces/molecule.IExplorerService).[updateAction](../interfaces/molecule.IExplorerService#updateaction)

#### Defined in

[src/services/workbench/explorer/explorerService.ts:128](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/explorerService.ts#L128)

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

#### Implementation of

[IExplorerService](../interfaces/molecule.IExplorerService).[updatePanel](../interfaces/molecule.IExplorerService#updatepanel)

#### Defined in

[src/services/workbench/explorer/explorerService.ts:100](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/explorerService.ts#L100)
