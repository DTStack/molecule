---
id: 'molecule.model.ProblemsModel'
title: 'Class: ProblemsModel<T>'
sidebar_label: 'ProblemsModel'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[model](../namespaces/molecule.model).ProblemsModel

## Type parameters

| Name |
| :--- |
| `T`  |

## Implements

-   [`IProblems`](../interfaces/molecule.model.IProblems)<`T`\>

## Constructors

### constructor

• **new ProblemsModel**<`T`\>(`id?`, `name?`, `data?`, `show?`)

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name   | Type                                                                  | Default value |
| :----- | :-------------------------------------------------------------------- | :------------ |
| `id`   | `UniqueId`                                                            | `''`          |
| `name` | `string`                                                              | `''`          |
| `data` | [`IProblemsItem`](../interfaces/molecule.model.IProblemsItem)<`T`\>[] | `[]`          |
| `show` | `boolean`                                                             | `false`       |

#### Defined in

[src/model/problems.tsx:37](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/problems.tsx#L37)

## Properties

### data

• **data**: [`IProblemsItem`](../interfaces/molecule.model.IProblemsItem)<`T`\>[]

#### Implementation of

[IProblems](../interfaces/molecule.model.IProblems).[data](../interfaces/molecule.model.IProblems#data)

#### Defined in

[src/model/problems.tsx:34](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/problems.tsx#L34)

---

### id

• **id**: `UniqueId`

#### Implementation of

[IProblems](../interfaces/molecule.model.IProblems).[id](../interfaces/molecule.model.IProblems#id)

#### Defined in

[src/model/problems.tsx:32](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/problems.tsx#L32)

---

### name

• **name**: `string`

#### Implementation of

[IProblems](../interfaces/molecule.model.IProblems).[name](../interfaces/molecule.model.IProblems#name)

#### Defined in

[src/model/problems.tsx:33](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/problems.tsx#L33)

---

### show

• **show**: `boolean`

#### Implementation of

[IProblems](../interfaces/molecule.model.IProblems).[show](../interfaces/molecule.model.IProblems#show)

#### Defined in

[src/model/problems.tsx:35](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/problems.tsx#L35)
