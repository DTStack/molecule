---
id: 'molecule.IPanelService'
title: 'Interface: IPanelService'
sidebar_label: 'IPanelService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IPanelService

## Hierarchy

-   [`Component`](../classes/molecule.react.Component)<[`IPanel`](molecule.IPanel)\>

    ↳ **`IPanelService`**

## Implemented by

-   [`PanelService`](../classes/molecule.PanelService)

## Properties

### outputEditorInstance

• `Readonly` **outputEditorInstance**: `undefined` \| `IStandaloneCodeEditor`

The editorInstance of Output

#### Defined in

[src/services/workbench/panelService.ts:24](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/panelService.ts#L24)

---

### state

• `Protected` `Abstract` **state**: [`IPanel`](molecule.IPanel)

#### Inherited from

[Component](../classes/molecule.react.Component).[state](../classes/molecule.react.Component#state)

#### Defined in

[src/react/component.ts:42](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L42)

## Methods

### add

▸ **add**(`data`): `void`

Add new Panel items

#### Parameters

| Name   | Type                                           |
| :----- | :--------------------------------------------- |
| `data` | `IPanelItem`<`any`\> \| `IPanelItem`<`any`\>[] |

#### Returns

`void`

#### Defined in

[src/services/workbench/panelService.ts:49](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/panelService.ts#L49)

---

### appendOutput

▸ **appendOutput**(`content`): `void`

Append the content into Output panel

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `content` | `string` |

#### Returns

`void`

#### Defined in

[src/services/workbench/panelService.ts:96](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/panelService.ts#L96)

---

### cleanOutput

▸ **cleanOutput**(): `void`

Clean the Output content

#### Returns

`void`

#### Defined in

[src/services/workbench/panelService.ts:100](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/panelService.ts#L100)

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

### getOutputValue

▸ **getOutputValue**(): `string`

Get the value of Output Panel

#### Returns

`string`

#### Defined in

[src/services/workbench/panelService.ts:91](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/panelService.ts#L91)

---

### getPanel

▸ **getPanel**(`id`): `undefined` \| `IPanelItem`<`any`\>

Get the specific panel

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`undefined` \| `IPanelItem`<`any`\>

#### Defined in

[src/services/workbench/panelService.ts:44](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/panelService.ts#L44)

---

### getState

▸ **getState**(): [`IPanel`](molecule.IPanel)

Get the Component state

#### Returns

[`IPanel`](molecule.IPanel)

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L83)

---

### onTabChange

▸ **onTabChange**(`callback`): `void`

Listen to the Panel tabs onChange event

#### Parameters

| Name       | Type                            |
| :--------- | :------------------------------ |
| `callback` | (`panelId`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/panelService.ts:75](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/panelService.ts#L75)

---

### onTabClose

▸ **onTabClose**(`callback`): `void`

Listen to the Panel tabs close event

#### Parameters

| Name       | Type                            |
| :--------- | :------------------------------ |
| `callback` | (`panelId`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/panelService.ts:87](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/panelService.ts#L87)

---

### onToolbarClick

▸ **onToolbarClick**(`callback`): `void`

Listen to the Panel toolbar click event

#### Parameters

| Name       | Type                                                                                                                                     |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`e`: `MouseEvent`<`Element`, `MouseEvent`\>, `item`: [`IActionBarItemProps`](molecule.component.IActionBarItemProps)<`any`\>) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/panelService.ts:80](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/panelService.ts#L80)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                           |
| :--------- | :--------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`IPanel`](molecule.IPanel), `nextState`: [`IPanel`](molecule.IPanel)) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:71](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L71)

---

### open

▸ **open**(`panel`): `void`

Open a new or existing panel item as the active in Panel view

#### Parameters

| Name    | Type                 |
| :------ | :------------------- |
| `panel` | `IPanelItem`<`any`\> |

#### Returns

`void`

#### Defined in

[src/services/workbench/panelService.ts:39](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/panelService.ts#L39)

---

### remove

▸ **remove**(`id`): `undefined` \| `IPanelItem`<`any`\>

Remove the specific panel

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`undefined` \| `IPanelItem`<`any`\>

#### Defined in

[src/services/workbench/panelService.ts:66](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/panelService.ts#L66)

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

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type                        |
| :----------- | :-------------------------- |
| `nextState?` | [`IPanel`](molecule.IPanel) |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[render](../classes/molecule.react.Component#render)

#### Defined in

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L67)

---

### reset

▸ **reset**(): `void`

Reset data in state

#### Returns

`void`

#### Defined in

[src/services/workbench/panelService.ts:104](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/panelService.ts#L104)

---

### setActive

▸ **setActive**(`id`): `void`

Set the current active panel

This method will log error when couldn't find target panel in state data.
So if you want to add a panel and meanwhile active it, please use the `open` method

#### Parameters

| Name | Type     | Description     |
| :--- | :------- | :-------------- |
| `id` | `string` | target panel id |

#### Returns

`void`

#### Defined in

[src/services/workbench/panelService.ts:34](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/panelService.ts#L34)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                           | Description                |
| :---------- | :--------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`IPanel`](molecule.IPanel)\>                                                        | update target state values |
| `callback?` | (`prevState`: [`IPanel`](molecule.IPanel), `nextState`: [`IPanel`](molecule.IPanel)) => `void` | -                          |

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

### toggleMaximize

▸ **toggleMaximize**(): `void`

Toggle the panel between maximized or normal

#### Returns

`void`

#### Defined in

[src/services/workbench/panelService.ts:70](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/panelService.ts#L70)

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

### update

▸ **update**(`panel`): `undefined` \| `IPanelItem`<`any`\>

Update the specific panel

#### Parameters

| Name    | Type                 | Description              |
| :------ | :------------------- | :----------------------- |
| `panel` | `IPanelItem`<`any`\> | the id field is required |

#### Returns

`undefined` \| `IPanelItem`<`any`\>

#### Defined in

[src/services/workbench/panelService.ts:54](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/panelService.ts#L54)

---

### updateOutput

▸ **updateOutput**(`panel`): `undefined` \| `IPanelItem`<`any`\>

Update the Output panel, except the value

If you want to update the value of this panel, please use the `appendOutput` method

#### Parameters

| Name    | Type                 |
| :------ | :------------------- |
| `panel` | `IPanelItem`<`any`\> |

#### Returns

`undefined` \| `IPanelItem`<`any`\>

#### Defined in

[src/services/workbench/panelService.ts:61](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/panelService.ts#L61)
