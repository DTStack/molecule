---
id: 'molecule.component.ITabProps'
title: 'Interface: ITabProps<T, P>'
sidebar_label: 'ITabProps'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[component](../namespaces/molecule.component).ITabProps

## Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |
| `P`  | `any` |

## Hierarchy

-   `ITabEvent`

    ↳ **`ITabProps`**

## Properties

### active

• `Optional` **active**: `boolean`

#### Defined in

[src/components/tabs/tab.tsx:30](https://github.com/DTStack/molecule/blob/1b0aa04/src/components/tabs/tab.tsx#L30)

---

### closable

• `Optional` **closable**: `boolean`

#### Defined in

[src/components/tabs/tab.tsx:31](https://github.com/DTStack/molecule/blob/1b0aa04/src/components/tabs/tab.tsx#L31)

---

### data

• `Optional` **data**: `T`

#### Defined in

[src/components/tabs/tab.tsx:38](https://github.com/DTStack/molecule/blob/1b0aa04/src/components/tabs/tab.tsx#L38)

---

### editable

• `Optional` **editable**: `boolean`

#### Defined in

[src/components/tabs/tab.tsx:32](https://github.com/DTStack/molecule/blob/1b0aa04/src/components/tabs/tab.tsx#L32)

---

### icon

• `Optional` **icon**: `string` \| `Element`

#### Defined in

[src/components/tabs/tab.tsx:33](https://github.com/DTStack/molecule/blob/1b0aa04/src/components/tabs/tab.tsx#L33)

---

### id

• `Optional` **id**: `string`

#### Defined in

[src/components/tabs/tab.tsx:35](https://github.com/DTStack/molecule/blob/1b0aa04/src/components/tabs/tab.tsx#L35)

---

### index

• `Optional` **index**: `number`

#### Defined in

[src/components/tabs/tab.tsx:34](https://github.com/DTStack/molecule/blob/1b0aa04/src/components/tabs/tab.tsx#L34)

---

### name

• `Optional` **name**: `string`

#### Defined in

[src/components/tabs/tab.tsx:36](https://github.com/DTStack/molecule/blob/1b0aa04/src/components/tabs/tab.tsx#L36)

---

### renderPane

• `Optional` **renderPane**: `ReactNode` \| (`item`: `P`) => `ReactNode`

#### Defined in

[src/components/tabs/tab.tsx:37](https://github.com/DTStack/molecule/blob/1b0aa04/src/components/tabs/tab.tsx#L37)

## Methods

### onCloseTab

▸ `Optional` **onCloseTab**(`key?`): `void`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `key?` | `string` |

#### Returns

`void`

#### Inherited from

ITabEvent.onCloseTab

#### Defined in

[src/components/tabs/tab.tsx:22](https://github.com/DTStack/molecule/blob/1b0aa04/src/components/tabs/tab.tsx#L22)

---

### onContextMenu

▸ `Optional` **onContextMenu**<`T`\>(`event`, `tab`): `void`

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

#### Parameters

| Name    | Type                                                     |
| :------ | :------------------------------------------------------- |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\>                   |
| `tab`   | [`ITabProps`](molecule.component.ITabProps)<`T`, `any`\> |

#### Returns

`void`

#### Inherited from

ITabEvent.onContextMenu

#### Defined in

[src/components/tabs/tab.tsx:24](https://github.com/DTStack/molecule/blob/1b0aa04/src/components/tabs/tab.tsx#L24)

---

### onMoveTab

▸ `Optional` **onMoveTab**(`dragIndex`, `hoverIndex`): `void`

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `dragIndex`  | `number` |
| `hoverIndex` | `number` |

#### Returns

`void`

#### Inherited from

ITabEvent.onMoveTab

#### Defined in

[src/components/tabs/tab.tsx:21](https://github.com/DTStack/molecule/blob/1b0aa04/src/components/tabs/tab.tsx#L21)

---

### onSelectTab

▸ `Optional` **onSelectTab**(`key?`): `void`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `key?` | `string` |

#### Returns

`void`

#### Inherited from

ITabEvent.onSelectTab

#### Defined in

[src/components/tabs/tab.tsx:23](https://github.com/DTStack/molecule/blob/1b0aa04/src/components/tabs/tab.tsx#L23)
