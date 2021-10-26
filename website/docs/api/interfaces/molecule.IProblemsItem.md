---
id: 'molecule.IProblemsItem'
title: 'Interface: IProblemsItem<T>'
sidebar_label: 'IProblemsItem'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IProblemsItem

## Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

## Hierarchy

-   [`ITreeNodeItemProps`](molecule.component.ITreeNodeItemProps)

    ↳ **`IProblemsItem`**

## Properties

### children

• **children**: [`IProblemsItem`](molecule.IProblemsItem)<`any`\>[]

The children of this tree node

#### Overrides

[ITreeNodeItemProps](molecule.component.ITreeNodeItemProps).[children](molecule.component.ITreeNodeItemProps#children)

#### Defined in

[src/model/problems.tsx:20](https://github.com/DTStack/molecule/blob/3c64296/src/model/problems.tsx#L20)

---

### data

• `Optional` **data**: `any`

Store the custom data

#### Inherited from

[ITreeNodeItemProps](molecule.component.ITreeNodeItemProps).[data](molecule.component.ITreeNodeItemProps#data)

#### Defined in

[src/components/tree/index.tsx:48](https://github.com/DTStack/molecule/blob/3c64296/src/components/tree/index.tsx#L48)

---

### disabled

• `Optional` **disabled**: `boolean`

The status of disabled

#### Inherited from

[ITreeNodeItemProps](molecule.component.ITreeNodeItemProps).[disabled](molecule.component.ITreeNodeItemProps#disabled)

#### Defined in

[src/components/tree/index.tsx:32](https://github.com/DTStack/molecule/blob/3c64296/src/components/tree/index.tsx#L32)

---

### icon

• `Optional` **icon**: `string` \| `Element`

The icon of this tree node, which is rendered in front of the name

#### Inherited from

[ITreeNodeItemProps](molecule.component.ITreeNodeItemProps).[icon](molecule.component.ITreeNodeItemProps#icon)

#### Defined in

[src/components/tree/index.tsx:28](https://github.com/DTStack/molecule/blob/3c64296/src/components/tree/index.tsx#L28)

---

### id

• **id**: `Key`

The unique id in tree node

**`aware`** Please be aware of that id should be global unique

#### Inherited from

[ITreeNodeItemProps](molecule.component.ITreeNodeItemProps).[id](molecule.component.ITreeNodeItemProps#id)

#### Defined in

[src/components/tree/index.tsx:20](https://github.com/DTStack/molecule/blob/3c64296/src/components/tree/index.tsx#L20)

---

### isEditable

• `Optional` **isEditable**: `boolean`

The status of editable, mark whether the node is being edited

#### Inherited from

[ITreeNodeItemProps](molecule.component.ITreeNodeItemProps).[isEditable](molecule.component.ITreeNodeItemProps#iseditable)

#### Defined in

[src/components/tree/index.tsx:40](https://github.com/DTStack/molecule/blob/3c64296/src/components/tree/index.tsx#L40)

---

### isLeaf

• `Optional` **isLeaf**: `boolean`

The type of this tree node.

#### Inherited from

[ITreeNodeItemProps](molecule.component.ITreeNodeItemProps).[isLeaf](molecule.component.ITreeNodeItemProps#isleaf)

#### Defined in

[src/components/tree/index.tsx:36](https://github.com/DTStack/molecule/blob/3c64296/src/components/tree/index.tsx#L36)

---

### name

• `Optional` **name**: `string`

The name of this tree node

#### Inherited from

[ITreeNodeItemProps](molecule.component.ITreeNodeItemProps).[name](molecule.component.ITreeNodeItemProps#name)

#### Defined in

[src/components/tree/index.tsx:24](https://github.com/DTStack/molecule/blob/3c64296/src/components/tree/index.tsx#L24)

---

### value

• **value**: `IRelatedInformation`

#### Defined in

[src/model/problems.tsx:19](https://github.com/DTStack/molecule/blob/3c64296/src/model/problems.tsx#L19)
