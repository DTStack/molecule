---
id: 'molecule.model.TreeNodeModel'
title: 'Class: TreeNodeModel'
sidebar_label: 'TreeNodeModel'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[model](../namespaces/molecule.model).TreeNodeModel

## Implements

-   [`IFolderTreeNodeProps`](../interfaces/molecule.model.IFolderTreeNodeProps)

## Constructors

### constructor

• **new TreeNodeModel**(`props`)

#### Parameters

| Name    | Type                                                                        |
| :------ | :-------------------------------------------------------------------------- |
| `props` | [`IFolderTreeNodeProps`](../interfaces/molecule.model.IFolderTreeNodeProps) |

#### Defined in

[model/workbench/explorer/folderTree.tsx:66](https://github.com/DTStack/molecule/blob/ff1a27ef/src/model/workbench/explorer/folderTree.tsx#L66)

## Properties

### children

• `Optional` **children**: [`IFolderTreeNodeProps`](../interfaces/molecule.model.IFolderTreeNodeProps)[]

The children of this tree node

#### Implementation of

[IFolderTreeNodeProps](../interfaces/molecule.model.IFolderTreeNodeProps).[children](../interfaces/molecule.model.IFolderTreeNodeProps#children)

#### Defined in

[model/workbench/explorer/folderTree.tsx:59](https://github.com/DTStack/molecule/blob/ff1a27ef/src/model/workbench/explorer/folderTree.tsx#L59)

---

### content

• `Optional` **content**: `string`

#### Implementation of

[IFolderTreeNodeProps](../interfaces/molecule.model.IFolderTreeNodeProps).[content](../interfaces/molecule.model.IFolderTreeNodeProps#content)

#### Defined in

[model/workbench/explorer/folderTree.tsx:62](https://github.com/DTStack/molecule/blob/ff1a27ef/src/model/workbench/explorer/folderTree.tsx#L62)

---

### data

• `Optional` **data**: `any`

Store the custom data

#### Implementation of

[IFolderTreeNodeProps](../interfaces/molecule.model.IFolderTreeNodeProps).[data](../interfaces/molecule.model.IFolderTreeNodeProps#data)

#### Defined in

[model/workbench/explorer/folderTree.tsx:64](https://github.com/DTStack/molecule/blob/ff1a27ef/src/model/workbench/explorer/folderTree.tsx#L64)

---

### fileType

• **fileType**: `"File"` \| `"Folder"` \| `"RootFolder"`

#### Implementation of

[IFolderTreeNodeProps](../interfaces/molecule.model.IFolderTreeNodeProps).[fileType](../interfaces/molecule.model.IFolderTreeNodeProps#filetype)

#### Defined in

[model/workbench/explorer/folderTree.tsx:58](https://github.com/DTStack/molecule/blob/ff1a27ef/src/model/workbench/explorer/folderTree.tsx#L58)

---

### icon

• `Optional` **icon**: `string` \| `Element`

The icon of this tree node, which is rendered in front of the name

#### Implementation of

[IFolderTreeNodeProps](../interfaces/molecule.model.IFolderTreeNodeProps).[icon](../interfaces/molecule.model.IFolderTreeNodeProps#icon)

#### Defined in

[model/workbench/explorer/folderTree.tsx:60](https://github.com/DTStack/molecule/blob/ff1a27ef/src/model/workbench/explorer/folderTree.tsx#L60)

---

### id

• **id**: `UniqueId`

The unique id in tree node

#### Implementation of

[IFolderTreeNodeProps](../interfaces/molecule.model.IFolderTreeNodeProps).[id](../interfaces/molecule.model.IFolderTreeNodeProps#id)

#### Defined in

[model/workbench/explorer/folderTree.tsx:54](https://github.com/DTStack/molecule/blob/ff1a27ef/src/model/workbench/explorer/folderTree.tsx#L54)

---

### isEditable

• `Optional` **isEditable**: `boolean`

The status of editable, mark whether the node is being edited

#### Implementation of

[IFolderTreeNodeProps](../interfaces/molecule.model.IFolderTreeNodeProps).[isEditable](../interfaces/molecule.model.IFolderTreeNodeProps#iseditable)

#### Defined in

[model/workbench/explorer/folderTree.tsx:61](https://github.com/DTStack/molecule/blob/ff1a27ef/src/model/workbench/explorer/folderTree.tsx#L61)

---

### isLeaf

• `Optional` **isLeaf**: `boolean`

The type of this tree node.

#### Implementation of

[IFolderTreeNodeProps](../interfaces/molecule.model.IFolderTreeNodeProps).[isLeaf](../interfaces/molecule.model.IFolderTreeNodeProps#isleaf)

#### Defined in

[model/workbench/explorer/folderTree.tsx:57](https://github.com/DTStack/molecule/blob/ff1a27ef/src/model/workbench/explorer/folderTree.tsx#L57)

---

### location

• `Optional` **location**: `string`

#### Implementation of

[IFolderTreeNodeProps](../interfaces/molecule.model.IFolderTreeNodeProps).[location](../interfaces/molecule.model.IFolderTreeNodeProps#location)

#### Defined in

[model/workbench/explorer/folderTree.tsx:56](https://github.com/DTStack/molecule/blob/ff1a27ef/src/model/workbench/explorer/folderTree.tsx#L56)

---

### name

• `Optional` **name**: `string`

The name of this tree node

#### Implementation of

[IFolderTreeNodeProps](../interfaces/molecule.model.IFolderTreeNodeProps).[name](../interfaces/molecule.model.IFolderTreeNodeProps#name)

#### Defined in

[model/workbench/explorer/folderTree.tsx:55](https://github.com/DTStack/molecule/blob/ff1a27ef/src/model/workbench/explorer/folderTree.tsx#L55)
