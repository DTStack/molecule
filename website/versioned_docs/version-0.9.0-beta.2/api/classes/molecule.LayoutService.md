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

[src/services/workbench/layoutService.ts:78](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/layoutService.ts#L78)

## Properties

### \_container

• `Private` **\_container**: `null` \| `HTMLElement`

#### Defined in

[src/services/workbench/layoutService.ts:77](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/layoutService.ts#L77)

---

### state

• `Protected` **state**: `ILayout`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[state](../interfaces/molecule.ILayoutService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[src/services/workbench/layoutService.ts:76](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/layoutService.ts#L76)

## Accessors

### container

• `get` **container**(): `HTMLElement`

Get the container of the molecule

#### Returns

`HTMLElement`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[container](../interfaces/molecule.ILayoutService#container)

#### Defined in

[src/services/workbench/layoutService.ts:83](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/layoutService.ts#L83)

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

[ILayoutService](../interfaces/molecule.ILayoutService).[emit](../interfaces/molecule.ILayoutService#emit)

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

[ILayoutService](../interfaces/molecule.ILayoutService).[forceUpdate](../interfaces/molecule.ILayoutService#forceupdate)

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:79](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L79)

---

### getMenuBarMode

▸ **getMenuBarMode**(): `"horizontal"` \| `"vertical"`

Get the mode of the MenuBar

#### Returns

`"horizontal"` \| `"vertical"`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[getMenuBarMode](../interfaces/molecule.ILayoutService#getmenubarmode)

#### Defined in

[src/services/workbench/layoutService.ts:161](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/layoutService.ts#L161)

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

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L83)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                       |
| :--------- | :--------------------------------------------------------- |
| `callback` | (`prevState`: `ILayout`, `nextState`: `ILayout`) => `void` |

#### Returns

`void`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[onUpdateState](../interfaces/molecule.ILayoutService#onupdatestate)

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:71](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L71)

---

### removeOnUpdateState

▸ **removeOnUpdateState**(): `void`

Remove the Component update event listening

#### Returns

`void`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[removeOnUpdateState](../interfaces/molecule.ILayoutService#removeonupdatestate)

#### Inherited from

[Component](molecule.react.Component).[removeOnUpdateState](molecule.react.Component#removeonupdatestate)

#### Defined in

[src/react/component.ts:75](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L75)

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

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L67)

---

### reset

▸ **reset**(): `void`

Reset all layout data as default value

#### Returns

`void`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[reset](../interfaces/molecule.ILayoutService#reset)

#### Defined in

[src/services/workbench/layoutService.ts:166](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/layoutService.ts#L166)

---

### setHorizontalPaneSize

▸ **setHorizontalPaneSize**(`horizontalSplitPanePos`): `void`

Set the sizes between the editor and the panel

#### Parameters

| Name                     | Type       |
| :----------------------- | :--------- |
| `horizontalSplitPanePos` | `string`[] |

#### Returns

`void`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[setHorizontalPaneSize](../interfaces/molecule.ILayoutService#sethorizontalpanesize)

#### Defined in

[src/services/workbench/layoutService.ts:149](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/layoutService.ts#L149)

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

[src/services/workbench/layoutService.ts:153](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/layoutService.ts#L153)

---

### setPaneSize

▸ **setPaneSize**(`splitPanePos`): `void`

Set the sizes between the side bar and main content area

#### Parameters

| Name           | Type       |
| :------------- | :--------- |
| `splitPanePos` | `string`[] |

#### Returns

`void`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[setPaneSize](../interfaces/molecule.ILayoutService#setpanesize)

#### Defined in

[src/services/workbench/layoutService.ts:146](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/layoutService.ts#L146)

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

[src/services/workbench/layoutService.ts:125](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/layoutService.ts#L125)

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

[ILayoutService](../interfaces/molecule.ILayoutService).[subscribe](../interfaces/molecule.ILayoutService#subscribe)

#### Inherited from

[Component](molecule.react.Component).[subscribe](molecule.react.Component#subscribe)

#### Defined in

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L11)

---

### toggleActivityBarVisibility

▸ **toggleActivityBarVisibility**(): `boolean`

Toggle the visibility of the activity bar, returns the status of activity bar's `hidden`

#### Returns

`boolean`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[toggleActivityBarVisibility](../interfaces/molecule.ILayoutService#toggleactivitybarvisibility)

#### Defined in

[src/services/workbench/layoutService.ts:111](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/layoutService.ts#L111)

---

### toggleMenuBarVisibility

▸ **toggleMenuBarVisibility**(): `boolean`

Toggle the visibility of menu bar, returns the status of menu bar's `hidden`

#### Returns

`boolean`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[toggleMenuBarVisibility](../interfaces/molecule.ILayoutService#togglemenubarvisibility)

#### Defined in

[src/services/workbench/layoutService.ts:90](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/layoutService.ts#L90)

---

### togglePanelMaximized

▸ **togglePanelMaximized**(): `boolean`

Toggle the maximized status of the panel, returns the status of maximized panel

#### Returns

`boolean`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[togglePanelMaximized](../interfaces/molecule.ILayoutService#togglepanelmaximized)

#### Defined in

[src/services/workbench/layoutService.ts:135](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/layoutService.ts#L135)

---

### togglePanelVisibility

▸ **togglePanelVisibility**(): `boolean`

Toggle the visibility of the panel, returns the status of panel's `hidden`

#### Returns

`boolean`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[togglePanelVisibility](../interfaces/molecule.ILayoutService#togglepanelvisibility)

#### Defined in

[src/services/workbench/layoutService.ts:97](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/layoutService.ts#L97)

---

### toggleSidebarVisibility

▸ **toggleSidebarVisibility**(): `boolean`

Toggle the visibility of side bar, returns the status of side bar's `hidden`

#### Returns

`boolean`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[toggleSidebarVisibility](../interfaces/molecule.ILayoutService#togglesidebarvisibility)

#### Defined in

[src/services/workbench/layoutService.ts:104](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/layoutService.ts#L104)

---

### toggleStatusBarVisibility

▸ **toggleStatusBarVisibility**(): `boolean`

Toggle the visibility of the status bar, returns the status of status bar's `hidden`

#### Returns

`boolean`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[toggleStatusBarVisibility](../interfaces/molecule.ILayoutService#togglestatusbarvisibility)

#### Defined in

[src/services/workbench/layoutService.ts:118](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/layoutService.ts#L118)

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

[ILayoutService](../interfaces/molecule.ILayoutService).[unsubscribe](../interfaces/molecule.ILayoutService#unsubscribe)

#### Inherited from

[Component](molecule.react.Component).[unsubscribe](molecule.react.Component#unsubscribe)

#### Defined in

[src/common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L37)
