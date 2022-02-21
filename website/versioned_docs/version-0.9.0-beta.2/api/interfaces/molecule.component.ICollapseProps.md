---
id: 'molecule.component.ICollapseProps'
title: 'Interface: ICollapseProps'
sidebar_label: 'ICollapseProps'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[component](../namespaces/molecule.component).ICollapseProps

## Hierarchy

-   `HTMLElementProps`

    ↳ **`ICollapseProps`**

## Indexable

▪ [key: `string`]: `any`

## Properties

### className

• `Optional` **className**: `string`

#### Inherited from

HTMLElementProps.className

#### Defined in

[src/common/types.ts:4](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/types.ts#L4)

---

### data

• `Optional` **data**: `ICollapseItem`[]

#### Defined in

[src/components/collapse/index.tsx:43](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/collapse/index.tsx#L43)

---

### role

• `Optional` **role**: `string`

#### Inherited from

HTMLElementProps.role

#### Defined in

[src/common/types.ts:5](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/types.ts#L5)

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

### onCollapseChange

▸ `Optional` **onCollapseChange**(`keys`): `void`

#### Parameters

| Name   | Type    |
| :----- | :------ |
| `keys` | `Key`[] |

#### Returns

`void`

#### Defined in

[src/components/collapse/index.tsx:44](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/collapse/index.tsx#L44)

---

### onToolbarClick

▸ `Optional` **onToolbarClick**(`item`, `parentPanel`): `void`

#### Parameters

| Name          | Type                                                                    |
| :------------ | :---------------------------------------------------------------------- |
| `item`        | [`IActionBarItemProps`](molecule.component.IActionBarItemProps)<`any`\> |
| `parentPanel` | `ICollapseItem`                                                         |

#### Returns

`void`

#### Defined in

[src/components/collapse/index.tsx:45](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/collapse/index.tsx#L45)
