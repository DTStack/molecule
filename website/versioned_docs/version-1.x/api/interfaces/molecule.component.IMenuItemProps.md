---
id: 'molecule.component.IMenuItemProps'
title: 'Interface: IMenuItemProps'
sidebar_label: 'IMenuItemProps'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[component](../namespaces/molecule.component).IMenuItemProps

## Hierarchy

-   `HTMLElementProps`

    ↳ **`IMenuItemProps`**

    ↳↳ [`IActivityMenuItemProps`](molecule.model.IActivityMenuItemProps)

    ↳↳ [`IEditorActionsProps`](molecule.model.IEditorActionsProps)

## Indexable

▪ [key: `string`]: `any`

## Properties

### className

• `Optional` **className**: `string`

#### Inherited from

HTMLElementProps.className

#### Defined in

[common/types.ts:4](https://github.com/DTStack/molecule/blob/927b7d39/src/common/types.ts#L4)

---

### disabled

• `Optional` **disabled**: `boolean`

#### Defined in

[components/menu/menuItem.tsx:26](https://github.com/DTStack/molecule/blob/927b7d39/src/components/menu/menuItem.tsx#L26)

---

### icon

• `Optional` **icon**: `string` \| `Element`

The name of icon

#### Defined in

[components/menu/menuItem.tsx:20](https://github.com/DTStack/molecule/blob/927b7d39/src/components/menu/menuItem.tsx#L20)

---

### id

• **id**: `UniqueId`

#### Defined in

[components/menu/menuItem.tsx:16](https://github.com/DTStack/molecule/blob/927b7d39/src/components/menu/menuItem.tsx#L16)

---

### keybinding

• `Optional` **keybinding**: `string`

The description of keybinding
example: ⇧⌘P

#### Defined in

[components/menu/menuItem.tsx:31](https://github.com/DTStack/molecule/blob/927b7d39/src/components/menu/menuItem.tsx#L31)

---

### name

• `Optional` **name**: `string`

Item Name

#### Defined in

[components/menu/menuItem.tsx:25](https://github.com/DTStack/molecule/blob/927b7d39/src/components/menu/menuItem.tsx#L25)

---

### role

• `Optional` **role**: `string`

#### Inherited from

HTMLElementProps.role

#### Defined in

[common/types.ts:5](https://github.com/DTStack/molecule/blob/927b7d39/src/common/types.ts#L5)

---

### sortIndex

• `Optional` **sortIndex**: `number`

#### Defined in

[components/menu/menuItem.tsx:37](https://github.com/DTStack/molecule/blob/927b7d39/src/components/menu/menuItem.tsx#L37)

---

### style

• `Optional` **style**: `CSSProperties`

#### Inherited from

HTMLElementProps.style

#### Defined in

[common/types.ts:3](https://github.com/DTStack/molecule/blob/927b7d39/src/common/types.ts#L3)

---

### title

• `Optional` **title**: `string`

#### Inherited from

HTMLElementProps.title

#### Defined in

[common/types.ts:2](https://github.com/DTStack/molecule/blob/927b7d39/src/common/types.ts#L2)

---

### type

• `Optional` **type**: `"divider"`

#### Defined in

[components/menu/menuItem.tsx:21](https://github.com/DTStack/molecule/blob/927b7d39/src/components/menu/menuItem.tsx#L21)

## Methods

### onClick

▸ `Optional` **onClick**(`e`, `item`): `void`

#### Parameters

| Name   | Type                                                  |
| :----- | :---------------------------------------------------- |
| `e`    | `MouseEvent`<`Element`, `MouseEvent`\>                |
| `item` | [`IMenuItemProps`](molecule.component.IMenuItemProps) |

#### Returns

`void`

#### Defined in

[components/menu/menuItem.tsx:36](https://github.com/DTStack/molecule/blob/927b7d39/src/components/menu/menuItem.tsx#L36)

---

### render

▸ `Optional` **render**(`data`): `ReactNode`

Custom render

#### Parameters

| Name   | Type                                                  |
| :----- | :---------------------------------------------------- |
| `data` | [`IMenuItemProps`](molecule.component.IMenuItemProps) |

#### Returns

`ReactNode`

#### Defined in

[components/menu/menuItem.tsx:35](https://github.com/DTStack/molecule/blob/927b7d39/src/components/menu/menuItem.tsx#L35)
