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

[src/services/workbench/editorService.ts:194](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L194)

---

### state

• `Protected` `Abstract` **state**: [`IEditor`](molecule.IEditor)

#### Inherited from

[Component](../classes/molecule.react.Component).[state](../classes/molecule.react.Component#state)

#### Defined in

[src/react/component.ts:42](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L42)

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

[src/services/workbench/editorService.ts:90](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L90)

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

[src/services/workbench/editorService.ts:79](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L79)

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

[src/services/workbench/editorService.ts:62](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L62)

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

[src/services/workbench/editorService.ts:56](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L56)

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

[src/services/workbench/editorService.ts:74](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L74)

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

[src/services/workbench/editorService.ts:68](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L68)

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

[src/common/event/eventBus.ts:28](https://github.com/DTStack/molecule/blob/3c64296/src/common/event/eventBus.ts#L28)

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

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/3c64296/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

Force to update the Component

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[forceUpdate](../classes/molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:79](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L79)

---

### getDefaultActions

▸ **getDefaultActions**(): `IEditorActionsProps`[]

Get the default group actions

#### Returns

`IEditorActionsProps`[]

#### Defined in

[src/services/workbench/editorService.ts:181](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L181)

---

### getDefaultMenus

▸ **getDefaultMenus**(): [`IMenuItemProps`](molecule.component.IMenuItemProps)[]

Get the default group menus

#### Returns

[`IMenuItemProps`](molecule.component.IMenuItemProps)[]

#### Defined in

[src/services/workbench/editorService.ts:185](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L185)

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

[src/services/workbench/editorService.ts:84](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L84)

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

[src/services/workbench/editorService.ts:199](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L199)

---

### getState

▸ **getState**(): [`IEditor`](molecule.IEditor)

Get the Component state

#### Returns

[`IEditor`](molecule.IEditor)

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L83)

---

### getTabById

▸ **getTabById**<`T`\>(`tabId`, `group`): `undefined` \| `IEditorTab`<`T`\>

Get a tab from a specific group via the tab ID

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                                                   |
| :------ | :----------------------------------------------------- |
| `tabId` | `string`                                               |
| `group` | [`IEditorGroup`](molecule.IEditorGroup)<`any`, `any`\> |

#### Returns

`undefined` \| `IEditorTab`<`T`\>

#### Defined in

[src/services/workbench/editorService.ts:32](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L32)

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

[src/services/workbench/editorService.ts:50](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L50)

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

[src/services/workbench/editorService.ts:142](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L142)

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

[src/services/workbench/editorService.ts:117](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L117)

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

[src/services/workbench/editorService.ts:127](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L127)

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

[src/services/workbench/editorService.ts:122](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L122)

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

[src/services/workbench/editorService.ts:132](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L132)

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

[src/services/workbench/editorService.ts:137](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L137)

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

[src/services/workbench/editorService.ts:105](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L105)

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

[src/services/workbench/editorService.ts:100](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L100)

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

[src/services/workbench/editorService.ts:112](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L112)

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

[src/react/component.ts:71](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L71)

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

[src/services/workbench/editorService.ts:95](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L95)

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

[src/services/workbench/editorService.ts:26](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L26)

---

### removeOnUpdateState

▸ **removeOnUpdateState**(): `void`

Remove the Component update event listening

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[removeOnUpdateState](../classes/molecule.react.Component#removeonupdatestate)

#### Defined in

[src/react/component.ts:75](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L75)

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

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L67)

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

[src/services/workbench/editorService.ts:150](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L150)

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

[src/services/workbench/editorService.ts:161](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L161)

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

[src/services/workbench/editorService.ts:166](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L166)

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

[src/services/workbench/editorService.ts:45](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L45)

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

[src/react/component.ts:54](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L54)

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

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/3c64296/src/common/event/eventBus.ts#L11)

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

[src/common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/3c64296/src/common/event/eventBus.ts#L37)

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

[src/services/workbench/editorService.ts:172](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L172)

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

[src/services/workbench/editorService.ts:177](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L177)

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

[src/services/workbench/editorService.ts:190](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L190)

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

[src/services/workbench/editorService.ts:156](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L156)

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

[src/services/workbench/editorService.ts:41](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/editorService.ts#L41)
