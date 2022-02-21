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

[src/services/workbench/layoutService.ts:15](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/layoutService.ts#L15)

---

### state

• `Protected` `Abstract` **state**: `ILayout`

#### Inherited from

[Component](../classes/molecule.react.Component).[state](../classes/molecule.react.Component#state)

#### Defined in

[src/react/component.ts:42](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L42)

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

### getMenuBarMode

▸ **getMenuBarMode**(): `"horizontal"` \| `"vertical"`

Get the mode of the MenuBar

#### Returns

`"horizontal"` \| `"vertical"`

#### Defined in

[src/services/workbench/layoutService.ts:65](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/layoutService.ts#L65)

---

### getState

▸ **getState**(): `ILayout`

Get the Component state

#### Returns

`ILayout`

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:71](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L71)

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

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L67)

---

### reset

▸ **reset**(): `void`

Reset all layout data as default value

#### Returns

`void`

#### Defined in

[src/services/workbench/layoutService.ts:69](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/layoutService.ts#L69)

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

[src/services/workbench/layoutService.ts:49](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/layoutService.ts#L49)

---

### setMenuBarMode

▸ **setMenuBarMode**(`mode`): `void`

Set the mode of the MenuBar, default is `vertical`

**`unachieved`**

#### Parameters

| Name   | Type                           |
| :----- | :----------------------------- |
| `mode` | `"horizontal"` \| `"vertical"` |

#### Returns

`void`

#### Defined in

[src/services/workbench/layoutService.ts:61](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/layoutService.ts#L61)

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

[src/services/workbench/layoutService.ts:44](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/layoutService.ts#L44)

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

[src/services/workbench/layoutService.ts:55](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/layoutService.ts#L55)

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

### toggleActivityBarVisibility

▸ **toggleActivityBarVisibility**(): `boolean`

Toggle the visibility of the activity bar, returns the status of activity bar's `hidden`

#### Returns

`boolean`

#### Defined in

[src/services/workbench/layoutService.ts:31](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/layoutService.ts#L31)

---

### toggleMenuBarVisibility

▸ **toggleMenuBarVisibility**(): `boolean`

Toggle the visibility of menu bar, returns the status of menu bar's `hidden`

#### Returns

`boolean`

#### Defined in

[src/services/workbench/layoutService.ts:19](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/layoutService.ts#L19)

---

### togglePanelMaximized

▸ **togglePanelMaximized**(): `boolean`

Toggle the maximized status of the panel, returns the status of maximized panel

#### Returns

`boolean`

#### Defined in

[src/services/workbench/layoutService.ts:39](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/layoutService.ts#L39)

---

### togglePanelVisibility

▸ **togglePanelVisibility**(): `boolean`

Toggle the visibility of the panel, returns the status of panel's `hidden`

#### Returns

`boolean`

#### Defined in

[src/services/workbench/layoutService.ts:27](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/layoutService.ts#L27)

---

### toggleSidebarVisibility

▸ **toggleSidebarVisibility**(): `boolean`

Toggle the visibility of side bar, returns the status of side bar's `hidden`

#### Returns

`boolean`

#### Defined in

[src/services/workbench/layoutService.ts:23](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/layoutService.ts#L23)

---

### toggleStatusBarVisibility

▸ **toggleStatusBarVisibility**(): `boolean`

Toggle the visibility of the status bar, returns the status of status bar's `hidden`

#### Returns

`boolean`

#### Defined in

[src/services/workbench/layoutService.ts:35](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/layoutService.ts#L35)

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
