---
id: 'molecule.component.ITabsProps'
title: 'Interface: ITabsProps'
sidebar_label: 'ITabsProps'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[component](../namespaces/molecule.component).ITabsProps

TODO: Get rid of the ComponentProps in next version

## Hierarchy

-   `ComponentProps`<`any`\>

    ↳ **`ITabsProps`**

    ↳↳ [`IEditorGroup`](molecule.model.IEditorGroup)

## Properties

### activeTab

• `Optional` **activeTab**: `UniqueId`

#### Defined in

[components/tabs/index.tsx:36](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/index.tsx#L36)

---

### className

• `Optional` **className**: `string`

#### Defined in

[components/tabs/index.tsx:24](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/index.tsx#L24)

---

### closable

• `Optional` **closable**: `boolean`

**`deprecated`** For now, we don't need to control the global closable

#### Defined in

[components/tabs/index.tsx:30](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/index.tsx#L30)

---

### data

• `Optional` **data**: [`ITabProps`](molecule.component.ITabProps)<`any`, `any`\>[]

#### Defined in

[components/tabs/index.tsx:35](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/index.tsx#L35)

---

### editable

• `Optional` **editable**: `boolean`

**`deprecated`** For now, we don't need to control the global editable

#### Defined in

[components/tabs/index.tsx:34](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/index.tsx#L34)

---

### role

• `Optional` **role**: `string`

#### Defined in

[components/tabs/index.tsx:26](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/index.tsx#L26)

---

### style

• `Optional` **style**: `CSSProperties`

#### Defined in

[components/tabs/index.tsx:25](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/index.tsx#L25)

---

### type

• `Optional` **type**: [`TabsType`](../namespaces/molecule.component#tabstype)

Default is line

#### Defined in

[components/tabs/index.tsx:40](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/index.tsx#L40)

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

[components/tabs/index.tsx:41](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/index.tsx#L41)

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

[components/tabs/index.tsx:42](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/index.tsx#L42)

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

[components/tabs/index.tsx:43](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/index.tsx#L43)

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

[components/tabs/index.tsx:44](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/index.tsx#L44)
