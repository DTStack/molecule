---
id: 'molecule.EditorTreeService'
title: 'Class: EditorTreeService'
sidebar_label: 'EditorTreeService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).EditorTreeService

## Hierarchy

-   [`Component`](molecule.react.Component)<[`IEditor`](../interfaces/molecule.model.IEditor)\>

    ↳ **`EditorTreeService`**

## Implements

-   [`IEditorTreeService`](../interfaces/molecule.IEditorTreeService)

## Constructors

### constructor

• **new EditorTreeService**()

#### Overrides

[Component](molecule.react.Component).[constructor](molecule.react.Component#constructor)

#### Defined in

[services/workbench/explorer/editorTreeService.ts:78](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/editorTreeService.ts#L78)

## Properties

### editorService

• `Private` `Readonly` **editorService**: [`EditorService`](molecule.EditorService)

#### Defined in

[services/workbench/explorer/editorTreeService.ts:76](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/editorTreeService.ts#L76)

---

### state

• `Protected` **state**: [`IEditor`](../interfaces/molecule.model.IEditor)

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[state](../interfaces/molecule.IEditorTreeService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[services/workbench/explorer/editorTreeService.ts:75](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/editorTreeService.ts#L75)

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

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[emit](../interfaces/molecule.IEditorTreeService#emit)

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

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[forceUpdate](../interfaces/molecule.IEditorTreeService#forceupdate)

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

#### Defined in

[react/component.ts:81](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L81)

---

### getState

▸ **getState**(): [`IEditor`](../interfaces/molecule.model.IEditor)

Get the Component state

#### Returns

[`IEditor`](../interfaces/molecule.model.IEditor)

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[getState](../interfaces/molecule.IEditorTreeService#getstate)

#### Inherited from

[Component](molecule.react.Component).[getState](molecule.react.Component#getstate)

#### Defined in

[react/component.ts:85](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L85)

---

### onClose

▸ **onClose**(`callback`): `void`

Callabck for close a certain tab

#### Parameters

| Name       | Type                                                   |
| :--------- | :----------------------------------------------------- |
| `callback` | (`tabId`: `UniqueId`, `groupId`: `UniqueId`) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[onClose](../interfaces/molecule.IEditorTreeService#onclose)

#### Defined in

[services/workbench/explorer/editorTreeService.ts:84](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/editorTreeService.ts#L84)

---

### onCloseAll

▸ **onCloseAll**(`callback`): `void`

Callback for close all tabs
When specify groupId, it'll close that group

#### Parameters

| Name       | Type                               |
| :--------- | :--------------------------------- |
| `callback` | (`groupId?`: `UniqueId`) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[onCloseAll](../interfaces/molecule.IEditorTreeService#oncloseall)

#### Defined in

[services/workbench/explorer/editorTreeService.ts:102](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/editorTreeService.ts#L102)

---

### onCloseOthers

▸ **onCloseOthers**(`callback`): `void`

Callback for close others tabs except this tabItem

#### Parameters

| Name       | Type                                                                                                                                                                                        |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `callback` | (`tabItem`: [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<[`BuiltInEditorTabDataType`](../interfaces/molecule.model.BuiltInEditorTabDataType)\>, `groupId`: `UniqueId`) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[onCloseOthers](../interfaces/molecule.IEditorTreeService#oncloseothers)

#### Defined in

[services/workbench/explorer/editorTreeService.ts:88](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/editorTreeService.ts#L88)

---

### onCloseSaved

▸ **onCloseSaved**(`callback`): `void`

Callback for close saved tabs in this group

#### Parameters

| Name       | Type                              |
| :--------- | :-------------------------------- |
| `callback` | (`groupId`: `UniqueId`) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[onCloseSaved](../interfaces/molecule.IEditorTreeService#onclosesaved)

#### Defined in

[services/workbench/explorer/editorTreeService.ts:94](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/editorTreeService.ts#L94)

---

### onContextMenu

▸ **onContextMenu**(`callback`): `void`

Callback for context menu click event which isn't in buit-in menus

#### Parameters

| Name       | Type                                                                                                                                                                                             |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`menu`: [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps), `file`: [`ITabProps`](../interfaces/molecule.component.ITabProps)<`any`, `any`\>, `groupId`: `UniqueId`) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[onContextMenu](../interfaces/molecule.IEditorTreeService#oncontextmenu)

#### Defined in

[services/workbench/explorer/editorTreeService.ts:120](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/editorTreeService.ts#L120)

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

[services/workbench/explorer/editorTreeService.ts:116](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/editorTreeService.ts#L116)

---

### onSaveAll

▸ **onSaveAll**(`callback`): `void`

Callback for save all tabs
When specify groupId, it'll save that group

#### Parameters

| Name       | Type                               |
| :--------- | :--------------------------------- |
| `callback` | (`groupId?`: `UniqueId`) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[onSaveAll](../interfaces/molecule.IEditorTreeService#onsaveall)

#### Defined in

[services/workbench/explorer/editorTreeService.ts:106](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/editorTreeService.ts#L106)

---

### onSelect

▸ **onSelect**(`callback`): `void`

Callback for select tab in this group

#### Parameters

| Name       | Type                                                   |
| :--------- | :----------------------------------------------------- |
| `callback` | (`tabId`: `UniqueId`, `groupId`: `UniqueId`) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[onSelect](../interfaces/molecule.IEditorTreeService#onselect)

#### Defined in

[services/workbench/explorer/editorTreeService.ts:98](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/editorTreeService.ts#L98)

---

### onToolbarClick

▸ **onToolbarClick**(`callback`): `void`

Callback for the click event from toolbar buttons, except for saving button and closing button,
if you want to subscribe to the click events for these two buttons, please use the methods of `onSaveAll` and `onCloseAll`

#### Parameters

| Name       | Type                                                                                                                                 |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`toolbar`: [`IActionBarItemProps`](../interfaces/molecule.component.IActionBarItemProps)<`any`\>, `groupId?`: `UniqueId`) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[onToolbarClick](../interfaces/molecule.IEditorTreeService#ontoolbarclick)

#### Defined in

[services/workbench/explorer/editorTreeService.ts:110](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/editorTreeService.ts#L110)

---

### onUpdateState

▸ **onUpdateState**(`listener`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                                       |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| `listener` | (`prevState`: [`IEditor`](../interfaces/molecule.model.IEditor), `nextState`: [`IEditor`](../interfaces/molecule.model.IEditor)) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[onUpdateState](../interfaces/molecule.IEditorTreeService#onupdatestate)

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

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[removeOnUpdateState](../interfaces/molecule.IEditorTreeService#removeonupdatestate)

#### Inherited from

[Component](molecule.react.Component).[removeOnUpdateState](molecule.react.Component#removeonupdatestate)

#### Defined in

[react/component.ts:77](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L77)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type                                              |
| :----------- | :------------------------------------------------ |
| `nextState?` | [`IEditor`](../interfaces/molecule.model.IEditor) |

#### Returns

`void`

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[render](../interfaces/molecule.IEditorTreeService#render)

#### Inherited from

[Component](molecule.react.Component).[render](molecule.react.Component#render)

#### Defined in

[react/component.ts:69](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L69)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                                                       | Description                |
| :---------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`IEditor`](../interfaces/molecule.model.IEditor)\>                                                                              | update target state values |
| `callback?` | (`prevState`: [`IEditor`](../interfaces/molecule.model.IEditor), `nextState`: [`IEditor`](../interfaces/molecule.model.IEditor)) => `void` | -                          |

#### Returns

`void`

#### Implementation of

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[setState](../interfaces/molecule.IEditorTreeService#setstate)

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

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[subscribe](../interfaces/molecule.IEditorTreeService#subscribe)

#### Inherited from

[Component](molecule.react.Component).[subscribe](molecule.react.Component#subscribe)

#### Defined in

[common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L11)

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

[IEditorTreeService](../interfaces/molecule.IEditorTreeService).[unsubscribe](../interfaces/molecule.IEditorTreeService#unsubscribe)

#### Inherited from

[Component](molecule.react.Component).[unsubscribe](molecule.react.Component#unsubscribe)

#### Defined in

[common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L37)
