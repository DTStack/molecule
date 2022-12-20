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

[services/workbench/editorService.ts:202](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L202)

---

### state

• `Protected` `Abstract` **state**: [`IEditor`](molecule.model.IEditor)

#### Inherited from

[Component](../classes/molecule.react.Component).[state](../classes/molecule.react.Component#state)

#### Defined in

[react/component.ts:44](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L44)

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

[services/workbench/editorService.ts:98](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L98)

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

[services/workbench/editorService.ts:87](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L87)

---

### closeOther

▸ **closeOther**(`tab`, `groupId`): `void`

Close other opened tabs in Editor Group

#### Parameters

| Name      | Type                                                                                                              | Description             |
| :-------- | :---------------------------------------------------------------------------------------------------------------- | :---------------------- |
| `tab`     | [`IEditorTab`](molecule.model.IEditorTab)<[`BuiltInEditorTabDataType`](molecule.model.BuiltInEditorTabDataType)\> | The id is required      |
| `groupId` | `UniqueId`                                                                                                        | The groupId is required |

#### Returns

`void`

#### Defined in

[services/workbench/editorService.ts:70](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L70)

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

[services/workbench/editorService.ts:64](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L64)

---

### closeToLeft

▸ **closeToLeft**(`tab`, `groupId`): `void`

Close the left opened Tabs in Editor Group

#### Parameters

| Name      | Type                                                                                                              | Description                                          |
| :-------- | :---------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------- |
| `tab`     | [`IEditorTab`](molecule.model.IEditorTab)<[`BuiltInEditorTabDataType`](molecule.model.BuiltInEditorTabDataType)\> | The id is required, the start point of close to left |
| `groupId` | `UniqueId`                                                                                                        | The groupId is required                              |

#### Returns

`void`

#### Defined in

[services/workbench/editorService.ts:82](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L82)

---

### closeToRight

▸ **closeToRight**(`tab`, `groupId`): `void`

Close the right opened tabs in Editor Group

#### Parameters

| Name      | Type                                                                                                              | Description                                           |
| :-------- | :---------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------- |
| `tab`     | [`IEditorTab`](molecule.model.IEditorTab)<[`BuiltInEditorTabDataType`](molecule.model.BuiltInEditorTabDataType)\> | The id is required, the start point of close to right |
| `groupId` | `UniqueId`                                                                                                        | The groupId is required                               |

#### Returns

`void`

#### Defined in

[services/workbench/editorService.ts:76](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L76)

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

### getDefaultActions

▸ **getDefaultActions**(): [`IEditorActionsProps`](molecule.model.IEditorActionsProps)[]

Get the default group actions

#### Returns

[`IEditorActionsProps`](molecule.model.IEditorActionsProps)[]

#### Defined in

[services/workbench/editorService.ts:189](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L189)

---

### getDefaultMenus

▸ **getDefaultMenus**(): [`IMenuItemProps`](molecule.component.IMenuItemProps)[]

Get the default group menus

#### Returns

[`IMenuItemProps`](molecule.component.IMenuItemProps)[]

#### Defined in

[services/workbench/editorService.ts:193](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L193)

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

[services/workbench/editorService.ts:92](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L92)

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

[services/workbench/editorService.ts:207](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L207)

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

[services/workbench/editorService.ts:34](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L34)

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

[services/workbench/editorService.ts:58](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L58)

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

[services/workbench/editorService.ts:150](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L150)

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

[services/workbench/editorService.ts:125](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L125)

---

### onCloseOther

▸ **onCloseOther**(`callback`): `any`

Listen to the other tabs close event

#### Parameters

| Name       | Type                                                                                                                                                             |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`tabItem`: [`IEditorTab`](molecule.model.IEditorTab)<[`BuiltInEditorTabDataType`](molecule.model.BuiltInEditorTabDataType)\>, `groupId?`: `UniqueId`) => `void` |

#### Returns

`any`

#### Defined in

[services/workbench/editorService.ts:135](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L135)

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

[services/workbench/editorService.ts:130](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L130)

---

### onCloseToLeft

▸ **onCloseToLeft**(`callback`): `any`

Listen to the left tabs close event

#### Parameters

| Name       | Type                                                                                                                                                             |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`tabItem`: [`IEditorTab`](molecule.model.IEditorTab)<[`BuiltInEditorTabDataType`](molecule.model.BuiltInEditorTabDataType)\>, `groupId?`: `UniqueId`) => `void` |

#### Returns

`any`

#### Defined in

[services/workbench/editorService.ts:140](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L140)

---

### onCloseToRight

▸ **onCloseToRight**(`callback`): `any`

Listen to the right tabs close event

#### Parameters

| Name       | Type                                                                                                                                                             |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`tabItem`: [`IEditorTab`](molecule.model.IEditorTab)<[`BuiltInEditorTabDataType`](molecule.model.BuiltInEditorTabDataType)\>, `groupId?`: `UniqueId`) => `void` |

#### Returns

`any`

#### Defined in

[services/workbench/editorService.ts:145](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L145)

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

[services/workbench/editorService.ts:113](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L113)

---

### onOpenTab

▸ **onOpenTab**(`callback`): `void`

Listen to the tab opening event

#### Parameters

| Name       | Type                                                                                                                                 |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`tab`: [`IEditorTab`](molecule.model.IEditorTab)<[`BuiltInEditorTabDataType`](molecule.model.BuiltInEditorTabDataType)\>) => `void` |

#### Returns

`void`

#### Defined in

[services/workbench/editorService.ts:108](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L108)

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

[services/workbench/editorService.ts:120](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L120)

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

### onUpdateTab

▸ **onUpdateTab**(`callback`): `void`

Listen to the Editor tab changed event

#### Parameters

| Name       | Type                                                                                                                                 |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`tab`: [`IEditorTab`](molecule.model.IEditorTab)<[`BuiltInEditorTabDataType`](molecule.model.BuiltInEditorTabDataType)\>) => `void` |

#### Returns

`void`

#### Defined in

[services/workbench/editorService.ts:103](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L103)

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

[services/workbench/editorService.ts:28](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L28)

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

[services/workbench/editorService.ts:158](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L158)

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

[services/workbench/editorService.ts:169](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L169)

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

[services/workbench/editorService.ts:174](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L174)

---

### setEntry

▸ **setEntry**(`component`): `void`

Specify the Entry page of Workbench

#### Parameters

| Name        | Type      |
| :---------- | :-------- |
| `component` | `Element` |

#### Returns

`void`

#### Defined in

[services/workbench/editorService.ts:53](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L53)

---

### setGroupEditorValue

▸ **setGroupEditorValue**(`group`, `value`): `void`

Updates the editor content for a specific group

#### Parameters

| Name    | Type                                                         | Description                    |
| :------ | :----------------------------------------------------------- | :----------------------------- |
| `group` | [`IEditorGroup`](molecule.model.IEditorGroup)<`any`, `any`\> | The editorInstance is required |
| `value` | `string`                                                     |                                |

#### Returns

`void`

#### Defined in

[services/workbench/editorService.ts:49](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L49)

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

[services/workbench/editorService.ts:180](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L180)

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

[services/workbench/editorService.ts:185](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L185)

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

[services/workbench/editorService.ts:198](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L198)

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

[services/workbench/editorService.ts:164](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L164)

---

### updateTab

▸ **updateTab**(`tab`, `groupId?`): [`IEditorTab`](molecule.model.IEditorTab)<[`BuiltInEditorTabDataType`](molecule.model.BuiltInEditorTabDataType)\>

Update the specific tab, if the groupId provide, then update the tab of specific group

#### Parameters

| Name       | Type                                                                                                              | Description        |
| :--------- | :---------------------------------------------------------------------------------------------------------------- | :----------------- |
| `tab`      | [`IEditorTab`](molecule.model.IEditorTab)<[`BuiltInEditorTabDataType`](molecule.model.BuiltInEditorTabDataType)\> | The id is required |
| `groupId?` | `UniqueId`                                                                                                        |                    |

#### Returns

[`IEditorTab`](molecule.model.IEditorTab)<[`BuiltInEditorTabDataType`](molecule.model.BuiltInEditorTabDataType)\>

#### Defined in

[services/workbench/editorService.ts:43](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L43)
