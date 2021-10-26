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

[src/services/workbench/explorer/folderTreeService.ts:152](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/folderTreeService.ts#L152)

## Properties

### builtinService

• `Private` `Readonly` **builtinService**: [`IBuiltinService`](../interfaces/molecule.IBuiltinService)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:148](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/folderTreeService.ts#L148)

---

### explorerService

• `Private` `Readonly` **explorerService**: [`IExplorerService`](../interfaces/molecule.IExplorerService)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:147](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/folderTreeService.ts#L147)

---

### fileContextMenu

• `Private` **fileContextMenu**: [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[] = `[]`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:149](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/folderTreeService.ts#L149)

---

### folderContextMenu

• `Private` **folderContextMenu**: [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[] = `[]`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:150](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/folderTreeService.ts#L150)

---

### state

• `Protected` **state**: `IFolderTree`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[state](../interfaces/molecule.IFolderTreeService#state)

#### Overrides

[Component](molecule.react.Component).[state](molecule.react.Component#state)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:146](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/folderTreeService.ts#L146)

## Methods

### add

▸ **add**(`data`, `id?`): `void`

Add data into folder tree

#### Parameters

| Name   | Type                   |
| :----- | :--------------------- |
| `data` | `IFolderTreeNodeProps` |
| `id?`  | `Key`                  |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[add](../interfaces/molecule.IFolderTreeService#add)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:260](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/folderTreeService.ts#L260)

---

### addRootFolder

▸ `Private` **addRootFolder**(`folder`): `void`

#### Parameters

| Name     | Type                   |
| :------- | :--------------------- |
| `folder` | `IFolderTreeNodeProps` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:216](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/folderTreeService.ts#L216)

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

[src/common/event/eventBus.ts:28](https://github.com/DTStack/molecule/blob/3c64296/src/common/event/eventBus.ts#L28)

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

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/3c64296/src/common/event/eventBus.ts#L20)

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

[src/react/component.ts:79](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L79)

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

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[get](../interfaces/molecule.IFolderTreeService#get)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:344](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/folderTreeService.ts#L344)

---

### getCurrentRootFolderInfo

▸ `Private` **getCurrentRootFolderInfo**(`id`): { `currentRootFolder`: `null` = null; `index`: `number` = -1; `tree`: `null` = null } \| { `currentRootFolder`: `IFolderTreeNodeProps` ; `index`: `number` ; `tree`: `TreeViewUtil`<`IFolderTreeNodeProps`\> }

#### Parameters

| Name | Type  |
| :--- | :---- |
| `id` | `Key` |

#### Returns

{ `currentRootFolder`: `null` = null; `index`: `number` = -1; `tree`: `null` = null } \| { `currentRootFolder`: `IFolderTreeNodeProps` ; `index`: `number` ; `tree`: `TreeViewUtil`<`IFolderTreeNodeProps`\> }

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:241](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/folderTreeService.ts#L241)

---

### getFileContextMenu

▸ **getFileContextMenu**(): [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[]

Get the context menus for file

#### Returns

[`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[]

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[getFileContextMenu](../interfaces/molecule.IFolderTreeService#getfilecontextmenu)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:171](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/folderTreeService.ts#L171)

---

### getFolderContextMenu

▸ **getFolderContextMenu**(): [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[]

Get the context menus for folder

#### Returns

[`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[]

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[getFolderContextMenu](../interfaces/molecule.IFolderTreeService#getfoldercontextmenu)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:179](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/folderTreeService.ts#L179)

---

### getRootFolderById

▸ `Private` **getRootFolderById**(`id`): `null` \| `IFolderTreeNodeProps`

Returns the node of root folder in folderTree

#### Parameters

| Name | Type  |
| :--- | :---- |
| `id` | `Key` |

#### Returns

`null` \| `IFolderTreeNodeProps`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:204](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/folderTreeService.ts#L204)

---

### getRootFolderIndex

▸ `Private` **getRootFolderIndex**(`id`): `number`

#### Parameters

| Name | Type  |
| :--- | :---- |
| `id` | `Key` |

#### Returns

`number`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:235](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/folderTreeService.ts#L235)

---

### getState

▸ **getState**(): `IFolderTree`

Get the Component state

#### Returns

`IFolderTree`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[getState](../interfaces/molecule.IFolderTreeService#getstate)

#### Inherited from

[Component](molecule.react.Component).[getState](molecule.react.Component#getstate)

#### Defined in

[src/react/component.ts:83](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L83)

---

### onContextMenu

▸ **onContextMenu**(`callback`): `void`

Listen to the click event about the context menu except for built-in menus

#### Parameters

| Name       | Type                                                                                                                                |
| :--------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`contextMenu`: [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps), `treeNode?`: `IFolderTreeNodeProps`) => `void` |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onContextMenu](../interfaces/molecule.IFolderTreeService#oncontextmenu)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:415](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/folderTreeService.ts#L415)

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

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onCreate](../interfaces/molecule.IFolderTreeService#oncreate)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:409](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/folderTreeService.ts#L409)

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

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onDropTree](../interfaces/molecule.IFolderTreeService#ondroptree)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:391](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/folderTreeService.ts#L391)

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

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onLoadData](../interfaces/molecule.IFolderTreeService#onloaddata)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:424](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/folderTreeService.ts#L424)

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

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onRemove](../interfaces/molecule.IFolderTreeService#onremove)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:379](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/folderTreeService.ts#L379)

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

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onRename](../interfaces/molecule.IFolderTreeService#onrename)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:375](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/folderTreeService.ts#L375)

---

### onRightClick

▸ **onRightClick**(`callback`): `void`

Listen to right click event

#### Parameters

| Name       | Type                                                                                                                           |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------- |
| `callback` | (`treeData`: `IFolderTreeNodeProps`, `menus`: [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[]) => `void` |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onRightClick](../interfaces/molecule.IFolderTreeService#onrightclick)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:400](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/folderTreeService.ts#L400)

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

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onSelectFile](../interfaces/molecule.IFolderTreeService#onselectfile)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:387](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/folderTreeService.ts#L387)

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

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onUpdateFileName](../interfaces/molecule.IFolderTreeService#onupdatefilename)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:383](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/folderTreeService.ts#L383)

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

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[onUpdateState](../interfaces/molecule.IFolderTreeService#onupdatestate)

#### Inherited from

[Component](molecule.react.Component).[onUpdateState](molecule.react.Component#onupdatestate)

#### Defined in

[src/react/component.ts:71](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L71)

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

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[remove](../interfaces/molecule.IFolderTreeService#remove)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:302](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/folderTreeService.ts#L302)

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

[src/react/component.ts:75](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L75)

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

[src/react/component.ts:67](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L67)

---

### reset

▸ **reset**(): `void`

Reset the FolderTreeService state

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[reset](../interfaces/molecule.IFolderTreeService#reset)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:159](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/folderTreeService.ts#L159)

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

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[setActive](../interfaces/molecule.IFolderTreeService#setactive)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:355](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/folderTreeService.ts#L355)

---

### setCurrentFolderLocation

▸ `Private` **setCurrentFolderLocation**(`data`, `id`): `void`

#### Parameters

| Name   | Type                   |
| :----- | :--------------------- |
| `data` | `IFolderTreeNodeProps` |
| `id`   | `Key`                  |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:187](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/folderTreeService.ts#L187)

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

[src/services/workbench/explorer/folderTreeService.ts:369](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/folderTreeService.ts#L369)

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

[src/services/workbench/explorer/folderTreeService.ts:175](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/folderTreeService.ts#L175)

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

[src/services/workbench/explorer/folderTreeService.ts:183](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/folderTreeService.ts#L183)

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

[src/react/component.ts:54](https://github.com/DTStack/molecule/blob/3c64296/src/react/component.ts#L54)

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

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/3c64296/src/common/event/eventBus.ts#L11)

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

[src/common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/3c64296/src/common/event/eventBus.ts#L37)

---

### update

▸ **update**(`data`): `void`

Update specific data in folder tree

#### Parameters

| Name   | Type                   |
| :----- | :--------------------- |
| `data` | `IFolderTreeNodeProps` |

#### Returns

`void`

#### Implementation of

[IFolderTreeService](../interfaces/molecule.IFolderTreeService).[update](../interfaces/molecule.IFolderTreeService#update)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:322](https://github.com/DTStack/molecule/blob/3c64296/src/services/workbench/explorer/folderTreeService.ts#L322)
