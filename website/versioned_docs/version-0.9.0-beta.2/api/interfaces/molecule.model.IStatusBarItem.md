---
id: 'molecule.model.IStatusBarItem'
title: 'Interface: IStatusBarItem<T>'
sidebar_label: 'IStatusBarItem'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[model](../namespaces/molecule.model).IStatusBarItem

## Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

## Hierarchy

-   `HTMLElementProps`

    ↳ **`IStatusBarItem`**

    ↳↳ [`INotification`](molecule.model.INotification)

## Properties

### className

• `Optional` **className**: `string`

#### Inherited from

HTMLElementProps.className

#### Defined in

[src/common/types.ts:4](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/types.ts#L4)

---

### data

• `Optional` **data**: `T`

#### Defined in

[src/model/workbench/statusBar.tsx:13](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/statusBar.tsx#L13)

---

### id

• **id**: `UniqueId`

#### Defined in

[src/model/workbench/statusBar.tsx:11](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/statusBar.tsx#L11)

---

### name

• `Optional` **name**: `string`

#### Defined in

[src/model/workbench/statusBar.tsx:16](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/statusBar.tsx#L16)

---

### role

• `Optional` **role**: `string`

#### Inherited from

HTMLElementProps.role

#### Defined in

[src/common/types.ts:5](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/types.ts#L5)

---

### sortIndex

• `Optional` **sortIndex**: `number`

#### Defined in

[src/model/workbench/statusBar.tsx:12](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/statusBar.tsx#L12)

---

### style

• `Optional` **style**: `CSSProperties`

#### Inherited from

HTMLElementProps.style

#### Defined in

[src/common/types.ts:3](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/types.ts#L3)

---

### title

• `Optional` **title**: `string`

#### Inherited from

HTMLElementProps.title

#### Defined in

[src/common/types.ts:2](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/types.ts#L2)

## Methods

### onClick

▸ `Optional` **onClick**(`e`, `item?`): `any`

#### Parameters

| Name    | Type                                                      |
| :------ | :-------------------------------------------------------- |
| `e`     | `MouseEvent`<`Element`, `MouseEvent`\>                    |
| `item?` | [`IStatusBarItem`](molecule.model.IStatusBarItem)<`any`\> |

#### Returns

`any`

#### Defined in

[src/model/workbench/statusBar.tsx:14](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/statusBar.tsx#L14)

---

### render

▸ `Optional` **render**(`item`): `ReactNode`

#### Parameters

| Name   | Type                                                      |
| :----- | :-------------------------------------------------------- |
| `item` | [`IStatusBarItem`](molecule.model.IStatusBarItem)<`any`\> |

#### Returns

`ReactNode`

#### Defined in

[src/model/workbench/statusBar.tsx:15](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/statusBar.tsx#L15)
