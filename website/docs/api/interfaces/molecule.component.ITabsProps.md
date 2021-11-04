---
id: 'molecule.component.ITabsProps'
title: 'Interface: ITabsProps<T>'
sidebar_label: 'ITabsProps'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[component](../namespaces/molecule.component).ITabsProps

## Type parameters

| Name |
| :--- |
| `T`  |

## Hierarchy

-   `ComponentProps`<`any`\>

    ↳ **`ITabsProps`**

    ↳↳ [`IEditorGroup`](molecule.IEditorGroup)

## Properties

### activeTab

• `Optional` **activeTab**: `string`

#### Defined in

[src/components/tabs/index.tsx:21](https://github.com/DTStack/molecule/blob/b675cb9/src/components/tabs/index.tsx#L21)

---

### className

• `Optional` **className**: `string`

#### Defined in

[src/components/tabs/index.tsx:17](https://github.com/DTStack/molecule/blob/b675cb9/src/components/tabs/index.tsx#L17)

---

### closable

• `Optional` **closable**: `boolean`

#### Defined in

[src/components/tabs/index.tsx:18](https://github.com/DTStack/molecule/blob/b675cb9/src/components/tabs/index.tsx#L18)

---

### data

• `Optional` **data**: [`ITabProps`](molecule.component.ITabProps)<`T`, `any`\>[]

#### Defined in

[src/components/tabs/index.tsx:20](https://github.com/DTStack/molecule/blob/b675cb9/src/components/tabs/index.tsx#L20)

---

### editable

• `Optional` **editable**: `boolean`

#### Defined in

[src/components/tabs/index.tsx:19](https://github.com/DTStack/molecule/blob/b675cb9/src/components/tabs/index.tsx#L19)

---

### style

• `Optional` **style**: `CSSProperties`

#### Defined in

[src/components/tabs/index.tsx:23](https://github.com/DTStack/molecule/blob/b675cb9/src/components/tabs/index.tsx#L23)

---

### type

• `Optional` **type**: [`TabsType`](../namespaces/molecule.component#tabstype)

#### Defined in

[src/components/tabs/index.tsx:22](https://github.com/DTStack/molecule/blob/b675cb9/src/components/tabs/index.tsx#L22)

## Methods

### onCloseTab

▸ `Optional` **onCloseTab**(`key?`): `void`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `key?` | `string` |

#### Returns

`void`

#### Defined in

[src/components/tabs/index.tsx:24](https://github.com/DTStack/molecule/blob/b675cb9/src/components/tabs/index.tsx#L24)

---

### onMoveTab

▸ `Optional` **onMoveTab**(`tabs`): `void`

#### Parameters

| Name   | Type                                                       |
| :----- | :--------------------------------------------------------- |
| `tabs` | [`ITabProps`](molecule.component.ITabProps)<`T`, `any`\>[] |

#### Returns

`void`

#### Defined in

[src/components/tabs/index.tsx:25](https://github.com/DTStack/molecule/blob/b675cb9/src/components/tabs/index.tsx#L25)

---

### onSelectTab

▸ `Optional` **onSelectTab**(`key?`): `void`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `key?` | `string` |

#### Returns

`void`

#### Defined in

[src/components/tabs/index.tsx:26](https://github.com/DTStack/molecule/blob/b675cb9/src/components/tabs/index.tsx#L26)
