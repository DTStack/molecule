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

[src/react/component.ts:42](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L42)

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

[src/services/workbench/explorer/explorerService.ts:41](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/explorerService.ts#L41)

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

[src/services/workbench/explorer/explorerService.ts:21](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/explorerService.ts#L21)

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

[src/services/workbench/explorer/explorerService.ts:46](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/explorerService.ts#L46)

---

### getState

▸ **getState**(): [`IExplorer`](molecule.model.IExplorer)

Get the Component state

#### Returns

[`IExplorer`](molecule.model.IExplorer)

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L83)

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

[src/services/workbench/explorer/explorerService.ts:65](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/explorerService.ts#L65)

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

[src/services/workbench/explorer/explorerService.ts:75](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/explorerService.ts#L75)

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

[src/services/workbench/explorer/explorerService.ts:70](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/explorerService.ts#L70)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                   |
| :--------- | :--------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`IExplorer`](molecule.model.IExplorer), `nextState`: [`IExplorer`](molecule.model.IExplorer)) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:71](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L71)

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

[src/services/workbench/explorer/explorerService.ts:56](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/explorerService.ts#L56)

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

[src/services/workbench/explorer/explorerService.ts:29](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/explorerService.ts#L29)

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

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L67)

---

### reset

▸ **reset**(): `void`

Reset the ExplorerService state, it's mainly for customizing the Explorer

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/explorerService.ts:60](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/explorerService.ts#L60)

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

[src/services/workbench/explorer/explorerService.ts:37](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/explorerService.ts#L37)

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

[src/services/workbench/explorer/explorerService.ts:33](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/explorerService.ts#L33)

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

[src/services/workbench/explorer/explorerService.ts:51](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/explorerService.ts#L51)

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

[src/services/workbench/explorer/explorerService.ts:25](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/explorerService.ts#L25)
