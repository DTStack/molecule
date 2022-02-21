---
id: 'molecule.component.IBreadcrumbProps'
title: 'Interface: IBreadcrumbProps'
sidebar_label: 'IBreadcrumbProps'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[component](../namespaces/molecule.component).IBreadcrumbProps

## Hierarchy

-   `HTMLElementProps`

    ↳ **`IBreadcrumbProps`**

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

### role

• `Optional` **role**: `string`

#### Inherited from

HTMLElementProps.role

#### Defined in

[src/common/types.ts:5](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/types.ts#L5)

---

### routes

• **routes**: [`IBreadcrumbItemProps`](molecule.component.IBreadcrumbItemProps)[]

#### Defined in

[src/components/breadcrumb/index.tsx:23](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/breadcrumb/index.tsx#L23)

---

### separator

• `Optional` **separator**: `ReactNode`

#### Defined in

[src/components/breadcrumb/index.tsx:24](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/breadcrumb/index.tsx#L24)

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

▸ `Optional` **onClick**(`event`, `item?`): `void`

#### Parameters

| Name    | Type                                                              |
| :------ | :---------------------------------------------------------------- |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\>                            |
| `item?` | [`IBreadcrumbItemProps`](molecule.component.IBreadcrumbItemProps) |

#### Returns

`void`

#### Defined in

[src/components/breadcrumb/index.tsx:25](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/breadcrumb/index.tsx#L25)
