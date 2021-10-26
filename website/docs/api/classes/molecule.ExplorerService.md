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

[src/services/workbench/explorer/explorerService.ts:84](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/explorerService.ts#L84)

## Properties

### state

• `Protected` **state**: `IExplorer`

#### Implementation of

[IExplorerService](../interfaces/molecule.IExplorerService).[state](../interfaces/molecule.IExplorerService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[src/services/workbench/explorer/explorerService.ts:83](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/explorerService.ts#L83)

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

[src/services/workbench/explorer/explorerService.ts:186](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/explorerService.ts#L186)

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

[src/services/workbench/explorer/explorerService.ts:153](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/explorerService.ts#L153)

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

[IExplorerService](../interfaces/molecule.IExplorerService).[count](../interfaces/molecule.IExplorerService#count)

#### Inherited from

[Component](molecule.react.Component).[count](molecule.react.Component#count)

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

#### Implementation of

[IExplorerService](../interfaces/molecule.IExplorerService).[emit](../interfaces/molecule.IExplorerService#emit)

#### Inherited from

[Component](molecule.react.Component).[emit](molecule.react.Component#emit)

#### Defined in

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/3c64296/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

Force to update the Component

#### Returns

`void`

#### Implementation of

[IExplorerService](../interfaces/molecule.IExplorerService).[forceUpdate](../interfaces/molecule.IExplorerService#forceupdate)

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:79](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L79)

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

[src/services/workbench/explorer/explorerService.ts:93](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/explorerService.ts#L93)

---

### getState

▸ **getState**(): `IExplorer`

Get the Component state

#### Returns

`IExplorer`

#### Implementation of

[IExplorerService](../interfaces/molecule.IExplorerService).[getState](../interfaces/molecule.IExplorerService#getstate)

#### Inherited from

[Component](molecule.react.Component).[getState](molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L83)

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

[src/services/workbench/explorer/explorerService.ts:280](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/explorerService.ts#L280)

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

[src/services/workbench/explorer/explorerService.ts:290](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/explorerService.ts#L290)

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

[src/services/workbench/explorer/explorerService.ts:286](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/explorerService.ts#L286)

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

#### Implementation of

[IExplorerService](../interfaces/molecule.IExplorerService).[onUpdateState](../interfaces/molecule.IExplorerService#onupdatestate)

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:71](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L71)

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

[src/services/workbench/explorer/explorerService.ts:227](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/explorerService.ts#L227)

---

### removeOnUpdateState

▸ **removeOnUpdateState**(): `void`

Remove the Component update event listening

#### Returns

`void`

#### Implementation of

[IExplorerService](../interfaces/molecule.IExplorerService).[removeOnUpdateState](../interfaces/molecule.IExplorerService#removeonupdatestate)

#### Inherited from

[Component](molecule.react.Component).[removeOnUpdateState](molecule.react.Component#removeonupdatestate)

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

#### Implementation of

[IExplorerService](../interfaces/molecule.IExplorerService).[removePanel](../interfaces/molecule.IExplorerService#removepanel)

#### Defined in

[src/services/workbench/explorer/explorerService.ts:212](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/explorerService.ts#L212)

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

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L67)

---

### reset

▸ **reset**(): `void`

Reset the ExplorerService state, it's mainly for customizing the Explorer

#### Returns

`void`

#### Implementation of

[IExplorerService](../interfaces/molecule.IExplorerService).[reset](../interfaces/molecule.IExplorerService#reset)

#### Defined in

[src/services/workbench/explorer/explorerService.ts:273](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/explorerService.ts#L273)

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

#### Implementation of

[IExplorerService](../interfaces/molecule.IExplorerService).[subscribe](../interfaces/molecule.IExplorerService#subscribe)

#### Inherited from

[Component](molecule.react.Component).[subscribe](molecule.react.Component#subscribe)

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

#### Implementation of

[IExplorerService](../interfaces/molecule.IExplorerService).[toggleHeaderBar](../interfaces/molecule.IExplorerService#toggleheaderbar)

#### Defined in

[src/services/workbench/explorer/explorerService.ts:257](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/explorerService.ts#L257)

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

[src/services/workbench/explorer/explorerService.ts:89](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/explorerService.ts#L89)

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

[src/services/workbench/explorer/explorerService.ts:241](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/explorerService.ts#L241)

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

#### Implementation of

[IExplorerService](../interfaces/molecule.IExplorerService).[unsubscribe](../interfaces/molecule.IExplorerService#unsubscribe)

#### Inherited from

[Component](molecule.react.Component).[unsubscribe](molecule.react.Component#unsubscribe)

#### Defined in

[src/common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/3c64296/src/common/event/eventBus.ts#L37)

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

[src/services/workbench/explorer/explorerService.ts:127](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/explorerService.ts#L127)

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

[src/services/workbench/explorer/explorerService.ts:99](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/explorerService.ts#L99)
