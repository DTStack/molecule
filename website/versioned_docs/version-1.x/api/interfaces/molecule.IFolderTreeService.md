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

[react/component.ts:44](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L44)

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

[services/workbench/explorer/folderTreeService.ts:31](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L31)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[emit](../classes/molecule.react.Component#emit)

#### Defined in

[common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

Force to update the Component

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[forceUpdate](../classes/molecule.react.Component#forceupdate)

#### Defined in

[react/component.ts:81](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L81)

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

[services/workbench/explorer/folderTreeService.ts:46](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L46)

---

### getExpandKeys

▸ **getExpandKeys**(): `UniqueId`[]

Get the expandKeys in folderTree

#### Returns

`UniqueId`[]

#### Defined in

[services/workbench/explorer/folderTreeService.ts:63](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L63)

---

### getFileContextMenu

▸ **getFileContextMenu**(): [`IMenuItemProps`](molecule.component.IMenuItemProps)[]

Get the context menus for file

#### Returns

[`IMenuItemProps`](molecule.component.IMenuItemProps)[]

#### Defined in

[services/workbench/explorer/folderTreeService.ts:55](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L55)

---

### getFolderContextMenu

▸ **getFolderContextMenu**(): [`IMenuItemProps`](molecule.component.IMenuItemProps)[]

Get the context menus for folder

#### Returns

[`IMenuItemProps`](molecule.component.IMenuItemProps)[]

#### Defined in

[services/workbench/explorer/folderTreeService.ts:59](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L59)

---

### getLoadedKeys

▸ **getLoadedKeys**(): `string`[]

Get the loadedKeys for folderTree

#### Returns

`string`[]

#### Defined in

[services/workbench/explorer/folderTreeService.ts:71](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L71)

---

### getParentNode

▸ **getParentNode**(`id`): `null` \| [`IFolderTreeNodeProps`](molecule.model.IFolderTreeNodeProps)

get the current treeNode's parentNode

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `id` | `UniqueId` |

#### Returns

`null` \| [`IFolderTreeNodeProps`](molecule.model.IFolderTreeNodeProps)

#### Defined in

[services/workbench/explorer/folderTreeService.ts:51](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L51)

---

### getState

▸ **getState**(): [`IFolderTree`](molecule.model.IFolderTree)

Get the Component state

#### Returns

[`IFolderTree`](molecule.model.IFolderTree)

#### Inherited from

[Component](../classes/molecule.react.Component).[getState](../classes/molecule.react.Component#getstate)

#### Defined in

[react/component.ts:85](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L85)

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

[services/workbench/explorer/folderTreeService.ts:146](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L146)

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

[services/workbench/explorer/folderTreeService.ts:141](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L141)

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

[services/workbench/explorer/folderTreeService.ts:121](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L121)

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

#### Defined in

[services/workbench/explorer/folderTreeService.ts:166](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L166)

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

[services/workbench/explorer/folderTreeService.ts:156](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L156)

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

[services/workbench/explorer/folderTreeService.ts:106](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L106)

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

[services/workbench/explorer/folderTreeService.ts:101](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L101)

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

[services/workbench/explorer/folderTreeService.ts:131](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L131)

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

[services/workbench/explorer/folderTreeService.ts:116](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L116)

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

[services/workbench/explorer/folderTreeService.ts:111](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L111)

---

### onUpdateState

▸ **onUpdateState**(`listener`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                                                                                                           |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------- |
| `listener` | (`prevState`: [`IFolderTree`](molecule.model.IFolderTree), `nextState`: [`IFolderTree`](molecule.model.IFolderTree)) => `void` |

#### Returns

`void`

#### Inherited from

[Component](../classes/molecule.react.Component).[onUpdateState](../classes/molecule.react.Component#onupdatestate)

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

#### Defined in

[services/workbench/explorer/folderTreeService.ts:36](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L36)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[removeOnUpdateState](../classes/molecule.react.Component#removeonupdatestate)

#### Defined in

[react/component.ts:77](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L77)

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

[react/component.ts:69](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L69)

---

### reset

▸ **reset**(): `void`

Reset the FolderTreeService state

#### Returns

`void`

#### Defined in

[services/workbench/explorer/folderTreeService.ts:25](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L25)

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

[services/workbench/explorer/folderTreeService.ts:81](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L81)

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

[services/workbench/explorer/folderTreeService.ts:86](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L86)

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

#### Defined in

[services/workbench/explorer/folderTreeService.ts:67](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L67)

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

[services/workbench/explorer/folderTreeService.ts:91](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L91)

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

[services/workbench/explorer/folderTreeService.ts:96](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L96)

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

#### Defined in

[services/workbench/explorer/folderTreeService.ts:75](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L75)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[subscribe](../classes/molecule.react.Component#subscribe)

#### Defined in

[common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L11)

---

### toggleAutoSort

▸ **toggleAutoSort**(): `void`

Toggle whether to enable sorting, which is disabled by default.

#### Returns

`void`

#### Defined in

[services/workbench/explorer/folderTreeService.ts:170](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L170)

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

#### Inherited from

[Component](../classes/molecule.react.Component).[unsubscribe](../classes/molecule.react.Component#unsubscribe)

#### Defined in

[common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L37)

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

[services/workbench/explorer/folderTreeService.ts:41](https://github.com/DTStack/molecule/blob/927b7d39/src/services/workbench/explorer/folderTreeService.ts#L41)
