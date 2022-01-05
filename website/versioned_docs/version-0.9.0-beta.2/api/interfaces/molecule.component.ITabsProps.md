---
id: 'molecule.component.ITabsProps'
title: 'Interface: ITabsProps<T>'
sidebar_label: 'ITabsProps'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[component](../namespaces/molecule.component).ITabsProps

TODO: Get rid of the generic and remove the ComponentProps

## Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

## Hierarchy

-   `ComponentProps`<`any`\>

    ↳ **`ITabsProps`**

    ↳↳ [`IEditorGroup`](molecule.model.IEditorGroup)

## Properties

### activeTab

• `Optional` **activeTab**: `UniqueId`

#### Defined in

[src/components/tabs/index.tsx:33](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/index.tsx#L33)

---

### className

• `Optional` **className**: `string`

#### Defined in

[src/components/tabs/index.tsx:21](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/index.tsx#L21)

---

### closable

• `Optional` **closable**: `boolean`

**`deprecated`** For now, we don't need to control the global closable

#### Defined in

[src/components/tabs/index.tsx:27](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/index.tsx#L27)

---

### data

• `Optional` **data**: [`ITabProps`](molecule.component.ITabProps)<`any`, `any`\>[]

#### Defined in

[src/components/tabs/index.tsx:32](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/index.tsx#L32)

---

### editable

• `Optional` **editable**: `boolean`

**`deprecated`** For now, we don't need to control the global editable

#### Defined in

[src/components/tabs/index.tsx:31](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/index.tsx#L31)

---

### role

• `Optional` **role**: `string`

#### Defined in

[src/components/tabs/index.tsx:23](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/index.tsx#L23)

---

### style

• `Optional` **style**: `CSSProperties`

#### Defined in

[src/components/tabs/index.tsx:22](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/index.tsx#L22)

---

### type

• `Optional` **type**: [`TabsType`](../namespaces/molecule.component#tabstype)

Default is line

#### Defined in

[src/components/tabs/index.tsx:37](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/index.tsx#L37)

## Methods

### onCloseTab

▸ `Optional` **onCloseTab**(`key`): `void`

#### Parameters

| Name  | Type       |
| :---- | :--------- |
| `key` | `UniqueId` |

#### Returns

`void`

#### Defined in

[src/components/tabs/index.tsx:38](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/index.tsx#L38)

---

### onContextMenu

▸ `Optional` **onContextMenu**(`e`, `tab`): `void`

#### Parameters

| Name  | Type                                                       |
| :---- | :--------------------------------------------------------- |
| `e`   | `MouseEvent`<`Element`, `MouseEvent`\>                     |
| `tab` | [`ITabProps`](molecule.component.ITabProps)<`any`, `any`\> |

#### Returns

`void`

#### Defined in

[src/components/tabs/index.tsx:39](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/index.tsx#L39)

---

### onMoveTab

▸ `Optional` **onMoveTab**(`tabs`): `void`

#### Parameters

| Name   | Type                                                         |
| :----- | :----------------------------------------------------------- |
| `tabs` | [`ITabProps`](molecule.component.ITabProps)<`any`, `any`\>[] |

#### Returns

`void`

#### Defined in

[src/components/tabs/index.tsx:40](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/index.tsx#L40)

---

### onSelectTab

▸ `Optional` **onSelectTab**(`key`): `void`

#### Parameters

| Name  | Type       |
| :---- | :--------- |
| `key` | `UniqueId` |

#### Returns

`void`

#### Defined in

[src/components/tabs/index.tsx:41](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/index.tsx#L41)
