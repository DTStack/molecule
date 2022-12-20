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

[model/problems.tsx:48](https://github.com/DTStack/molecule/blob/927b7d39/src/model/problems.tsx#L48)

## Properties

### data

• **data**: [`IProblemsItem`](../interfaces/molecule.model.IProblemsItem)<`T`\>[]

#### Implementation of

[IProblems](../interfaces/molecule.model.IProblems).[data](../interfaces/molecule.model.IProblems#data)

#### Defined in

[model/problems.tsx:45](https://github.com/DTStack/molecule/blob/927b7d39/src/model/problems.tsx#L45)

---

### id

• **id**: `UniqueId`

#### Implementation of

[IProblems](../interfaces/molecule.model.IProblems).[id](../interfaces/molecule.model.IProblems#id)

#### Defined in

[model/problems.tsx:43](https://github.com/DTStack/molecule/blob/927b7d39/src/model/problems.tsx#L43)

---

### name

• **name**: `string`

#### Implementation of

[IProblems](../interfaces/molecule.model.IProblems).[name](../interfaces/molecule.model.IProblems#name)

#### Defined in

[model/problems.tsx:44](https://github.com/DTStack/molecule/blob/927b7d39/src/model/problems.tsx#L44)

---

### show

• **show**: `boolean`

#### Implementation of

[IProblems](../interfaces/molecule.model.IProblems).[show](../interfaces/molecule.model.IProblems#show)

#### Defined in

[model/problems.tsx:46](https://github.com/DTStack/molecule/blob/927b7d39/src/model/problems.tsx#L46)
