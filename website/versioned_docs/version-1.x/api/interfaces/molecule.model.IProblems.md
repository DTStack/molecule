---
id: 'molecule.model.IProblems'
title: 'Interface: IProblems<T>'
sidebar_label: 'IProblems'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[model](../namespaces/molecule.model).IProblems

## Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

## Implemented by

-   [`ProblemsModel`](../classes/molecule.model.ProblemsModel)

## Properties

### data

• **data**: [`IProblemsItem`](molecule.model.IProblemsItem)<`T`\>[]

#### Defined in

[model/problems.tsx:37](https://github.com/DTStack/molecule/blob/927b7d39/src/model/problems.tsx#L37)

---

### id

• **id**: `UniqueId`

#### Defined in

[model/problems.tsx:35](https://github.com/DTStack/molecule/blob/927b7d39/src/model/problems.tsx#L35)

---

### name

• **name**: `string`

#### Defined in

[model/problems.tsx:36](https://github.com/DTStack/molecule/blob/927b7d39/src/model/problems.tsx#L36)

---

### show

• `Optional` **show**: `boolean`

#### Defined in

[model/problems.tsx:38](https://github.com/DTStack/molecule/blob/927b7d39/src/model/problems.tsx#L38)

## Methods

### onSelect

▸ `Optional` **onSelect**(`node`): `void`

#### Parameters

| Name   | Type                                                            |
| :----- | :-------------------------------------------------------------- |
| `node` | [`IProblemsTreeNode`](molecule.model.IProblemsTreeNode)<`any`\> |

#### Returns

`void`

#### Defined in

[model/problems.tsx:39](https://github.com/DTStack/molecule/blob/927b7d39/src/model/problems.tsx#L39)
