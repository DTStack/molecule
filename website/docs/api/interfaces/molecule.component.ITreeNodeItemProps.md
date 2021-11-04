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

    ↳ [`IProblemsItem`](molecule.IProblemsItem)

## Indexable

▪ [key: `string`]: `any`

## Properties

### children

• `Optional` **children**: [`ITreeNodeItemProps`](molecule.component.ITreeNodeItemProps)<`any`\>[]

The children of this tree node

#### Defined in

[src/components/tree/index.tsx:44](https://github.com/DTStack/molecule/blob/22a59c7/src/components/tree/index.tsx#L44)

---

### data

• `Optional` **data**: `T`

Store the custom data

#### Defined in

[src/components/tree/index.tsx:48](https://github.com/DTStack/molecule/blob/22a59c7/src/components/tree/index.tsx#L48)

---

### disabled

• `Optional` **disabled**: `boolean`

The status of disabled

#### Defined in

[src/components/tree/index.tsx:32](https://github.com/DTStack/molecule/blob/22a59c7/src/components/tree/index.tsx#L32)

---

### icon

• `Optional` **icon**: `string` \| `Element`

The icon of this tree node, which is rendered in front of the name

#### Defined in

[src/components/tree/index.tsx:28](https://github.com/DTStack/molecule/blob/22a59c7/src/components/tree/index.tsx#L28)

---

### id

• **id**: `Key`

The unique id in tree node

**`aware`** Please be aware of that id should be global unique

#### Defined in

[src/components/tree/index.tsx:20](https://github.com/DTStack/molecule/blob/22a59c7/src/components/tree/index.tsx#L20)

---

### isEditable

• `Optional` **isEditable**: `boolean`

The status of editable, mark whether the node is being edited

#### Defined in

[src/components/tree/index.tsx:40](https://github.com/DTStack/molecule/blob/22a59c7/src/components/tree/index.tsx#L40)

---

### isLeaf

• `Optional` **isLeaf**: `boolean`

The type of this tree node.

#### Defined in

[src/components/tree/index.tsx:36](https://github.com/DTStack/molecule/blob/22a59c7/src/components/tree/index.tsx#L36)

---

### name

• `Optional` **name**: `string`

The name of this tree node

#### Defined in

[src/components/tree/index.tsx:24](https://github.com/DTStack/molecule/blob/22a59c7/src/components/tree/index.tsx#L24)
