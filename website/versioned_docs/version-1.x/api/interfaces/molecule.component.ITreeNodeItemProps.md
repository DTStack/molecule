---
id: 'molecule.component.ITreeNodeItemProps'
title: 'Interface: ITreeNodeItemProps<T>'
sidebar_label: 'ITreeNodeItemProps'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[component](../namespaces/molecule.component).ITreeNodeItemProps

## Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

## Hierarchy

-   **`ITreeNodeItemProps`**

    ↳ [`IFolderTreeNodeProps`](molecule.model.IFolderTreeNodeProps)

    ↳ [`IProblemsItem`](molecule.model.IProblemsItem)

    ↳ [`IProblemsTreeNode`](molecule.model.IProblemsTreeNode)

## Indexable

▪ [key: `string`]: `any`

## Properties

### children

• `Optional` **children**: [`ITreeNodeItemProps`](molecule.component.ITreeNodeItemProps)<`any`\>[]

The children of this tree node

#### Defined in

[components/tree/index.tsx:51](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tree/index.tsx#L51)

---

### data

• `Optional` **data**: `T`

Store the custom data

#### Defined in

[components/tree/index.tsx:55](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tree/index.tsx#L55)

---

### disabled

• `Optional` **disabled**: `boolean`

The status of disabled

#### Defined in

[components/tree/index.tsx:39](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tree/index.tsx#L39)

---

### icon

• `Optional` **icon**: `string` \| `Element`

The icon of this tree node, which is rendered in front of the name

#### Defined in

[components/tree/index.tsx:35](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tree/index.tsx#L35)

---

### id

• **id**: `UniqueId`

The unique id in tree node

**`aware`** Please be aware of that id should be global unique

#### Defined in

[components/tree/index.tsx:27](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tree/index.tsx#L27)

---

### isEditable

• `Optional` **isEditable**: `boolean`

The status of editable, mark whether the node is being edited

#### Defined in

[components/tree/index.tsx:47](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tree/index.tsx#L47)

---

### isLeaf

• `Optional` **isLeaf**: `boolean`

The type of this tree node.

#### Defined in

[components/tree/index.tsx:43](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tree/index.tsx#L43)

---

### name

• `Optional` **name**: `string`

The name of this tree node

#### Defined in

[components/tree/index.tsx:31](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tree/index.tsx#L31)
