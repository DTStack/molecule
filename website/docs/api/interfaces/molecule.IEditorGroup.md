---
id: 'molecule.IEditorGroup'
title: 'Interface: IEditorGroup<E, T>'
sidebar_label: 'IEditorGroup'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IEditorGroup

## Type parameters

| Name | Type  |
| :--- | :---- |
| `E`  | `any` |
| `T`  | `any` |

## Hierarchy

-   [`ITabsProps`](molecule.component.ITabsProps)<`T`\>

    ↳ **`IEditorGroup`**

## Properties

### actions

• `Optional` **actions**: `IEditorActionsProps`[]

#### Defined in

[src/model/workbench/editor.ts:59](https://github.com/DTStack/molecule/blob/1b0aa04/src/model/workbench/editor.ts#L59)

---

### activeTab

• `Optional` **activeTab**: `string`

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[activeTab](molecule.component.ITabsProps#activetab)

#### Defined in

[src/components/tabs/index.tsx:21](https://github.com/DTStack/molecule/blob/1b0aa04/src/components/tabs/index.tsx#L21)

---

### className

• `Optional` **className**: `string`

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[className](molecule.component.ITabsProps#classname)

#### Defined in

[src/components/tabs/index.tsx:17](https://github.com/DTStack/molecule/blob/1b0aa04/src/components/tabs/index.tsx#L17)

---

### closable

• `Optional` **closable**: `boolean`

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[closable](molecule.component.ITabsProps#closable)

#### Defined in

[src/components/tabs/index.tsx:18](https://github.com/DTStack/molecule/blob/1b0aa04/src/components/tabs/index.tsx#L18)

---

### data

• `Optional` **data**: [`ITabProps`](molecule.component.ITabProps)<`T`, `any`\>[]

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[data](molecule.component.ITabsProps#data)

#### Defined in

[src/components/tabs/index.tsx:20](https://github.com/DTStack/molecule/blob/1b0aa04/src/components/tabs/index.tsx#L20)

---

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[editable](molecule.component.ITabsProps#editable)

#### Defined in

[src/components/tabs/index.tsx:19](https://github.com/DTStack/molecule/blob/1b0aa04/src/components/tabs/index.tsx#L19)

---

### editorInstance

• `Optional` **editorInstance**: `E`

#### Defined in

[src/model/workbench/editor.ts:61](https://github.com/DTStack/molecule/blob/1b0aa04/src/model/workbench/editor.ts#L61)

---

### id

• `Optional` **id**: `number`

#### Defined in

[src/model/workbench/editor.ts:54](https://github.com/DTStack/molecule/blob/1b0aa04/src/model/workbench/editor.ts#L54)

---

### menu

• `Optional` **menu**: [`IMenuItemProps`](molecule.component.IMenuItemProps)[]

#### Defined in

[src/model/workbench/editor.ts:60](https://github.com/DTStack/molecule/blob/1b0aa04/src/model/workbench/editor.ts#L60)

---

### style

• `Optional` **style**: `CSSProperties`

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[style](molecule.component.ITabsProps#style)

#### Defined in

[src/components/tabs/index.tsx:23](https://github.com/DTStack/molecule/blob/1b0aa04/src/components/tabs/index.tsx#L23)

---

### tab

• `Optional` **tab**: `IEditorTab`<`T`\>

Current editor group tab

#### Defined in

[src/model/workbench/editor.ts:58](https://github.com/DTStack/molecule/blob/1b0aa04/src/model/workbench/editor.ts#L58)

---

### type

• `Optional` **type**: [`TabsType`](../namespaces/molecule.component#tabstype)

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[type](molecule.component.ITabsProps#type)

#### Defined in

[src/components/tabs/index.tsx:22](https://github.com/DTStack/molecule/blob/1b0aa04/src/components/tabs/index.tsx#L22)

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

[ITabsProps](molecule.component.ITabsProps).[onCloseTab](molecule.component.ITabsProps#onclosetab)

#### Defined in

[src/components/tabs/index.tsx:24](https://github.com/DTStack/molecule/blob/1b0aa04/src/components/tabs/index.tsx#L24)

---

### onMoveTab

▸ `Optional` **onMoveTab**(`tabs`): `void`

#### Parameters

| Name   | Type                                                       |
| :----- | :--------------------------------------------------------- |
| `tabs` | [`ITabProps`](molecule.component.ITabProps)<`T`, `any`\>[] |

#### Returns

`void`

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[onMoveTab](molecule.component.ITabsProps#onmovetab)

#### Defined in

[src/components/tabs/index.tsx:25](https://github.com/DTStack/molecule/blob/1b0aa04/src/components/tabs/index.tsx#L25)

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

[ITabsProps](molecule.component.ITabsProps).[onSelectTab](molecule.component.ITabsProps#onselecttab)

#### Defined in

[src/components/tabs/index.tsx:26](https://github.com/DTStack/molecule/blob/1b0aa04/src/components/tabs/index.tsx#L26)
