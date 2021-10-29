---
id: 'molecule.IStatusBarItem'
title: 'Interface: IStatusBarItem<T>'
sidebar_label: 'IStatusBarItem'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IStatusBarItem

## Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

## Hierarchy

-   `HTMLElementProps`

    ↳ **`IStatusBarItem`**

    ↳↳ [`INotification`](molecule.INotification)

## Properties

### className

• `Optional` **className**: `string`

#### Inherited from

HTMLElementProps.className

#### Defined in

[src/typings/index.d.ts:12](https://github.com/DTStack/molecule/blob/22a59c7/src/typings/index.d.ts#L12)

---

### data

• `Optional` **data**: `T`

#### Defined in

[src/model/workbench/statusBar.tsx:12](https://github.com/DTStack/molecule/blob/22a59c7/src/model/workbench/statusBar.tsx#L12)

---

### id

• **id**: `string`

#### Overrides

HTMLElementProps.id

#### Defined in

[src/model/workbench/statusBar.tsx:10](https://github.com/DTStack/molecule/blob/22a59c7/src/model/workbench/statusBar.tsx#L10)

---

### name

• `Optional` **name**: `string`

#### Defined in

[src/model/workbench/statusBar.tsx:15](https://github.com/DTStack/molecule/blob/22a59c7/src/model/workbench/statusBar.tsx#L15)

---

### sortIndex

• `Optional` **sortIndex**: `number`

#### Defined in

[src/model/workbench/statusBar.tsx:11](https://github.com/DTStack/molecule/blob/22a59c7/src/model/workbench/statusBar.tsx#L11)

---

### style

• `Optional` **style**: `CSSProperties`

#### Inherited from

HTMLElementProps.style

#### Defined in

[src/typings/index.d.ts:11](https://github.com/DTStack/molecule/blob/22a59c7/src/typings/index.d.ts#L11)

---

### title

• `Optional` **title**: `string`

#### Inherited from

HTMLElementProps.title

#### Defined in

[src/typings/index.d.ts:10](https://github.com/DTStack/molecule/blob/22a59c7/src/typings/index.d.ts#L10)

## Methods

### onClick

▸ `Optional` **onClick**(`e`, `item?`): `any`

#### Parameters

| Name    | Type                                                |
| :------ | :-------------------------------------------------- |
| `e`     | `MouseEvent`<`Element`, `MouseEvent`\>              |
| `item?` | [`IStatusBarItem`](molecule.IStatusBarItem)<`any`\> |

#### Returns

`any`

#### Defined in

[src/model/workbench/statusBar.tsx:13](https://github.com/DTStack/molecule/blob/22a59c7/src/model/workbench/statusBar.tsx#L13)

---

### render

▸ `Optional` **render**(`item`): `ReactNode`

#### Parameters

| Name   | Type                                                |
| :----- | :-------------------------------------------------- |
| `item` | [`IStatusBarItem`](molecule.IStatusBarItem)<`any`\> |

#### Returns

`ReactNode`

#### Defined in

[src/model/workbench/statusBar.tsx:14](https://github.com/DTStack/molecule/blob/22a59c7/src/model/workbench/statusBar.tsx#L14)
