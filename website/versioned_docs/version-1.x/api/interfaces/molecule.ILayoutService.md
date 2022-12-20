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

[services/workbench/layoutService.ts:16](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L16)

---

### state

• `Protected` `Abstract` **state**: `ILayout`

#### Inherited from

[Component](../classes/molecule.react.Component).[state](../classes/molecule.react.Component#state)

#### Defined in

[react/component.ts:44](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L44)

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

### getMenuBarMode

▸ **getMenuBarMode**(): `"horizontal"` \| `"vertical"`

Get the mode of the MenuBar

#### Returns

`"horizontal"` \| `"vertical"`

#### Defined in

[services/workbench/layoutService.ts:71](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L71)

---

### getState

▸ **getState**(): `ILayout`

Get the Component state

#### Returns

`ILayout`

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[removeOnUpdateState](../classes/molecule.react.Component#removeonupdatestate)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[render](../classes/molecule.react.Component#render)

#### Defined in

[react/component.ts:69](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L69)

---

### reset

▸ **reset**(): `void`

Reset all layout data as default value

#### Returns

`void`

#### Defined in

[services/workbench/layoutService.ts:89](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L89)

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

#### Defined in

[services/workbench/layoutService.ts:83](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L83)

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

#### Defined in

[services/workbench/layoutService.ts:75](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L75)

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

#### Defined in

[services/workbench/layoutService.ts:61](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L61)

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

#### Defined in

[services/workbench/layoutService.ts:50](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L50)

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

[services/workbench/layoutService.ts:67](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L67)

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

#### Defined in

[services/workbench/layoutService.ts:45](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L45)

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

[services/workbench/layoutService.ts:56](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L56)

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

### toggleActivityBarVisibility

▸ **toggleActivityBarVisibility**(): `boolean`

Toggle the visibility of the activity bar, returns the status of activity bar's `hidden`

#### Returns

`boolean`

#### Defined in

[services/workbench/layoutService.ts:32](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L32)

---

### toggleMenuBarVisibility

▸ **toggleMenuBarVisibility**(): `boolean`

Toggle the visibility of menu bar, returns the status of menu bar's `hidden`

#### Returns

`boolean`

#### Defined in

[services/workbench/layoutService.ts:20](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L20)

---

### togglePanelMaximized

▸ **togglePanelMaximized**(): `boolean`

Toggle the maximized status of the panel, returns the status of maximized panel

#### Returns

`boolean`

#### Defined in

[services/workbench/layoutService.ts:40](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L40)

---

### togglePanelVisibility

▸ **togglePanelVisibility**(): `boolean`

Toggle the visibility of the panel, returns the status of panel's `hidden`

#### Returns

`boolean`

#### Defined in

[services/workbench/layoutService.ts:28](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L28)

---

### toggleSidebarVisibility

▸ **toggleSidebarVisibility**(): `boolean`

Toggle the visibility of side bar, returns the status of side bar's `hidden`

#### Returns

`boolean`

#### Defined in

[services/workbench/layoutService.ts:24](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L24)

---

### toggleStatusBarVisibility

▸ **toggleStatusBarVisibility**(): `boolean`

Toggle the visibility of the status bar, returns the status of status bar's `hidden`

#### Returns

`boolean`

#### Defined in

[services/workbench/layoutService.ts:36](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/layoutService.ts#L36)

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
