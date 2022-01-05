---
id: 'molecule.PanelService'
title: 'Class: PanelService'
sidebar_label: 'PanelService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).PanelService

## Hierarchy

-   [`Component`](molecule.react.Component)<[`IPanel`](../interfaces/molecule.model.IPanel)\>

    ↳ **`PanelService`**

## Implements

-   [`IPanelService`](../interfaces/molecule.IPanelService)

## Constructors

### constructor

• **new PanelService**()

#### Overrides

[Component](molecule.react.Component).[constructor](molecule.react.Component#constructor)

#### Defined in

[src/services/workbench/panelService.ts:114](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/panelService.ts#L114)

## Properties

### builtinService

• `Private` `Readonly` **builtinService**: [`IBuiltinService`](../interfaces/molecule.IBuiltinService)

#### Defined in

[src/services/workbench/panelService.ts:112](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/panelService.ts#L112)

---

### layoutService

• `Private` `Readonly` **layoutService**: [`LayoutService`](molecule.LayoutService)

#### Defined in

[src/services/workbench/panelService.ts:111](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/panelService.ts#L111)

---

### state

• `Protected` **state**: [`IPanel`](../interfaces/molecule.model.IPanel)

#### Implementation of

[IPanelService](../interfaces/molecule.IPanelService).[state](../interfaces/molecule.IPanelService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[src/services/workbench/panelService.ts:110](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/panelService.ts#L110)

## Accessors

### outputEditorInstance

• `get` **outputEditorInstance**(): `undefined` \| `IStandaloneCodeEditor`

The editorInstance of Output

#### Returns

`undefined` \| `IStandaloneCodeEditor`

#### Implementation of

[IPanelService](../interfaces/molecule.IPanelService).[outputEditorInstance](../interfaces/molecule.IPanelService#outputeditorinstance)

#### Defined in

[src/services/workbench/panelService.ts:131](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/panelService.ts#L131)

## Methods

### add

▸ **add**(`data`): `void`

Add new Panel items

#### Parameters

| Name   | Type                                                                                                                                 |
| :----- | :----------------------------------------------------------------------------------------------------------------------------------- |
| `data` | [`IPanelItem`](../interfaces/molecule.model.IPanelItem)<`any`\> \| [`IPanelItem`](../interfaces/molecule.model.IPanelItem)<`any`\>[] |

#### Returns

`void`

#### Implementation of

[IPanelService](../interfaces/molecule.IPanelService).[add](../interfaces/molecule.IPanelService#add)

#### Defined in

[src/services/workbench/panelService.ts:238](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/panelService.ts#L238)

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

#### Implementation of

[IPanelService](../interfaces/molecule.IPanelService).[appendOutput](../interfaces/molecule.IPanelService#appendoutput)

#### Defined in

[src/services/workbench/panelService.ts:226](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/panelService.ts#L226)

---

### cleanOutput

▸ **cleanOutput**(): `void`

Clean the Output content

#### Returns

`void`

#### Implementation of

[IPanelService](../interfaces/molecule.IPanelService).[cleanOutput](../interfaces/molecule.IPanelService#cleanoutput)

#### Defined in

[src/services/workbench/panelService.ts:234](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/panelService.ts#L234)

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

[IPanelService](../interfaces/molecule.IPanelService).[count](../interfaces/molecule.IPanelService#count)

#### Inherited from

[Component](molecule.react.Component).[count](molecule.react.Component#count)

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

#### Implementation of

[IPanelService](../interfaces/molecule.IPanelService).[emit](../interfaces/molecule.IPanelService#emit)

#### Inherited from

[Component](molecule.react.Component).[emit](molecule.react.Component#emit)

#### Defined in

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

Force to update the Component

#### Returns

`void`

#### Implementation of

[IPanelService](../interfaces/molecule.IPanelService).[forceUpdate](../interfaces/molecule.IPanelService#forceupdate)

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:79](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L79)

---

### getOutputValue

▸ **getOutputValue**(): `any`

Get the value of Output Panel

#### Returns

`any`

#### Implementation of

[IPanelService](../interfaces/molecule.IPanelService).[getOutputValue](../interfaces/molecule.IPanelService#getoutputvalue)

#### Defined in

[src/services/workbench/panelService.ts:205](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/panelService.ts#L205)

---

### getPanel

▸ **getPanel**(`id`): `undefined` \| [`IPanelItem`](../interfaces/molecule.model.IPanelItem)<`any`\>

Get the specific panel

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `id` | `UniqueId` |

#### Returns

`undefined` \| [`IPanelItem`](../interfaces/molecule.model.IPanelItem)<`any`\>

#### Implementation of

[IPanelService](../interfaces/molecule.IPanelService).[getPanel](../interfaces/molecule.IPanelService#getpanel)

#### Defined in

[src/services/workbench/panelService.ts:188](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/panelService.ts#L188)

---

### getState

▸ **getState**(): [`IPanel`](../interfaces/molecule.model.IPanel)

Get the Component state

#### Returns

[`IPanel`](../interfaces/molecule.model.IPanel)

#### Implementation of

[IPanelService](../interfaces/molecule.IPanelService).[getState](../interfaces/molecule.IPanelService#getstate)

#### Inherited from

[Component](molecule.react.Component).[getState](molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L83)

---

### onTabChange

▸ **onTabChange**(`callback`): `void`

Listen to the Panel tabs onChange event

#### Parameters

| Name       | Type                          |
| :--------- | :---------------------------- |
| `callback` | (`key`: `UniqueId`) => `void` |

#### Returns

`void`

#### Implementation of

[IPanelService](../interfaces/molecule.IPanelService).[onTabChange](../interfaces/molecule.IPanelService#ontabchange)

#### Defined in

[src/services/workbench/panelService.ts:291](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/panelService.ts#L291)

---

### onTabClose

▸ **onTabClose**(`callback`): `void`

Listen to the Panel tabs close event

#### Parameters

| Name       | Type                          |
| :--------- | :---------------------------- |
| `callback` | (`key`: `UniqueId`) => `void` |

#### Returns

`void`

#### Implementation of

[IPanelService](../interfaces/molecule.IPanelService).[onTabClose](../interfaces/molecule.IPanelService#ontabclose)

#### Defined in

[src/services/workbench/panelService.ts:301](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/panelService.ts#L301)

---

### onToolbarClick

▸ **onToolbarClick**(`callback`): `void`

Listen to the Panel toolbar click event

#### Parameters

| Name       | Type                                                                                                                                                   |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`e`: `MouseEvent`<`Element`, `MouseEvent`\>, `item`: [`IActionBarItemProps`](../interfaces/molecule.component.IActionBarItemProps)<`any`\>) => `void` |

#### Returns

`void`

#### Implementation of

[IPanelService](../interfaces/molecule.IPanelService).[onToolbarClick](../interfaces/molecule.IPanelService#ontoolbarclick)

#### Defined in

[src/services/workbench/panelService.ts:295](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/panelService.ts#L295)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                                   |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`IPanel`](../interfaces/molecule.model.IPanel), `nextState`: [`IPanel`](../interfaces/molecule.model.IPanel)) => `void` |

#### Returns

`void`

#### Implementation of

[IPanelService](../interfaces/molecule.IPanelService).[onUpdateState](../interfaces/molecule.IPanelService#onupdatestate)

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:71](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L71)

---

### open

▸ **open**(`data`): `void`

Open a new or existing panel item as the active in Panel view

#### Parameters

| Name   | Type                                                            |
| :----- | :-------------------------------------------------------------- |
| `data` | [`IPanelItem`](../interfaces/molecule.model.IPanelItem)<`any`\> |

#### Returns

`void`

#### Implementation of

[IPanelService](../interfaces/molecule.IPanelService).[open](../interfaces/molecule.IPanelService#open)

#### Defined in

[src/services/workbench/panelService.ts:172](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/panelService.ts#L172)

---

### remove

▸ **remove**(`id`): `undefined` \| [`IPanelItem`](../interfaces/molecule.model.IPanelItem)<`any`\>

Remove the specific panel

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `id` | `UniqueId` |

#### Returns

`undefined` \| [`IPanelItem`](../interfaces/molecule.model.IPanelItem)<`any`\>

#### Implementation of

[IPanelService](../interfaces/molecule.IPanelService).[remove](../interfaces/molecule.IPanelService#remove)

#### Defined in

[src/services/workbench/panelService.ts:266](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/panelService.ts#L266)

---

### removeOnUpdateState

▸ **removeOnUpdateState**(): `void`

Remove the Component update event listening

#### Returns

`void`

#### Implementation of

[IPanelService](../interfaces/molecule.IPanelService).[removeOnUpdateState](../interfaces/molecule.IPanelService#removeonupdatestate)

#### Inherited from

[Component](molecule.react.Component).[removeOnUpdateState](molecule.react.Component#removeonupdatestate)

#### Defined in

[src/react/component.ts:75](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L75)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type                                            |
| :----------- | :---------------------------------------------- |
| `nextState?` | [`IPanel`](../interfaces/molecule.model.IPanel) |

#### Returns

`void`

#### Implementation of

[IPanelService](../interfaces/molecule.IPanelService).[render](../interfaces/molecule.IPanelService#render)

#### Inherited from

[Component](molecule.react.Component).[render](molecule.react.Component#render)

#### Defined in

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L67)

---

### reset

▸ **reset**(): `void`

Reset data in state

#### Returns

`void`

#### Implementation of

[IPanelService](../interfaces/molecule.IPanelService).[reset](../interfaces/molecule.IPanelService#reset)

#### Defined in

[src/services/workbench/panelService.ts:282](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/panelService.ts#L282)

---

### setActive

▸ **setActive**(`id`): `void`

Set the current active panel

This method will log error when couldn't find target panel in state data.
So if you want to add a panel and meanwhile active it, please use the `open` method

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `id` | `UniqueId` |

#### Returns

`void`

#### Implementation of

[IPanelService](../interfaces/molecule.IPanelService).[setActive](../interfaces/molecule.IPanelService#setactive)

#### Defined in

[src/services/workbench/panelService.ts:139](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/panelService.ts#L139)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                                                   | Description                |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`IPanel`](../interfaces/molecule.model.IPanel)\>                                                                            | update target state values |
| `callback?` | (`prevState`: [`IPanel`](../interfaces/molecule.model.IPanel), `nextState`: [`IPanel`](../interfaces/molecule.model.IPanel)) => `void` | -                          |

#### Returns

`void`

#### Implementation of

[IPanelService](../interfaces/molecule.IPanelService).[setState](../interfaces/molecule.IPanelService#setstate)

#### Inherited from

[Component](molecule.react.Component).[setState](molecule.react.Component#setstate)

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

#### Implementation of

[IPanelService](../interfaces/molecule.IPanelService).[subscribe](../interfaces/molecule.IPanelService#subscribe)

#### Inherited from

[Component](molecule.react.Component).[subscribe](molecule.react.Component#subscribe)

#### Defined in

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L11)

---

### toggleMaximize

▸ **toggleMaximize**(): `void`

Toggle the panel between maximized or normal

#### Returns

`void`

#### Implementation of

[IPanelService](../interfaces/molecule.IPanelService).[toggleMaximize](../interfaces/molecule.IPanelService#togglemaximize)

#### Defined in

[src/services/workbench/panelService.ts:150](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/panelService.ts#L150)

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

[IPanelService](../interfaces/molecule.IPanelService).[unsubscribe](../interfaces/molecule.IPanelService#unsubscribe)

#### Inherited from

[Component](molecule.react.Component).[unsubscribe](molecule.react.Component#unsubscribe)

#### Defined in

[src/common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L37)

---

### update

▸ **update**(`data`): `undefined` \| [`IPanelItem`](../interfaces/molecule.model.IPanelItem)<`any`\>

Update the specific panel

#### Parameters

| Name   | Type                                                            |
| :----- | :-------------------------------------------------------------- |
| `data` | [`IPanelItem`](../interfaces/molecule.model.IPanelItem)<`any`\> |

#### Returns

`undefined` \| [`IPanelItem`](../interfaces/molecule.model.IPanelItem)<`any`\>

#### Implementation of

[IPanelService](../interfaces/molecule.IPanelService).[update](../interfaces/molecule.IPanelService#update)

#### Defined in

[src/services/workbench/panelService.ts:251](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/panelService.ts#L251)

---

### updateOutput

▸ **updateOutput**(`data`): `undefined` \| [`IPanelItem`](../interfaces/molecule.model.IPanelItem)<`any`\>

Onyl support to update several properties

#### Parameters

| Name   | Type                                                                        |
| :----- | :-------------------------------------------------------------------------- |
| `data` | `Partial`<[`IPanelItem`](../interfaces/molecule.model.IPanelItem)<`any`\>\> |

#### Returns

`undefined` \| [`IPanelItem`](../interfaces/molecule.model.IPanelItem)<`any`\>

#### Implementation of

[IPanelService](../interfaces/molecule.IPanelService).[updateOutput](../interfaces/molecule.IPanelService#updateoutput)

#### Defined in

[src/services/workbench/panelService.ts:214](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/panelService.ts#L214)

---

### updateOutputProperty

▸ `Private` **updateOutputProperty**(`data`): `undefined` \| [`IPanelItem`](../interfaces/molecule.model.IPanelItem)<`any`\>

#### Parameters

| Name   | Type                                                                           |
| :----- | :----------------------------------------------------------------------------- |
| `data` | `Partial`<[`IPanelItem`](../interfaces/molecule.model.IPanelItem)<`string`\>\> |

#### Returns

`undefined` \| [`IPanelItem`](../interfaces/molecule.model.IPanelItem)<`any`\>

#### Defined in

[src/services/workbench/panelService.ts:121](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/panelService.ts#L121)
