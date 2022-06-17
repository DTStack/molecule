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

[components/tabs/index.tsx:35](https://github.com/DTStack/molecule/blob/3e6bc450/src/components/tabs/index.tsx#L35)

---

### className

• `Optional` **className**: `string`

#### Defined in

[components/tabs/index.tsx:23](https://github.com/DTStack/molecule/blob/3e6bc450/src/components/tabs/index.tsx#L23)

---

### closable

• `Optional` **closable**: `boolean`

**`deprecated`** For now, we don't need to control the global closable

#### Defined in

[components/tabs/index.tsx:29](https://github.com/DTStack/molecule/blob/3e6bc450/src/components/tabs/index.tsx#L29)

---

### data

• `Optional` **data**: [`ITabProps`](molecule.component.ITabProps)<`any`, `any`\>[]

#### Defined in

[components/tabs/index.tsx:34](https://github.com/DTStack/molecule/blob/3e6bc450/src/components/tabs/index.tsx#L34)

---

### editable

• `Optional` **editable**: `boolean`

**`deprecated`** For now, we don't need to control the global editable

#### Defined in

[components/tabs/index.tsx:33](https://github.com/DTStack/molecule/blob/3e6bc450/src/components/tabs/index.tsx#L33)

---

### role

• `Optional` **role**: `string`

#### Defined in

[components/tabs/index.tsx:25](https://github.com/DTStack/molecule/blob/3e6bc450/src/components/tabs/index.tsx#L25)

---

### style

• `Optional` **style**: `CSSProperties`

#### Defined in

[components/tabs/index.tsx:24](https://github.com/DTStack/molecule/blob/3e6bc450/src/components/tabs/index.tsx#L24)

---

### type

• `Optional` **type**: [`TabsType`](../namespaces/molecule.component#tabstype)

Default is line

#### Defined in

[components/tabs/index.tsx:39](https://github.com/DTStack/molecule/blob/3e6bc450/src/components/tabs/index.tsx#L39)

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

[components/tabs/index.tsx:40](https://github.com/DTStack/molecule/blob/3e6bc450/src/components/tabs/index.tsx#L40)

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

[components/tabs/index.tsx:41](https://github.com/DTStack/molecule/blob/3e6bc450/src/components/tabs/index.tsx#L41)

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

[components/tabs/index.tsx:42](https://github.com/DTStack/molecule/blob/3e6bc450/src/components/tabs/index.tsx#L42)

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

[components/tabs/index.tsx:43](https://github.com/DTStack/molecule/blob/3e6bc450/src/components/tabs/index.tsx#L43)
