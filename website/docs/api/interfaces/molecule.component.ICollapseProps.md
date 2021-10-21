---
id: 'molecule.component.ICollapseProps'
title: 'Interface: ICollapseProps'
sidebar_label: 'ICollapseProps'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[component](../namespaces/molecule.component).ICollapseProps

## Properties

### className

• `Optional` **className**: `string`

#### Defined in

[src/components/collapse/index.tsx:44](https://github.com/DTStack/molecule/blob/3c64296/src/components/collapse/index.tsx#L44)

---

### data

• `Optional` **data**: `Partial`<`DataBaseProps`\>[]

#### Defined in

[src/components/collapse/index.tsx:43](https://github.com/DTStack/molecule/blob/3c64296/src/components/collapse/index.tsx#L43)

## Methods

### onCollapseChange

▸ `Optional` **onCollapseChange**(`keys`): `void`

#### Parameters

| Name   | Type    |
| :----- | :------ |
| `keys` | `Key`[] |

#### Returns

`void`

#### Defined in

[src/components/collapse/index.tsx:45](https://github.com/DTStack/molecule/blob/3c64296/src/components/collapse/index.tsx#L45)

---

### onToolbarClick

▸ `Optional` **onToolbarClick**(`item`, `parentPanel`): `void`

#### Parameters

| Name          | Type                                                                    |
| :------------ | :---------------------------------------------------------------------- |
| `item`        | [`IActionBarItemProps`](molecule.component.IActionBarItemProps)<`any`\> |
| `parentPanel` | `DataBaseProps`                                                         |

#### Returns

`void`

#### Defined in

[src/components/collapse/index.tsx:46](https://github.com/DTStack/molecule/blob/3c64296/src/components/collapse/index.tsx#L46)
