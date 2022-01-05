---
id: 'molecule.model.IEditorGroup'
title: 'Interface: IEditorGroup<E, T>'
sidebar_label: 'IEditorGroup'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[model](../namespaces/molecule.model).IEditorGroup

## Type parameters

| Name | Type  |
| :--- | :---- |
| `E`  | `any` |
| `T`  | `any` |

## Hierarchy

-   [`ITabsProps`](molecule.component.ITabsProps)<`T`\>

    ↳ **`IEditorGroup`**

## Implemented by

-   [`EditorGroupModel`](../classes/molecule.model.EditorGroupModel)

## Properties

### actions

• `Optional` **actions**: [`IEditorActionsProps`](molecule.model.IEditorActionsProps)[]

#### Defined in

[src/model/workbench/editor.ts:53](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/editor.ts#L53)

---

### activeTab

• `Optional` **activeTab**: `UniqueId`

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[activeTab](molecule.component.ITabsProps#activetab)

#### Defined in

[src/components/tabs/index.tsx:33](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/index.tsx#L33)

---

### className

• `Optional` **className**: `string`

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[className](molecule.component.ITabsProps#classname)

#### Defined in

[src/components/tabs/index.tsx:21](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/index.tsx#L21)

---

### closable

• `Optional` **closable**: `boolean`

**`deprecated`** For now, we don't need to control the global closable

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[closable](molecule.component.ITabsProps#closable)

#### Defined in

[src/components/tabs/index.tsx:27](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/index.tsx#L27)

---

### data

• `Optional` **data**: [`ITabProps`](molecule.component.ITabProps)<`any`, `any`\>[]

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[data](molecule.component.ITabsProps#data)

#### Defined in

[src/components/tabs/index.tsx:32](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/index.tsx#L32)

---

### editable

• `Optional` **editable**: `boolean`

**`deprecated`** For now, we don't need to control the global editable

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[editable](molecule.component.ITabsProps#editable)

#### Defined in

[src/components/tabs/index.tsx:31](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/index.tsx#L31)

---

### editorInstance

• `Optional` **editorInstance**: `E`

#### Defined in

[src/model/workbench/editor.ts:55](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/editor.ts#L55)

---

### id

• **id**: `UniqueId`

#### Defined in

[src/model/workbench/editor.ts:48](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/editor.ts#L48)

---

### menu

• `Optional` **menu**: [`IMenuItemProps`](molecule.component.IMenuItemProps)[]

#### Defined in

[src/model/workbench/editor.ts:54](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/editor.ts#L54)

---

### role

• `Optional` **role**: `string`

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[role](molecule.component.ITabsProps#role)

#### Defined in

[src/components/tabs/index.tsx:23](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/index.tsx#L23)

---

### style

• `Optional` **style**: `CSSProperties`

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[style](molecule.component.ITabsProps#style)

#### Defined in

[src/components/tabs/index.tsx:22](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/index.tsx#L22)

---

### tab

• `Optional` **tab**: [`IEditorTab`](molecule.model.IEditorTab)<`T`\>

Current editor group tab

#### Defined in

[src/model/workbench/editor.ts:52](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/editor.ts#L52)

---

### type

• `Optional` **type**: [`TabsType`](../namespaces/molecule.component#tabstype)

Default is line

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[type](molecule.component.ITabsProps#type)

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

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[onCloseTab](molecule.component.ITabsProps#onclosetab)

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

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[onContextMenu](molecule.component.ITabsProps#oncontextmenu)

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

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[onMoveTab](molecule.component.ITabsProps#onmovetab)

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

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[onSelectTab](molecule.component.ITabsProps#onselecttab)

#### Defined in

[src/components/tabs/index.tsx:41](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tabs/index.tsx#L41)
