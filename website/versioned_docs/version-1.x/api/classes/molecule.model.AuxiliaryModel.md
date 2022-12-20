---
id: 'molecule.model.AuxiliaryModel'
title: 'Class: AuxiliaryModel'
sidebar_label: 'AuxiliaryModel'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[model](../namespaces/molecule.model).AuxiliaryModel

## Implements

-   [`IAuxiliaryBar`](../interfaces/molecule.model.IAuxiliaryBar)

## Constructors

### constructor

• **new AuxiliaryModel**(`mode?`, `data?`, `current?`, `children?`)

#### Parameters

| Name        | Type                                                                  | Default value |
| :---------- | :-------------------------------------------------------------------- | :------------ |
| `mode`      | [`IAuxiliaryBarMode`](../namespaces/molecule.model#iauxiliarybarmode) | `'default'`   |
| `data`      | [`IAuxiliaryData`](../namespaces/molecule.model#iauxiliarydata)[]     | `[]`          |
| `current?`  | `UniqueId`                                                            | `undefined`   |
| `children?` | `ReactNode`                                                           | `undefined`   |

#### Defined in

[model/workbench/auxiliaryBar.ts:24](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/auxiliaryBar.ts#L24)

## Properties

### children

• **children**: `ReactNode`

#### Implementation of

[IAuxiliaryBar](../interfaces/molecule.model.IAuxiliaryBar).[children](../interfaces/molecule.model.IAuxiliaryBar#children)

#### Defined in

[model/workbench/auxiliaryBar.ts:21](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/auxiliaryBar.ts#L21)

---

### current

• `Optional` **current**: `UniqueId`

#### Implementation of

[IAuxiliaryBar](../interfaces/molecule.model.IAuxiliaryBar).[current](../interfaces/molecule.model.IAuxiliaryBar#current)

#### Defined in

[model/workbench/auxiliaryBar.ts:23](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/auxiliaryBar.ts#L23)

---

### data

• **data**: [`IAuxiliaryData`](../namespaces/molecule.model#iauxiliarydata)[] = `[]`

#### Implementation of

[IAuxiliaryBar](../interfaces/molecule.model.IAuxiliaryBar).[data](../interfaces/molecule.model.IAuxiliaryBar#data)

#### Defined in

[model/workbench/auxiliaryBar.ts:22](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/auxiliaryBar.ts#L22)

---

### mode

• **mode**: [`IAuxiliaryBarMode`](../namespaces/molecule.model#iauxiliarybarmode) = `'default'`

#### Implementation of

[IAuxiliaryBar](../interfaces/molecule.model.IAuxiliaryBar).[mode](../interfaces/molecule.model.IAuxiliaryBar#mode)

#### Defined in

[model/workbench/auxiliaryBar.ts:20](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/auxiliaryBar.ts#L20)
