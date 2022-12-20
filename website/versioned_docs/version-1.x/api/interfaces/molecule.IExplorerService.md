---
id: 'molecule.IExplorerService'
title: 'Interface: IExplorerService'
sidebar_label: 'IExplorerService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IExplorerService

## Hierarchy

-   [`Component`](../classes/molecule.react.Component)<[`IExplorer`](molecule.model.IExplorer)\>

    ↳ **`IExplorerService`**

## Implemented by

-   [`ExplorerService`](../classes/molecule.ExplorerService)

## Properties

### state

• `Protected` `Abstract` **state**: [`IExplorer`](molecule.model.IExplorer)

#### Inherited from

[Component](../classes/molecule.react.Component).[state](../classes/molecule.react.Component#state)

#### Defined in

[react/component.ts:44](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L44)

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

[services/workbench/explorer/explorerService.ts:46](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/explorerService.ts#L46)

---

### addPanel

▸ **addPanel**(`panel`): `void`

Add a new panel, as well as add a new data for toolbar data

#### Parameters

| Name    | Type                                                                                                                     |
| :------ | :----------------------------------------------------------------------------------------------------------------------- |
| `panel` | [`IExplorerPanelItem`](molecule.model.IExplorerPanelItem) \| [`IExplorerPanelItem`](molecule.model.IExplorerPanelItem)[] |

#### Returns

`void`

#### Defined in

[services/workbench/explorer/explorerService.ts:21](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/explorerService.ts#L21)

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

### getAction

▸ **getAction**(`id`): `undefined` \| [`IMenuItemProps`](molecule.component.IMenuItemProps)

Get the specific action in toolbar actions

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `id` | `UniqueId` |

#### Returns

`undefined` \| [`IMenuItemProps`](molecule.component.IMenuItemProps)

#### Defined in

[services/workbench/explorer/explorerService.ts:51](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/explorerService.ts#L51)

---

### getState

▸ **getState**(): [`IExplorer`](molecule.model.IExplorer)

Get the Component state

#### Returns

[`IExplorer`](molecule.model.IExplorer)

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

#### Defined in

[react/component.ts:85](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L85)

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

[services/workbench/explorer/explorerService.ts:70](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/explorerService.ts#L70)

---

### onCollapseAllFolders

▸ **onCollapseAllFolders**(`callback`): `void`

Listen to the FolderTree Panel collapse all folders event

#### Parameters

| Name       | Type         |
| :--------- | :----------- |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

[services/workbench/explorer/explorerService.ts:80](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/explorerService.ts#L80)

---

### onPanelToolbarClick

▸ **onPanelToolbarClick**(`callback`): `void`

Listen to the Explorer panel toolbar click event

#### Parameters

| Name       | Type                                                                                                  |
| :--------- | :---------------------------------------------------------------------------------------------------- |
| `callback` | (`panel`: [`IExplorerPanelItem`](molecule.model.IExplorerPanelItem), `toolbarId`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[services/workbench/explorer/explorerService.ts:85](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/explorerService.ts#L85)

---

### onRemovePanel

▸ **onRemovePanel**(`callback`): `void`

Listen to the Explorer panel remove event

#### Parameters

| Name       | Type                                                                           |
| :--------- | :----------------------------------------------------------------------------- |
| `callback` | (`panel`: [`IExplorerPanelItem`](molecule.model.IExplorerPanelItem)) => `void` |

#### Returns

`void`

#### Defined in

[services/workbench/explorer/explorerService.ts:75](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/explorerService.ts#L75)

---

### onUpdateState

▸ **onUpdateState**(`listener`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                   |
| :--------- | :--------------------------------------------------------------------------------------------------------------------- |
| `listener` | (`prevState`: [`IExplorer`](molecule.model.IExplorer), `nextState`: [`IExplorer`](molecule.model.IExplorer)) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

#### Defined in

[react/component.ts:73](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L73)

---

### removeAction

▸ **removeAction**(`id`): `void`

Remove the specific header toolbar action

#### Parameters

| Name | Type       | Description |
| :--- | :--------- | :---------- |
| `id` | `UniqueId` | action id   |

#### Returns

`void`

#### Defined in

[services/workbench/explorer/explorerService.ts:61](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/explorerService.ts#L61)

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

### removePanel

▸ **removePanel**(`id`): `void`

Remove a panel via id, as well as remove the corresponding action bar

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `id` | `UniqueId` |

#### Returns

`void`

#### Defined in

[services/workbench/explorer/explorerService.ts:34](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/explorerService.ts#L34)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type                                    |
| :----------- | :-------------------------------------- |
| `nextState?` | [`IExplorer`](molecule.model.IExplorer) |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[render](../classes/molecule.react.Component#render)

#### Defined in

[react/component.ts:69](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L69)

---

### reset

▸ **reset**(): `void`

Reset the ExplorerService state, it's mainly for customizing the Explorer

#### Returns

`void`

#### Defined in

[services/workbench/explorer/explorerService.ts:65](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/explorerService.ts#L65)

---

### setExpandedPanels

▸ **setExpandedPanels**(`activePanelKeys`): `void`

Set expanded Panels of Explore

#### Parameters

| Name              | Type         |
| :---------------- | :----------- |
| `activePanelKeys` | `UniqueId`[] |

#### Returns

`void`

#### Defined in

[services/workbench/explorer/explorerService.ts:30](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/explorerService.ts#L30)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                                   | Description                |
| :---------- | :--------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`IExplorer`](molecule.model.IExplorer)\>                                                                    | update target state values |
| `callback?` | (`prevState`: [`IExplorer`](molecule.model.IExplorer), `nextState`: [`IExplorer`](molecule.model.IExplorer)) => `void` | -                          |

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

### toggleHeaderBar

▸ **toggleHeaderBar**(`id`): `void`

Only toggle the toolbar status

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `id` | `UniqueId` |

#### Returns

`void`

#### Defined in

[services/workbench/explorer/explorerService.ts:42](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/explorerService.ts#L42)

---

### togglePanel

▸ **togglePanel**(`id`): `void`

Toggle panel hidden, as well as toggle the toolbar status

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `id` | `UniqueId` |

#### Returns

`void`

#### Defined in

[services/workbench/explorer/explorerService.ts:38](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/explorerService.ts#L38)

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

[services/workbench/explorer/explorerService.ts:56](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/explorerService.ts#L56)

---

### updatePanel

▸ **updatePanel**(`data`): `void`

Update the panels data, as well as modify toolbar data

#### Parameters

| Name   | Type                                                                  |
| :----- | :-------------------------------------------------------------------- |
| `data` | `Partial`<[`IExplorerPanelItem`](molecule.model.IExplorerPanelItem)\> |

#### Returns

`void`

#### Defined in

[services/workbench/explorer/explorerService.ts:25](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/explorerService.ts#L25)
