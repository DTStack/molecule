---
id: 'molecule.ILayoutService'
title: 'Interface: ILayoutService'
sidebar_label: 'ILayoutService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).ILayoutService

## Hierarchy

-   [`Component`](../classes/molecule.react.Component)<`ILayout`\>

    ↳ **`ILayoutService`**

## Implemented by

-   [`LayoutService`](../classes/molecule.LayoutService)

## Properties

### container

• `Readonly` **container**: `null` \| `HTMLElement`

Get the container of the molecule

#### Defined in

[src/services/workbench/layoutService.ts:10](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/layoutService.ts#L10)

---

### state

• `Protected` `Abstract` **state**: `ILayout`

#### Inherited from

[Component](../classes/molecule.react.Component).[state](../classes/molecule.react.Component#state)

#### Defined in

[src/react/component.ts:25](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L25)

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

### getState

▸ **getState**(): `ILayout`

#### Returns

`ILayout`

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

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

#### Parameters

| Name       | Type                                                       |
| :--------- | :--------------------------------------------------------- |
| `callback` | (`prevState`: `ILayout`, `nextState`: `ILayout`) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[render](../classes/molecule.react.Component#render)

#### Defined in

[src/react/component.ts:50](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L50)

---

### reset

▸ **reset**(): `void`

Reset all layout data as default value

#### Returns

`void`

#### Defined in

[src/services/workbench/layoutService.ts:54](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/layoutService.ts#L54)

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

#### Defined in

[src/services/workbench/layoutService.ts:44](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/layoutService.ts#L44)

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

#### Defined in

[src/services/workbench/layoutService.ts:39](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/layoutService.ts#L39)

---

### setSideBarPosition

▸ **setSideBarPosition**(`position`): `void`

Set the position of the side bar, default is in `left`

**`unachieved`**

#### Parameters

| Name       | Type                  |
| :--------- | :-------------------- |
| `position` | `"right"` \| `"left"` |

#### Returns

`void`

#### Defined in

[src/services/workbench/layoutService.ts:50](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/layoutService.ts#L50)

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

### toggleActivityBarVisibility

▸ **toggleActivityBarVisibility**(): `boolean`

Toggle the visibility of the activity bar, returns the status of activity bar's `hidden`

#### Returns

`boolean`

#### Defined in

[src/services/workbench/layoutService.ts:26](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/layoutService.ts#L26)

---

### toggleMenuBarVisibility

▸ **toggleMenuBarVisibility**(): `boolean`

Toggle the visibility of menu bar, returns the status of menu bar's `hidden`

#### Returns

`boolean`

#### Defined in

[src/services/workbench/layoutService.ts:14](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/layoutService.ts#L14)

---

### togglePanelMaximized

▸ **togglePanelMaximized**(): `boolean`

Toggle the maximized status of the panel, returns the status of maximized panel

#### Returns

`boolean`

#### Defined in

[src/services/workbench/layoutService.ts:34](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/layoutService.ts#L34)

---

### togglePanelVisibility

▸ **togglePanelVisibility**(): `boolean`

Toggle the visibility of the panel, returns the status of panel's `hidden`

#### Returns

`boolean`

#### Defined in

[src/services/workbench/layoutService.ts:22](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/layoutService.ts#L22)

---

### toggleSidebarVisibility

▸ **toggleSidebarVisibility**(): `boolean`

Toggle the visibility of side bar, returns the status of side bar's `hidden`

#### Returns

`boolean`

#### Defined in

[src/services/workbench/layoutService.ts:18](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/layoutService.ts#L18)

---

### toggleStatusBarVisibility

▸ **toggleStatusBarVisibility**(): `boolean`

Toggle the visibility of the status bar, returns the status of status bar's `hidden`

#### Returns

`boolean`

#### Defined in

[src/services/workbench/layoutService.ts:30](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/layoutService.ts#L30)
