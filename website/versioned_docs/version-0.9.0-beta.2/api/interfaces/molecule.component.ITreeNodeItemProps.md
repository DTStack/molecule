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

## Indexable

▪ [key: `string`]: `any`

## Properties

### children

• `Optional` **children**: [`ITreeNodeItemProps`](molecule.component.ITreeNodeItemProps)<`any`\>[]

The children of this tree node

#### Defined in

[src/components/tree/index.tsx:45](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tree/index.tsx#L45)

---

### data

• `Optional` **data**: `T`

Store the custom data

#### Defined in

[src/components/tree/index.tsx:49](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tree/index.tsx#L49)

---

### disabled

• `Optional` **disabled**: `boolean`

The status of disabled

#### Defined in

[src/components/tree/index.tsx:33](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tree/index.tsx#L33)

---

### icon

• `Optional` **icon**: `string` \| `Element`

The icon of this tree node, which is rendered in front of the name

#### Defined in

[src/components/tree/index.tsx:29](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tree/index.tsx#L29)

---

### id

• **id**: `UniqueId`

The unique id in tree node

**`aware`** Please be aware of that id should be global unique

#### Defined in

[src/components/tree/index.tsx:21](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tree/index.tsx#L21)

---

### isEditable

• `Optional` **isEditable**: `boolean`

The status of editable, mark whether the node is being edited

#### Defined in

[src/components/tree/index.tsx:41](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tree/index.tsx#L41)

---

### isLeaf

• `Optional` **isLeaf**: `boolean`

The type of this tree node.

#### Defined in

[src/components/tree/index.tsx:37](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tree/index.tsx#L37)

---

### name

• `Optional` **name**: `string`

The name of this tree node

#### Defined in

[src/components/tree/index.tsx:25](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tree/index.tsx#L25)
