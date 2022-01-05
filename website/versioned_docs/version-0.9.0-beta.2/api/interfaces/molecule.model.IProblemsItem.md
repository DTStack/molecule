---
id: 'molecule.model.IProblemsItem'
title: 'Interface: IProblemsItem<T>'
sidebar_label: 'IProblemsItem'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[model](../namespaces/molecule.model).IProblemsItem

## Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

## Hierarchy

-   [`ITreeNodeItemProps`](molecule.component.ITreeNodeItemProps)

    ↳ **`IProblemsItem`**

## Properties

### children

• **children**: [`IProblemsItem`](molecule.model.IProblemsItem)<`any`\>[]

The children of this tree node

#### Overrides

[ITreeNodeItemProps](molecule.component.ITreeNodeItemProps).[children](molecule.component.ITreeNodeItemProps#children)

#### Defined in

[src/model/problems.tsx:21](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/problems.tsx#L21)

---

### data

• `Optional` **data**: `any`

Store the custom data

#### Inherited from

[ITreeNodeItemProps](molecule.component.ITreeNodeItemProps).[data](molecule.component.ITreeNodeItemProps#data)

#### Defined in

[src/components/tree/index.tsx:49](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tree/index.tsx#L49)

---

### disabled

• `Optional` **disabled**: `boolean`

The status of disabled

#### Inherited from

[ITreeNodeItemProps](molecule.component.ITreeNodeItemProps).[disabled](molecule.component.ITreeNodeItemProps#disabled)

#### Defined in

[src/components/tree/index.tsx:33](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tree/index.tsx#L33)

---

### icon

• `Optional` **icon**: `string` \| `Element`

The icon of this tree node, which is rendered in front of the name

#### Inherited from

[ITreeNodeItemProps](molecule.component.ITreeNodeItemProps).[icon](molecule.component.ITreeNodeItemProps#icon)

#### Defined in

[src/components/tree/index.tsx:29](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tree/index.tsx#L29)

---

### id

• **id**: `UniqueId`

The unique id in tree node

**`aware`** Please be aware of that id should be global unique

#### Inherited from

[ITreeNodeItemProps](molecule.component.ITreeNodeItemProps).[id](molecule.component.ITreeNodeItemProps#id)

#### Defined in

[src/components/tree/index.tsx:21](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tree/index.tsx#L21)

---

### isEditable

• `Optional` **isEditable**: `boolean`

The status of editable, mark whether the node is being edited

#### Inherited from

[ITreeNodeItemProps](molecule.component.ITreeNodeItemProps).[isEditable](molecule.component.ITreeNodeItemProps#iseditable)

#### Defined in

[src/components/tree/index.tsx:41](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tree/index.tsx#L41)

---

### isLeaf

• `Optional` **isLeaf**: `boolean`

The type of this tree node.

#### Inherited from

[ITreeNodeItemProps](molecule.component.ITreeNodeItemProps).[isLeaf](molecule.component.ITreeNodeItemProps#isleaf)

#### Defined in

[src/components/tree/index.tsx:37](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tree/index.tsx#L37)

---

### name

• `Optional` **name**: `string`

The name of this tree node

#### Inherited from

[ITreeNodeItemProps](molecule.component.ITreeNodeItemProps).[name](molecule.component.ITreeNodeItemProps#name)

#### Defined in

[src/components/tree/index.tsx:25](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tree/index.tsx#L25)

---

### value

• **value**: [`IRelatedInformation`](molecule.model.IRelatedInformation)

#### Defined in

[src/model/problems.tsx:20](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/problems.tsx#L20)
