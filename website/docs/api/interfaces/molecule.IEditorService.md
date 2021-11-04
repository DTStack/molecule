---
id: 'molecule.IEditorService'
title: 'Interface: IEditorService'
sidebar_label: 'IEditorService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IEditorService

## Hierarchy

-   [`Component`](../classes/molecule.react.Component)<[`IEditor`](molecule.IEditor)\>

    ↳ **`IEditorService`**

## Implemented by

-   [`EditorService`](../classes/molecule.EditorService)

## Properties

### editorInstance

• `Readonly` **editorInstance**: `IStandaloneCodeEditor`

The instance of MonacoEditor

#### Defined in

[src/services/workbench/editorService.ts:191](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L191)

---

### state

• `Protected` `Abstract` **state**: [`IEditor`](molecule.IEditor)

#### Inherited from

[Component](../classes/molecule.react.Component).[state](../classes/molecule.react.Component#state)

#### Defined in

[src/react/component.ts:42](https://github.com/DTStack/molecule/blob/b675cb9/src/react/component.ts#L42)

## Methods

### cloneGroup

▸ **cloneGroup**(`groupId?`): [`IEditorGroup`](molecule.IEditorGroup)<`any`, `any`\>

Clone a specific group, if the argument `groupId` is undefined,
there default clone the current group

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `groupId?` | `number` |

#### Returns

[`IEditorGroup`](molecule.IEditorGroup)<`any`, `any`\>

#### Defined in

[src/services/workbench/editorService.ts:87](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L87)

---

### closeAll

▸ **closeAll**(`groupId`): `void`

Close the specific group all opened tabs

#### Parameters

| Name      | Type     | Description             |
| :-------- | :------- | :---------------------- |
| `groupId` | `number` | The groupId is required |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:76](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L76)

---

### closeOther

▸ **closeOther**(`tab`, `groupId`): `void`

Close other opened tabs in Editor Group

#### Parameters

| Name      | Type                                      | Description             |
| :-------- | :---------------------------------------- | :---------------------- |
| `tab`     | `IEditorTab`<`BuiltInEditorTabDataType`\> | The id is required      |
| `groupId` | `number`                                  | The groupId is required |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:59](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L59)

---

### closeTab

▸ **closeTab**(`tabId`, `groupId`): `void`

Close the specific Tab opened in Editor Group view

#### Parameters

| Name      | Type     | Description             |
| :-------- | :------- | :---------------------- |
| `tabId`   | `string` | The tabId is required   |
| `groupId` | `number` | The groupId is required |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:53](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L53)

---

### closeToLeft

▸ **closeToLeft**(`tab`, `groupId`): `void`

Close the left opened Tabs in Editor Group

#### Parameters

| Name      | Type                                      | Description                                          |
| :-------- | :---------------------------------------- | :--------------------------------------------------- |
| `tab`     | `IEditorTab`<`BuiltInEditorTabDataType`\> | The id is required, the start point of close to left |
| `groupId` | `number`                                  | The groupId is required                              |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:71](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L71)

---

### closeToRight

▸ **closeToRight**(`tab`, `groupId`): `void`

Close the right opened tabs in Editor Group

#### Parameters

| Name      | Type                                      | Description                                           |
| :-------- | :---------------------------------------- | :---------------------------------------------------- |
| `tab`     | `IEditorTab`<`BuiltInEditorTabDataType`\> | The id is required, the start point of close to right |
| `groupId` | `number`                                  | The groupId is required                               |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:65](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L65)

---

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

[src/common/event/eventBus.ts:28](https://github.com/DTStack/molecule/blob/b675cb9/src/common/event/eventBus.ts#L28)

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

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/b675cb9/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

Force to update the Component

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[forceUpdate](../classes/molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:79](https://github.com/DTStack/molecule/blob/b675cb9/src/react/component.ts#L79)

---

### getDefaultActions

▸ **getDefaultActions**(): `IEditorActionsProps`[]

Get the default group actions

#### Returns

`IEditorActionsProps`[]

#### Defined in

[src/services/workbench/editorService.ts:178](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L178)

---

### getDefaultMenus

▸ **getDefaultMenus**(): [`IMenuItemProps`](molecule.component.IMenuItemProps)[]

Get the default group menus

#### Returns

[`IMenuItemProps`](molecule.component.IMenuItemProps)[]

#### Defined in

[src/services/workbench/editorService.ts:182](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L182)

---

### getGroupById

▸ **getGroupById**(`groupId`): `undefined` \| [`IEditorGroup`](molecule.IEditorGroup)<`any`, `any`\>

Get the specific group

#### Parameters

| Name      | Type     | Description             |
| :-------- | :------- | :---------------------- |
| `groupId` | `number` | The groupId is required |

#### Returns

`undefined` \| [`IEditorGroup`](molecule.IEditorGroup)<`any`, `any`\>

#### Defined in

[src/services/workbench/editorService.ts:81](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L81)

---

### getGroupIdByTab

▸ **getGroupIdByTab**(`tabId`): `null` \| `number`

Get the group's id which contains the tab

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `tabId` | `string` |

#### Returns

`null` \| `number`

#### Defined in

[src/services/workbench/editorService.ts:196](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L196)

---

### getState

▸ **getState**(): [`IEditor`](molecule.IEditor)

Get the Component state

#### Returns

[`IEditor`](molecule.IEditor)

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/b675cb9/src/react/component.ts#L83)

---

### getTabById

▸ **getTabById**<`T`\>(`tabId`, `groupId`): `undefined` \| `IEditorTab`<`T`\>

Get a tab from a specific group via the tab ID

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `tabId`   | `string` |
| `groupId` | `number` |

#### Returns

`undefined` \| `IEditorTab`<`T`\>

#### Defined in

[src/services/workbench/editorService.ts:32](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L32)

---

### isOpened

▸ **isOpened**(`tabId`): `boolean`

Judge the specific tabs whether opened in Editor view

#### Parameters

| Name    | Type     | Description           |
| :------ | :------- | :-------------------- |
| `tabId` | `string` | The tabId is required |

#### Returns

`boolean`

#### Defined in

[src/services/workbench/editorService.ts:47](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L47)

---

### onActionsClick

▸ **onActionsClick**(`callback`): `void`

Listen to the Group Actions click event

#### Parameters

| Name       | Type                                                                                                   |
| :--------- | :----------------------------------------------------------------------------------------------------- |
| `callback` | (`menuId`: `string`, `currentGroup`: [`IEditorGroup`](molecule.IEditorGroup)<`any`, `any`\>) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:139](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L139)

---

### onCloseAll

▸ **onCloseAll**(`callback`): `any`

Listen to the all tabs close event

#### Parameters

| Name       | Type                             |
| :--------- | :------------------------------- |
| `callback` | (`groupId?`: `number`) => `void` |

#### Returns

`any`

#### Defined in

[src/services/workbench/editorService.ts:114](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L114)

---

### onCloseOther

▸ **onCloseOther**(`callback`): `any`

Listen to the other tabs close event

#### Parameters

| Name       | Type                                                                                   |
| :--------- | :------------------------------------------------------------------------------------- |
| `callback` | (`tabItem`: `IEditorTab`<`BuiltInEditorTabDataType`\>, `groupId?`: `number`) => `void` |

#### Returns

`any`

#### Defined in

[src/services/workbench/editorService.ts:124](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L124)

---

### onCloseTab

▸ **onCloseTab**(`callback`): `any`

Listen to the tab close event

#### Parameters

| Name       | Type                                                |
| :--------- | :-------------------------------------------------- |
| `callback` | (`tabId`: `string`, `groupId?`: `number`) => `void` |

#### Returns

`any`

#### Defined in

[src/services/workbench/editorService.ts:119](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L119)

---

### onCloseToLeft

▸ **onCloseToLeft**(`callback`): `any`

Listen to the left tabs close event

#### Parameters

| Name       | Type                                                                                   |
| :--------- | :------------------------------------------------------------------------------------- |
| `callback` | (`tabItem`: `IEditorTab`<`BuiltInEditorTabDataType`\>, `groupId?`: `number`) => `void` |

#### Returns

`any`

#### Defined in

[src/services/workbench/editorService.ts:129](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L129)

---

### onCloseToRight

▸ **onCloseToRight**(`callback`): `any`

Listen to the right tabs close event

#### Parameters

| Name       | Type                                                                                   |
| :--------- | :------------------------------------------------------------------------------------- |
| `callback` | (`tabItem`: `IEditorTab`<`BuiltInEditorTabDataType`\>, `groupId?`: `number`) => `void` |

#### Returns

`any`

#### Defined in

[src/services/workbench/editorService.ts:134](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L134)

---

### onMoveTab

▸ **onMoveTab**(`callback`): `any`

Listen to the tab move event

#### Parameters

| Name       | Type                                                                   |
| :--------- | :--------------------------------------------------------------------- |
| `callback` | (`updateTabs`: `IEditorTab`<`any`\>[], `groupId?`: `number`) => `void` |

#### Returns

`any`

#### Defined in

[src/services/workbench/editorService.ts:102](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L102)

---

### onOpenTab

▸ **onOpenTab**(`callback`): `void`

Listen to the tab opening event

#### Parameters

| Name       | Type                                                         |
| :--------- | :----------------------------------------------------------- |
| `callback` | (`tab`: `IEditorTab`<`BuiltInEditorTabDataType`\>) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:97](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L97)

---

### onSelectTab

▸ **onSelectTab**(`callback`): `any`

Listen to the tab select event

#### Parameters

| Name       | Type                                                |
| :--------- | :-------------------------------------------------- |
| `callback` | (`tabId`: `string`, `groupId?`: `number`) => `void` |

#### Returns

`any`

#### Defined in

[src/services/workbench/editorService.ts:109](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L109)

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

[src/react/component.ts:71](https://github.com/DTStack/molecule/blob/b675cb9/src/react/component.ts#L71)

---

### onUpdateTab

▸ **onUpdateTab**(`callback`): `void`

Listen to the Editor tab changed event

#### Parameters

| Name       | Type                                                         |
| :--------- | :----------------------------------------------------------- |
| `callback` | (`tab`: `IEditorTab`<`BuiltInEditorTabDataType`\>) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:92](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L92)

---

### open

▸ **open**<`T`\>(`tab`, `groupId?`): `void`

Open a new tab in a specific group

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

#### Parameters

| Name       | Type               | Description |
| :--------- | :----------------- | :---------- |
| `tab`      | `IEditorTab`<`T`\> | Tab data    |
| `groupId?` | `number`           | Group ID    |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:26](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L26)

---

### removeOnUpdateState

▸ **removeOnUpdateState**(): `void`

Remove the Component update event listening

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[removeOnUpdateState](../classes/molecule.react.Component#removeonupdatestate)

#### Defined in

[src/react/component.ts:75](https://github.com/DTStack/molecule/blob/b675cb9/src/react/component.ts#L75)

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

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/b675cb9/src/react/component.ts#L67)

---

### setActive

▸ **setActive**(`groupId`, `tabId`): `any`

Set active group and tab

#### Parameters

| Name      | Type     | Description     |
| :-------- | :------- | :-------------- |
| `groupId` | `number` | Target group ID |
| `tabId`   | `string` | Target tab ID   |

#### Returns

`any`

#### Defined in

[src/services/workbench/editorService.ts:147](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L147)

---

### setDefaultActions

▸ **setDefaultActions**(`actions`): `void`

Set default actions when create a new group

#### Parameters

| Name      | Type                    |
| :-------- | :---------------------- |
| `actions` | `IEditorActionsProps`[] |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:158](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L158)

---

### setDefaultMenus

▸ **setDefaultMenus**(`menus`): `void`

Set default menus when create a new group

#### Parameters

| Name    | Type                                                    |
| :------ | :------------------------------------------------------ |
| `menus` | [`IMenuItemProps`](molecule.component.IMenuItemProps)[] |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:163](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L163)

---

### setEntry

▸ **setEntry**(`component`): `void`

Specify the Entry page of Workbench

#### Parameters

| Name        | Type        |
| :---------- | :---------- |
| `component` | `ReactNode` |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:42](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L42)

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

[src/react/component.ts:54](https://github.com/DTStack/molecule/blob/b675cb9/src/react/component.ts#L54)

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

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/b675cb9/src/common/event/eventBus.ts#L11)

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

[src/common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/b675cb9/src/common/event/eventBus.ts#L37)

---

### updateActions

▸ **updateActions**(`actions`, `groupId?`): `void`

Update actions in specific group

#### Parameters

| Name       | Type                                                    |
| :--------- | :------------------------------------------------------ |
| `actions`  | [`IMenuItemProps`](molecule.component.IMenuItemProps)[] |
| `groupId?` | `number`                                                |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:169](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L169)

---

### updateCurrentGroup

▸ **updateCurrentGroup**(`currentValues`): `void`

Update the current group

#### Parameters

| Name            | Type  |
| :-------------- | :---- |
| `currentValues` | `any` |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:174](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L174)

---

### updateEditorOptions

▸ **updateEditorOptions**(`options`): `void`

Update the editor options

#### Parameters

| Name      | Type             |
| :-------- | :--------------- |
| `options` | `IEditorOptions` |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:187](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L187)

---

### updateGroup

▸ **updateGroup**(`groupId`, `groupValues`): `void`

Update the specific group

#### Parameters

| Name          | Type                                                   |
| :------------ | :----------------------------------------------------- |
| `groupId`     | `any`                                                  |
| `groupValues` | [`IEditorGroup`](molecule.IEditorGroup)<`any`, `any`\> |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:153](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L153)

---

### updateTab

▸ **updateTab**(`tab`, `groupId?`): `IEditorTab`<`BuiltInEditorTabDataType`\>

Update the specific tab, if the groupId provide, then update the tab of specific group

#### Parameters

| Name       | Type                                      | Description        |
| :--------- | :---------------------------------------- | :----------------- |
| `tab`      | `IEditorTab`<`BuiltInEditorTabDataType`\> | The id is required |
| `groupId?` | `number`                                  |                    |

#### Returns

`IEditorTab`<`BuiltInEditorTabDataType`\>

#### Defined in

[src/services/workbench/editorService.ts:38](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L38)
