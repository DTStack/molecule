---
id: 'molecule.FolderTreeService'
title: 'Class: FolderTreeService'
sidebar_label: 'FolderTreeService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).FolderTreeService

## Hierarchy

-   [`Component`](molecule.react.Component)<[`IFolderTree`](../interfaces/molecule.model.IFolderTree)\>

    ↳ **`FolderTreeService`**

## Implements

-   [`IFolderTreeService`](../interfaces/molecule.IFolderTreeService)

## Constructors

### constructor

• **new FolderTreeService**()

#### Overrides

[Component](molecule.react.Component).[constructor](molecule.react.Component#constructor)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:153](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L153)

## Properties

### builtinService

• `Private` `Readonly` **builtinService**: [`IBuiltinService`](../interfaces/molecule.IBuiltinService)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:149](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L149)

---

### explorerService

• `Private` `Readonly` **explorerService**: [`IExplorerService`](../interfaces/molecule.IExplorerService)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:148](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L148)

---

### fileContextMenu

• `Private` **fileContextMenu**: [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[] = `[]`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:150](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L150)

---

### folderContextMenu

• `Private` **folderContextMenu**: [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[] = `[]`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:151](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L151)

---

### state

• `Protected` **state**: [`IFolderTree`](../interfaces/molecule.model.IFolderTree)

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[state](../interfaces/molecule.IFolderTreeService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:147](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L147)

## Methods

### add

▸ **add**(`data`, `id?`): `void`

Add data into folder tree

#### Parameters

| Name   | Type                                                                        |
| :----- | :-------------------------------------------------------------------------- |
| `data` | [`IFolderTreeNodeProps`](../interfaces/molecule.model.IFolderTreeNodeProps) |
| `id?`  | `UniqueId`                                                                  |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[add](../interfaces/molecule.IFolderTreeService#add)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:316](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L316)

---

### addRootFolder

▸ `Private` **addRootFolder**(`folder`): `void`

#### Parameters

| Name     | Type                                                                        |
| :------- | :-------------------------------------------------------------------------- |
| `folder` | [`IFolderTreeNodeProps`](../interfaces/molecule.model.IFolderTreeNodeProps) |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:253](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L253)

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

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[count](../interfaces/molecule.IFolderTreeService#count)

#### Inherited from

[Component](molecule.react.Component).[count](molecule.react.Component#count)

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

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[emit](../interfaces/molecule.IFolderTreeService#emit)

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

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[forceUpdate](../interfaces/molecule.IFolderTreeService#forceupdate)

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:79](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L79)

---

### get

▸ **get**(`id`): `null` \| [`IFolderTreeNodeProps`](../interfaces/molecule.model.IFolderTreeNodeProps)

Get specific data in folder tree

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `id` | `UniqueId` |

#### Returns

`null` \| [`IFolderTreeNodeProps`](../interfaces/molecule.model.IFolderTreeNodeProps)

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[get](../interfaces/molecule.IFolderTreeService#get)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:414](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L414)

---

### getCurrentRootFolderInfo

▸ `Private` **getCurrentRootFolderInfo**(`id`): { `currentRootFolder`: `null` = null; `index`: `number` = -1; `tree`: `null` = null } \| { `currentRootFolder`: [`IFolderTreeNodeProps`](../interfaces/molecule.model.IFolderTreeNodeProps) ; `index`: `number` ; `tree`: `TreeViewUtil`<[`IFolderTreeNodeProps`](../interfaces/molecule.model.IFolderTreeNodeProps)\> }

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `id` | `UniqueId` |

#### Returns

{ `currentRootFolder`: `null` = null; `index`: `number` = -1; `tree`: `null` = null } \| { `currentRootFolder`: [`IFolderTreeNodeProps`](../interfaces/molecule.model.IFolderTreeNodeProps) ; `index`: `number` ; `tree`: `TreeViewUtil`<[`IFolderTreeNodeProps`](../interfaces/molecule.model.IFolderTreeNodeProps)\> }

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:280](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L280)

---

### getFileContextMenu

▸ **getFileContextMenu**(): [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[]

Get the context menus for file

#### Returns

[`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[]

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[getFileContextMenu](../interfaces/molecule.IFolderTreeService#getfilecontextmenu)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:208](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L208)

---

### getFolderContextMenu

▸ **getFolderContextMenu**(): [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[]

Get the context menus for folder

#### Returns

[`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[]

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[getFolderContextMenu](../interfaces/molecule.IFolderTreeService#getfoldercontextmenu)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:216](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L216)

---

### getPosOfType

▸ `Private` **getPosOfType**(`type`, `folderList`): `number`

#### Parameters

| Name         | Type                                                                          |
| :----------- | :---------------------------------------------------------------------------- |
| `type`       | `"File"` \| `"Folder"` \| `"RootFolder"`                                      |
| `folderList` | [`IFolderTreeNodeProps`](../interfaces/molecule.model.IFolderTreeNodeProps)[] |

#### Returns

`number`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:301](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L301)

---

### getRootFolderById

▸ `Private` **getRootFolderById**(`id`): `null` \| [`IFolderTreeNodeProps`](../interfaces/molecule.model.IFolderTreeNodeProps)

Returns the node of root folder in folderTree

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `id` | `UniqueId` |

#### Returns

`null` \| [`IFolderTreeNodeProps`](../interfaces/molecule.model.IFolderTreeNodeProps)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:241](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L241)

---

### getRootFolderIndex

▸ `Private` **getRootFolderIndex**(`id`): `number`

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `id` | `UniqueId` |

#### Returns

`number`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:274](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L274)

---

### getState

▸ **getState**(): [`IFolderTree`](../interfaces/molecule.model.IFolderTree)

Get the Component state

#### Returns

[`IFolderTree`](../interfaces/molecule.model.IFolderTree)

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[getState](../interfaces/molecule.IFolderTreeService#getstate)

#### Inherited from

[Component](molecule.react.Component).[getState](molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L83)

---

### isHiddenFile

▸ `Private` **isHiddenFile**(`file`): `boolean`

#### Parameters

| Name   | Type                                                                        |
| :----- | :-------------------------------------------------------------------------- |
| `file` | [`IFolderTreeNodeProps`](../interfaces/molecule.model.IFolderTreeNodeProps) |

#### Returns

`boolean`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:160](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L160)

---

### onContextMenu

▸ **onContextMenu**(`callback`): `void`

Listen to the click event about the context menu except for built-in menus

#### Parameters

| Name       | Type                                                                                                                                                                                     |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`contextMenu`: [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps), `treeNode?`: [`IFolderTreeNodeProps`](../interfaces/molecule.model.IFolderTreeNodeProps)) => `void` |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onContextMenu](../interfaces/molecule.IFolderTreeService#oncontextmenu)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:485](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L485)

---

### onCreate

▸ **onCreate**(`callback`): `void`

Listen to create a node for folder tree

#### Parameters

| Name       | Type                                                                                |
| :--------- | :---------------------------------------------------------------------------------- |
| `callback` | (`type`: `"File"` \| `"Folder"` \| `"RootFolder"`, `nodeId?`: `UniqueId`) => `void` |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onCreate](../interfaces/molecule.IFolderTreeService#oncreate)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:479](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L479)

---

### onDropTree

▸ **onDropTree**(`callback`): `void`

Listen to drop event

#### Parameters

| Name       | Type                                                                                                                                                                                     |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`source`: [`IFolderTreeNodeProps`](../interfaces/molecule.model.IFolderTreeNodeProps), `target`: [`IFolderTreeNodeProps`](../interfaces/molecule.model.IFolderTreeNodeProps)) => `void` |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onDropTree](../interfaces/molecule.IFolderTreeService#ondroptree)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:461](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L461)

---

### onLoadData

▸ **onLoadData**(`callback`): `void`

Callback for load folder tree data

#### Parameters

| Name       | Type                                                                                                                                                                                                                 |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`treeNode`: [`IFolderTreeNodeProps`](../interfaces/molecule.model.IFolderTreeNodeProps), `callback`: (`treeNode`: [`IFolderTreeNodeProps`](../interfaces/molecule.model.IFolderTreeNodeProps)) => `void`) => `void` |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onLoadData](../interfaces/molecule.IFolderTreeService#onloaddata)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:494](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L494)

---

### onRemove

▸ **onRemove**(`callback`): `void`

Listen to remove a node

#### Parameters

| Name       | Type                         |
| :--------- | :--------------------------- |
| `callback` | (`id`: `UniqueId`) => `void` |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onRemove](../interfaces/molecule.IFolderTreeService#onremove)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:449](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L449)

---

### onRename

▸ **onRename**(`callback`): `void`

Listen to event about clicking rename button

#### Parameters

| Name       | Type                         |
| :--------- | :--------------------------- |
| `callback` | (`id`: `UniqueId`) => `void` |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onRename](../interfaces/molecule.IFolderTreeService#onrename)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:445](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L445)

---

### onRightClick

▸ **onRightClick**(`callback`): `void`

Listen to right click event

#### Parameters

| Name       | Type                                                                                                                                                                                |
| :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`treeData`: [`IFolderTreeNodeProps`](../interfaces/molecule.model.IFolderTreeNodeProps), `menus`: [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[]) => `void` |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onRightClick](../interfaces/molecule.IFolderTreeService#onrightclick)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:470](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L470)

---

### onSelectFile

▸ **onSelectFile**(`callback`): `void`

Listen to select a file

#### Parameters

| Name       | Type                                                                                            |
| :--------- | :---------------------------------------------------------------------------------------------- |
| `callback` | (`file`: [`IFolderTreeNodeProps`](../interfaces/molecule.model.IFolderTreeNodeProps)) => `void` |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onSelectFile](../interfaces/molecule.IFolderTreeService#onselectfile)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:457](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L457)

---

### onUpdateFileName

▸ **onUpdateFileName**(`callback`): `void`

Listen to update file or folder name

#### Parameters

| Name       | Type                                                                                            |
| :--------- | :---------------------------------------------------------------------------------------------- |
| `callback` | (`file`: [`IFolderTreeNodeProps`](../interfaces/molecule.model.IFolderTreeNodeProps)) => `void` |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onUpdateFileName](../interfaces/molecule.IFolderTreeService#onupdatefilename)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:453](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L453)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                                                       |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`IFolderTree`](../interfaces/molecule.model.IFolderTree), `nextState`: [`IFolderTree`](../interfaces/molecule.model.IFolderTree)) => `void` |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onUpdateState](../interfaces/molecule.IFolderTreeService#onupdatestate)

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:71](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L71)

---

### remove

▸ **remove**(`id`): `void`

Remove specific data in folder tree

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `id` | `UniqueId` |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[remove](../interfaces/molecule.IFolderTreeService#remove)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:369](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L369)

---

### removeOnUpdateState

▸ **removeOnUpdateState**(): `void`

Remove the Component update event listening

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[removeOnUpdateState](../interfaces/molecule.IFolderTreeService#removeonupdatestate)

#### Inherited from

[Component](molecule.react.Component).[removeOnUpdateState](molecule.react.Component#removeonupdatestate)

#### Defined in

[src/react/component.ts:75](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L75)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type                                                      |
| :----------- | :-------------------------------------------------------- |
| `nextState?` | [`IFolderTree`](../interfaces/molecule.model.IFolderTree) |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[render](../interfaces/molecule.IFolderTreeService#render)

#### Inherited from

[Component](molecule.react.Component).[render](molecule.react.Component#render)

#### Defined in

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L67)

---

### reset

▸ **reset**(): `void`

Reset the FolderTreeService state

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[reset](../interfaces/molecule.IFolderTreeService#reset)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:196](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L196)

---

### setActive

▸ **setActive**(`id?`): `void`

Active specific node,
or unactive any node in folder tree

#### Parameters

| Name  | Type       |
| :---- | :--------- |
| `id?` | `UniqueId` |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[setActive](../interfaces/molecule.IFolderTreeService#setactive)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:425](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L425)

---

### setCurrentFolderLocation

▸ `Private` **setCurrentFolderLocation**(`data`, `id`): `void`

#### Parameters

| Name   | Type                                                                        |
| :----- | :-------------------------------------------------------------------------- |
| `data` | [`IFolderTreeNodeProps`](../interfaces/molecule.model.IFolderTreeNodeProps) |
| `id`   | `UniqueId`                                                                  |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:224](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L224)

---

### setEntry

▸ **setEntry**(`entry`): `void`

Set a entry page for folder tree

#### Parameters

| Name    | Type        |
| :------ | :---------- |
| `entry` | `ReactNode` |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[setEntry](../interfaces/molecule.IFolderTreeService#setentry)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:439](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L439)

---

### setFileContextMenu

▸ **setFileContextMenu**(`menus`): `void`

Set the context menus for file

#### Parameters

| Name    | Type                                                                  |
| :------ | :-------------------------------------------------------------------- |
| `menus` | [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[] |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[setFileContextMenu](../interfaces/molecule.IFolderTreeService#setfilecontextmenu)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:212](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L212)

---

### setFolderContextMenu

▸ **setFolderContextMenu**(`menus`): `void`

Set the context menus for folder

#### Parameters

| Name    | Type                                                                  |
| :------ | :-------------------------------------------------------------------- |
| `menus` | [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[] |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[setFolderContextMenu](../interfaces/molecule.IFolderTreeService#setfoldercontextmenu)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:220](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L220)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                                                                       | Description                |
| :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`IFolderTree`](../interfaces/molecule.model.IFolderTree)\>                                                                                      | update target state values |
| `callback?` | (`prevState`: [`IFolderTree`](../interfaces/molecule.model.IFolderTree), `nextState`: [`IFolderTree`](../interfaces/molecule.model.IFolderTree)) => `void` | -                          |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[setState](../interfaces/molecule.IFolderTreeService#setstate)

#### Inherited from

[Component](molecule.react.Component).[setState](molecule.react.Component#setstate)

#### Defined in

[src/react/component.ts:54](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L54)

---

### sortTree

▸ `Private` **sortTree**(`tree`): `void`

#### Parameters

| Name   | Type                                                                          |
| :----- | :---------------------------------------------------------------------------- |
| `tree` | [`IFolderTreeNodeProps`](../interfaces/molecule.model.IFolderTreeNodeProps)[] |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:164](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L164)

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

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[subscribe](../interfaces/molecule.IFolderTreeService#subscribe)

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

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[unsubscribe](../interfaces/molecule.IFolderTreeService#unsubscribe)

#### Inherited from

[Component](molecule.react.Component).[unsubscribe](molecule.react.Component#unsubscribe)

#### Defined in

[src/common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L37)

---

### update

▸ **update**(`data`): `void`

Update specific data in folder tree

#### Parameters

| Name   | Type                                                                        |
| :----- | :-------------------------------------------------------------------------- |
| `data` | [`IFolderTreeNodeProps`](../interfaces/molecule.model.IFolderTreeNodeProps) |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[update](../interfaces/molecule.IFolderTreeService#update)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:389](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L389)
