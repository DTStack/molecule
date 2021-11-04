---
id: 'molecule.IEditorTreeService'
title: 'Interface: IEditorTreeService'
sidebar_label: 'IEditorTreeService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IEditorTreeService

## Hierarchy

-   [`Component`](../classes/molecule.react.Component)<[`IEditor`](molecule.IEditor)\>

    ↳ **`IEditorTreeService`**

## Implemented by

-   [`EditorTreeService`](../classes/molecule.EditorTreeService)

## Properties

### state

• `Protected` `Abstract` **state**: [`IEditor`](molecule.IEditor)

#### Inherited from

[Component](../classes/molecule.react.Component).[state](../classes/molecule.react.Component#state)

#### Defined in

[src/react/component.ts:42](https://github.com/DTStack/molecule/blob/22a59c7/src/react/component.ts#L42)

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

[src/common/event/eventBus.ts:28](https://github.com/DTStack/molecule/blob/22a59c7/src/common/event/eventBus.ts#L28)

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

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/22a59c7/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

Force to update the Component

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[forceUpdate](../classes/molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:79](https://github.com/DTStack/molecule/blob/22a59c7/src/react/component.ts#L79)

---

### getState

▸ **getState**(): [`IEditor`](molecule.IEditor)

Get the Component state

#### Returns

[`IEditor`](molecule.IEditor)

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/22a59c7/src/react/component.ts#L83)

---

### onClose

▸ **onClose**(`callback`): `void`

Callabck for close a certain tab

#### Parameters

| Name       | Type                                               |
| :--------- | :------------------------------------------------- |
| `callback` | (`tabId`: `string`, `groupId`: `number`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/editorTreeService.ts:13](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/editorTreeService.ts#L13)

---

### onCloseAll

▸ **onCloseAll**(`callback`): `void`

Callback for close all tabs
When specify groupId, it'll close that group

#### Parameters

| Name       | Type                             |
| :--------- | :------------------------------- |
| `callback` | (`groupId?`: `number`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/editorTreeService.ts:36](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/editorTreeService.ts#L36)

---

### onCloseOthers

▸ **onCloseOthers**(`callback`): `void`

Callback for close others tabs except this tabItem

#### Parameters

| Name       | Type                                                                                  |
| :--------- | :------------------------------------------------------------------------------------ |
| `callback` | (`tabItem`: `IEditorTab`<`BuiltInEditorTabDataType`\>, `groupId`: `number`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/editorTreeService.ts:18](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/editorTreeService.ts#L18)

---

### onCloseSaved

▸ **onCloseSaved**(`callback`): `void`

Callback for close saved tabs in this group

#### Parameters

| Name       | Type                            |
| :--------- | :------------------------------ |
| `callback` | (`groupId`: `number`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/editorTreeService.ts:25](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/editorTreeService.ts#L25)

---

### onContextMenu

▸ **onContextMenu**(`callback`): `void`

Callback for context menu click event which isn't in buit-in menus

#### Parameters

| Name       | Type                                                                                                                                                               |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`menu`: [`IMenuItemProps`](molecule.component.IMenuItemProps), `file`: [`ITabProps`](molecule.component.ITabProps)<`any`, `any`\>, `groupId`: `number`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/editorTreeService.ts:60](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/editorTreeService.ts#L60)

---

### onLayout

▸ **onLayout**(`callback`): `void`

Callback for adjust editor layout

#### Parameters

| Name       | Type         |
| :--------- | :----------- |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/editorTreeService.ts:55](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/editorTreeService.ts#L55)

---

### onSaveAll

▸ **onSaveAll**(`callback`): `void`

Callback for save all tabs
When specify groupId, it'll save that group

#### Parameters

| Name       | Type                             |
| :--------- | :------------------------------- |
| `callback` | (`groupId?`: `number`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/editorTreeService.ts:42](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/editorTreeService.ts#L42)

---

### onSelect

▸ **onSelect**(`callback`): `void`

Callback for select tab in this group

#### Parameters

| Name       | Type                                               |
| :--------- | :------------------------------------------------- |
| `callback` | (`tabId`: `string`, `groupId`: `number`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/editorTreeService.ts:30](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/editorTreeService.ts#L30)

---

### onToolbarClick

▸ **onToolbarClick**(`callback`): `void`

Callback for the click event from toolbar buttons, except for saving button and closing button,
if you want to subscribe to the click events for these two buttons, please use the methods of `onSaveAll` and `onCloseAll`

#### Parameters

| Name       | Type                                                                                                                 |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`toolbar`: [`IActionBarItemProps`](molecule.component.IActionBarItemProps)<`any`\>, `groupId?`: `number`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/editorTreeService.ts:48](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/editorTreeService.ts#L48)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                               |
| :--------- | :------------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`IEditor`](molecule.IEditor), `nextState`: [`IEditor`](molecule.IEditor)) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:71](https://github.com/DTStack/molecule/blob/22a59c7/src/react/component.ts#L71)

---

### removeOnUpdateState

▸ **removeOnUpdateState**(): `void`

Remove the Component update event listening

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[removeOnUpdateState](../classes/molecule.react.Component#removeonupdatestate)

#### Defined in

[src/react/component.ts:75](https://github.com/DTStack/molecule/blob/22a59c7/src/react/component.ts#L75)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type                          |
| :----------- | :---------------------------- |
| `nextState?` | [`IEditor`](molecule.IEditor) |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[render](../classes/molecule.react.Component#render)

#### Defined in

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/22a59c7/src/react/component.ts#L67)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                               | Description                |
| :---------- | :------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`IEditor`](molecule.IEditor)\>                                                          | update target state values |
| `callback?` | (`prevState`: [`IEditor`](molecule.IEditor), `nextState`: [`IEditor`](molecule.IEditor)) => `void` | -                          |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[setState](../classes/molecule.react.Component#setstate)

#### Defined in

[src/react/component.ts:54](https://github.com/DTStack/molecule/blob/22a59c7/src/react/component.ts#L54)

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

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/22a59c7/src/common/event/eventBus.ts#L11)

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

[src/common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/22a59c7/src/common/event/eventBus.ts#L37)
