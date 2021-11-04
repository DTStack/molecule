---
id: 'molecule.EditorService'
title: 'Class: EditorService'
sidebar_label: 'EditorService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).EditorService

## Hierarchy

-   [`Component`](molecule.react.Component)<[`IEditor`](../interfaces/molecule.IEditor)\>

    ↳ **`EditorService`**

## Implements

-   [`IEditorService`](../interfaces/molecule.IEditorService)

## Constructors

### constructor

• **new EditorService**()

#### Overrides

[Component](molecule.react.Component).[constructor](molecule.react.Component#constructor)

#### Defined in

[src/services/workbench/editorService.ts:207](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L207)

## Properties

### defaultActions

• `Protected` **defaultActions**: `IEditorActionsProps`[] = `[]`

#### Defined in

[src/services/workbench/editorService.ts:203](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L203)

---

### defaultMenus

• `Protected` **defaultMenus**: [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[] = `[]`

#### Defined in

[src/services/workbench/editorService.ts:204](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L204)

---

### explorerService

• `Protected` **explorerService**: [`IExplorerService`](../interfaces/molecule.IExplorerService)

#### Defined in

[src/services/workbench/editorService.ts:205](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L205)

---

### state

• `Protected` **state**: [`IEditor`](../interfaces/molecule.IEditor)

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[state](../interfaces/molecule.IEditorService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[src/services/workbench/editorService.ts:202](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L202)

## Accessors

### editorInstance

• `get` **editorInstance**(): `any`

The instance of MonacoEditor

#### Returns

`any`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[editorInstance](../interfaces/molecule.IEditorService#editorinstance)

#### Defined in

[src/services/workbench/editorService.ts:297](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L297)

## Methods

### cloneGroup

▸ **cloneGroup**(`groupId?`): [`IEditorGroup`](../interfaces/molecule.IEditorGroup)<`any`, `any`\>

Clone a specific group, if the argument `groupId` is undefined,
there default clone the current group

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `groupId?` | `number` |

#### Returns

[`IEditorGroup`](../interfaces/molecule.IEditorGroup)<`any`, `any`\>

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[cloneGroup](../interfaces/molecule.IEditorService#clonegroup)

#### Defined in

[src/services/workbench/editorService.ts:661](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L661)

---

### closeAll

▸ **closeAll**(`groupId`): `void`

Close the specific group all opened tabs

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `groupId` | `number` |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[closeAll](../interfaces/molecule.IEditorService#closeall)

#### Defined in

[src/services/workbench/editorService.ts:626](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L626)

---

### closeOther

▸ **closeOther**(`tab`, `groupId`): `void`

Close other opened tabs in Editor Group

#### Parameters

| Name      | Type                                      |
| :-------- | :---------------------------------------- |
| `tab`     | `IEditorTab`<`BuiltInEditorTabDataType`\> |
| `groupId` | `number`                                  |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[closeOther](../interfaces/molecule.IEditorService#closeother)

#### Defined in

[src/services/workbench/editorService.ts:406](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L406)

---

### closeTab

▸ **closeTab**(`tabId`, `groupId`): `void`

Close the specific Tab opened in Editor Group view

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `tabId`   | `string` |
| `groupId` | `number` |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[closeTab](../interfaces/molecule.IEditorService#closetab)

#### Defined in

[src/services/workbench/editorService.ts:347](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L347)

---

### closeToLeft

▸ **closeToLeft**(`tab`, `groupId`): `void`

Close the left opened Tabs in Editor Group

#### Parameters

| Name      | Type                                      |
| :-------- | :---------------------------------------- |
| `tab`     | `IEditorTab`<`BuiltInEditorTabDataType`\> |
| `groupId` | `number`                                  |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[closeToLeft](../interfaces/molecule.IEditorService#closetoleft)

#### Defined in

[src/services/workbench/editorService.ts:470](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L470)

---

### closeToRight

▸ **closeToRight**(`tab`, `groupId`): `void`

Close the right opened tabs in Editor Group

#### Parameters

| Name      | Type                                      |
| :-------- | :---------------------------------------- |
| `tab`     | `IEditorTab`<`BuiltInEditorTabDataType`\> |
| `groupId` | `number`                                  |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[closeToRight](../interfaces/molecule.IEditorService#closetoright)

#### Defined in

[src/services/workbench/editorService.ts:438](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L438)

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

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[count](../interfaces/molecule.IEditorService#count)

#### Inherited from

[Component](molecule.react.Component).[count](molecule.react.Component#count)

#### Defined in

[src/common/event/eventBus.ts:28](https://github.com/DTStack/molecule/blob/b675cb9/src/common/event/eventBus.ts#L28)

---

### disposeModel

▸ `Private` **disposeModel**(`tabs`): `void`

#### Parameters

| Name   | Type                                                                                     |
| :----- | :--------------------------------------------------------------------------------------- |
| `tabs` | `IEditorTab`<`BuiltInEditorTabDataType`\> \| `IEditorTab`<`BuiltInEditorTabDataType`\>[] |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:233](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L233)

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

[IEditorService](../interfaces/molecule.IEditorService).[emit](../interfaces/molecule.IEditorService#emit)

#### Inherited from

[Component](molecule.react.Component).[emit](molecule.react.Component#emit)

#### Defined in

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/b675cb9/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

Force to update the Component

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[forceUpdate](../interfaces/molecule.IEditorService#forceupdate)

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:79](https://github.com/DTStack/molecule/blob/b675cb9/src/react/component.ts#L79)

---

### getDefaultActions

▸ **getDefaultActions**(): `IEditorActionsProps`[]

Get the default group actions

#### Returns

`IEditorActionsProps`[]

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[getDefaultActions](../interfaces/molecule.IEditorService#getdefaultactions)

#### Defined in

[src/services/workbench/editorService.ts:225](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L225)

---

### getDefaultMenus

▸ **getDefaultMenus**(): [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[]

Get the default group menus

#### Returns

[`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[]

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[getDefaultMenus](../interfaces/molecule.IEditorService#getdefaultmenus)

#### Defined in

[src/services/workbench/editorService.ts:229](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L229)

---

### getGroupById

▸ **getGroupById**(`groupId`): `undefined` \| [`IEditorGroup`](../interfaces/molecule.IEditorGroup)<`any`, `any`\>

Get the specific group

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `groupId` | `number` |

#### Returns

`undefined` \| [`IEditorGroup`](../interfaces/molecule.IEditorGroup)<`any`, `any`\>

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[getGroupById](../interfaces/molecule.IEditorService#getgroupbyid)

#### Defined in

[src/services/workbench/editorService.ts:502](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L502)

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

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[getGroupIdByTab](../interfaces/molecule.IEditorService#getgroupidbytab)

#### Defined in

[src/services/workbench/editorService.ts:512](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L512)

---

### getGroupIndexById

▸ **getGroupIndexById**(`id`): `number`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `number` |

#### Returns

`number`

#### Defined in

[src/services/workbench/editorService.ts:507](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L507)

---

### getState

▸ **getState**(): [`IEditor`](../interfaces/molecule.IEditor)

Get the Component state

#### Returns

[`IEditor`](../interfaces/molecule.IEditor)

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[getState](../interfaces/molecule.IEditorService#getstate)

#### Inherited from

[Component](molecule.react.Component).[getState](molecule.react.Component#getstate)

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

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[getTabById](../interfaces/molecule.IEditorService#gettabbyid)

#### Defined in

[src/services/workbench/editorService.ts:286](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L286)

---

### isOpened

▸ **isOpened**(`tabId`, `filterGroups?`): `boolean`

Judge the specific tabs whether opened in Editor view

#### Parameters

| Name            | Type                                                                   |
| :-------------- | :--------------------------------------------------------------------- |
| `tabId`         | `string`                                                               |
| `filterGroups?` | [`IEditorGroup`](../interfaces/molecule.IEditorGroup)<`any`, `any`\>[] |

#### Returns

`boolean`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[isOpened](../interfaces/molecule.IEditorService#isopened)

#### Defined in

[src/services/workbench/editorService.ts:240](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L240)

---

### onActionsClick

▸ **onActionsClick**(`callback`): `void`

Listen to the Group Actions click event

#### Parameters

| Name       | Type                                                                                                                 |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`menuId`: `string`, `currentGroup`: [`IEditorGroup`](../interfaces/molecule.IEditorGroup)<`any`, `any`\>) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[onActionsClick](../interfaces/molecule.IEditorService#onactionsclick)

#### Defined in

[src/services/workbench/editorService.ts:727](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L727)

---

### onCloseAll

▸ **onCloseAll**(`callback`): `void`

Listen to the all tabs close event

#### Parameters

| Name       | Type                             |
| :--------- | :------------------------------- |
| `callback` | (`groupId?`: `number`) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[onCloseAll](../interfaces/molecule.IEditorService#oncloseall)

#### Defined in

[src/services/workbench/editorService.ts:701](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L701)

---

### onCloseOther

▸ **onCloseOther**(`callback`): `void`

Listen to the other tabs close event

#### Parameters

| Name       | Type                                                                                   |
| :--------- | :------------------------------------------------------------------------------------- |
| `callback` | (`tabItem`: `IEditorTab`<`BuiltInEditorTabDataType`\>, `groupId?`: `number`) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[onCloseOther](../interfaces/molecule.IEditorService#oncloseother)

#### Defined in

[src/services/workbench/editorService.ts:709](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L709)

---

### onCloseTab

▸ **onCloseTab**(`callback`): `void`

Listen to the tab close event

#### Parameters

| Name       | Type                                                |
| :--------- | :-------------------------------------------------- |
| `callback` | (`tabId`: `string`, `groupId?`: `number`) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[onCloseTab](../interfaces/molecule.IEditorService#onclosetab)

#### Defined in

[src/services/workbench/editorService.ts:705](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L705)

---

### onCloseToLeft

▸ **onCloseToLeft**(`callback`): `void`

Listen to the left tabs close event

#### Parameters

| Name       | Type                                                                                   |
| :--------- | :------------------------------------------------------------------------------------- |
| `callback` | (`tabItem`: `IEditorTab`<`BuiltInEditorTabDataType`\>, `groupId?`: `number`) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[onCloseToLeft](../interfaces/molecule.IEditorService#onclosetoleft)

#### Defined in

[src/services/workbench/editorService.ts:715](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L715)

---

### onCloseToRight

▸ **onCloseToRight**(`callback`): `void`

Listen to the right tabs close event

#### Parameters

| Name       | Type                                                                                   |
| :--------- | :------------------------------------------------------------------------------------- |
| `callback` | (`tabItem`: `IEditorTab`<`BuiltInEditorTabDataType`\>, `groupId?`: `number`) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[onCloseToRight](../interfaces/molecule.IEditorService#onclosetoright)

#### Defined in

[src/services/workbench/editorService.ts:721](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L721)

---

### onMoveTab

▸ **onMoveTab**(`callback`): `void`

Listen to the tab move event

#### Parameters

| Name       | Type                                                                   |
| :--------- | :--------------------------------------------------------------------- |
| `callback` | (`updateTabs`: `IEditorTab`<`any`\>[], `groupId?`: `number`) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[onMoveTab](../interfaces/molecule.IEditorService#onmovetab)

#### Defined in

[src/services/workbench/editorService.ts:691](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L691)

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

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[onOpenTab](../interfaces/molecule.IEditorService#onopentab)

#### Defined in

[src/services/workbench/editorService.ts:622](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L622)

---

### onSelectTab

▸ **onSelectTab**(`callback`): `void`

Listen to the tab select event

#### Parameters

| Name       | Type                                                |
| :--------- | :-------------------------------------------------- |
| `callback` | (`tabId`: `string`, `groupId?`: `number`) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[onSelectTab](../interfaces/molecule.IEditorService#onselecttab)

#### Defined in

[src/services/workbench/editorService.ts:697](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L697)

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

[IEditorService](../interfaces/molecule.IEditorService).[onUpdateState](../interfaces/molecule.IEditorService#onupdatestate)

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

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

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[onUpdateTab](../interfaces/molecule.IEditorService#onupdatetab)

#### Defined in

[src/services/workbench/editorService.ts:687](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L687)

---

### open

▸ **open**<`T`\>(`tab`, `groupId?`): `void`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name       | Type               | Description                                  |
| :--------- | :----------------- | :------------------------------------------- |
| `tab`      | `IEditorTab`<`T`\> | -                                            |
| `groupId?` | `number`           | If provided, will open tab in specific group |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[open](../interfaces/molecule.IEditorService#open)

#### Defined in

[src/services/workbench/editorService.ts:576](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L576)

---

### removeOnUpdateState

▸ **removeOnUpdateState**(): `void`

Remove the Component update event listening

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[removeOnUpdateState](../interfaces/molecule.IEditorService#removeonupdatestate)

#### Inherited from

[Component](molecule.react.Component).[removeOnUpdateState](molecule.react.Component#removeonupdatestate)

#### Defined in

[src/react/component.ts:75](https://github.com/DTStack/molecule/blob/b675cb9/src/react/component.ts#L75)

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

[IEditorService](../interfaces/molecule.IEditorService).[render](../interfaces/molecule.IEditorService#render)

#### Inherited from

[Component](molecule.react.Component).[render](molecule.react.Component#render)

#### Defined in

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/b675cb9/src/react/component.ts#L67)

---

### setActive

▸ **setActive**(`groupId`, `tabId`): `void`

Set active group and tab

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `groupId` | `number` |
| `tabId`   | `string` |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[setActive](../interfaces/molecule.IEditorService#setactive)

#### Defined in

[src/services/workbench/editorService.ts:525](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L525)

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

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[setDefaultActions](../interfaces/molecule.IEditorService#setdefaultactions)

#### Defined in

[src/services/workbench/editorService.ts:248](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L248)

---

### setDefaultMenus

▸ **setDefaultMenus**(`menus`): `void`

Set default menus when create a new group

#### Parameters

| Name    | Type                                                                  |
| :------ | :-------------------------------------------------------------------- |
| `menus` | [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[] |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[setDefaultMenus](../interfaces/molecule.IEditorService#setdefaultmenus)

#### Defined in

[src/services/workbench/editorService.ts:252](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L252)

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

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[setEntry](../interfaces/molecule.IEditorService#setentry)

#### Defined in

[src/services/workbench/editorService.ts:256](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L256)

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

[IEditorService](../interfaces/molecule.IEditorService).[setState](../interfaces/molecule.IEditorService#setstate)

#### Inherited from

[Component](molecule.react.Component).[setState](molecule.react.Component#setstate)

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

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[subscribe](../interfaces/molecule.IEditorService#subscribe)

#### Inherited from

[Component](molecule.react.Component).[subscribe](molecule.react.Component#subscribe)

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

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[unsubscribe](../interfaces/molecule.IEditorService#unsubscribe)

#### Inherited from

[Component](molecule.react.Component).[unsubscribe](molecule.react.Component#unsubscribe)

#### Defined in

[src/common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/b675cb9/src/common/event/eventBus.ts#L37)

---

### updateActions

▸ **updateActions**(`actions`, `groupId?`): `void`

Update actions in specific group

#### Parameters

| Name       | Type                                                                  |
| :--------- | :-------------------------------------------------------------------- |
| `actions`  | [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[] |
| `groupId?` | `number`                                                              |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[updateActions](../interfaces/molecule.IEditorService#updateactions)

#### Defined in

[src/services/workbench/editorService.ts:262](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L262)

---

### updateCurrentGroup

▸ **updateCurrentGroup**(`currentValues`): `void`

Update the current group

#### Parameters

| Name            | Type                                                                 |
| :-------------- | :------------------------------------------------------------------- |
| `currentValues` | [`IEditorGroup`](../interfaces/molecule.IEditorGroup)<`any`, `any`\> |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[updateCurrentGroup](../interfaces/molecule.IEditorService#updatecurrentgroup)

#### Defined in

[src/services/workbench/editorService.ts:567](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L567)

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

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[updateEditorOptions](../interfaces/molecule.IEditorService#updateeditoroptions)

#### Defined in

[src/services/workbench/editorService.ts:213](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L213)

---

### updateGroup

▸ **updateGroup**(`groupId`, `groupValues`): `void`

Update the specific group

#### Parameters

| Name          | Type                                                                 |
| :------------ | :------------------------------------------------------------------- |
| `groupId`     | `number`                                                             |
| `groupValues` | [`IEditorGroup`](../interfaces/molecule.IEditorGroup)<`any`, `any`\> |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[updateGroup](../interfaces/molecule.IEditorService#updategroup)

#### Defined in

[src/services/workbench/editorService.ts:548](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L548)

---

### updateTab

▸ **updateTab**(`tab`, `groupId?`): `IEditorTab`<`BuiltInEditorTabDataType`\>

Update the specific tab, if the groupId provide, then update the tab of specific group

#### Parameters

| Name       | Type                                      |
| :--------- | :---------------------------------------- |
| `tab`      | `IEditorTab`<`BuiltInEditorTabDataType`\> |
| `groupId?` | `number`                                  |

#### Returns

`IEditorTab`<`BuiltInEditorTabDataType`\>

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[updateTab](../interfaces/molecule.IEditorService#updatetab)

#### Defined in

[src/services/workbench/editorService.ts:301](https://github.com/DTStack/molecule/blob/b675cb9/src/services/workbench/editorService.ts#L301)
