---
id: 'molecule.model.IFolderTreeNodeProps'
title: 'Interface: IFolderTreeNodeProps'
sidebar_label: 'IFolderTreeNodeProps'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[model](../namespaces/molecule.model).IFolderTreeNodeProps

## Hierarchy

-   [`ITreeNodeItemProps`](molecule.component.ITreeNodeItemProps)<`any`\>

    ↳ **`IFolderTreeNodeProps`**

## Implemented by

-   [`TreeNodeModel`](../classes/molecule.model.TreeNodeModel)

## Properties

### children

• `Optional` **children**: [`IFolderTreeNodeProps`](molecule.model.IFolderTreeNodeProps)[]

The children of this tree node

#### Overrides

[ITreeNodeItemProps](molecule.component.ITreeNodeItemProps).[children](molecule.component.ITreeNodeItemProps#children)

#### Defined in

[model/workbench/explorer/folderTree.tsx:51](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/explorer/folderTree.tsx#L51)

---

### content

• `Optional` **content**: `string`

#### Defined in

[model/workbench/explorer/folderTree.tsx:49](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/explorer/folderTree.tsx#L49)

---

### data

• `Optional` **data**: `any`

Store the custom data

#### Inherited from

[ITreeNodeItemProps](molecule.component.ITreeNodeItemProps).[data](molecule.component.ITreeNodeItemProps#data)

#### Defined in

[components/tree/index.tsx:55](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tree/index.tsx#L55)

---

### disabled

• `Optional` **disabled**: `boolean`

The status of disabled

#### Inherited from

[ITreeNodeItemProps](molecule.component.ITreeNodeItemProps).[disabled](molecule.component.ITreeNodeItemProps#disabled)

#### Defined in

[components/tree/index.tsx:39](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tree/index.tsx#L39)

---

### fileType

• `Optional` **fileType**: `"File"` \| `"Folder"` \| `"RootFolder"`

#### Defined in

[model/workbench/explorer/folderTree.tsx:50](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/explorer/folderTree.tsx#L50)

---

### icon

• `Optional` **icon**: `string` \| `Element`

The icon of this tree node, which is rendered in front of the name

#### Inherited from

[ITreeNodeItemProps](molecule.component.ITreeNodeItemProps).[icon](molecule.component.ITreeNodeItemProps#icon)

#### Defined in

[components/tree/index.tsx:35](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tree/index.tsx#L35)

---

### id

• **id**: `UniqueId`

The unique id in tree node

**`aware`** Please be aware of that id should be global unique

#### Inherited from

[ITreeNodeItemProps](molecule.component.ITreeNodeItemProps).[id](molecule.component.ITreeNodeItemProps#id)

#### Defined in

[components/tree/index.tsx:27](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tree/index.tsx#L27)

---

### isEditable

• `Optional` **isEditable**: `boolean`

The status of editable, mark whether the node is being edited

#### Inherited from

[ITreeNodeItemProps](molecule.component.ITreeNodeItemProps).[isEditable](molecule.component.ITreeNodeItemProps#iseditable)

#### Defined in

[components/tree/index.tsx:47](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tree/index.tsx#L47)

---

### isLeaf

• `Optional` **isLeaf**: `boolean`

The type of this tree node.

#### Inherited from

[ITreeNodeItemProps](molecule.component.ITreeNodeItemProps).[isLeaf](molecule.component.ITreeNodeItemProps#isleaf)

#### Defined in

[components/tree/index.tsx:43](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tree/index.tsx#L43)

---

### location

• `Optional` **location**: `string`

#### Defined in

[model/workbench/explorer/folderTree.tsx:48](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/explorer/folderTree.tsx#L48)

---

### name

• `Optional` **name**: `string`

The name of this tree node

#### Inherited from

[ITreeNodeItemProps](molecule.component.ITreeNodeItemProps).[name](molecule.component.ITreeNodeItemProps#name)

#### Defined in

[components/tree/index.tsx:31](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tree/index.tsx#L31)
