---
id: 'molecule.EditorTreeService'
title: 'Class: EditorTreeService'
sidebar_label: 'EditorTreeService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).EditorTreeService

## Hierarchy

-   [`Component`](molecule.react.Component)<[`IEditor`](../interfaces/molecule.IEditor)\>

    ↳ **`EditorTreeService`**

## Implements

-   [`IEditorTreeService`](../interfaces/molecule.IEditorTreeService)

## Constructors

### constructor

• **new EditorTreeService**()

#### Overrides

[Component](molecule.react.Component).[constructor](molecule.react.Component#constructor)

#### Defined in

[src/services/workbench/explorer/editorTreeService.ts:76](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/editorTreeService.ts#L76)

## Properties

### editorService

• `Private` `Readonly` **editorService**: [`EditorService`](molecule.EditorService)

#### Defined in

[src/services/workbench/explorer/editorTreeService.ts:74](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/editorTreeService.ts#L74)

---

### state

• `Protected` **state**: [`IEditor`](../interfaces/molecule.IEditor)

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[state](../interfaces/molecule.IEditorTreeService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[src/services/workbench/explorer/editorTreeService.ts:73](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/editorTreeService.ts#L73)

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

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[count](../interfaces/molecule.IEditorTreeService#count)

#### Inherited from

[Component](molecule.react.Component).[count](molecule.react.Component#count)

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

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[emit](../interfaces/molecule.IEditorTreeService#emit)

#### Inherited from

[Component](molecule.react.Component).[emit](molecule.react.Component#emit)

#### Defined in

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/22a59c7/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

Force to update the Component

#### Returns

`void`

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[forceUpdate](../interfaces/molecule.IEditorTreeService#forceupdate)

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:79](https://github.com/DTStack/molecule/blob/22a59c7/src/react/component.ts#L79)

---

### getState

▸ **getState**(): [`IEditor`](../interfaces/molecule.IEditor)

Get the Component state

#### Returns

[`IEditor`](../interfaces/molecule.IEditor)

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[getState](../interfaces/molecule.IEditorTreeService#getstate)

#### Inherited from

[Component](molecule.react.Component).[getState](molecule.react.Component#getstate)

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

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[onClose](../interfaces/molecule.IEditorTreeService#onclose)

#### Defined in

[src/services/workbench/explorer/editorTreeService.ts:82](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/editorTreeService.ts#L82)

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

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[onCloseAll](../interfaces/molecule.IEditorTreeService#oncloseall)

#### Defined in

[src/services/workbench/explorer/editorTreeService.ts:100](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/editorTreeService.ts#L100)

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

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[onCloseOthers](../interfaces/molecule.IEditorTreeService#oncloseothers)

#### Defined in

[src/services/workbench/explorer/editorTreeService.ts:86](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/editorTreeService.ts#L86)

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

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[onCloseSaved](../interfaces/molecule.IEditorTreeService#onclosesaved)

#### Defined in

[src/services/workbench/explorer/editorTreeService.ts:92](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/editorTreeService.ts#L92)

---

### onContextMenu

▸ **onContextMenu**(`callback`): `void`

Callback for context menu click event which isn't in buit-in menus

#### Parameters

| Name       | Type                                                                                                                                                                                           |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`menu`: [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps), `file`: [`ITabProps`](../interfaces/molecule.component.ITabProps)<`any`, `any`\>, `groupId`: `number`) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[onContextMenu](../interfaces/molecule.IEditorTreeService#oncontextmenu)

#### Defined in

[src/services/workbench/explorer/editorTreeService.ts:118](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/editorTreeService.ts#L118)

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

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[onLayout](../interfaces/molecule.IEditorTreeService#onlayout)

#### Defined in

[src/services/workbench/explorer/editorTreeService.ts:114](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/editorTreeService.ts#L114)

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

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[onSaveAll](../interfaces/molecule.IEditorTreeService#onsaveall)

#### Defined in

[src/services/workbench/explorer/editorTreeService.ts:104](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/editorTreeService.ts#L104)

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

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[onSelect](../interfaces/molecule.IEditorTreeService#onselect)

#### Defined in

[src/services/workbench/explorer/editorTreeService.ts:96](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/editorTreeService.ts#L96)

---

### onToolbarClick

▸ **onToolbarClick**(`callback`): `void`

Callback for the click event from toolbar buttons, except for saving button and closing button,
if you want to subscribe to the click events for these two buttons, please use the methods of `onSaveAll` and `onCloseAll`

#### Parameters

| Name       | Type                                                                                                                               |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`toolbar`: [`IActionBarItemProps`](../interfaces/molecule.component.IActionBarItemProps)<`any`\>, `groupId?`: `number`) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[onToolbarClick](../interfaces/molecule.IEditorTreeService#ontoolbarclick)

#### Defined in

[src/services/workbench/explorer/editorTreeService.ts:108](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/editorTreeService.ts#L108)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                           |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`IEditor`](../interfaces/molecule.IEditor), `nextState`: [`IEditor`](../interfaces/molecule.IEditor)) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[onUpdateState](../interfaces/molecule.IEditorTreeService#onupdatestate)

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:71](https://github.com/DTStack/molecule/blob/22a59c7/src/react/component.ts#L71)

---

### removeOnUpdateState

▸ **removeOnUpdateState**(): `void`

Remove the Component update event listening

#### Returns

`void`

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[removeOnUpdateState](../interfaces/molecule.IEditorTreeService#removeonupdatestate)

#### Inherited from

[Component](molecule.react.Component).[removeOnUpdateState](molecule.react.Component#removeonupdatestate)

#### Defined in

[src/react/component.ts:75](https://github.com/DTStack/molecule/blob/22a59c7/src/react/component.ts#L75)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type                                        |
| :----------- | :------------------------------------------ |
| `nextState?` | [`IEditor`](../interfaces/molecule.IEditor) |

#### Returns

`void`

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[render](../interfaces/molecule.IEditorTreeService#render)

#### Inherited from

[Component](molecule.react.Component).[render](molecule.react.Component#render)

#### Defined in

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/22a59c7/src/react/component.ts#L67)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                                           | Description                |
| :---------- | :----------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`IEditor`](../interfaces/molecule.IEditor)\>                                                                        | update target state values |
| `callback?` | (`prevState`: [`IEditor`](../interfaces/molecule.IEditor), `nextState`: [`IEditor`](../interfaces/molecule.IEditor)) => `void` | -                          |

#### Returns

`void`

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[setState](../interfaces/molecule.IEditorTreeService#setstate)

#### Inherited from

[Component](molecule.react.Component).[setState](molecule.react.Component#setstate)

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

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[subscribe](../interfaces/molecule.IEditorTreeService#subscribe)

#### Inherited from

[Component](molecule.react.Component).[subscribe](molecule.react.Component#subscribe)

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

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[unsubscribe](../interfaces/molecule.IEditorTreeService#unsubscribe)

#### Inherited from

[Component](molecule.react.Component).[unsubscribe](molecule.react.Component#unsubscribe)

#### Defined in

[src/common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/22a59c7/src/common/event/eventBus.ts#L37)
