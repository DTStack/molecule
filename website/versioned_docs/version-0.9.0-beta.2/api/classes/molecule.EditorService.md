---
id: 'molecule.EditorService'
title: 'Class: EditorService'
sidebar_label: 'EditorService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).EditorService

## Hierarchy

-   [`Component`](molecule.react.Component)<[`IEditor`](../interfaces/molecule.model.IEditor)\>

    ↳ **`EditorService`**

## Implements

-   [`IEditorService`](../interfaces/molecule.IEditorService)

## Constructors

### constructor

• **new EditorService**()

#### Overrides

[Component](molecule.react.Component).[constructor](molecule.react.Component#constructor)

#### Defined in

[src/services/workbench/editorService.ts:211](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L211)

## Properties

### defaultActions

• `Protected` **defaultActions**: [`IEditorActionsProps`](../interfaces/molecule.model.IEditorActionsProps)[] = `[]`

#### Defined in

[src/services/workbench/editorService.ts:207](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L207)

---

### defaultMenus

• `Protected` **defaultMenus**: [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[] = `[]`

#### Defined in

[src/services/workbench/editorService.ts:208](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L208)

---

### explorerService

• `Protected` **explorerService**: [`IExplorerService`](../interfaces/molecule.IExplorerService)

#### Defined in

[src/services/workbench/editorService.ts:209](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L209)

---

### state

• `Protected` **state**: [`IEditor`](../interfaces/molecule.model.IEditor)

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[state](../interfaces/molecule.IEditorService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[src/services/workbench/editorService.ts:206](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L206)

## Accessors

### editorInstance

• `get` **editorInstance**(): `any`

The instance of MonacoEditor

#### Returns

`any`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[editorInstance](../interfaces/molecule.IEditorService#editorinstance)

#### Defined in

[src/services/workbench/editorService.ts:301](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L301)

## Methods

### cloneGroup

▸ **cloneGroup**(`groupId?`): [`IEditorGroup`](../interfaces/molecule.model.IEditorGroup)<`any`, `any`\>

Clone a specific group, if the argument `groupId` is undefined,
there default clone the current group

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `groupId?` | `UniqueId` |

#### Returns

[`IEditorGroup`](../interfaces/molecule.model.IEditorGroup)<`any`, `any`\>

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[cloneGroup](../interfaces/molecule.IEditorService#clonegroup)

#### Defined in

[src/services/workbench/editorService.ts:668](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L668)

---

### closeAll

▸ **closeAll**(`groupId`): `void`

Close the specific group all opened tabs

#### Parameters

| Name      | Type       |
| :-------- | :--------- |
| `groupId` | `UniqueId` |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[closeAll](../interfaces/molecule.IEditorService#closeall)

#### Defined in

[src/services/workbench/editorService.ts:633](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L633)

---

### closeOther

▸ **closeOther**(`tab`, `groupId`): `void`

Close other opened tabs in Editor Group

#### Parameters

| Name      | Type                                                                                 |
| :-------- | :----------------------------------------------------------------------------------- |
| `tab`     | [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<`BuiltInEditorTabDataType`\> |
| `groupId` | `UniqueId`                                                                           |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[closeOther](../interfaces/molecule.IEditorService#closeother)

#### Defined in

[src/services/workbench/editorService.ts:410](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L410)

---

### closeTab

▸ **closeTab**(`tabId`, `groupId`): `void`

Close the specific Tab opened in Editor Group view

#### Parameters

| Name      | Type       |
| :-------- | :--------- |
| `tabId`   | `UniqueId` |
| `groupId` | `UniqueId` |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[closeTab](../interfaces/molecule.IEditorService#closetab)

#### Defined in

[src/services/workbench/editorService.ts:351](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L351)

---

### closeToLeft

▸ **closeToLeft**(`tab`, `groupId`): `void`

Close the left opened Tabs in Editor Group

#### Parameters

| Name      | Type                                                                                 |
| :-------- | :----------------------------------------------------------------------------------- |
| `tab`     | [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<`BuiltInEditorTabDataType`\> |
| `groupId` | `UniqueId`                                                                           |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[closeToLeft](../interfaces/molecule.IEditorService#closetoleft)

#### Defined in

[src/services/workbench/editorService.ts:474](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L474)

---

### closeToRight

▸ **closeToRight**(`tab`, `groupId`): `void`

Close the right opened tabs in Editor Group

#### Parameters

| Name      | Type                                                                                 |
| :-------- | :----------------------------------------------------------------------------------- |
| `tab`     | [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<`BuiltInEditorTabDataType`\> |
| `groupId` | `UniqueId`                                                                           |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[closeToRight](../interfaces/molecule.IEditorService#closetoright)

#### Defined in

[src/services/workbench/editorService.ts:442](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L442)

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

[src/common/event/eventBus.ts:28](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L28)

---

### disposeModel

▸ `Private` **disposeModel**(`tabs`): `void`

#### Parameters

| Name   | Type                                                                                                                                                                           |
| :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tabs` | [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<`BuiltInEditorTabDataType`\> \| [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<`BuiltInEditorTabDataType`\>[] |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:237](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L237)

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

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L20)

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

[src/react/component.ts:79](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L79)

---

### getDefaultActions

▸ **getDefaultActions**(): [`IEditorActionsProps`](../interfaces/molecule.model.IEditorActionsProps)[]

Get the default group actions

#### Returns

[`IEditorActionsProps`](../interfaces/molecule.model.IEditorActionsProps)[]

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[getDefaultActions](../interfaces/molecule.IEditorService#getdefaultactions)

#### Defined in

[src/services/workbench/editorService.ts:229](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L229)

---

### getDefaultMenus

▸ **getDefaultMenus**(): [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[]

Get the default group menus

#### Returns

[`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[]

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[getDefaultMenus](../interfaces/molecule.IEditorService#getdefaultmenus)

#### Defined in

[src/services/workbench/editorService.ts:233](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L233)

---

### getGroupById

▸ **getGroupById**(`groupId`): `undefined` \| [`IEditorGroup`](../interfaces/molecule.model.IEditorGroup)<`any`, `any`\>

Get the specific group

#### Parameters

| Name      | Type       |
| :-------- | :--------- |
| `groupId` | `UniqueId` |

#### Returns

`undefined` \| [`IEditorGroup`](../interfaces/molecule.model.IEditorGroup)<`any`, `any`\>

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[getGroupById](../interfaces/molecule.IEditorService#getgroupbyid)

#### Defined in

[src/services/workbench/editorService.ts:506](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L506)

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

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[getGroupIdByTab](../interfaces/molecule.IEditorService#getgroupidbytab)

#### Defined in

[src/services/workbench/editorService.ts:516](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L516)

---

### getGroupIndexById

▸ **getGroupIndexById**(`id`): `number`

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `id` | `UniqueId` |

#### Returns

`number`

#### Defined in

[src/services/workbench/editorService.ts:511](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L511)

---

### getState

▸ **getState**(): [`IEditor`](../interfaces/molecule.model.IEditor)

Get the Component state

#### Returns

[`IEditor`](../interfaces/molecule.model.IEditor)

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[getState](../interfaces/molecule.IEditorService#getstate)

#### Inherited from

[Component](molecule.react.Component).[getState](molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L83)

---

### getTabById

▸ **getTabById**<`T`\>(`tabId`, `groupId`): `undefined` \| [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<`T`\>

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

`undefined` \| [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<`T`\>

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[getTabById](../interfaces/molecule.IEditorService#gettabbyid)

#### Defined in

[src/services/workbench/editorService.ts:290](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L290)

---

### isOpened

▸ **isOpened**(`tabId`, `filterGroups?`): `boolean`

Judge the specific tabs whether opened in Editor view

#### Parameters

| Name            | Type                                                                         |
| :-------------- | :--------------------------------------------------------------------------- |
| `tabId`         | `UniqueId`                                                                   |
| `filterGroups?` | [`IEditorGroup`](../interfaces/molecule.model.IEditorGroup)<`any`, `any`\>[] |

#### Returns

`boolean`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[isOpened](../interfaces/molecule.IEditorService#isopened)

#### Defined in

[src/services/workbench/editorService.ts:244](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L244)

---

### onActionsClick

▸ **onActionsClick**(`callback`): `void`

Listen to the Group Actions click event

#### Parameters

| Name       | Type                                                                                                                         |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`menuId`: `UniqueId`, `currentGroup`: [`IEditorGroup`](../interfaces/molecule.model.IEditorGroup)<`any`, `any`\>) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[onActionsClick](../interfaces/molecule.IEditorService#onactionsclick)

#### Defined in

[src/services/workbench/editorService.ts:735](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L735)

---

### onCloseAll

▸ **onCloseAll**(`callback`): `void`

Listen to the all tabs close event

#### Parameters

| Name       | Type                               |
| :--------- | :--------------------------------- |
| `callback` | (`groupId?`: `UniqueId`) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[onCloseAll](../interfaces/molecule.IEditorService#oncloseall)

#### Defined in

[src/services/workbench/editorService.ts:709](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L709)

---

### onCloseOther

▸ **onCloseOther**(`callback`): `void`

Listen to the other tabs close event

#### Parameters

| Name       | Type                                                                                                                                |
| :--------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`tabItem`: [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<`BuiltInEditorTabDataType`\>, `groupId?`: `UniqueId`) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[onCloseOther](../interfaces/molecule.IEditorService#oncloseother)

#### Defined in

[src/services/workbench/editorService.ts:717](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L717)

---

### onCloseTab

▸ **onCloseTab**(`callback`): `void`

Listen to the tab close event

#### Parameters

| Name       | Type                                                    |
| :--------- | :------------------------------------------------------ |
| `callback` | (`tabId`: `UniqueId`, `groupId?`: `UniqueId`) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[onCloseTab](../interfaces/molecule.IEditorService#onclosetab)

#### Defined in

[src/services/workbench/editorService.ts:713](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L713)

---

### onCloseToLeft

▸ **onCloseToLeft**(`callback`): `void`

Listen to the left tabs close event

#### Parameters

| Name       | Type                                                                                                                                |
| :--------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`tabItem`: [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<`BuiltInEditorTabDataType`\>, `groupId?`: `UniqueId`) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[onCloseToLeft](../interfaces/molecule.IEditorService#onclosetoleft)

#### Defined in

[src/services/workbench/editorService.ts:723](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L723)

---

### onCloseToRight

▸ **onCloseToRight**(`callback`): `void`

Listen to the right tabs close event

#### Parameters

| Name       | Type                                                                                                                                |
| :--------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`tabItem`: [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<`BuiltInEditorTabDataType`\>, `groupId?`: `UniqueId`) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[onCloseToRight](../interfaces/molecule.IEditorService#onclosetoright)

#### Defined in

[src/services/workbench/editorService.ts:729](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L729)

---

### onMoveTab

▸ **onMoveTab**(`callback`): `void`

Listen to the tab move event

#### Parameters

| Name       | Type                                                                                                                |
| :--------- | :------------------------------------------------------------------------------------------------------------------ |
| `callback` | (`updateTabs`: [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<`any`\>[], `groupId?`: `UniqueId`) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[onMoveTab](../interfaces/molecule.IEditorService#onmovetab)

#### Defined in

[src/services/workbench/editorService.ts:697](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L697)

---

### onOpenTab

▸ **onOpenTab**(`callback`): `void`

Listen to the tab opening event

#### Parameters

| Name       | Type                                                                                                    |
| :--------- | :------------------------------------------------------------------------------------------------------ |
| `callback` | (`tab`: [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<`BuiltInEditorTabDataType`\>) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[onOpenTab](../interfaces/molecule.IEditorService#onopentab)

#### Defined in

[src/services/workbench/editorService.ts:629](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L629)

---

### onSelectTab

▸ **onSelectTab**(`callback`): `void`

Listen to the tab select event

#### Parameters

| Name       | Type                                                    |
| :--------- | :------------------------------------------------------ |
| `callback` | (`tabId`: `UniqueId`, `groupId?`: `UniqueId`) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[onSelectTab](../interfaces/molecule.IEditorService#onselecttab)

#### Defined in

[src/services/workbench/editorService.ts:703](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L703)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                                       |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`IEditor`](../interfaces/molecule.model.IEditor), `nextState`: [`IEditor`](../interfaces/molecule.model.IEditor)) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[onUpdateState](../interfaces/molecule.IEditorService#onupdatestate)

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:71](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L71)

---

### onUpdateTab

▸ **onUpdateTab**(`callback`): `void`

Listen to the Editor tab changed event

#### Parameters

| Name       | Type                                                                                                    |
| :--------- | :------------------------------------------------------------------------------------------------------ |
| `callback` | (`tab`: [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<`BuiltInEditorTabDataType`\>) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[onUpdateTab](../interfaces/molecule.IEditorService#onupdatetab)

#### Defined in

[src/services/workbench/editorService.ts:693](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L693)

---

### open

▸ **open**<`T`\>(`tab`, `groupId?`): `void`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name       | Type                                                          | Description                                  |
| :--------- | :------------------------------------------------------------ | :------------------------------------------- |
| `tab`      | [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<`T`\> | -                                            |
| `groupId?` | `UniqueId`                                                    | If provided, will open tab in specific group |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[open](../interfaces/molecule.IEditorService#open)

#### Defined in

[src/services/workbench/editorService.ts:583](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L583)

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

[src/react/component.ts:75](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L75)

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

[IEditorService](../interfaces/molecule.IEditorService).[render](../interfaces/molecule.IEditorService#render)

#### Inherited from

[Component](molecule.react.Component).[render](molecule.react.Component#render)

#### Defined in

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L67)

---

### setActive

▸ **setActive**(`groupId`, `tabId`): `void`

Set active group and tab

#### Parameters

| Name      | Type       |
| :-------- | :--------- |
| `groupId` | `UniqueId` |
| `tabId`   | `UniqueId` |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[setActive](../interfaces/molecule.IEditorService#setactive)

#### Defined in

[src/services/workbench/editorService.ts:529](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L529)

---

### setDefaultActions

▸ **setDefaultActions**(`actions`): `void`

Set default actions when create a new group

#### Parameters

| Name      | Type                                                                        |
| :-------- | :-------------------------------------------------------------------------- |
| `actions` | [`IEditorActionsProps`](../interfaces/molecule.model.IEditorActionsProps)[] |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[setDefaultActions](../interfaces/molecule.IEditorService#setdefaultactions)

#### Defined in

[src/services/workbench/editorService.ts:252](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L252)

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

[src/services/workbench/editorService.ts:256](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L256)

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

[src/services/workbench/editorService.ts:260](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L260)

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

[IEditorService](../interfaces/molecule.IEditorService).[setState](../interfaces/molecule.IEditorService#setstate)

#### Inherited from

[Component](molecule.react.Component).[setState](molecule.react.Component#setstate)

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

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[subscribe](../interfaces/molecule.IEditorService#subscribe)

#### Inherited from

[Component](molecule.react.Component).[subscribe](molecule.react.Component#subscribe)

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

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[unsubscribe](../interfaces/molecule.IEditorService#unsubscribe)

#### Inherited from

[Component](molecule.react.Component).[unsubscribe](molecule.react.Component#unsubscribe)

#### Defined in

[src/common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L37)

---

### updateActions

▸ **updateActions**(`actions`, `groupId?`): `void`

Update actions in specific group

#### Parameters

| Name       | Type                                                                  |
| :--------- | :-------------------------------------------------------------------- |
| `actions`  | [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[] |
| `groupId?` | `UniqueId`                                                            |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[updateActions](../interfaces/molecule.IEditorService#updateactions)

#### Defined in

[src/services/workbench/editorService.ts:266](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L266)

---

### updateCurrentGroup

▸ **updateCurrentGroup**(`currentValues`): `void`

Update the current group

#### Parameters

| Name            | Type                                                                                   |
| :-------------- | :------------------------------------------------------------------------------------- |
| `currentValues` | `Partial`<[`IEditorGroup`](../interfaces/molecule.model.IEditorGroup)<`any`, `any`\>\> |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[updateCurrentGroup](../interfaces/molecule.IEditorService#updatecurrentgroup)

#### Defined in

[src/services/workbench/editorService.ts:574](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L574)

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

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[updateEditorOptions](../interfaces/molecule.IEditorService#updateeditoroptions)

#### Defined in

[src/services/workbench/editorService.ts:217](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L217)

---

### updateGroup

▸ **updateGroup**(`groupId`, `groupValues`): `void`

Update the specific group

#### Parameters

| Name          | Type                                                                                        |
| :------------ | :------------------------------------------------------------------------------------------ |
| `groupId`     | `UniqueId`                                                                                  |
| `groupValues` | `Omit`<[`IEditorGroup`](../interfaces/molecule.model.IEditorGroup)<`any`, `any`\>, `"id"`\> |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[updateGroup](../interfaces/molecule.IEditorService#updategroup)

#### Defined in

[src/services/workbench/editorService.ts:552](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L552)

---

### updateTab

▸ **updateTab**(`tab`, `groupId?`): [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<`BuiltInEditorTabDataType`\>

Update the specific tab, if the groupId provide, then update the tab of specific group

#### Parameters

| Name       | Type                                                                                 |
| :--------- | :----------------------------------------------------------------------------------- |
| `tab`      | [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<`BuiltInEditorTabDataType`\> |
| `groupId?` | `UniqueId`                                                                           |

#### Returns

[`IEditorTab`](../interfaces/molecule.model.IEditorTab)<`BuiltInEditorTabDataType`\>

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[updateTab](../interfaces/molecule.IEditorService#updatetab)

#### Defined in

[src/services/workbench/editorService.ts:305](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/editorService.ts#L305)
