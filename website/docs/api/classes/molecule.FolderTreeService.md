---
id: 'molecule.FolderTreeService'
title: 'Class: FolderTreeService'
sidebar_label: 'FolderTreeService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).FolderTreeService

## Hierarchy

-   [`Component`](molecule.react.Component)<`IFolderTree`\>

    ↳ **`FolderTreeService`**

## Implements

-   [`IFolderTreeService`](../interfaces/molecule.IFolderTreeService)

## Constructors

### constructor

• **new FolderTreeService**()

#### Overrides

[Component](molecule.react.Component).[constructor](molecule.react.Component#constructor)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:143](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L143)

## Properties

### explorerService

• `Private` `Readonly` **explorerService**: [`IExplorerService`](../interfaces/molecule.IExplorerService)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:139](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L139)

---

### fileContextMenu

• `Private` **fileContextMenu**: [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[]

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:140](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L140)

---

### folderContextMenu

• `Private` **folderContextMenu**: [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[]

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:141](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L141)

---

### state

• `Protected` **state**: `IFolderTree`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[state](../interfaces/molecule.IFolderTreeService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:138](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L138)

## Methods

### add

▸ **add**(`data`, `id?`): `void`

Add data into folder tree

#### Parameters

| Name   | Type                                                                        |
| :----- | :-------------------------------------------------------------------------- |
| `data` | [`ITreeNodeItemProps`](../interfaces/molecule.component.ITreeNodeItemProps) |
| `id?`  | `number`                                                                    |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[add](../interfaces/molecule.IFolderTreeService#add)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:235](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L235)

---

### addRootFolder

▸ `Private` **addRootFolder**(`folder`): `void`

#### Parameters

| Name     | Type                                                                        |
| :------- | :-------------------------------------------------------------------------- |
| `folder` | [`ITreeNodeItemProps`](../interfaces/molecule.component.ITreeNodeItemProps) |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:194](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L194)

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

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[forceUpdate](../interfaces/molecule.IFolderTreeService#forceupdate)

#### Inherited from

[Component](molecule.react.Component).[forceUpdate](molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:58](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L58)

---

### get

▸ **get**(`id`): `null` \| [`ITreeNodeItemProps`](../interfaces/molecule.component.ITreeNodeItemProps)

Get specific data in folder tree

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `number` |

#### Returns

`null` \| [`ITreeNodeItemProps`](../interfaces/molecule.component.ITreeNodeItemProps)

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[get](../interfaces/molecule.IFolderTreeService#get)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:307](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L307)

---

### getCurrentRootFolderInfo

▸ `Private` **getCurrentRootFolderInfo**(`id`): `Object`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `number` |

#### Returns

`Object`

| Name                | Type                                                                                         |
| :------------------ | :------------------------------------------------------------------------------------------- |
| `currentRootFolder` | [`ITreeNodeItemProps`](../interfaces/molecule.component.ITreeNodeItemProps)                  |
| `index`             | `number`                                                                                     |
| `tree`              | `TreeViewUtil`<[`ITreeNodeItemProps`](../interfaces/molecule.component.ITreeNodeItemProps)\> |

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:217](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L217)

---

### getFileContextMenu

▸ **getFileContextMenu**(): [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[]

Get the context menus for file

#### Returns

[`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[]

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[getFileContextMenu](../interfaces/molecule.IFolderTreeService#getfilecontextmenu)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:153](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L153)

---

### getFolderContextMenu

▸ **getFolderContextMenu**(): [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[]

Get the context menus for folder

#### Returns

[`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[]

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[getFolderContextMenu](../interfaces/molecule.IFolderTreeService#getfoldercontextmenu)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:161](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L161)

---

### getRootFolderById

▸ `Private` **getRootFolderById**(`id`): [`ITreeNodeItemProps`](../interfaces/molecule.component.ITreeNodeItemProps)

Returns the node of root folder in folderTree

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `number` |

#### Returns

[`ITreeNodeItemProps`](../interfaces/molecule.component.ITreeNodeItemProps)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:185](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L185)

---

### getRootFolderIndex

▸ `Private` **getRootFolderIndex**(`id`): `number`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `number` |

#### Returns

`number`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:211](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L211)

---

### getState

▸ **getState**(): `IFolderTree`

#### Returns

`IFolderTree`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[getState](../interfaces/molecule.IFolderTreeService#getstate)

#### Inherited from

[Component](molecule.react.Component).[getState](molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:62](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L62)

---

### onContextMenu

▸ **onContextMenu**(`callback`): `void`

Listen to the click event about the context menu except for built-in menus

#### Parameters

| Name       | Type                                                                                                                                                                                     |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`contextMenu`: [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps), `treeNode?`: [`ITreeNodeItemProps`](../interfaces/molecule.component.ITreeNodeItemProps)) => `void` |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onContextMenu](../interfaces/molecule.IFolderTreeService#oncontextmenu)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:369](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L369)

---

### onCreate

▸ **onCreate**(`callback`): `void`

Listen to create a node for folder tree

#### Parameters

| Name       | Type                                                                              |
| :--------- | :-------------------------------------------------------------------------------- |
| `callback` | (`type`: `"File"` \| `"Folder"` \| `"RootFolder"`, `nodeId?`: `number`) => `void` |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onCreate](../interfaces/molecule.IFolderTreeService#oncreate)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:365](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L365)

---

### onDropTree

▸ **onDropTree**(`treeData`): `void`

Listen to drop event

#### Parameters

| Name       | Type                                                                          |
| :--------- | :---------------------------------------------------------------------------- |
| `treeData` | [`ITreeNodeItemProps`](../interfaces/molecule.component.ITreeNodeItemProps)[] |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onDropTree](../interfaces/molecule.IFolderTreeService#ondroptree)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:348](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L348)

---

### onEvent

▸ **onEvent**(`name`, `callback`): `void`

Subscribe the component event

#### Parameters

| Name       | Type  |
| :--------- | :---- |
| `name`     | `any` |
| `callback` | `any` |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onEvent](../interfaces/molecule.IFolderTreeService#onevent)

#### Inherited from

[Component](molecule.react.Component).[onEvent](molecule.react.Component#onevent)

#### Defined in

[src/react/component.ts:66](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L66)

---

### onLoadData

▸ **onLoadData**(`callback`): `void`

Callback for load folder tree data

#### Parameters

| Name       | Type                                    |
| :--------- | :-------------------------------------- |
| `callback` | (`treeNode`: `LoadEventData`) => `void` |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onLoadData](../interfaces/molecule.IFolderTreeService#onloaddata)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:378](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L378)

---

### onRemove

▸ **onRemove**(`callback`): `void`

Listen to remove a node

#### Parameters

| Name       | Type                       |
| :--------- | :------------------------- |
| `callback` | (`id`: `number`) => `void` |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onRemove](../interfaces/molecule.IFolderTreeService#onremove)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:336](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L336)

---

### onRename

▸ **onRename**(`callback`): `void`

Listen to event about clicking rename button

#### Parameters

| Name       | Type                       |
| :--------- | :------------------------- |
| `callback` | (`id`: `number`) => `void` |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onRename](../interfaces/molecule.IFolderTreeService#onrename)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:332](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L332)

---

### onRightClick

▸ **onRightClick**(`callback`): `void`

Listen to right click event

#### Parameters

| Name       | Type                                                                                                                                                                                |
| :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`treeData`: [`ITreeNodeItemProps`](../interfaces/molecule.component.ITreeNodeItemProps), `menus`: [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[]) => `void` |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onRightClick](../interfaces/molecule.IFolderTreeService#onrightclick)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:356](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L356)

---

### onSelectFile

▸ **onSelectFile**(`callback`): `void`

Listen to select a file

#### Parameters

| Name       | Type                                                                                            |
| :--------- | :---------------------------------------------------------------------------------------------- |
| `callback` | (`file`: [`ITreeNodeItemProps`](../interfaces/molecule.component.ITreeNodeItemProps)) => `void` |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onSelectFile](../interfaces/molecule.IFolderTreeService#onselectfile)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:344](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L344)

---

### onUpdateFileName

▸ **onUpdateFileName**(`callback`): `void`

Listen to update file or folder name

#### Parameters

| Name       | Type                                                                                            |
| :--------- | :---------------------------------------------------------------------------------------------- |
| `callback` | (`file`: [`ITreeNodeItemProps`](../interfaces/molecule.component.ITreeNodeItemProps)) => `void` |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onUpdateFileName](../interfaces/molecule.IFolderTreeService#onupdatefilename)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:340](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L340)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

#### Parameters

| Name       | Type                                                               |
| :--------- | :----------------------------------------------------------------- |
| `callback` | (`prevState`: `IFolderTree`, `nextState`: `IFolderTree`) => `void` |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onUpdateState](../interfaces/molecule.IFolderTreeService#onupdatestate)

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:54](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L54)

---

### remove

▸ **remove**(`id`): `void`

Remove specific data in folder tree

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `number` |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[remove](../interfaces/molecule.IFolderTreeService#remove)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:277](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L277)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type          |
| :----------- | :------------ |
| `nextState?` | `IFolderTree` |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[render](../interfaces/molecule.IFolderTreeService#render)

#### Inherited from

[Component](molecule.react.Component).[render](molecule.react.Component#render)

#### Defined in

[src/react/component.ts:50](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L50)

---

### reset

▸ **reset**(): `void`

Reset the FolderTreeService state

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[reset](../interfaces/molecule.IFolderTreeService#reset)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:149](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L149)

---

### setActive

▸ **setActive**(`id?`): `void`

Active specific node,
or unactive any node in folder tree

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `id?` | `number` |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[setActive](../interfaces/molecule.IFolderTreeService#setactive)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:315](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L315)

---

### setCurrentFolderLocation

▸ `Private` **setCurrentFolderLocation**(`data`, `id`): `void`

#### Parameters

| Name   | Type                                                                        |
| :----- | :-------------------------------------------------------------------------- |
| `data` | [`ITreeNodeItemProps`](../interfaces/molecule.component.ITreeNodeItemProps) |
| `id`   | `number`                                                                    |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:169](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L169)

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

[src/services/workbench/explorer/folderTreeService.ts:326](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L326)

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

[src/services/workbench/explorer/folderTreeService.ts:157](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L157)

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

[src/services/workbench/explorer/folderTreeService.ts:165](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L165)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                               | Description                |
| :---------- | :----------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<`IFolderTree`\>                                          | update target state values |
| `callback?` | (`prevState`: `IFolderTree`, `nextState`: `IFolderTree`) => `void` | -                          |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[setState](../interfaces/molecule.IFolderTreeService#setstate)

#### Inherited from

[Component](molecule.react.Component).[setState](molecule.react.Component#setstate)

#### Defined in

[src/react/component.ts:37](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L37)

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

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventBus.ts#L11)

---

### update

▸ **update**(`data`): `void`

Update specific data in folder tree

#### Parameters

| Name   | Type                                                                        |
| :----- | :-------------------------------------------------------------------------- |
| `data` | [`ITreeNodeItemProps`](../interfaces/molecule.component.ITreeNodeItemProps) |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[update](../interfaces/molecule.IFolderTreeService#update)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:291](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L291)
