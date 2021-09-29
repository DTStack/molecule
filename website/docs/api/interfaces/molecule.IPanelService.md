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

[src/services/workbench/panelService.ts:28](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/panelService.ts#L28)

---

### state

• `Protected` `Abstract` **state**: [`IPanel`](molecule.IPanel)

#### Inherited from

[Component](../classes/molecule.react.Component).[state](../classes/molecule.react.Component#state)

#### Defined in

[src/react/component.ts:25](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L25)

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

[src/services/workbench/panelService.ts:53](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/panelService.ts#L53)

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

[src/services/workbench/panelService.ts:100](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/panelService.ts#L100)

---

### cleanOutput

▸ **cleanOutput**(): `void`

Clean the Output content

#### Returns

`void`

#### Defined in

[src/services/workbench/panelService.ts:104](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/panelService.ts#L104)

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

### getOutputValue

▸ **getOutputValue**(): `string`

Get the value of Output Panel

#### Returns

`string`

#### Defined in

[src/services/workbench/panelService.ts:95](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/panelService.ts#L95)

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

[src/services/workbench/panelService.ts:48](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/panelService.ts#L48)

---

### getState

▸ **getState**(): [`IPanel`](molecule.IPanel)

#### Returns

[`IPanel`](molecule.IPanel)

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:62](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L62)

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

[src/services/workbench/panelService.ts:79](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/panelService.ts#L79)

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

[src/services/workbench/panelService.ts:91](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/panelService.ts#L91)

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

[src/services/workbench/panelService.ts:84](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/panelService.ts#L84)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

#### Parameters

| Name       | Type                                                                                           |
| :--------- | :--------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`IPanel`](molecule.IPanel), `nextState`: [`IPanel`](molecule.IPanel)) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:54](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L54)

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

[src/services/workbench/panelService.ts:43](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/panelService.ts#L43)

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

[src/services/workbench/panelService.ts:70](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/panelService.ts#L70)

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

[src/react/component.ts:50](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L50)

---

### reset

▸ **reset**(): `void`

Reset data in state

#### Returns

`void`

#### Defined in

[src/services/workbench/panelService.ts:108](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/panelService.ts#L108)

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

[src/services/workbench/panelService.ts:38](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/panelService.ts#L38)

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

### toggleMaximize

▸ **toggleMaximize**(): `void`

Toggle the panel between maximized or normal

#### Returns

`void`

#### Defined in

[src/services/workbench/panelService.ts:74](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/panelService.ts#L74)

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

[src/services/workbench/panelService.ts:58](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/panelService.ts#L58)

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

[src/services/workbench/panelService.ts:65](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/panelService.ts#L65)
