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

[services/workbench/explorer/folderTreeService.ts:184](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L184)

## Properties

### builtinService

• `Private` `Readonly` **builtinService**: [`IBuiltinService`](../interfaces/molecule.IBuiltinService)

#### Defined in

[services/workbench/explorer/folderTreeService.ts:180](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L180)

---

### explorerService

• `Private` `Readonly` **explorerService**: [`IExplorerService`](../interfaces/molecule.IExplorerService)

#### Defined in

[services/workbench/explorer/folderTreeService.ts:179](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L179)

---

### fileContextMenu

• `Private` **fileContextMenu**: [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[] = `[]`

#### Defined in

[services/workbench/explorer/folderTreeService.ts:181](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L181)

---

### folderContextMenu

• `Private` **folderContextMenu**: [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[] = `[]`

#### Defined in

[services/workbench/explorer/folderTreeService.ts:182](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L182)

---

### state

• `Protected` **state**: [`IFolderTree`](../interfaces/molecule.model.IFolderTree)

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[state](../interfaces/molecule.IFolderTreeService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[services/workbench/explorer/folderTreeService.ts:178](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L178)

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

[services/workbench/explorer/folderTreeService.ts:380](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L380)

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

[services/workbench/explorer/folderTreeService.ts:315](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L315)

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

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[emit](../interfaces/molecule.IFolderTreeService#emit)

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

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[forceUpdate](../interfaces/molecule.IFolderTreeService#forceupdate)

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

#### Defined in

[react/component.ts:81](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L81)

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

[services/workbench/explorer/folderTreeService.ts:490](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L490)

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

[services/workbench/explorer/folderTreeService.ts:344](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L344)

---

### getExpandKeys

▸ **getExpandKeys**(): `UniqueId`[]

Get the expandKeys in folderTree

#### Returns

`UniqueId`[]

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[getExpandKeys](../interfaces/molecule.IFolderTreeService#getexpandkeys)

#### Defined in

[services/workbench/explorer/folderTreeService.ts:264](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L264)

---

### getFileContextMenu

▸ **getFileContextMenu**(): [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[]

Get the context menus for file

#### Returns

[`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[]

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[getFileContextMenu](../interfaces/molecule.IFolderTreeService#getfilecontextmenu)

#### Defined in

[services/workbench/explorer/folderTreeService.ts:239](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L239)

---

### getFolderContextMenu

▸ **getFolderContextMenu**(): [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[]

Get the context menus for folder

#### Returns

[`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[]

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[getFolderContextMenu](../interfaces/molecule.IFolderTreeService#getfoldercontextmenu)

#### Defined in

[services/workbench/explorer/folderTreeService.ts:256](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L256)

---

### getLoadedKeys

▸ **getLoadedKeys**(): `string`[]

Get the loadedKeys for folderTree

#### Returns

`string`[]

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[getLoadedKeys](../interfaces/molecule.IFolderTreeService#getloadedkeys)

#### Defined in

[services/workbench/explorer/folderTreeService.ts:275](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L275)

---

### getParentNode

▸ **getParentNode**(`id`): `null` \| [`IFolderTreeNodeProps`](../interfaces/molecule.model.IFolderTreeNodeProps)

get the current treeNode's parentNode

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `id` | `UniqueId` |

#### Returns

`null` \| [`IFolderTreeNodeProps`](../interfaces/molecule.model.IFolderTreeNodeProps)

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[getParentNode](../interfaces/molecule.IFolderTreeService#getparentnode)

#### Defined in

[services/workbench/explorer/folderTreeService.ts:243](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L243)

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

[services/workbench/explorer/folderTreeService.ts:365](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L365)

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

[services/workbench/explorer/folderTreeService.ts:303](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L303)

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

[services/workbench/explorer/folderTreeService.ts:338](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L338)

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

[react/component.ts:85](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L85)

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

[services/workbench/explorer/folderTreeService.ts:191](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L191)

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

[services/workbench/explorer/folderTreeService.ts:561](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L561)

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

[services/workbench/explorer/folderTreeService.ts:555](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L555)

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

[services/workbench/explorer/folderTreeService.ts:537](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L537)

---

### onExpandKeys

▸ **onExpandKeys**(`callback`): `void`

Callback for expanding tree node

#### Parameters

| Name       | Type                                   |
| :--------- | :------------------------------------- |
| `callback` | (`expandKeys`: `UniqueId`[]) => `void` |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onExpandKeys](../interfaces/molecule.IFolderTreeService#onexpandkeys)

#### Defined in

[services/workbench/explorer/folderTreeService.ts:579](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L579)

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

[services/workbench/explorer/folderTreeService.ts:570](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L570)

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

[services/workbench/explorer/folderTreeService.ts:525](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L525)

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

[services/workbench/explorer/folderTreeService.ts:521](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L521)

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

[services/workbench/explorer/folderTreeService.ts:546](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L546)

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

[services/workbench/explorer/folderTreeService.ts:533](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L533)

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

[services/workbench/explorer/folderTreeService.ts:529](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L529)

---

### onUpdateState

▸ **onUpdateState**(`listener`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                                                       |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `listener` | (`prevState`: [`IFolderTree`](../interfaces/molecule.model.IFolderTree), `nextState`: [`IFolderTree`](../interfaces/molecule.model.IFolderTree)) => `void` |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onUpdateState](../interfaces/molecule.IFolderTreeService#onupdatestate)

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

#### Defined in

[react/component.ts:73](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L73)

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

[services/workbench/explorer/folderTreeService.ts:436](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L436)

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

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[removeOnUpdateState](../interfaces/molecule.IFolderTreeService#removeonupdatestate)

#### Inherited from

[Component](molecule.react.Component).[removeOnUpdateState](molecule.react.Component#removeonupdatestate)

#### Defined in

[react/component.ts:77](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L77)

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

[react/component.ts:69](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L69)

---

### reset

▸ **reset**(): `void`

Reset the FolderTreeService state

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[reset](../interfaces/molecule.IFolderTreeService#reset)

#### Defined in

[services/workbench/explorer/folderTreeService.ts:227](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L227)

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

[services/workbench/explorer/folderTreeService.ts:501](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L501)

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

[services/workbench/explorer/folderTreeService.ts:286](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L286)

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

[services/workbench/explorer/folderTreeService.ts:515](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L515)

---

### setExpandKeys

▸ **setExpandKeys**(`expandKeys`): `void`

Set the expandKeys for folderTree

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `expandKeys` | `UniqueId`[] |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[setExpandKeys](../interfaces/molecule.IFolderTreeService#setexpandkeys)

#### Defined in

[services/workbench/explorer/folderTreeService.ts:268](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L268)

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

[services/workbench/explorer/folderTreeService.ts:252](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L252)

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

[services/workbench/explorer/folderTreeService.ts:260](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L260)

---

### setLoadedKeys

▸ **setLoadedKeys**(`loadedKeys`): `void`

Set the loadedKeys for folderTree

#### Parameters

| Name         | Type       |
| :----------- | :--------- |
| `loadedKeys` | `string`[] |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[setLoadedKeys](../interfaces/molecule.IFolderTreeService#setloadedkeys)

#### Defined in

[services/workbench/explorer/folderTreeService.ts:279](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L279)

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

[react/component.ts:56](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L56)

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

[services/workbench/explorer/folderTreeService.ts:195](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L195)

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

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[subscribe](../interfaces/molecule.IFolderTreeService#subscribe)

#### Inherited from

[Component](molecule.react.Component).[subscribe](molecule.react.Component#subscribe)

#### Defined in

[common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L11)

---

### toggleAutoSort

▸ **toggleAutoSort**(): `void`

Toggle whether to enable sorting, which is disabled by default.

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[toggleAutoSort](../interfaces/molecule.IFolderTreeService#toggleautosort)

#### Defined in

[services/workbench/explorer/folderTreeService.ts:583](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L583)

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

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[unsubscribe](../interfaces/molecule.IFolderTreeService#unsubscribe)

#### Inherited from

[Component](molecule.react.Component).[unsubscribe](molecule.react.Component#unsubscribe)

#### Defined in

[common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L37)

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

[services/workbench/explorer/folderTreeService.ts:462](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L462)
