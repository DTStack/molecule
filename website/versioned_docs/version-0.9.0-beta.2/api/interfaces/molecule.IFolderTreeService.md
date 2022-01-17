---
id: 'molecule.IFolderTreeService'
title: 'Interface: IFolderTreeService'
sidebar_label: 'IFolderTreeService'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IFolderTreeService

## Hierarchy

-   [`Component`](../classes/molecule.react.Component)<[`IFolderTree`](molecule.model.IFolderTree)\>

    ↳ **`IFolderTreeService`**

## Implemented by

-   [`FolderTreeService`](../classes/molecule.FolderTreeService)

## Properties

### state

• `Protected` `Abstract` **state**: [`IFolderTree`](molecule.model.IFolderTree)

#### Inherited from

[Component](../classes/molecule.react.Component).[state](../classes/molecule.react.Component#state)

#### Defined in

[src/react/component.ts:42](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L42)

## Methods

### add

▸ **add**(`data`, `id?`): `void`

Add data into folder tree

#### Parameters

| Name   | Type                                                          | Description                                     |
| :----- | :------------------------------------------------------------ | :---------------------------------------------- |
| `data` | [`IFolderTreeNodeProps`](molecule.model.IFolderTreeNodeProps) |                                                 |
| `id?`  | `UniqueId`                                                    | Except adding a root folder, the id is required |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:31](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L31)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[emit](../classes/molecule.react.Component#emit)

#### Defined in

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

Force to update the Component

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[forceUpdate](../classes/molecule.react.Component#forceupdate)

#### Defined in

[src/react/component.ts:79](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L79)

---

### get

▸ **get**(`id`): `null` \| [`IFolderTreeNodeProps`](molecule.model.IFolderTreeNodeProps)

Get specific data in folder tree

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `id` | `UniqueId` |

#### Returns

`null` \| [`IFolderTreeNodeProps`](molecule.model.IFolderTreeNodeProps)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:46](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L46)

---

### getFileContextMenu

▸ **getFileContextMenu**(): [`IMenuItemProps`](molecule.component.IMenuItemProps)[]

Get the context menus for file

#### Returns

[`IMenuItemProps`](molecule.component.IMenuItemProps)[]

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:50](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L50)

---

### getFolderContextMenu

▸ **getFolderContextMenu**(): [`IMenuItemProps`](molecule.component.IMenuItemProps)[]

Get the context menus for folder

#### Returns

[`IMenuItemProps`](molecule.component.IMenuItemProps)[]

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:54](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L54)

---

### getState

▸ **getState**(): [`IFolderTree`](molecule.model.IFolderTree)

Get the Component state

#### Returns

[`IFolderTree`](molecule.model.IFolderTree)

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L83)

---

### onContextMenu

▸ **onContextMenu**(`callback`): `void`

Listen to the click event about the context menu except for built-in menus

#### Parameters

| Name       | Type                                                                                                                                                         |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`contextMenu`: [`IMenuItemProps`](molecule.component.IMenuItemProps), `treeNode?`: [`IFolderTreeNodeProps`](molecule.model.IFolderTreeNodeProps)) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:125](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L125)

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

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:120](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L120)

---

### onDropTree

▸ **onDropTree**(`callback`): `void`

Listen to drop event

#### Parameters

| Name       | Type                                                                                                                                                         |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`source`: [`IFolderTreeNodeProps`](molecule.model.IFolderTreeNodeProps), `target`: [`IFolderTreeNodeProps`](molecule.model.IFolderTreeNodeProps)) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:100](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L100)

---

### onLoadData

▸ **onLoadData**(`callback`): `void`

Callback for load folder tree data

#### Parameters

| Name       | Type                                                                                                                                                                                     |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`treeNode`: [`IFolderTreeNodeProps`](molecule.model.IFolderTreeNodeProps), `callback`: (`treeNode`: [`IFolderTreeNodeProps`](molecule.model.IFolderTreeNodeProps)) => `void`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:135](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L135)

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

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:85](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L85)

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

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:80](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L80)

---

### onRightClick

▸ **onRightClick**(`callback`): `void`

Listen to right click event

#### Parameters

| Name       | Type                                                                                                                                                    |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `callback` | (`treeData`: [`IFolderTreeNodeProps`](molecule.model.IFolderTreeNodeProps), `menus`: [`IMenuItemProps`](molecule.component.IMenuItemProps)[]) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:110](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L110)

---

### onSelectFile

▸ **onSelectFile**(`callback`): `void`

Listen to select a file

#### Parameters

| Name       | Type                                                                              |
| :--------- | :-------------------------------------------------------------------------------- |
| `callback` | (`file`: [`IFolderTreeNodeProps`](molecule.model.IFolderTreeNodeProps)) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:95](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L95)

---

### onUpdateFileName

▸ **onUpdateFileName**(`callback`): `void`

Listen to update file or folder name

#### Parameters

| Name       | Type                                                                              |
| :--------- | :-------------------------------------------------------------------------------- |
| `callback` | (`file`: [`IFolderTreeNodeProps`](molecule.model.IFolderTreeNodeProps)) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:90](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L90)

---

### onUpdateState

▸ **onUpdateState**(`callback`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                           |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`prevState`: [`IFolderTree`](molecule.model.IFolderTree), `nextState`: [`IFolderTree`](molecule.model.IFolderTree)) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

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

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:36](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L36)

---

### removeOnUpdateState

▸ **removeOnUpdateState**(): `void`

Remove the Component update event listening

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[removeOnUpdateState](../classes/molecule.react.Component#removeonupdatestate)

#### Defined in

[src/react/component.ts:75](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L75)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type                                        |
| :----------- | :------------------------------------------ |
| `nextState?` | [`IFolderTree`](molecule.model.IFolderTree) |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[render](../classes/molecule.react.Component#render)

#### Defined in

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/component.ts#L67)

---

### reset

▸ **reset**(): `void`

Reset the FolderTreeService state

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:25](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L25)

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

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:60](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L60)

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

[src/services/workbench/explorer/folderTreeService.ts:65](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L65)

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

[src/services/workbench/explorer/folderTreeService.ts:70](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L70)

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

[src/services/workbench/explorer/folderTreeService.ts:75](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L75)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                                                                                                           | Description                |
| :---------- | :----------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `values`    | `Partial`<[`IFolderTree`](molecule.model.IFolderTree)\>                                                                        | update target state values |
| `callback?` | (`prevState`: [`IFolderTree`](molecule.model.IFolderTree), `nextState`: [`IFolderTree`](molecule.model.IFolderTree)) => `void` | -                          |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[setState](../classes/molecule.react.Component#setstate)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[subscribe](../classes/molecule.react.Component#subscribe)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[unsubscribe](../classes/molecule.react.Component#unsubscribe)

#### Defined in

[src/common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L37)

---

### update

▸ **update**(`data`): `void`

Update specific data in folder tree

#### Parameters

| Name   | Type                                                          | Description                           |
| :----- | :------------------------------------------------------------ | :------------------------------------ |
| `data` | [`IFolderTreeNodeProps`](molecule.model.IFolderTreeNodeProps) | The `id` property is required in data |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:41](https://github.com/DTStack/molecule/blob/b5324fcf/src/services/workbench/explorer/folderTreeService.ts#L41)
