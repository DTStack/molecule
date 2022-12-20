---
id: 'molecule.monaco.Action2'
title: 'Class: Action2'
sidebar_label: 'Action2'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[monaco](../namespaces/molecule.monaco).Action2

## Constructors

### constructor

• **new Action2**(`desc`)

#### Parameters

| Name   | Type                                                     |
| :----- | :------------------------------------------------------- |
| `desc` | `Readonly`<{ `[key: string]`: `any`; `f1`: `boolean` }\> |

#### Defined in

[monaco/action.ts:14](https://github.com/DTStack/molecule/blob/927b7d39/src/monaco/action.ts#L14)

## Properties

### desc

• `Readonly` **desc**: `Readonly`<{ `[key: string]`: `any`; `f1`: `boolean` }\>

---

### ID

▪ `Static` `Readonly` **ID**: `string`

#### Defined in

[monaco/action.ts:13](https://github.com/DTStack/molecule/blob/927b7d39/src/monaco/action.ts#L13)

## Methods

### run

▸ `Abstract` **run**(`accessor`, ...`args`): `any`

#### Parameters

| Name       | Type    |
| :--------- | :------ |
| `accessor` | `any`   |
| `...args`  | `any`[] |

#### Returns

`any`

#### Defined in

[monaco/action.ts:23](https://github.com/DTStack/molecule/blob/927b7d39/src/monaco/action.ts#L23)
