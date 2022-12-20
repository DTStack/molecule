---
id: 'molecule.IEditorTreeService'
title: 'Interface: IEditorTreeService'
sidebar_label: 'IEditorTreeService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IEditorTreeService

## Hierarchy

-   [`Component`](../classes/molecule.react.Component)<[`IEditor`](molecule.model.IEditor)\>

    ↳ **`IEditorTreeService`**

## Implemented by

-   [`EditorTreeService`](../classes/molecule.EditorTreeService)

## Properties

### state

• `Protected` `Abstract` **state**: [`IEditor`](molecule.model.IEditor)

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

### getState

▸ **getState**(): [`IEditor`](molecule.model.IEditor)

Get the Component state

#### Returns

[`IEditor`](molecule.model.IEditor)

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

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

#### Defined in

[services/workbench/explorer/editorTreeService.ts:14](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/editorTreeService.ts#L14)

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

#### Defined in

[services/workbench/explorer/editorTreeService.ts:37](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/editorTreeService.ts#L37)

---

### onCloseOthers

▸ **onCloseOthers**(`callback`): `void`

Callback for close others tabs except this tabItem

#### Parameters

| Name       | Type                                                                                                                                                            |
| :--------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`tabItem`: [`IEditorTab`](molecule.model.IEditorTab)<[`BuiltInEditorTabDataType`](molecule.model.BuiltInEditorTabDataType)\>, `groupId`: `UniqueId`) => `void` |

#### Returns

`void`

#### Defined in

[services/workbench/explorer/editorTreeService.ts:19](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/editorTreeService.ts#L19)

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

#### Defined in

[services/workbench/explorer/editorTreeService.ts:26](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/editorTreeService.ts#L26)

---

### onContextMenu

▸ **onContextMenu**(`callback`): `void`

Callback for context menu click event which isn't in buit-in menus

#### Parameters

| Name       | Type                                                                                                                                                                 |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`menu`: [`IMenuItemProps`](molecule.component.IMenuItemProps), `file`: [`ITabProps`](molecule.component.ITabProps)<`any`, `any`\>, `groupId`: `UniqueId`) => `void` |

#### Returns

`void`

#### Defined in

[services/workbench/explorer/editorTreeService.ts:61](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/editorTreeService.ts#L61)

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

[services/workbench/explorer/editorTreeService.ts:56](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/editorTreeService.ts#L56)

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

#### Defined in

[services/workbench/explorer/editorTreeService.ts:43](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/editorTreeService.ts#L43)

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

#### Defined in

[services/workbench/explorer/editorTreeService.ts:31](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/editorTreeService.ts#L31)

---

### onToolbarClick

▸ **onToolbarClick**(`callback`): `void`

Callback for the click event from toolbar buttons, except for saving button and closing button,
if you want to subscribe to the click events for these two buttons, please use the methods of `onSaveAll` and `onCloseAll`

#### Parameters

| Name       | Type                                                                                                                   |
| :--------- | :--------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`toolbar`: [`IActionBarItemProps`](molecule.component.IActionBarItemProps)<`any`\>, `groupId?`: `UniqueId`) => `void` |

#### Returns

`void`

#### Defined in

[services/workbench/explorer/editorTreeService.ts:49](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/editorTreeService.ts#L49)

---

### onUpdateState

▸ **onUpdateState**(`listener`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                           |
| :--------- | :------------------------------------------------------------------------------------------------------------- |
| `listener` | (`prevState`: [`IEditor`](molecule.model.IEditor), `nextState`: [`IEditor`](molecule.model.IEditor)) => `void` |

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

| Name         | Type                                |
| :----------- | :---------------------------------- |
| `nextState?` | [`IEditor`](molecule.model.IEditor) |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[render](../classes/molecule.react.Component#render)

#### Defined in

[react/component.ts:69](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L69)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                           | Description                |
| :---------- | :------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`IEditor`](molecule.model.IEditor)\>                                                                | update target state values |
| `callback?` | (`prevState`: [`IEditor`](molecule.model.IEditor), `nextState`: [`IEditor`](molecule.model.IEditor)) => `void` | -                          |

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
