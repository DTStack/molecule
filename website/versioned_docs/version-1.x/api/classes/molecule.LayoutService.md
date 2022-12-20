---
id: 'molecule.LayoutService'
title: 'Class: LayoutService'
sidebar_label: 'LayoutService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).LayoutService

## Hierarchy

-   [`Component`](molecule.react.Component)<`ILayout`\>

    ↳ **`LayoutService`**

## Implements

-   [`ILayoutService`](../interfaces/molecule.ILayoutService)

## Constructors

### constructor

• **new LayoutService**()

#### Overrides

[Component](molecule.react.Component).[constructor](molecule.react.Component#constructor)

#### Defined in

[services/workbench/layoutService.ts:99](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L99)

## Properties

### \_container

• `Private` **\_container**: `null` \| `HTMLElement`

#### Defined in

[services/workbench/layoutService.ts:98](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L98)

---

### state

• `Protected` **state**: `ILayout`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[state](../interfaces/molecule.ILayoutService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[services/workbench/layoutService.ts:97](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L97)

## Accessors

### container

• `get` **container**(): `HTMLElement`

Get the container of the molecule

#### Returns

`HTMLElement`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[container](../interfaces/molecule.ILayoutService#container)

#### Defined in

[services/workbench/layoutService.ts:104](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L104)

## Methods

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

[ILayoutService](../interfaces/molecule.ILayoutService).[count](../interfaces/molecule.ILayoutService#count)

#### Inherited from

[Component](molecule.react.Component).[count](molecule.react.Component#count)

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

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[emit](../interfaces/molecule.ILayoutService#emit)

#### Inherited from

[Component](molecule.react.Component).[emit](molecule.react.Component#emit)

#### Defined in

[common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

Force to update the Component

#### Returns

`void`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[forceUpdate](../interfaces/molecule.ILayoutService#forceupdate)

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

#### Defined in

[react/component.ts:81](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L81)

---

### getMenuBarMode

▸ **getMenuBarMode**(): `"horizontal"` \| `"vertical"`

Get the mode of the MenuBar

#### Returns

`"horizontal"` \| `"vertical"`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[getMenuBarMode](../interfaces/molecule.ILayoutService#getmenubarmode)

#### Defined in

[services/workbench/layoutService.ts:190](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L190)

---

### getState

▸ **getState**(): `ILayout`

Get the Component state

#### Returns

`ILayout`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[getState](../interfaces/molecule.ILayoutService#getstate)

#### Inherited from

[Component](molecule.react.Component).[getState](molecule.react.Component#getstate)

#### Defined in

[react/component.ts:85](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L85)

---

### onUpdateState

▸ **onUpdateState**(`listener`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                       |
| :--------- | :--------------------------------------------------------- |
| `listener` | (`prevState`: `ILayout`, `nextState`: `ILayout`) => `void` |

#### Returns

`void`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[onUpdateState](../interfaces/molecule.ILayoutService#onupdatestate)

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

#### Defined in

[react/component.ts:73](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L73)

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

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[removeOnUpdateState](../interfaces/molecule.ILayoutService#removeonupdatestate)

#### Inherited from

[Component](molecule.react.Component).[removeOnUpdateState](molecule.react.Component#removeonupdatestate)

#### Defined in

[react/component.ts:77](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L77)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type      |
| :----------- | :-------- |
| `nextState?` | `ILayout` |

#### Returns

`void`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[render](../interfaces/molecule.ILayoutService#render)

#### Inherited from

[Component](molecule.react.Component).[render](molecule.react.Component#render)

#### Defined in

[react/component.ts:69](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L69)

---

### reset

▸ **reset**(): `void`

Reset all layout data as default value

#### Returns

`void`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[reset](../interfaces/molecule.ILayoutService#reset)

#### Defined in

[services/workbench/layoutService.ts:228](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L228)

---

### setAuxiliaryBar

▸ **setAuxiliaryBar**(`hidden`): `boolean`

Set the visibility of auxiliary bar

Returns the next state of hidden

#### Parameters

| Name     | Type                                              |
| :------- | :------------------------------------------------ |
| `hidden` | `boolean` \| (`preState`: `boolean`) => `boolean` |

#### Returns

`boolean`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[setAuxiliaryBar](../interfaces/molecule.ILayoutService#setauxiliarybar)

#### Defined in

[services/workbench/layoutService.ts:211](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L211)

---

### setEditorGroupDirection

▸ **setEditorGroupDirection**(`direction`): `void`

Set the direction of editor group,default is `vertical`

#### Parameters

| Name        | Type                                                      |
| :---------- | :-------------------------------------------------------- |
| `direction` | `MenuBarMode` \| (`prev`: `MenuBarMode`) => `MenuBarMode` |

#### Returns

`void`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[setEditorGroupDirection](../interfaces/molecule.ILayoutService#seteditorgroupdirection)

#### Defined in

[services/workbench/layoutService.ts:195](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L195)

---

### setGroupSplitSize

▸ **setGroupSplitSize**(`groupSplitPos`): `void`

Set the sizes between editor groups

#### Parameters

| Name            | Type                     |
| :-------------- | :----------------------- |
| `groupSplitPos` | (`string` \| `number`)[] |

#### Returns

`void`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[setGroupSplitSize](../interfaces/molecule.ILayoutService#setgroupsplitsize)

#### Defined in

[services/workbench/layoutService.ts:175](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L175)

---

### setHorizontalPaneSize

▸ **setHorizontalPaneSize**(`horizontalSplitPanePos`): `void`

Set the sizes between the editor and the panel

#### Parameters

| Name                     | Type                     |
| :----------------------- | :----------------------- |
| `horizontalSplitPanePos` | (`string` \| `number`)[] |

#### Returns

`void`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[setHorizontalPaneSize](../interfaces/molecule.ILayoutService#sethorizontalpanesize)

#### Defined in

[services/workbench/layoutService.ts:169](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L169)

---

### setMenuBarMode

▸ **setMenuBarMode**(`mode`): `void`

Set the mode of the MenuBar, default is `vertical`

#### Parameters

| Name   | Type                           |
| :----- | :----------------------------- |
| `mode` | `"horizontal"` \| `"vertical"` |

#### Returns

`void`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[setMenuBarMode](../interfaces/molecule.ILayoutService#setmenubarmode)

#### Defined in

[services/workbench/layoutService.ts:181](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L181)

---

### setPaneSize

▸ **setPaneSize**(`splitPanePos`): `void`

Set the sizes between the side bar and main content area

#### Parameters

| Name           | Type                     |
| :------------- | :----------------------- |
| `splitPanePos` | (`string` \| `number`)[] |

#### Returns

`void`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[setPaneSize](../interfaces/molecule.ILayoutService#setpanesize)

#### Defined in

[services/workbench/layoutService.ts:166](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L166)

---

### setSideBarPosition

▸ **setSideBarPosition**(`position`): `void`

Set the position of the side bar, default is in `left`

#### Parameters

| Name       | Type                  |
| :--------- | :-------------------- |
| `position` | `"right"` \| `"left"` |

#### Returns

`void`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[setSideBarPosition](../interfaces/molecule.ILayoutService#setsidebarposition)

#### Defined in

[services/workbench/layoutService.ts:145](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L145)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                       | Description                |
| :---------- | :--------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<`ILayout`\>                                      | update target state values |
| `callback?` | (`prevState`: `ILayout`, `nextState`: `ILayout`) => `void` | -                          |

#### Returns

`void`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[setState](../interfaces/molecule.ILayoutService#setstate)

#### Inherited from

[Component](molecule.react.Component).[setState](molecule.react.Component#setstate)

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

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[subscribe](../interfaces/molecule.ILayoutService#subscribe)

#### Inherited from

[Component](molecule.react.Component).[subscribe](molecule.react.Component#subscribe)

#### Defined in

[common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L11)

---

### toggleActivityBarVisibility

▸ **toggleActivityBarVisibility**(): `boolean`

Toggle the visibility of the activity bar, returns the status of activity bar's `hidden`

#### Returns

`boolean`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[toggleActivityBarVisibility](../interfaces/molecule.ILayoutService#toggleactivitybarvisibility)

#### Defined in

[services/workbench/layoutService.ts:131](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L131)

---

### toggleMenuBarVisibility

▸ **toggleMenuBarVisibility**(): `boolean`

Toggle the visibility of menu bar, returns the status of menu bar's `hidden`

#### Returns

`boolean`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[toggleMenuBarVisibility](../interfaces/molecule.ILayoutService#togglemenubarvisibility)

#### Defined in

[services/workbench/layoutService.ts:110](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L110)

---

### togglePanelMaximized

▸ **togglePanelMaximized**(): `boolean`

Toggle the maximized status of the panel, returns the status of maximized panel

#### Returns

`boolean`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[togglePanelMaximized](../interfaces/molecule.ILayoutService#togglepanelmaximized)

#### Defined in

[services/workbench/layoutService.ts:155](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L155)

---

### togglePanelVisibility

▸ **togglePanelVisibility**(): `boolean`

Toggle the visibility of the panel, returns the status of panel's `hidden`

#### Returns

`boolean`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[togglePanelVisibility](../interfaces/molecule.ILayoutService#togglepanelvisibility)

#### Defined in

[services/workbench/layoutService.ts:117](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L117)

---

### toggleSidebarVisibility

▸ **toggleSidebarVisibility**(): `boolean`

Toggle the visibility of side bar, returns the status of side bar's `hidden`

#### Returns

`boolean`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[toggleSidebarVisibility](../interfaces/molecule.ILayoutService#togglesidebarvisibility)

#### Defined in

[services/workbench/layoutService.ts:124](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L124)

---

### toggleStatusBarVisibility

▸ **toggleStatusBarVisibility**(): `boolean`

Toggle the visibility of the status bar, returns the status of status bar's `hidden`

#### Returns

`boolean`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[toggleStatusBarVisibility](../interfaces/molecule.ILayoutService#togglestatusbarvisibility)

#### Defined in

[services/workbench/layoutService.ts:138](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L138)

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

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[unsubscribe](../interfaces/molecule.ILayoutService#unsubscribe)

#### Inherited from

[Component](molecule.react.Component).[unsubscribe](molecule.react.Component#unsubscribe)

#### Defined in

[common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L37)
