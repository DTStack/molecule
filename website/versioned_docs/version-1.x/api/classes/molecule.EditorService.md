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

[services/workbench/editorService.ts:220](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L220)

## Properties

### defaultActions

• `Protected` **defaultActions**: [`IEditorActionsProps`](../interfaces/molecule.model.IEditorActionsProps)[] = `[]`

#### Defined in

[services/workbench/editorService.ts:215](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L215)

---

### defaultMenus

• `Protected` **defaultMenus**: [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[] = `[]`

#### Defined in

[services/workbench/editorService.ts:216](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L216)

---

### explorerService

• `Protected` **explorerService**: [`IExplorerService`](../interfaces/molecule.IExplorerService)

#### Defined in

[services/workbench/editorService.ts:217](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L217)

---

### layoutService

• `Protected` **layoutService**: [`ILayoutService`](../interfaces/molecule.ILayoutService)

#### Defined in

[services/workbench/editorService.ts:218](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L218)

---

### state

• `Protected` **state**: [`IEditor`](../interfaces/molecule.model.IEditor)

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[state](../interfaces/molecule.IEditorService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[services/workbench/editorService.ts:214](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L214)

## Accessors

### editorInstance

• `get` **editorInstance**(): `any`

The instance of MonacoEditor

#### Returns

`any`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[editorInstance](../interfaces/molecule.IEditorService#editorinstance)

#### Defined in

[services/workbench/editorService.ts:311](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L311)

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

[services/workbench/editorService.ts:708](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L708)

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

[services/workbench/editorService.ts:667](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L667)

---

### closeOther

▸ **closeOther**(`tab`, `groupId`): `void`

Close other opened tabs in Editor Group

#### Parameters

| Name      | Type                                                                                                                                          |
| :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| `tab`     | [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<[`BuiltInEditorTabDataType`](../interfaces/molecule.model.BuiltInEditorTabDataType)\> |
| `groupId` | `UniqueId`                                                                                                                                    |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[closeOther](../interfaces/molecule.IEditorService#closeother)

#### Defined in

[services/workbench/editorService.ts:444](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L444)

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

[services/workbench/editorService.ts:378](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L378)

---

### closeToLeft

▸ **closeToLeft**(`tab`, `groupId`): `void`

Close the left opened Tabs in Editor Group

#### Parameters

| Name      | Type                                                                                                                                          |
| :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| `tab`     | [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<[`BuiltInEditorTabDataType`](../interfaces/molecule.model.BuiltInEditorTabDataType)\> |
| `groupId` | `UniqueId`                                                                                                                                    |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[closeToLeft](../interfaces/molecule.IEditorService#closetoleft)

#### Defined in

[services/workbench/editorService.ts:508](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L508)

---

### closeToRight

▸ **closeToRight**(`tab`, `groupId`): `void`

Close the right opened tabs in Editor Group

#### Parameters

| Name      | Type                                                                                                                                          |
| :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| `tab`     | [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<[`BuiltInEditorTabDataType`](../interfaces/molecule.model.BuiltInEditorTabDataType)\> |
| `groupId` | `UniqueId`                                                                                                                                    |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[closeToRight](../interfaces/molecule.IEditorService#closetoright)

#### Defined in

[services/workbench/editorService.ts:476](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L476)

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

[common/event/eventBus.ts:28](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L28)

---

### disposeModel

▸ `Private` **disposeModel**(`tabs`): `void`

#### Parameters

| Name   | Type                                                                                                                                                                                                                                                                                             |
| :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tabs` | [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<[`BuiltInEditorTabDataType`](../interfaces/molecule.model.BuiltInEditorTabDataType)\> \| [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<[`BuiltInEditorTabDataType`](../interfaces/molecule.model.BuiltInEditorTabDataType)\>[] |

#### Returns

`void`

#### Defined in

[services/workbench/editorService.ts:247](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L247)

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

[common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L20)

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

[react/component.ts:81](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L81)

---

### getDefaultActions

▸ **getDefaultActions**(): [`IEditorActionsProps`](../interfaces/molecule.model.IEditorActionsProps)[]

Get the default group actions

#### Returns

[`IEditorActionsProps`](../interfaces/molecule.model.IEditorActionsProps)[]

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[getDefaultActions](../interfaces/molecule.IEditorService#getdefaultactions)

#### Defined in

[services/workbench/editorService.ts:239](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L239)

---

### getDefaultMenus

▸ **getDefaultMenus**(): [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[]

Get the default group menus

#### Returns

[`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[]

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[getDefaultMenus](../interfaces/molecule.IEditorService#getdefaultmenus)

#### Defined in

[services/workbench/editorService.ts:243](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L243)

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

[services/workbench/editorService.ts:540](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L540)

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

[services/workbench/editorService.ts:550](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L550)

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

[services/workbench/editorService.ts:545](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L545)

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

[react/component.ts:85](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L85)

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

[services/workbench/editorService.ts:300](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L300)

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

[services/workbench/editorService.ts:254](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L254)

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

[services/workbench/editorService.ts:775](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L775)

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

[services/workbench/editorService.ts:749](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L749)

---

### onCloseOther

▸ **onCloseOther**(`callback`): `void`

Listen to the other tabs close event

#### Parameters

| Name       | Type                                                                                                                                                                                         |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`tabItem`: [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<[`BuiltInEditorTabDataType`](../interfaces/molecule.model.BuiltInEditorTabDataType)\>, `groupId?`: `UniqueId`) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[onCloseOther](../interfaces/molecule.IEditorService#oncloseother)

#### Defined in

[services/workbench/editorService.ts:757](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L757)

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

[services/workbench/editorService.ts:753](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L753)

---

### onCloseToLeft

▸ **onCloseToLeft**(`callback`): `void`

Listen to the left tabs close event

#### Parameters

| Name       | Type                                                                                                                                                                                         |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`tabItem`: [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<[`BuiltInEditorTabDataType`](../interfaces/molecule.model.BuiltInEditorTabDataType)\>, `groupId?`: `UniqueId`) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[onCloseToLeft](../interfaces/molecule.IEditorService#onclosetoleft)

#### Defined in

[services/workbench/editorService.ts:763](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L763)

---

### onCloseToRight

▸ **onCloseToRight**(`callback`): `void`

Listen to the right tabs close event

#### Parameters

| Name       | Type                                                                                                                                                                                         |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`tabItem`: [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<[`BuiltInEditorTabDataType`](../interfaces/molecule.model.BuiltInEditorTabDataType)\>, `groupId?`: `UniqueId`) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[onCloseToRight](../interfaces/molecule.IEditorService#onclosetoright)

#### Defined in

[services/workbench/editorService.ts:769](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L769)

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

[services/workbench/editorService.ts:737](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L737)

---

### onOpenTab

▸ **onOpenTab**(`callback`): `void`

Listen to the tab opening event

#### Parameters

| Name       | Type                                                                                                                                                             |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`tab`: [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<[`BuiltInEditorTabDataType`](../interfaces/molecule.model.BuiltInEditorTabDataType)\>) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[onOpenTab](../interfaces/molecule.IEditorService#onopentab)

#### Defined in

[services/workbench/editorService.ts:663](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L663)

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

[services/workbench/editorService.ts:743](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L743)

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

[IEditorService](../interfaces/molecule.IEditorService).[onUpdateState](../interfaces/molecule.IEditorService#onupdatestate)

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

#### Defined in

[react/component.ts:73](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L73)

---

### onUpdateTab

▸ **onUpdateTab**(`callback`): `void`

Listen to the Editor tab changed event

#### Parameters

| Name       | Type                                                                                                                                                             |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`tab`: [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<[`BuiltInEditorTabDataType`](../interfaces/molecule.model.BuiltInEditorTabDataType)\>) => `void` |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[onUpdateTab](../interfaces/molecule.IEditorService#onupdatetab)

#### Defined in

[services/workbench/editorService.ts:733](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L733)

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

[services/workbench/editorService.ts:617](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L617)

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

[IEditorService](../interfaces/molecule.IEditorService).[removeOnUpdateState](../interfaces/molecule.IEditorService#removeonupdatestate)

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

[IEditorService](../interfaces/molecule.IEditorService).[render](../interfaces/molecule.IEditorService#render)

#### Inherited from

[Component](molecule.react.Component).[render](molecule.react.Component#render)

#### Defined in

[react/component.ts:69](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L69)

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

[services/workbench/editorService.ts:563](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L563)

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

[services/workbench/editorService.ts:262](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L262)

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

[services/workbench/editorService.ts:266](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L266)

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

[services/workbench/editorService.ts:270](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L270)

---

### setGroupEditorValue

▸ **setGroupEditorValue**(`group`, `value`): `void`

Updates the editor content for a specific group

#### Parameters

| Name    | Type                                                                       |
| :------ | :------------------------------------------------------------------------- |
| `group` | [`IEditorGroup`](../interfaces/molecule.model.IEditorGroup)<`any`, `any`\> |
| `value` | `string`                                                                   |

#### Returns

`void`

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[setGroupEditorValue](../interfaces/molecule.IEditorService#setgroupeditorvalue)

#### Defined in

[services/workbench/editorService.ts:368](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L368)

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

[IEditorService](../interfaces/molecule.IEditorService).[subscribe](../interfaces/molecule.IEditorService#subscribe)

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

[IEditorService](../interfaces/molecule.IEditorService).[unsubscribe](../interfaces/molecule.IEditorService#unsubscribe)

#### Inherited from

[Component](molecule.react.Component).[unsubscribe](molecule.react.Component#unsubscribe)

#### Defined in

[common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L37)

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

[services/workbench/editorService.ts:276](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L276)

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

[services/workbench/editorService.ts:608](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L608)

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

[services/workbench/editorService.ts:227](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L227)

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

[services/workbench/editorService.ts:586](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L586)

---

### updateTab

▸ **updateTab**(`tab`, `groupId?`): [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<[`BuiltInEditorTabDataType`](../interfaces/molecule.model.BuiltInEditorTabDataType)\>

Update the specific tab, if the groupId provide, then update the tab of specific group

#### Parameters

| Name       | Type                                                                                                                                          |
| :--------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| `tab`      | [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<[`BuiltInEditorTabDataType`](../interfaces/molecule.model.BuiltInEditorTabDataType)\> |
| `groupId?` | `UniqueId`                                                                                                                                    |

#### Returns

[`IEditorTab`](../interfaces/molecule.model.IEditorTab)<[`BuiltInEditorTabDataType`](../interfaces/molecule.model.BuiltInEditorTabDataType)\>

#### Implementation of

[IEditorService](../interfaces/molecule.IEditorService).[updateTab](../interfaces/molecule.IEditorService#updatetab)

#### Defined in

[services/workbench/editorService.ts:315](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/editorService.ts#L315)
