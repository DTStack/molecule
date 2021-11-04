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

[src/react/component.ts:42](https://github.com/DTStack/molecule/blob/22a59c7/src/react/component.ts#L42)

## Methods

### add

▸ **add**(`data`, `id?`): `void`

Add data into folder tree

#### Parameters

| Name   | Type                   | Description                                     |
| :----- | :--------------------- | :---------------------------------------------- |
| `data` | `IFolderTreeNodeProps` |                                                 |
| `id?`  | `Key`                  | Except adding a root folder, the id is required |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:30](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/folderTreeService.ts#L30)

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

[src/common/event/eventBus.ts:28](https://github.com/DTStack/molecule/blob/22a59c7/src/common/event/eventBus.ts#L28)

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

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/22a59c7/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

Force to update the Component

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[forceUpdate](../classes/molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:79](https://github.com/DTStack/molecule/blob/22a59c7/src/react/component.ts#L79)

---

### get

▸ **get**(`id`): `null` \| `IFolderTreeNodeProps`

Get specific data in folder tree

#### Parameters

| Name | Type  |
| :--- | :---- |
| `id` | `Key` |

#### Returns

`null` \| `IFolderTreeNodeProps`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:45](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/folderTreeService.ts#L45)

---

### getFileContextMenu

▸ **getFileContextMenu**(): [`IMenuItemProps`](molecule.component.IMenuItemProps)[]

Get the context menus for file

#### Returns

[`IMenuItemProps`](molecule.component.IMenuItemProps)[]

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:49](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/folderTreeService.ts#L49)

---

### getFolderContextMenu

▸ **getFolderContextMenu**(): [`IMenuItemProps`](molecule.component.IMenuItemProps)[]

Get the context menus for folder

#### Returns

[`IMenuItemProps`](molecule.component.IMenuItemProps)[]

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:53](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/folderTreeService.ts#L53)

---

### getState

▸ **getState**(): `IFolderTree`

Get the Component state

#### Returns

`IFolderTree`

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/22a59c7/src/react/component.ts#L83)

---

### onContextMenu

▸ **onContextMenu**(`callback`): `void`

Listen to the click event about the context menu except for built-in menus

#### Parameters

| Name       | Type                                                                                                                  |
| :--------- | :-------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`contextMenu`: [`IMenuItemProps`](molecule.component.IMenuItemProps), `treeNode?`: `IFolderTreeNodeProps`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:124](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/folderTreeService.ts#L124)

---

### onCreate

▸ **onCreate**(`callback`): `void`

Listen to create a node for folder tree

#### Parameters

| Name       | Type                                                                           |
| :--------- | :----------------------------------------------------------------------------- |
| `callback` | (`type`: `"File"` \| `"Folder"` \| `"RootFolder"`, `nodeId?`: `Key`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:119](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/folderTreeService.ts#L119)

---

### onDropTree

▸ **onDropTree**(`callback`): `void`

Listen to drop event

#### Parameters

| Name       | Type                                                                           |
| :--------- | :----------------------------------------------------------------------------- |
| `callback` | (`source`: `IFolderTreeNodeProps`, `target`: `IFolderTreeNodeProps`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:99](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/folderTreeService.ts#L99)

---

### onLoadData

▸ **onLoadData**(`callback`): `void`

Callback for load folder tree data

#### Parameters

| Name       | Type                                                                                                       |
| :--------- | :--------------------------------------------------------------------------------------------------------- |
| `callback` | (`treeNode`: `IFolderTreeNodeProps`, `callback`: (`treeNode`: `IFolderTreeNodeProps`) => `void`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:134](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/folderTreeService.ts#L134)

---

### onRemove

▸ **onRemove**(`callback`): `void`

Listen to remove a node

#### Parameters

| Name       | Type                    |
| :--------- | :---------------------- |
| `callback` | (`id`: `Key`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:84](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/folderTreeService.ts#L84)

---

### onRename

▸ **onRename**(`callback`): `void`

Listen to event about clicking rename button

#### Parameters

| Name       | Type                    |
| :--------- | :---------------------- |
| `callback` | (`id`: `Key`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:79](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/folderTreeService.ts#L79)

---

### onRightClick

▸ **onRightClick**(`callback`): `void`

Listen to right click event

#### Parameters

| Name       | Type                                                                                                             |
| :--------- | :--------------------------------------------------------------------------------------------------------------- |
| `callback` | (`treeData`: `IFolderTreeNodeProps`, `menus`: [`IMenuItemProps`](molecule.component.IMenuItemProps)[]) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:109](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/folderTreeService.ts#L109)

---

### onSelectFile

▸ **onSelectFile**(`callback`): `void`

Listen to select a file

#### Parameters

| Name       | Type                                       |
| :--------- | :----------------------------------------- |
| `callback` | (`file`: `IFolderTreeNodeProps`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:94](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/folderTreeService.ts#L94)

---

### onUpdateFileName

▸ **onUpdateFileName**(`callback`): `void`

Listen to update file or folder name

#### Parameters

| Name       | Type                                       |
| :--------- | :----------------------------------------- |
| `callback` | (`file`: `IFolderTreeNodeProps`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:89](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/folderTreeService.ts#L89)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                               |
| :--------- | :----------------------------------------------------------------- |
| `callback` | (`prevState`: `IFolderTree`, `nextState`: `IFolderTree`) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:71](https://github.com/DTStack/molecule/blob/22a59c7/src/react/component.ts#L71)

---

### remove

▸ **remove**(`id`): `void`

Remove specific data in folder tree

#### Parameters

| Name | Type  |
| :--- | :---- |
| `id` | `Key` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:35](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/folderTreeService.ts#L35)

---

### removeOnUpdateState

▸ **removeOnUpdateState**(): `void`

Remove the Component update event listening

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[removeOnUpdateState](../classes/molecule.react.Component#removeonupdatestate)

#### Defined in

[src/react/component.ts:75](https://github.com/DTStack/molecule/blob/22a59c7/src/react/component.ts#L75)

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

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/22a59c7/src/react/component.ts#L67)

---

### reset

▸ **reset**(): `void`

Reset the FolderTreeService state

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:24](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/folderTreeService.ts#L24)

---

### setActive

▸ **setActive**(`id?`): `void`

Active specific node,
or unactive any node in folder tree

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `id?` | `Key` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:59](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/folderTreeService.ts#L59)

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

[src/services/workbench/explorer/folderTreeService.ts:64](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/folderTreeService.ts#L64)

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

[src/services/workbench/explorer/folderTreeService.ts:69](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/folderTreeService.ts#L69)

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

[src/services/workbench/explorer/folderTreeService.ts:74](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/folderTreeService.ts#L74)

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

[src/react/component.ts:54](https://github.com/DTStack/molecule/blob/22a59c7/src/react/component.ts#L54)

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

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/22a59c7/src/common/event/eventBus.ts#L11)

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

[src/common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/22a59c7/src/common/event/eventBus.ts#L37)

---

### update

▸ **update**(`data`): `void`

Update specific data in folder tree

#### Parameters

| Name   | Type                   | Description                           |
| :----- | :--------------------- | :------------------------------------ |
| `data` | `IFolderTreeNodeProps` | The `id` property is required in data |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:40](https://github.com/DTStack/molecule/blob/22a59c7/src/services/workbench/explorer/folderTreeService.ts#L40)
