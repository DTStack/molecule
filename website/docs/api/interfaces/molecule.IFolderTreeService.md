---
id: 'molecule.IFolderTreeService'
title: 'Interface: IFolderTreeService'
sidebar_label: 'IFolderTreeService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IFolderTreeService

## Hierarchy

-   [`Component`](../classes/molecule.react.Component)<`IFolderTree`\>

    ↳ **`IFolderTreeService`**

## Implemented by

-   [`FolderTreeService`](../classes/molecule.FolderTreeService)

## Properties

### state

• `Protected` `Abstract` **state**: `IFolderTree`

#### Inherited from

[Component](../classes/molecule.react.Component).[state](../classes/molecule.react.Component#state)

#### Defined in

[src/react/component.ts:25](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L25)

## Methods

### add

▸ **add**(`data`, `id?`): `void`

Add data into folder tree

#### Parameters

| Name   | Type                                                          | Description                                     |
| :----- | :------------------------------------------------------------ | :---------------------------------------------- |
| `data` | [`ITreeNodeItemProps`](molecule.component.ITreeNodeItemProps) |                                                 |
| `id?`  | `number`                                                      | Except adding a root folder, the id is required |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:32](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L32)

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

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[forceUpdate](../classes/molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:58](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L58)

---

### get

▸ **get**(`id`): `null` \| [`ITreeNodeItemProps`](molecule.component.ITreeNodeItemProps)

Get specific data in folder tree

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `number` |

#### Returns

`null` \| [`ITreeNodeItemProps`](molecule.component.ITreeNodeItemProps)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:47](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L47)

---

### getFileContextMenu

▸ **getFileContextMenu**(): [`IMenuItemProps`](molecule.component.IMenuItemProps)[]

Get the context menus for file

#### Returns

[`IMenuItemProps`](molecule.component.IMenuItemProps)[]

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:51](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L51)

---

### getFolderContextMenu

▸ **getFolderContextMenu**(): [`IMenuItemProps`](molecule.component.IMenuItemProps)[]

Get the context menus for folder

#### Returns

[`IMenuItemProps`](molecule.component.IMenuItemProps)[]

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:55](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L55)

---

### getState

▸ **getState**(): `IFolderTree`

#### Returns

`IFolderTree`

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:62](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L62)

---

### onContextMenu

▸ **onContextMenu**(`callback`): `void`

Listen to the click event about the context menu except for built-in menus

#### Parameters

| Name       | Type                                                                                                                                                         |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`contextMenu`: [`IMenuItemProps`](molecule.component.IMenuItemProps), `treeNode?`: [`ITreeNodeItemProps`](molecule.component.ITreeNodeItemProps)) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:121](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L121)

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

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:116](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L116)

---

### onDropTree

▸ **onDropTree**(`treeData`): `void`

Listen to drop event

#### Parameters

| Name       | Type                                                            |
| :--------- | :-------------------------------------------------------------- |
| `treeData` | [`ITreeNodeItemProps`](molecule.component.ITreeNodeItemProps)[] |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:101](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L101)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[onEvent](../classes/molecule.react.Component#onevent)

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

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:131](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L131)

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

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:86](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L86)

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

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:81](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L81)

---

### onRightClick

▸ **onRightClick**(`callback`): `void`

Listen to right click event

#### Parameters

| Name       | Type                                                                                                                                                    |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `callback` | (`treeData`: [`ITreeNodeItemProps`](molecule.component.ITreeNodeItemProps), `menus`: [`IMenuItemProps`](molecule.component.IMenuItemProps)[]) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:106](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L106)

---

### onSelectFile

▸ **onSelectFile**(`callback`): `void`

Listen to select a file

#### Parameters

| Name       | Type                                                                              |
| :--------- | :-------------------------------------------------------------------------------- |
| `callback` | (`file`: [`ITreeNodeItemProps`](molecule.component.ITreeNodeItemProps)) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:96](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L96)

---

### onUpdateFileName

▸ **onUpdateFileName**(`callback`): `void`

Listen to update file or folder name

#### Parameters

| Name       | Type                                                                              |
| :--------- | :-------------------------------------------------------------------------------- |
| `callback` | (`file`: [`ITreeNodeItemProps`](molecule.component.ITreeNodeItemProps)) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:91](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L91)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

#### Parameters

| Name       | Type                                                               |
| :--------- | :----------------------------------------------------------------- |
| `callback` | (`prevState`: `IFolderTree`, `nextState`: `IFolderTree`) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

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

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:37](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L37)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[render](../classes/molecule.react.Component#render)

#### Defined in

[src/react/component.ts:50](https://github.com/DTStack/molecule/blob/1b0aa04/src/react/component.ts#L50)

---

### reset

▸ **reset**(): `void`

Reset the FolderTreeService state

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:26](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L26)

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

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:61](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L61)

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

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:66](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L66)

---

### setFileContextMenu

▸ **setFileContextMenu**(`menus`): `void`

Set the context menus for file

#### Parameters

| Name    | Type                                                    |
| :------ | :------------------------------------------------------ |
| `menus` | [`IMenuItemProps`](molecule.component.IMenuItemProps)[] |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:71](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L71)

---

### setFolderContextMenu

▸ **setFolderContextMenu**(`menus`): `void`

Set the context menus for folder

#### Parameters

| Name    | Type                                                    |
| :------ | :------------------------------------------------------ |
| `menus` | [`IMenuItemProps`](molecule.component.IMenuItemProps)[] |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:76](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L76)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[setState](../classes/molecule.react.Component#setstate)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[subscribe](../classes/molecule.react.Component#subscribe)

#### Defined in

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/1b0aa04/src/common/event/eventBus.ts#L11)

---

### update

▸ **update**(`data`): `void`

Update specific data in folder tree

#### Parameters

| Name   | Type                                                          | Description                           |
| :----- | :------------------------------------------------------------ | :------------------------------------ |
| `data` | [`ITreeNodeItemProps`](molecule.component.ITreeNodeItemProps) | The `id` property is required in data |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:42](https://github.com/DTStack/molecule/blob/1b0aa04/src/services/workbench/explorer/folderTreeService.ts#L42)
