---
id: 'molecule.IPanelService'
title: 'Interface: IPanelService'
sidebar_label: 'IPanelService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IPanelService

## Hierarchy

-   [`Component`](../classes/molecule.react.Component)<[`IPanel`](molecule.model.IPanel)\>

    ↳ **`IPanelService`**

## Implemented by

-   [`PanelService`](../classes/molecule.PanelService)

## Properties

### outputEditorInstance

• `Readonly` **outputEditorInstance**: `undefined` \| `IStandaloneCodeEditor`

The editorInstance of Output

#### Defined in

[services/workbench/panelService.ts:26](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/panelService.ts#L26)

---

### state

• `Protected` `Abstract` **state**: [`IPanel`](molecule.model.IPanel)

#### Inherited from

[Component](../classes/molecule.react.Component).[state](../classes/molecule.react.Component#state)

#### Defined in

[react/component.ts:44](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L44)

## Methods

### add

▸ **add**(`data`): `void`

Add new Panel items

#### Parameters

| Name   | Type                                                                                                     |
| :----- | :------------------------------------------------------------------------------------------------------- |
| `data` | [`IPanelItem`](molecule.model.IPanelItem)<`any`\> \| [`IPanelItem`](molecule.model.IPanelItem)<`any`\>[] |

#### Returns

`void`

#### Defined in

[services/workbench/panelService.ts:51](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/panelService.ts#L51)

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

[services/workbench/panelService.ts:98](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/panelService.ts#L98)

---

### cleanOutput

▸ **cleanOutput**(): `void`

Clean the Output content

#### Returns

`void`

#### Defined in

[services/workbench/panelService.ts:102](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/panelService.ts#L102)

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

### getOutputValue

▸ **getOutputValue**(): `string`

Get the value of Output Panel

#### Returns

`string`

#### Defined in

[services/workbench/panelService.ts:93](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/panelService.ts#L93)

---

### getPanel

▸ **getPanel**(`id`): `undefined` \| [`IPanelItem`](molecule.model.IPanelItem)<`any`\>

Get the specific panel

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `id` | `UniqueId` |

#### Returns

`undefined` \| [`IPanelItem`](molecule.model.IPanelItem)<`any`\>

#### Defined in

[services/workbench/panelService.ts:46](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/panelService.ts#L46)

---

### getState

▸ **getState**(): [`IPanel`](molecule.model.IPanel)

Get the Component state

#### Returns

[`IPanel`](molecule.model.IPanel)

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

#### Defined in

[react/component.ts:85](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L85)

---

### onTabChange

▸ **onTabChange**(`callback`): `void`

Listen to the Panel tabs onChange event

#### Parameters

| Name       | Type                              |
| :--------- | :-------------------------------- |
| `callback` | (`panelId`: `UniqueId`) => `void` |

#### Returns

`void`

#### Defined in

[services/workbench/panelService.ts:77](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/panelService.ts#L77)

---

### onTabClose

▸ **onTabClose**(`callback`): `void`

Listen to the Panel tabs close event

#### Parameters

| Name       | Type                              |
| :--------- | :-------------------------------- |
| `callback` | (`panelId`: `UniqueId`) => `void` |

#### Returns

`void`

#### Defined in

[services/workbench/panelService.ts:89](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/panelService.ts#L89)

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

[services/workbench/panelService.ts:82](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/panelService.ts#L82)

---

### onUpdateState

▸ **onUpdateState**(`listener`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                       |
| :--------- | :--------------------------------------------------------------------------------------------------------- |
| `listener` | (`prevState`: [`IPanel`](molecule.model.IPanel), `nextState`: [`IPanel`](molecule.model.IPanel)) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

#### Defined in

[react/component.ts:73](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L73)

---

### open

▸ **open**(`panel`): `void`

Open a new or existing panel item as the active in Panel view

#### Parameters

| Name    | Type                                              |
| :------ | :------------------------------------------------ |
| `panel` | [`IPanelItem`](molecule.model.IPanelItem)<`any`\> |

#### Returns

`void`

#### Defined in

[services/workbench/panelService.ts:41](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/panelService.ts#L41)

---

### remove

▸ **remove**(`id`): `undefined` \| [`IPanelItem`](molecule.model.IPanelItem)<`any`\>

Remove the specific panel

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `id` | `UniqueId` |

#### Returns

`undefined` \| [`IPanelItem`](molecule.model.IPanelItem)<`any`\>

#### Defined in

[services/workbench/panelService.ts:68](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/panelService.ts#L68)

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

| Name         | Type                              |
| :----------- | :-------------------------------- |
| `nextState?` | [`IPanel`](molecule.model.IPanel) |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[render](../classes/molecule.react.Component#render)

#### Defined in

[react/component.ts:69](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L69)

---

### reset

▸ **reset**(): `void`

Reset data in state

#### Returns

`void`

#### Defined in

[services/workbench/panelService.ts:106](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/panelService.ts#L106)

---

### setActive

▸ **setActive**(`id`): `void`

Set the current active panel

This method will log error when couldn't find target panel in state data.
So if you want to add a panel and meanwhile active it, please use the `open` method

#### Parameters

| Name | Type       | Description     |
| :--- | :--------- | :-------------- |
| `id` | `UniqueId` | target panel id |

#### Returns

`void`

#### Defined in

[services/workbench/panelService.ts:36](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/panelService.ts#L36)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                       | Description                |
| :---------- | :--------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`IPanel`](molecule.model.IPanel)\>                                                              | update target state values |
| `callback?` | (`prevState`: [`IPanel`](molecule.model.IPanel), `nextState`: [`IPanel`](molecule.model.IPanel)) => `void` | -                          |

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

### toggleMaximize

▸ **toggleMaximize**(): `void`

Toggle the panel between maximized or normal

#### Returns

`void`

#### Defined in

[services/workbench/panelService.ts:72](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/panelService.ts#L72)

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

▸ **update**(`panel`): `undefined` \| [`IPanelItem`](molecule.model.IPanelItem)<`any`\>

Update the specific panel

#### Parameters

| Name    | Type                                              | Description              |
| :------ | :------------------------------------------------ | :----------------------- |
| `panel` | [`IPanelItem`](molecule.model.IPanelItem)<`any`\> | the id field is required |

#### Returns

`undefined` \| [`IPanelItem`](molecule.model.IPanelItem)<`any`\>

#### Defined in

[services/workbench/panelService.ts:56](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/panelService.ts#L56)

---

### updateOutput

▸ **updateOutput**(`panel`): `undefined` \| [`IPanelItem`](molecule.model.IPanelItem)<`any`\>

Update the Output panel, except the value

If you want to update the value of this panel, please use the `appendOutput` method

#### Parameters

| Name    | Type                                              |
| :------ | :------------------------------------------------ |
| `panel` | [`IPanelItem`](molecule.model.IPanelItem)<`any`\> |

#### Returns

`undefined` \| [`IPanelItem`](molecule.model.IPanelItem)<`any`\>

#### Defined in

[services/workbench/panelService.ts:63](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/panelService.ts#L63)
