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

-   [`ITabsProps`](molecule.component.ITabsProps)

    ↳ **`IEditorGroup`**

## Implemented by

-   [`EditorGroupModel`](../classes/molecule.model.EditorGroupModel)

## Properties

### actions

• `Optional` **actions**: [`IEditorActionsProps`](molecule.model.IEditorActionsProps)[]

#### Defined in

[model/workbench/editor.ts:54](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/editor.ts#L54)

---

### activeTab

• `Optional` **activeTab**: `UniqueId`

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[activeTab](molecule.component.ITabsProps#activetab)

#### Defined in

[components/tabs/index.tsx:36](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/index.tsx#L36)

---

### className

• `Optional` **className**: `string`

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[className](molecule.component.ITabsProps#classname)

#### Defined in

[components/tabs/index.tsx:24](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/index.tsx#L24)

---

### closable

• `Optional` **closable**: `boolean`

**`deprecated`** For now, we don't need to control the global closable

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[closable](molecule.component.ITabsProps#closable)

#### Defined in

[components/tabs/index.tsx:30](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/index.tsx#L30)

---

### data

• `Optional` **data**: [`ITabProps`](molecule.component.ITabProps)<`any`, `any`\>[]

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[data](molecule.component.ITabsProps#data)

#### Defined in

[components/tabs/index.tsx:35](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/index.tsx#L35)

---

### editable

• `Optional` **editable**: `boolean`

**`deprecated`** For now, we don't need to control the global editable

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[editable](molecule.component.ITabsProps#editable)

#### Defined in

[components/tabs/index.tsx:34](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/index.tsx#L34)

---

### editorInstance

• `Optional` **editorInstance**: `E`

#### Defined in

[model/workbench/editor.ts:56](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/editor.ts#L56)

---

### id

• **id**: `UniqueId`

#### Defined in

[model/workbench/editor.ts:49](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/editor.ts#L49)

---

### menu

• `Optional` **menu**: [`IMenuItemProps`](molecule.component.IMenuItemProps)[]

#### Defined in

[model/workbench/editor.ts:55](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/editor.ts#L55)

---

### role

• `Optional` **role**: `string`

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[role](molecule.component.ITabsProps#role)

#### Defined in

[components/tabs/index.tsx:26](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/index.tsx#L26)

---

### style

• `Optional` **style**: `CSSProperties`

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[style](molecule.component.ITabsProps#style)

#### Defined in

[components/tabs/index.tsx:25](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/index.tsx#L25)

---

### tab

• `Optional` **tab**: [`IEditorTab`](molecule.model.IEditorTab)<`T`\>

Current editor group tab

#### Defined in

[model/workbench/editor.ts:53](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/editor.ts#L53)

---

### type

• `Optional` **type**: [`TabsType`](../namespaces/molecule.component#tabstype)

Default is line

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[type](molecule.component.ITabsProps#type)

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

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[onCloseTab](molecule.component.ITabsProps#onclosetab)

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

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[onContextMenu](molecule.component.ITabsProps#oncontextmenu)

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

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[onMoveTab](molecule.component.ITabsProps#onmovetab)

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

#### Inherited from

[ITabsProps](molecule.component.ITabsProps).[onSelectTab](molecule.component.ITabsProps#onselecttab)

#### Defined in

[components/tabs/index.tsx:44](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tabs/index.tsx#L44)
