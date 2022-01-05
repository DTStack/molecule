---
id: 'molecule.IEditorService'
title: 'Interface: IEditorService'
sidebar_label: 'IEditorService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IEditorService

## Hierarchy

-   [`Component`](../classes/molecule.react.Component)<[`IEditor`](molecule.model.IEditor)\>

    ↳ **`IEditorService`**

## Implemented by

-   [`EditorService`](../classes/molecule.EditorService)

## Properties

### editorInstance

• `Readonly` **editorInstance**: `IStandaloneCodeEditor`

The instance of MonacoEditor

#### Defined in

[src/services/workbench/editorService.ts:195](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L195)

---

### state

• `Protected` `Abstract` **state**: [`IEditor`](molecule.model.IEditor)

#### Inherited from

[Component](../classes/molecule.react.Component).[state](../classes/molecule.react.Component#state)

#### Defined in

[src/react/component.ts:42](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L42)

## Methods

### cloneGroup

▸ **cloneGroup**(`groupId?`): [`IEditorGroup`](molecule.model.IEditorGroup)<`any`, `any`\>

Clone a specific group, if the argument `groupId` is undefined,
there default clone the current group

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `groupId?` | `UniqueId` |

#### Returns

[`IEditorGroup`](molecule.model.IEditorGroup)<`any`, `any`\>

#### Defined in

[src/services/workbench/editorService.ts:91](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L91)

---

### closeAll

▸ **closeAll**(`groupId`): `void`

Close the specific group all opened tabs

#### Parameters

| Name      | Type       | Description             |
| :-------- | :--------- | :---------------------- |
| `groupId` | `UniqueId` | The groupId is required |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:80](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L80)

---

### closeOther

▸ **closeOther**(`tab`, `groupId`): `void`

Close other opened tabs in Editor Group

#### Parameters

| Name      | Type                                                                   | Description             |
| :-------- | :--------------------------------------------------------------------- | :---------------------- |
| `tab`     | [`IEditorTab`](molecule.model.IEditorTab)<`BuiltInEditorTabDataType`\> | The id is required      |
| `groupId` | `UniqueId`                                                             | The groupId is required |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:63](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L63)

---

### closeTab

▸ **closeTab**(`tabId`, `groupId`): `void`

Close the specific Tab opened in Editor Group view

#### Parameters

| Name      | Type       | Description             |
| :-------- | :--------- | :---------------------- |
| `tabId`   | `UniqueId` | The tabId is required   |
| `groupId` | `UniqueId` | The groupId is required |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:57](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L57)

---

### closeToLeft

▸ **closeToLeft**(`tab`, `groupId`): `void`

Close the left opened Tabs in Editor Group

#### Parameters

| Name      | Type                                                                   | Description                                          |
| :-------- | :--------------------------------------------------------------------- | :--------------------------------------------------- |
| `tab`     | [`IEditorTab`](molecule.model.IEditorTab)<`BuiltInEditorTabDataType`\> | The id is required, the start point of close to left |
| `groupId` | `UniqueId`                                                             | The groupId is required                              |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:75](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L75)

---

### closeToRight

▸ **closeToRight**(`tab`, `groupId`): `void`

Close the right opened tabs in Editor Group

#### Parameters

| Name      | Type                                                                   | Description                                           |
| :-------- | :--------------------------------------------------------------------- | :---------------------------------------------------- |
| `tab`     | [`IEditorTab`](molecule.model.IEditorTab)<`BuiltInEditorTabDataType`\> | The id is required, the start point of close to right |
| `groupId` | `UniqueId`                                                             | The groupId is required                               |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:69](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L69)

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

### getDefaultActions

▸ **getDefaultActions**(): [`IEditorActionsProps`](molecule.model.IEditorActionsProps)[]

Get the default group actions

#### Returns

[`IEditorActionsProps`](molecule.model.IEditorActionsProps)[]

#### Defined in

[src/services/workbench/editorService.ts:182](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L182)

---

### getDefaultMenus

▸ **getDefaultMenus**(): [`IMenuItemProps`](molecule.component.IMenuItemProps)[]

Get the default group menus

#### Returns

[`IMenuItemProps`](molecule.component.IMenuItemProps)[]

#### Defined in

[src/services/workbench/editorService.ts:186](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L186)

---

### getGroupById

▸ **getGroupById**(`groupId`): `undefined` \| [`IEditorGroup`](molecule.model.IEditorGroup)<`any`, `any`\>

Get the specific group

#### Parameters

| Name      | Type       | Description             |
| :-------- | :--------- | :---------------------- |
| `groupId` | `UniqueId` | The groupId is required |

#### Returns

`undefined` \| [`IEditorGroup`](molecule.model.IEditorGroup)<`any`, `any`\>

#### Defined in

[src/services/workbench/editorService.ts:85](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L85)

---

### getGroupIdByTab

▸ **getGroupIdByTab**(`tabId`): `null` \| `UniqueId`

Get the group's id which contains the tab

#### Parameters

| Name    | Type       |
| :------ | :--------- |
| `tabId` | `UniqueId` |

#### Returns

`null` \| `UniqueId`

#### Defined in

[src/services/workbench/editorService.ts:200](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L200)

---

### getState

▸ **getState**(): [`IEditor`](molecule.model.IEditor)

Get the Component state

#### Returns

[`IEditor`](molecule.model.IEditor)

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L83)

---

### getTabById

▸ **getTabById**<`T`\>(`tabId`, `groupId`): `undefined` \| [`IEditorTab`](molecule.model.IEditorTab)<`T`\>

Get a tab from a specific group via the tab ID

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name      | Type       |
| :-------- | :--------- |
| `tabId`   | `UniqueId` |
| `groupId` | `UniqueId` |

#### Returns

`undefined` \| [`IEditorTab`](molecule.model.IEditorTab)<`T`\>

#### Defined in

[src/services/workbench/editorService.ts:33](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L33)

---

### isOpened

▸ **isOpened**(`tabId`): `boolean`

Judge the specific tabs whether opened in Editor view

#### Parameters

| Name    | Type       | Description           |
| :------ | :--------- | :-------------------- |
| `tabId` | `UniqueId` | The tabId is required |

#### Returns

`boolean`

#### Defined in

[src/services/workbench/editorService.ts:51](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L51)

---

### onActionsClick

▸ **onActionsClick**(`callback`): `void`

Listen to the Group Actions click event

#### Parameters

| Name       | Type                                                                                                           |
| :--------- | :------------------------------------------------------------------------------------------------------------- |
| `callback` | (`menuId`: `UniqueId`, `currentGroup`: [`IEditorGroup`](molecule.model.IEditorGroup)<`any`, `any`\>) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:143](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L143)

---

### onCloseAll

▸ **onCloseAll**(`callback`): `any`

Listen to the all tabs close event

#### Parameters

| Name       | Type                               |
| :--------- | :--------------------------------- |
| `callback` | (`groupId?`: `UniqueId`) => `void` |

#### Returns

`any`

#### Defined in

[src/services/workbench/editorService.ts:118](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L118)

---

### onCloseOther

▸ **onCloseOther**(`callback`): `any`

Listen to the other tabs close event

#### Parameters

| Name       | Type                                                                                                                  |
| :--------- | :-------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`tabItem`: [`IEditorTab`](molecule.model.IEditorTab)<`BuiltInEditorTabDataType`\>, `groupId?`: `UniqueId`) => `void` |

#### Returns

`any`

#### Defined in

[src/services/workbench/editorService.ts:128](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L128)

---

### onCloseTab

▸ **onCloseTab**(`callback`): `any`

Listen to the tab close event

#### Parameters

| Name       | Type                                                    |
| :--------- | :------------------------------------------------------ |
| `callback` | (`tabId`: `UniqueId`, `groupId?`: `UniqueId`) => `void` |

#### Returns

`any`

#### Defined in

[src/services/workbench/editorService.ts:123](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L123)

---

### onCloseToLeft

▸ **onCloseToLeft**(`callback`): `any`

Listen to the left tabs close event

#### Parameters

| Name       | Type                                                                                                                  |
| :--------- | :-------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`tabItem`: [`IEditorTab`](molecule.model.IEditorTab)<`BuiltInEditorTabDataType`\>, `groupId?`: `UniqueId`) => `void` |

#### Returns

`any`

#### Defined in

[src/services/workbench/editorService.ts:133](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L133)

---

### onCloseToRight

▸ **onCloseToRight**(`callback`): `any`

Listen to the right tabs close event

#### Parameters

| Name       | Type                                                                                                                  |
| :--------- | :-------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`tabItem`: [`IEditorTab`](molecule.model.IEditorTab)<`BuiltInEditorTabDataType`\>, `groupId?`: `UniqueId`) => `void` |

#### Returns

`any`

#### Defined in

[src/services/workbench/editorService.ts:138](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L138)

---

### onMoveTab

▸ **onMoveTab**(`callback`): `any`

Listen to the tab move event

#### Parameters

| Name       | Type                                                                                                  |
| :--------- | :---------------------------------------------------------------------------------------------------- |
| `callback` | (`updateTabs`: [`IEditorTab`](molecule.model.IEditorTab)<`any`\>[], `groupId?`: `UniqueId`) => `void` |

#### Returns

`any`

#### Defined in

[src/services/workbench/editorService.ts:106](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L106)

---

### onOpenTab

▸ **onOpenTab**(`callback`): `void`

Listen to the tab opening event

#### Parameters

| Name       | Type                                                                                      |
| :--------- | :---------------------------------------------------------------------------------------- |
| `callback` | (`tab`: [`IEditorTab`](molecule.model.IEditorTab)<`BuiltInEditorTabDataType`\>) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:101](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L101)

---

### onSelectTab

▸ **onSelectTab**(`callback`): `any`

Listen to the tab select event

#### Parameters

| Name       | Type                                                    |
| :--------- | :------------------------------------------------------ |
| `callback` | (`tabId`: `UniqueId`, `groupId?`: `UniqueId`) => `void` |

#### Returns

`any`

#### Defined in

[src/services/workbench/editorService.ts:113](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L113)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                           |
| :--------- | :------------------------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`IEditor`](molecule.model.IEditor), `nextState`: [`IEditor`](molecule.model.IEditor)) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:71](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L71)

---

### onUpdateTab

▸ **onUpdateTab**(`callback`): `void`

Listen to the Editor tab changed event

#### Parameters

| Name       | Type                                                                                      |
| :--------- | :---------------------------------------------------------------------------------------- |
| `callback` | (`tab`: [`IEditorTab`](molecule.model.IEditorTab)<`BuiltInEditorTabDataType`\>) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:96](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L96)

---

### open

▸ **open**<`T`\>(`tab`, `groupId?`): `void`

Open a new tab in a specific group

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

#### Parameters

| Name       | Type                                            | Description |
| :--------- | :---------------------------------------------- | :---------- |
| `tab`      | [`IEditorTab`](molecule.model.IEditorTab)<`T`\> | Tab data    |
| `groupId?` | `UniqueId`                                      | Group ID    |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:27](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L27)

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

| Name         | Type                                |
| :----------- | :---------------------------------- |
| `nextState?` | [`IEditor`](molecule.model.IEditor) |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[render](../classes/molecule.react.Component#render)

#### Defined in

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L67)

---

### setActive

▸ **setActive**(`groupId`, `tabId`): `any`

Set active group and tab

#### Parameters

| Name      | Type       | Description     |
| :-------- | :--------- | :-------------- |
| `groupId` | `UniqueId` | Target group ID |
| `tabId`   | `UniqueId` | Target tab ID   |

#### Returns

`any`

#### Defined in

[src/services/workbench/editorService.ts:151](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L151)

---

### setDefaultActions

▸ **setDefaultActions**(`actions`): `void`

Set default actions when create a new group

#### Parameters

| Name      | Type                                                          |
| :-------- | :------------------------------------------------------------ |
| `actions` | [`IEditorActionsProps`](molecule.model.IEditorActionsProps)[] |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:162](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L162)

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

[src/services/workbench/editorService.ts:167](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L167)

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

[src/services/workbench/editorService.ts:46](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L46)

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

---

### updateActions

▸ **updateActions**(`actions`, `groupId?`): `void`

Update actions in specific group

#### Parameters

| Name       | Type                                                    |
| :--------- | :------------------------------------------------------ |
| `actions`  | [`IMenuItemProps`](molecule.component.IMenuItemProps)[] |
| `groupId?` | `UniqueId`                                              |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:173](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L173)

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

[src/services/workbench/editorService.ts:178](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L178)

---

### updateEditorOptions

▸ **updateEditorOptions**(`options`): `void`

Update the editor options

#### Parameters

| Name      | Type                                                            |
| :-------- | :-------------------------------------------------------------- |
| `options` | [`IEditorOptions`](../namespaces/molecule.model#ieditoroptions) |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:191](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L191)

---

### updateGroup

▸ **updateGroup**(`groupId`, `groupValues`): `void`

Update the specific group

#### Parameters

| Name          | Type                                                                          |
| :------------ | :---------------------------------------------------------------------------- |
| `groupId`     | `UniqueId`                                                                    |
| `groupValues` | `Omit`<[`IEditorGroup`](molecule.model.IEditorGroup)<`any`, `any`\>, `"id"`\> |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:157](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L157)

---

### updateTab

▸ **updateTab**(`tab`, `groupId?`): [`IEditorTab`](molecule.model.IEditorTab)<`BuiltInEditorTabDataType`\>

Update the specific tab, if the groupId provide, then update the tab of specific group

#### Parameters

| Name       | Type                                                                   | Description        |
| :--------- | :--------------------------------------------------------------------- | :----------------- |
| `tab`      | [`IEditorTab`](molecule.model.IEditorTab)<`BuiltInEditorTabDataType`\> | The id is required |
| `groupId?` | `UniqueId`                                                             |                    |

#### Returns

[`IEditorTab`](molecule.model.IEditorTab)<`BuiltInEditorTabDataType`\>

#### Defined in

[src/services/workbench/editorService.ts:42](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L42)
