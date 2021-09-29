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

[src/services/workbench/layoutService.ts:63](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/layoutService.ts#L63)

## Properties

### \_container

• `Private` **\_container**: `null` \| `HTMLElement`

#### Defined in

[src/services/workbench/layoutService.ts:62](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/layoutService.ts#L62)

---

### state

• `Protected` **state**: `ILayout`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[state](../interfaces/molecule.ILayoutService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[src/services/workbench/layoutService.ts:61](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/layoutService.ts#L61)

## Accessors

### container

• `get` **container**(): `HTMLElement`

Get the container of the molecule

#### Returns

`HTMLElement`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[container](../interfaces/molecule.ILayoutService#container)

#### Defined in

[src/services/workbench/layoutService.ts:68](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/layoutService.ts#L68)

## Methods

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

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[forceUpdate](../interfaces/molecule.ILayoutService#forceupdate)

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:58](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L58)

---

### getState

▸ **getState**(): `ILayout`

#### Returns

`ILayout`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[getState](../interfaces/molecule.ILayoutService#getstate)

#### Inherited from

[Component](molecule.react.Component).[getState](molecule.react.Component#getstate)

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

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[onEvent](../interfaces/molecule.ILayoutService#onevent)

#### Inherited from

[Component](molecule.react.Component).[onEvent](molecule.react.Component#onevent)

#### Defined in

[src/react/component.ts:66](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L66)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

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

[src/react/component.ts:54](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L54)

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

[src/react/component.ts:50](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L50)

---

### reset

▸ **reset**(): `void`

Reset all layout data as default value

#### Returns

`void`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[reset](../interfaces/molecule.ILayoutService#reset)

#### Defined in

[src/services/workbench/layoutService.ts:138](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/layoutService.ts#L138)

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

[src/services/workbench/layoutService.ts:134](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/layoutService.ts#L134)

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

[src/services/workbench/layoutService.ts:131](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/layoutService.ts#L131)

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

[src/services/workbench/layoutService.ts:110](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/layoutService.ts#L110)

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

[ILayoutService](../interfaces/molecule.ILayoutService).[subscribe](../interfaces/molecule.ILayoutService#subscribe)

#### Inherited from

[Component](molecule.react.Component).[subscribe](molecule.react.Component#subscribe)

#### Defined in

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventBus.ts#L11)

---

### toggleActivityBarVisibility

▸ **toggleActivityBarVisibility**(): `boolean`

Toggle the visibility of the activity bar, returns the status of activity bar's `hidden`

#### Returns

`boolean`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[toggleActivityBarVisibility](../interfaces/molecule.ILayoutService#toggleactivitybarvisibility)

#### Defined in

[src/services/workbench/layoutService.ts:96](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/layoutService.ts#L96)

---

### toggleMenuBarVisibility

▸ **toggleMenuBarVisibility**(): `boolean`

Toggle the visibility of menu bar, returns the status of menu bar's `hidden`

#### Returns

`boolean`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[toggleMenuBarVisibility](../interfaces/molecule.ILayoutService#togglemenubarvisibility)

#### Defined in

[src/services/workbench/layoutService.ts:75](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/layoutService.ts#L75)

---

### togglePanelMaximized

▸ **togglePanelMaximized**(): `boolean`

Toggle the maximized status of the panel, returns the status of maximized panel

#### Returns

`boolean`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[togglePanelMaximized](../interfaces/molecule.ILayoutService#togglepanelmaximized)

#### Defined in

[src/services/workbench/layoutService.ts:120](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/layoutService.ts#L120)

---

### togglePanelVisibility

▸ **togglePanelVisibility**(): `boolean`

Toggle the visibility of the panel, returns the status of panel's `hidden`

#### Returns

`boolean`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[togglePanelVisibility](../interfaces/molecule.ILayoutService#togglepanelvisibility)

#### Defined in

[src/services/workbench/layoutService.ts:82](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/layoutService.ts#L82)

---

### toggleSidebarVisibility

▸ **toggleSidebarVisibility**(): `boolean`

Toggle the visibility of side bar, returns the status of side bar's `hidden`

#### Returns

`boolean`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[toggleSidebarVisibility](../interfaces/molecule.ILayoutService#togglesidebarvisibility)

#### Defined in

[src/services/workbench/layoutService.ts:89](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/layoutService.ts#L89)

---

### toggleStatusBarVisibility

▸ **toggleStatusBarVisibility**(): `boolean`

Toggle the visibility of the status bar, returns the status of status bar's `hidden`

#### Returns

`boolean`

#### Implementation of

[ILayoutService](../interfaces/molecule.ILayoutService).[toggleStatusBarVisibility](../interfaces/molecule.ILayoutService#togglestatusbarvisibility)

#### Defined in

[src/services/workbench/layoutService.ts:103](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/layoutService.ts#L103)
